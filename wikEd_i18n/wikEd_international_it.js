/*

{{en:User:Cacycle/wikEd_template}}

This is the Italian translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

Questa e' la traduzione in italiano dell'estensione dell'editor Mediawiki '''[[:en:User:Cacycle/wikEd|wikEd]]''' versione 0.9.91.
Seguire le istruzioni di traduzione descritte in [[:en:User:Cacycle/wikEd international]].

<pre><nowiki> */

var wikEdText = {

// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Click per disabilitare',
			'wikEdLogo error alt':         'wikEd error',
			'wikEdLogo error title':       'Errore di caricamento - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Click per disabilitare',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'Browser non supportato - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Script or gadget incompatibile "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    'Disabilitato - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Click per abilitare',

// top preview jumper
			'wikEdScrollToEdit4 alt':      'Scroll edit',
			'wikEdScrollToEdit4 title':    'Scrolla alla finestra di edit',

// button bar grip titles
			'wikEdGripFormat title':       'Bottoni di formattazione (clicca per mostrare o nascondere)',
			'wikEdGripTextify title':      'Trasformare in testo o in codice wiki (clicca per mostrare o nascondere)',
			'wikEdGripCustom1 title':      'Bottoni personali (clicca per mostrare o nascondere)',
			'wikEdGripFind title':         'Bottoni di ricerca (clicca per mostrare o nascondere)',
			'wikEdGripFix title':          'Bottoni di correzione (clicca per mostrare o nascondere)',
			'wikEdGripCustom2 title':      'Altri bottoni personali (clicca per mostrare o nascondere)',
			'wikEdGripControl title':      'Bottoni di controllo di wikEd (clicca per mostrare o nascondere)',

// formatting buttons, top row
			'wikEdUndo alt':               'Annulla',
			'wikEdUndo title':             'Annulla',
			'wikEdRedo alt':               'Ripristina',
			'wikEdRedo title':             'Ripristina',
			'wikEdBold alt':               'Grassetto',
			'wikEdBold title':             'Testo grassetto',
			'wikEdItalic alt':             'Corsivo',
			'wikEdItalic title':           'Testo corsivo',
			'wikEdUnderline alt':          'Sottolineato',
			'wikEdUnderline title':        'Testo sottolineato',
			'wikEdStrikethrough alt':      'Barrato',
			'wikEdStrikethrough title':    'Testo barrato',
			'wikEdNowiki alt':             'Nowiki',
			'wikEdNowiki title':           'Testo Nowiki',
			'wikEdSuperscript alt':        'Apice',
			'wikEdSuperscript title':      'Testo in apice',
			'wikEdSubscript alt':          'Pedice',
			'wikEdSubscript title':        'Testo in pedice',
			'wikEdRef alt':                'Ref',
			'wikEdRef title':              'Reference nel testo (shift-click: named tag)',
			'wikEdReferences alt':         'References',
			'wikEdReferences title':       'Posizione delle references (doppio click: sezione References)',
			'wikEdCase alt':               'Case',
			'wikEdCase title':             'Cicla tra minuscolo, iniziale maiuscola, e tutto maiuscolo',
			'wikEdSort alt':               'Ordina',
			'wikEdSort title':             'Ordina le linee alfabeticamente',
			'wikEdUndoAll alt':            'Annulla tutto',
			'wikEdUndoAll title':          'Annulla tutte le modifiche',
			'wikEdRedoAll alt':            'Ripristina tutto',
			'wikEdRedoAll title':          'Ripristina tutte le modifiche',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'Link',
			'wikEdWikiLink title':         'Wikilink',
			'wikEdWebLink alt':            'Weblink',
			'wikEdWebLink title':          'Link esterno',
			'wikEdHeading alt':            'Intestazione',
			'wikEdHeading title':          'Aumenta i livelli delle intestazioni (shift-click: diminuire)',
			'wikEdBulletList alt':         'Lista puntata',
			'wikEdBulletList title':       'Lista puntata',
			'wikEdNumberList alt':         'Lista numerata',
			'wikEdNumberList title':       'Lista numerata',
			'wikEdIndentList alt':         'Lista indentata',
			'wikEdIndentList title':       'Lista indentata',
			'wikEdDefinitionList alt':     'Lista def',
			'wikEdDefinitionList title':   'Lista di definizione',
			'wikEdImage alt':              'Immagine',
			'wikEdImage title':            'Immagine',
			'wikEdTable alt':              'Tabella',
			'wikEdTable title':            'Tabella',
			'wikEdRedirect alt':           'Redirect',
			'wikEdRedirect title':         'Crea redirect, cancella l\'intero testo',

// textify buttons
			'wikEdWikify alt':             'Wikifica',
			'wikEdWikify title':           'Converti il testo inserito in wikicode, aggiorna l\'highlighting',
			'wikEdTextify alt':            'Textifica',
			'wikEdTextify title':          'Converti il testo inserito in testo non formattato, aggiorna l\'highlighting (shift-click: forced highlighting)',
			
// find and replace buttons, top row
			'wikEdFindAll alt':            'Trova tutto',
			'wikEdFindAll title':          'Trova tutte le occorrenze',
			'wikEdFindPrev alt':           'Trova prec',
			'wikEdFindPrev title':         'Trova l\'occorrenza precedente',
			'wikEdFindSelect title':       'Trova l\'intestazione precedente o salta all\'inizio',
			'wikEdFindNext alt':           'Trova prox',
			'wikEdFindNext title':         'Trova la prossima occorrenza (shift-click: prende la selezione)',
			'wikEdJumpPrev alt':           'Seleziona prev',
			'wikEdJumpPrev title':         'Cerca all\'indietro il testo selezionato',
			'wikEdJumpNext alt':           'Seleziona prox',
			'wikEdJumpNext title':         'Cerca in avanti il testo selezionato',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'Sostituisci tutto',
			'wikEdReplaceAll title':       'Sostituisci tutte le occorrenze nel testo selezionato o in tutto il documento',
			'wikEdReplacePrev alt':        'Sostituisci prec',
			'wikEdReplacePrev title':      'Sostituisci l\'occorrenza precedente',
			'wikEdReplaceSelect title':    'Scegli una sostituzione precedente',
			'wikEdReplaceNext alt':        'Sostituisci prox',
			'wikEdReplaceNext title':      'Sostituisci la successiva occorrenza (shift-click: prende la selezione)',
			'wikEdCaseSensitive alt':      'Maiuscolo/minuscolo',
			'wikEdCaseSensitive title':    'Ricerca considerando il maiuscolo/minuscolo',
			'wikEdRegExp alt':             'RegExp',
			'wikEdRegExp title':           'Il campo trova e\' un\'espressione regolare',
			'wikEdFindAhead alt':          'trova subito',
			'wikEdFindAhead title':        'Trova mentre digiti (no maiuscolo/minuscolo, no espressioni regolari)',

// fix buttons, top row
			'wikEdFixBasic alt':           'Correggi base',
			'wikEdFixBasic title':         'Correggi spazi e righe vuote, usato anche da altre funzioni di correzione',
			'wikEdFixHtml alt':            'Correggi html',
			'wikEdFixHtml title':          'Trasforma l\'html in wikicode',
			'wikEdFixCaps alt':            'Correggi maiuscole',
			'wikEdFixCaps title':          'Correggi le maiuscole nei titoli e nelle liste',
			'wikEdFixUnicode alt':         'Correggi Unicode',
			'wikEdFixUnicode title':       'Corregge la rappresentazione dei caratteri Unicode',
			'wikEdFixAll alt':             'Correggi tutto',
			'wikEdFixAll title':           'Correggi spazi, html, Iniziali, e Unicode',
			'wikEdFixRedirect alt':        'Fix redirects',
			'wikEdFixRedirect title':      'Fix redirects',

// fix buttons, bottom row
			'wikEdFixDashes alt':          'Correggi trattini',
			'wikEdFixDashes title':        'Correggi trattini',
			'wikEdFixPunct alt':           'Correggi punteggiatura',
			'wikEdFixPunct title':         'Correggi gli spazi prima della punteggiatura',
			'wikEdFixMath alt':            'Correggi math',
			'wikEdFixMath title':          'Correggi formule matematiche',
			'wikEdFixChem alt':            'Correggi chim',
			'wikEdFixChem title':          'Correggi formule chimiche',
			'wikEdFixUnits alt':           'Correggi unita\'',
			'wikEdFixUnits title':         'Correggi unita\' di misura',
			'wikEdFixRegExTypo alt':       'Correggi refusi',
			'wikEdFixRegExTypo title':     'Correggi i refusi con l\'uso dell\'AutoWikiBrowser RegExTypoFixer',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, TEMPL]',
			'wikEdRefHide title':          'Mostra/nascondi [REF] e [TEMPL]',
			'wikEdRefButtonTooltip':       'Clicca per mostrare le reference nascoste',
			'wikEdTemplButtonTooltip':     'Clicca per mostrare i template nascosti',
			'wikEdCharEntityButtonTooltip': 'Clicca per mostrare i caratteri nascosti',
			'wikEdRefButtonShowTooltip':   'Clicca per nascondere le reference',
			'wikEdTemplButtonShowTooltip': 'Clicca per nascondere i template',
			'wikEdCharEntityButtonShowTooltip': 'Clicca per nascndere i caratteri',
			'wikEdTextZoom alt':           'Zoom testo',
			'wikEdTextZoom title':         'Cicla tra vari zoom del testo',
			'wikEdClearHistory alt':       'Pulisci cronologie',
			'wikEdClearHistory title':     'Pulisci le cronologie di trova, sostituisci e oggetto',
			'wikEdScrollToPreview alt':    'Scroll anteprima',
			'wikEdScrollToPreview title':  'Scrolla alla finestra di anteprima',
			'wikEdScrollToEdit alt':       'Scroll edit',
			'wikEdScrollToEdit title':     'Scrolla alla finestra di edit',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'Usa wikEd',
			'wikEdUseWikEd title':         'Cicla tra visualizzazione classica e wikEd',
			'wikEdHighlightSyntax alt':    'Sintassi',
			'wikEdHighlightSyntax title':  'Abilita l\'evidenziazione della sintassi',
			'wikEdTableMode alt':          'Table mode',
			'wikEdTableMode title':        'Toggle table edit mode',
			'wikEdSource alt':             'Fonti',
			'wikEdCloseToolbar title':     'Chiude la toolbar standard non-wikEd',
			'wikEdCloseToolbar alt':       'Chiude toolbar',
			'wikEdSource title':           'Mostra il codice sorgente, per motivi di testing',
			'wikEdUsing alt':              'Usando',
			'wikEdUsing title':            'Aggiunge automaticamente all\'oggetto \'\'…usando wikEd\'\'',
			'wikEdFullScreen alt':         'Schermo intero',
			'wikEdFullScreen title':       'Abilita o disabilita la visualizzazione a schermo intero',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Abilita vista avanzata del diff',

// summary buttons
			'wikEdClearSummary alt':       'Svuota oggetto',
			'wikEdClearSummary title':     'Svuota il campo oggetto',
			'wikEdSummarySelect title':    'Scegli un oggetto precedente',
			'wikEdPresetSummary': [
				'copyedit', 'risposta', 'nuova pagina', 'riscritto incipit',
				'corretti wikilink', 'corretti refusi', 'rimosso spam link', 'rollback per test',
				'rollback per vandalismo', 'formattazione codice sorgente', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '…usando [[Project:Monobook.js/WikEd|wikEd]]',

// button title acceskey
			'alt-shift':                   'alt-shift-',

// submit buttons
			'wikEdLocalPreviewImg alt':    'Anteprima sotto',
			'wikEdLocalPreview title':     'Mostra l\'anteprima sotto',
			'wikEdLocalDiffImg alt':       'Modifiche sotto',
			'wikEdLocalDiff title':        'Mostra le modifiche sotto',
			'wikEdHelpPageLink':           ' | <a href="http://it.wikipedia.org/wiki/Project:Monobook.js/WikEd/Manuale" target="helpwindow">Manuale wikEd</a>',

// preview and changes buttons, top
			'wikEdClose alt':              'Chiudi',
			'wikEdClose title':            'Chiudi box di anteprima',
			'wikEdClose2 alt':             'Chiudi',
			'wikEdClose2 title':           'Chiudi il box di anteprima',
			'wikEdScrollToPreview2 alt':   'Scroll anteprima',
			'wikEdScrollToPreview2 title': 'Scrolla alla finestra di anteprima',
			'wikEdScrollToEdit2 alt':      'Scroll edit',
			'wikEdScrollToEdit2 title':    'Scrolla alla finestra di edit',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'Scroll anteprima',
			'wikEdScrollToPreview3 title': 'Scrolla alla finestra di anteprima',
			'wikEdScrollToEdit3 alt':      'Scroll edit',
			'wikEdScrollToEdit3 title':    'Scrolla alla finestra di edit',

// preview field
			'wikEdPreviewLoading':         '...',

// formatting functions
			'image filename':              'nomefile',
			'image width':                 'larghezza',
			'table caption':               'didascalia',
			'table heading':               'titolo',
			'table cell':                  'cella',
			'redirect article link':       'nomepagina',

// fixing functions
			'External links':              'Collegamenti esterni',
			'See also':                    'Vedi anche',
			'References':                  'Note',

// language specific wiki code
			'wikicode Image':              'Immagine',
			'wikicode File':               'File',
			'wikicode Category':           'Categoria',
			'wikicode Template':           'Template',
			'wikEdReferencesSection':      '\n== Note ==\n\n<references />\n',
			'talk page':                   'discussioni',
			'history page':                'cronologia',
			'talk namespace':              'Talk',
			'talk namespace suffix':       '_talk',

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'TEMPL',
			
// shortened button texts
			'shortenedPreview':            'Anteprima',
			'shortenedChanges':            'Modifiche',

// follow link popup
			'followLink':                  '(Ctrl-click)',
			'followLinkMac':               '(cmd-click)',

// error message popups
			'wikEdTableModeError':         'The table wikicode contains errors',

// auto updating
			'wikEdGreasemonkeyAutoUpdate': 'wikEd Update:\n\nA new version of the GreaseMonkey script "wikEd" is available.\n\n\nIt will be downloaded from:\n\n{updateURL}',

// highlighting popups
			'wikEdHyphenDash':             'Trattino standard',
			'wikEdFigureDash':             'Figure dash',
			'wikEdEnDash':                 'En dash',
			'wikEdEmDash':                 'Em dash',
			'wikEdBarDash':                'Barra orizzontale',
			'wikEdMinusDash':              'Segno di minore',
			'wikEdSoftHyphen':             'Trattino soft',
			'wikEdTab':                    'Tab',
			'wikEdEnSpace':                'En space',
			'wikEdEmSpace':                'Em space',
			'wikEdThinSpace':              'Spazio sottile',
			'wikEdIdeographicSpace':       'Spazio ideografico',

// highlighting
			'wikEdSignature3':             'Firma con solo il nome utente',
			'wikEdSignature4':             'Firma con nome utente e data',
			'wikEdSignature5':             'Firma con solo la data',

// highlighting errors
			'wikEdErrorHtmlUnknown':       'Tag HTML non supportato',
			'wikEdErrorBoldItalic':        'Corsivo/grassetto non corretto',
			'wikEdErrorWrongClose':        'Il tag di chiusura è sbagliato',
			'wikEdErrorNoOpen':            'Il tag di chiusura non ne ha uno di apertura',
			'wikEdErrorNoHandler':         'Handler mancante',
			'wikEdErrorNoClose':           'Il tag di apertura è sbagliato',
			'wikEdErrorNewline':           'Tag di apertura chiuso da un "a capo"',
			'wikEdErrorTemplHeading':      'Gli heading dei templates vengono ignorati',
			'wikEdErrorTemplParam':        'I tag di parametro/template non coincidono',
			'wikEdErrorTemplParamAmbig':   'I tag di parametro/template sono ambigui',

// highlighting image preview
			'wikEdFilePreview':            'Anteprima immagine',

// from en:User:Cacycle/wikEdDiff.js
			'wikEdDiffButtonImg alt':      'wikEdDiff',
			'wikEdDiffButton title':       'Mostra diff avanzato',
			'wikEdDiffLoading':            '...'

}

// wikEdRegExTypoFix // this is somewhat time consuming and delays the startup!
var wikEdRegExTypoFix = true;
var wikEdRegExTypoFixURL = 'http://it.wikipedia.org/w/index.php?title=Wikipedia:AutoWikiBrowser/Typos&action=raw';

//</nowiki></pre>