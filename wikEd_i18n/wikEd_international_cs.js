/*

{{en:User:Cacycle/wikEd_template}}

This is the Czech translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

<pre><nowiki> */

var wikEdText = {

// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Click to disable',
			'wikEdLogo error alt':         'Chyba wikEd',
			'wikEdLogo error title':       'Chyba při načítání - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Kliknutím vypnete',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'Nepodporovaný prohlížeč - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Incompatible script or gadget "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    'Vypnuté - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Kliknutím zapnete',

// top jumper
			'wikEdScrollToEdit4 alt':      'Přejít na úpravy',
			'wikEdScrollToEdit4 title':    'Přejít na pole úprav',

// button bar grip titles
			'wikEdGripFormat title':       'Formátovací tlačítka (kliknutím skryjete nebo zobrazíte)',
			'wikEdGripCustom1 title':      'Vlastní tlačítka (kliknutím skryjete nebo zobrazíte)',
			'wikEdGripFind title':         'Tlačítka vyhlefávání(kliknutím skryjete nebo zobrazíte)',
			'wikEdGripFix title':          'Tlačítka opravování (kliknutím skryjete nebo zobrazíte)',
			'wikEdGripCustom2 title':      'Vlastní tlačítka (kliknutím skryjete nebo zobrazíte)',
			'wikEdGripControl title':      'Ovládací tlačítka wikEd (kliknutím skryjete nebo zobrazíte)',

// formatting buttons, top row
			'wikEdUndo alt':               'Zpět',
			'wikEdUndo title':             'Zpět',
			'wikEdRedo alt':               'Znovu',
			'wikEdRedo title':             'Znovu',
			'wikEdBold alt':               'Bold',
			'wikEdBold title':             'Tučné',
			'wikEdItalic alt':             'Kurzíva',
			'wikEdItalic title':           'Kurzíva',
			'wikEdUnderline alt':          'Podtrhnout',
			'wikEdUnderline title':        'Podtrhnout',
			'wikEdStrikethrough alt':      'Přešktnout',
			'wikEdStrikethrough title':    'Přešktnout',
			'wikEdNowiki alt':             'Nowiki',
			'wikEdNowiki title':           'Použít značku Nowiki',
			'wikEdSuperscript alt':        'Horní index',
			'wikEdSuperscript title':      'Horní index',
			'wikEdSubscript alt':          'Dolní index',
			'wikEdSubscript title':        'Dolní index',
			'wikEdRef alt':                'Ref',
			'wikEdRef title':              'In-text reference (shift-click: named tag)',
			'wikEdCase alt':               'Velikost písmen',
			'wikEdCase title':             'Přepnout mezi malými, prvním velkým a velkými písmeny',
			'wikEdSort alt':               'Sort',
			'wikEdSort title':             'Sort lines alphabetically',
			'wikEdRedirect alt':           'Přesměrování',
			'wikEdRedirect title':         'Vytvorit přesměrování, smaže celý text',
			'wikEdUndoAll alt':            'Zpět všechny',
			'wikEdUndoAll title':          'Zpět všechny změny',
			'wikEdRedoAll alt':            'Znovu všechny',
			'wikEdRedoAll title':          'Znovu všechny změny',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'Odkaz',
			'wikEdWikiLink title':         'Wikiodkaz',
			'wikEdWebLink alt':            'Webový odkaz',
			'wikEdWebLink title':          'Externí webový odkaz',
			'wikEdHeading alt':            'Nadpis',
			'wikEdHeading title':          'Zvýšit nadpisy o úroveň (shift-kliknutí: snížit)',
			'wikEdBulletList alt':         'Seznam s odrážkami',
			'wikEdBulletList title':       'Zvýšit o úroveň seznam s odrážkami (shift-kliknutí: snížit)',
			'wikEdNumberList alt':         'Seznam s čísly',
			'wikEdNumberList title':       'Zvýšit o úroveň seznam s čísly (shift-kliknutí: snížit)',
			'wikEdIndentList alt':         'Seznam s odsazením',
			'wikEdIndentList title':       'Zvýšit o úroveň seznam s odsazením (shift-kliknutí: snížit)',
			'wikEdDefinitionList alt':     'Seznam def',
			'wikEdDefinitionList title':   'Definiční seznam',
			'wikEdImage alt':              'Obrázek',
			'wikEdImage title':            'Obrázek',
			'wikEdTable alt':              'Tabulka',
			'wikEdTable title':            'Tabulka',
			'wikEdReferences alt':         'Reference',
			'wikEdReferences title':       'Reference (shift-kliknutí: Sekce Reference)',

// textify buttons
			'wikEdWikify alt':             'Wikifikace',
			'wikEdWikify title':           'Convert pasted content to wiki code, update highlighting',
			'wikEdTextify alt':            'Textifikace',
			'wikEdTextify title':          'Convert pasted content to plain text, update highlighting (shift-click: forced highlighting)',

// find and replace buttons, top row
			'wikEdFindAll alt':            'Najít všechny',
			'wikEdFindAll title':          'Najít všechny výskyty',
			'wikEdFindPrev alt':           'Najít předešlý',
			'wikEdFindPrev title':         'Najít předešlý výskyt',
			'wikEdFindSelect title':       'Vybrat předešlé hledání nebo skok na nadpis',
			'wikEdFindNext alt':           'Najít další',
			'wikEdFindNext title':         'Find next match (shift-click: get selection)',
			'wikEdJumpPrev alt':           'Selected prev',
			'wikEdJumpPrev title':         'Find the selected text backwards',
			'wikEdJumpNext alt':           'Selected next',
			'wikEdJumpNext title':         'Find the selected text forwards',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'Nahradit všechny',
			'wikEdReplaceAll title':       'Nahradit všechny výskyty v celém textu resp. ve výběru',
			'wikEdReplacePrev alt':        'Nahradit predešlý',
			'wikEdReplacePrev title':      'Nahradit predešlý výskyt',
			'wikEdReplaceSelect title':    'Vybrat predešlé nahrazení',
			'wikEdReplaceNext alt':        'Nahradit další',
			'wikEdReplaceNext title':      'Nahradit další výskyt (shift-click: get selection)',
			'wikEdCaseSensitive alt':      'Na velikosti písmen záleží',
			'wikEdCaseSensitive title':    'Hledání zohledňuje velikost písmen',
			'wikEdRegExp alt':             'RegExp',
			'wikEdRegExp title':           'Vy vyhledávacím poli je regulární výraz',
			'wikEdFindAhead alt':          'Okamžité hledání',
			'wikEdFindAhead title':        'Hledat během psaní výrazu (nezohledňuje velikost písmen, nerozeznává regulární výrazy)',

// fix buttons, top row
			'wikEdFixBasic alt':           'Základní oprava',
			'wikEdFixBasic title':         'Opravit prázdná místa a řádky, zahrnuto v ostatních opravných funkcích',
			'wikEdFixHtml alt':            'Opravit HTML',
			'wikEdFixHtml title':          'Opravit HTML na wikisyntax',
			'wikEdFixCaps alt':            'Opravit velká písmena',
			'wikEdFixCaps title':          'Opravit velká písmena v nadpisech a seznamech',
			'wikEdFixUnicode alt':         'Opravit Unicode',
			'wikEdFixUnicode title':       'Opravit reprezentaci znaků Unicode',
			'wikEdFixAll alt':             'Opravit vše',
			'wikEdFixAll title':           'Základní oprava, HTML, velikost písmen a Unicode',
			'wikEdFixRedirect alt':        'Fix redirects',
			'wikEdFixRedirect title':      'Fix redirects',

// fix buttons, bottom row
			'wikEdFixDashes alt':          'Opravit pomlčky',
			'wikEdFixDashes title':        'Opravit pomlčky',
			'wikEdFixPunct alt':           'Opravit diakritiku',
			'wikEdFixPunct title':         'Opravit mezery před diakritikou',
			'wikEdFixMath alt':            'Opravit matematiku',
			'wikEdFixMath title':          'Opravit matematické vzorce',
			'wikEdFixChem alt':            'Opravit chemii',
			'wikEdFixChem title':          'Opravit chemické vzorce',
			'wikEdFixUnits alt':           'Opravit jednotky',
			'wikEdFixUnits title':         'Opravit jednotky',
			'wikEdFixRegExTypo alt':       'Opravit překlepy',
			'wikEdFixRegExTypo title':     'Opravit překlepy pomocí pravidel AutoWikiBrowser RegExTypoFixer',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, TEMPL]',
			'wikEdRefHide title':          'Toggle [REF] and [TEMPL] hiding',
			'wikEdRefButtonTooltip':       'Click to display hidden reference',
			'wikEdTemplButtonTooltip':     'Click to display hidden template',
			'wikEdCharEntityButtonTooltip': 'Click to display hidden character entity',
			'wikEdRefButtonShowTooltip':   'Click to hide reference',
			'wikEdTemplButtonShowTooltip': 'Click to hide template',
			'wikEdCharEntityButtonShowTooltip': 'Click to hide character entity',
			'wikEdTextZoom alt':           'Změna velikosti písma',
			'wikEdTextZoom title':         'Zmenšit velikost písma (klik se shiftem: zvětšit)',
			'wikEdClearHistory alt':       'Vyčistit historii',
			'wikEdClearHistory title':     'Vyčistit historii polí vyhledat, nahradit a celá historie',
			'wikEdScrollToPreview alt':    'Přejít na náhled',
			'wikEdScrollToPreview title':  'Přejít na pole náhledu',
			'wikEdScrollToEdit alt':       'Přejít na úpravy',
			'wikEdScrollToEdit title':     'Přejít na pole úprav',
			'wikEdTableMode alt':          'Table mode',
			'wikEdTableMode title':        'Toggle table edit mode',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'Používat wikEd',
			'wikEdUseWikEd title':         'Přepnout mezi obyčejným textovým polem a wikEd',
			'wikEdHighlightSyntax alt':    'Zvýraznění syntaxe',
			'wikEdHighlightSyntax title':  'Prepnout zvýrazňování syntaxe',
			'wikEdSource alt':             'Zdroj',
			'wikEdCloseToolbar title':     'Zavřít standardní ne-wikEd panel nástrojů',
			'wikEdCloseToolbar alt':       'Zavřít panel nástrojů',
			'wikEdSource title':           'Zobrazit zdrojový kód pro testovací účely',
			'wikEdUsing alt':              'Pomocí',
			'wikEdUsing title':            'Automaticky přidávat \'\'…pomocí wikEd\'\' do shrnutí editace',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Automaticky přepínat na vylepšené zobrazení rozdílů (diff)',
			'wikEdFullScreen alt':         'Celá obrazovka',
			'wikEdFullScreen title':       'Přepnout na celou plochu okna',

// summary buttons
			'wikEdClearSummary alt':       'Vyčistit shrnutí',
			'wikEdClearSummary title':     'Vyčistit pole shrnutí editace',
			'wikEdSummarySelect title':    'Vybrat z předešlých shrnutí',
			'wikEdPresetSummary': [
				'/*  */ ', 'copyedit', 'odpověď', 'vytvořena stránka', 'přepis úvodu',
				'linkfix', 'opravy překlepů', 'odstraněn linkspam', 'odstraněny experimenty',
				'odstraněn vandalizmus', 'formátování zdrojového textu', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '…pomocí [[en:User:Cacycle/wikEd|wikEd]]',

// button title acceskey
			'alt-shift':                   'alt-shift-',

// submit buttons
			'wikEdLocalPreviewImg alt':    'Náhled dolů',
			'wikEdLocalPreview title':     'Zobrazit náhled dolů',
			'wikEdLocalDiffImg alt':       'Změny dolů',
			'wikEdLocalDiff title':        'Zobrazit změny dolů',
			'wikEdHelpPageLink':           ' | <a href="{wikEdHomeBaseUrl}wiki/User:Cacycle/wikEd_help" target="helpwindow">Pomocník wikEd</a>', // use full link without {wikEdHomeBaseUrl} if the page is not on the English Wikipedia

// preview and changes buttons, top
			'wikEdClose alt':              'Zavřít',
			'wikEdClose title':            'Zavřít pole s náhledem',
			'wikEdClose2 alt':             'Zavřít',
			'wikEdClose2 title':           'Zavřít pole s náhledem',
			'wikEdScrollToPreview2 alt':   'Přesunout na náhled',
			'wikEdScrollToPreview2 title': 'Přesunout na pole náhled',
			'wikEdScrollToEdit2 alt':      'Přesunout na úpravy',
			'wikEdScrollToEdit2 title':    'Přesunout na pole úpravy',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'Přesunout na náhled',
			'wikEdScrollToPreview3 title': 'Přesunout na pole náhled',
			'wikEdScrollToEdit3 alt':      'Přesunout na úpravy',
			'wikEdScrollToEdit3 title':    'Přesunout na pole úpravy',

// preview field
			'wikEdPreviewLoading':         '...',

// formatting functions
			'image filename':              'název_souboru',
			'image width':                 'šířka',
			'table caption':               'nadpis',
			'table heading':               'hlavička',
			'table cell':                  'buňka',
			'redirect article link':       'odkaz_na_článek',

// fixing functions
			'External links':              'Externí odkazy',
			'See also':                    'Související odkazy',
			'References':                  'Reference',

// language specific wiki code
			'wikicode Image':              'Obrázek',
			'wikicode File':               'Soubor',
			'wikicode Category':           'Kategorie',
			'wikicode Template':           'Šablona',
			'wikEdReferencesSection':      '\n== Reference ==\n\n<references />\n',
			'talk page':                   'talk',
			'history page':                'history',
			'talk namespace':              'Talk',
			'talk namespace suffix':       '_talk',

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'TEMPL',

// shortened button texts
			'shortenedPreview':            'Náhled',
			'shortenedChanges':            'Změny',

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
			'wikEdDiffButton title':       'Vylepšené zobrazení změn',
			'wikEdDiffLoading':            '...'

}