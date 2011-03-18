/*

{{en:User:Cacycle/wikEd_template}}

This is the Lower Sorbian translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

<pre><nowiki> */

var wikEdText = {
// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Klikni, aby znjemóžnił',
			'wikEdLogo error alt':         'wikEd zmólka',
			'wikEdLogo error title':       'Zmólka pśi zacytanju - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Klikni, aby znjemóžnił',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'Wobglědowak se njepódpěra - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Incompatible script or gadget "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    'Znjemóžnjony - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Klikni, aby zmóžnił',

// top jumper
			'wikEdScrollToEdit4 alt':      'Za wobźěłanje kulaś',
			'wikEdScrollToEdit4 title':    'K wobźěłańskemu póloju kulaś',

// button bar grip titles
			'wikEdGripFormat title':       'Tłocaški formatěrowanja (klikni, aby je schował abo pokazał)',
'wikEdGripTextify title':      'Tłocaški za konwertěrowanje do teksta a wikikoda (klikni, aby je schował abo pokazał)',
			'wikEdGripCustom1 title':      'Swójske tłocaški (klikni, aby je schował abo pokazał)',
			'wikEdGripFind title':         'Pytańske tłocaški (klikni, aby je schował abo pokazał)',
			'wikEdGripFix title':          'Korekturne tłocaški (klikni, aby je schował abo pokazał)',
			'wikEdGripCustom2 title':      'Swójske tłocaški (klikni, aby je schował abo pokazał)',
			'wikEdGripControl title':      'wikEd kontrolne tłocaški (klikni, aby je schował abo pokazał)',

// formatting buttons, top row
			'wikEdUndo alt':               'Anulěrowaś',
			'wikEdUndo title':             'Anulěrowaś',
			'wikEdRedo alt':               'Wótnowiś',
			'wikEdRedo title':             'Wótnowiś',
			'wikEdBold alt':               'Tucny',
			'wikEdBold title':             'Tucny tekst',
			'wikEdItalic alt':             'Kursiwny',
			'wikEdItalic title':           'Kursiwny tekst',
			'wikEdUnderline alt':          'Pódšmarnuś',
			'wikEdUnderline title':        'Tekst pódšmarnuś',
			'wikEdStrikethrough alt':      'Pśešmarnuś',
			'wikEdStrikethrough title':    'Tekst pśešmarnuś',
			'wikEdNowiki alt':             'Nowiki',
			'wikEdNowiki title':           'Tekstowe wobznamjenjenje nowiki',
			'wikEdSuperscript alt':        'Wusoko stajony',
			'wikEdSuperscript title':      'Wusokostajony tekst',
			'wikEdSubscript alt':          'Dłymoko stajony',
			'wikEdSubscript title':        'Dłymokostajony tekst',
			'wikEdRef alt':                'Ref',
			'wikEdRef title':              'Referenca w teksće (Umsch-kliknjenje: pomjenowana toflicka)',
			'wikEdCase alt':               'Wjelikopisanje',
			'wikEdCase title':             'Mjazy małym pismikom, wjelikim zachopnym pismikom a wjelikimi pismikami pśešaltowaś',
			'wikEdSort alt':               'Sortěrowaś',
			'wikEdSort title':             'Smužki alfabetiski sortěrowaś',
			'wikEdRedirect alt':           'Dalej pósrědniś',
			'wikEdRedirect title':         'Dalejpósrědnjenje napóraś, wulašujo ceły tekst',
			'wikEdUndoAll alt':            'Wše anulěrowaś',
			'wikEdUndoAll title':          'Wše změny anulěrowaś',
			'wikEdRedoAll alt':            'Wše wótnowiś',
			'wikEdRedoAll title':          'Wše změny wótnowiś',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'Wótkaz',
			'wikEdWikiLink title':         'Wikiwótkaz',
			'wikEdWebLink alt':            'Webwótkaz',
			'wikEdWebLink title':          'Eksterny webwótkaz',
			'wikEdHeading alt':            'Nadpismo',
			'wikEdHeading title':          'Nadpismo wó rowninu pówušyś (Umsch-kliknjenje: znižyś)',
			'wikEdBulletList alt':         'Lisćina ze symbolom',
			'wikEdBulletList title':       'Lisćinu ze symbolom wó rowninu pówušyś (Umsch-kliknjenje: znižyś)',
			'wikEdNumberList alt':         'Numerěrowana lisćina',
			'wikEdNumberList title':       'Numerěrowanu lisćinu wó rowninu pówušyś (Umsch-kliknjenje: znižyś)',
			'wikEdIndentList alt':         'Zasunjona lisćina',
			'wikEdIndentList title':       'Zasunjenje pówušyś (Umsch-kliknjenje: znižyś)',
			'wikEdDefinitionList alt':     'Definiciska lisćina',
			'wikEdDefinitionList title':   'Definiciska lisćina',
			'wikEdImage alt':              'Wobraz',
			'wikEdImage title':            'Wobraz',
			'wikEdTable alt':              'Tabela',
			'wikEdTable title':            'Tabela',
			'wikEdReferences alt':         'Reference',
			'wikEdReferences title':       'Městno referencow (Umsch-kliknjenje: Wótrězk referencow)',

// textify buttons
			'wikEdWikify alt':             'Wikificěrowaś',
			'wikEdWikify title':           'Zasajźone wopśimjeśe do wikikoda konwertěrowaś, wuzwignjenje se aktualizěrujo',
			'wikEdTextify alt':            'Do teksta konwertěrowaś',
			'wikEdTextify title':          'Zasajźone wopśimjeśe do lutnego teksta konwertěrowaś, wuzwignjenje se akutalizěrujo (shift-click: forced highlighting)',

// find and replace buttons, top row
			'wikEdFindAll alt':            'Wše namakaś',
			'wikEdFindAll title':          'Wše wótpowědniki namakaś',
			'wikEdFindPrev alt':           'Pjerwješny namakaś',
			'wikEdFindPrev title':         'Pjerwjejšny wótpowědnik namakaś',
			'wikEdFindSelect title':       'Pjerwjejšne pytanje wubraś abo k nadpismoju skocyś',
			'wikEdFindNext alt':           'Dalšny namakaś',
			'wikEdFindNext title':         'Dalšny wótpowědnik namakaś (Umsch-kliknjenje: wuběrk wobstaraś)',
			'wikEdJumpPrev alt':           'Pjerwjejšny wuběrk',
			'wikEdJumpPrev title':         'Wubrany tekst naslědk pytaś',
			'wikEdJumpNext alt':           'Pśiducy wuběrk',
			'wikEdJumpNext title':         'Wubrany tekst doprědka pytaś',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'Wše narownaś',
			'wikEdReplaceAll title':       'Wše wótpowědniki w cełem teksće abo wuběrku narownaś',
			'wikEdReplacePrev alt':        'Pjerwjejšny narownaś',
			'wikEdReplacePrev title':      'Pjerwjejšny wótpowědnik narunać',
			'wikEdReplaceSelect title':    'Pjerwjejšne narownanje wubraś',
			'wikEdReplaceNext alt':        'Pśiducy narownaś (Umsch-kliknjenje: wuběrk wobstaraś)',
			'wikEdReplaceNext title':      'Pśiducy wótpowědnik narownaś',
			'wikEdCaseSensitive alt':      'Na wjelikopisanje źiwaś',
			'wikEdCaseSensitive title':    'Pytanje zapśimujo wjelikopisanje',
			'wikEdRegExp alt':             'Regularny wuraz',
			'wikEdRegExp title':           'Pytańske pólo jo regularny wuraz',
			'wikEdFindAhead alt':          'Ned pytaś',
			'wikEdFindAhead title':        'Ned pśi zapódaśu pytaś (pytanje bźez źiwanja na wjelikopisanje a regularnych wurazow)',

// fix buttons, top row
			'wikEdFixBasic alt':           'Zakładne pópšawiś',
			'wikEdFixBasic title':         'Prozne znamješka a prozdne smužki pópšawiś, teke wugbane pśez druge pópšawjajuce funkcije',
			'wikEdFixHtml alt':            'HTML pópšawiś',
			'wikEdFixHtml title':          'HTML do wikikoda pópšawiś',
			'wikEdFixCaps alt':            'Wjelikopisanje pópšawiś',
			'wikEdFixCaps title':          'Wjelikopisanje w głowach a lisćinach pópšawiś',
			'wikEdFixUnicode alt':         'Unicode pópšawiś',
			'wikEdFixUnicode title':       'Reprezentacije znamješkow Unicode pópšawiś',
			'wikEdFixAll alt':             'Wše pópšawiś',
			'wikEdFixAll title':           'Zakładne, HTML, wjelikopisanje a Unicode pópšawiś',		
			'wikEdFixRedirect alt':        'Dalejpósrěednjenje pópšawiś',
			'wikEdFixRedirect title':      'Dalejpósrědnjenje pópšawiś',

// fix buttons, bottom row
			'wikEdFixDashes alt':          'Wězawki pópšawiś',
			'wikEdFixDashes title':        'Wězawki pópšawiś',
			'wikEdFixPunct alt':           'Interpunkciju pópšawiś',
			'wikEdFixPunct title':         'Prozne znamješka pśed interpunkciju pópšawiś',
			'wikEdFixMath alt':            'Matematiku pópšawiś',
			'wikEdFixMath title':          'Matematiku pópšawiś',
			'wikEdFixChem alt':            'Chemiju pópšawiś',
			'wikEdFixChem title':          'Chemiske formule pópšawiś',
			'wikEdFixUnits alt':           'Jadnotki pópšawiś',
			'wikEdFixUnits title':         'Jadnotki pópšawiś',
                        'wikEdFixRegExTypo alt':       'Pisańske zmólki pópšawiś',
			'wikEdFixRegExTypo title':     'Pisańske zmólki z pomocu pšawidłöw AutoWikiBrowser RegExTypoFixer pópšawiś',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, TEMPL]',
			'wikEdRefHide title':          'Toggle [REF] and [TEMPL] hiding',
			'wikEdRefButtonTooltip':       'Click to display hidden reference',
			'wikEdTemplButtonTooltip':     'Click to display hidden template',
			'wikEdCharEntityButtonTooltip': 'Click to display hidden character entity',
			'wikEdRefButtonShowTooltip':   'Click to hide reference',
			'wikEdTemplButtonShowTooltip': 'Click to hide template',
			'wikEdCharEntityButtonShowTooltip': 'Click to hide character entity',
			'wikEdTextZoom alt':           'Tekstowe skalěrowanje',
			'wikEdTextZoom title':         'Tekst skalěrowaś (Umsch-kliknjenje: pómjeńšyś)',
			'wikEdClearHistory alt':       'Stawizny wulašowaś',
			'wikEdClearHistory title':     'Stawizny pytanja, narownanja a zespominanja wulašowaś',
			'wikEdScrollToPreview alt':    'K pśeglědoju kulaś',
			'wikEdScrollToPreview title':  'K pśeglědowemu póloju kulaś',
			'wikEdScrollToEdit alt':       'K wobźěłanjeju kulaś',
			'wikEdScrollToEdit title':     'K wobźěłańskemu póloju kulaś',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'wikEd wužywaś',
			'wikEdUseWikEd title':         'Mjazy klasiskim tekstowym pólom a wikEd pśešaltowaś',
			'wikEdHighlightSyntax alt':    'Syntaksa',
			'wikEdHighlightSyntax title':  'Awtomatiske syntaksowe wuzwignjenje zašaltowaś/wušaltowaś',
			'wikEdSource alt':             'Žrědło',
			'wikEdCloseToolbar title':     'Standardnu symbolowu kšomu bźez wikEd zacyniś',
			'wikEdCloseToolbar alt':       'Symbolowu kšomu zacyniś',
			'wikEdSource title':           'Žrědłowy kod za testowe zaměry pokazaś',
			'wikEdUsing alt':              'Wužywanje',
			'wikEdUsing title':            '\'\'…wužywanje wikEd\'\' zespominanjeju awtomatiski pśidaś',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Awtomatiski pólěpšony naglěd rozdźělow pśešaltowaś',
			'wikEdFullScreen alt':         'Połna wobrazowka',
			'wikEdFullScreen title':       'Modus połneje wobrazowki pśešaltowaś',
			'wikEdTableMode alt':          'Tabelowy modus',
			'wikEdTableMode title':        'Wobźěłański modus za tabele pśešaltowaś',

// summary buttons
			'wikEdClearSummary alt':       'Zespominanje wuprozniś',
			'wikEdClearSummary title':     'Pólo "Zespominanje" wuprozniś',
			'wikEdSummarySelect title':    'Pjerwjejšne zespominanje wubraś',
			'wikEdPresetSummary': [
				'/*  */ ', 'wobźěłaś', 'wótegroniś', 'nastawk napórany', 'zawjeźenje wobźěłany',
				'wótkaz pópšawiś', 'prawopisne zmólki pópšawiś', 'wótkazowy spam wótpóraś', 'test anulěrowaś',
				'wandalizm wótpóraś', 'žrědłowy tekst formatěrowaś', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '…z pomocu [[en:User:Cacycle/wikEd|wikEd]]',

// button title acceskey
			'alt-shift':                   'Alt-Umsch-',

// submit buttons
			'wikEdLocalPreviewImg alt':    'Pśeglěd dołojce',
			'wikEdLocalPreview title':     'Pśeglěd dołojce pokazaś',
			'wikEdLocalDiffImg alt':       'Změny dołojce',
			'wikEdLocalDiff title':        'Aktualne změny dołojce pokazaś',
			'wikEdHelpPageLink':           ' | <a href="{wikEdHomeBaseUrl}wiki/User:Cacycle/wikEd_help" target="helpwindow">wikEd pomoc</a>', // use full link without {wikEdHomeBaseUrl} if the page is not on the English Wikipedia

// preview and changes buttons, top
			'wikEdClose alt':              'Zacyniś',
			'wikEdClose title':            'Pśeglědowy kašćik zacyniś',
			'wikEdClose2 alt':             'Zacyniś',
			'wikEdClose2 title':           'Pśeglědowy kašćik zacyniś',
			'wikEdScrollToPreview2 alt':   'K pśeglědoju kulaś',
			'wikEdScrollToPreview2 title': 'K pśeglědowemu póloju kulaś',
			'wikEdScrollToEdit2 alt':      'K wobźěłanjeju kulaś',
			'wikEdScrollToEdit2 title':    'K wobźěłańskemu póloju kulaś',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'K pśeglědoju kulaś',
			'wikEdScrollToPreview3 title': 'K pśeglědowemu póloju kulaś',
			'wikEdScrollToEdit3 alt':      'K wobźěłanjeju kulaś',
			'wikEdScrollToEdit3 title':    'K wobźěłańskemu póloju kulaś',

// preview field
			'wikEdPreviewLoading':         '...',

// formatting functions
			'image filename':              'datajowe mě',
			'image width':                 'šyrokosć',
			'table caption':               'pópisanje',
			'table heading':               'nadpismo',
			'table cell':                  'cela',
			'redirect article link':       'nastawkowy wótkaz',

// fixing functions
			'External links':              'Eksterne wótkaze',
			'See also':                    'Glědaj teke',
			'References':                  'Reference',

// language specific wiki code
			'wikicode Image':              'Wobraz',
			'wikicode File':               'Dataja',
			'wikicode Category':           'Kategorija',
			'wikicode Template':           'Pśedłoga',
			'wikEdReferencesSection':      '\n== Reference ==\n\n<references />\n',
			'talk page':                   'talk',
			'history page':                'history',
			'talk namespace':              'Talk',
			'talk namespace suffix':       '_talk',

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'TEMPL',

// shortened button texts
			'shortenedPreview':            'Pśeglěd',
			'shortenedChanges':            'Změny',

// follow link popup
			'followLink':                  '(Strg-kliknjenje)',
			'followLinkMac':               '(cmd-click)',

// error message popups
			'wikEdTableModeError':         'Wikikod tabele wopśimujo zmólki', // {{TABLE}}

// auto updating
			'wikEdGreasemonkeyAutoUpdate': 'wikEd Aktualizacija:\n\nNowa wersija skripta GreaseMonkey "wikEd" stoj k dispoziciji.\n\n\nZeśěgnjo se z:\n\n{updateURL}',

 
// highlighting popups
			'wikEdHyphenDash':             'Standardne źěleńska smužka',
			'wikEdFigureDash':             'Licbna wězawka',
			'wikEdEnDash':                 'En-wězawka',
			'wikEdEmDash':                 'Em-wězawka',
			'wikEdBarDash':                'Horicontalna cera',
			'wikEdMinusDash':              'Minusowe znamješko',
			'wikEdSoftHyphen':             'Měka źěleńska smužka',
			'wikEdTab':                    'Tabulator',
			'wikEdEnSpace':                'En-mjazyrum',
			'wikEdEmSpace':                'Em-mjazyrum',
			'wikEdThinSpace':              'Wuski mjazyrum',
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
			'wikEdDiffButton title':       'Pólěpšony naglěd rozdźělow pokazaś',
			'wikEdDiffLoading':            '...'
}