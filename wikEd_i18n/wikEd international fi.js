/*

{{en:User:Cacycle/wikEd_template}}

This is the Finnish translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

<pre><nowiki> */

var wikEdText = {

// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Napsauta ottaaksesi pois käytöstä',
			'wikEdLogo error alt':         'wikEd-virhe',
			'wikEdLogo error title':       'Latausvirhe – wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Napsauta hylätäksesi',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'Selain ei ole tuettu – wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
 			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Incompatible script or gadget "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    'Pois käytöstä – wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Napsauta ottaaksesi käyttöön',

// top jumper
			'wikEdScrollToEdit4 alt':      'Vieritys muokkauskenttään',
			'wikEdScrollToEdit4 title':    'Vieritä muokkauskenttään',

// button bar grip titles
			'wikEdGripFormat title':       'Muotoilupainikkeet (napsauta piilottaaksesi tai näyttääksesi)',
			'wikEdGripTextify title':      'Paljaaksi tekstiksi ja wikikoodiksi muuntamiseen tarkoitetut painikkeet (napsauta piilottaaksesi tai näyttääksesi)',
			'wikEdGripCustom1 title':      'Erikoispainikkeet (napsauta piilottaaksesi tai näyttääksesi)',
			'wikEdGripFind title':         'Hakupainikkeet (napsauta piilottaaksesi tai näyttääksesi)',
			'wikEdGripFix title':          'Korjauspainikkeet (napsauta piilottaaksesi tai näyttääksesi)',
			'wikEdGripCustom2 title':      'Erikoispainikkeet (napsauta piilottaaksesi tai näyttääksesi)',
			'wikEdGripControl title':      'wikEdin hallintapainikkeet (napsauta piilottaaksesi tai näyttääksesi)',

// formatting buttons, top row
			'wikEdUndo alt':               'Kumoa',
			'wikEdUndo title':             'Kumoa',
			'wikEdRedo alt':               'Tee uudelleen',
			'wikEdRedo title':             'Tee uudelleen',
			'wikEdBold alt':               'Lihavointi',
			'wikEdBold title':             'Lihavoitu teksti',
			'wikEdItalic alt':             'Kursivointi',
			'wikEdItalic title':           'Kursivoitu teksti',
			'wikEdUnderline alt':          'Alleviivaus',
			'wikEdUnderline title':        'Alleviivattu teksti',
			'wikEdStrikethrough alt':      'Yliviivaus',
			'wikEdStrikethrough title':    'Yliviivattu teksti',
			'wikEdNowiki alt':             'Nowiki',
			'wikEdNowiki title':           'Nowiki-merkintä',
			'wikEdSuperscript alt':        'Yläindeksi',
			'wikEdSuperscript title':      'Yläindeksoitu teksti',
			'wikEdSubscript alt':          'Alaindeksi',
			'wikEdSubscript title':        'Alaindeksoitu teksti',
			'wikEdRef alt':                'Ref',
			'wikEdRef title':              'Tekstin sisäinen viittaus (shift-napsautus: nimetty viite)',
			'wikEdCase alt':               'Aakkoskoko',
			'wikEdCase title':             'Vaihda pienaakkosten, ensimmäinen kirjain isolla -tyylin ja suurakkosten välillä',
			'wikEdSort alt':               'Lajittelu',
			'wikEdSort title':             'Järjestä rivit aakkosjärjestykseen',
			'wikEdRedirect alt':           'Ohjaus',
			'wikEdRedirect title':         'Luo ohjaussivu (poistaa kaiken tekstin)',
			'wikEdUndoAll alt':            'Kumoa kaikki',
			'wikEdUndoAll title':          'Kumoa kaikki muutokset',
			'wikEdRedoAll alt':            'Tee kaikki uudelleen',
			'wikEdRedoAll title':          'Tee kaikki muutokset uudelleen',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'Linkki',
			'wikEdWikiLink title':         'Sisäinen linkki',
			'wikEdWebLink alt':            'Weblinkki',
			'wikEdWebLink title':          'Ulkoinen linkki',
			'wikEdHeading alt':            'Otsikko',
			'wikEdHeading title':          'Kasvata otsikkotasoa (shift-napsautus: alenna)',
			'wikEdBulletList alt':         'Lista',
			'wikEdBulletList title':       'Kasvata listatasoa (shift-napsautus: alenna)',
			'wikEdNumberList alt':         'Numeroitu lista',
			'wikEdNumberList title':       'Kasvata numeroitua listatasoa (shift-napsautus: alenna)',
			'wikEdIndentList alt':         'Sisennetty lista',
			'wikEdIndentList title':       'Kasvata sisennystasoa (shift-napsautus: alenna)',
			'wikEdDefinitionList alt':     'Määritelmälista',
			'wikEdDefinitionList title':   'Määritelmälista',
			'wikEdImage alt':              'Kuva',
			'wikEdImage title':            'Kuva',
			'wikEdTable alt':              'Taulukko',
			'wikEdTable title':            'Taulukko',
			'wikEdReferences alt':         'Viitteet',
			'wikEdReferences title':       'Viitteet (shift-napsautus: Viitteet-osio)',

// textify buttons
			'wikEdWikify alt':             'Muunnos wikikoodiksi',
			'wikEdWikify title':           'Muunna liimattu sisältö wikikoodiksi, päivitä korostukset',
			'wikEdTextify alt':            'Muunnos tekstiksi',
			'wikEdTextify title':          'Muunna liimattu sisältö paljaaksi tekstiksi, päivitä korostukset (shift-napsautus: korosta väkisin)',

// find and replace buttons, top row
			'wikEdFindAll alt':            'Etsi kaikki',
			'wikEdFindAll title':          'Etsi kaikki osumat',
			'wikEdFindPrev alt':           'Etsi edellinen',
			'wikEdFindPrev title':         'Etsi edellinen osuma',
			'wikEdFindSelect title':       'Valitse edellinen haku tai hyppää otsikkoon',
			'wikEdFindNext alt':           'Etsi seuraava',
			'wikEdFindNext title':         'Etsi seuraava osuma (shift-napsautus: käytä valittua tekstiä)',
			'wikEdJumpPrev alt':           'Valittu teksti taaksepäin',
			'wikEdJumpPrev title':         'Etsi valittua tekstiä taaksepäin',
			'wikEdJumpNext alt':           'Valittu teksti',
			'wikEdJumpNext title':         'Etsi valittua tekstiä eteenpäin',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'Korvaa kaikki',
			'wikEdReplaceAll title':       'Korvaa kaikki osumat koko tekstissä tai valitulla alueella',
			'wikEdReplacePrev alt':        'Korvaa edellinen',
			'wikEdReplacePrev title':      'Korvaa edellinen osuma',
			'wikEdReplaceSelect title':    'Valitse edellinen korvaus',
			'wikEdReplaceNext alt':        'Korvaa seuraava (shift-napsautus: käytä valittua tekstiä)',
			'wikEdReplaceNext title':      'Korvaa seuraava osuma',
			'wikEdCaseSensitive alt':      'Merkkikokoriippuvaisuus',
			'wikEdCaseSensitive title':    'Haku on merkkikokoriippuvainen',
			'wikEdRegExp alt':             'RegExp',
			'wikEdRegExp title':           'Hakukenttä on säännöllinen lauseke',
			'wikEdFindAhead alt':          'Etsi eteenpäin',
			'wikEdFindAhead title':        'Etsi eteenpäin kirjoittaessasi (merkkikokoriippumaton ei-regexp-haku)',

// fix buttons, top row
			'wikEdFixBasic alt':           'Perusteiden korjaus',
			'wikEdFixBasic title':         'Korjaa tyhjät kohdat ja rivit (myös muut korjaustoiminnot tekevät tämän)',
			'wikEdFixHtml alt':            'Html:n korjaus',
			'wikEdFixHtml title':          'Korjaa html wikikoodiksi',
			'wikEdFixCaps alt':            'Suuraakkosten korjaus',
			'wikEdFixCaps title':          'Korjaa suuraakkoset otsikoissa ja luetteloissa',
			'wikEdFixUnicode alt':         'Unicoden korjaus',
			'wikEdFixUnicode title':       'Korjaa Unicode-merkkien esitykset',
			'wikEdFixAll alt':             'Kaikkien korjaus kerralla',
			'wikEdFixAll title':           'Korjaa perusteet, html, merkkikoot ja Unicode',
			'wikEdFixRedirect alt':        'Ohjausten korjaus',
			'wikEdFixRedirect title':      'Korjaa ohjaukset',

// fix buttons, bottom row
			'wikEdFixDashes alt':          'Viivamerkkien korjaus',
			'wikEdFixDashes title':        'Korjaa viivamerkit',
			'wikEdFixPunct alt':           'Välimerkityksen korjaus',
			'wikEdFixPunct title':         'Korjaa välimerkkejä edeltävät välilyönnit',
			'wikEdFixMath alt':            'Matematiikan korjaus',
			'wikEdFixMath title':          'Korjaa matemaattiset kaavat',
			'wikEdFixChem alt':            'Kemian korjaus',
			'wikEdFixChem title':          'Korjaa kemialliset kaavat',
			'wikEdFixUnits alt':           'Yksiköiden korjaus',
			'wikEdFixUnits title':         'Korjaa yksiköt',
			'wikEdFixRegExTypo alt':       'Korjaa kirjoitusvirheet',
			'wikEdFixRegExTypo title':     'Korjaa kirjoitusvirheet käyttäen AutoWikiBrowserin RegExTypoFixer-sääntöjä',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[VIITE, MALLINE]',
			'wikEdRefHide title':          'Näytä tai piilota viitteet ja mallineet',
			'wikEdRefButtonTooltip':       'Napsauta näyttääksesi piilotettu viite',
			'wikEdTemplButtonTooltip':     'Napsauta näyttääksesi piilotettu malline',
			'wikEdCharEntityButtonTooltip': 'Napsauta näyttääksesi piilotettu merkkientiteetti',
			'wikEdRefButtonShowTooltip':   'Napsauta piilottaaksesi viite',
			'wikEdTemplButtonShowTooltip': 'Napsauta piilottaaksesi malline',
			'wikEdCharEntityButtonShowTooltip': 'Napsauta piilottaaksesi merkkientiteetti',
			'wikEdTextZoom alt':           'Tekstin zoomaus',
			'wikEdTextZoom title':         'Tekstin zoomaus (shift-napsautus: vastakkaiseen suuntaan)',
			'wikEdClearHistory alt':       'Historian tyhjennys',
			'wikEdClearHistory title':     'Tyhjennä haku-, korvaus- ja yhteenvetohistoria',
			'wikEdScrollToPreview alt':    'Vieritys esikatseluun',
			'wikEdScrollToPreview title':  'Vieritä esikatselukenttään',
			'wikEdScrollToEdit alt':       'Vieritys muokkauskenttään',
			'wikEdScrollToEdit title':     'Vieritä muokkauskenttään',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'Käytä wikEdiä',
			'wikEdUseWikEd title':         'Vaihda perinteisen tekstialueen ja wikEdin välillä',
			'wikEdHighlightSyntax alt':    'Syntaksi',
			'wikEdHighlightSyntax title':  'Ota käyttöön tai pois käytöstä automaattinen syntaksin korostus',
			'wikEdSource alt':             'Lähde',
			'wikEdCloseToolbar title':     'Sulje wikEdin ulkopuolinen standardityökalupalkki',
			'wikEdCloseToolbar alt':       'Sulje työkalupalkki',
			'wikEdSource title':           'Näytä lähdekoodi testaamista varten',
			'wikEdUsing alt':              'Käyttämällä',
			'wikEdUsing title':            'Lisää automaattisesti yhteenvetoihin tekstin \'\'… Muokkaus tehty käyttämällä wikEdiä.\'\'',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Ota käyttöön tai pois käytöstä automaattinen kehittynyt diff-näkymä',
			'wikEdFullScreen alt':         'Kokoruututila',
			'wikEdFullScreen title':       'Ota käyttöön tai pois käytöstä kokoruututila',
			'wikEdTableMode alt':          'Taulukkotila',
			'wikEdTableMode title':        'Ota käyttöön tai pois käytöstä taulukonmuokkaustila',

// summary buttons
			'wikEdClearSummary alt':       'Yhteenvedon tyhjennys',
			'wikEdClearSummary title':     'Tyhjennä yhteenvetokenttä',
			'wikEdSummarySelect title':    'Valitse aiempi yhteenveto',
			'wikEdPresetSummary': [
				'/*  */ ', 'kielenhuoltoa', 'vastaus', 'artikkeli luotu', 'johdanto kirjoitettu uusiksi',
				'linkin korjaus', 'korjattu kirjoitusvirheitä', 'poistettu linkkispammia', 'kumottu testimuokkaus',
				'kumottu vandalismia', 'muotoiltu lähdetekstiä', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '… Muokkaus tehty käyttämällä [[en:User:Cacycle/wikEd|wikEdiä]].',

// button title acceskey
			'alt-shift':                   'alt-shift-',

// submit buttons
			'wikEdLocalPreviewImg alt':    'Esikatselu alla',
			'wikEdLocalPreview title':     'Näytä alla esikatselu',
			'wikEdLocalDiffImg alt':       'Muutokset alla',
			'wikEdLocalDiff title':        'Näytä alla tämän hetkiset muutokset',
			'wikEdHelpPageLink':           ' | <a href="{wikEdHomeBaseUrl}wiki/User:Cacycle/wikEd_help" target="helpwindow">wikEdin ohjesivu</a>', // use full link without {wikEdHomeBaseUrl} if the page is not on the English Wikipedia

// preview and changes buttons, top
			'wikEdClose alt':              'Sulkeminen',
			'wikEdClose title':            'Sulje esikatselulaatikko',
			'wikEdClose2 alt':             'Sulkeminen',
			'wikEdClose2 title':           'Sulje esikatselulaatikko',
			'wikEdScrollToPreview2 alt':   'Vieritys esikatseluun',
			'wikEdScrollToPreview2 title': 'Vieritä esikatselukenttään',
			'wikEdScrollToEdit2 alt':      'Vieritys muokkauskenttään',
			'wikEdScrollToEdit2 title':    'Vieritä muokkauskenttään',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'Vieritys esikatseluun',
			'wikEdScrollToPreview3 title': 'Vieritä esikatselukenttään',
			'wikEdScrollToEdit3 alt':      'Vieritys muokkauskenttään',
			'wikEdScrollToEdit3 title':    'Vieritä muokkauskenttään',

// preview field
			'wikEdPreviewLoading':         '...',

// formatting functions
			'image filename':              'tiedostonimi',
			'image width':                 'leveys',
			'table caption':               'taulukkoteksti',
			'table heading':               'otsikko',
			'table cell':                  'solu',
			'redirect article link':       'linkki artikkeliin',

// fixing functions
			'External links':              'Aiheesta muualla',
			'See also':                    'Katso myös',
			'References':                  'Viitteet',

// language specific wiki code
			'wikicode Image':              'Kuva',
			'wikicode File':               'Tiedosto',
			'wikicode Category':           'Luokka',
			'wikicode Template':           'Malline',
			'wikEdReferencesSection':      '\n== Viitteet ==\n\n<references />\n',
			'talk page':                   'keskustelu',
			'history page':                'history',
			'talk namespace':              'Keskustelu',
			'talk namespace suffix':       '_talk',

// hiding buttons
			'hideRef':                     'VIITE',
			'hideTempl':                   'MALLINE',

// shortened button texts
			'shortenedPreview':            'Esikatselu',
			'shortenedChanges':            'Muutokset',

// follow link popup
			'followLink':                  '(Ctrl-click)',
			'followLinkMac':               '(cmd-click)',

// error message popups
			'wikEdTableModeError':         'Taulukon wikikoodi sisältää virheitä',

// auto updating
			'wikEdGreasemonkeyAutoUpdate': 'wikEd-päivitys:\n\nGreaseMonkey-skriptistä "wikEd" on saatavilla uusi versio.\n\n\nSe ladataan seuraavalta sivulta:\n\n{updateURL}',

// highlighting popups
			'wikEdHyphenDash':             'Tavallinen tavuviiva',
			'wikEdFigureDash':             'Numeroviiva',
			'wikEdEnDash':                 'En-viiva',
			'wikEdEmDash':                 'Em-viiva',
			'wikEdBarDash':                'Vaakasuora viiva',
			'wikEdMinusDash':              'Miinusmerkki',
			'wikEdSoftHyphen':             'Pehmeä tavuviiva',
			'wikEdTab':                    'Tab',
			'wikEdEnSpace':                'En-väli',
			'wikEdEmSpace':                'Em-väli',
			'wikEdThinSpace':              'Ohut välilyönti',
			'wikEdIdeographicSpace':       'Ideografinen välilyönti',

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
			'wikEdDiffButton title':       'Näytä kehittynyt diff-näkymä',
			'wikEdDiffLoading':            '...'

}