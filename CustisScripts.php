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
// * Russian Wikifikator.
// * Some styles + some print styles.
// * Live-Preview-Refresh ability - allows to display the preview of page
//   currently being edited in a separate window, and automatically refresh it
//   each XXX seconds.
// * AJAX function get_category_page_list($cat), which returns the list
//   of pages that are in category $cat.
// * maintenance/update.php hook which migrates user options from old
//   storage (user.user_option blob) to the user_properties table.

if (!defined('MEDIAWIKI'))
{
?>
<p>This is the CustisScripts extension. To enable it, put </p>
<pre>require_once("$IP/extensions/CustisScripts/CustisScripts.php");</pre>
<p>at the bottom of your LocalSettings.php.</p>
<?php
    exit(1);
}

$wgAjaxExportList[] = 'get_category_page_list';
$wgHooks['BeforePageDisplay'][] = 'wfAddCustisScriptsJS';
$wgHooks['LinkBegin'][] = 'efCustisLinkBeginUseskin';
$wgHooks['LoadExtensionSchemaUpdates'][] = 'efMigrateUserOptions';

function wfAddCustisScriptsJS(&$out)
{
    global $wgServer, $wgScriptPath;
    global $wgMonobookOverrideLeftColumnWidth;
    $html = <<<EOT
<link rel="stylesheet" type="text/css" href="$wgScriptPath/extensions/CustisScripts/custisprint.css" media="print" />
EOT;
    if (!$out->isPrintable())
    {
        $html .= <<<EOT
<script type='text/javascript' src='$wgScriptPath/extensions/CustisScripts/wikificator.js'></script>
<script type='text/javascript' src='$wgScriptPath/extensions/CustisScripts/WikEd.js'></script>
<script type='text/javascript' src='$wgScriptPath/extensions/CustisScripts/common.js'></script>
<link rel="stylesheet" type="text/css" href="$wgScriptPath/extensions/CustisScripts/custis.css" />
EOT;
    }
    if ($wgMonobookOverrideLeftColumnWidth)
    {
        $html .= "<style type=\"text/css\" media=\"screen\">
#column-content { margin: 0 0 .6em -".($wgMonobookOverrideLeftColumnWidth+0.2)."em !important; }
#content { margin: 2.8em 0 0 ".($wgMonobookOverrideLeftColumnWidth+0.2)."em !important; }
.portlet { width: ".($wgMonobookOverrideLeftColumnWidth-0.4)."em !important; }
#p-personal { width: 100% !important; }
#p-logo { width: ".$wgMonobookOverrideLeftColumnWidth."em !important; }
#p-logo a, #p-logo a:hover { width: ".($wgMonobookOverrideLeftColumnWidth+0.2)."em !important; }
#p-cactions { left: ".($wgMonobookOverrideLeftColumnWidth-0.4)."em !important; }
</style>\n";
    }
    $out->addScript($html);
    return true;
}

// Add &useskin=XXX to all URLs on the page with &useskin=XXX passed
function efCustisLinkBeginUseskin($self, $target, &$text, &$customAttribs, &$query, &$options, &$ret)
{
    global $wgRequest;
    $sk = $wgRequest->getVal('useskin');
    if ($sk)
        $query['useskin'] = $sk;
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
        $_SERVER['REQUEST_METHOD'] = 'POST';
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
            unset($_SESSION['wpTextbox1']);
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
    while ($row = $dbr->fetchRow($res))
        $cat[] = $row[page_title];
    $dbr->freeResult($res);
    foreach ($cat as $c)
        $cat = $cat + efcustis_get_subcategories ($dbr, $c);
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
    while ($row = $dbr->fetchRow($res))
        $pages[] = $row[page_title];
    $dbr->freeResult($res);
    if (count($pages))
    {
        foreach ($pages as $k => $p)
            $pages[$k] = addcslashes($pages[$k], "'");
        $pages = "['".join("','",$pages)."']";
    }
    else
        $pages = "[]";
    return $pages;
}

function efMigrateUserOptions($updater = null)
{
    global $wgUpdates;
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
    return true;
}

function efDoMigrateUserOptions()
{
    $dbw = wfGetDB( DB_MASTER );
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
