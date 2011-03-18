/*
 
{{en:User:Cacycle/wikEd_template}}
 
This is the Esperanto translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].
 
<pre><nowiki> */
 
var wikEdText = {
 
// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} Esperanto ({wikEdProgramDate}) Klako por malaktivigo',
			'wikEdLogo error alt':         'WikEd Eraro',
			'wikEdLogo error title':       'Ŝarga eraro - WikEd {wikEdProgramVersion} Esperanto ({wikEdProgramDate}) Klako por malŝalto',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'Foliumilo ne eltenata - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Nekongrua skripto aŭ aldonaĵo  "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(WikEd)',
			'wikEdLogo disabled title':    'Malŝaltita - WikEd {wikEdProgramVersion} Esperanto ({wikEdProgramDate}) Klako por ŝalto',
 
// top jumper
			'wikEdScrollToEdit4 alt':      'Saltu al redaktado',
			'wikEdScrollToEdit4 title':    'Saltu al redaktofenestro',    
 
// button bar grip titles
			'wikEdGripFormat title':       'Formatigaj butonoj (alklaku por kaŝi aŭ montri)',
			'wikEdGripTextify title':      'Tekstigaj kaj vikiigaj butonoj (alklaku por kaŝi aŭ montri)',
			'wikEdGripCustom1 title':      'Personigitaj butonoj (alklaku por kaŝi aŭ montri)',
			'wikEdGripFind title':         'Serĉbutonoj (alklaku por kaŝi aŭ montri)',
			'wikEdGripFix title':          'Korektbutonoj (alklaku por kaŝi aŭ montri)',
			'wikEdGripCustom2 title':      'Personigitaj butonoj (alklaku por kaŝi aŭ montri)',
			'wikEdGripControl title':      'wikEd kontrolbutonoj (alklaku por kaŝi aŭ montri)',
 
// formatting buttons, top row
			'wikEdUndo alt':               'Malfari',
			'wikEdUndo title':             'Malfari',
			'wikEdRedo alt':               'Restarigi',
			'wikEdRedo title':             'Restarigi',
			'wikEdBold alt':               'Grasa',
			'wikEdBold title':             'Grasa teksto',
			'wikEdItalic alt':             'Kursiva',
			'wikEdItalic title':           'Kursiva skribo',
			'wikEdUnderline alt':          'Substreko',
			'wikEdUnderline title':        'Substrekita teksto',
			'wikEdStrikethrough alt':      'Trastreko',
			'wikEdStrikethrough title':    'Trastrekita teksto',
			'wikEdNowiki alt':             'Ne vikiformato',
			'wikEdNowiki title':           'Ignoru vikiformatadon',
			'wikEdSuperscript alt':        'Superskribo',
			'wikEdSuperscript title':      'Superskribita teksto',
			'wikEdSubscript alt':          'Malsupra skribo',
			'wikEdSubscript title':        'Malsupre skribita teksto',
			'wikEdRef alt':                'Ref',
			'wikEdRef title':              'En-teksta referenco (majuskl-klako: nomita etikedo)',
			'wikEdCase alt':               'Majuskle/Minuskle',
			'wikEdCase title':             'ŝanĝo inter minuskloj, komencaj majuskloj kaj majuskloj',
			'wikEdSort alt':               'Ordigi',
			'wikEdSort title':             'ordigiliniojn alfabete',
			'wikEdRedirect alt':           'Redirekto',
			'wikEdRedirect title':         'Metu redirekton kaj forigu kompletan tekston',
			'wikEdUndoAll alt':            'Malfari ĉion',
			'wikEdUndoAll title':          'Malfaru ĉiujn ŝanĝojn',
			'wikEdRedoAll alt':            'Refari ĉion',
			'wikEdRedoAll title':          'Ripetu ĉiujn ŝanĝojn',
 
// formatting buttons, bottom row
			'wikEdWikiLink alt':           'Ligilo',
			'wikEdWikiLink title':         'Vikia ligilo',
			'wikEdWebLink alt':            'Reta ligilo',
			'wikEdWebLink title':          'Ekstera retligilo',
			'wikEdHeading alt':            'Titolo',
			'wikEdHeading title':          'Plialtigu titolan nivelon (Majuskl-klako: malaltigu)',
			'wikEdBulletList alt':         'Punkta listo',
			'wikEdBulletList title':       'Altigu punktolistan nivelon (Majuskl-klako: malaltigu)',
			'wikEdNumberList alt':         'Numera listo',
			'wikEdNumberList title':       'Altigu numerlistan nivelon (Majuskl-klako: malaltigu)',
			'wikEdIndentList alt':         'Malantaŭigita listo',
			'wikEdIndentList title':       'Malantaŭigi la listnivelon (Majuskl-klako: malaltigu)',
			'wikEdDefinitionList alt':     'Dif-listo',
			'wikEdDefinitionList title':   'Difina listo',
			'wikEdImage alt':              'Bildo',
			'wikEdImage title':            'Bildo',
			'wikEdTable alt':              'Tabelo',
			'wikEdTable title':            'Tabelo',
			'wikEdReferences alt':         'Referenco',                           
			'wikEdReferences title':       'Referenclokigo (Majuskl-klako: References section)',
			'wikEdWikify alt':             'Vikisintaksigu',
 
// textify buttons
			'wikEdWikify title':           'Vikisintaksigu enmetitajn enhavojn',
			'wikEdTextify alt':            'Tekstigu',
			'wikEdTextify title':          'Konvertigu enmetitajn enhavojn al simpla teksto, update highlighting',
			'wikEdUpdateSyntax alt':       'Sintakso',
			'wikEdUpdateSyntax title':     'Aktualigu la sintaksan markigon, update highlighting (shift-click: forced highlighting)',
 
// find and replace buttons, top row
			'wikEdGetFind alt':            'Serĉu',
			'wikEdGetFind title':          'Kopiu elektaĵon al serĉujo (Majuskl-klako: kopiu elektaĵon al ujoj por serĉado kaj anstataŭigo)',
			'wikEdFindAll alt':            'Trovu ĉion',
			'wikEdFindAll title':          'Trovu ĉiujn akordantajn kun serĉaĵo',
			'wikEdFindPrev alt':           'Trovu antaŭan',
			'wikEdFindPrev title':         'Trovu antaŭan akordaĵon',
 
			'wikEdFindNext alt':           'Trovu sekvan',
			'wikEdFindNext title':         'Trovu sekvan akordaĵon',
			'wikEdFindSelect title':       'Elektu iun antaŭan serĉon aŭ saltu al iu titolo',
 
			'wikEdUpdown alt':             'Saltu al',
			'wikEdUpdown title':           'Saltu al komenco / fino',
			'wikEdJumpPrev alt':           'Saltu reen',
			'wikEdJumpPrev title':         'Saltu al antaŭa elektita teksto',
			'wikEdJumpNext alt':           'Saltu al sekva',
			'wikEdJumpNext title':         'Saltu al sekvanta elektita teksto',
			'wikEdPrevPos alt':            'Saltu reen',
			'wikEdPrevPos title':          'Saltu al antaŭe ŝanĝita pozicio',
			'wikEdLastPos alt':            'Saltu al sekva',
			'wikEdLastPos title':          'Saltu reen al lasta pozicio',
 
// find and replace buttons, bottom row
			'wikEdGetFind alt':            'Aranĝu serĉadon + substituon',
			'wikEdGetFind title':          'Kopiu la markaĵon al serĉujo / substituujo',
			'wikEdClearFind alt':          'Forigu serĉadon',
			'wikEdClearFind title':        'Malplenigu la serĉujon (por serĉi je la elektita teksto)',
 
			'wikEdReplaceAll alt':         'Substituu ĉion',
			'wikEdReplaceAll title':       'Substituu ĉiujn trovitaĵojn en la tuta teksto aŭ la markitaĵo',
			'wikEdReplacePrev alt':        'Substituu antaŭan',
			'wikEdReplacePrev title':      'Substituu antaŭan trovaĵon',
			'wikEdReplaceSelect title':    'Elektu iun antaŭan substituadon',
 
			'wikEdReplaceNext alt':        'Substituu sekvan',
			'wikEdReplaceNext title':      'Substituu sekvan trovaĵon',
			'wikEdCaseSensitive alt':      'Usklsentiva',
			'wikEdCaseSensitive title':    'La serĉado dependas de majusklo kaj minusklo',
			'wikEdRegExp alt':             'RegExp',
			'wikEdRegExp title':           'La serĉujo estas regulara esprimo',
			'wikEdFindAhead alt':          'Serĉu antaŭen',
			'wikEdFindAhead title':        'Serĉu antaŭen dum la tajpado (ne-RegExp-serĉado kaj laŭ majuskloj kaj minuskloj)',
 
// fix buttons, top row
			'wikEdFixBasic alt':           'Korektu bazaĵojn',
			'wikEdFixBasic title':         'Korektu malplenajn liniojn, estas ankaŭ plenumita de aliaj korekt-funkcioj',
			'wikEdFixHtml alt':            'Korektu HTML',
			'wikEdFixHtml title':          'Korektu HTML al Vikikodo',
			'wikEdFixCaps alt':            'Korektu majuskligon',
			'wikEdFixCaps title':          'Korektu majuskligon en superskriboj kaj listoj',
			'wikEdFixUnicode alt':         'Korektu Unikodon',
			'wikEdFixUnicode title':       'Korektu Unikodan signelmontron',
			'wikEdFixAll alt':             'Korektu ĉion',
			'wikEdFixAll title':           'Korektu bazaĵojn, HTML, majuskligon kaj Unikodon',
			'wikEdFixRedirect alt':        'Korektu alidirektilojn',
			'wikEdFixRedirect title':      'Korektu alidirektilojn',
 
// fix buttons, bottom row
			'wikEdFixDashes alt':          'Korektu streketojn',
			'wikEdFixDashes title':        'Korektu streketojn',
			'wikEdFixPunct alt':           'Korektu interpunkciadon',
			'wikEdFixPunct title':         'Korektu spacojn antaŭ interpunkciado',
			'wikEdFixMath alt':            'Korektu matematikaĵojn',
			'wikEdFixMath title':          'Korektu matematikaĵojn',
			'wikEdFixChem alt':            'Korektu ĥemion',
			'wikEdFixChem title':          'Korektu ĥemiajn formulojn',
			'wikEdFixUnits alt':           'Korektu unuojn',
			'wikEdFixUnits title':         'Korektu unuojn',
			'wikEdFixRegExTypo alt':       'Korektu ortografion',
			'wikEdFixRegExTypo title':     'Korektu anglan ortografion laŭ la AutoWikiBrowser RegExTypoFixer-reguloj',
 
// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, ŜABL]',
			'wikEdRefHide title':          'Ŝanĝu [REF] kaj [ŜABL] kaŝadon',
			'wikEdRefButtonTooltip':       'Alklaku por montri kaŝitan referencon',
			'wikEdTemplButtonTooltip':     'Alklaku por montri kaŝitan ŝablonon',
			'wikEdCharEntityButtonTooltip': 'Alklaku por montri kaŝitan karaktron',
			'wikEdRefButtonShowTooltip':   'Alklaku por kaŝi referencon',
			'wikEdTemplButtonShowTooltip': 'Alklaku por kaŝi ŝablonon',
			'wikEdCharEntityButtonShowTooltip': 'Alklaku por kaŝi karaktron',
			'wikEdTextZoom alt':           'Tekstgrandeco',
			'wikEdTextZoom title':         'Cikla tekstgrandeco (Majuskl-klako: inverse)',
			'wikEdClearHistory alt':       'Forviŝu historion',
			'wikEdClearHistory title':     'Forviŝu serĉ- substitu- kaj resum-historiojn',
			'wikEdScrollToInput alt':      'Iru supren',
			'wikEdScrollToInput title':    'Saltu al redaktofenestro',
			'wikEdScrollToButtons alt':    'Rulumbutono',
			'wikEdScrollToButtons title':  'Rulumu al la redaktobutonoj',
			'wikEdScrollToPreview alt':    'Saltu al antaŭrigardo',
			'wikEdScrollToPreview title':  'Saltu al antaŭrigarda fenestro',
			'wikEdScrollToEdit alt':       'Saltu al redaktadujo',
			'wikEdScrollToEdit title':     'Saltu al redaktadujo',
			'wikEdTableMode alt':          'Tabela modo',
			'wikEdTableMode title':        'Ŝanĝu al tabela redaktomodo',
 
// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'Uzu wikEd',
			'wikEdUseWikEd title':         'Ŝanĝu inter klasikan redaktujon kaj wikEd',
			'wikEdHighlightSyntax alt':    'Sintakso',
			'wikEdHighlightSyntax title':  'Ŝanĝu al aŭtomata sintaksevidentigilo',
			'wikEdSource alt':             'Fontteksto',
			'wikEdSource title':           'Montru la fonttekston provcele ',
			'wikEdCloseToolbar title':     'Fermu la standardan ne-wikEd redaktilaron',
			'wikEdCloseToolbar alt':       'Fermu redaktilaron',
			'wikEdUsing alt':              'Per wikEd',
			'wikEdUsing title':            'Aŭtomate provizas \'\'…per wikEd \'\' al la resumo',
			'wikEdDiff alt':               'Ŝanĝoj',
			'wikEdDiff title':             'Montru nunajn ŝanĝojn sube',
			'wikEdFullScreen alt':         'Plenekrane',
			'wikEdFullScreen title':       'Ŝanĝu al plenekrana elmontro',
 
// summary buttons
			'wikEdClearSummary alt':       'Forviŝu resumon',
			'wikEdClearSummary title':     'Forviŝu resumujon',
			'wikEdSummarySelect title':    'Elektu iun antaŭan resumon' ,
			'wikEdPresetSummary': [
				'Reverkita', 'Respondo', 'Artikolo kreita', 'Enkonduko reverkita ',
				'ligilo korektita', 'Ortografia korektita', 'Forigo de ligilo al fireklamo', 'Restarigo',
				'Forigo de vandalaĵo', 'Formatigo de fontteksto', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '… per [[:en:User:Cacycle/wikEd|wikEd]] ',
 
// button title acceskey
			'alt-shift':                   'alt-shift-',
 
// submit buttons
			'wikEdLocalPreviewImg alt':    'Antaŭmontro sube',
			'wikEdLocalPreview title':     'Montru antaŭrigardon sube',
			'wikEdLocalDiffImg alt':       'Ŝanĝoj sube',
			'wikEdLocalDiff title':        'Montru nunajn ŝanĝojn sube',
			'wikEdHelpPageLink':           ' | <a href="{wikEdHomeBaseUrl}wiki/User:Cacycle/wikEd_help" target="helpwindow">helpo de wikEd</a>', // use full link without {wikEdHomeBaseUrl} if the page is not on the English Wikipedia
 
// preview and changes buttons, top
			'wikEdClose alt':              'Fermu',
			'wikEdClose title':            'Fermu antaŭrigardan skatolon',
			'wikEdClose2 alt':             'Fermu',
			'wikEdClose2 title':           'Fermu antaŭrigardan skatolon',
			'wikEdPreview alt':            'Antaŭrigardo',
			'wikEdPreview title':          'Montru antaŭrigardon sube',
			'wikEdScrollToPreview2 alt':   'Saltu al antaŭrigardo',
			'wikEdScrollToPreview2 title': 'Saltu al antaŭrigarda fenestro',
			'wikEdScrollToEdit2 alt':      'Saltu al redaktadujo',
			'wikEdScrollToEdit2 title':    'Saltu al redaktadujo',
			'wikEdScrollToInput2 alt':     'Iru supren',
			'wikEdScrollToInput2 title':   'Saltu al redaktofenestro',
			'wikEdScrollToButtons2 alt':   'Iru al butonoj',
			'wikEdScrollToButtons2 title': 'Saltu al redaktobutonoj',
 
// preview and changes buttons, bottom
			'wikEdPreview2 alt':            'Antaŭrigardo',
			'wikEdPreview2 title':          'Montru antaŭrigardon supre',
			'wikEdDiff2 alt':           	'Ŝanĝoj sube',
			'wikEdDiff2 title':        	    'Montru nunajn ŝanĝojn sube',
			'wikEdScrollToInput3 alt':     	'Iru supren',
			'wikEdScrollToInput3 title':   	'Saltu al redaktofenestro',
			'wikEdScrollToButtons3 alt':   	'Iru al butonoj',
			'wikEdScrollToButton3 title': 	'Saltu al redaktobutonoj',
			'wikEdScrollToPreview3 alt':    'Saltu al antaŭrigardo',
			'wikEdScrollToPreview3 title':  'Saltu al antaŭrigarda fenestro',
			'wikEdScrollToEdit3 alt':       'Saltu al redaktadujo',
			'wikEdScrollToEdit3 title':     'Saltu al redaktadujo',
 
// preview field
			'wikEdPreviewLoading':         '...',
 
// formatting functions
			'image filename':              'Dosiernomo',
			'image width':                 'larĝeco',
			'table caption':               'klarigteskto',
			'table heading':               'titolo',
			'table cell':                  'ĉelo',
			'redirect article link':       'celartikolo',
 
// fixing functions
			'External links':              'Eksteraj ligiloj',
			'See also':                    'Vidu ankaŭ',
			'References':                  'Referencoj',
 
// language specific wiki code
			'wikicode Image':              'Dosiero',
			'wikicode File':               'Dosiero',
			'wikicode Category':           'Kategorio',
			'wikicode Template':           'Ŝablono',
			'wikEdReferencesSection':      '\n== Notoj kaj referencoj ==\n\n<references />\n', 
			'talk page':                   'diskuto',
			'history page':                'historio',
			'talk namespace':              'Diskuto',
			'talk namespace suffix':       '_diskuto',
 
// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'ŜABL',
 
// shortened button texts
			'shortenedPreview':            'Antaŭrigardo',
			'shortenedChanges':            'Nunaj ŝanĝoj',
 
// follow link popup
			'followLink':                  '(Stir-klaku)',
			'followLinkMac':               '(cmd-click)',
 
// error message popups
			'wikEdTableModeError':         'La vikikodo de la tabelo entenas erarojn ',
 
// auto updating
			'wikEdGreasemonkeyAutoUpdate': 'Nova versio gisdatigita de wikEd :\n\nA  de skripto GreaseMonkey por "wikEd" estas havebla.\n\n\nĜi estos alŝutita el :\n\n{updateURL}',
 
// highlighting popups
			'wikEdHyphenDash':             'Norma streketo',
			'wikEdFigureDash':             'Figure dash',
			'wikEdEnDash':                 'Streketo',
			'wikEdEmDash':                 'Haltostreko',
			'wikEdBarDash':                'Horizontala strio',
			'wikEdMinusDash':              'Minus signo',
			'wikEdSoftHyphen':             'Milda streketo',
			'wikEdTab':                    'Tab',
			'wikEdEnSpace':                'Norma spaco',
			'wikEdEmSpace':                'Larĝa spaco',
			'wikEdThinSpace':              'Mallarĝa spaco',
			'wikEdIdeographicSpace':       'Ideografa spaco',
 
// highlighting
			'wikEdSignature3':             'Subskribu nur per uzulnomo',
			'wikEdSignature4':             'Subskribu per uzulnomo kaj dato',
			'wikEdSignature5':             'Subskribu nur per dato',
 
// highlighting errors
			'wikEdErrorHtmlUnknown':       'Neeltenita HTML-markilo',
			'wikEdErrorBoldItalic':        'Nevalida grasa / kursiva',
			'wikEdErrorWrongClose':        'Fermmarkilo ne kongruas',
			'wikEdErrorNoOpen':            'Fermmarkilo sen malferma',
			'wikEdErrorNoHandler':         'Neniu traktilo',
			'wikEdErrorNoClose':           'Malfermmarkilo sen ferma',
			'wikEdErrorNewline':           'Malfermmarkilo fermita de nova linio',
			'wikEdErrorTemplHeading':      'Titoloj en ŝablonoj estas ignorataj',
			'wikEdErrorTemplParam':        'Ŝablono- parametro-markiloj ne kongruas',
			'wikEdErrorTemplParamAmbig':   'Ŝablono- parametro-markiloj estas ambiguaj',
 
// highlighting image preview
			'wikEdFilePreview':            'Bildantaŭvido',
 
// from [[en:User:Cacycle/wikEdDiff.js]]
			'wikEdDiffButtonImg alt':      'wikEdDiff',
			'wikEdDiffButton title':       'Montru plibonigitan antaŭrigardon',
			'wikEdDiffLoading':            '…'		
 
}