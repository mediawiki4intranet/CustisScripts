<?php

/*
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * @author Stas Fomin <stas-fomin@yandex.ru>
 * @license http://www.gnu.org/copyleft/gpl.html GNU General Public License 2.0 or later
 */

if (!defined('MEDIAWIKI'))
{
?>
<p>This is the CustisScripts extension. To enable it, put </p>
<pre>require_once("$IP/extensions/CustisScripts/CustisScripts.php");</pre>
<p>at the bottom of your LocalSettings.php.</p>
<?php
    exit(1);
}

function wfAddCustisScriptsJS(&$out)
{
    global $wgServer, $wgScriptPath;
    global $wgMonobookOverrideLeftColumnWidth;
    $html = <<<EOT
<script type='text/javascript' src='$wgScriptPath/extensions/CustisScripts/wikificator.js'></script>
<script type='text/javascript' src='$wgScriptPath/extensions/CustisScripts/WikEd.js'></script>
<script type='text/javascript' src='$wgScriptPath/extensions/CustisScripts/common.js'></script>
<link rel="stylesheet" type="text/css" href="$wgScriptPath/extensions/CustisScripts/custis.css" />
<link rel="stylesheet" type="text/css" href="$wgScriptPath/extensions/CustisScripts/custisprint.css" media="print" />
EOT;
    if ($wgMonobookOverrideLeftColumnWidth)
    {
        $html .= "<style type=\"text/css\" media=\"screen\">
#column-content { margin: 0 0 .6em -".($wgMonobookLeftColumnWidth+0.2)."em; }
#content { margin: 2.8em 0 0 ".($wgMonobookLeftColumnWidth+0.2)."em; }
.portlet { width: ".($wgMonobookLeftColumnWidth-0.4)."em; }
#p-logo { width: ".$wgMonobookLeftColumnWidth."em; }
#p-logo a:hover { width: ".($wgMonobookLeftColumnWidth+0.2)."em; }
#p-cactions { left: ".($wgMonobookLeftColumnWidth-0.4)."em; }
</style>\n";
    }
    $out->addScript($html);
    return true;
}

$wgHooks['BeforePageDisplay'][] = 'wfAddCustisScriptsJS';
$wgAjaxExportList[] = 'get_category_page_list';

/* Live Refresh hooks */
/* TODO move it to an extension */

$wgHooks['AlternateEdit'][] = 'wfSaveTextboxSession';
$wgHooks['EditPage::showEditForm:initial'][] = 'wfLoadTextboxSession';

function wfSaveTextboxSession(&$editpage)
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
        header('Cache-Control: no-cache');
        $wgOut->enableClientCache(false);
        $editpage->textbox1 = $_SESSION['wpTextbox1'];
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

function get_category_page_list ($categoryname)
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
