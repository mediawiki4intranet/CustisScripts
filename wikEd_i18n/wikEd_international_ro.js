/*

{{en:User:Cacycle/wikEd_template}}

This is the Romanian translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

<pre><nowiki> */

var wikEdText = {

// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Click pentru a deazctiva',
			'wikEdLogo error alt':         'Eroare wikEd',
			'wikEdLogo error title':       'Eroare de încărcare - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Click pentru a dezactiva',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'Browserul Dvs nu este acceptat de wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Incompatible script or gadget "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    'Dezactivat - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Click pentru a activa',

// top jumper
			'wikEdScrollToEdit4 alt':      'Derulează la editare',
			'wikEdScrollToEdit4 title':    'Derulează la câmpul de editare',

// button bar grip titles
			'wikEdGripFormat title':       'Butoane de formatare (click pentru a ascunde sau afişa)',
			'wikEdGripTextify title':      'Textify and wikify buttons (click to hide or show)',
			'wikEdGripCustom1 title':      'Butoane personalizate (click pentru a ascunde sau afişa)',
			'wikEdGripFind title':         'Butoane de căutare (click pentru a ascunde sau afişa)',
			'wikEdGripFix title':          'Butoane de reparare (click pentru a ascunde sau afişa)',
			'wikEdGripCustom2 title':      'Butoane personalizate (click pentru a ascunde sau afişa)',
			'wikEdGripControl title':      'Butoane de control wikEd (click pentru a ascunde sau afişa)',

// formatting buttons, top row
			'wikEdUndo alt':               'Anulare acţiune',
			'wikEdUndo title':             'Anulare acţiune',
			'wikEdRedo alt':               'Re-executare acţiune',
			'wikEdRedo title':             'Re-executare acţiune',
			'wikEdBold alt':               'Bold',
			'wikEdBold title':             'Text îngroşat',
			'wikEdItalic alt':             'Text italic',
			'wikEdItalic title':           'Text italic',
			'wikEdUnderline alt':          'Subliniat',
			'wikEdUnderline title':        'Text subliniat',
			'wikEdStrikethrough alt':      'Tăiat',
			'wikEdStrikethrough title':    'Text tăiat',
			'wikEdNowiki alt':             'Nowiki',
			'wikEdNowiki title':           'Text fără formatare wiki',
			'wikEdSuperscript alt':        'Superscript',
			'wikEdSuperscript title':      'Text superscript',
			'wikEdSubscript alt':          'Subscript',
			'wikEdSubscript title':        'Text subscript',
			'wikEdRef alt':                'Ref',
			'wikEdRef title':              'Referinţă (shift-click: tag ales)',
			'wikEdCase alt':               'Maj/min',
			'wikEdCase title':             'Schimbă între scriere cu majusculă şi minusculă',
			'wikEdSort alt':               'Sort',
			'wikEdSort title':             'Sort lines alphabetically',
			'wikEdRedirect alt':           'Redirecţionare',
			'wikEdRedirect title':         'Crează redirecţionare, şterge întregul text',
			'wikEdUndoAll alt':            'Anulare tot',
			'wikEdUndoAll title':          'Anularea tuturor modificărilor',
			'wikEdRedoAll alt':            'Re-executare tot',
			'wikEdRedoAll title':          'Re-executarea tuturor acţiunilor',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'Wikilink',
			'wikEdWikiLink title':         'Legătură internă wiki',
			'wikEdWebLink alt':            'Leg web',
			'wikEdWebLink title':          'Legătură web externă',
			'wikEdHeading alt':            'Titlu',
			'wikEdHeading title':          'Creşte nivelul titlului (shift-click: scade)',
			'wikEdBulletList alt':         'Listă buline',
			'wikEdBulletList title':       'Creşte nivelul listei cu buline (shift-click: scade)',
			'wikEdNumberList alt':         'Listă numere',
			'wikEdNumberList title':       'Creşte nivelul listei numerotate (shift-click: scade)',
			'wikEdIndentList alt':         'Listă indentată',
			'wikEdIndentList title':       'Creşte indentarea (shift-click: scade)',
			'wikEdDefinitionList alt':     'Listă def.',
			'wikEdDefinitionList title':   'Listă de definiţii',
			'wikEdImage alt':              'Imagine',
			'wikEdImage title':            'Imagine',
			'wikEdTable alt':              'Tabel',
			'wikEdTable title':            'Tabel',
			'wikEdReferences alt':         'Referinţe',
			'wikEdReferences title':       'Locaţie referinţe (shift-click: stil minuscul Wikipedia)',

// textify buttons
			'wikEdWikify alt':             'Wikizare',
			'wikEdWikify title':           'Conversie conţinut în cod wiki, update highlighting',
			'wikEdTextify alt':            'Textizare',
			'wikEdTextify title':          'Conversie conţinut în format text, update highlighting (shift-click: forced highlighting)',

// find and replace buttons, top row
			'wikEdFindAll alt':            'Găseşte tot',
			'wikEdFindAll title':          'Găseşte toate apariţiile',
			'wikEdFindPrev alt':           'Găseşte anter.',
			'wikEdFindPrev title':         'Găseşte apariţia anterioară',
			'wikEdFindSelect title':       'Selectează un rezultat anterior',
			'wikEdFindNext alt':           'Găseşte următ',
			'wikEdFindNext title':         'Găseşte următorul rezultat (shift-click: marchează selecţia)',
			'wikEdJumpPrev alt':           'Select anter.',
			'wikEdJumpPrev title':         'Selectează rezultatul anterior',
			'wikEdJumpNext alt':           'Select următ.',
			'wikEdJumpNext title':         'Selectează rezultatul următor',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'Înlocuieşte tot',
			'wikEdReplaceAll title':       'Înlocuieşte toate apariţiile',
			'wikEdReplacePrev alt':        'Înlocuieşte anter',
			'wikEdReplacePrev title':      'Înlocuieşte apariţia anterioară',
			'wikEdReplaceSelect title':    'Selectează apariţia anterioară',
			'wikEdReplaceNext alt':        'Înloc. următ',
			'wikEdReplaceNext title':      'Înlocuieşte următorul rezultat găsit',
			'wikEdCaseSensitive alt':      'Dimensiune caractere',
			'wikEdCaseSensitive title':    'Căutarea ţine cont de majusculă/minusculă',
			'wikEdRegExp alt':             'RegExp',
			'wikEdRegExp title':           'Câmpul de căutare este o expresie regulară',
			'wikEdFindAhead alt':          'Caută simultan',
			'wikEdFindAhead title':        'Căutare în timp ce se tastează',

// fix buttons, top row
			'wikEdFixBasic alt':           'Corecţii de bază',
			'wikEdFixBasic title':         'Corectează linii goale',
			'wikEdFixHtml alt':            'Corectează html',
			'wikEdFixHtml title':          'Converteşte html în wikicode',
			'wikEdFixCaps alt':            'Corectează majuscule',
			'wikEdFixCaps title':          'Corectează majusculele din titluri şi liste',
			'wikEdFixUnicode alt':         'Corectează Unicod',
			'wikEdFixUnicode title':       'Corectează caracterele Unicod',
			'wikEdFixAll alt':             'Corectează totul',
			'wikEdFixAll title':           'Corecţii de bază, html, capitalizare şi Unicod',
			'wikEdFixRedirect alt':        'Fix redirects',
			'wikEdFixRedirect title':      'Fix redirects',

// fix buttons, bottom row
			'wikEdFixDashes alt':          'Corectează dashes',
			'wikEdFixDashes title':        'Corectează dashes',
			'wikEdFixPunct alt':           'Corectează punctuaţia',
			'wikEdFixPunct title':         'Corectează spaţiile dinaintea punctuaţiei',
			'wikEdFixMath alt':            'Corecţii matematice',
			'wikEdFixMath title':          'Corecţii formule matematice',
			'wikEdFixChem alt':            'Corecţii chim.',
			'wikEdFixChem title':          'Corecţii formule chimice',
			'wikEdFixUnits alt':           'Corecţii unităţi',
			'wikEdFixUnits title':         'Corecţii unităţi',
			'wikEdFixRegExTypo alt':       'Corectează typo',
			'wikEdFixRegExTypo title':     'Corectează typo, folosind regulile RegExTypoFixer ale AutoWikiBrowser',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, TEMPL]',
			'wikEdRefHide title':          'Toggle [REF] and [TEMPL] hiding',
			'wikEdRefButtonTooltip':       'Click to display hidden reference',
			'wikEdTemplButtonTooltip':     'Click to display hidden template',
			'wikEdCharEntityButtonTooltip': 'Click to display hidden character entity',
			'wikEdRefButtonShowTooltip':   'Click to hide reference',
			'wikEdTemplButtonShowTooltip': 'Click to hide template',
			'wikEdCharEntityButtonShowTooltip': 'Click to hide character entity',
			'wikEdTextZoom alt':           'Redimensionează text',
			'wikEdTextZoom title':         'Zoom text (shift-click: înapoi)',
			'wikEdClearHistory alt':       'Şterge istoric',
			'wikEdClearHistory title':     'Ştergere istoricul căutărilor şi sumarului',
			'wikEdScrollToPreview alt':    'Derulează la previzualizare',
			'wikEdScrollToPreview title':  'Derulează la câmpul de previzualizare',
			'wikEdScrollToEdit alt':       'Derulează la editare',
			'wikEdScrollToEdit title':     'Derulează la câmpul de editare',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'Utilizare wikEd',
			'wikEdUseWikEd title':         'Comută între zona clasică de editare şi wikEd',
			'wikEdHighlightSyntax alt':    'Sintaxă',
			'wikEdHighlightSyntax title':  'Comută marcajul automat al sintaxei',
			'wikEdTableMode alt':          'Table mode',
			'wikEdTableMode title':        'Toggle table edit mode',
			'wikEdSource alt':             'Sursă',
			'wikEdCloseToolbar title':     'Închide bara standard de unelte non-wikEd',
			'wikEdCloseToolbar alt':       'Închide bara de unelte',
			'wikEdSource title':           'Afişează codul sursă',
			'wikEdUsing alt':              'Utilizare',
			'wikEdUsing title':            'Adaugă automat \'\'…utilizare wikEd\'\' la sumare',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Comuntă vizualizarea automată a diferenţelor',
			'wikEdFullScreen alt':         'Ecran complet',
			'wikEdFullScreen title':       'Comută afişarea pe ecran complet',

// summary buttons
			'wikEdClearSummary alt':       'Şterge sumarul',
			'wikEdClearSummary title':     'Şterge câmpul sumar',
			'wikEdSummarySelect title':    'Selectează un sumar precedent',
			'wikEdPresetSummary': [
				'/*  */ ', 'copyedit', 'răspuns', 'articol creat', 'rescriere intro',
				'corecţie link', 'corecţie typos', 'eliminare link(uri) spam', 'anulare test',
			'anulare vandalism', 'formatare text sursă', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '…utilizare [[en:User:Cacycle/wikEd|wikEd]]',

// button title acceskey
			'alt-shift':                   'alt-shift-',

// submit buttons
			'wikEdLocalPreviewImg alt':    'Previzualizare mai jos',
			'wikEdLocalPreview title':     'Arată mai jos previzualizarea',
			'wikEdLocalDiffImg alt':       'Modificări mai jos',
			'wikEdLocalDiff title':        'Arată mai jos modificările curente',
			'wikEdHelpPageLink':           ' | <a href="{wikEdHomeBaseUrl}wiki/User:Cacycle/wikEd_help" target="helpwindow">Ajutor wikEd</a>', // use full link without {wikEdHomeBaseUrl} if the page is not on the English Wikipedia

// preview and changes buttons, top
			'wikEdClose alt':              'Închide',
			'wikEdClose title':            'Închide cutia de previzualizare',
			'wikEdClose2 alt':             'Închide',
			'wikEdClose2 title':           'Închide cutia de previzualizare',
			'wikEdScrollToPreview2 alt':   'Derulare la previzualizare',
			'wikEdScrollToPreview2 title': 'Derulare la câmpul de previzualizare',
			'wikEdScrollToEdit2 alt':      'Derulare la editare',
			'wikEdScrollToEdit2 title':    'Derulare la câmpul de editare',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'Derulare la previzualizare',
			'wikEdScrollToPreview3 title': 'Derulare la câmpul de previzualizare',
			'wikEdScrollToEdit3 alt':      'Derulare la editare',
			'wikEdScrollToEdit3 title':    'Derulare la câmpul de editare',

// preview field
			'wikEdPreviewLoading':         '...',

// formatting functions
			'image filename':              'nume_fişier',
			'image width':                 'lăţime',
			'table caption':               'descriere',
			'table heading':               'titlu',
			'table cell':                  'celulă',
			'redirect article link':       'link articol',

// fixing functions
			'External links':              'Legături externe',
			'See also':                    'Vezi şi',
			'References':                  'Referinţe',

// language specific wiki code
			'wikicode Image':              'Imagine',
			'wikicode File':               'Fişier',
			'wikicode Category':           'Categorie',
			'wikicode Template':           'Format',
			'wikEdReferencesSection':      '\n== Referinţe ==\n\n<references/>\n',
			'talk page':                   'talk',
			'history page':                'history',
			'talk namespace':              'Talk',
			'talk namespace suffix':       '_talk',

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'TEMPL',

// shortened button texts
			'shortenedPreview':            'Previzualizare',
			'shortenedChanges':            'Schimbări',

// follow link popup
			'followLink':                  '(ctrl-click)',
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
			'wikEdDiffButton title':       'Activează vizualizarea automată a diferenţelor',
			'wikEdDiffLoading':            '...'

}