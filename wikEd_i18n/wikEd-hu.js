/*

{{en:User:Cacycle/wikEd_template}}

This is the Hungarian translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

Ez az angol  '''[[:en:User:Cacycle/wikEd|wikEd]]''' MediaWiki szerksztő script [[Wikipédia:wikEd|magyar]] fordítása  (utolsó változat: 0.9.91).
Útmutatás itt: [[:en:User:Cacycle/wikEd international]].

<pre><nowiki> */

wikEdText = {

// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Letiltás',
			'wikEdLogo error alt':         'wikEd hiba',
			'wikEdLogo error title':       'Hiba a betöltéskor - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Letiltás',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'Nem támogatott böngésző - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Incompatible script or gadget "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    'Letiltva - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Engedélyezés',

// standard preview jumper
			'wikEdScrollToEdit4 alt':      'Ugrás a szerkesztéshez',
			'wikEdScrollToEdit4 title':    'Ugrás a szerkesztéshez',

// button bar grip titles
			'wikEdGripFormat title':       'Formázás (elrejt/mutat)',
			'wikEdGripTextify title':      'Textify and wikify buttons (click to hide or show)',
			'wikEdGripCustom1 title':      'Saját gombok (elrejt/mutat)',
			'wikEdGripFind title':         'Keresés-csere (elrejt/mutat)',
			'wikEdGripFix title':          'Javítás (elrejt/mutat)',
			'wikEdGripCustom2 title':      'Saját gombok2 (elrejt/mutat)',
			'wikEdGripControl title':      'Vezérlőpanel (elrejt/mutat)',

// formatting buttons, top row
			'wikEdUndo alt':               'Mégse',
			'wikEdUndo title':             'Mégse',
			'wikEdRedo alt':               'Újra',
			'wikEdRedo title':             'Újra',
			'wikEdBold alt':               'Bold',
			'wikEdBold title':             'Vastag betű',
			'wikEdItalic alt':             'Dőlt betű',
			'wikEdItalic title':           'Dőlt betű',
			'wikEdUnderline alt':          'Aláhúzás',
			'wikEdUnderline title':        'Aláhúzás',
			'wikEdStrikethrough alt':      'Áthúzás',
			'wikEdStrikethrough title':    'Áthúzás',
			'wikEdNowiki alt':             'Nowiki',
			'wikEdNowiki title':           'Nincs wikikód értelmezés (nowiki)',
			'wikEdSuperscript alt':        'Felső index',
			'wikEdSuperscript title':      'Felső index',
			'wikEdSubscript alt':          'Alsó index',
			'wikEdSubscript title':        'Alsó index',
			'wikEdRef alt':                'Ref',
			'wikEdRef title':              'Hivatkozási pont a szövegen belül (shift-click: named tag)',
			'wikEdCase alt':               'Kis-nagybetű',
			'wikEdCase title':             'Kisbetű, nagy kezdőbetű, nagybetű váltása',
			'wikEdSort alt':               'Sort',
			'wikEdSort title':             'Sort lines alphabetically',
			'wikEdRedirect alt':           'Átirányítás',
			'wikEdRedirect title':         'Átirányítás másik oldalra',
			'wikEdUndoAll alt':            'Mindent vissza',
			'wikEdUndoAll title':          'Mindent visszaállít az eredetire',
			'wikEdRedoAll alt':            'Mindent újra',
			'wikEdRedoAll title':          'Minden változtatást újra végrehajt',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'Belső hivatkozás',
			'wikEdWikiLink title':         'Belső (wiki-)hivatkozás',
			'wikEdWebLink alt':            'Külső hivatkozás',
			'wikEdWebLink title':          'Külső (web-)hivatkozás',
			'wikEdHeading alt':            'Fejezetcím',
			'wikEdHeading title':          'Fejezetcím / szintnövelés (shift+kattintás: csökkentés)',
			'wikEdBulletList alt':         'Nem számozott felsorolás',
			'wikEdBulletList title':       'Nem számozott felsorolás / szintnövelés (shift+kattintás: csökkentés)',
			'wikEdNumberList alt':         'Számozott lista',
			'wikEdNumberList title':       'Számozott lista / szintnövelés (shift+kattintás: csökkentés)',
			'wikEdIndentList alt':         'Bekezdés',
			'wikEdIndentList title':       'Bekezdést / szintnövelés (shift+kattintás: csökkentés)',
			'wikEdDefinitionList alt':     'Definíció',
			'wikEdDefinitionList title':   'Definíció-lista',
			'wikEdImage alt':              'Kép',
			'wikEdImage title':            'Kép',
			'wikEdTable alt':              'Táblázat',
			'wikEdTable title':            'Táblázat',
			'wikEdReferences alt':         'Hivatkozások',
			'wikEdReferences title':       'Hivatkozások helye (shift+kattintás: References section)',

// textify buttons
			'wikEdWikify alt':             'Wikisít',
			'wikEdWikify title':           'Convert pasted content to wiki code, update highlighting',
			'wikEdTextify alt':            'Sima szöveg',
			'wikEdTextify title':          'Convert pasted content to plain text, update highlighting (shift-click: forced highlighting)',

// find and replace buttons, top row
			'wikEdFindAll alt':            'Mindet keres',
			'wikEdFindAll title':          'Minden előfordulást keres',
			'wikEdFindPrev alt':           'Előzőt keres',
			'wikEdFindPrev title':         'Előző előfordulást keres',
			'wikEdFindSelect title':       'Előző keresések, fejezetcímek',
			'wikEdFindNext alt':           'Következőt keres',
			'wikEdFindNext title':         'Find next match (shift-click: get selection)',
			'wikEdJumpPrev alt':           'Selected prev',
			'wikEdJumpPrev title':         'Find the selected text backwards',
			'wikEdJumpNext alt':           'Selected next',
			'wikEdJumpNext title':         'Find the selected text forwards',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'Mindet csréli',
			'wikEdReplaceAll title':       'Minden előfordulást cserél a kijelölt szövegben',
			'wikEdReplacePrev alt':        'Előzőt cserél',
			'wikEdReplacePrev title':      'Előző előfordulást cserél',
			'wikEdReplaceSelect title':    'Csere előzmények',
			'wikEdReplaceNext alt':        'Következőt cserél',
			'wikEdReplaceNext title':      'Következő előfordulást cserél (shift-click: get selection)',
			'wikEdCaseSensitive alt':      'Kis-nagybetű eltér',
			'wikEdCaseSensitive title':    'Kis- és nagybetűk megkülönböztetése',
			'wikEdRegExp alt':             'RegExp',
			'wikEdRegExp title':           'A keresett szöveg RegExp (reguláris kifejezés)',
			'wikEdFindAhead alt':          'Gépeléskor keres',
			'wikEdFindAhead title':        'Gépeléskor azonnal keres (nem kis-nagybetű érzékeny, nem RegExp)',

// fix buttons, top row
			'wikEdFixBasic alt':           'Alap javítás',
			'wikEdFixBasic title':         'Üres helyek, üres sorok javítása',
			'wikEdFixHtml alt':            'Html javítás',
			'wikEdFixHtml title':          'Html-ből wikikód',
			'wikEdFixCaps alt':            'Caps javítás',
			'wikEdFixCaps title':          'Fejezetcím és lista nagy betűsre javítása',
			'wikEdFixUnicode alt':         'Unicode javítás',
			'wikEdFixUnicode title':       'Unicode karakterek javítása',
			'wikEdFixAll alt':             'Mindent javít',
			'wikEdFixAll title':           'Mind a négy javítás',
			'wikEdFixRedirect alt':        'Fix redirects',
			'wikEdFixRedirect title':      'Fix redirects',

// fix buttons, bottom row
			'wikEdFixDashes alt':          'Kötőjel javítás',
			'wikEdFixDashes title':        'Kötőjelek javítása',
			'wikEdFixPunct alt':           'Központozás javítás',
			'wikEdFixPunct title':         'Központozási jelek előtti szünet ki',
			'wikEdFixMath alt':            'Matek javítás',
			'wikEdFixMath title':          'Matematikai kifejezések javítása',
			'wikEdFixChem alt':            'Kémia javítás',
			'wikEdFixChem title':          'Kémiai egyenletek javítása',
			'wikEdFixUnits alt':           'Egység javítás',
			'wikEdFixUnits title':         'Egységek javítása',
			'wikEdFixRegExTypo alt':       'RegEx javítás',
			'wikEdFixRegExTypo title':     'RegEx javítása az AutoWikiBrowser RegExTypoFixer szabályok alapján',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, TEMPL]',
			'wikEdRefHide title':          'Toggle [REF] and [TEMPL] hiding',
			'wikEdRefButtonTooltip':       'Click to display hidden reference',
			'wikEdTemplButtonTooltip':     'Click to display hidden template',
			'wikEdCharEntityButtonTooltip': 'Click to display hidden character entity',
			'wikEdRefButtonShowTooltip':   'Click to hide reference',
			'wikEdTemplButtonShowTooltip': 'Click to hide template',
			'wikEdCharEntityButtonShowTooltip': 'Click to hide character entity',
			'wikEdTextZoom alt':           'Szövegméret',
			'wikEdTextZoom title':         'Szövegméret növelés (shift+kattintás: csökkentés)',
			'wikEdClearHistory alt':       'Előzmények törlése',
			'wikEdClearHistory title':     'Előzmények törlése (keresés, csere, összefoglaló)',
			'wikEdScrollToPreview alt':    'Ugrás az előnézethez',
			'wikEdScrollToPreview title':  'Ugrás az előnézethez',
			'wikEdScrollToEdit alt':       'Ugrás a szerkesztőablakhoz',
			'wikEdScrollToEdit title':     'Ugrás a szerkesztőablakhoz',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'wikEd ki/be',
			'wikEdUseWikEd title':         'Váltás wikEd és sima szerkesztő között',
			'wikEdHighlightSyntax alt':    'Wikikód kiemelése',
			'wikEdHighlightSyntax title':  'Wikikód-színezés ki/be',
			'wikEdTableMode alt':          'Table mode',
			'wikEdTableMode title':        'Toggle table edit mode',
			'wikEdSource alt':             'Forrás',
			'wikEdCloseToolbar title':     'standard wiki eszközsor ki/be',
			'wikEdCloseToolbar alt':       'Standard wiki eszközsor ki/be',
			'wikEdSource title':           'forráskód mutatása (teszt)',
			'wikEdUsing alt':              'reklám',
			'wikEdUsing title':            '\'\'…a wikEd segítségével\'\' automatikus reklám az összefoglalóba',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Toggle automatic improved diff view',
			'wikEdFullScreen alt':         'Teljes képernyő',
			'wikEdFullScreen title':       'Teljes képernyő ki/be',

// summary buttons
			'wikEdClearSummary alt':       'Összefoglaló törlése',
			'wikEdClearSummary title':     'Szerkesztési összefoglaló törlése',
			'wikEdSummarySelect title':    'Előző szerkesztési összefoglaló választása',
			'wikEdPresetSummary': [
				'/*  */ ', 'copyedit', 'válasz', 'új cikk', 'bevezető újraírva',
				'link javítás', 'helyesírás javítása', 'linkspam ki', 'teszt vissza',
				'vandalizmus helyreállítása', 'formázás', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '…a [[Wikipédia:wikEd|wikEd]] segítségével',

// button title acceskey
			'alt-shift':                   'alt-shift-',

// submit buttons
			'wikEdLocalPreviewImg alt':    'Előnézet alul',
			'wikEdLocalPreview title':     'Előnézet',
			'wikEdLocalDiffImg alt':       'Változtatások alul',
			'wikEdLocalDiff title':        'Változtatások',
			'wikEdHelpPageLink':           ' | <a href="http://hu.wikipedia.org/wiki/Wikipédia:WikEd/Segítség" target="helpwindow">wikEd súgó</a>',

// preview and changes buttons, top
			'wikEdClose alt':              'Bezár',
			'wikEdClose title':            'Előnézet ablak bezárása',
			'wikEdClose2 alt':             'Bezár',
			'wikEdClose2 title':           'Előnézet ablak bezárása',
			'wikEdScrollToPreview2 alt':   'Ugrás az előnézethez',
			'wikEdScrollToPreview2 title': 'Ugrás az előnézethez',
			'wikEdScrollToEdit2 alt':      'Ugrás a szerkesztőablakhoz',
			'wikEdScrollToEdit2 title':    'Ugrás a szerkesztőablakhoz',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'Ugrás az előnézethez',
			'wikEdScrollToPreview3 title': 'Ugrás az előnézethez',
			'wikEdScrollToEdit3 alt':      'Ugrás a szerkesztőablakhoz',
			'wikEdScrollToEdit3 title':    'Ugrás a szerkesztőablakhoz',

// preview field
			'wikEdPreviewLoading':         '...',

// formatting functions
			'image filename':              'filenév (fájlnév)',
			'image width':                 'szélesség',
			'table caption':               'képfelirat',
			'table heading':               'fejléc',
			'table cell':                  'cella',
			'redirect article link':       'cikk hivatkozás',

// fixing functions
			'External links':              'Külső hivatkozások',
			'See also':                    'Lásd még',
			'References':                  'Hivatkozások',

// language specific wiki code
			'wikicode Image':              'Kép',
			'wikicode File':               'Fájl',
			'wikicode Category':           'Kategória',
			'wikicode Template':           'Sablon',
			'wikEdReferencesSection':      '\n== Hivatkozások ==\n\n<references />\n',
			'talk page':                   'talk',
			'history page':                'history',
			'talk namespace':              'Talk',
			'talk namespace suffix':       '_talk',

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'TEMPL',

// shortened button texts
			'shortenedPreview':            'Előnézet',
			'shortenedChanges':            'Változtatások',

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