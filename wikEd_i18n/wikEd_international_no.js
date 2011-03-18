/*

{{en:User:Cacycle/wikEd_template}}

This is the Norwegian translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

<pre><nowiki> */

var wikEdText = {

// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Klikk for å deaktivere',
			'wikEdLogo error alt':         'wikEd feil',
			'wikEdLogo error title':       'Innlastingsfeil - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Klikk for å deaktivere',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'Browser not supported - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Incompatible script or gadget "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    'Deativert - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Klikk for å aktivere',

// top preview jumper
			'wikEdScrollToEdit4 alt':      'Scroll to edit',
			'wikEdScrollToEdit4 title':    'Scroll to edit field',

// button bar grip titles
			'wikEdGripFormat title':       'Formatting buttons (click to hide or show)',
			'wikEdGripTextify title':      'Textify and wikify buttons (click to hide or show)',
			'wikEdGripCustom1 title':      'Custom buttons (click to hide or show)',
			'wikEdGripFind title':         'Find buttons (click to hide or show)',
			'wikEdGripFix title':          'Fixing buttons (click to hide or show)',
			'wikEdGripCustom2 title':      'Custom buttons (click to hide or show)',
			'wikEdGripControl title':      'wikEd control buttons (click to hide or show)',

// formatting buttons, top row
			'wikEdUndo alt':               'Angre',
			'wikEdUndo title':             'Angre',
			'wikEdRedo alt':               'Gjør om',
			'wikEdRedo title':             'Gjør om',
			'wikEdBold alt':               'Fet',
			'wikEdBold title':             'Fet tekst',
			'wikEdItalic alt':             'Kursiv',
			'wikEdItalic title':           'Kursiv tekst',
			'wikEdUnderline alt':          'Understreking',
			'wikEdUnderline title':        'Understreket tekst',
			'wikEdStrikethrough alt':      'Gjennomstreking',
			'wikEdStrikethrough title':    'Gjennomstreket tekst',
			'wikEdNowiki alt':             'Nowiki',
			'wikEdNowiki title':           'Deaktiver Wiki-språk',
			'wikEdSuperscript alt':        'Hevet',
			'wikEdSuperscript title':      'Hevet tekst',
			'wikEdSubscript alt':          'Senket',
			'wikEdSubscript title':        'Senket tekst',
			'wikEdRef alt':                'Ref',
			'wikEdRef title':              'Referanser (shift-click: named tag)',
			'wikEdCase alt':               'Små/store bokstaver',
			'wikEdCase title':             'Bytt mellom små bokstaver, stor bokstav i begynnelsen av ord, og store bokstaver',
			'wikEdSort alt':               'Sort',
			'wikEdSort title':             'Sort lines alphabetically',
			'wikEdRedirect alt':           'Omdirigering',
			'wikEdRedirect title':         'Lag omdirigering, sletter hele teksten',
			'wikEdUndoAll alt':            'Angre alt',
			'wikEdUndoAll title':          'Angre alle endringer',
			'wikEdRedoAll alt':            'Gjør om alt',
			'wikEdRedoAll title':          'Gjør om alle endringer',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'Lenke',
			'wikEdWikiLink title':         'Wikilenke',
			'wikEdWebLink alt':            'Lenke',
			'wikEdWebLink title':          'Ekstern lenke',
			'wikEdHeading alt':            'Overskrift',
			'wikEdHeading title':          'Øk overskriftsnivå (Shift+klikk: Reduser)',
			'wikEdBulletList alt':         'Punktmerket liste',
			'wikEdBulletList title':       'Øk punktnivå (Shift+klikk: Reduser)',
			'wikEdNumberList alt':         'Nummerert liste',
			'wikEdNumberList title':       'Øk punktnivå (Shift+klikk: Reduser)',
			'wikEdIndentList alt':         'Inrykksliste',
			'wikEdIndentList title':       'Øk inrykk (Shift+klikk: Reduser)',
			'wikEdDefinitionList alt':     'Def liste',
			'wikEdDefinitionList title':   'Definisjonsliste',
			'wikEdImage alt':              'Bilde',
			'wikEdImage title':            'Bilde',
			'wikEdTable alt':              'Tabbel',
			'wikEdTable title':            'Tabbel',
			'wikEdReferences alt':         'Referanser',
			'wikEdReferences title':       'Referanseplassering (Shift+klikk: References section)',

// textify buttons
			'wikEdWikify alt':             'Wikifer',
			'wikEdWikify title':           'Convert pasted content to wiki code, update highlighting',
			'wikEdTextify alt':            'Tekstifer',
			'wikEdTextify title':          'Convert pasted content to plain text, update highlighting (shift-click: forced highlighting)',

// find and replace buttons, top row
			'wikEdFindAll alt':            'Finn alle',
			'wikEdFindAll title':          'Finn alle treff',
			'wikEdFindPrev alt':           'Finn forr',
			'wikEdFindPrev title':         'Finn forrige treff',
			'wikEdFindSelect title':       'Select a previous search or jump to a heading',
			'wikEdFindNext alt':           'Finn neste',
			'wikEdFindNext title':         'Find next match (shift-click: get selection)',
			'wikEdJumpPrev alt':           'Selected prev',
			'wikEdJumpPrev title':         'Find the selected text backwards',
			'wikEdJumpNext alt':           'Selected next',
			'wikEdJumpNext title':         'Find the selected text forwards',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'Erstatt alle',
			'wikEdReplaceAll title':       'Erstatt alle treff i teksten, eller den markerte teksten',
			'wikEdReplacePrev alt':        'Erstatt forrige',
			'wikEdReplacePrev title':      'Erstatt forrige treff',
			'wikEdReplaceSelect title':    'Select a previous replacement',
			'wikEdReplaceNext alt':        'Erstatt neste',
			'wikEdReplaceNext title':      'Erstatt det neste treffet (shift-click: get selection)',
			'wikEdCaseSensitive alt':      'Skill mellom store og små bokstaver',
			'wikEdCaseSensitive title':    'Skill mellom store og små bokstaver i søket',
			'wikEdRegExp alt':             'RegExp',
			'wikEdRegExp title':           'Søkefeltet er en "regular expression"',
			'wikEdFindAhead alt':          'Finn fort',
			'wikEdFindAhead title':        'Finn mens du skriver',

// fix buttons, top row
			'wikEdFixBasic alt':           'Fiks basis',
			'wikEdFixBasic title':         'Fiks blanke steder og tomme linjer, blir også gjort av de andre funksjonene',
			'wikEdFixHtml alt':            'Fiks html',
			'wikEdFixHtml title':          'Fiks html til wikikode',
			'wikEdFixCaps alt':            'Fiks store bokstaver',
			'wikEdFixCaps title':          'Fiks store bokstaver i overskrifter og lister',
			'wikEdFixUnicode alt':         'Fiks Unicode',
			'wikEdFixUnicode title':       'Fiks Unicode tegn representasjoner',
			'wikEdFixAll alt':             'Fiks alle',
			'wikEdFixAll title':           'Fiks basis, html, store bokstaver, og Unicode',
			'wikEdFixRedirect alt':        'Fix redirects',
			'wikEdFixRedirect title':      'Fix redirects',

// fix buttons, bottom row
			'wikEdFixDashes alt':          'Fiks tankestreker',
			'wikEdFixDashes title':        'Fiks tankestreker',
			'wikEdFixPunct alt':           'Fiks tegnsetting',
			'wikEdFixPunct title':         'Fiks mellomrom før tegn',
			'wikEdFixMath alt':            'Fiks matte',
			'wikEdFixMath title':          'Fiks matteformler',
			'wikEdFixChem alt':            'Fiks kjemi',
			'wikEdFixChem title':          'Fiks kjemiske formler',
			'wikEdFixUnits alt':           'Fiks enheter',
			'wikEdFixUnits title':         'Fiks enheter',
			'wikEdFixRegExTypo alt':       'Fiks skrivefeil',
			'wikEdFixRegExTypo title':     'Fiks skrivefeil med AutoWikiBrowser RegExTypoFixer regler',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, TEMPL]',
			'wikEdRefHide title':          'Toggle [REF] and [TEMPL] hiding',
			'wikEdRefButtonTooltip':       'Click to display hidden reference',
			'wikEdTemplButtonTooltip':     'Click to display hidden template',
			'wikEdCharEntityButtonTooltip': 'Click to display hidden character entity',
			'wikEdRefButtonShowTooltip':   'Click to hide reference',
			'wikEdTemplButtonShowTooltip': 'Click to hide template',
			'wikEdCharEntityButtonShowTooltip': 'Click to hide character entity',
			'wikEdTextZoom alt':           'Tekst zoom',
			'wikEdTextZoom title':         'Zoom ut (Shift-klikk: zoom inn)',
			'wikEdClearHistory alt':       'Slett logg',
			'wikEdClearHistory title':     'Slett søk-, erstatt-, og forklaringsloggen',
			'wikEdScrollToPreview alt':    'Scroll to preview',
			'wikEdScrollToPreview title':  'Scroll to preview field',
			'wikEdScrollToEdit alt':       'Scroll to edit',
			'wikEdScrollToEdit title':     'Scroll to edit field',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'Bruke wikEd',
			'wikEdUseWikEd title':         'Bytt mellom "gammel" endring og wikEd',
			'wikEdHighlightSyntax alt':    'Syntaks',
			'wikEdHighlightSyntax title':  'Skru av/på automatisk syntaksutheving',
			'wikEdTableMode alt':          'Table mode',
			'wikEdTableMode title':        'Toggle table edit mode',
			'wikEdSource alt':             'Kilde',
			'wikEdCloseToolbar title':     'Lukk den "gamle" endringsverktøylinjen',
			'wikEdCloseToolbar alt':       'Lukk verktøylinjen',
			'wikEdSource title':           'Hvis kildekoden for testing',
			'wikEdUsing alt':              'Bruker',
			'wikEdUsing title':            'Legg til \'\'…using wikEd\'\' til forklaringen automatisk',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Toggle automatic improved diff view',
			'wikEdFullScreen alt':         'Fullskjerm',
			'wikEdFullScreen title':       'Skru av/på fullskjermsmodus',

// summary buttons
			'wikEdClearSummary alt':       'Tøm forklaring',
			'wikEdClearSummary title':     'Tøm forklaringsfeltet',
			'wikEdSummarySelect title':    'Select a previous summary',
			'wikEdPresetSummary': [
				'copyedit', 'reply', 'article created', 'intro rewrite',
				'linkfix', 'fixing typos', 'removing linkspam', 'reverting test',
				'reverting vandalism', 'formatting source text', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '…using [[User:Cacycle/wikEd|wikEd]]',

// button title acceskey
			'alt-shift':                   'alt-shift-',

// submit buttons
			'wikEdLocalPreviewImg alt':    'Forhåndsvis nedenfor',
			'wikEdLocalPreview title':     'Forhåndsvisning nedenfor',
			'wikEdLocalDiffImg alt':       'Endringer nedenfor',
			'wikEdLocalDiff title':        'Vis endringer nedenfor',
			'wikEdHelpPageLink':           ' | <a href="{wikEdHomeBaseUrl}wiki/User:Cacycle/wikEd_help" target="helpwindow">wikEd hjelp</a>', // use full link without {wikEdHomeBaseUrl} if the page is not on the English Wikipedia

// preview and changes buttons, top
			'wikEdClose alt':              'Lukk tittel',
			'wikEdClose title':            'Lukk forhåndsvisningsboks',
			'wikEdClose2 alt':             'Lukk tittel',
			'wikEdClose2 title':           'Lukk forhåndsvisningstittel',
			'wikEdScrollToPreview2 alt':   'Scroll to preview',
			'wikEdScrollToPreview2 title': 'Scroll to preview field',
			'wikEdScrollToEdit2 alt':      'Scroll to edit',
			'wikEdScrollToEdit2 title':    'Scroll to edit field',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'Scroll to preview',
			'wikEdScrollToPreview3 title': 'Scroll to preview field',
			'wikEdScrollToEdit3 alt':      'Scroll to edit',
			'wikEdScrollToEdit3 title':    'Scroll to edit field',

// preview field
			'wikEdPreviewLoading':         '...',

// formatting functions
			'image filename':              'filnavn',
			'image width':                 'bredde',
			'table caption':               'bildetittel',
			'table heading':               'overskrift',
			'table cell':                  'celle',
			'redirect article link':       'artikkel lenke',

// fixing functions
			'External links':              'External links',
			'See also':                    'See also',
			'References':                  'References',

// language specific wiki code
			'wikicode Image':              'Image',
			'wikicode File':               'Fil',
			'wikicode Category':           'Category',
			'wikicode Template':           'Template',
			'wikEdReferencesSection':      '\n== References ==\n\n<references />\n',
			'talk page':                   'talk',
			'history page':                'history',
			'talk namespace':              'Talk',
			'talk namespace suffix':       '_talk',

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'TEMPL',

// shortened button texts
			'shortenedPreview':            'Forhåndsvis',
			'shortenedChanges':            'Endringer',

// follow link popup
			'followLink':                  '(Ctrl-click)',
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
			'wikEdDiffButton title':       'Show improved diff view',
			'wikEdDiffLoading':            '...'

}