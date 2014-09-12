<?php

/**
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * @author Stas Fomin <stas-fomin@yandex.ru>
 * @license http://www.gnu.org/copyleft/gpl.html GNU General Public License 2.0 or later
 */

// This extension NEEDS to be decomposed/cleaned.
// Added features:
// * Adds &useskin=XXX to all URLs on the page with &useskin=XXX passed.
// * WikEd. TODO: Make WikEd loading optional (it adds 0.5s script loading time).
// * common.js and editpage.js from ru.wikipedia.org
// * Russian Wikifikator.
// * Some styles + some print styles.
// * Live-Preview-Refresh ability - allows to display the preview of page
//   currently being edited in a separate window, and automatically refresh it
//   each XXX seconds.
// * AJAX function get_category_page_list($cat), which returns the list
//   of pages that are in category $cat.
// Legacy updaters:
// * maintenance/update.php hook which migrates user options from old
//   storage (user.user_options blob) to the user_properties table.

if (!defined('MEDIAWIKI'))
{
?>
<p>This is the CustisScripts extension. To enable it, put </p>
<pre>require_once("$IP/extensions/CustisScripts/CustisScripts.php");</pre>
<p>at the bottom of your LocalSettings.php.</p>
<?php
    exit(1);
}

if (!empty($_REQUEST['action']) && $_REQUEST['action'] === 'upload' &&
    !empty($_FILES['file']['tmp_name']) &&
    substr($_FILES['file']['type'], -15) === '+base64-encoded')
{
    // Handle base64 encoding coming from our paste-html JS
    file_put_contents($_FILES['file']['tmp_name'], base64_decode(file_get_contents($_FILES['file']['tmp_name'])));
    $_FILES['file']['type'] = substr($_FILES['file']['type'], 0, -15);
    $_FILES['file']['size'] = filesize($_FILES['file']['tmp_name']);
}

$wgAjaxExportList[] = 'get_category_page_list';
$wgHooks['BeforePageDisplay'][] = 'wfAddCustisScriptsJS';
$wgHooks['LinkBegin'][] = 'efCustisLinkBeginUseskin';
$wgHooks['LoadExtensionSchemaUpdates'][] = 'efMigrateUserOptions';

$wgExtensionMessagesFiles['CustisScripts'] = __DIR__.'/CustisScripts.i18n.php';

$wgResourceModules['CustisScripts.wikify'] = array(
    'localBasePath' => __DIR__,
    'remoteExtPath' => 'CustisScripts',
    'scripts' => array('wikificator.js', 'wikEd-wikify.js'),
);

$wgResourceModules['CustisScripts.editpage'] = array(
    'localBasePath' => __DIR__,
    'remoteExtPath' => 'CustisScripts',
    'scripts' => array('editpage.js', 'WikEd.js'),
    'dependencies' => array('CustisScripts.wikify'),
);

$wgResourceModules['CustisScripts.common'] = array(
    'localBasePath' => __DIR__,
    'remoteExtPath' => 'CustisScripts',
    'scripts' => array('common.js'),
    'styles' => array('custis.css'),
);

// <Additional action buttons for WikiEditor>
$wgResourceModules['CustisScripts.weButtons'] = array(
    'localBasePath' => __DIR__,
    'remoteExtPath' => 'CustisScripts',
    'scripts' => array('weButtons.js'),
    'messages' => array(
        'filetype-mime-mismatch',
        'pastehtml-webutton',
        'pastehtml-upload-images-as',
        'pastehtml-upload',
        'pastehtml-cancel',
        'pastehtml-upload-error',
        'pastehtml-file-already-uploaded',
        'pastehtml-badfilename',
        'pastehtml-token-error',
        'pastehtml-close',
        'pastehtml-paste-and-press',
        'pastehtml-paste',
        'pastehtml-use-libreoffice',
        'webuttons-underline',
        'webuttons-category',
        'webuttons-blockquote',
        'webuttons-comment',
        'webuttons-wikificator',
    ),
    'dependencies' => array('CustisScripts.wikify', 'ext.wikiEditor.toolbar'),
);
$wgHooks['WikiEditorAddModules'][] = 'weButtons'; // dynamic initialization
$wgHooks['EditPage::showEditForm:initial'][] = 'weButtons'; // hardcoded initialization
function weButtons()
{
    global $wgOut;
    if (in_array('ext.wikiEditor.toolbar', $wgOut->getModules()))
    {
        $wgOut->addModules('CustisScripts.weButtons');
    }
    return true;
}
// </Additional action buttons for WikiEditor>

function wfAddCustisScriptsJS(&$out)
{
    global $wgServer, $wgScriptPath, $wgRequest;
    global $wgMonobookOverrideLeftColumnWidth;
    if ($wgRequest->getVal('useskin'))
    {
        // Disable indexing on URLs with switched skin
        $out->setIndexPolicy('noindex');
    }
    $out->addModules('CustisScripts.common');
    $action = $wgRequest->getVal('action');
    if ($action == 'edit' || $action == 'submit')
    {
        $out->addModules('CustisScripts.editpage');
    }
    if ($wgMonobookOverrideLeftColumnWidth)
    {
        $out->addScript("<style type=\"text/css\" media=\"screen\">
#column-content { margin: 0 0 .6em -".($wgMonobookOverrideLeftColumnWidth+0.2)."em !important; }
#content { margin: 2.8em 0 0 ".($wgMonobookOverrideLeftColumnWidth+0.2)."em !important; }
.portlet { width: ".($wgMonobookOverrideLeftColumnWidth-0.4)."em !important; }
#p-personal { width: 100% !important; }
#p-logo { width: ".$wgMonobookOverrideLeftColumnWidth."em !important; }
#p-logo a, #p-logo a:hover { width: ".($wgMonobookOverrideLeftColumnWidth+0.2)."em !important; }
#p-cactions { left: ".($wgMonobookOverrideLeftColumnWidth-0.4)."em !important; }
</style>\n");
    }
    return true;
}

// Add &useskin=XXX to all URLs on the page with &useskin=XXX passed
function efCustisLinkBeginUseskin($self, $target, &$text, &$customAttribs, &$query, &$options, &$ret)
{
    global $wgRequest, $wgEnableParserCache;
    $sk = $wgRequest->getVal('useskin');
    if ($sk)
    {
        $query['useskin'] = $sk;
        $wgEnableParserCache = false;
    }
    return true;
}

/* Live Refresh hooks */
// TODO move them to a separate extension

$wgHooks['AlternateEdit'][] = 'wfSaveTextboxSession';
$wgHooks['EditPage::showEditForm:initial'][] = 'wfLoadTextboxSession';

function wfSaveTextboxSession($editpage)
{
    global $wgRequest, $wgScriptPath;
    /* Hack */
    if ($wgRequest->getVal('savetextboxsession') && $_SESSION)
    {
        $_SESSION['wpTextbox1'] = $wgRequest->getVal('wpTextbox1');
        $gp = $_GET+$_POST;
        unset($gp['wpTextbox1']);
        unset($gp['savetextboxsession']);
        $gp['loadtextboxsession'] = 1;
        $gp['wpPreview'] = 1;
        $gp['hideEditForm'] = 1;
        header('Cache-Control: no-cache');
        header('Content-Type: text/html; charset: utf-8');
        print "<html><script>\nparent.livePreviewRefresh('$wgScriptPath/index.php?".addslashes(http_build_query($gp))."');\n</script></html>";
        exit;
    }
    /* Another hack */
    if ($wgRequest->getVal('loadtextboxsession'))
    {
        $_SERVER['REQUEST_METHOD'] = 'POST';
    }
    return true;
}

function wfLoadTextboxSession(&$editpage)
{
    global $wgRequest, $wgOut;
    if ($wgRequest->getVal('loadtextboxsession') && $_SESSION['wpTextbox1'])
    {
        if ($editpage->formtype == 'preview')
        {
            header('Cache-Control: no-cache');
            $wgOut->enableClientCache(false);
            // Display live preview:
            $editpage->textbox1 = $_SESSION['wpTextbox1'];
            $editpage->mTokenOk = true;
            $editpage->incompleteForm = false;
            unset($_SESSION['wpTextbox1']);
            $previewText = $editpage->getPreviewText();
            $wgOut->addHTML($previewText);
            $wgOut->output();
            exit;
        }
        else
        {
            unset($_SESSION['wpTextbox1']);
        }
    }
    return true;
}

/* End Live Refresh hooks */

function efcustis_get_subcategories($dbr, $dbkey)
{
    $cat = array();
    $res = $dbr->select(
        array('categorylinks', 'page'),
        array('page_title'),
        array(
            'cl_from=page_id',
            'cl_to' => $dbkey,
            'page_namespace' => NS_CATEGORY
        ),
        __METHOD__
    );
    foreach ($res as $row)
    {
        $cat[] = $row->page_title;
    }
    foreach ($cat as $c)
    {
        $cat = $cat + efcustis_get_subcategories($dbr, $c);
    }
    return $cat;
}

function get_category_page_list($categoryname)
{
    $cattitle = Title::newFromText($categoryname, NS_CATEGORY);
    $dbr = wfGetDB(DB_SLAVE);
    $cat = array($categoryname) + efcustis_get_subcategories($dbr, $cattitle->getDBkey());
    $pages = array();
    $res = $dbr->select(
        array('categorylinks', 'page'),
        array('page_title'),
        array(
            'cl_from=page_id',
            'cl_to' => $cat,
            'page_namespace' => NS_MAIN
        ),
        __METHOD__,
        array('ORDER BY' => 'page_title')
    );
    foreach ($res as $row)
    {
        $pages[] = $row->page_title;
    }
    if (count($pages))
    {
        foreach ($pages as $k => $p)
        {
            $pages[$k] = addcslashes($pages[$k], "'");
        }
        $pages = "['".join("','",$pages)."']";
    }
    else
    {
        $pages = "[]";
    }
    return $pages;
}

/**
 * Legacy functions used to improve 1.16 - 1.18 compatibility
 */

function efMigrateUserOptions($updater = null)
{
    global $wgUpdates, $wgVersion;
    if (version_compare($wgVersion, '1.19', '<'))
    {
        if ($updater)
        {
            $updater->addExtensionUpdate(array('efDoMigrateUserOptions'));
            $updater->addExtensionUpdate(array('efDoGroupLength'));
        }
        else
        {
            $wgUpdates['mysql'][] = 'efDoMigrateUserOptions';
            $wgUpdates['mysql'][] = 'efDoGroupLength';
        }
    }
    return true;
}

function efDoMigrateUserOptions()
{
    $dbw = wfGetDB(DB_MASTER);
    print "Migrating user options... ";

    $res = $dbw->select(
        array( 'user', 'user_properties' ),
        'user_id, user_options',
        array( 'up_user IS NULL' ), __METHOD__, array(),
        array( 'user_properties' => array( 'LEFT JOIN', array( 'up_user=user_id' ) ) )
    );
    $nusers = 0;
    $migrate = array();
    foreach ( $res as $o ) {
        if ( trim( $o->user_options ) ) {
            $nusers++;
            foreach( explode( "\n", $o->user_options ) as $s ) {
                list( $key, $value ) = explode( '=', $s );
                $migrate[] = array(
                    'up_user' => $o->user_id,
                    'up_property' => trim( $key ),
                    'up_value' => trim( $value ),
                );
            }
        }
    }

    $dbw->insert( 'user_properties', $migrate, __METHOD__ );
    print "migrated for $nusers users\n";
}

function efDoGroupLength()
{
    $dbw = wfGetDB(DB_MASTER);
    $dbw->query(
        'ALTER TABLE '.$dbw->tableName('user_groups').
        ' CHANGE ug_group ug_group VARBINARY(32) NOT NULL',
        __FUNCTION__
    );
    $dbw->query(
        'ALTER TABLE '.$dbw->tableName('user_former_groups').
        ' CHANGE ufg_group ufg_group VARBINARY(32) NOT NULL',
        __FUNCTION__
    );
}
