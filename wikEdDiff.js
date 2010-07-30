// <pre><nowiki>

// version info
window.wikEdDiffProgramVersion = '0.9.9a';
window.wikEdDiffProgramDate    = 'April 22, 2010';

/*

== wikEdDiff ==

A user script that provides an improved and easier to read diff view for comparing article versions
on Wikipedia and other MediaWiki sites.

Features:
* Additions and deletions are highlighted by color in the same text
* Block moves are detected and indicated by color
* Unchanged regions of the text are omitted from the output
* Highly optimized for MediaWiki source texts
* Compatibel with Greasemonkey

wikEdDiff uses the Cacycle diff.js routines [[en:User:Cacycle/diff]] and is also an integrated part of wikEd,
the full-featured JavaScript in-browser editor (http://en.wikipedia.org/wiki/User:Cacycle/wikEd)

Homepage: http://en.wikipedia.org/wiki/User:Cacycle/wikEdDiff
Author:   Cacycle (http://en.wikipedia.org/wiki/User:Cacycle)
License:  This code has been released into the public domain

== Installation ==

* Copy the following short block of code to [[User:YOURUSERNAME/monobook.js]]
* Press SHIFT-Reload to update to the newest version
* PLEASE DO NOT COPY THE WHOLE PROGRAM
* See http://en.wikipedia.org/wiki/User:Cacycle/wikEdDiff for detailed instructions
* Users of wikEd do not have to install wikEdDiff

// ---- START INSTALLATION CODE ----

// install [[User:Cacycle/wikEdDiff]] enhanced diff view using ajax
document.write('<script type="text/javascript" src="'
+ 'http://en.wikipedia.org/w/index.php?title=User:Cacycle/wikEdDiff.js'
+ '&action=raw&ctype=text/javascript"></script>');

// ---- END INSTALLATION CODE ----

*/


//
// WikEdDiffInit: initialize variables
//

window.WikEdDiffInit = function() {

//
// user configurable variables
//

// diff.js routines URL, also defined in wikEd.js
	if (typeof(wikEdDiffScriptSrc) == 'undefined') { window.wikEdDiffScriptSrc = 'http://en.wikipedia.org/w/index.php?title=User:Cacycle/diff.js&action=raw&ctype=text/javascript'; }

// allow ajax requests from local copy for testing, also defined in wikEd.js
	if (typeof(wikEdAllowLocalAjax) == 'undefined') { window.wikEdAllowLocalAjax = false; }

// wikEdDiff css rules
	if (typeof(wikEdDiffCSS) == 'undefined') { window.wikEdDiffCSS = {}; }
	WikEdDiffInitObject(wikEdDiffCSS, {
		'.wikEdDiffWrapper':       'margin: 0 0 1em 0;',
		'.wikEdDiffButtonWrapper': 'text-align: center;',
		'.wikEdDiffButton':        'padding: 0; margin: 0.2em 0 0.33em 0;',
		'.wikEdDiffDiv':           'background: #faf8f6; padding: 0.5em; border: 1px solid; border-color: #808080;'
	});

// use local copies of images for testing (set to true in local copy of edit page), also defined in wikEd.js
	if (typeof(wikEdUseLocalImages) == 'undefined') { window.wikEdUseLocalImages = false; }

// path to local images for testing, also defined in wikEd.js
	if (typeof(wikEdImagePathLocal) == 'undefined') { window.wikEdImagePathLocal = 'file:///D:/wikEd/images/'; }

// path to images, also defined in wikEd.js
	if (typeof(wikEdImagePath) == 'undefined') { window.wikEdImagePath = 'http://upload.wikimedia.org/wikipedia/commons/'; }

// image filenames, also defined in wikEd.js
	if (typeof(wikEdImage) == 'undefined') { window.wikEdImage = {}; }
	WikEdDiffInitImage(wikEdImage, {
		'wikEdDiff': 'c/c6/WikEdDiff.png'
	});

// user readable texts, copy changes to http://en.wikipedia.org/wiki/User:Cacycle/wikEd_international_en.js
	if (typeof(wikEdText) == 'undefined') { window.wikEdText = {}; }
	WikEdDiffInitObject(wikEdText, {
		'wikEdDiffButtonImg alt': 'wikEdDiff',
		'wikEdDiffButton title':  'Show improved diff view',
		'wikEdDiffLoading':       '...'
	});

// show complete unshortened article text for local diff, also defined in wikEd.js
	if (typeof(wikEdFullDiff) == 'undefined') { window.wikEdFullDiff = false; }

//
// end of user configurable variables
//


// global dom elements
	window.wikEdDiffDiv = null;
	window.wikEdDiffWrapper = null;
	window.wikEdDiffButtonWrapper = null;
	window.wikEdDiffButton = null;
	window.wikEdDiffGetGlobalNode = null;

// hash of loaded scripts, also defined in wikEd.js
	if (typeof(wikEdExternalScripts) == 'undefined') { window.wikEdExternalScripts = null; }
	if (typeof(wikEdDiffPreset) == 'undefined') { window.wikEdDiffPreset = false; }

// get global MediaWiki settings, also defined in wikEd.js
	window.wikEdDiffWikiGlobals = [];

// diff table element
	window.wikEdDiffTable = null;
};

// variables needed during startup
	if (typeof(wikEdDiffStartup) == 'undefined') { window.wikEdDiffStartup = false; }


//
// WikEdDiffSetup: call the setup routine
//

window.WikEdDiffStartup = function() {

// check if this has already been run
	if (window.wikEdDiffStartup == true) {
		return;
	}
	window.wikEdDiffStartup = true;

// run the setup routine if loaded dynamically from wikEd
	if (window.wikEdPageLoaded == true) {
		WikEdDiffSetup();
	}

// schedule the setup routine
	else {
		if (window.attachEvent != null) {
			window.attachEvent('onload', WikEdDiffSetup);
		}
		else {
			window.addEventListener('load', WikEdDiffSetup, false);
		}
		return;
	}
};


//
// WikEdDiffSetup: create wikEdDiff elements
//

window.WikEdDiffSetup = function() {

// check if this has already been run
	if (document.getElementById('wikEdDiffSetupFlag') != null) {
		return;
	}
	var flag = document.createElement('span');
	flag.id = 'wikEdDiffSetupFlag';
	flag.style.display = 'none';
	flag.style.visibility = 'hidden';
	document.body.appendChild(flag);

// initialize variables
	WikEdDiffInit();

// detect diff table
	var table = document.getElementsByTagName('table');
	for (var i = 0; i < table.length; i ++) {
		if (table[i].className == 'diff') {
			wikEdDiffTable = table[i];
		}
	}

// check if this is a diff page
	if (wikEdDiffTable == null) {
		return;
	}

// check if this is executed under Greasemonkey, also tested in wikEd.js
	window.wikEdDiffGreasemonkey = false;
	if (typeof(GM_getValue) == 'function') {
		wikEdDiffGreasemonkey = true;
	}

// parse global MediaWiki globals into hash
	var variable = ['wgServer', 'wgArticlePath', 'wgScriptPath', 'wgCurRevisionId'];
	for (var i = 0; i < variable.length; i ++) {
		wikEdDiffWikiGlobals[ variable[i] ] = WikEdDiffGetGlobal(variable[i]);
	}

// detect already loaded external scripts
	if (wikEdExternalScripts == null) {
		wikEdExternalScripts = [];
		var pageScripts = document.getElementsByTagName('script');
		for (var i = 0; i < pageScripts.length; i ++) {
			var scriptSrc = pageScripts[i].src;
			var nameMatch = scriptSrc.match(/\/([^\/]*?)($|\?)/);
			if (nameMatch != null) {
				var scriptName = nameMatch[1];
				if (scriptName != '') {

// ignore other diff.js scripts
					if ( (scriptName == 'diff.js') && (scriptSrc != wikEdDiffScriptSrc) ) {
						continue;
					}
					wikEdExternalScripts[scriptName] = true;
				}
			}
		}
	}

// load the external diff script
	var head = document.getElementsByTagName('head')[0];
	if (wikEdExternalScripts['diff.js'] == null) {
		if (typeof(WDiffString) == 'undefined') {
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src  = wikEdDiffScriptSrc;
			head.appendChild(script);
		}
		wikEdExternalScripts['diff.js'] = true;
	}

// add stylesheet definitions (slow method for IE compatibility)
	var diffStyle = new WikEdDiffStyleSheet();
	for (var ruleName in wikEdDiffCSS) {
		if (wikEdDiffCSS.hasOwnProperty(ruleName) == true) {
			var ruleStyle = wikEdDiffCSS[ruleName];
			diffStyle.WikEdDiffAddRule(ruleName, ruleStyle);
		}
	}

// create wikEdDiff wrapper
	wikEdDiffWrapper = document.createElement('div');
	wikEdDiffWrapper.id = 'wikEdDiffWrapper';
	wikEdDiffWrapper.className = 'wikEdDiffWrapper';

// create wikEdDiff button wrapper
	wikEdDiffButtonWrapper = document.createElement('div');
	wikEdDiffButtonWrapper.id = 'wikEdDiffButtonWrapper';
	wikEdDiffButtonWrapper.className = 'wikEdDiffButtonWrapper';
	wikEdDiffWrapper.appendChild(wikEdDiffButtonWrapper);

// create wikEdDiff button
	wikEdDiffButton = document.createElement('button');
	wikEdDiffButton.id = 'wikEdDiffButton';
	wikEdDiffButton.title = wikEdText['wikEdDiffButton title'];
	wikEdDiffButton.className = 'wikEdDiffButton';
	wikEdDiffButtonWrapper.appendChild(wikEdDiffButton);

// add button image
	var diffImg = document.createElement('img');
	diffImg.id = 'wikEdDiffButtonImg';
	diffImg.src = wikEdImage['wikEdDiff'];
	diffImg.title = wikEdText['wikEdDiffButton title'];
	diffImg.alt = wikEdText['wikEdDiffButtonImg alt'];
	wikEdDiffButton.appendChild(diffImg);

	wikEdDiffDiv = document.createElement('div');
	wikEdDiffDiv.id = 'wikEdDiffDiv';
	wikEdDiffDiv.className = 'wikEdDiffDiv';
	wikEdDiffDiv.style.display = 'none';

// add wrapper after diff table
	wikEdDiffWrapper.appendChild(wikEdDiffDiv);
	if (wikEdDiffTable.nextSibling != null) {
		wikEdDiffTable.parentNode.insertBefore(wikEdDiffWrapper, wikEdDiffTable.nextSibling);
	}
	else {
		wikEdDiffTable.parentNode.appendChild(wikEdDiffWrapper);
	}

// add event listener to button
	if (window.attachEvent != null) {
		wikEdDiffButton.attachEvent('onclick', WikEdDiff);
	}
	else {
		wikEdDiffButton.addEventListener('click', WikEdDiff, true);
	}

// linkify wikilinks in diff text
	var cells = wikEdDiffTable.getElementsByTagName('td');
	for (var i = 0; i < cells.length; i ++) {
		if (
			(cells[i].className == 'diff-context') ||
			(cells[i].className == 'diff-deletedline') ||
			(cells[i].className == 'diff-addedline')
		) {
			cells[i].innerHTML = WikEdDiffLinkify(cells[i].innerHTML);
		}
	}

// run WikEdDiff if enabled in wikEd
	var setting = WikEdDiffGetPersistent('wikEdDiff');
	if ( (setting == '') && (typeof(wikEdDiffPreset) == 'boolean') ) {
		setting = wikEdDiffPreset;
	}
	else if (setting == '1') {
		setting = true;
	}
	if (setting == true) {
		WikEdDiff();
	}

// register links for Lupin's Wikipedia:Tools/Navigation_popups
	if (typeof(setupTooltips) == 'function') {
		setupTooltips(wikEdDiffTable);
	}

	return;
};


//
// WikEdDiff: fetch the old versions using ajax to display a diff
//

window.WikEdDiff = function() {

// check if set tup
	if (wikEdDiffDiv == null) {
		return;
	}

// check if diff.js is loaded
	if (typeof(WDiffString) == 'undefined') {
		return;
	}

// display diff
	wikEdDiffDiv.style.display = 'block';

// fetch only once
	if (wikEdDiffDiv.innerHTML.length > 0) {
		return;
	}

// check if this is a diff page
	if (wikEdDiffTable == null) {
		return;
	}

// display div
	wikEdDiffDiv.innerHTML = wikEdText['wikEdDiffLoading'];

// generate request url from MediaWiki variables or from location url
	var url;
	var server = WikEdDiffGetGlobal('wgServer');
	var scriptPath = WikEdDiffGetGlobal('wgScriptPath');
	scriptPath = scriptPath.replace(server, '');
	if ( (server != '') && (scriptPath != '') ) {
		url = server + scriptPath.replace(/\$1/, '') + '/index.php';
	}
	else {
		url = window.location.protocol + '//' + window.location.hostname + '/' + window.location.pathname;
	}

	var article;
	var pageName = WikEdDiffGetGlobal('wgPageName');
	if (pageName != '') {
		article = pageName;
	}
	else {
		var articleMatch = window.location.search.match(/(\?|&)title=([^&#]+)/);
		if(articleMatch != null) {
			article = articleMatch[2];
		}
	}
	url += '?title=' + encodeURIComponent(article) + '&action=raw&maxage=0';

// get diff table and version link cells
	var tdArray = document.getElementsByTagName('TD');
	var tdOld;
	var tdNew;
	for (var i = 0; i < tdArray.length; i ++) {
		if (tdArray[i].className == 'diff-otitle') {
			tdOld = tdArray[i];
		}
		else if (tdArray[i].className == 'diff-ntitle') {
			tdNew = tdArray[i];
			break;
		}
	}
	if ( (tdOld == null) || (tdNew == null) ) {
		return;
	}

	var oldVersion = null;
	var newVersion = null;

	var oldUrl;
	var newUrl;

// preview pages use latest article version and textarea
	if (
		(/(\?|&)action=submit\b/.test(window.location.search) == true) ||
		(/(\?|&)undoafter=/.test(window.location.search) == true)
	) {
		var textarea = document.getElementsByName('wpTextbox1');
		if (textarea.length == 0) {
			return;
		}
		newVersion = textarea[0].value;
		newVersion = newVersion.replace(/\s+$/g, '');
		var curRevisionId = WikEdDiffGetGlobal('wgCurRevisionId');
		if (curRevisionId != '') {
			oldUrl = url + '&oldid=' + curRevisionId;
		}
		else {
			oldUrl = url;
		}

// get section for section editing
		var section = document.getElementsByName('wpSection');
		if (section != null) {
			if (section.length > 0) {
				if (section[0].value != '') {
					oldUrl += '&section=' + section[0].value;
				}
			}
		}
	}

// diff pages use two different old versions
	else {

// get revision id numbers from links in table cells
		var versionMatchOld = tdOld.innerHTML.match(/(\?|&amp;)oldid=(\d+)/);
		var versionMatchNew = tdNew.innerHTML.match(/(\?|&amp;)oldid=(\d+)/);
		if (versionMatchOld == null) {
			return;
		}
		oldUrl = url + '&oldid=' + versionMatchOld[2];
		if (versionMatchNew != null) {
			newUrl = url + '&oldid=' + versionMatchNew[2];
		}
		else {
			newUrl = url;
		}
	}

// get the old version using ajax
	WikEdDiffAjaxRequest('GET', oldUrl, null, null, null, null, function(ajax) {
		oldVersion = ajax.responseText;
		if (newVersion != null) {
			WikEdDiffResponse(oldVersion, newVersion);
		}
		return;
	});

// get the new version using ajax
	if (newUrl != null) {
		WikEdDiffAjaxRequest('GET', newUrl, null, null, null, null, function(ajax) {
			newVersion = ajax.responseText;
			if (oldVersion != null) {
				WikEdDiffResponse(oldVersion, newVersion);
// does not work yet because added and removed are in same text
//				wikEdDiffDiv.innerHTML = WikEdDiffLinkify(wikEdDiffDiv.innerHTML);
			}
			return;
		});
	}

	return;
};


//
// WikEdDiffResponse: calculate and display the diff between two versions
//

window.WikEdDiffResponse = function(oldVersion, newVersion) {


// add trailing newline
	if (oldVersion.substr(oldVersion.length - 1, 1) != '\n') {
		oldVersion += '\n';
	}
	if (newVersion.substr(newVersion.length - 1, 1) != '\n') {
		newVersion += '\n';
	}

// call external diff program
	var diffText = WDiffString(oldVersion, newVersion);
	if (wikEdFullDiff != true) {
		diffText = WDiffShortenOutput(diffText);
	}
	wikEdDiffDiv.innerHTML = diffText;
	wikEdDiffDiv.style.display = 'block';

	return;
};


//
// WikEdDiffLinkify: linkify wikilinks
//

window.WikEdDiffLinkify = function(html) {

// &lt; &gt; &amp; to \x00 \x01
	html = html.replace(/&lt;/g, '\x00');
	html = html.replace(/&gt;/g, '\x01');

// external links
	html = html.replace(/\b(((https?|ftp|irc|gopher):\/\/)|news:|mailto:)([^\x00-\x20\s\"\[\]\x7f\|\{\}<>]|<[^>]*>)+?(?=([\!\"\(\)\.\,\:\;\‘-•]*(\s|$)|[\x00-\x20\s\"\[\]\x7f\|\{\}]))/gi,
		function (p) {
			var wholeLink = p;
			var targetNoTags = wholeLink.replace(/<[^>]*>/g, '');
			targetNoTags = targetNoTags.replace(/&lt;.*?&gt;/g, '');
			targetNoTags = targetNoTags.replace(/&lt;.*$/g, '');
			var url = targetNoTags.replace(/\s/g, '_');
			url = encodeURI(url);
			url = url.replace(/\"/g, '%22');
			url = url.replace(/\'/g, '%27');
			url = url.replace(/#/g, '%23');
			var linkTitle = targetNoTags.replace(/\"/g, '&quot;');

// linkify all url text fragments between highlighting <span>s seperately
			var anchorOpen = '<a href = "' + url + '" style="text-decoration: none; color: inherit; color: expression(parentElement.currentStyle.color);" title="' + linkTitle + '">';
			var anchorClose = '</a>';
			var wholeLinkAnchorified = wholeLink.replace(/(<[^>]*>)/g, anchorClose + '$1' + anchorOpen);

			return(anchorOpen + wholeLinkAnchorified + anchorClose);
		}
	);

// linkify links and templates
	if ((wikEdDiffWikiGlobals['wgServer'] != null) && (wikEdDiffWikiGlobals['wgArticlePath'] != null)) {

//                       12  [  23   <>  3 [ 4   <>  4 156    article     67     text     75
		html = html.replace(/((\[|\{)(<[^>]*>)*\2(<[^>]*>)*)(([^\|\[\]\{\}\n]*)([^\n\[\]\{\}]*))/g,
			function (p, p1, p2, p3, p4, p5, p6, p7, p8) {
				var pre = p1;
				var linkType = p2;
				var wholeLink = p5;
				var linkTarget = p6;

// create article name
				var targetNoTags = linkTarget.replace(/<[^>]*>/g, '');
				targetNoTags = targetNoTags.replace(/&lt;.*?&gt;/g, '');
				targetNoTags = targetNoTags.replace(/&lt;.*$/g, '');
				targetNoTags = targetNoTags.replace(/^\s+|\s+$/g, '');

// create url
				var url = targetNoTags.replace(/\s/g, '_');
				url = encodeURI(url);
				url = url.replace(/\"/g, '%22');
				url = url.replace(/\'/g, '%27');
				url = url.replace(/#/g, '%23');
				var articleTitle = targetNoTags.replace(/\"/g, '&quot;');
				if (linkType == '{') {
					if (/^[^\|\}\n\r]*:/.test(targetNoTags) == false) {
						url = 'Template:' + url;
						articleTitle = 'Template:' + articleTitle;
					}
				}
				url = wikEdDiffWikiGlobals['wgServer'] + wikEdDiffWikiGlobals['wgArticlePath'].replace(/\$1/, url);

// linkify all text fragments between highlighting <span>s seperately
				var anchorOpen = '<a href = "' + url + '" style = "text-decoration: none; color: inherit; color: expression(parentElement.currentStyle.color)" title="' + articleTitle + '">';
				var anchorClose = '</a>';
				var wholeLinkAnchorified = wholeLink.replace(/(<[^>]*>)/g, anchorClose + '$1' + anchorOpen);

				return(pre + anchorOpen + wholeLinkAnchorified + anchorClose);
			}
		);
	}

// \x00 and \x01 back to &lt; and &gt;
	html = html.replace(/\x00/g, '&lt;');
	html = html.replace(/\x01/g, '&gt;');

	return(html);
};


//
// WikEdDiffInitObject: initialize object, keep pre-defined values
//

window.WikEdDiffInitObject = function(array, preset) {

	for (var key in preset) {
		if (array[key] == null) {
			array[key] = preset[key];
		}
	}
	return;
};


//
// WikEdDiffInitImage: initialize images, keep pre-defined values
//

window.WikEdDiffInitImage = function(array, preset) {

	for (var key in preset) {
		if (array[key] == null) {

// remove MediaWiki path prefixes and add local path
			if (wikEdUseLocalImages == true) {
				array[key] = wikEdImagePathLocal + preset[key].replace(/^[0-9a-f]+\/[0-9a-f]+\/()/, '');
			}

// add path
			else {
				array[key] = wikEdImagePath + preset[key];
			}
		}
	}
	return;
};


//
// WikEdDiffStyleSheet: create a new style sheet object (code copied from wikEd.js)
//

window.WikEdDiffStyleSheet = function(contextObj) {

	if (contextObj == null) {
		contextObj = document;
	}
	this.styleElement = null;

// MS IE compatibility
	if (contextObj.createStyleSheet) {
		this.styleElement = contextObj.createStyleSheet();
	}

// standards compliant browsers
	else {
		this.styleElement = contextObj.createElement('style');
		this.styleElement.from = 'text/css';
		var insert = contextObj.getElementsByTagName('head')[0];
		if (insert != null) {
			this.styleElement.appendChild(contextObj.createTextNode('')); // Safari 3 fix
			insert.appendChild(this.styleElement);
		}
	}

// WikEdDiffAddRule: add one rule at the time using DOM method, very slow

// IE
	this.WikEdDiffAddRule = function(selector, declaration) {
		if (this.styleElement.WikEdDiffAddRule) {
			this.styleElement.WikEdDiffAddRule(selector, declaration);
		}

// standards compliant browsers
		else {
			if (this.styleElement.sheet != null) {
				if (this.styleElement.sheet.insertRule != null) {
					this.styleElement.sheet.insertRule(selector + ' { ' + declaration + ' } ', 0);
				}
			}
		}
	};

// WikEdDiffAddRules: add all rules at once, much faster
	this.WikEdDiffAddRules = function(rules) {
		this.styleElement.innerHTML = rules;
		return;
	};
};


//
// WikEdDiffGetPersistent: get a cookie or a Greasemonkey persistent value  ode copied from wikEd.js)
//

window.WikEdDiffGetPersistent = function(name) {

	var getStr = '';

// get a Greasemonkey persistent value
	if (wikEdDiffGreasemonkey == true) {
		getStr = GM_getValue(name, '');
	}

// get a cookie value
	else {
		getStr = WikEdDiffGetCookie(name);
	}
	return(getStr);
};


//
// WikEdDiffGetCookie: get a cookie (code copied from wikEd.js)
//

window.WikEdDiffGetCookie = function(cookieName) {

	var cookie = ' ' + document.cookie;
	var search = ' ' + cookieName + '=';
	var cookieValue = '';
	var offset = 0;
	var end = 0;
	offset = cookie.indexOf(search);
	if (offset != -1) {
		offset += search.length;
		end = cookie.indexOf(';', offset);
		if (end == -1) {
			end = cookie.length;
		}
		cookieValue = cookie.substring(offset, end);
		cookieValue = cookieValue.replace(/\\+/g, ' ');
		cookieValue = decodeURIComponent(cookieValue);
	}
	return(cookieValue);
};


//
// WikEdAjaxRequest: cross browser wrapper for Ajax requests (code copied from wikEd.js)
//

window.WikEdDiffAjaxRequest = function(requestMethod, requestUrl, headerName, headerValue, bodyData, overrideMimeType, responseHandler) {

	var request;

// use Greasemonkey GM_xmlhttpRequest
	if (wikEdDiffGreasemonkey == true) {
		var headerArray = { 'User-Agent': navigator.userAgent };
		if (headerName != null) {
			headerArray[headerName] = headerValue;
		}
		request = new GM_xmlhttpRequest({
			'method':  requestMethod,
			'url':     requestUrl,
			'headers': headerArray,
			'data':    bodyData,
			'onreadystatechange':
				function(ajax) {
					if (ajax.readyState != 4) {
						return;
					}
					responseHandler(ajax);
					return;
				}
		});
	}

// use standard XMLHttpRequest
	else {

// allow ajax request from local copy for testing
		if (wikEdAllowLocalAjax == true) {
			if (typeof(netscape) == 'object') {
				netscape.security.PrivilegeManager.enablePrivilege('UniversalBrowserRead');
			}
		}

// new ajax request object
		try {
			request = new XMLHttpRequest();
		}

// IE 6
		catch(err) {
			try {
				request = new ActiveXObject('Microsoft.XMLHTTP');
			}

// IE 5.5
			catch(err) {
				try {
					request = new ActiveXObject('Msxml2.XMLHTTP');
				}
				catch(err) {
					return;
				}
			}
		}
		request.open(requestMethod, requestUrl, true);
		if (headerName != null) {
			request.setRequestHeader(headerName, headerValue);
		}
		if ( (request.overrideMimeType != null) && (overrideMimeType != null) ) {
			request.overrideMimeType(overrideMimeType);
		}
		request.send(bodyData);
		request.onreadystatechange = function() {
			if (request.readyState != 4) {
				return;
			}
			responseHandler(request);
			return;
		};
	}
	return;
};


//
// WikEdDiffGetOffsetTop: get element offset relative to window top (code copied from wikEd.js)
//

window.WikEdDiffGetOffsetTop = function(element) {
	var offset = 0;
	do {
		offset += element.offsetTop;
	} while ( (element = element.offsetParent) != null );
	return(offset);
};


//
// WikEdDiffGetGlobal: access values of global variables from Greasemonkey scripts using the 'location hack' (code copied to wikEdDiff.js)
//

window.WikEdDiffGetGlobal = function(globalName) {

	var globalValue;
	if (wikEdDiffGreasemonkey == true) {
		if (wikEdDiffGetGlobalNode == null) {
			wikEdDiffGetGlobalNode = document.getElementById('wikEdDiffGetGlobalNode');
		}
		if (wikEdDiffGetGlobalNode == null) {
			wikEdDiffGetGlobalNode = document.createElement('textarea');
			wikEdDiffGetGlobalNode.id = 'wikEdDiffGetGlobalNode';
			wikEdDiffGetGlobalNode.style.display = 'none';
			wikEdDiffGetGlobalNode.style.visibility = 'hidden';
			document.body.appendChild(wikEdDiffGetGlobalNode);
		}
		location.href = 'javascript:void(typeof(' + globalName + ')!=\'undefined\'?(' + globalName + '!=null?(document.getElementById(\'wikEdDiffGetGlobalNode\').value=' + globalName + '.toString()):null):null)';
		globalValue = wikEdDiffGetGlobalNode.value;
	}
	else {
		try {
			globalValue = eval(globalName + '.toString();');
		}
		catch(err) { }
	}
	return(globalValue);
};


//
// initialize
//

WikEdDiffStartup();


// </nowiki></pre>
