if (!window.wikEd) {
	window.wikEd = { config: {
		server: mw.config.get('wgServer'),
		articlePath: mw.config.get('wgArticlePath'),
		script: mw.config.get('wgScript'),
		wikifyTableParameters: '',
		tableMode: false,
		keepFormatting: false,
		letters: '0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC'.replace(/(\w{4})/g, '\\u$1'),
		text: { 'wikicode Category': 'Category', 'wikicode Image': 'File' }
	} };
}

//
// wikEd.RelativeToAbsolutePath
//

wikEd.RelativeToAbsolutePath = function(relativePath, fullPath) {

	var absolutePath = '';

	// get current url
	if (fullPath == null) {
		fullPath = window.location.href;
		fullPath = fullPath.replace(/#.*()/, '');
		fullPath = fullPath.replace(/\?.*()/, '');
	}

	// ./index.php
	if (/^\.\/()/.test(relativePath) == true) {
		relativePath = relativePath.replace(/^\.\/()/, '');
		fullPath = fullPath.replace(/\/[^\/]*$/, '');
		absolutePath = fullPath + '/' + relativePath;
	}

	// ../../index.php
	else if (/^\.\.\/()/.test(relativePath) == true) {
		var regExp = /^\.\.\/()/;
		while (regExp.test(relativePath) == true) {
			relativePath = relativePath.replace(/^\.\.\/()/, '');
			fullPath = fullPath.replace(/\/[^\/]*$/, '');
		}
		absolutePath = fullPath + '/' + relativePath;
	}

	// full path
	else {
		absolutePath = relativePath;
	}
	return(absolutePath);
};


//
// wikEd.RemoveEmptyTag: remove empty html tag pairs
//

wikEd.RemoveEmptyTags = function(html, tag, replace) {

	var tagRegExp;
	if (typeof(tag) == 'string') {
		tagRegExp = new RegExp('<(' + tag + ')\\b[^>]*><\/\\1>', 'gi');
	}
	else {
		tagRegExp = tag;
	}
	if (replace == null) {
		replace = '';
	}

	while (tagRegExp.test(html) == true) {
		html = html.replace(tagRegExp, replace);
		tagRegExp.lastIndex = 0;
	}
	return(html);
}


//
// wikEd.RemoveTag: recursively remove html tag pairs
//

wikEd.RemoveTag = function(html, tag, attribRegExp, replaceOpen, replaceClose) {

	var tagRegExp;
	if (typeof(tag) == 'string') {

		//                      1 2    23           3   4     4 1
		tagRegExp = new RegExp('(<(\\/?)(' + tag + ')\\b([^>]*)>)', 'g');
	}
	else {
		tagRegExp = tag;
	}
	if (replaceOpen == null) {
		replaceOpen = '';
	}

	if (replaceClose == null) {
		replaceClose = '';
	}

	var isRemove = [];
	html = html.replace(tagRegExp,
		function(p, p1, p2, p3, p4) {
			p2 = p2 || '';
			p4 = p4 || '';
			if (p2 == '') {
				if (
					( (attribRegExp == null) && (p4 == '') ) ||
					( (attribRegExp != null) && (attribRegExp.test(p4) == true) )
				) {
					isRemove.push(true);
					return(replaceOpen);
				}
				isRemove.push(false);
				return(p1);
			}
			if (isRemove.pop() == true) {
				return(replaceClose);
			}
			return(p1);
		}
	);
	return(html);
}


//
// wikEd.SanitizeAttributes: see Sanitizer.php
//   wikiCode == true: allow extended set of attributes for existing wikicode

wikEd.SanitizeAttributes = function(tag, attributes, wikiCode) {

	var common;
	var tablealign;
	var tablecell;
	var table;
	if (wikiCode == true) {
		common = 'dir|style|class|lang|id|title';
		tablealign = '|align|char|charoff|valign';
		table = '|summary|width|border|frame|rules|cellspacing|cellpadding|align|bgcolor';
		tablecell = '|abbr|axis|headers|scope|rowspan|colspan|nowrap|width|height|bgcolor';
	}
	else {
		common = 'dir';
		table = '|border|cellspacing|cellpadding|align|bgcolor';
		tablealign = '|align|valign';
		tablecell = '|rowspan|colspan|nowrap|bgcolor';
	}
	tag = tag.toLowerCase();
	var sanitized = '';
	var regExpMatch;

	//            1   12       34   45   5   6   632
	var regExp = /(\w+)(\s*=\s*(('|")(.*?)\4|(\w+)))?/g;
	while ( (regExpMatch = regExp.exec(attributes)) != null) {
		var attrib = regExpMatch[1];
		var attribValue = regExpMatch[5] || regExpMatch[6] || '';
		var valid = false;

		// empty or missing attributes as parameters for wiki markup
		var flag = false;

		// include non-html wiki markup and  extended set of attributes for existing wikicode
		if (wikiCode == true) {
			if ('center|em|strong|cite|code|var|sub|sup|dl|dd|dt|tt|b|i|big|small|strike|s|u|rb|rp|ruby'.indexOf(tag) >= 0) {
				if (common.indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('div|span|h1|h2|h3|h4|h5|h6|p'.indexOf(tag) >= 0) {
				if ((common + '|align').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('blockquote'.indexOf(tag) >= 0) {
				if ((common + '|cite').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('br'.indexOf(tag) >= 0) {
				if ('style|clear'.indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('pre'.indexOf(tag) >= 0) {
				if ((common + '|width').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('ins|del'.indexOf(tag) >= 0) {
				if ((common + '|cite|datetime').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('ul'.indexOf(tag) >= 0) {
				if ((common + '|type').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('ol'.indexOf(tag) >= 0) {
				if ((common + '|type|start').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('li'.indexOf(tag) >= 0) {
				if ((common + '|type|value').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('table'.indexOf(tag) >= 0) {
				if ((common + table).indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('caption'.indexOf(tag) >= 0) {
				if ((common + '|align').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('thead|tfoot|tbody'.indexOf(tag) >= 0) {
				if ((common + tablealign).indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('colgroup|col'.indexOf(tag) >= 0) {
				if ((common + '|span|width' + tablealign).indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('tr'.indexOf(tag) >= 0) {
				if ((common + '|bgcolor' + tablealign).indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('td|th'.indexOf(tag) >= 0) {
				if ((common + tablecell + tablealign).indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('font'.indexOf(tag) >= 0) {
				if ((common + '|size|color|face').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('hr'.indexOf(tag) >= 0) {
				if ((common + '|noshade|size|width').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('rt'.indexOf(tag) >= 0) {
				if ((common + '|rbspan').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('dfn'.indexOf(tag) >= 0) {
				if (('name|id').indexOf(attrib) >= 0) { valid = true; }
			}

			// wiki markup
			else if ('ref'.indexOf(tag) >= 0) {
				if (('name').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('references'.indexOf(tag) >= 0) {
			}
			else if ('syntaxhighlight|source'.indexOf(tag) >= 0) {
				if ((common + '|lang|enclose|highlight|line|start').indexOf(attrib) >= 0) {
					valid = true;
					if ( ('line'.indexOf(attrib) >= 0) && (attribValue == '') ) {
						flag = true;
					}
				}
			}
			else if ('poem'.indexOf(tag) >= 0) {
				if ((common + '|compact').indexOf(attrib) >= 0) {
					valid = true;
					if ( ('compact'.indexOf(attrib) >= 0) && (attribValue == '') ) {
						flag = true;
					}
				}
			}
			else if ('categorytree'.indexOf(tag) >= 0) {
				if ((common + '|mode|depth|onlyroot|hideroot|hideprefix|showcount|namespaces').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('gallery'.indexOf(tag) >= 0) {
				if ((common + '|perrow|widths|heights|caption').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('nowiki|noinclude|includeonly|onlyinclude|inputbox|timeline|imagemap|hiero|charinsert'.indexOf(tag) >= 0) {
			}
			else if ('math'.indexOf(tag) >= 0) {
				if ((common + '|alt').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('score'.indexOf(tag) >= 0) {
				if ((common + '|lang|midi|override_midi|override_ogg|raw vorbis').indexOf(attrib) >= 0) { valid = true; }
			}
		}

		// strict, for html code to be wikified from external sources (websites, Word)
		else {
			if ('center|em|strong|cite|code|var|sub|sup|dl|dd|dt|tt|b|i|big|small|strike|s|u|rb|rp|ruby|blockquote|pre|ins|del'.indexOf(tag) >= 0) {
				if (common.indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('div|span|h1|h2|h3|h4|h5|h6|p'.indexOf(tag) >= 0) {
				if ((common + '|align').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('br'.indexOf(tag) >= 0) {
				if ('clear'.indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('ul'.indexOf(tag) >= 0) {
				if ((common + '|type').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('ol'.indexOf(tag) >= 0) {
				if ((common + '|type|start').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('li'.indexOf(tag) >= 0) {
				if ((common + '|type|value').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('table'.indexOf(tag) >= 0) {
				if ((common + table).indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('caption'.indexOf(tag) >= 0) {
				if ((common + '|align').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('thead|tfoot|tbody'.indexOf(tag) >= 0) {
				if ((common + tablealign).indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('colgroup|col'.indexOf(tag) >= 0) {
				if ((common + '|span' + tablealign).indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('tr'.indexOf(tag) >= 0) {
				if ((common + '|bgcolor' + tablealign).indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('td|th'.indexOf(tag) >= 0) {
				if ((common + tablecell + tablealign).indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('font'.indexOf(tag) >= 0) {
				if ((common + '|color').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('hr'.indexOf(tag) >= 0) {
				if ((common + '|noshade|size').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('rt'.indexOf(tag) >= 0) {
				if ((common + '|rbspan').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('dfn'.indexOf(tag) >= 0) {
				if (('name|id').indexOf(attrib) >= 0) { valid = true; }
			}
		}

		// ignore empty or missing attributes
		if ( (flag != true) && (attribValue == '') ) {
			continue;
		}

		// ignore not supported attributes
		if (valid != true) {
			continue;
		}

		// clean up defaults for align
		if (attrib == 'align') {
			if ('tr|td|th'.indexOf(tag) >= 0) {
				if (attribValue == 'left') {
					attribValue = '';
				}
			}
		}

		// clean up defaults for valign
		else if (attrib == 'valign') {
			if ('tr|td|th'.indexOf(tag) >= 0) {
				if (attribValue == 'top') {
					attribValue = '';
				}
			}
		}

		// clean up style
		else if (attrib == 'style') {

			// remove non-standard Mozilla styles
			attribValue = attribValue.replace(/(^|\s)(-moz-[\w\-]+):\s[\w\-]+;\s*()/g, '$1');
			attribValue = attribValue.replace(/(^|\s)([\w\-]+):\s[^;]*(-moz-[\w\-]+|windowtext)[^;]*;\s*()/g, '$1');

			// remove dimensions from null values
			attribValue = attribValue.replace(/\b0(%|in|cm|mm|em|ex|pt|pc|px)\b/g, '0');

			// remove empty definitions and spaces
			attribValue = attribValue.replace(/[\w\-]+\s*\:\s*; *()/g, '');
			attribValue = attribValue.replace(/\s*(;|:)\s*()/g, '$1 ');
			attribValue = attribValue.replace(/(\s|;)+$/g, ';');
		}

		// clean up class
		else if (attrib == 'class') {

			// remove MS Word classes
			attribValue = attribValue.replace(/^Ms.*$/g, '');
		}

		// add attribute
		if (flag == true) {
			sanitized += ' ' + attrib;
		}
		else if (attribValue != '') {
			sanitized += ' ' + attrib + '="' + attribValue + '"';
		}
	}
	return(sanitized);
};


//
// wikEd.WikifyHTML:
//   obj.html contains the text to be wikified
//   expects < > &lt; &gt; &amp;  spaces instead of &nbsp; <br> (not \n)
//   returns <br> (not \n)
//   wikiCode == true: allow extended set of attributes for existing wikicode, keep leading spaces
//
// allowed and converted tags:
//   br|p
//   h1|h2|h3|h4|h5|h6
//   hr
//   i|dfn|cite|em|var
//   b|strong
//   table|caption|col|thead|tfoot|tbody|tr|td|th
//   dl|dt|dd|li|ol|ul
//   a
// not allowed yet:
//   bdo|q|kbd|samp|abbr|acronym|label
// other allowed tags:
//   big|blockquote|colgroup|center|code|del|div|font|ins|pre|s|small|span|strike|sub|sup|tt|u|rb|rp|rt|ruby
// mediawiki tags (inline/block):
//   nowiki|math|score|noinclude|includeonly|onlyinclude|ref|charinsert
//   gallery|syntaxhighlight|source|poem|categorytree|hiero|imagemap|inputbox|timeline|references

wikEd.WikifyHTML = function(obj, wikiCode) {

	var regExpStr;
	var regExp;
	var regExpMatch;

	// preserve spaces and content in pre, syntaxhighlight, source, and nowiki
	obj.html = obj.html.replace(/(<(syntaxhighlight|source|pre|nowiki)\b[^\/>]*>)((.|\n)*?)(<\/\2>)/gi,
		function(p, p1, p2, p3, p4, p5) {
			p3 = p3.replace(/</g, '\x01');
			p3 = p3.replace(/>/g, '\x02');
			if (/^(syntaxhighlight|source|pre)$/i.test(p2) == true) {
				p3 = p3.replace(/ |\xa0/g, '\x03');
			}
			return(p1 + p3 + p5);
		}
	);

	// delete tags: <style>
	obj.html = obj.html.replace(/<(style)\b[^>]*>(.|\n)*?<\/\1>/gi, '');

	// remove MediaWiki section edit spans
	obj.html = obj.html.replace(/<span[^>]*class="editsection"[^>]*>(.|\n)*?<\/span>\s*()/gi, '');

	// remove MediaWiki heading spans
	obj.html = obj.html.replace(/<span\b[^>]*\bclass="mw-headline"[^>]*>((.|\n)*?)<\/span>\s*()/g, '$1');

	// remove MediaWiki divs from article top
	obj.html = obj.html.replace(/<h3\b[^>]*\bid="siteSub"[^>]*>(.|\n)*?<\/h3>\s*()/g, '');
	obj.html = obj.html.replace(/<div\b[^>]*\bid="contentSub"[^>]*>(.|\n)*?<\/div>\s*()/g, '');
	obj.html = obj.html.replace(/<div\b[^>]*\bid="jump-to-nav"[^>]*>(.|\n)*?<\/div>\s*()/g, '');

	// remove MediaWiki table of contents
	obj.html = obj.html.replace(/<table\b[^>]*?\bid="toc"[^>]*>(.|\n)*?<\/table>\s*()/g, '');

	// remove MediaWiki print footer
	obj.html = obj.html.replace(/<div\b[^>]*?\bclass="printfooter"[^>]*>[^<>"]+"<a\b[^>]*>[^<]+<\/a>"<\/div>\s*()/g, '');

	// remove MediaWiki category list tags
	var regExp = /<div\b[^>]*\bid="catlinks"[^>]*>((.|\n)*?)<\/div>\s*()/g;
	while(regExp.test(obj.html) == true) {
		obj.html = obj.html.replace(regExp, '$1');
		regExp.lastIndex = 0;
	}
	var regExp = /<p\b[^>]*?\bclass="catlinks"[^>]*>((.|\n)*?)<a\b[^>]*>[^<>]+<\/a>: ((.|\n)*?)<\/p>/g;
	while(regExp.test(obj.html) == true) {
		obj.html = obj.html.replace(regExp, '$1$3');
		regExp.lastIndex = 0;
	}

	// convert MS-Word non-standard lists: *
	obj.html = obj.html.replace(/\s*<p\b[^>]*>\s*<!--\[if !supportLists\]-->(.|\n)*?<!--\[endif\]-->\s*((.|\n)*?)\s*<\/p>\s*()/g, '* $2\n');

	// collect MS-Word footnote texts
	var footnotes = {};
	obj.html = obj.html.replace(/<div\b[^>]*\bid="ftn(\d+)"[^>]*>\s*<p class="MsoFootnoteText">\s*<a(.|\n)*?<\/a>((.|\n)*?)<\/p>\s*<\/div>/g,
		function(p, p1, p2, p3) {
			footnotes[p1] = p3.replace(/^(\s|<br\b[^>]*>)|(\s|<br\b[^>]*>)$/g, '');
			return('');
		}
	);

	// add footnotes as <ref> tags
	obj.html = obj.html.replace(/<a\b[^>]*\bname="_ftnref(\d+)"[^>]*>(.|\n)*?<!--\[endif\]-->\s*<\/span>\s*<\/span>\s*<\/a>/g,
		function(p, p1) {
			var ref = '&lt;ref name="footnote_' + p1 + '"&gt;' + footnotes[p1] + '&lt;/ref&gt;';
			return(ref);
		}
	);

	// remove MS-Word footnote separator
	obj.html = obj.html.replace(/<!--\[if !supportFootnotes\]-->(\s|<br\b[^>]*>)*<hr\b[^>]*>\s*<!--\[endif\]-->(\s|<br\b[^>]*>)*()/g, '');

	// correct name for MS-Word images
	//                           1                                                    2    2                  3      3       4    4                                 1             5            5
	obj.html = obj.html.replace(/(<v:imagedata\b[^>]*?\bsrc="[^">]*?[\\\/]clip_image\d+(\.\w+)"[^>]*? o:title="([^">]*)"[^>]*>(.|\s)*?<img\b[^>]*? src="[^">]*?[\\\/])clip_image\d+\.\w+("[^>]*>)/g, '$1$3$2$5');

	// convert <div class="poem">...</div> to <poem>...</poem>
	obj.html = wikEd.RemoveTag(obj.html, 'div', /\bclass="poem"/, '<poem>', '</poem>');

	// sanitize <br style="clear: both;"/>
	obj.html = obj.html.replace(/<(br)\s+([^>]*?)\s*(\/)>/gi,
		function(p, p1, p2, p3) {
			return('<' + p1 + wikEd.SanitizeAttributes(p1, p2, wikiCode) +  p3 + '>');
		}
	);

	// sanitize <span> <div> <p> <font>
	obj.html = obj.html.replace(/<(span|div|p|font)\s+([^>]*?)\s*(\/?)>/gi,
		function(p, p1, p2, p3) {
			return('<' + p1 + wikEd.SanitizeAttributes(p1, p2, wikiCode) +  p3 + '>');
		}
	);

	// remove <span> and <font> pairs withhout attributes
	obj.html = wikEd.RemoveTag(obj.html, 'span|font');

	// remove <p> ... </p> pairs withhout attributes
	obj.html = wikEd.RemoveTag(obj.html, 'p', null, '\x00\x00', '\x00\x00');

	// escape character entities
	obj.html = obj.html.replace(/&(?!(amp;|lt;|gt;))/g, '&amp;');

	// remove comments
	obj.html = obj.html.replace(/<!--(.|\n)*?-->/g, '');

	// <hr> horizontal rule
	obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<hr\b[^>]*>(\s|<br\b[^>]*>|\x00)*()/gi, '\x00\x00----\x00\x00');

	// <i> <em> <dfn> <var> <cite> italic
	obj.html = obj.html.replace(/<(i|em|dfn|var|cite)\b[^>]*?>/gi, '\'\'');
	obj.html = obj.html.replace(/<\/(i|em|dfn|var|cite)\b[^>]*?>/gi, '\'\'');

	// <b> <strong> bold
	obj.html = obj.html.replace(/<(b|strong)\b[^>]*?>/gi, '\'\'\'');
	obj.html = obj.html.replace(/<\/(b|strong)\b[^>]*?>/gi, '\'\'\'');

	// remove lists around headings
	obj.html = obj.html.replace(/<([uo])l[^<>]*>\s*<li[^<>]*>\s*(<(h[1-6])[^<>]*>.*?<\/\3\s*>)\s*<\/li\s*>\s*<\/\1l\s*>/gi, '$2');

	// <h1> .. <h6> headings
	obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<h1\b[^>]*>(.*?)<\/h1>(\s|<br\b[^>]*>|\x00)*/gi, '\x00\x00= $2 =\x00\x00');
	obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<h2\b[^>]*>(.*?)<\/h2>(\s|<br\b[^>]*>|\x00)*/gi, '\x00\x00== $2 ==\x00\x00');
	obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<h3\b[^>]*>(.*?)<\/h3>(\s|<br\b[^>]*>|\x00)*/gi, '\x00\x00=== $2 ===\x00\x00');
	obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<h4\b[^>]*>(.*?)<\/h4>(\s|<br\b[^>]*>|\x00)*/gi, '\x00\x00==== $2 ====\x00\x00');
	obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<h5\b[^>]*>(.*?)<\/h5>(\s|<br\b[^>]*>|\x00)*/gi, '\x00\x00===== $2 =====\x00\x00');
	obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<h6\b[^>]*>(.*?)<\/h6>(\s|<br\b[^>]*>|\x00)*/gi, '\x00\x00====== $2 ======\x00\x00');

	obj.html = obj.html.replace(/<(h[0-6])\b[^>]*>((.|\n)*?)<\/\1>/gi, '$2');

	// {{TABLE}}
	// convert html tables to wikicode

	if (wikEd.tableMode == false) {

		// remove <thead> <tbody> <tfoot>
		obj.html = obj.html.replace(/(\s|\x00|<br\b[^>]*>)<\/?(thead|tbody|tfoot)\b[^>]*>(\s|\x00|<br\b[^>]*>)*()/gi, '$1');

		// remove <col></col> and <colgroup></colgroup>\s
		obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<(col|colgroup)\b[^>]*>.*?<\/\2>(<br\b[^>]*>|\x00)*/gi, '');

		// line breaks to <br /> in table cells, but not in html markup
		obj.html = obj.html.replace(/(<(td|th|caption)\b[^>]*>)((.|\n)*?)(<\/\2>)/gi,
			function(p, p1, p2, p3, p4, p5) {
				p3 = p3.replace(/^(\s|<br\b[^>]*>|\x00>)+/gi, '');
				p3 = p3.replace(/(\s|<br\b[^>]*>|\x00>)+$/gi, '');

				// preserve <br> in tags
				p3 = p3.replace(/(<(\w+)[^>]*>)((.|\n)*?)(<\/\2+>)/gi,
					function(p, p1, p2, p3, p4, p5) {
						p3 = p3.replace(/<br\b[^>]*>\s*()/gi, '\x04');
						return(p1 + p3 + p5);
					}
				);
				p3 = p3.replace(/<br\b[^>]*>\s*()/gi, '&lt;br /&gt;');
				p3 = p3.replace(/\x04/g, '<br>');
				return(p1 + p3 + p5);
			}
		);

		// remove table closing tags
		obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<\/(tr|thead|tbody|tfoot)>(\s|<br\b[^>]*>|\x00)*()/gi, '');

		// <td> table cells
		obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<td>(\s|<br\b[^>]*>|\x00)*()/gi, '\x00| ');
		obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<(td)\s+([^>]*)>(\s|<br\b[^>]*>|\x00)*()/gi,
			function(p, p1, p2, p3, p4) {
				p3 = wikEd.SanitizeAttributes(p2, p3, wikiCode);
				if (p3 == '') {
					return('\x00| ');
				}
				else {
					return('\x00|' + p3 + ' | ');
				}
			}
		);

		// <th> table cells
		obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<th>(\s|<br\b[^>]*>|\x00)*()/gi, '\x00! ');
		obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<(th)\s+([^>]*)>(\s|<br\b[^>]*>|\x00)*()/gi,
			function(p, p1, p2, p3, p4) {
				p3 = wikEd.SanitizeAttributes(p2, p3, wikiCode);
				if (p3 == '') {
					return('\x00! ');
				}
				else {
					return('\x00!' + p3 + ' | ');
				}
			}
		);

		// <tr> table rows
		obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<tr>(\s|<br\b[^>]*>|\x00)*()/gi, '\x00|-\x00');
		obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<(tr)\s+([^>]*)>(\s|<br\b[^>]*>|\x00)*()/gi,
			function(p, p1, p2, p3, p4) {
				return('\x00|-' + wikEd.SanitizeAttributes(p2, p3, wikiCode) + '\x00');
			}
		);

		// <caption> table caption
		obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<caption>(\s|<br\b[^>]*>|\x00)*()/gi, '\x00|+ ');
		obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<(caption)\s+([^>]*)>(\s|<br\b[^>]*>|\x00)*()/gi,
			function(p, p1, p2, p3, p4) {
				p3 = wikEd.SanitizeAttributes(p2, p3, wikiCode);
				if (p3 == '') {
					return('\x00|+ ');
				}
				else {
					return('\x00|+' + p3 + ' | ');
				}
			}
		);

		// remove closing tags
		obj.html = obj.html.replace(/\s*<\/(td|th|caption)>\s*()/gi, '');

		// line breaks, also in table cells (continued)
		obj.html = obj.html.replace(/<br\s*\/?>[\n ]*()/gi, '\x00');

		// <table>
		obj.html = obj.html.replace(/[\s\x00]*<table>[\s\x00]*(\|-(?=[\n\x00]))?/gi, '\x00\x00{|\x00');
		obj.html = obj.html.replace(/[\s\x00]*<(table)\s+([^>]*)>[\s\x00]*(\|-(?=[\n\x00]))?/gi,
			function(p, p1, p2, p3) {
				var table = '\x00\x00{|';
				if (wikEd.config.wikifyTableParameters != '') {
					table += ' ' + wikEd.config.wikifyTableParameters;
				}
				else {
					table += wikEd.SanitizeAttributes(p1, p2, wikiCode);
				}
				return(table + '\x00');
			}
		);
		obj.html = obj.html.replace(/[\s\x00]*<\/table>[\s\x00]*()/gi, '\x00|}\x00\x00');
	}

	// for table mode override pasted table class // {{TABLE}}
	else if (wikEd.tableMode == true) {
		obj.html = obj.html.replace(/(<table\b)([^>]*)(>)/gi,
			function(p, p1, p2, p3) {
				if (/\bclass=/.test(p2) == true) {
					p2 = p2.replace(/\bclass\s*=\s*(['"]?)[^<>'"\n]*?\1/g, 'class="wikEdTableEdit"');
				}
				else {
					p2 = ' class="wikEdTableEdit"';
				}
				return(p1 + p2 + p3);
			}
		);

		// table block element needs only one newline
		obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*(<table\b[^>]*>)/gi, '\x00\x00$2');
		obj.html = obj.html.replace(/(<\/table>)(\s|<br\b[^>]*>|\x00)*()/gi, '$1\x00');
	}

	// line breaks (continued)
	if (wikEd.tableMode == true) {
		obj.html = obj.html.replace(/<br\s*\/?>[\n ]*()/gi, '\x00');
	}

	// convert links
	obj.html = obj.html.replace(/<a(\b[^>]*)>((.|\n)*?)<\/a>/gi,
		function(p, p1, p2) {
			var linkParam = p1;
			var linkText = p2;

			var hrefUrlParam = null;
			var hrefUrlArticle = null;
			var imgWidth = '';
			var hrefParamTitle = null;
			var hrefParamISBN = null;
			var hrefParamAction = null;
			var hrefParamSpecial = false;
			var linkArticleAnchor = '';
			var linkArticle = '';
			var linkTitle = '';

			// get href value
			var hrefValue;
			var regExpMatchLink = linkParam.match(/\bhref="([^">]*)"/);
			if (regExpMatchLink != null) {
				hrefValue = regExpMatchLink[1];

				// get absolute path from ./index.php and ../../index.php
				hrefValue = wikEd.RelativeToAbsolutePath(hrefValue);

				// check for wiki article link and get parameters
				//                                             1                         2 article 2                        3articl314 anchor  4                          6                       7   8 urlpar 87539 anchor 9
				var regExpArticle = new RegExp(wikEd.server + '(' + wikEd.articlePath + '([^"\\?#]+)|' + wikEd.script + '\\?([^"#]*))(#[^"]*)?');
				var regExpMatchArticle = regExpArticle.exec(hrefValue);
				if (regExpMatchArticle != null) {

					// article name from url path <a href="../wiki/ hrefUrlArticle ">
					hrefUrlArticle = regExpMatchArticle[2];

					// article name from url parameters <a href="url? hrefUrlParam ">
					hrefUrlParam = regExpMatchArticle[3];

					// link anchor <a href="link #anchor">
					linkArticleAnchor = regExpMatchArticle[4] || '';
					if (linkArticleAnchor != '') {
						linkArticleAnchor = linkArticleAnchor.replace(/\.([0-9A-F]{2})/g, '%$1');
						linkArticleAnchor = decodeURIComponent(linkArticleAnchor);
						linkArticleAnchor = linkArticleAnchor.replace(/_\d+$/g, '');
					}

					// parse hrefUrlParam and check for special parameters
					if (hrefUrlParam != null) {
						var regExpMatchHref;
						var regExpHref = /(^|&amp;)(\w+)=([^"\&]+)/g;
						while ( (regExpMatchHref = regExpHref.exec(hrefUrlParam)) != null) {
							var param = regExpMatchHref[2];
							var value = regExpMatchHref[3];
							switch (param) {
								case 'title':
									hrefParamTitle = value;
									break;
								case 'isbn':
									hrefParamISBN = value;
									break;
								case 'redlink':
									break;
								case 'action':
									hrefParamAction = value;
									break;
								default:
									hrefParamSpecial = true;
							}
							if (hrefParamAction != null) {
								break;
							}
						}
					}

					// ISBN links
					if (hrefParamAction == null) {
						if ( (hrefParamISBN != null) && (hrefParamSpecial != true) ) {
							var isbn = hrefParamISBN;
							var regExpMatchISBN = /((\d\-?){13}|(\d\-?){10})/.exec(linkText);
							if (regExpMatchISBN != null) {
								isbn = regExpMatchISBN[1];
							}
							return('ISBN ' + isbn);
						}

						// get article from href parameters
						else if ( (hrefParamTitle != null) && (hrefParamSpecial != true) ) {
							linkArticle = hrefParamTitle;
							linkArticle = linkArticle.replace(/_/g, ' ');
							linkArticle = decodeURIComponent(linkArticle);
						}

						// get article name from url path
						else if (hrefUrlArticle != null) {
							linkArticle = hrefUrlArticle;
							linkArticle = linkArticle.replace(/_/g, ' ');
							linkArticle = decodeURIComponent(linkArticle);
						}

						// get article name from <a title="">
						else {
							var regExpMatchTitle = /\btitle="([^">]+)"/.exec(linkParam);
							if (regExpMatchTitle != null) {
								linkArticle = regExpMatchTitle[1];
							}
						}
					}
				}

				// format wiki link
				if (linkArticle != '') {

					// check for wiki image
					var regExpMatchImage = /^<img\b[^>]*?\bwidth="(\d+)"[^>]*>$/.exec(linkText);
					if (regExpMatchImage != null) {
						imgWidth = regExpMatchImage[1];
						imgWidth = '|' + imgWidth + 'px';
						if ( (linkTitle != '') && (linkTitle != 'Enlarge') ) {
							linkTitle = '|' + linkTitle;
							return('[[' + linkArticle + imgWidth + linkTitle + ']]');
						}
						else {
							return('[[' + linkArticle + imgWidth + ']]');
						}
					}

					// category link
					var regExpCat = new RegExp('^(Category|' + wikEd.config.text['wikicode Category'] + ')\\s*:(.*)', 'i');
					var regExpMatchCat = regExpCat.exec(linkArticle);
					if (regExpMatch != null) {
						return('[[' + wikEd.config.text['wikicode Category'] + ':' + regExpMatchCat[1].charAt(0).toUpperCase() + linkText.substr(1) + ']]');
					}

					// wiki link
					if (linkArticle == linkText.charAt(0).toUpperCase() + linkText.substr(1)) {
						return('[[' + linkText + linkArticleAnchor + ']]');
					}

					// date link (English only)
					var regExpMatchDate = /^(January|February|March|April|May|June|July|August|September|October|November|December) (\d{1,2})$/.exec(linkArticle);
					if (regExpMatchDate != null) {
						var month = regExpMatchDate[1];
						var day = regExpMatchDate[2];
						if (linkText == (day + ' ' + month) ) {
							return('[[' + linkArticle + linkArticleAnchor + ']]');
						}
					}

					// lowercase the article name if the first char of the link text can exist in lower/uppercase and is lowercase
					if ( linkText.charAt(0).toLowerCase() != linkText.charAt(0).toUpperCase() ) {
						if ( linkText.charAt(0) == linkText.charAt(0).toLowerCase() ) {
							linkArticle = linkArticle.charAt(0).toLowerCase() + linkArticle.substr(1);
						}
					}

					// suffix links
					var regExpStrSuffix = new RegExp('^' + linkArticle.replace(/(\W)/g, '\\$1') + '([' + wikEd.letters + '_]+)$');
					var regExpMatchSuffix = regExpStrSuffix.exec(linkText);
					if (regExpMatchSuffix != null) {
						return('[[' + linkArticle + linkArticleAnchor + ']]' + regExpMatchSuffix[1]);
					}
					return('[[' + linkArticle + linkArticleAnchor + '|' + linkText + ']]');
				}

				// external link
				if (hrefValue != '') {

					// PubMed link
					var regExpMatchPubMed = /^http:\/\/www\.ncbi\.nlm\.nih\.gov\/entrez\/query\.fcgi\?cmd=Retrieve&amp;db=pubmed&amp;.*?&amp;list_uids=(\d+)/.exec(hrefValue);
					if (regExpMatchPubMed != null) {
						return('PMID ' + regExpMatchPubMed[1]);
					}

					// DOI link
					regExpMatchDOI = /^http:\/\/dx\.doi\.org\/(.*)/.exec(hrefValue);
					if (regExpMatchDOI != null) {
						return('{{doi|' + regExpMatchDOI[1] + '}}');
					}

					// other external link
					return('[' + hrefValue + ' ' + linkText + ']');
				}
			}

			// probably an anchor, return nothing
			return '';
		}
	);

	// clean up MediaWiki category list
	var regExp = new RegExp('<span\\b[^>]*>(\\[\\[(Category|' + wikEd.config.text['wikicode Category'] + ')\\s*:[^\\]]+\\]\\])<\\/span>[\\s\\x00\\|]*', 'gi');
	obj.html = obj.html.replace(regExp, '$1\x00');

	// clean up DOI
	obj.html = obj.html.replace(/\[\[Digital object identifier\|DOI\]\]:(\{\{doi\|[^\}\s]+\}\})/gi, '$1');

	// convert images
	obj.html = obj.html.replace(/<img\b([^>]*)>/gi,
		function(p, p1) {

			// get and format parameters
			var address = '';
			var regExpMatch = /\bsrc\s*=\s*('|")([^'"]*)('|")/i.exec(p1);
			if (regExpMatch != null) {
				address = regExpMatch[2].replace(/^\s+|\s+$/g, '');
			}

			var imgAlt = '';
			regExpMatch = /\balt\s*=\s*('|")([^'"]*)('|")/i.exec(p1);
			if (regExpMatch != null) {
				imgAlt = regExpMatch[2].replace(/^\s+|\s+$/g, '');
				imgAlt = imgAlt.replace(/&amp;nbsp;|[\n\x00]/g, ' ');
				imgAlt = imgAlt.replace(/\s{2,}/g, ' ');
				imgAlt = imgAlt.replace(/^\s|\s$/g, '');
				if (imgAlt != '') {
					imgAlt = '|' + imgAlt;
				}
			}

			var imgWidth = '';
			regExpMatch = /\bwidth\s*=\s*('|")([^'"]*)('|")/i.exec(p1);
			if (regExpMatch != null) {
				imgWidth = '|' + regExpMatch[2].replace(/^\s+|\s+$/g, '') + 'px';
			}

			var imgLink = '';
			regExpMatch = /([^\/]+)$/.exec(address);
			if (regExpMatch != null) {
				imgLink = regExpMatch[1];
				if (imgLink != '') {
					return('[[' + wikEd.config.text['wikicode Image'] + ':' + imgLink + imgWidth + imgAlt + ']]');
				}
			}
			return('');
		}
	);

	// convert lists: * # : ;
	var listObj = {};
	listObj.prefix = '';
	obj.html = obj.html.replace(/[\s\x00]*<(\/?(ol|ul|li|dl|dd|dt))\b[^>]*>[\s\x00]*()/gi,
		function(p, p1, p2, p3, p4) {
			switch (p1.toLowerCase()) {
				case 'ol':
					listObj.prefix += '#';
					return('\x00');
				case 'ul':
					listObj.prefix += '*';
					return('\x00');
				case 'dl':
					listObj.prefix += ':';
					return('\x00');
				case '/ol':
				case '/ul':
				case '/dl':
					listObj.prefix = listObj.prefix.substr(0, listObj.prefix.length - 1);
					return('\x00\x00');
				case 'li':
				case 'dd':
					return('\x00' + listObj.prefix + ' ');
				case 'dt':
					return('\x00' + listObj.prefix.replace(/:$/, ';') + ' ');
				case '/li':
				case '/dt':
				case '/dd':
					return('');
			}
			return('');
		}
	);
	obj.html = obj.html.replace(/[\n|\x00]+[#*:;]+\s(?=[\n|\x00])/g, '');

	// <> remove not allowed tags
	obj.html = obj.html.replace(/(<\/?)(\/?)(\w+)([^>]*>)/g,
		function(p, p1, p2, p3, p4) {

			// keep table tags if in table mode
			if (wikEd.tableMode == true) {
				if (/^(table|tr|td|th|thead|tbody|tfoot|col|colgroup|caption)$/i.test(p3) == true) {
					p = p.replace(/</g, '\x01');
					p = p.replace(/>/g, '\x02');
					return(p);
				}
			}

			// keep html elements with name, id, or class starting with wikEdKeep
			if (wikEd.keepFormatting == true) {
				if ( /^(div|span|ins|del)$/i.test(p3) == true) {
					if ( /\b(name|id|class)="wikEdKeep/.test(p4) == true) {
						p = p.replace(/</g, '\x01');
						p = p.replace(/>/g, '\x02');
						return(p);
					}
				}
			}

			// keep allowed tags
			if ( /^(big|blockquote|colgroup|center|code|del|div|br|font|ins|p|pre|s|small|span|strike|sub|sup|tt|u|rb|rp|rt|ruby|nowiki|math|score|noinclude|includeonly|onlyinclude|ref|charinsert|gallery|syntaxhighlight|source|poem|categorytree|hiero|imagemap|inputbox|timeline|references|syntaxhighlight)$/i.test(p3) == true) {
				return(p);
			}

			return('');
		}
	);

	// sanitize attributes in opening html tags
	obj.html = obj.html.replace(/<(\w+)\s+([^>]*?)\s*(\/?)>/gi,
		function(p, p1, p2, p3) {
			if (p3 != '') {
				p3 = ' ' + p3;
			}
			return('<' + p1 + wikEd.SanitizeAttributes(p1, p2, wikiCode) + p3 + '>');
		}
	);

	// unformat underlined, italic or bold blanks
	// corrupts existing text
	//	obj.html = obj.html.replace(/<u>('''|''|\s|\x00)*([\s\x00]+)('''|''|\s|\x00)*<\/u>/g, '$2');
	//	obj.html = obj.html.replace(/'''(''|\s|\x00)*([\s\x00]+)(''|\s|\x00)*'''/g, '$2');
	//	obj.html = obj.html.replace(/''([\s\x00]+)''/g, '$1');

	// fix MS Word non-style heading formatting
	obj.html = obj.html.replace(/(\x00(={1,6})\s*)(<u>|'''|'')+((.|\n)*?)(<\/u>|'''|'\')+( *\2\x00)/gi, '$1$4$7');

	// remove empty headings
	obj.html = obj.html.replace(/\x00(={1,6})\s+\1\x00/g, '\x00');

	// remove space-only lines
	if (wikiCode != true) {
		obj.html = obj.html.replace(/([\s\x00]*\x00[\s\x00]*)/g,
			function(p, p1) {
				return(p1.replace(/\n/g, '\x00'));
			}
		);
	}

	// remove trailing linebreaks from table cells
	obj.html = obj.html.replace(/\x00{2,}(\||!)/g, '\x00$1');

	// remove leading and trailing spaces
	if (wikiCode == true) {
		obj.html = obj.html.replace(/\x00[ \n]+</g, '\x00<');
	}
	else {
		obj.html = obj.html.replace(/\x00\s+</g, '\x00<');
	}
	obj.html = obj.html.replace(/>\s+\x00/g, '>\x00');

	// remove empty inline and block tag pairs
	obj.html = wikEd.RemoveEmptyTags(obj.html, /( *)<(big|colgroup|code|del|font|ins|pre|s|small|span|strike|sub|sup|tt|u|rb|rp|rt|ruby|nowiki|math|score|noinclude|includeonly|onlyinclude|ref|charinsert)\b[^>]*><\/\1> *()/gi, '$1');
	obj.html = wikEd.RemoveEmptyTags(obj.html, /[\s\x00]*<(blockquote|center|div|gallery|syntaxhighlight|source|poem|categorytree|hiero|imagemap|inputbox|timeline|references)\b[^>]*><\/\1>[\s\x00]*()/gi, '\x00\x00');

	// remove empty lines from block tags
	obj.html = obj.html.replace(/(<(blockquote|center|div|p|pre|gallery|syntaxhighlight|source|poem|categorytree|hiero|imagemap|inputbox|timeline|references)\b[^>]*>[\s\x00])[\s\x00]+/gi, '$1');
	obj.html = obj.html.replace(/[\s\x00]+([\s\x00]<\/(blockquote|center|div|p|pre|gallery|syntaxhighlight|source|poem|categorytree|hiero|imagemap|inputbox|timeline|references)>)/gi, '$1');

	// blockquote
	obj.html = obj.html.replace(/(<blockquote\b[^>]*>[\s\x00]+)([\S\s]*?)([\s\x00]+<\/blockquote>)/gi,
		function(p, p1, p2, p3) {
			p2 = p2.replace(/\x00/g, '<br>\n');
			return(p1 + p2 + p3);
		}
	);

	// escape < >
	obj.html = obj.html.replace(/</g, '&lt;');
	obj.html = obj.html.replace(/>/g, '&gt;');

	// newlines to <br>
	obj.html = obj.html.replace(/\x00+\n/g, '\n');
	obj.html = obj.html.replace(/\n\x00+/g, '\n');
	obj.html = obj.html.replace(/\n*\x00(\x00|\n)+/g, '\n\n');
	obj.html = obj.html.replace(/\x00/g, '\n');
	obj.html = obj.html.replace(/\n/g, '<br>');

	// preserved table and pre tags and spaces
	obj.html = obj.html.replace(/\x01/g, '<');
	obj.html = obj.html.replace(/\x02/g, '>');
	obj.html = obj.html.replace(/\x03/g, '\xa0');

	// table block element needs only one newline
	obj.html = obj.html.replace(/(<\/table><br\b[^>]*>)(<br\b[^>]*>)+/g, '$1');

	// remove empty lines from article start and end
	if (obj.from == 'whole') {
		obj.html = obj.html.replace(/^(<br\b[^>]*>)+/gi, '');
		obj.html = obj.html.replace(/(<br\b[^>]*>)+$/gi, '');
	}
	return;
};
