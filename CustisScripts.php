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

if ( !defined( 'MEDIAWIKI' ) ) {
?>
<p>This is the CustisScripts extension. To enable it, put </p>
<pre>require_once("$IP/extensions/CustisScripts/CustisScripts.php");</pre>
<p>at the bottom of your LocalSettings.php.</p>
<?php
        exit(1);
}
 

function wfAddCustisScriptsJS(&$out) {
  global $wgServer, $wgScriptPath;
  $html=<<<EOT
<script type='text/javascript' src='$wgScriptPath/extensions/CustisScripts/wikificator.js'></script>
<script type='text/javascript' src='$wgScriptPath/extensions/CustisScripts/WikEd.js'></script>
<script type='text/javascript' src='$wgScriptPath/extensions/CustisScripts/common.js'></script>
<link rel="stylesheet" type="text/css" href="$wgScriptPath/extensions/CustisScripts/custis.css" />  
EOT;
  $out->addScript($html);
  
  return true;
}
 
$wgHooks['BeforePageDisplay'][] = 'wfAddCustisScriptsJS';


