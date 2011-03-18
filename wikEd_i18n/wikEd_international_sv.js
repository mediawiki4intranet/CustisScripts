/*
 
{{en:User:Cacycle/wikEd_template}}
 
This is a Swedish translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].
 
<pre><nowiki> */
 
var wikEdText = {

// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Klicka för att inaktivera',
			'wikEdLogo error alt':         'wikEd-fel',
			'wikEdLogo error title':       'Fel vid laddning - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Klicka för att inaktivera',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'Inget stöd för webbläsare - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Inkompatibelt skript eller finess "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    'Inaktiverad - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Klicka för att aktivera',

// top jumper
			'wikEdScrollToEdit4 alt':      'Hoppa till redigering',
			'wikEdScrollToEdit4 title':    'Hoppa till fältet för redigering',

// button bar grip titles
			'wikEdGripFormat title':       'Formateringsknappar (klicka för att gömma/visa)',
			'wikEdGripTextify title':      'Textifierings- och wikifieringsknappar (klicka för att gömma/visa)',
			'wikEdGripCustom1 title':      'Användarvalda knappar (klicka för att gömma/visa)',
			'wikEdGripFind title':         'Sökknappar (klicka för att gömma/visa)',
			'wikEdGripFix title':          'Åtgärdsknappar (klicka för att gömma/visa)',
			'wikEdGripCustom2 title':      'Användarvalda knappar (klicka för att gömma/visa)',
			'wikEdGripControl title':      'wikEd inställningsknappar (klicka för att gömma/visa)',

// formatting buttons, top row
			'wikEdUndo alt':               'Ångra',
			'wikEdUndo title':             'Ångra',
			'wikEdRedo alt':               'Gör om',
			'wikEdRedo title':             'Gör om',
			'wikEdBold alt':               'Fet',
			'wikEdBold title':             'Fetstilad text',
			'wikEdItalic alt':             'Kursiv',
			'wikEdItalic title':           'Kursiverad text',
			'wikEdUnderline alt':          'Understrykning',
			'wikEdUnderline title':        'Understruken text',
			'wikEdStrikethrough alt':      'Överstrykning',
			'wikEdStrikethrough title':    'Överstruken text',
			'wikEdNowiki alt':             'Nowiki',
			'wikEdNowiki title':           'Nowiki-märk text',
			'wikEdSuperscript alt':        'Upphöjd',
			'wikEdSuperscript title':      'Upphöjd text',
			'wikEdSubscript alt':          'Nedsänkt',
			'wikEdSubscript title':        'Nedsänkt text',
			'wikEdRef alt':                'Källa',
			'wikEdRef title':              'Löpande källhänvisning (skift-klick: namngiven hänvisning)',
			'wikEdCase alt':               'Skiftläge',
			'wikEdCase title':             'Växla mellan gemener, inledande versal och versaler',
			'wikEdSort alt':               'Sortera',
			'wikEdSort title':             'Sortera rader alfabetiskt',
			'wikEdRedirect alt':           'Omdirigering',
			'wikEdRedirect title':         'Skapa omdirigering, tar bort all text',
			'wikEdUndoAll alt':            'Ångra alla',
			'wikEdUndoAll title':          'Ångra alla ändringar',
			'wikEdRedoAll alt':            'Gör om alla',
			'wikEdRedoAll title':          'Gör om alla ändringar',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'Länk',
			'wikEdWikiLink title':         'Wiki-länk',
			'wikEdWebLink alt':            'Webblänk',
			'wikEdWebLink title':          'Extern webblänk',
			'wikEdHeading alt':            'Rubrik',
			'wikEdHeading title':          'Öka rubriknivå (skift-klick: minska)',
			'wikEdBulletList alt':         'Punktlista',
			'wikEdBulletList title':       'Öka nivå i punktlista (skift-klick: minska)',
			'wikEdNumberList alt':         'Numrerad lista',
			'wikEdNumberList title':       'Öka nivå i numrerad lista (skift-klick: minska)',
			'wikEdIndentList alt':         'Dra in lista',
			'wikEdIndentList title':       'Öka indrag (skift-klick: minska)',
			'wikEdDefinitionList alt':     'Def-lista',
			'wikEdDefinitionList title':   'Definitionslista',
			'wikEdImage alt':              'Bild',
			'wikEdImage title':            'Bild',
			'wikEdTable alt':              'Tabell',
			'wikEdTable title':            'Tabell',
			'wikEdReferences alt':         'Källor',
			'wikEdReferences title':       'Placering av källor (skift-klick: sektionen Källor)',

// textify buttons
			'wikEdWikify alt':             'Wikifiera',
			'wikEdWikify title':           'Omvandla inklistrat innehåll till wiki-kod, uppdatera färgmarkering',
			'wikEdTextify alt':            'Textifiera',
			'wikEdTextify title':          'Omvandla inklistrat innehåll till vanlig text, uppdatera färgmarkering (skift-klick: tvinga färgmarkering)',

// find and replace buttons, top row
			'wikEdFindAll alt':            'Sök alla',
			'wikEdFindAll title':          'Sök efter alla träffar',
			'wikEdFindPrev alt':           'Sök föregående',
			'wikEdFindPrev title':         'Sök föregående träff',
			'wikEdFindSelect title':       'Markera en tidigare sökning eller hoppa till en rubrik',
			'wikEdFindNext alt':           'Sök nästa',
			'wikEdFindNext title':         'Sök nästa träff (skift-klicka: hämta markering)',
			'wikEdJumpPrev alt':           'Markerad föregående',
			'wikEdJumpPrev title':         'Sök efter markerad text bakåt',
			'wikEdJumpNext alt':           'Markerad nästa',
			'wikEdJumpNext title':         'Sök efter markerad text framåt',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'Ändra alla',
			'wikEdReplaceAll title':       'Ändra alla träffar i hela texten eller i markering',
			'wikEdReplacePrev alt':        'Ändra föregående',
			'wikEdReplacePrev title':      'Ändra föregående träff',
			'wikEdReplaceSelect title':    'Markera föregående ersättning',
			'wikEdReplaceNext alt':        'Ändra nästa (skift-klick: hämta markering)',
			'wikEdReplaceNext title':      'Ändra nästa träff',
			'wikEdCaseSensitive alt':      'Skiftlägeskänslig',
			'wikEdCaseSensitive title':    'Sökning är skiftlägeskänslig',
			'wikEdRegExp alt':             'RegExp',
			'wikEdRegExp title':           'Sökfält är ett regelbundet uttryck',
			'wikEdFindAhead alt':          'Sök i förväg',
			'wikEdFindAhead title':        'Sök i förväg medan du skriver (skiftlägesokänsligt, icke-regexp)',

// fix buttons, top row
			'wikEdFixBasic alt':           'Åtgärda grundläggande',
			'wikEdFixBasic title':         'Åtgärda blanka och tomma rader, görs även av andra åtgärdsfunktioner',
			'wikEdFixHtml alt':            'Åtgärda html',
			'wikEdFixHtml title':          'Åtgärda html till wikikod',
			'wikEdFixCaps alt':            'Åtgärda versaler',
			'wikEdFixCaps title':          'Åtgärda versaler i rubriker och listor',
			'wikEdFixUnicode alt':         'Åtgärda Unicode',
			'wikEdFixUnicode title':       'Åtgärda Unicode-teckenrepresentationer',
			'wikEdFixAll alt':             'Åtgärda allt',
			'wikEdFixAll title':           'Åtgärda grundläggande, html, versaler och Unicode',
			'wikEdFixRedirect alt':        'Åtgärda omdirigeringar',
			'wikEdFixRedirect title':      'Åtgärda omdirigeringar',

// fix buttons, bottom row
			'wikEdFixDashes alt':          'Åtgärda tankstreck',
			'wikEdFixDashes title':        'Åtgärda tankstreck',
			'wikEdFixPunct alt':           'Åtgärda punktuation',
			'wikEdFixPunct title':         'Åtgärda mellanslag före punktuation',
			'wikEdFixMath alt':            'Åtgärda matematik',
			'wikEdFixMath title':          'Åtgärda matematik',
			'wikEdFixChem alt':            'Åtgärda kemi',
			'wikEdFixChem title':          'Åtgärda kemiska formler',
			'wikEdFixUnits alt':           'Åtgärda enheter',
			'wikEdFixUnits title':         'Åtgärda enheter',
			'wikEdFixRegExTypo alt':       'Åtgärda stavfel',
			'wikEdFixRegExTypo title':     'Åtgärda stavfel med regler från AutoWikiBrowser RegExTypoFixer',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, TEMPL]',
			'wikEdRefHide title':          'Växla döljande av [REF] [TEMPL]',
			'wikEdRefButtonTooltip':       'Klicka för att visa dold referens',
			'wikEdTemplButtonTooltip':     'Klicka för att visa dold mall',
			'wikEdCharEntityButtonTooltip': 'Klicka för att visa dold teckenreferens',
			'wikEdRefButtonShowTooltip':   'Klicka för att dölja referens',
			'wikEdTemplButtonShowTooltip': 'Klicka för att dölja mall',
			'wikEdCharEntityButtonShowTooltip': 'Klicka för att dölja mall',
			'wikEdTextZoom alt':           'Textzoom',
			'wikEdTextZoom title':         'Växla textzoom (skift-klick: baklänges)',
			'wikEdClearHistory alt':       'Töm historik',
			'wikEdClearHistory title':     'Töm historiken för sök, ersätt och summering',
			'wikEdScrollToPreview alt':    'Hoppa till förhandsgranskning',
			'wikEdScrollToPreview title':  'Hoppa till fältet för förhandsgranskning',
			'wikEdScrollToEdit alt':       'Hoppa till redigering',
			'wikEdScrollToEdit title':     'Hoppa till fältet för redigering',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'Använd wikEd',
			'wikEdUseWikEd title':         'Växla mellan klassiskt textfält och wikEd',
			'wikEdHighlightSyntax alt':    'Kodfärgning',
			'wikEdHighlightSyntax title':  'Växla mellan lägen för automatisk färgmarkering av kod',
			'wikEdTableMode alt':          'Tabelläge',
			'wikEdTableMode title':        'Växla tabelläge',
			'wikEdSource alt':             'Källkod',
			'wikEdCloseToolbar title':     'Stäng standardverktygsfältet (icke-wikEd)',
			'wikEdCloseToolbar alt':       'Stäng verktygsfält',
			'wikEdSource title':           'Visa källkod för testsyften',
			'wikEdUsing alt':              'med',
			'wikEdUsing title':            'Lägg till \'\'…med wikEd\'\' till summeringar automatiskt',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Växla mellan vanlig och automatisk förbättrad skillnadsvisning',
			'wikEdFullScreen alt':         'Fullskärm',
			'wikEdFullScreen title':       'Växla mellan vanligt och fullskärmsläge.',

// summary buttons
			'wikEdClearSummary alt':       'Töm summering',
			'wikEdClearSummary title':     'Töm fältet för summering',
			'wikEdSummarySelect title':    'Välj en tidigare summering',
			'wikEdPresetSummary': [
				'/*  */ ', 'omformulering', 'svar', 'skapade artikel', 'skriver om intro',
				'länkfix', 'fixar stavfel', 'tar bort länkspam', 'test av återställning',
				'återställer vandalism', 'formaterar källkod', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '…med [[en:User:Cacycle/wikEd|wikEd]]',

// button title acceskey
			'alt-shift':                   'alt-skift-',

// submit buttons
			'wikEdLocalPreviewImg alt':    'Förhandsgranskning nedan',
			'wikEdLocalPreview title':     'Visa förhandsgranskning nedanför',
			'wikEdLocalDiffImg alt':       'Ändringar nedan',
			'wikEdLocalDiff title':        'Visa nuvarande ändringar nedanför',
			'wikEdHelpPageLink':           ' | <a href="{wikEdHomeBaseUrl}wiki/User:Cacycle/wikEd_help" target="helpwindow">wikEd hjälp</a>',

// preview and changes buttons, top
			'wikEdClose alt':              'Stäng',
			'wikEdClose title':            'Stäng ruta för förhandsgranskning',
			'wikEdClose2 alt':             'Stäng',
			'wikEdClose2 title':           'Stäng ruta för förhandsgranskning',
			'wikEdScrollToPreview2 alt':   'Hoppa till förhandsgranskning',
			'wikEdScrollToPreview2 title': 'Hoppa till fältet för förhandsgranskning',
			'wikEdScrollToEdit2 alt':      'Hoppa till redigering',
			'wikEdScrollToEdit2 title':    'Hoppa till fältet för redigering',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'Hoppa till förhandsgranskning',
			'wikEdScrollToPreview3 title': 'Hoppa till fältet för förhandsgranskning',
			'wikEdScrollToEdit3 alt':      'Hoppa till redigering',
			'wikEdScrollToEdit3 title':    'Hoppa till fältet för redigering',

// preview field
			'wikEdPreviewLoading':         '...',

// formatting functions
			'image filename':              'filnamn',
			'image width':                 'bredd',
			'table caption':               'etikett',
			'table heading':               'rubrik',
			'table cell':                  'cell',
			'redirect article link':       'artikellänk',

// fixing functions
			'External links':              'Externa länkar',
			'See also':                    'Se även',
			'References':                  'Källor',

// language specific wiki code
			'wikicode Image':              'Bild',
			'wikicode File':               'Fil',
			'wikicode Category':           'Kategori',
			'wikicode Template':           'Mall',
			'wikEdReferencesSection':      '\n== Källor ==\n\n<references />\n',
			'talk page':                   'diskussion',
			'history page':                'history',
			'talk namespace':              'Diskussion',
			'talk namespace suffix':       'diskussion',

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'TEMPL',

// shortened button texts
			'shortenedPreview':            'Förhandsgranska',
			'shortenedChanges':            'Ändringar',

// follow link popup
			'followLink':                  '(Ctrl-klick)',
			'followLinkMac':               '(Cmd-click)',

// error message popups
			'wikEdTableModeError':         'Wikikoden för tabell innehåller fel',

// auto updating
			'wikEdGreasemonkeyAutoUpdate': 'wikEd-uppdatering:\n\nEn ny version av GreaseMonkey-skriptet "wikEd" är tillgänglig.\n\n\nDen kommer att laddas ned från:\n\n{updateURL}',

// highlighting popups
			'wikEdHyphenDash':             'Vanligt bindestreck',
			'wikEdFigureDash':             'Numerisk divis',
			'wikEdEnDash':                 'Tankstreck',
			'wikEdEmDash':                 'Långt tankstreck',
			'wikEdBarDash':                'Horisontellt streck',
			'wikEdMinusDash':              'Minustecken',
			'wikEdSoftHyphen':             'Mjukt bindestreck',
			'wikEdTab':                    'Tabb',
			'wikEdEnSpace':                'Halvfyrkant',
			'wikEdEmSpace':                'Fyrkant',
			'wikEdThinSpace':              'Åttondelsfyrkant',
			'wikEdIdeographicSpace':       'Ideografiskt mellanslag',

// highlighting
			'wikEdSignature3':             'Signera endast med användarnamn',
			'wikEdSignature4':             'Signera med användarnamn och datum',
			'wikEdSignature5':             'Signera endast med datum',

// highlighting errors
			'wikEdErrorHtmlUnknown':       'Icke stödd HTML-tagg',
			'wikEdErrorBoldItalic':        'Ogiltig fetstil/kursivering',
			'wikEdErrorWrongClose':        'Avslutande tagg passar inte till inledande',
			'wikEdErrorNoOpen':            'Avslutande tagg har ingen inledande',
			'wikEdErrorNoHandler':         'Ingen hanterare',
			'wikEdErrorNoClose':           'Inledande tagg har ingen avslutande',
			'wikEdErrorNewline':           'Inledande tagg avslutad med ny rad',
			'wikEdErrorTemplHeading':      'Rubriker i mallar ignoreras',
			'wikEdErrorTemplParam':        'Template/parameter-taggar stämmer inte överens',
			'wikEdErrorTemplParamAmbig':   'Template/parameter-taggar är tvetydiga',

// highlighting image preview
			'wikEdFilePreview':            'Bildgranskning',

// from [[en:User:Cacycle/wikEdDiff.js]]
			'wikEdDiffButtonImg alt':      'wikEdDiff',
			'wikEdDiffButton title':       'Visa förbättrad skillnadsvisning',
			'wikEdDiffLoading':            '...'

}