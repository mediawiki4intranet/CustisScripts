/*

{{en:User:Cacycle/wikEd_template}}

This is the Sicilian translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

Chista è la traduzioni siciliana dô '''[[User:Cacycle/wikEd|wikEd]]''' (pi la verioni 0.9.91).
Tradotto da [[User:meloscn]]

<pre><nowiki> */

var wikEdText = {

// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Clicca pi chiuriri',
			'wikEdLogo error alt':         'Erruri wiked',
			'wikEdLogo error title':       'Erruri ntô carricamentu - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Clicca pi stutari',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'Browser nun supputtatu - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Incompatible script or gadget "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    'Stutatu - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Clicca pi addumari',

// top jumper
			'wikEdScrollToEdit4 alt':      'Scurri fino a cancia',
			'wikEdScrollToEdit4 title':    'Scurri finu â scatula di scrittura',

// button bar grip titles
			'wikEdGripFormat title':       'Buttuni di fummattazzioni (Clicca p\'ammustrari o ammucciari)',
			'wikEdGripTextify title':      'Textify and wikify buttons (click to hide or show)',
			'wikEdGripCustom1 title':      'Buttuna propri (Clicca p\'ammustrari o ammucciari)',
			'wikEdGripFind title':         'Buttuni di ricerca (Clicca p\'ammustrari o ammucciari)',
			'wikEdGripFix title':          'Buttuni di sustituzioni. Clicca p\'ammustrari o ammucciari',
			'wikEdGripCustom2 title':      'Buttuni di l\'utenti. Clicca p\'ammustrari o ammucciari',
			'wikEdGripControl title':      'Buttuni di cuntrollu wiked. Clicca p\'ammustrari o ammucciari',

// formatting buttons, top row
			'wikEdUndo alt':               'Annulla',
			'wikEdUndo title':             'Annulla',
			'wikEdRedo alt':               'Ripristina',
			'wikEdRedo title':             'Ripristina',
			'wikEdBold alt':               'Bold',
			'wikEdBold title':             'Testu Grasettu',
			'wikEdItalic alt':             'Italic',
			'wikEdItalic title':           'Testu cussivu',
			'wikEdUnderline alt':          'Underline',
			'wikEdUnderline title':        'Testu suttuliniatu',
			'wikEdStrikethrough alt':      'Strikethrough',
			'wikEdStrikethrough title':    'Testu barratu',
			'wikEdNowiki alt':             'Nowiki',
			'wikEdNowiki title':           'Strumentu Testu Nowiki',
			'wikEdSuperscript alt':        'Superscript',
			'wikEdSuperscript title':      'Testu in apici',
			'wikEdSubscript alt':          'Subscript',
			'wikEdSubscript title':        'Testu in pedici',
			'wikEdRef alt':                'Ref',
			'wikEdRef title':              'Cunvetti testu in noti',
			'wikEdCase alt':               'Case',
			'wikEdCase title':             'Cancia u testu da minusculu a maiusculu e da maiusculu a minusculu',
			'wikEdSort alt':               'Sort',
			'wikEdSort title':             'Sort lines alphabetically',
			'wikEdRedirect alt':           'Redirect',
			'wikEdRedirect title':         'Cancella tuttu u testu e cria nu redirect',
			'wikEdUndoAll alt':            'Undo all',
			'wikEdUndoAll title':          'Annulla tutti i canciamenti',
			'wikEdRedoAll alt':            'Redo all',
			'wikEdRedoAll title':          'Ripristina tutti i canciamenti',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'Link',
			'wikEdWikiLink title':         'Wiki liami',
			'wikEdWebLink alt':            'Weblink',
			'wikEdWebLink title':          'Culligamentu sternu',
			'wikEdHeading alt':            'Heading',
			'wikEdHeading title':          'Aumenta lu livellu ddâ sizioni (shift-click: scinni di liveddu)',
			'wikEdBulletList alt':         'Bullet list',
			'wikEdBulletList title':       'Aumenti lu liveddu di l\'elencu puntatu (si inveci fai shift-click: scala)',
			'wikEdNumberList alt':         'Number list',
			'wikEdNumberList title':       'Aumenta lu liveddu di l\'elencu numeratu (si inveci fai shift-click: scala)',
			'wikEdIndentList alt':         'Indent list',
			'wikEdIndentList title':       'Trasi lu testu (si inveci fai shift-click: scala)',
			'wikEdDefinitionList alt':     'Def list',
			'wikEdDefinitionList title':   'Definition list',
			'wikEdImage alt':              'Image',
			'wikEdImage title':            'Mmàgini',
			'wikEdTable alt':              'Table',
			'wikEdTable title':            'Tabella',
			'wikEdReferences alt':         'Noti',
			'wikEdReferences title':       'Postu pî noti (shift-click: stili nnicu di Wikipedia)',

// textify buttons
			'wikEdWikify alt':             'Wikify',
			'wikEdWikify title':           'Cunverti lu cuntinutu incuddatu in wikicode, aggionna evidenziannu',
			'wikEdTextify alt':            'Textify',
			'wikEdTextify title':          'Cunverti lu cuntinutu incuddatu in testu nurmali, aggiornna evidenziannu (shift-click: forced highlighting)',

// find and replace buttons, top row
			'wikEdFindAll alt':            'Find all',
			'wikEdFindAll title':          'Attrova tuttu',
			'wikEdFindPrev alt':           'Find prev',
			'wikEdFindPrev title':         'Attrova pricidenti',
			'wikEdFindSelect title':       'Seleziona da na ricerca pricirenti o mettici lu testu da riciccari',
			'wikEdFindNext alt':           'Find next',
			'wikEdFindNext title':         'Attrova succesivu (shift-click: Pigghia testu seleziunatu)',
			'wikEdJumpPrev alt':           'Selected prev',
			'wikEdJumpPrev title':         'Attova lu testu selezionatu prima',
			'wikEdJumpNext alt':           'Selected next',
			'wikEdJumpNext title':         'Attrova lu testu selezionatu dopu',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'Replace all',
			'wikEdReplaceAll title':       'Sustituisci lu testu misu ni trova oppuri selezionatu cu chiddu a latu',
			'wikEdReplacePrev alt':        'Replace prev',
			'wikEdReplacePrev title':      'Sustituici pricidenti',
			'wikEdReplaceSelect title':    'Siliziona na sustituzioni pricidenti',
			'wikEdReplaceNext alt':        'Sustituisci successivu (shift-click: Pigghia tetu selezionati)',
			'wikEdReplaceNext title':      'Sustituisci successivu (shift-click: Pigghia tetu selezionati)',
			'wikEdCaseSensitive alt':      'Case sensitive',
			'wikEdCaseSensitive title':    'Ricerca sensitiva (li maiusculi influiscunu)',
			'wikEdRegExp alt':             'RegExp',
			'wikEdRegExp title':           'Ricerca campu unni l\'espressioni è regulari',
			'wikEdFindAhead alt':          'Find ahead',
			'wikEdFindAhead title':        'Attrova a comu iè giè (li maiusculi nn influisciunu)',

// fix buttons, top row
			'wikEdFixBasic alt':           'Fix basic',
			'wikEdFixBasic title':         'Elimina li righi ianchi e vuoti suvecchiu',
			'wikEdFixHtml alt':            'Fix html',
			'wikEdFixHtml title':          'Cunverti html in wikicode',
			'wikEdFixCaps alt':            'Fix caps',
			'wikEdFixCaps title':          'Potta maiuscoli i capulettera e l\'iniziali dei listi',
			'wikEdFixUnicode alt':         'Fix Unicode',
			'wikEdFixUnicode title':       'Sistema a rappresentazioni dei caratteri unicode',
			'wikEdFixAll alt':             'Fix all',
			'wikEdFixAll title':           'Curreggi basic, html, maiuscoli, e Unicode',
			'wikEdFixRedirect alt':        'Fix redirects',
			'wikEdFixRedirect title':      'Fix redirects',

// fix buttons, bottom row
			'wikEdFixDashes alt':          'Fix dashes',
			'wikEdFixDashes title':        'Elimina spazi',
			'wikEdFixPunct alt':           'Fix punctuation',
			'wikEdFixPunct title':         'Elimina spazi prima da punteggiatura',
			'wikEdFixMath alt':            'Fix math',
			'wikEdFixMath title':          'Convetti in formula matematica',
			'wikEdFixChem alt':            'Fix chem',
			'wikEdFixChem title':          'Convetti in formula chimica',
			'wikEdFixUnits alt':           'Fix units',
			'wikEdFixUnits title':         'Fix units',
			'wikEdFixRegExTypo alt':       'Fix typos',
			'wikEdFixRegExTypo title':     'Fix typos using the AutoWikiBrowser RegExTypoFixer rules',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, TEMPL]',
			'wikEdRefHide title':          'Toggle [REF] and [TEMPL] hiding',
			'wikEdRefButtonTooltip':       'Click to display hidden reference',
			'wikEdTemplButtonTooltip':     'Click to display hidden template',
			'wikEdCharEntityButtonTooltip': 'Click to display hidden character entity',
			'wikEdRefButtonShowTooltip':   'Click to hide reference',
			'wikEdTemplButtonShowTooltip': 'Click to hide template',
			'wikEdCharEntityButtonShowTooltip': 'Click to hide character entity',
			'wikEdTextZoom alt':           'Text zoom',
			'wikEdTextZoom title':         'Ciclu di ingradimentu (shift-click: a nnarreri)',
			'wikEdClearHistory alt':       'Clear history',
			'wikEdClearHistory title':     'Pulizia la storia dî caseddi di ricercca, sustituzioni, e summariu',
			'wikEdScrollToPreview alt':    'Scroll to preview',
			'wikEdScrollToPreview title':  'Pottati na casedda dill\'anteprima',
			'wikEdScrollToEdit alt':       'Scroll to edit',
			'wikEdScrollToEdit title':     'Scurri finu â casedda di murifica',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'Usa wikEd',
			'wikEdUseWikEd title':         'Passa tra casedda di testu classica e wikEd',
			'wikEdHighlightSyntax alt':    'Syntax',
			'wikEdHighlightSyntax title':  'Adduma/astuta l\'evidenziamentu dâ sintassi automatica',
			'wikEdTableMode alt':          'Table mode',
			'wikEdTableMode title':        'Toggle table edit mode',
			'wikEdSource alt':             'Source',
			'wikEdCloseToolbar title':     'Chiuri a non-wikEd toolbar',
			'wikEdCloseToolbar alt':       'Close toolbar',
			'wikEdSource title':           'Ammusta lu codice surgente pí mutivi di prova',
			'wikEdUsing alt':              'Usannu',
			'wikEdUsing title':            'Junci automaticamenti \'\'…usannu wikEd\'\' ô sommariu',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Adduma/astuta la modalità automatica di visualizzazioni diffirenzi',
			'wikEdFullScreen alt':         'Fullscreen',
			'wikEdFullScreen title':       'Adduma/astuta la modalità tuttu schermu',

// button title acceskey
			'alt-shift':                   'alt-shift-',

// summary buttons
			'wikEdClearSummary alt':       'Clear summary',
			'wikEdClearSummary title':     'Pulizia u spaziu summariu',
			'wikEdSummarySelect title':    'Siliziona na discrizioni pricidenti',
			'wikEdPresetSummary': [
				'/*  */ ', 'copyedit', 'rispusta', 'articuli criati', 'riscritta ntroduzzioni',
				'liami giusti', 'currezioni erruri', 'cancellatu liami di spam', 'rollback pi prova',
				'annullatu vannalismu', 'formatta codici fonti ', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '…usannu [[scn:aiutu:WikEd|wikEd]]',

// submit buttons
			'wikEdLocalPreviewImg alt':    'Preview below',
			'wikEdLocalPreview title':     'Ammutra l\'antiprima sutta',
			'wikEdLocalDiffImg alt':       'Changes below',
			'wikEdLocalDiff title':        'Ammustra i canciamenti sutta',
			'wikEdHelpPageLink':           ' | <a href="http://scn.wikipedia.org/wiki/Aiutu:WikEd" target="helpwindow">Aiutu wikEd</a>',

// preview and changes buttons, top
			'wikEdClose alt':              'Close',
			'wikEdClose title':            'Chiuri l\'anteprima di sutta',
			'wikEdClose2 alt':             'Close',
			'wikEdClose2 title':           'Chiuri l\'antiprima',
			'wikEdScrollToPreview2 alt':   'Scurri finu all antiprima',
			'wikEdScrollToPreview2 title': 'Scurri finu all\'antiprima',
			'wikEdScrollToEdit2 alt':      'Scroll to edit',
			'wikEdScrollToEdit2 title':    'Scurri finu â casedda di murifica',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'Scroll to preview',
			'wikEdScrollToPreview3 title': 'Scurri finu all\'antiprima',
			'wikEdScrollToEdit3 alt':      'Scroll to edit',
			'wikEdScrollToEdit3 title':    'Scurri finu â casedda di murifica',

// preview field
			'wikEdPreviewLoading':         '...',

// formatting functions
			'image filename':              'nomu file',
			'image width':                 'larghezza',
			'table caption':               'didascalia',
			'table heading':               'tìtulu',
			'table cell':                  'cella',
			'redirect article link':       'nomu pàggina',

// fixing functions
			'External links':              'Liami esterni',
			'See also':                    'Vidi puru',
			'References':                  'Noti',

// language specific wiki code
			'wikicode Image':              'Image',
			'wikicode File':               'File',
			'wikicode Category':           'Category',
			'wikicode Template':           'Template',
			'wikEdReferencesSection':      '\n== Noti ==\n\n<div class="references-small">\n<references/>\n</div>\n',
			'talk page':                   'talk',
			'history page':                'history',
			'talk namespace':              'Talk',
			'talk namespace suffix':       '_talk',

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'TEMPL',

// shortened button texts
			'shortenedPreview':            'Antiprima',
			'shortenedChanges':            'Canciamenti',

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
			'wikEdDiffButton title':       'Ammustra diffirenzi avanzati',
			'wikEdDiffLoading':            '...'

}