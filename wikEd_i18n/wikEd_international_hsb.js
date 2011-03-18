/*

{{en:User:Cacycle/wikEd_template}}

This is the Upper Sorbian translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

<pre><nowiki> */

var wikEdText = {

// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Klikń, zo by znjemóžnił',
			'wikEdLogo error alt':         'wikEd zmylk',
			'wikEdLogo error title':       'Zmylk při začitanju - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Klikń, zo by znjemóžnił',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'Wobhladowak so njepodpěruje - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Njekompatibelny skript abo specialna funkcija "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    'Znjemóžnjeny - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Klikń, zo by zmóžnił',

// top jumper
			'wikEdScrollToEdit4 alt':      'Za wobdźěłanje kulić',
			'wikEdScrollToEdit4 title':    'K wobdźěłanskemu polu kulić',

// button bar grip titles
			'wikEdGripFormat title':       'Tłóčatka formatowanja (klikń, zo by je schował abo pokazał)',
			'wikEdGripTextify title':      'Tłóčatka za konwertowanje do teksta a wikikoda (klikń, zo by je schował abo pokazał)',
			'wikEdGripCustom1 title':      'Swójske tłóčatka (klikń, zo by je schował abo pokazał)',
			'wikEdGripFind title':         'Pytanske tłóčatka (klikń, zo by je schował abo pokazał)',
			'wikEdGripFix title':          'Korekturne tłóčatka (klikń, zo by je schował abo pokazał)',
			'wikEdGripCustom2 title':      'Swójske tłóčatka (klikń, zo by je schował abo pokazał)',
			'wikEdGripControl title':      'wikEd kontrolne tłóčatka (klikń, zo by je schował abo pokazał)',

// formatting buttons, top row
			'wikEdUndo alt':               'Cofnyć',
			'wikEdUndo title':             'Cofnyć',
			'wikEdRedo alt':               'Wobnowić',
			'wikEdRedo title':             'Wobnowić',
			'wikEdBold alt':               'Tučny',
			'wikEdBold title':             'Tučny tekst',
			'wikEdItalic alt':             'Kursiwny',
			'wikEdItalic title':           'Kursiwny tekst',
			'wikEdUnderline alt':          'Podšmórnyć',
			'wikEdUnderline title':        'Tekst podšmórnyć',
			'wikEdStrikethrough alt':      'Přešmórnyć',
			'wikEdStrikethrough title':    'Tekst přešmórnyć',
			'wikEdNowiki alt':             'Nowiki',
			'wikEdNowiki title':           'Tekstowe woznamjenjenje nowiki',
			'wikEdSuperscript alt':        'Wysoko stajeny',
			'wikEdSuperscript title':      'Wysokostajeny tekst',
			'wikEdSubscript alt':          'Hłuboko stajeny',
			'wikEdSubscript title':        'Hłubokostajeny tekst',
			'wikEdRef alt':                'Ref',
			'wikEdRef title':              'Referenca w teksće (Umsch-kliknjenje: pomjenowana taflička)',
			'wikEdCase alt':               'Wulkopisanje',
			'wikEdCase title':             'Mjez małym pismikom, wulkim spočatnym pismikom a wulkimi pismikami přepinać',
			'wikEdSort alt':               'Sortěrować',
			'wikEdSort title':             'Linki alfabetisce sortěrować',
			'wikEdRedirect alt':           'Dale sposrědkować',
			'wikEdRedirect title':         'Daleposrědkowanje wutworić, wušmórnje cyły tekst',
			'wikEdUndoAll alt':            'Wšě cofnyć',
			'wikEdUndoAll title':          'Wšě změny cofnyć',
			'wikEdRedoAll alt':            'Wšě wobnowić',
			'wikEdRedoAll title':          'Wšě změny wobnowić',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'Wotkaz',
			'wikEdWikiLink title':         'Wikiwotkaz',
			'wikEdWebLink alt':            'Webwotkaz',
			'wikEdWebLink title':          'Eksterny webwotkaz',
			'wikEdHeading alt':            'Nadpismo',
			'wikEdHeading title':          'Nadpismo wo runinu zwyšić (Umsch-kliknjenje: znižić)',
			'wikEdBulletList alt':         'Lisćina ze symbolom',
			'wikEdBulletList title':       'Lisćinu ze symbolom wo runinu zwyšić (Umsch-kliknjenje: znižić)',
			'wikEdNumberList alt':         'Čisłowana lisćina',
			'wikEdNumberList title':       'Čisłowanu lisćinu wo runinu zwyšic (Úmsch-kliknjenje: znižić)',
			'wikEdIndentList alt':         'Zasunjena lisćina',
			'wikEdIndentList title':       'Zasunjenje zwyšić (Umsch-kliknjenje: znižić)',
			'wikEdDefinitionList alt':     'Definiciska lisćina',
			'wikEdDefinitionList title':   'Definiciska lisćina',
			'wikEdImage alt':              'Wobraz',
			'wikEdImage title':            'Wobraz',
			'wikEdTable alt':              'Tabela',
			'wikEdTable title':            'Tabela',
			'wikEdReferences alt':         'Referency',
			'wikEdReferences title':       'Městno referencow (Umsch-kliknjenje: Wotrězk referencow)',

// textify buttons
			'wikEdWikify alt':             'Wikifikować',
			'wikEdWikify title':           'Zadźěłany wobsah do wikikoda konwertować, wuzběhnjenje so aktualizuje',
			'wikEdTextify alt':            'Do teksta konwertować',
			'wikEdTextify title':          'Zadźěłany wobsah do luteho tekst konwertować, wuzběhnjenje so aktualizuje',

// find and replace buttons, top row
			'wikEdFindAll alt':            'Wšě namakać',
			'wikEdFindAll title':          'Wšě wotpowědniki namakać',
			'wikEdFindPrev alt':           'Předchadny namakać',
			'wikEdFindPrev title':         'Předchadny wotpowědnik namakać',
			'wikEdFindSelect title':       'Předchadne pytanje wubrać abo k nadpismu skočić',
			'wikEdFindNext alt':           'Dalši namakać',
			'wikEdFindNext title':         'Dalši wotpowědnik namakać (Umsch-kliknjenje: wuběr wobstarać)',
			'wikEdJumpPrev alt':           'Předchadny wuběr',
			'wikEdJumpPrev title':         'Wubrany tekst do zady pytać',
			'wikEdJumpNext alt':           'Přichodny wuběr',
			'wikEdJumpNext title':         'Wubrany tekst doprědka pytać',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'Wšě narunać',
			'wikEdReplaceAll title':       'Wšě wotpowědniki w cyłÿm teksće abo wuběrje narunać',
			'wikEdReplacePrev alt':        'Předchadny narunać',
			'wikEdReplacePrev title':      'Předchadny wotpowědnik narunać',
			'wikEdReplaceSelect title':    'Předchadny narunanku wubrać',
			'wikEdReplaceNext alt':        'Přichodny narunać (Umsch-kliknjenje: wuběr wobstarać)',
			'wikEdReplaceNext title':      'Přichodny wotpowědnik narunać',
			'wikEdCaseSensitive alt':      'Na wulkopisanje dźiwać',
			'wikEdCaseSensitive title':    'Pytanje wobkedźbuje wulkopisanje',
			'wikEdRegExp alt':             'Regularny wuraz',
			'wikEdRegExp title':           'Pytanske polo je regularny wuraz',
			'wikEdFindAhead alt':          'Hnydomne pytanje',
			'wikEdFindAhead title':        'Hnydom při zapodaću pytać (pytanje bjez wobkedźbowanja wulkopisanja a regularnych wurazow)',

// fix buttons, top row
			'wikEdFixBasic alt':           'Zakładne porjedźić',
			'wikEdFixBasic title':         'Prózdne znamješka a prózdne linki porjedźić, tež sčinjene přez druhe porjedźace funkcije',
			'wikEdFixHtml alt':            'HTML porjedźić',
			'wikEdFixHtml title':          'HTML do wikikoda porjedźić',
			'wikEdFixCaps alt':            'Wulkopisanje porjedźić',
			'wikEdFixCaps title':          'Wulkopisanje w hłowach a lisćinach porjedźić',
			'wikEdFixUnicode alt':         'Unicode porjedźić',
			'wikEdFixUnicode title':       'Reprezentacije znamješkow Unicode porjedźić',
			'wikEdFixAll alt':             'Wšě porjedźić',
			'wikEdFixAll title':           'Zakładne, HTML, wulkopisanje a Unicode porjedźić',
			'wikEdFixRedirect alt':        'Daleposrědkowanja porjedźić',
			'wikEdFixRedirect title':      'Daleposrědkowanja porjedźić',

// fix buttons, bottom row
			'wikEdFixDashes alt':          'Wjazawki porjedźić',
			'wikEdFixDashes title':        'Wjazawki porjedźić',
			'wikEdFixPunct alt':           'Interpunkciju porjedźić',
			'wikEdFixPunct title':         'Mjezery před interpunkciju porjedźić',
			'wikEdFixMath alt':            'Matematiku porjedźić',
			'wikEdFixMath title':          'Matematiku porjedźić',
			'wikEdFixChem alt':            'Chemiju porjedźić',
			'wikEdFixChem title':          'Chemiske formle porjedźić',
			'wikEdFixUnits alt':           'Jednotki porjedźić',
			'wikEdFixUnits title':         'Jednotki porjedźić',
			'wikEdFixRegExTypo alt':       'Pisanske zmylki porjedźić',
			'wikEdFixRegExTypo title':     'Pisanske zmylki z pomocu prawidłöw AutoWikiBrowser RegExTypoFixer porjedźić',
		
// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, TEMPL]',
			'wikEdRefHide title':          'Chowanje [REF] a [TEMPL] přepinyć',
			'wikEdRefButtonTooltip':       'Kliknyć, zo by so schowana referenca zwobrazniła',
			'wikEdTemplButtonTooltip':     'Kliknyć, zo by so schowana předłoha zwobrazniła',
			'wikEdCharEntityButtonTooltip': 'Kliknyć, zo by so schowana znamješkowa entita zwobrazniła',
			'wikEdRefButtonShowTooltip':   'Kliknyć, zo by so referenca schowała',
			'wikEdTemplButtonShowTooltip': 'Kliknyć, zo by sopředłoha schowała',
			'wikEdCharEntityButtonShowTooltip': 'Kliknyć, zo by so znamješkowa entita schowała',
			'wikEdTextZoom alt':           'Tekstowe skalowanje',
			'wikEdTextZoom title':         'Tekst skalować (Umsch-kliknjenje: pomjeńšić)',
			'wikEdClearHistory alt':       'Stawizny zničić',
			'wikEdClearHistory title':     'Stawizny pytanja, narunanja a zjeća zničić',
			'wikEdScrollToPreview alt':    'K přehladej kulić',
			'wikEdScrollToPreview title':  'K přehladowemu poku kulić',
			'wikEdScrollToEdit alt':       'K wobdźěłanju kulić',
			'wikEdScrollToEdit title':     'K wobdźěłanskemu polu kulić',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'wikEd wužiwać',
			'wikEdUseWikEd title':         'Mjez klasiskim tekstowym polom a wikEd přepinać',
			'wikEdHighlightSyntax alt':    'Syntaksa',
			'wikEdHighlightSyntax title':  'Awtomatiske syntaksowe wuzběhnjenje zapinać/wupinać',
			'wikEdTableMode alt':          'Tabelowy modus',
			'wikEdTableMode title':        'Wobdźěłowanski modus za tabele přepinać',
			'wikEdSource alt':             'Žórło',
			'wikEdCloseToolbar title':     'Standardnu symbolowu lajstu bjez wikEd začinić',
			'wikEdCloseToolbar alt':       'Symbolowu lajstu začinić',
			'wikEdSource title':           'Žórłowy kod za testowe zaměry pokazać',
			'wikEdUsing alt':              'Wužiwanje',
			'wikEdUsing title':            '\'\'…wužiwanje wikEd\'\' zjećam awtomatisce přidać',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Awtomatiski polěpšeny napohlad rozdźělow přepinać',
			'wikEdFullScreen alt':         'Połna wobrazowka',
			'wikEdFullScreen title':       'Modus połneje wobrazowki přepinać',

// summary buttons
			'wikEdClearSummary alt':       'Zjeće wuprózdnić',
			'wikEdClearSummary title':     'Polo "Zjeće" wuprózdnić',
			'wikEdSummarySelect title':    'Předchadne zjeće wubrać',
			'wikEdPresetSummary': [
				'/*  */ ', 'wobdźěłać', 'wotmołwić', 'nastawk wutworjeny', 'zawod wobdźěłany',
				'wotkaz porjedźić', 'prawopisne zmylki porjedźić', 'wotkazowy spam wotstronić', 'test cofnyć',
				'wandalizm wotstronić', 'žórłowy tekst formatować', '{wikEdUsing}'
	 		],
			'wikEdSummaryUsing':           '…z pomocu [[en:User:Cacycle/wikEd|wikEd]]',

// button title acceskey
			'alt-shift':                   'Alt-Umsch-',

// submit buttons
			'wikEdLocalPreviewImg alt':    'Přehlad deleka',
			'wikEdLocalPreview title':     'Přehlad deleka pokazać',
			'wikEdLocalDiffImg alt':       'Změny deleka',
			'wikEdLocalDiff title':        'Aktualne změny deleka pokazać',
			'wikEdHelpPageLink':           ' | <a href="{wikEdHomeBaseUrl}wiki/User:Cacycle/wikEd_help" target="helpwindow">wikEd pomoc</a>',

// preview and changes buttons, top
			'wikEdClose alt':              'Začinić',
			'wikEdClose title':            'Přehladowy kašćik začinić',
			'wikEdClose2 alt':             'Začinić',
			'wikEdClose2 title':           'Přehladowy kašćik začinić',
			'wikEdScrollToPreview2 alt':   'K přehladej kulić',
			'wikEdScrollToPreview2 title': 'K přehladowemu polu kulić',
			'wikEdScrollToEdit2 alt':      'K wobdźěłanju kulić',
			'wikEdScrollToEdit2 title':    'K wobdźěłowanskemu polu kulić',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'K přehladej kulić',
			'wikEdScrollToPreview3 title': 'K přehladowemu polu kulić',
			'wikEdScrollToEdit3 alt':      'K wobdźěłanju kulić',
			'wikEdScrollToEdit3 title':    'K wobdźěłowanskemu polu kulić',

// preview field
			'wikEdPreviewLoading':         '...',

// formatting functions
			'image filename':              'datajowe mjeno',
			'image width':                 'šěrokosć',
			'table caption':               'popis',
			'table heading':               'nadpismo',
			'table cell':                  'cela',
			'redirect article link':       'nastawkowy wotkaz',

// fixing functions
			'External links':              'Eksterne wotkazy',
			'See also':                    'Hlej tež',
			'References':                  'Referency',

// language specific wiki code
			'wikicode Image':              'Wobraz',
			'wikicode File':               'Dataja',
			'wikicode Category':           'Kategorija',
			'wikicode Template':           'Předłoha',
			'wikEdReferencesSection':      '\n== Referency ==\n\n<references />\n',
			'talk page':                   'diskusija',
			'history page':                'stawizny',
			'talk namespace':              'Diskusija',
			'talk namespace suffix':       '_diskusija',

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'TEMPL',

// shortened button texts
			'shortenedPreview':            'Přehlad',
			'shortenedChanges':            'Změny',

// follow link popup
			'followLink':                  '(Strg-kliknjenje)',
			'followLinkMac':               '(cmd-kliknjenje)',

// error message popups
			'wikEdTableModeError':         'Wikikod tabele zmylki wobsahuje',

// auto updating
			'wikEdGreasemonkeyAutoUpdate': 'wikEd Aktualizacija:\n\nNowa wersija skripta GreaseMonkey "wikEd" k dispoziciji steji.\n\n\nSćehnje so z:\n\n{updateURL}',

 
// highlighting popups
			'wikEdHyphenDash':             'Standardne dźělatko',
			'wikEdFigureDash':             'Ličbna wjazawka',
			'wikEdEnDash':                 'En-wjazawka',
			'wikEdEmDash':                 'Em-wjazawka',
			'wikEdBarDash':                'Horicontalna smužka',
			'wikEdMinusDash':              'Minusowe znamješko',
			'wikEdSoftHyphen':             'Mjechke dźělatko',
			'wikEdTab':                    'Tabulator',
			'wikEdEnSpace':                'En-mjezera',
			'wikEdEmSpace':                'Em-mjezera',
			'wikEdThinSpace':              'Ćeńka mjezera',
			'wikEdIdeographicSpace':       'Ideografiska mjezera',

// highlighting
			'wikEdSignature3':             'Jenož z wužiwarskim mjenom podpisać',
			'wikEdSignature4':             'Z wužiwarskim mjenom a datumom podpisać',
			'wikEdSignature5':             'Jenož z datumom podpisać',

// highlighting errors
			'wikEdErrorHtmlUnknown':       'Njepodpěrowana HTML-taflička',
			'wikEdErrorBoldItalic':        'Njepłaćiwy tučny/kursiwny',
			'wikEdErrorWrongClose':        'Kónčna taflička so njehodźi',
			'wikEdErrorNoOpen':            'Kónčna taflička nima spočatnu tafličku',
			'wikEdErrorNoHandler':         'Žadyn handler',
			'wikEdErrorNoClose':           'Spočatna taflička nimakónčnu tafličku',
			'wikEdErrorNewline':           'Spočatna taflička je přez nowu linku začinjena',
			'wikEdErrorTemplHeading':      'Nadpisma w předłohach so ignoruja',
			'wikEdErrorTemplParam':        'Předłohowe/Parametrowe taflički so njehodźa',
			'wikEdErrorTemplParamAmbig':   'Předłohowe/Parametrowe taflički su wjacezmyslne',

// highlighting image preview
			'wikEdFilePreview':            'Wobrazowy přehlad',

// from [[en:User:Cacycle/wikEdDiff.js]]
			'wikEdDiffButtonImg alt':      'wikEdDiff',
			'wikEdDiffButton title':       'Polěpšeny napohlad rozdźělow pokazać',
			'wikEdDiffLoading':            '...'

}