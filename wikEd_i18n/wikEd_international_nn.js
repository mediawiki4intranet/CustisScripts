/*

{{en:User:Cacycle/wikEd_template}}

This is the New Norwegian translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

<pre><nowiki> */

var wikEdText = {

// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Klikk for å deaktivere',
			'wikEdLogo error alt':         'wikEd feil',
			'wikEdLogo error title':       'Innlastingsfeil - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Klikk for å deaktivere',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'Nettlesaren støttar ikkje programmet - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Incompatible script or gadget "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    'Inaktivert - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Klikk for å aktivere',

// top preview jumper
			'wikEdScrollToEdit4 alt':      'Hopp til redigeringsvindauge',
			'wikEdScrollToEdit4 title':    'Hopp til redigeringsvindauge',

// button bar grip titles
			'wikEdGripFormat title':       'Formatteringsknappar (klikk for å gøyme eller vise)',
			'wikEdGripTextify title':      'Tekst- og wikiknappar (klikk for å gøyme eller vise)',
			'wikEdGripCustom1 title':      'Egendefinerte knappar (klikk for å gøyme eller vise)',
			'wikEdGripFind title':         'Søkefunksjonsknappar (klikk for å gøyme eller vise)',
			'wikEdGripFix title':          'Formateringsknappar (klikk for å gøyme eller vise)',
			'wikEdGripCustom2 title':      'Egendefinerte knappar (klikk for å gøyme eller vise)',
			'wikEdGripControl title':      'wikEd kontrollknappar (klikk for å gøyme eller vise)',

// formatting buttons, top row
			'wikEdUndo alt':               'Angre',
			'wikEdUndo title':             'Angre',
			'wikEdRedo alt':               'Gjer om',
			'wikEdRedo title':             'Gjer om',
			'wikEdBold alt':               'Feit',
			'wikEdBold title':             'Feit skrift',
			'wikEdItalic alt':             'Kursiv',
			'wikEdItalic title':           'Kursiv skrift',
			'wikEdUnderline alt':          'Understreking',
			'wikEdUnderline title':        'Strek under tekst',
			'wikEdStrikethrough alt':      'Gjennomstryking',
			'wikEdStrikethrough title':    'Strek gjennom tekst',
			'wikEdNowiki alt':             'Nowiki',
			'wikEdNowiki title':           'Sjå bort frå wiki-formatering',
			'wikEdSuperscript alt':        'Heva',
			'wikEdSuperscript title':      'Heva tekst',
			'wikEdSubscript alt':          'Senka',
			'wikEdSubscript title':        'Senka tekst',
			'wikEdRef alt':                'Ref',
			'wikEdRef title':              'Referansar (shift-klikk: refname)',
			'wikEdCase alt':               'Små/store bokstavar',
			'wikEdCase title':             'Bytt mellom små bokstavar, stor bokstav i byrjinga av ord, og store bokstavar',
			'wikEdSort alt':               'Sorter',
			'wikEdSort title':             'Sorter linjer alfabetisk',
			'wikEdRedirect alt':           'Omdirigering',
			'wikEdRedirect title':         'Lag omdirigering, slettar heile teksten',
			'wikEdUndoAll alt':            'Angre alt',
			'wikEdUndoAll title':          'Angre alle endringar',
			'wikEdRedoAll alt':            'Gjer om alt',
			'wikEdRedoAll title':          'Gjer om alle endringar',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'Peikar',
			'wikEdWikiLink title':         'Wikipeikar',
			'wikEdWebLink alt':            'Peikar',
			'wikEdWebLink title':          'Ekstern peikar',
			'wikEdHeading alt':            'Overskrift',
			'wikEdHeading title':          'Auke overskriftsnivå (Shift+klikk: Reduser)',
			'wikEdBulletList alt':         'Punktmerka liste',
			'wikEdBulletList title':       'Auke punktnivå (Shift+klikk: Reduser)',
			'wikEdNumberList alt':         'Nummerert liste',
			'wikEdNumberList title':       'Auke punktnivå (Shift+klikk: Reduser)',
			'wikEdIndentList alt':         'Innrykksliste',
			'wikEdIndentList title':       'Auke innrykk (Shift+klikk: Reduser)',
			'wikEdDefinitionList alt':     'Def liste',
			'wikEdDefinitionList title':   'Definisjonsliste',
			'wikEdImage alt':              'Bilete',
			'wikEdImage title':            'Bilete',
			'wikEdTable alt':              'Tabell',
			'wikEdTable title':            'Tabell',
			'wikEdReferences alt':         'Fotnotar',
			'wikEdReferences title':       'Fotnotar (Shift+klikk: liten wikipediastil)',

// textify buttons
			'wikEdWikify alt':             'Wiki',
			'wikEdWikify title':           'Omform innlimt innhald til wikiformat, update highlighting',
			'wikEdTextify alt':            'Tekst',
			'wikEdTextify title':          'Omform innlimt innhald til rein tekst, update highlighting (shift-click: forced highlighting)',

// find and replace buttons, top row
			'wikEdFindAll alt':            'Finn alle',
			'wikEdFindAll title':          'Finn alle treff',
			'wikEdFindPrev alt':           'Finn førre',
			'wikEdFindPrev title':         'Finn førre treff',
			'wikEdFindSelect title':       'Velj tidlegare søk eller gå direkte til ei overskrift',
			'wikEdFindNext alt':           'Finn neste',
			'wikEdFindNext title':         'Finn neste treff (shift-klikk: få utval)',
			'wikEdJumpPrev alt':           'Velj førre',
			'wikEdJumpPrev title':         'Finn den utvalde teksten bakover',
			'wikEdJumpNext alt':           'Vald tekst',
			'wikEdJumpNext title':         'Finn den utvalde teksten framover',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'Erstatt alle',
			'wikEdReplaceAll title':       'Erstatt alle treff i teksten, eller den markerte teksten',
			'wikEdReplacePrev alt':        'Erstatt forrige',
			'wikEdReplacePrev title':      'Erstatt forrige treff',
			'wikEdReplaceSelect title':    'Vel ei tidlegare erstatting',
			'wikEdReplaceNext alt':        'Erstatt neste',
			'wikEdReplaceNext title':      'Erstatt det neste treffet (shift-klikk: få utval)',
			'wikEdCaseSensitive alt':      'Skil mellom store og små bokstaver',
			'wikEdCaseSensitive title':    'Skil mellom store og små bokstaver i søket',
			'wikEdRegExp alt':             'RegUtr',
			'wikEdRegExp title':           'Søkjefeltet er eit regulært uttrykk',
			'wikEdFindAhead alt':          'Finn fram',
			'wikEdFindAhead title':        'Finn medan du skriv',

// fix buttons, top row
			'wikEdFixBasic alt':           'Fiks grunnleggande',
			'wikEdFixBasic title':         'Fiks blanke felt og tomme linjer, vert òg gjort av dei andre funksjonane',
			'wikEdFixHtml alt':            'Fiks html',
			'wikEdFixHtml title':          'Fiks html til wikikode',
			'wikEdFixCaps alt':            'Fiks store bokstavar',
			'wikEdFixCaps title':          'Fiks store bokstavar i overskrifter og lister',
			'wikEdFixUnicode alt':         'Fiks Unicode',
			'wikEdFixUnicode title':       'Fiks Unicodeteikn',
			'wikEdFixAll alt':             'Fiks alt',
			'wikEdFixAll title':           'Fiks grunnleggande, html, store og små bokstavar, og Unicode',
			'wikEdFixRedirect alt':        'Fiks omdirigeringar',
			'wikEdFixRedirect title':      'Fiks omdirigeringar',

// fix buttons, bottom row
			'wikEdFixDashes alt':          'Fiks tankestrekar',
			'wikEdFixDashes title':        'Fiks tankestrekar',
			'wikEdFixPunct alt':           'Fiks teiknsetjing',
			'wikEdFixPunct title':         'Fiks mellomrom før teikn',
			'wikEdFixMath alt':            'Fiks matte',
			'wikEdFixMath title':          'Fiks matteformlar',
			'wikEdFixChem alt':            'Fiks kjemi',
			'wikEdFixChem title':          'Fiks kjemiske formlar',
			'wikEdFixUnits alt':           'Fiks einingar',
			'wikEdFixUnits title':         'Fiks einingar',
			'wikEdFixRegExTypo alt':       'Fiks skrivefeil',
			'wikEdFixRegExTypo title':     'Fiks skrivefeil med AutoWikiBrowser RegExTypoFixer-reglar',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, TEMPL]',
			'wikEdRefHide title':          'Toggle [REF] and [TEMPL] hiding',
			'wikEdRefButtonTooltip':       'Click to display hidden reference',
			'wikEdTemplButtonTooltip':     'Click to display hidden template',
			'wikEdCharEntityButtonTooltip': 'Click to display hidden character entity',
			'wikEdRefButtonShowTooltip':   'Click to hide reference',
			'wikEdTemplButtonShowTooltip': 'Click to hide template',
			'wikEdCharEntityButtonShowTooltip': 'Click to hide character entity',
			'wikEdTextZoom alt':           'Tekst zoom',
			'wikEdTextZoom title':         'Zoom ut (Shift-klikk: zoom inn)',
			'wikEdClearHistory alt':       'Slett logg',
			'wikEdClearHistory title':     'Slett søk-, erstatt-, og forklaringsloggen',
			'wikEdScrollToPreview alt':    'Hopp til førehandsvis',
			'wikEdScrollToPreview title':  'Gå til førehandsvisfeltet',
			'wikEdScrollToEdit alt':       'Gå til redigering',
			'wikEdScrollToEdit title':     'Gå til redigeringsvindauget',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'Bruk wikEd',
			'wikEdUseWikEd title':         'Bytt mellom gammal endring og wikEd',
			'wikEdHighlightSyntax alt':    'Syntaks',
			'wikEdHighlightSyntax title':  'Skru av/på automatisk syntaksutheving',
			'wikEdTableMode alt':          'Tabellmodus',
			'wikEdTableMode title':        'Skru av/på tabellredigeringsmodus',
			'wikEdSource alt':             'Kjelde',
			'wikEdCloseToolbar title':     'Lukk den gamle endringsverktøylinja',
			'wikEdCloseToolbar alt':       'Lukk verktøylinja',
			'wikEdSource title':           'Vis kjeldekoden for testing',
			'wikEdUsing alt':              'Brukar',
			'wikEdUsing title':            'Legg til \'\'…vha. wikEd\'\' til forklaringa automatisk',
			'wikEdDiff alt':               'wikEd-skilnad',
			'wikEdDiff title':             'Skru av og på wikiEd-skilnadsvising',
			'wikEdFullScreen alt':         'Fullskjerm',
			'wikEdFullScreen title':       'Skru av/på fullskjermsmodus',

// summary buttons
			'wikEdClearSummary alt':       'Tøym samandrag',
			'wikEdClearSummary title':     'Tøym samandragsfeltet',
			'wikEdSummarySelect title':    'Vel tidlegare samandrag',
			'wikEdPresetSummary': [
				'flikk', 'svar', 'ny artikkel', 'omskriving',
				'lenkjefiks', 'språkvask', 'fjerne spam', 'attenderulla',
				'attenderulla vandalisme', 'formatering'
			],
			'wikEdSummaryUsing':           '…vha. [[User:Cacycle/wikEd|wikEd]]',

// button title acceskey
			'alt-shift':                   'alt-shift-',

// submit buttons
			'wikEdLocalPreviewImg alt':    'Førehandsvis nedanfor',
			'wikEdLocalPreview title':     'Førehandsvising nedanfor',
			'wikEdLocalDiffImg alt':       'Endringar nedanfor',
			'wikEdLocalDiff title':        'Vis endringar nedanfor',
			'wikEdHelpPageLink':           ' | <a href="{wikEdHomeBaseUrl}wiki/User:Cacycle/wikEd_help" target="helpwindow">wikEd hjelp</a>', // use full link without {wikEdHomeBaseUrl} if the page is not on the English Wikipedia

// preview and changes buttons, top
			'wikEdClose alt':              'Lukk tittel',
			'wikEdClose title':            'Lukk førehandsvisingsboks',
			'wikEdClose2 alt':             'Lukk tittel',
			'wikEdClose2 title':           'Lukk førehandsvisingstittel',
			'wikEdScrollToPreview2 alt':   'Gå til førehandsvis',
			'wikEdScrollToPreview2 title': 'Gå til førehandsvisingfelt',
			'wikEdScrollToEdit2 alt':      'Gå til redigeringsfelt',
			'wikEdScrollToEdit2 title':    'Gå til redigeringsfelt',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'Gå til førenahdsvis',
			'wikEdScrollToPreview3 title': 'Gå til førehandsvisingfelt',
			'wikEdScrollToEdit3 alt':      'Gå til redigeringsfelt',
			'wikEdScrollToEdit3 title':    'Gå til redigeringsfelt',

// preview field
			'wikEdPreviewLoading':         '...',

// formatting functions
			'image filename':              'filnamn',
			'image width':                 'breidde',
			'table caption':               'bilettekst',
			'table heading':               'overskrift',
			'table cell':                  'celle',
			'redirect article link':       'artikkellenkje',

// fixing functions
			'External links':              'Bakgrunnsstoff',
			'See also':                    'Sjå òg',
			'References':                  'Kjelder',

// language specific wiki code
			'wikicode Image':              'Fil',
			'wikicode File':               'Fil',
			'wikicode Category':           'Kategori',
			'wikicode Template':           'Mal',
			'wikEdReferencesSection':      '\n== Kjelder==\n\n{{fotnoteliste}}\n',
			'talk page':                   'talk',
			'history page':                'history',
			'talk namespace':              'Talk',
			'talk namespace suffix':       '_talk',

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'TEMPL',

// shortened button texts
			'shortenedPreview':            'Førehandsvis',
			'shortenedChanges':            'Endringar',

// follow link popup
			'followLink':                  '(Ctrl-klikk)',
			'followLinkMac':               '(cmd-click)',

// error message popups
			'wikEdTableModeError':         'Wikikoden for tabellar inneheld feil',

// auto updating
			'wikEdGreasemonkeyAutoUpdate': 'wikEd Oppdater:\n\nEi ny utgåve av GreaseMonkey-skriptet "wikEd" er tilgjengeleg.\n\n\nDet vert lasta ned frå:\n\n{updateURL}',

// highlighting popups
			'wikEdHyphenDash':             'Standard bindestrek',
			'wikEdFigureDash':             'Tal-tankestrek',
			'wikEdEnDash':                 'En-tankestrek',
			'wikEdEmDash':                 'Em-tankestrek',
			'wikEdBarDash':                'Horisontal strek',
			'wikEdMinusDash':              'Minus-teikn',
			'wikEdSoftHyphen':             'Mjuk bindestrek',
			'wikEdTab':                    'Tab',
			'wikEdEnSpace':                'En-mellomrom',
			'wikEdEmSpace':                'Em-mellomrom',
			'wikEdThinSpace':              'Tynt mellomrom',
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
			'wikEdDiffButtonImg alt':      'wikEd-skilndar',
			'wikEdDiffButton title':       'Vis endringar vh.a wikED',
			'wikEdDiffLoading':            '...'

}