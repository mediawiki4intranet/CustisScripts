/*

{{en:User:Cacycle/wikEd_template}}

This is the Malay translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

<pre><nowiki> */

var wikEdText = {
// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Klik untuk menyahaktif',
			'wikEdLogo error alt':         'Ralat wikEd',
			'wikEdLogo error title':       'Ralat muat - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Klik untuk menyahaktif',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'Pelayar web tidak disokong - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Incompatible script or gadget "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    'Tidak aktif - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Klik untuk mengaktif',

// top jumper
			'wikEdScrollToEdit4 alt':      'Tatal ke kotak sunting',
			'wikEdScrollToEdit4 title':    'Tatal ke kotak sunting',

// button bar grip titles
			'wikEdGripFormat title':       'Butang pemformatan (klik untuk menyembunyi atau memuncul)',
			'wikEdGripTextify title':      'Butang penukaran teks biasa dan kod wiki (klik untuk menyembunyi atau memuncul)',
			'wikEdGripCustom1 title':      'Butang tempahan (klik untuk menyembunyi atau memuncul)',
			'wikEdGripFind title':         'Butang cari (klik untuk menyembunyi atau memuncul)',
			'wikEdGripFix title':          'Butang baiki (klik untuk menyembunyi atau memuncul)',
			'wikEdGripCustom2 title':      'Butang tempahan (klik untuk menyembunyi atau memuncul)',
			'wikEdGripControl title':      'Butang kawalan wikEd (klik untuk menyembunyi atau memuncul)',

// formatting buttons, top row
			'wikEdUndo alt':               'Buat asal',
			'wikEdUndo title':             'Buat asal',
			'wikEdRedo alt':               'Buat semula',
			'wikEdRedo title':             'Buat semula',
			'wikEdBold alt':               'Tebal',
			'wikEdBold title':             'Teks tebal',
			'wikEdItalic alt':             'Condong',
			'wikEdItalic title':           'Teks condong',
			'wikEdUnderline alt':          'Bergaris',
			'wikEdUnderline title':        'Teks bergaris',
			'wikEdStrikethrough alt':      'Potong',
			'wikEdStrikethrough title':    'Teks dipotong',
			'wikEdNowiki alt':             'Nowiki',
			'wikEdNowiki title':           'Teks bukan wiki',
			'wikEdSuperscript alt':        'Superskrip',
			'wikEdSuperscript title':      'Teks superskrip',
			'wikEdSubscript alt':          'Subskrip',
			'wikEdSubscript title':        'Teks subskrip',
			'wikEdRef alt':                'Rujukan',
			'wikEdRef title':              'Rujukan selingan (shift+klik: tag bernama)',
			'wikEdCase alt':               'Huruf besar',
			'wikEdCase title':             'Anjak antara huruf kecil dan huruf besar',
			'wikEdSort alt':               'Susun',
			'wikEdSort title':             'Susun mengikut tertib abjad',
			'wikEdRedirect alt':           'Lencong',
			'wikEdRedirect title':         'Padam semua teks dan buat lencongan',
			'wikEdUndoAll alt':            'Buat asal semua',
			'wikEdUndoAll title':          'Buat asal semua perubahan',
			'wikEdRedoAll alt':            'Buat semula semua',
			'wikEdRedoAll title':          'Buat semula semua perubahan',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'Pautan',
			'wikEdWikiLink title':         'Pautan wiki',
			'wikEdWebLink alt':            'Pautan web',
			'wikEdWebLink title':          'Pautan web luar',
			'wikEdHeading alt':            'Tajuk',
			'wikEdHeading title':          'Tajuk (klik: tokok, shift+klik: susut)',
			'wikEdBulletList alt':         'Senarai tak bertertib',
			'wikEdBulletList title':       'Senarai tak bertertib (klik: tokok, shift+klik: susut)',
			'wikEdNumberList alt':         'Senarai bertertib',
			'wikEdNumberList title':       'Senarai bertertib (klik: tokok, shift+klik: susut)',
			'wikEdIndentList alt':         'Inden',
			'wikEdIndentList title':       'Inden (klik: tokok, shift+klik: susut)',
			'wikEdDefinitionList alt':     'Senarai takrif',
			'wikEdDefinitionList title':   'Senarai takrif',
			'wikEdImage alt':              'Imej',
			'wikEdImage title':            'Imej',
			'wikEdTable alt':              'Jadual',
			'wikEdTable title':            'Jadual',
			'wikEdReferences alt':         'Senarai rujukan',
			'wikEdReferences title':       'Senarai rujukan (shift+klik: bahagian rujukan)',

// textify buttons
			'wikEdWikify alt':             'Kod wiki',
			'wikEdWikify title':           'Tukarkan kandungan yang ditampal menjadi kod wiki dan kemas kinikan penonjolan sintaks',
			'wikEdTextify alt':            'Teks biasa',
			'wikEdTextify title':          'Tukarkan kandungan yang ditampal menjadi teks biasa dan kemas kinikan penonjolan sintaks (shift-click: forced highlighting)',

// find and replace buttons, top row
			'wikEdFindAll alt':            'Cari semua',
			'wikEdFindAll title':          'Cari semua padanan',
			'wikEdFindPrev alt':           'Cari ke belakang',
			'wikEdFindPrev title':         'Cari padanan sebelumnya',
			'wikEdFindSelect title':       'Pilih carian sebelumnya atau lompat ke tajuk',
			'wikEdFindNext alt':           'Cari ke depan',
			'wikEdFindNext title':         'Cari padanan berikutnya (shift+klik: pilih)',
			'wikEdJumpPrev alt':           'Cari pilihan ke belakang',
			'wikEdJumpPrev title':         'Cari teks pilihan sebelumnya',
			'wikEdJumpNext alt':           'Cari pilihan ke depan',
			'wikEdJumpNext title':         'Cari teks pilihan berikutnya',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'Ganti semua',
			'wikEdReplaceAll title':       'Ganti semua padanan dalam seluruh teks atau pilihan',
			'wikEdReplacePrev alt':        'Ganti ke belakang',
			'wikEdReplacePrev title':      'Ganti padanan sebelumnya',
			'wikEdReplaceSelect title':    'Pilih penggantian sebelumnya',
			'wikEdReplaceNext alt':        'Ganti ke depan (shift+klik: pilih)',
			'wikEdReplaceNext title':      'Ganti padanan berikutnya',
			'wikEdCaseSensitive alt':      'Peka huruf besar',
			'wikEdCaseSensitive title':    'Cari dengan mengesan huruf besar',
			'wikEdRegExp alt':             'Ungkapan nalar',
			'wikEdRegExp title':           'Cari menggunakan ungkapan nalar',
			'wikEdFindAhead alt':          'Cari selalu',
			'wikEdFindAhead title':        'Cari ketika menaip (peka huruf besar, bukan ungkapan nalar)',

// fix buttons, top row
			'wikEdFixBasic alt':           'Baiki asas',
			'wikEdFixBasic title':         'Baiki baris senggang (juga dilakukan dengan butang lain)',
			'wikEdFixHtml alt':            'Baiki HTML',
			'wikEdFixHtml title':          'Baiki HTML menjadi kod wiki',
			'wikEdFixCaps alt':            'Baiki huruf besar',
			'wikEdFixCaps title':          'Baiki penggunaan huruf besar dalam tajuk dan senarai',
			'wikEdFixUnicode alt':         'Baiki Unicode',
			'wikEdFixUnicode title':       'Baiki perwakilan aksara Unicode',
			'wikEdFixAll alt':             'Baiki semua',
			'wikEdFixAll title':           'Baiki asas, HTML, huruf besar, dan Unicode',
			'wikEdFixRedirect alt':        'Baiki pelencongan',
			'wikEdFixRedirect title':      'Baiki pelencongan',

// fix buttons, bottom row
			'wikEdFixDashes alt':          'Baiki sempang',
			'wikEdFixDashes title':        'Baiki tanda sempang',
			'wikEdFixPunct alt':           'Baiki tanda baca',
			'wikEdFixPunct title':         'Baiki jarak sebelum tanda baca',
			'wikEdFixMath alt':            'Baiki matematik',
			'wikEdFixMath title':          'Baiki matematik',
			'wikEdFixChem alt':            'Baiki kimia',
			'wikEdFixChem title':          'Baiki formula kimia',
			'wikEdFixUnits alt':           'Baiki unit',
			'wikEdFixUnits title':         'Baiki unit ukuran',
			'wikEdFixRegExTypo alt':       'Baiki ejaan',
			'wikEdFixRegExTypo title':     'Baiki ejaan mengikut peraturan-peraturan AutoWikiBrowser RegExTypoFixer',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, TEMPL]',
			'wikEdRefHide title':          'Toggle [REF] and [TEMPL] hiding',
			'wikEdRefButtonTooltip':       'Click to display hidden reference',
			'wikEdTemplButtonTooltip':     'Click to display hidden template',
			'wikEdCharEntityButtonTooltip': 'Click to display hidden character entity',
			'wikEdRefButtonShowTooltip':   'Click to hide reference',
			'wikEdTemplButtonShowTooltip': 'Click to hide template',
			'wikEdCharEntityButtonShowTooltip': 'Click to hide character entity',
			'wikEdTextZoom alt':           'Zum teks',
			'wikEdTextZoom title':         'Kitar zum teks (shift+klik: arah terbalik)',
			'wikEdClearHistory alt':       'Padam sejarah',
			'wikEdClearHistory title':     'Padam sejarah cari, ganti, dan ringkasan',
			'wikEdScrollToPreview alt':    'Tatal ke kotak pralihat',
			'wikEdScrollToPreview title':  'Tatal ke kotak pralihat',
			'wikEdScrollToEdit alt':       'Tatal ke kotak sunting',
			'wikEdScrollToEdit title':     'Tatal ke kotak sunting',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'Guna wikEd',
			'wikEdUseWikEd title':         'Anjak antara penggunakan ruangan teks biasa dan wikEd',
			'wikEdHighlightSyntax alt':    'Sintaks',
			'wikEdHighlightSyntax title':  'Penonjolan sintaks automatik',
			'wikEdTableMode alt':          'Mod jadual',
			'wikEdTableMode title':        'Mod jadual',
			'wikEdSource alt':             'Sumber',
			'wikEdCloseToolbar title':     'Tutup bar alatan standard',
			'wikEdCloseToolbar alt':       'Tutup bar alatan',
			'wikEdSource title':           'Kod sumber',
			'wikEdUsing alt':              'Menggunakan wikEd',
			'wikEdUsing title':            'Tambah \'\'…menggunakan wikEd\'\' dalam ringkasan',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Perbezaan maju automatik',
			'wikEdFullScreen alt':         'Skrin penuh',
			'wikEdFullScreen title':       'Skrin penuh',

// summary buttons
			'wikEdClearSummary alt':       'Padam ringkasan',
			'wikEdClearSummary title':     'Padam ruangan ringkasan',
			'wikEdSummarySelect title':    'Pilih ringkasan sebelumnya',
			'wikEdPresetSummary':          ['/*  */ ', 'baiki ejaan', 'baiki pautan', 'baiki pengenalan', 'batal suntingan ujian', 'batal vandalisme', 'buang spam', 'cipta', 'jawapan', 'kemas kini', '{wikEdUsing}'],
			'wikEdSummaryUsing':           '…menggunakan [[en:User:Cacycle/wikEd|wikEd]]',

// button title acceskey
			'alt-shift':                   'alt-shift-',

// submit buttons
			'wikEdLocalPreviewImg alt':    'Pralihat di bawah',
			'wikEdLocalPreview title':     'Pralihat di bawah',
			'wikEdLocalDiffImg alt':       'Perubahan di bawah',
			'wikEdLocalDiff title':        'Papar perubahan di bawah',
			'wikEdHelpPageLink':           ' | <a href="{wikEdHomeBaseUrl}wiki/User:Cacycle/wikEd_help" target="helpwindow">bantuan wikEd</a>', // use full link without {wikEdHomeBaseUrl} if the page is not on the English Wikipedia

// preview and changes buttons, top
			'wikEdClose alt':              'Tutup',
			'wikEdClose title':            'Tutup kotak pralihat',
			'wikEdClose2 alt':             'Tutup',
			'wikEdClose2 title':           'Tutup kotak pralihat',
			'wikEdScrollToPreview2 alt':   'Tatal ke kotak pralihat',
			'wikEdScrollToPreview2 title': 'Tatal ke kotak pralihat',
			'wikEdScrollToEdit2 alt':      'Tatal ke kotak sunting',
			'wikEdScrollToEdit2 title':    'Tatal ke kotak sunting',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'Tatal ke kotak pralihat',
			'wikEdScrollToPreview3 title': 'Tatal ke kotak pralihat',
			'wikEdScrollToEdit3 alt':      'Tatal ke kotak sunting',
			'wikEdScrollToEdit3 title':    'Tatal ke kotak sunting',

// preview field
			'wikEdPreviewLoading':         '...',

// formatting functions
			'image filename':              'nama fail',
			'image width':                 'lebar',
			'table caption':               'sari kata',
			'table heading':               'tajuk',
			'table cell':                  'sel',
			'redirect article link':       'pautan rencana',

// fixing functions
			'External links':              'Pautan luar',
			'See also':                    'Lihat juga',
			'References':                  'Rujukan',

// language specific wiki code
			'wikicode Image':              'Imej',
			'wikicode File':               'Fail',
			'wikicode Category':           'Kategori',
			'wikicode Template':           'Templat',
			'wikEdReferencesSection':      '\n== Rujukan ==\n\n<references />\n',
			'talk page':                   'talk',
			'history page':                'history',
			'talk namespace':              'Talk',
			'talk namespace suffix':       '_talk',

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'TEMPL',

// shortened button texts
			'shortenedPreview':            'Pralihat',
			'shortenedChanges':            'Perubahan',

// follow link popup
			'followLink':                  '(ctrl+klik)',
			'followLinkMac':               '(cmd-click)',

// error message popups
			'wikEdTableModeError':         'Kod wiki untuk jadual tersebut mengandungi ralat',

// auto updating
			'wikEdGreasemonkeyAutoUpdate': 'Kemas Kini wikEd:\n\nSebuah versi baru bagi skrip GreaseMonkey "wikEd" sudah ada.\n\n\nSkrip ini akan dimuat turun dari:\n\n{updateURL}',

// highlighting popups
			'wikEdHyphenDash':             'Sempang standard',
			'wikEdFigureDash':             'Sempang angka',
			'wikEdEnDash':                 'Sempang en',
			'wikEdEmDash':                 'Sempang em',
			'wikEdBarDash':                'Bar mengufuk',
			'wikEdMinusDash':              'Tanda tolak',
			'wikEdSoftHyphen':             'Sempang lembut',
			'wikEdTab':                    'Tab',
			'wikEdEnSpace':                'Jarak en',
			'wikEdEmSpace':                'Jarak em',
			'wikEdThinSpace':              'Jarak halus',
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
			'wikEdDiffButton title':       'Papar perbezaan maju',
			'wikEdDiffLoading':            '...'

}