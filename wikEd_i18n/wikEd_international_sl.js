/*

{{en:User:Cacycle/wikEd_template}}

This is the Slovenian translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

To je slovenski prevod razširitve urejevalnika MediaWiki '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Za navodila pri prevajanju glej [[:en:User:Cacycle/wikEd international]].

<pre><nowiki> */

var wikEdText = {

// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Klikni za izklop',
			'wikEdLogo error alt':         'Napaka wikEd',
			'wikEdLogo error title':       'Napaka pri nalaganju - WikEd {wikEdProgramVersion} ({wikEdProgramDate}) Klikni za izklop',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    'Izklopljeno - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Klikni za vklop',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'Brskalnik ni podprt - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Incompatible script or gadget "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',

// top jumper
			'wikEdScrollToEdit4 alt':      'Scroll to edit',
			'wikEdScrollToEdit4 title':    'Scroll to edit field',

// button bar grip titles
			'wikEdGripFormat title':       'Gumbi za oblikovanje (klik jih skrije oz. prikaže)',
			'wikEdGripTextify title':      'Textify and wikify buttons (click to hide or show)',
			'wikEdGripCustom1 title':      'Gumbi po meri (klik jih skrije oz. prikaže)',
			'wikEdGripFind title':         'Gumbi za iskanje (klik jih skrije oz. prikaže)',
			'wikEdGripFix title':          'Gumbi za popravljanje (klik jih skrije oz. prikaže)',
			'wikEdGripCustom2 title':      'Gumbi po meri (klik jih skrije oz. prikaže)',
			'wikEdGripControl title':      'Gumbi za nadzor wikEd (klik jih skrije oz. prikaže)',

// formatting buttons, top row
			'wikEdUndo alt':               'Razveljavi',
			'wikEdUndo title':             'Razveljavi',
			'wikEdRedo alt':               'Uveljavi',
			'wikEdRedo title':             'Uveljavi',
			'wikEdBold alt':               'Krepko',
			'wikEdBold title':             'Krepko besedilo',
			'wikEdItalic alt':             'Ležeče',
			'wikEdItalic title':           'Ležeče besedilo',
			'wikEdUnderline alt':          'Podčrtano',
			'wikEdUnderline title':        'Podčrtano besedilo',
			'wikEdStrikethrough alt':      'Prečrtano',
			'wikEdStrikethrough title':    'Prečrtano besedilo',
			'wikEdNowiki alt':             'Nowiki',
			'wikEdNowiki title':           'Besedilo v oznakah nowiki',
			'wikEdSuperscript alt':        'Nadpisano',
			'wikEdSuperscript title':      'Nadpisano besedilo',
			'wikEdSubscript alt':          'Podpisano',
			'wikEdSubscript title':        'Podpisano besedilo',
			'wikEdRef alt':                'Ref',
			'wikEdRef title':              'Medbesedilni vir (shift-click: named tag)',
			'wikEdReferences alt':         'Viri',
			'wikEdReferences title':       'Umesti vire (dvoklik: mala pisava)',
			'wikEdCase alt':               'Velikost črk',
			'wikEdCase title':             'Preklopi med malimi črkami, velikimi začetnicami in velikimi črkami',
			'wikEdSort alt':               'Sort',
			'wikEdSort title':             'Sort lines alphabetically',
			'wikEdRedirect alt':           'Preusmeritev',
			'wikEdRedirect title':         'Ustvari preusmeritev, izbriše celotno besedilo',
			'wikEdUndoAll alt':            'Razveljavi vse',
			'wikEdUndoAll title':          'Razveljavi vse spremembe',
			'wikEdRedoAll alt':            'Uveljavi vse',
			'wikEdRedoAll title':          'Uveljavi vse spremembe',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'Povezava',
			'wikEdWikiLink title':         'Wikipovezava',
			'wikEdWebLink alt':            'Spletna povezava',
			'wikEdWebLink title':          'Zunanja spletna povezava',
			'wikEdHeading alt':            'Podnaslov',
			'wikEdHeading title':          'Povečaj ravni podnaslovov (shift-klik: zmanjšaj)',
			'wikEdBulletList alt':         'Označi seznam',
			'wikEdBulletList title':       'Povečaj raven oštevilčenega seznama (dvigalka+klik: zmanjšaj)',
			'wikEdNumberList alt':         'Oštevilči seznam',
			'wikEdNumberList title':       'Povečaj raven oštevilčenega seznama (dvigalka+klik: zmanjšaj)',
			'wikEdIndentList alt':         'Zamik seznama',
			'wikEdIndentList title':       'Povečaj zamik (dvigalka+klik: zmanjšaj)',
			'wikEdDefinitionList alt':     'Seznam definicij',
			'wikEdDefinitionList title':   'Seznam definicij',
			'wikEdImage alt':              'Slika',
			'wikEdImage title':            'Slika',
			'wikEdTable alt':              'Tabela',
			'wikEdTable title':            'Razpredelnica',
			'wikEdReferences alt':         'Viri',
			'wikEdReferences title':       'Mesto virov (dvigalka+klik: References section)',
			'wikEdUpdateSyntax alt':       'Skladnja',
			'wikEdUpdateSyntax title':     'Posodobi označitev skladnje',

// textify buttons
			'wikEdWikify alt':             'Wikificirano',
			'wikEdWikify title':           'Convert pasted content to wiki code, update highlighting',
			'wikEdTextify alt':            'Ubesedili',
			'wikEdTextify title':          'Convert pasted content to plain text, update highlighting (shift-click: forced highlighting)',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'Uporabi wikEd',
			'wikEdUseWikEd title':         'Preklop med klasičnim besedilnim poljem in wikEd',
			'wikEdHighlightSyntax alt':    'Skladnja',
			'wikEdHighlightSyntax title':  'Vklopi samodejno označevanje skladnje',
			'wikEdSource alt':             'Vir',
			'wikEdCloseToolbar title':     'Zapri standardno ne-WikiEd orodno vrstico',
			'wikEdCloseToolbar alt':       'Zapri orodno vrstico',
			'wikEdSource title':           'Za namen preizkušanja prikaži izvorno kodo',
			'wikEdUsing alt':              'Uporabi',
			'wikEdUsing title':            'Samodejno dodajaj v povzetke \'\'…z uporabo wikEd\'\'',
			'wikEdFullScreen alt':         'Celotni zaslon',
			'wikEdFullScreen title':       'Vklopi celotnozaslonski način',

// find and replace buttons, top row
			'wikEdFindAll alt':            'Poišči vse',
			'wikEdFindAll title':          'Poišči vsa ujemanja',
			'wikEdFindPrev alt':           'Poišči prejšnje',
			'wikEdFindPrev title':         'Poišči prejšnje ujemanje',


			'wikEdFindSelect title':       'Select a previous search or jump to a heading',


			'wikEdFindNext alt':           'Poišči naslednje',
			'wikEdFindNext title':         'Find next match (shift-click: get selection)',
			'wikEdJumpPrev alt':           'Selected prev',
			'wikEdJumpPrev title':         'Find the selected text backwards',
			'wikEdJumpNext alt':           'Selected next',
			'wikEdJumpNext title':         'Find the selected text forwards',

// find and replace buttons, bottom row
			'wikEdGetFind alt':            'Pridobi za iskanje',
			'wikEdGetFind title':          'Skopiraj vsebino v polje išči (dvigalka+klik: skopiraj vsebino v polje za iskanje in zamenjavo)',
			'wikEdReplaceAll alt':         'Zamenjaj vse',
			'wikEdReplaceAll title':       'Zamenjaj vsa ujemanja v vsem besedilu ali izbranem besedilu',
			'wikEdReplacePrev alt':        'Zamenjaj prejšnje',
			'wikEdReplacePrev title':      'Zamenjaj prejšnje ujemanje',
			'wikEdReplaceSelect title':    'Select a previous replacement',
			'wikEdReplaceNext alt':        'Zamenjaj naslednje',
			'wikEdReplaceNext title':      'Zamenjaj naslednje ujemanje (shift-click: get selection)',
			'wikEdCaseSensitive alt':      'Razlikuj velikost črk',
			'wikEdCaseSensitive title':    'Iskanje razlikuje velikost črk',
			'wikEdRegExp alt':             'RegExp',
			'wikEdRegExp title':           'Iskalno polje vsebuje regularni izraz',
			'wikEdFindAhead alt':          'Išči vnaprej',
			'wikEdFindAhead title':        'Išči vnaprej ob pisanju (ne-razlikovalno ne-regexp iskanje)',

// fix buttons, top row
			'wikEdFixBasic alt':           'Popravi osnovno',
			'wikEdFixBasic title':         'Popravi presledke in prazne vrstice; to storijo tudi druge možnosti popravljanja',
			'wikEdFixHtml alt':            'Popravi html',
			'wikEdFixHtml title':          'Popravi html v wikikodo',
			'wikEdFixCaps alt':            'Popravi velike začetnice',
			'wikEdFixCaps title':          'Popravi velike začetnice v naslovih in seznamih',
			'wikEdFixUnicode alt':         'Popravi unikod',
			'wikEdFixUnicode title':       'Popravi zapis unikodnih znakov',
			'wikEdFixAll alt':             'Popravi vse',
			'wikEdFixAll title':           'Popravi osnovno, html, velike začetnice in unikod',
			'wikEdFixRedirect alt':        'Fix redirects',
			'wikEdFixRedirect title':      'Fix redirects',

// fix buttons, bottom row
			'wikEdFixDashes alt':          'Popravi vezaje',
			'wikEdFixDashes title':        'Popravi vezaje',
			'wikEdFixPunct alt':           'Popravi ločila',
			'wikEdFixPunct title':         'Popravi presledke pred ločili',
			'wikEdFixMath alt':            'Popravi matematično',
			'wikEdFixMath title':          'Popravi matematično besedilo',
			'wikEdFixChem alt':            'Popravi kemijsko',
			'wikEdFixChem title':          'Popravi kemijske formule',
			'wikEdFixUnits alt':           'Popravi enote',
			'wikEdFixUnits title':         'Popravi enote',
			'wikEdFixRegExTypo alt':       'Popravi črkovanje',
			'wikEdFixRegExTypo title':     'Z uporabo pravil AutoWikiBrowser RegExTypoFixer popravi črkovanje',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, TEMPL]',
			'wikEdRefHide title':          'Toggle [REF] and [TEMPL] hiding',
			'wikEdRefButtonTooltip':       'Click to display hidden reference',
			'wikEdTemplButtonTooltip':     'Click to display hidden template',
			'wikEdCharEntityButtonTooltip': 'Click to display hidden character entity',
			'wikEdRefButtonShowTooltip':   'Click to hide reference',
			'wikEdTemplButtonShowTooltip': 'Click to hide template',
			'wikEdCharEntityButtonShowTooltip': 'Click to hide character entity',
			'wikEdTextZoom alt':           'Velikost besedila',
			'wikEdTextZoom title':         'Prehod skozi povečave besedila (dvigalka+klik: v obratni smeri)',
			'wikEdClearHistory alt':       'Počisti zgodovino',
			'wikEdClearHistory title':     'Počisti zgodovino iskanja, zamenjevanja in povzetkov',
			'wikEdScrollToPreview alt':    'Scroll to preview',
			'wikEdScrollToPreview title':  'Scroll to preview field',
			'wikEdScrollToEdit alt':       'Scroll to edit',
			'wikEdScrollToEdit title':     'Scroll to edit field',


// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'Uporabi wikEd',
			'wikEdUseWikEd title':         'Preklopi med klasičnim besedilnim poljem in wikEd',
			'wikEdHighlightSyntax alt':    'Skladnja',
			'wikEdHighlightSyntax title':  'Vklopi samodejno označevanje skladnje',
			'wikEdTableMode alt':          'Table mode',
			'wikEdTableMode title':        'Toggle table edit mode',
			'wikEdSource alt':             'Vir',
			'wikEdCloseToolbar title':     'Zapri standardno ne-wikiEd orodno vrstico',
			'wikEdCloseToolbar alt':       'Zapri orodno vrstico',
			'wikEdSource title':           'Za namene preizkušanja pokaži izvorno kodo',
			'wikEdUsing alt':              'Z uporabo',
			'wikEdUsing title':            'V povzetke samodejno dodaj \'\'…z uporabo wikEd\'\'',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Toggle automatic improved diff view',
			'wikEdFullScreen alt':         'Celotnozaslonsko',
			'wikEdFullScreen title':       'Vklopi celotnozaslonski način',

// summary buttons
			'wikEdClearSummary alt':       'Izprazni povzetek',
			'wikEdClearSummary title':     'Izprazni polje za povzetek',
			'wikEdSummarySelect title':    'Select a previous summary',
			'wikEdPresetSummary': [
				'ureditev', 'odgovor', 'nov članek', 'nov uvod',
				'popravek povezav', 'popravek tipkarskih napak', 'odstranitev reklamnih povezav', 'vrnitev preizkuševalca',
				'vrnitev vandalizma', 'oblikovanje izvornega besedila', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '…z uporabo [[:en:User:Cacycle/wikEd|wikEd]]',

// button title acceskey
			'alt-shift':                   'alt-shift-',

// submit buttons
			'wikEdLocalPreviewImg alt':    'Predogled spodaj',
			'wikEdLocalPreview title':     'Prikaži predogled spodaj',
			'wikEdLocalDiffImg alt':       'Spremembe spodaj',
			'wikEdLocalDiff title':        'Prikaži doslejšnje spremembe spodaj',
			'wikEdHelpPageLink':           ' | <a href="http://sl.wikipedia.org/wiki/Wikipedija:Orodja" target="helpwindow">pomoč za wikEd</a>',

// preview and changes buttons, top
			'wikEdClose alt':              'Naslov za zapri',
			'wikEdClose title':            'Zapri polje s predogledom',
			'wikEdClose2 alt':             'Naslov za zapri',
			'wikEdClose2 title':           'Zapri polje s predogledom',
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
			'image filename':              'ime datoteke',
			'image width':                 'širina',
			'table caption':               'napis (brez pike)',
			'table heading':               'glava',
			'table cell':                  'celica',
			'redirect article link':       'povezava na članek',

// fixing functions
			'External links':              'Zunanje povezave',
			'See also':                    'Glej tudi',
			'References':                  'Viri',

// language specific wiki code
			'wikicode Image':              'Slika',
			'wikicode File':               'Slika',
			'wikicode Category':           'Kategorija',
			'wikicode Template':           'Template',
			'wikEdReferencesSection':      '\n== Viri ==\n\n<references />\n',
			'talk page':                   'talk',
			'history page':                'history',
			'talk namespace':              'Talk',
			'talk namespace suffix':       '_talk',

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'TEMPL',

// shortened button texts
			'shortenedPreview':            'Predogled',
			'shortenedChanges':            'Spremembe',

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