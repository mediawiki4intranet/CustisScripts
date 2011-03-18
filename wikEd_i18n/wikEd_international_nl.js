/*

{{en:User:Cacycle/wikEd_template}}

This is the Dutch translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

<pre><nowiki> */

var wikEdText = {
// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Klik om uit te schakelen',
			'wikEdLogo error alt':         'wikEd fout',
			'wikEdLogo error title':       'Laad fout - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Klik om uit te schakelen',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'Browser niet ondersteund - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Incompatible script or gadget "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    'Uitgeschakeld - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Klik om in te schakelen',

// top jumper
			'wikEdScrollToEdit4 alt':      'Scrollen naar bewerking',
			'wikEdScrollToEdit4 title':    'Scrollen naar bewerkingsveld',

// button bar grip titles
			'wikEdGripFormat title':       'Opmaak knoppen (klik om te verbergen of weer te geven)',
			'wikEdGripCustom1 title':      'Aangepaste knoppen (klik om te verbergen of weer te geven)',
			'wikEdGripFind title':         'Zoek knoppen (klik om te verbergen of weer te geven)',
			'wikEdGripFix title':          'Repareer knoppen (klik om te verbergen of weer te geven)',
			'wikEdGripCustom2 title':      'Aangepaste knoppen (klik om te verbergen of weer te geven)',
			'wikEdGripControl title':      'wikEd controle knoppen (klik om te verbergen of weer te geven)',

// formatting buttons, top row
			'wikEdUndo alt':               'Ongedaan',
			'wikEdUndo title':             'Ongedaan maken',
			'wikEdRedo alt':               'Herhalen',
			'wikEdRedo title':             'Herhalen',
			'wikEdBold alt': 'Bold',
			'wikEdBold title':             'Tekst vetgedrukt',
			'wikEdItalic alt':             'Cursief',
			'wikEdItalic title':           'Tekst cursief',
			'wikEdUnderline alt':          'Onderstrepen',
			'wikEdUnderline title':        'Tekst onderstrepen',
			'wikEdStrikethrough alt':      'Doorhalen',
			'wikEdStrikethrough title':    'Tekst doorhalen',
			'wikEdNowiki alt':             'Nowiki',
			'wikEdNowiki title':           'Nowiki tekst',
			'wikEdSuperscript alt':        'Superscript',
			'wikEdSuperscript title':      'Superscript tekst',
			'wikEdSubscript alt':          'Subscript',
			'wikEdSubscript title':        'Subscript tekst',
			'wikEdRef alt':                'Ref',
			'wikEdRef title':              'In-tekst referentie (shift-klik: genaamde tag)',
			'wikEdCase alt':               'Hoofdletters',
			'wikEdCase title':             'Wissel tussen kleine letters, eerste letter hoofdletter, en hoofdletters',
			'wikEdSort alt':               'Sort',
			'wikEdSort title':             'Sort lines alphabetically',
			'wikEdRedirect alt':           'Doorsturen',
			'wikEdRedirect title':         'Maak doorsturen link (redirect), verwijderd alle tekst',
			'wikEdUndoAll alt':            'Alles ongedaan',
			'wikEdUndoAll title':          'Alle veranderingen ongedaan maken',
			'wikEdRedoAll alt':            'Alles herhalen',
			'wikEdRedoAll title':          'Alle veranderingen opnieuw herhalen',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'Link',
			'wikEdWikiLink title':         'Wiki link',
			'wikEdWebLink alt':            'Webpagina link',
			'wikEdWebLink title':          'Externe webpagina link',
			'wikEdHeading alt':            'Kop',
			'wikEdHeading title':          'Verhoog koptekst level (shift-klik: verlaag)',
			'wikEdBulletList alt':         'Opsommingstekens',
			'wikEdBulletList title':       'Verhoog opsommingstekens level (shift-klik: verlaag)',
			'wikEdNumberList alt':         'Nummering',
			'wikEdNumberList title':       'Verhoog nummering level (shift-klik: verlaag)',
			'wikEdIndentList alt':         'Inspring lijst',
			'wikEdIndentList title':       'Verhoog inspringing (shift-klik: verlaag)',
			'wikEdDefinitionList alt':     'Def lijst',
			'wikEdDefinitionList title':   'Definitie lijst',
			'wikEdImage alt':              'Afbeelding',
			'wikEdImage title':            'Afbeelding',
			'wikEdTable alt':              'Tabel',
			'wikEdTable title':            'Tabel',
			'wikEdReferences alt':         'Referenties',
			'wikEdReferences title':       'Referenties plaats (shift-klik: Referenties sectie)',

// textify buttons
			'wikEdWikify alt':             'Wikiveer',
			'wikEdWikify title':           'Converteer geplakte inhoud naar wiki code, update highlighting',
			'wikEdTextify alt':            'Textiveer',
			'wikEdTextify title':          'Converteer geplakte inhoud naar normale tekst, update highlighting (shift-click: forced highlighting)',

// find and replace buttons, top row
			'wikEdFindAll alt':            'Vind alles',
			'wikEdFindAll title':          'Vind alles gelijkenissen',
			'wikEdFindPrev alt':           'Vind vorige',
			'wikEdFindPrev title':         'Vind vorige gelijkenissen',
			'wikEdFindSelect title':       'Selecteer een volgende zoekactie of spring naar koptekst',
			'wikEdFindNext alt':           'Vind volgende',
			'wikEdFindNext title':         'Vind volgende gelijkenissen (shift-klik: verkrijg selectie)',
			'wikEdJumpPrev alt':           'Selecteerde vorige',
			'wikEdJumpPrev title':         'Vind geselecteerde tekst achterwaarts',
			'wikEdJumpNext alt':           'Selecteerde volgende',
			'wikEdJumpNext title':         'Vind geselecteerde tekst voorwaarts',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'Vervang alles',
			'wikEdReplaceAll title':       'Vervang alle gelijkenissen in de gehele tekst of selectie',
			'wikEdReplacePrev alt':        'Vervang vorige',
			'wikEdReplacePrev title':      'Vervang vorige gelijkenissen',
			'wikEdReplaceSelect title':    'Selecteer een vorige vervanging',
			'wikEdReplaceNext alt':        'Vervang volgende',
			'wikEdReplaceNext title':      'Vervang volgende gelijkenissen (shift-klik: verkrijg selectie)',
			'wikEdCaseSensitive alt':      'Hoofdletter gevoelig',
			'wikEdCaseSensitive title':    'Zoeken is hoofdletter gevoelig',
			'wikEdRegExp alt':             'RegExp',
			'wikEdRegExp title':           'Zoek veld is een reguliere expressie',
			'wikEdFindAhead alt':          'Vind vooruit',
			'wikEdFindAhead title':        'Vind vooruit als u typt (hoofdletter gevoelig niet-regexp zoeken)',

// fix buttons, top row
			'wikEdFixBasic alt':           'Repareer standaard',
			'wikEdFixBasic title':         'Repareer lege regels, wordt ook gedaan door andere repareer functies',
			'wikEdFixHtml alt':            'Repareer html',
			'wikEdFixHtml title':          'Repareer html naar wikicode',
			'wikEdFixCaps alt':            'Repareer hoofdletters',
			'wikEdFixCaps title':          'Repareer hoofdletters in kopteksten en lijsten',
			'wikEdFixUnicode alt':         'Repareer Unicode',
			'wikEdFixUnicode title':       'Repareer Unicode karakters weergave',
			'wikEdFixAll alt':             'Repareer alles',
			'wikEdFixAll title':           'Repareer standaard, html, hoofdletters, en Unicode',
			'wikEdFixRedirect alt':        'Fix redirects',
			'wikEdFixRedirect title':      'Fix redirects',

// fix buttons, bottom row
			'wikEdFixDashes alt':          'Repareer streep',
			'wikEdFixDashes title':        'Repareer streep',
			'wikEdFixPunct alt':           'Repareer interpunctie',
			'wikEdFixPunct title':         'Repareer spaties voor interpunctie',
			'wikEdFixMath alt':            'Repareer wiskunde',
			'wikEdFixMath title':          'Repareer wiskunde',
			'wikEdFixChem alt':            'Repareer scheikunde',
			'wikEdFixChem title':          'Repareer scheikundige formules',
			'wikEdFixUnits alt':           'Repareer units',
			'wikEdFixUnits title':         'Repareer units',
			'wikEdFixRegExTypo alt':       'Repareer typefouten',
			'wikEdFixRegExTypo title':     'Repareer typefouten d.m.v. de AutoWikiBrowser RegExTypoFixer regels',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, TEMPL]',
			'wikEdRefHide title':          'Toggle [REF] and [TEMPL] hiding',
			'wikEdRefButtonTooltip':       'Click to display hidden reference',
			'wikEdTemplButtonTooltip':     'Click to display hidden template',
			'wikEdCharEntityButtonTooltip': 'Click to display hidden character entity',
			'wikEdRefButtonShowTooltip':   'Click to hide reference',
			'wikEdTemplButtonShowTooltip': 'Click to hide template',
			'wikEdCharEntityButtonShowTooltip': 'Click to hide character entity',
			'wikEdTextZoom alt':           'Tekstgrootte',
			'wikEdTextZoom title':         'Tekstgrootte vergroten (shift-klik: verkleinen)',
			'wikEdClearHistory alt':       'Verwijder geschiedenis',
			'wikEdClearHistory title':     'Verwijder de zoeken, vervangen, en samenvatting geschiedenis',
			'wikEdScrollToPreview alt':    'Scrollen naar voorbeeld',
			'wikEdScrollToPreview title':  'Scrollen naar voorbeeldveld',
			'wikEdScrollToEdit alt':       'Scrollen naar bewerking',
			'wikEdScrollToEdit title':     'Scrollen naar bewerkingsveld',
			'wikEdTableMode alt':          'Table mode',
			'wikEdTableMode title':        'Toggle table edit mode',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'Gebruik wikEd',
			'wikEdUseWikEd title':         'Wissel tussen standaard tekst en wikEd',
			'wikEdHighlightSyntax alt':    'Syntax',
			'wikEdHighlightSyntax title':  'Wissel automatisch syntax highlighting',
			'wikEdSource alt':             'Broncode',
			'wikEdCloseToolbar title':     'Sluit de standaard niet-wikEd toolbar',
			'wikEdCloseToolbar alt':       'Sluit toolbar',
			'wikEdSource title':           'Geef de broncode weer voor test doeleinde',
			'wikEdUsing alt':              'Gebruikt',
			'wikEdUsing title':            'Automatisch \'\'…gebruikt wikEd\'\' toevoegen aan samenvatting',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Wissel automatisch verbeterde diff weergave',
			'wikEdFullScreen alt':         'Volledig schernm',
			'wikEdFullScreen title':       'Wissel volledig scherm',

// summary buttons
			'wikEdClearSummary alt':       'Leeg samenvatting',
			'wikEdClearSummary title':     'Leeg het samenvattingsveld',
			'wikEdSummarySelect title':    'Selecteer een vorige samenvatting',
			'wikEdPresetSummary': [
				'/*  */ ', 'kopieerbewerken', 'antwoord', 'artikel aangemaakt', 'intro herschreven',
				'linkreparatie', 'repareer typefouten', 'linkspam verwijderd', 'test ongedaan gemaakt',
				'vandalisme ongedaan gemaakt', 'formatteren broncode', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '…gebruikt [[en:User:Cacycle/wikEd|wikEd]]',

// button title acceskey
			'alt-shift':                   'alt-shift-',

// submit buttons
			'wikEdLocalPreviewImg alt':    'Voorbeeld hieronder',
			'wikEdLocalPreview title':     'Laat voorbeeld hieronder zien',
			'wikEdLocalDiffImg alt':       'Veranderingen hieronder',
			'wikEdLocalDiff title':        'Laat huidige veranderingen hieronder zien',
			'wikEdHelpPageLink':           ' | <a href="{wikEdHomeBaseUrl}wiki/User:Cacycle/wikEd_help" target="helpwindow">wikEd help</a>', // use full link without {wikEdHomeBaseUrl} if the page is not on the English Wikipedia

// preview and changes buttons, top
			'wikEdClose alt':              'Sluiten',
			'wikEdClose title':            'Sluit voorbeeld venster',
			'wikEdClose2 alt':             'Sluiten',
			'wikEdClose2 title':           'Sluit voorbeeld venster',
			'wikEdScrollToPreview2 alt':   'Scroll naar voorbeeld',
			'wikEdScrollToPreview2 title': 'Scroll naar voorbeeldveld',
			'wikEdScrollToEdit2 alt':      'Scroll naar bewerking',
			'wikEdScrollToEdit2 title':    'Scroll naar bewerkingsveld',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'Scroll naar voorbeeld',
			'wikEdScrollToPreview3 title': 'Scroll naar voorbeeldveld',
			'wikEdScrollToEdit3 alt':      'Scroll naar bewerking',
			'wikEdScrollToEdit3 title':    'Scroll naar bewerkingsveld',

// preview field
			'wikEdPreviewLoading':         '...',

// formatting functions
			'image filename':              'bestandsnaam',
			'image width':                 'breedte',
			'table caption':               'onderschrift',
			'table heading':               'koptekst',
			'table cell':                  'cel',
			'redirect article link':       'artikel link',

// fixing functions
			'External links':              'Externe linken',
			'See also':                    'Zoe ook',
			'References':                  'Referenties',

// language specific wiki code
			'wikicode Image':              'Afbeelding',
			'wikicode File':               'Bestand',
			'wikicode Category':           'Categorie',
			'wikicode Template':           'Template',
			'wikEdReferencesSection':      '\n== Referenties ==\n\n<references />\n',
			'talk page':                   'talk',
			'history page':                'history',
			'talk namespace':              'Talk',
			'talk namespace suffix':       '_talk',

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'TEMPL',

// shortened button texts
			'shortenedPreview':            'Voorbeeld',
			'shortenedChanges':            'Veranderingen',

// follow link popup
			'followLink':                  '(ctrl-klik)',
			'followLinkMac':               '(cmd-click)',

// error message popups
			'wikEdTableModeError':         'The table wikicode contains errors',

// auto updating
			'wikEdGreasemonkeyAutoUpdate': 'wikEd Update:\n\nA new version of the GreaseMonkey script "wikEd" is available.\n\n\nIt will be downloaded from:\n\n{updateURL}',

// highlighting popups
			'wikEdHyphenDash':             'Standard hyphen',
			'wikEdFigureDash':             'Figure dash',
			'wikEdEnDash':                 'En dash',
			'wikEdEmDash':                 'Em dash',
			'wikEdBarDash':                'Horizontal bar',
			'wikEdMinusDash':              'Minus sign',
			'wikEdSoftHyphen':             'Soft hyphen',
			'wikEdTab':                    'Tab',
			'wikEdEnSpace':                'En space',
			'wikEdEmSpace':                'Em space',
			'wikEdThinSpace':              'Thin space',
			'wikEdIdeographicSpace':       'Ideographic space',

// highlighting
			'wikEdSignature3':             'Sign with username only',
			'wikEdSignature4':             'Sign with user name and date',
			'wikEdSignature5':             'Sign with date only',

// highlighting errors
			'wikEdErrorHtmlUnknown':       'Unsupported HTML tag',
			'wikEdErrorBoldItalic':        'Invalid bold / italic',
			'wikEdErrorWrongClose':        'Close tag does not match',
			'wikEdErrorNoOpen':            'Close tag has no match',
			'wikEdErrorNoHandler':         'No handler',
			'wikEdErrorNoClose':           'Open tag has no match',
			'wikEdErrorNewline':           'Open tag closed by new line',
			'wikEdErrorTemplHeading':      'Headings in templates are ignored',
			'wikEdErrorTemplParam':        'Template/parameter tags do not match',
			'wikEdErrorTemplParamAmbig':   'Template/parameter tags are ambiguous',

// highlighting image preview
			'wikEdFilePreview':            'Image preview',

// from [[en:User:Cacycle/wikEdDiff.js]]
			'wikEdDiffButtonImg alt':      'wikEdDiff',
			'wikEdDiffButton title':       'Laat verbeterde diff weergave zien',
			'wikEdDiffLoading':            '...'

}