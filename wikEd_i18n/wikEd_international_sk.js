/*

{{en:User:Cacycle/wikEd_template}}

This is the Slovak translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

<pre><nowiki> */

var wikEdText = {

// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Click to disable',
			'wikEdLogo error alt':         'Chyba wikEd',
			'wikEdLogo error title':       'Chyba pri načítaní - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Kliknutím vypnete',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'Nepodporovaný prehliadač - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Incompatible script or gadget "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    'Vypnuté - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Kliknutím zapnete',

// top jumper
			'wikEdScrollToEdit4 alt':      'Scroll to edit',
			'wikEdScrollToEdit4 title':    'Scroll to edit field',

// button bar grip titles
			'wikEdGripFormat title':       'Formátovacie tlačidlá (kliknutím skryjete alebo zobrazíte)',
			'wikEdGripTextify title':      'Textify and wikify buttons (click to hide or show)',
			'wikEdGripCustom1 title':      'Vlastné tlačidlá (kliknutím skryjete alebo zobrazíte)',
			'wikEdGripFind title':         'Tlačidlá vyhľadávania (kliknutím skryjete alebo zobrazíte)',
			'wikEdGripFix title':          'Tlačidlá opravovanie (kliknutím skryjete alebo zobrazíte)',
			'wikEdGripCustom2 title':      'Vlastné tlačidlá (kliknutím skryjete alebo zobrazíte)',
			'wikEdGripControl title':      'Ovládacie tlačidlá wikEd (kliknutím skryjete alebo zobrazíte)',

// formatting buttons, top row
			'wikEdUndo alt':               'Späť',
			'wikEdUndo title':             'Späť',
			'wikEdRedo alt':               'Znova',
			'wikEdRedo title':             'Znova',
			'wikEdBold alt':               'Bold',
			'wikEdBold title':             'Hrubý text',
			'wikEdItalic alt':             'Kurzíva',
			'wikEdItalic title':           'Text kurzívou',
			'wikEdUnderline alt':          'Podčiarknuť',
			'wikEdUnderline title':        'Podčiarknuť text',
			'wikEdStrikethrough alt':      'Prečiarknuť',
			'wikEdStrikethrough title':    'Prečiarknuť text',
			'wikEdNowiki alt':             'Nowiki',
			'wikEdNowiki title':           'Použiť značku Nowiki',
			'wikEdSuperscript alt':        'Horný index',
			'wikEdSuperscript title':      'Horný index',
			'wikEdSubscript alt':          'Dolný index',
			'wikEdSubscript title':        'Dolný index',
			'wikEdRef alt':                'Ref',
			'wikEdRef title':              'Referencia v texte (shift-click: named tag)',
			'wikEdCase alt':               'Veľkosť písmen',
			'wikEdCase title':             'Prepnúť medzi malými, prvým veľkým a veľkými písmenami',
			'wikEdSort alt':               'Sort',
			'wikEdSort title':             'Sort lines alphabetically',
			'wikEdRedirect alt':           'Presmerovanie',
			'wikEdRedirect title':         'Vytvoriť presmerovanie, zmaže celý text',
			'wikEdUndoAll alt':            'Späť všetky',
			'wikEdUndoAll title':          'Späť všetky zmeny',
			'wikEdRedoAll alt':            'Znova všetky',
			'wikEdRedoAll title':          'Znova všetky zmeny',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'Odkaz',
			'wikEdWikiLink title':         'Wikiodkaz',
			'wikEdWebLink alt':            'Webový odkaz',
			'wikEdWebLink title':          'Externý webový odkaz',
			'wikEdHeading alt':            'Nadpis',
			'wikEdHeading title':          'Zvýšiť nadpisy o úroveň (shift-kliknutie: znížiť)',
			'wikEdBulletList alt':         'Zoznam s odrážkami',
			'wikEdBulletList title':       'Zvýšiť o úroveň zoznam s odrážkami (shift-kliknutie: znížiť)',
			'wikEdNumberList alt':         'Zoznam s číslami',
			'wikEdNumberList title':       'Zvýšiť o úroveň zoznam s číslami (shift-kliknutie: znížiť)',
			'wikEdIndentList alt':         'Zoznam s odsadením',
			'wikEdIndentList title':       'Zvýšiť o úroveň zoznam s odsadením (shift-kliknutie: znížiť)',
			'wikEdDefinitionList alt':     'Zoznam def',
			'wikEdDefinitionList title':   'Definičný zoznam',
			'wikEdImage alt':              'Obrázok',
			'wikEdImage title':            'Obrázok',
			'wikEdTable alt':              'Tabuľka',
			'wikEdTable title':            'Tabuľka',
			'wikEdReferences alt':         'Referencie',
			'wikEdReferences title':       'Referencie (shift-kliknutie: References section)',

// textify buttons
			'wikEdWikify alt':             'Wikifikácia',
			'wikEdWikify title':           'Convert pasted content to wiki code, update highlighting',
			'wikEdTextify alt':            'Textifikácia',
			'wikEdTextify title':          'Convert pasted content to plain text, update highlighting (shift-click: forced highlighting)',

// find and replace buttons, top row
			'wikEdFindAll alt':            'Nájsť všetky',
			'wikEdFindAll title':          'Nájsť všetky výskyt',
			'wikEdFindPrev alt':           'Nájsť predošlý',
			'wikEdFindPrev title':         'Nájsť predošlý výskyt',
			'wikEdFindSelect title':       'Vybrať predošlá hľadanie alebo skok na nadpis',
			'wikEdFindNext alt':           'Nájsť ďalší',
			'wikEdFindNext title':         'Find next match (shift-click: get selection)',
			'wikEdJumpPrev alt':           'Selected prev',
			'wikEdJumpPrev title':         'Find the selected text backwards',
			'wikEdJumpNext alt':           'Selected next',
			'wikEdJumpNext title':         'Find the selected text forwards',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'Nahradiť všetky',
			'wikEdReplaceAll title':       'Nahradiť všetky výskyty v celom texte resp. vo výbere',
			'wikEdReplacePrev alt':        'Nahradiť predošlý',
			'wikEdReplacePrev title':      'Nahradiť predošlý výskyt',
			'wikEdReplaceSelect title':    'Vybrať predošlé nahradenie',
			'wikEdReplaceNext alt':        'Replace ďalší',
			'wikEdReplaceNext title':      'Nahradiť ďalší výskyt (shift-click: get selection)',
			'wikEdCaseSensitive alt':      'Záleží na veľkosti písmen',
			'wikEdCaseSensitive title':    'Hľadanie zohľadňuje veľkosť písmen',
			'wikEdRegExp alt':             'RegExp',
			'wikEdRegExp title':           'Vy vyhľadávacom poli je regulárny výraz',
			'wikEdFindAhead alt':          'Okamžité hľadanie',
			'wikEdFindAhead title':        'Vyhľadávať počas písania výrazu (nezohľadňuje veľkosť písmen, nerozoznáva regulárne výrazy)',

// fix buttons, top row
			'wikEdFixBasic alt':           'Opraviť základné',
			'wikEdFixBasic title':         'Opraviť prázdne miesta a riadky, toto je zahrnuté v ostatných opravných funkciách',
			'wikEdFixHtml alt':            'Opraviť HTML',
			'wikEdFixHtml title':          'Opraviť HTML na wikisyntax',
			'wikEdFixCaps alt':            'Opraviť veľké písmená',
			'wikEdFixCaps title':          'Opraviť veľké písmená v nadpisoch a zoznamoch',
			'wikEdFixUnicode alt':         'Opraviť Unicode',
			'wikEdFixUnicode title':       'Opraviť reprezentácie znakov Unicode',
			'wikEdFixAll alt':             'Opraviť všetko',
			'wikEdFixAll title':           'Opraviť základné, HTML, veľkosť písmen a Unicode',
			'wikEdFixRedirect alt':        'Fix redirects',
			'wikEdFixRedirect title':      'Fix redirects',

// fix buttons, bottom row
			'wikEdFixDashes alt':          'Opraviť pomlčky',
			'wikEdFixDashes title':        'Opraviť pomlčky',
			'wikEdFixPunct alt':           'Opraviť diakritiku',
			'wikEdFixPunct title':         'Opraviť medzery pred diakritikou',
			'wikEdFixMath alt':            'Opraviť matematiku',
			'wikEdFixMath title':          'Opraviť matematické vzorce',
			'wikEdFixChem alt':            'Opraviť chémiu',
			'wikEdFixChem title':          'Opraviť chemické vzorce',
			'wikEdFixUnits alt':           'Opraviť jednotky',
			'wikEdFixUnits title':         'Opraviť jednotky',
			'wikEdFixRegExTypo alt':       'Opraviť preklepy',
			'wikEdFixRegExTypo title':     'Opraviť preklepy pomocou AutoWikiBrowser RegExTypoFixer rules',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, TEMPL]',
			'wikEdRefHide title':          'Toggle [REF] and [TEMPL] hiding',
			'wikEdRefButtonTooltip':       'Click to display hidden reference',
			'wikEdTemplButtonTooltip':     'Click to display hidden template',
			'wikEdCharEntityButtonTooltip': 'Click to display hidden character entity',
			'wikEdRefButtonShowTooltip':   'Click to hide reference',
			'wikEdTemplButtonShowTooltip': 'Click to hide template',
			'wikEdCharEntityButtonShowTooltip': 'Click to hide character entity',
			'wikEdTextZoom alt':           'Zmena veľkosti písma',
			'wikEdTextZoom title':         'Cyklovanie zmeny veľkosti písma (shift-kliknutie: opačne)',
			'wikEdClearHistory alt':       'Vyčistiť históriu',
			'wikEdClearHistory title':     'Vyčistiť históriu polí vyhľadať, nahradiť a celková história',
			'wikEdScrollToPreview alt':    'Prejsť na náhľad',
			'wikEdScrollToPreview title':  'Prejsť na pole náhľad',
			'wikEdScrollToEdit alt':       'Prejsť na úpravy',
			'wikEdScrollToEdit title':     'Prejsť na pole úprav',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'Používať wikEd',
			'wikEdUseWikEd title':         'Prepnúť medzi klasickým textovým poľom a wikEd',
			'wikEdHighlightSyntax alt':    'Syntax',
			'wikEdHighlightSyntax title':  'Prepnúť automatické zvýrazňovanie syntaxe',
			'wikEdTableMode alt':          'Table mode',
			'wikEdTableMode title':        'Toggle table edit mode',
			'wikEdSource alt':             'Zdroj',
			'wikEdCloseToolbar title':     'Zatvoriť štandardný ne-wikEd panel nástrojov',
			'wikEdCloseToolbar alt':       'Zatvoriť panel nástrojov',
			'wikEdSource title':           'Zobraziť zdrojový kód pre testovacie účely',
			'wikEdUsing alt':              'Pomocou',
			'wikEdUsing title':            'Automaticky pridávať \'\'…pomocou wikEd\'\' do zhrnutí úprav',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Prepínať automatické vylepšené zobrazenie rozdielov (diff)',
			'wikEdFullScreen alt':         'Celá obrazovka',
			'wikEdFullScreen title':       'Prepnúť režim na celú obrazovku',

// summary buttons
			'wikEdClearSummary alt':       'Vyčistiť zhrnutie',
			'wikEdClearSummary title':     'Vyčistiť pole zhrnutie',
			'wikEdSummarySelect title':    'Vybrať z predošlých zhrnutí',
			'wikEdPresetSummary': [
				'/*  */ ', 'copyedit', 'odpoved', 'vytvorený článok', 'prepísanie úvodu',
				'linkfix', 'opravy preklepov', 'odstránenie linkspamu', 'odstránenie experimentov',
				'odstránenie vandalizmu', 'formátovanie zdrojového textu', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '…pomocou [[en:User:Cacycle/wikEd|wikEd]]',

// button title acceskey
			'alt-shift':                   'alt-shift-',

// submit buttons
			'wikEdLocalPreviewImg alt':    'Náhľad dolu',
			'wikEdLocalPreview title':     'Zobraziť náhľad dolu',
			'wikEdLocalDiffImg alt':       'Zmeny dolu',
			'wikEdLocalDiff title':        'Zobraziť zmeny dolu',
			'wikEdHelpPageLink':           ' | <a href="{wikEdHomeBaseUrl}wiki/User:Cacycle/wikEd_help" target="helpwindow">Pomocník wikEd</a>', // use full link without {wikEdHomeBaseUrl} if the page is not on the English Wikipedia

// preview and changes buttons, top
			'wikEdClose alt':              'Zatvoriť',
			'wikEdClose title':            'Zatvoriť pole s náhľadom',
			'wikEdClose2 alt':             'Zatvoriť',
			'wikEdClose2 title':           'Zatvoriť pole s náhľadom',
			'wikEdScrollToPreview2 alt':   'Presunúť na náhľad',
			'wikEdScrollToPreview2 title': 'Presunúť na pole náhľad',
			'wikEdScrollToEdit2 alt':      'Presunúť na úpravy',
			'wikEdScrollToEdit2 title':    'Presunúť na pole úpravy',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'Presunúť na náhľad',
			'wikEdScrollToPreview3 title': 'Presunúť na pole náhľad',
			'wikEdScrollToEdit3 alt':      'Presunúť na úpravy',
			'wikEdScrollToEdit3 title':    'Presunúť na pole úpravy',

// preview field
			'wikEdPreviewLoading':         '...',

// formatting functions
			'image filename':              'názov_súboru',
			'image width':                 'šírka',
			'table caption':               'nadpis',
			'table heading':               'hlavička',
			'table cell':                  'bunka',
			'redirect article link':       'odkaz_na_článok',

// fixing functions
			'External links':              'Externé odkazy',
			'See also':                    'Pozri aj',
			'References':                  'Referencie',

// language specific wiki code
			'wikicode Image':              'Obrázok',
			'wikicode File':               'Súbor',
			'wikicode Category':           'Kategória',
			'wikicode Template':           'Šablóna',
			'wikEdReferencesSection':      '\n== Referencie ==\n\n<references />\n',
			'talk page':                   'talk',
			'history page':                'history',
			'talk namespace':              'Talk',
			'talk namespace suffix':       '_talk',

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'TEMPL',

// shortened button texts
			'shortenedPreview':            'Náhľad',
			'shortenedChanges':            'Zmeny',

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
			'wikEdDiffButton title':       'Vylepšené zobrazenie zmien',
			'wikEdDiffLoading':            '...'

}