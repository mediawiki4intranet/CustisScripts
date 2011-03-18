/*

{{en:User:Cacycle/wikEd_template}}

This is a Turkish translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

<pre><nowiki> */

var wikEdText = {

// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Devre dışı bırakmak için tıklayın',
			'wikEdLogo error alt':         'wikEd hatası',
			'wikEdLogo error title':       'Yükleme hatası - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Devre dışı bırakmak için tıklayın',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'Tarayıcı desteklenmiyor - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Incompatible script or gadget "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    'Devre dışı - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Etkinleştirmek için tıklayın',

// top jumper
			'wikEdScrollToEdit4 alt':      'Düzenlemek için aşağıya inin',
			'wikEdScrollToEdit4 title':    'Alanı düzenlemek için aşağıya inin',

// button bar grip titles
			'wikEdGripFormat title':       'Biçimleme düğmeleri (gizlemek ya da göstermek için tıklayın)',
			'wikEdGripTextify title':      'Metinleştirme ve vikileştirme düğmeleri (gizlemek ya da göstermek için tıklayın)',
			'wikEdGripCustom1 title':      'Özel düğmeler (gizlemek ya da göstermek için tıklayın)',
			'wikEdGripFind title':         'Düğmeleri bul (gizlemek ya da göstermek için tıklayın)',
			'wikEdGripFix title':          'Onarma düğmeleri (gizlemek ya da göstermek için tıklayın)',
			'wikEdGripCustom2 title':      'Özel düğmeler (gizlemek ya da göstermek için tıklayın)',
			'wikEdGripControl title':      'wikEd kontrol düğmeleri (gizlemek ya da göstermek için tıklayın)',

// formatting buttons, top row
			'wikEdUndo alt':               'Geri al',
			'wikEdUndo title':             'Geri al',
			'wikEdRedo alt':               'Yinele',
			'wikEdRedo title':             'Yinele',
			'wikEdBold alt':               'Kalın',
			'wikEdBold title':             'Kalın metin',
			'wikEdItalic alt':             'İtalik',
			'wikEdItalic title':           'İtalik metin',
			'wikEdUnderline alt':          'Alti çizili',
			'wikEdUnderline title':        'Altı çizili metin',
			'wikEdStrikethrough alt':      'Üstü çizili',
			'wikEdStrikethrough title':    'Üstü çizili metin',
			'wikEdNowiki alt':             'Nowiki',
			'wikEdNowiki title':           'Viki dili devre dışı',
			'wikEdSuperscript alt':        'Üslü',
			'wikEdSuperscript title':      'Üslü metin',
			'wikEdSubscript alt':          'Taban',
			'wikEdSubscript title':        'Taban metni',
			'wikEdRef alt':                'Ref',
			'wikEdRef title':              'Metin içi referans (Shift ile tıklama: isimli etiket)',
			'wikEdCase alt':               'B/K',
			'wikEdCase title':             'Tamamı küçük, ilk harfi büyük, tamamı büyük harfli yazım arasında geçiş',
			'wikEdSort alt':               'Sırala',
			'wikEdSort title':             'Satırları alfabetik olarak sırala',
			'wikEdRedirect alt':           'Yönlendirme',
			'wikEdRedirect title':         'Yönlendirme yarat ve tüm metni sil',
			'wikEdUndoAll alt':            'Hepsini geri al',
			'wikEdUndoAll title':          'Değişikliklerin tamamını geri al',
			'wikEdRedoAll alt':            'Hepsini yinele',
			'wikEdRedoAll title':          'Değişikliklerin tamamını yinele',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'Bağlantı',
			'wikEdWikiLink title':         'Viki bağlantısı',
			'wikEdWebLink alt':            'Weblink',
			'wikEdWebLink title':          'Harici web bağlantısı',
			'wikEdHeading alt':            'Başlık',
			'wikEdHeading title':          'Başlık seviyelerini yükselt (Shift ile tıklama: düşür)',
			'wikEdBulletList alt':         'Madde listesi',
			'wikEdBulletList title':       'Maddeli liste seviyesini yükselt (Shift ile tıklama: düşür)',
			'wikEdNumberList alt':         'Numaralı liste',
			'wikEdNumberList title':       'Numaralı liste seviyesini yükselt (Shift ile tıklama: düşür)',
			'wikEdIndentList alt':         'Paragraflı liste',
			'wikEdIndentList title':       'Çıkıntı derecesini yükselt (Shift ile tıklama: düşür)',
			'wikEdDefinitionList alt':     'Tanım listesi',
			'wikEdDefinitionList title':   'Tanım listesi',
			'wikEdImage alt':              'Dosya',
			'wikEdImage title':            'Dosya',
			'wikEdTable alt':              'Tablo',
			'wikEdTable title':            'Tablo',
			'wikEdReferences alt':         'Referanslar',
			'wikEdReferences title':       'Referansların konumu (Shift ile tıklama: Referanslar başlığı)',

// textify buttons
			'wikEdWikify alt':             'Vikileştirme',
			'wikEdWikify title':           'Yapıştırılan içeriği viki koduna dönüştür, vurgulamayı güncelle',
			'wikEdTextify alt':            'Metinleştirme',
			'wikEdTextify title':          'Yapıştırılan içeriği düz metne dönüştür, vurgulamayı güncelle (shift-click: forced highlighting)',

// find and replace buttons, top row
			'wikEdFindAll alt':            'Tümünü bul',
			'wikEdFindAll title':          'Tüm eşleşmeleri bul',
			'wikEdFindPrev alt':           'Öncekini bul',
			'wikEdFindPrev title':         'Önceki eşleşmeyi bul',
			'wikEdFindSelect title':       'Önceki bir aramayı seç ya da bir başlığa atla',
			'wikEdFindNext alt':           'Sonrakini bul',
			'wikEdFindNext title':         'Sonraki eşleşmeyi bul (Shift ile tıklama: seçimi al)',
			'wikEdJumpPrev alt':           'Önceki seçilen',
			'wikEdJumpPrev title':         'Seçilen metni yukarıya doğru bul',
			'wikEdJumpNext alt':           'Sonraki seçilen',
			'wikEdJumpNext title':         'Seçilen metni aşağıya doğru bul',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'Tümünü değiştir',
			'wikEdReplaceAll title':       'Metnin tamamında ya da seçilen bölgedeki tüm eşleşmeleri değiştir',
			'wikEdReplacePrev alt':        'Öncekini değiştir',
			'wikEdReplacePrev title':      'Önceki eşleşmeyi değiştir',
			'wikEdReplaceSelect title':    'Önceki bir değişimi seç',
			'wikEdReplaceNext alt':        'Sonrakini değiştir (Shift ile tıklama: seçimi al)',
			'wikEdReplaceNext title':      'Sonraki eşleşmeyi değiştir',
			'wikEdCaseSensitive alt':      'Büyük/küçük',
			'wikEdCaseSensitive title':    'Arama büyük/küçük harfe duyarlı',
			'wikEdRegExp alt':             'RegExp',
			'wikEdRegExp title':           'Arama alanı kurallı bir ifade',
			'wikEdFindAhead alt':          'Yazdıkça bul',
			'wikEdFindAhead title':        'Yazdıkça sonrakini bul (büyük/küçük harfe duyarlı olmayan kuralsız ifadeli arama)',

// fix buttons, top row
			'wikEdFixBasic alt':           'Temel düzelt',
			'wikEdFixBasic title':         'Boşluk ve boş satırları düzelt, diğer düzeltme fonksiyonları ile de yapılır',
			'wikEdFixHtml alt':            'Html düzelt',
			'wikEdFixHtml title':          'Html\'yi viki kodu ile değiştir',
			'wikEdFixCaps alt':            'Büyük harf düzelt',
			'wikEdFixCaps title':          'Başlık ve listelerdeki büyük harfleri düzelt',
			'wikEdFixUnicode alt':         'Unicode düzelt',
			'wikEdFixUnicode title':       'Unicode karakter gösterimlerini düzelt',
			'wikEdFixAll alt':             'Tümünü düzelt',
			'wikEdFixAll title':           'Temel, Html, büyük harf ve Unicode düzeltmelerinin tümünü gerçekleştir',
			'wikEdFixRedirect alt':        'Yönlendirme düzelt',
			'wikEdFixRedirect title':      'Yönlendirmeleri düzelt',

// fix buttons, bottom row
			'wikEdFixDashes alt':          'Tire düzelt',
			'wikEdFixDashes title':        'Tireleri düzelt',
			'wikEdFixPunct alt':           'Noktalama düzelt',
			'wikEdFixPunct title':         'Noktalama işaretlerinden önceki boşluk sorununu düzelt',
			'wikEdFixMath alt':            'Matematik düzelt',
			'wikEdFixMath title':          'Matematik kodlarını düzelt',
			'wikEdFixChem alt':            'Kimya düzelt',
			'wikEdFixChem title':          'Kimya formüllerini düzelt',
			'wikEdFixUnits alt':           'Birim düzelt',
			'wikEdFixUnits title':         'Birimleri düzelt',
			'wikEdFixRegExTypo alt':       'Yazhat düzelt',
			'wikEdFixRegExTypo title':     'AutoWikiBrowser RegExTypoFixer kurallarını kullanarak yazım hatalarını düzelt',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, TEMPL]',
			'wikEdRefHide title':          'Toggle [REF] and [TEMPL] hiding',
			'wikEdRefButtonTooltip':       'Click to display hidden reference',
			'wikEdTemplButtonTooltip':     'Click to display hidden template',
			'wikEdCharEntityButtonTooltip': 'Click to display hidden character entity',
			'wikEdRefButtonShowTooltip':   'Click to hide reference',
			'wikEdTemplButtonShowTooltip': 'Click to hide template',
			'wikEdCharEntityButtonShowTooltip': 'Click to hide character entity',
			'wikEdTextZoom alt':           'Yakınlaştır/uzaklaştır',
			'wikEdTextZoom title':         'Metni uzaklaştır (Shift ile tıklama: yakınlaştır)',
			'wikEdClearHistory alt':       'Geçmişi temizle',
			'wikEdClearHistory title':     'Bul, değiştir ve özet geçmişini temizle',
			'wikEdScrollToPreview alt':    'Ön izleme alanına git',
			'wikEdScrollToPreview title':  'Ön izleme alanına git',
			'wikEdScrollToEdit alt':       'Düzenleme alanına git',
			'wikEdScrollToEdit title':     'Düzenleme alanına git',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'wikEd kullan',
			'wikEdUseWikEd title':         'Klasik metin alanı ve wikEd arasında geçiş yap',
			'wikEdHighlightSyntax alt':    'Sözdizimi',
			'wikEdHighlightSyntax title':  'Otomatik sözdizimi vurgulamasını değiştir',
			'wikEdSource alt':             'Kaynak',
			'wikEdCloseToolbar title':     'Standart wikEd dışı araç çubuğunu kapat',
			'wikEdCloseToolbar alt':       'Araç çubuğunu kapat',
			'wikEdSource title':           'Test amacıyla kaynak kodu göster',
			'wikEdUsing alt':              'Özet',
			'wikEdUsing title':            'Özetlere otomatik olarak \'\'wikEd\'\' ibaresini ekle',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Otomatik gelişmiş fark görünümünü aç/kapa',
			'wikEdFullScreen alt':         'Tam ekran',
			'wikEdFullScreen title':       'Tam ekran modunu aç/kapa',
			'wikEdTableMode alt':          'Tablo modu',
			'wikEdTableMode title':        'Tablo düzenleme modunu aç/kapa',

// summary buttons
			'wikEdClearSummary alt':       'Özeti temizle',
			'wikEdClearSummary title':     'Özet alanını temizle',
			'wikEdSummarySelect title':    'Önceki bir özeti seç',
			'wikEdPresetSummary': [
				'/*  */ ', 'tashih', 'cevap', 'yeni madde', 'giriş yeniden yazıldı',
				'bağlantı düzeltildi', 'yazım hataları düzeltildi', 'reklam bağlantı çıkarıldı', 'test geri alındı',
				'vandalizm geri alındı', 'kaynak metin biçimlendirildi', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '[[VP:WIKED|wikEd]] ile düzenlendi.',

// button title acceskey
			'alt-shift':                   'alt-shift-',

// submit buttons
			'wikEdLocalPreviewImg alt':    'Aşağıda ön izle',
			'wikEdLocalPreview title':     'Ön izlemeyi aşağıda göster',
			'wikEdLocalDiffImg alt':       'Aşağıda değişiklik',
			'wikEdLocalDiff title':        'Son değişiklikleri aşağıda göster',
			'wikEdHelpPageLink':           ' | <a href="http://tr.wikipedia.org/wiki/Vikipedi:Araçlar/wikEd/Yardım" target="helpwindow">wikEd yardımı</a>',

// preview and changes buttons, top
			'wikEdClose alt':              'Kapat',
			'wikEdClose title':            'Ön izleme kutusunu kapat',
			'wikEdClose2 alt':             'Kapat',
			'wikEdClose2 title':           'Ön izleme kutusunu kapat',
			'wikEdScrollToPreview2 alt':   'Ön izlemeye git',
			'wikEdScrollToPreview2 title': 'Ön izleme alanına git',
			'wikEdScrollToEdit2 alt':      'Düzenlemeye git',
			'wikEdScrollToEdit2 title':    'Düzenleme alanına git',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'Ön izlemeye git',
			'wikEdScrollToPreview3 title': 'Ön izleme alanına git',
			'wikEdScrollToEdit3 alt':      'Düzenlemeye git',
			'wikEdScrollToEdit3 title':    'Düzenleme alanına git',

// preview field
			'wikEdPreviewLoading':         '...',

// formatting functions
			'image filename':              'dosya adı',
			'image width':                 'genişlik',
			'table caption':               'altyazı',
			'table heading':               'başlık',
			'table cell':                  'hücre',
			'redirect article link':       'madde bağlantısı',

// fixing functions
			'External links':              'Dış bağlantılar',
			'See also':                    'Ayrıca bkz',
			'References':                  'Kaynakça',

// language specific wiki code
			'wikicode Image':              'Resim',
			'wikicode File':               'Dosya',
			'wikicode Category':           'Kategori',
			'wikicode Template':           'Şablon',
			'wikEdReferencesSection':      '\n== Kaynakça ==\n\n<references />\n',
			'talk page':                   'talk',
			'history page':                'history',
			'talk namespace':              'Talk',
			'talk namespace suffix':       '_talk',

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'TEMPL',

// shortened button texts
			'shortenedPreview':            'Ön izleme',
			'shortenedChanges':            'Değişiklikler',

// follow link popup
			'followLink':                  '(Ctrl-tıkla)',
			'followLinkMac':               '(cmd-click)',

// error message popups
			'wikEdTableModeError':         'Tablo viki kodu hata içeriyor',

// auto updating
			'wikEdGreasemonkeyAutoUpdate': 'wikEd Güncellemesi:\n\nGreaseMonkey betiği "wikEd"\'in yeni bir sürümü kullanıma hazır.\n\n\nŞu kaynaktan indirilecek:\n\n{updateURL}',

// highlighting popups
			'wikEdHyphenDash':             'Standart kısa çizgi',
			'wikEdFigureDash':             'Kısa tire',
			'wikEdEnDash':                 'Orta tire',
			'wikEdEmDash':                 'Uzun tire',
			'wikEdBarDash':                'Yatay çubuk',
			'wikEdMinusDash':              'Eksi işareti',
			'wikEdSoftHyphen':             'Hece ayırma çizgisi',
			'wikEdTab':                    'Sekme',
			'wikEdEnSpace':                'Kısa boşluk',
			'wikEdEmSpace':                'Uzun boşluk',
			'wikEdThinSpace':              'İnce boşluk',
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
			'wikEdDiffButton title':       'Gelişmiş fark görünümünü göster',
			'wikEdDiffLoading':            '...'

}