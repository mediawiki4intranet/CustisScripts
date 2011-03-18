/*

{{en:User:Cacycle/wikEd_template}}

This is the Arabic translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

هذه ترجمة عربية لتحرّير إمتداد صفحة ويكيميديا '''[[:ar:مستخدم:ترجمان05/wikEd|wikEd]]''' (آخر تحديث لنسخة 0.9.91).
رجاءا شاهد أوامر التّرجمة في: [[:en:User:Cacycle/wikEd international]].

<pre><nowiki> */

// language-specific settings
var wikEdFixPunctArabic = true; // not supported, please request on wikEd discussion page with exact details - Cacycle

var wikEdText = {
// logo
			'wikEdLogo alt':               'ويك-إد',
			'wikEdLogo title':             'ويك-إد {نسخة برنامج ويك-إد} ({wikEdProgramDate}) أنقر للتعطيل',
			'wikEdLogo error alt':         'ويك-إد خطأ',
			'wikEdLogo error title':       'تحميل الخطأ - ويك-إد 
{wikEdProgramVersion} ({wikEdProgramDate}) أنقر للتعطيل',
			'wikEdLogo browser alt':       '(ويك-إد)',
			'wikEdLogo browser title':     'المتصفّح غير مدعوم - ويك-إد {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(ويك-إد)',
			'wikEdLogo incompatible title': 'البرنامج النصي أو الأداة غير متوافقين "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(ويك-إد)',
			'wikEdLogo disabled title':    'معطّل - ويك-إد {نسخة برنامج ويك-إد} ({wikEdProgramDate}) أنقر للتعطيل',

// top jumper
			'wikEdScrollToEdit4 alt':      'حرّك للتحرير',
			'wikEdScrollToEdit4 title':    'حرّك لتحرير الحقل',

// button bar grip titles
			'wikEdGripFormat title':       'أزرارالتهيئة (أنقر للإخفاء أو الإظهار)',
			'wikEdGripCustom1 title':      'أزرار شخصية (أنقر للإخفاء أو الإظهار)',
			'wikEdGripFind title':         'أزرار البحث (أنقر للإخفاء أو الإظهار)',
			'wikEdGripFix title':          'أزرار التّصحيح (أنقر للإخفاء أو الإظهار)',
			'wikEdGripCustom2 title':      'أزرار شخصية (أنقر للإخفاء أو الإظهار)',
			'wikEdGripControl title':      'ويك-إد أزرار التحكّم (أنقر للإخفاء أو الإظهار)',

// formatting buttons, top row
			'wikEdUndo alt':               'إلغاء',
			'wikEdUndo title':             'إلغاء',
			'wikEdRedo alt':               'أعد',
			'wikEdRedo title':             'أعد',
			'wikEdBold alt':               'عريض',
			'wikEdBold title':             'نص عريض',
			'wikEdItalic alt':             'مائل',
			'wikEdItalic title':           'نص مائل',
			'wikEdUnderline alt':          'مسطّر',
			'wikEdUnderline title':        'نص مسطّر',
			'wikEdStrikethrough alt':      'يتوسطه خط',
			'wikEdStrikethrough title':    'نص يتوسطه خط',
			'wikEdNowiki alt':             'لاويكي',
			'wikEdNowiki title':           'لا ويكي نص تشعبي',
			'wikEdSuperscript alt':        'Superscript',
			'wikEdSuperscript title':      'Superscript text',
			'wikEdSubscript alt':          'Subscript',
			'wikEdSubscript title':        'Subscript text',
			'wikEdRef alt':                'مرجع',
			'wikEdRef title':              'النص المرجعي (shift-click: named tag)',
			'wikEdCase alt':               'Case',
			'wikEdCase title':             'التبديل  بين الحرف الصغير، الحرف الكبير أولا، والحرف الكبير',
			'wikEdSort alt':               'ترتيب',
			'wikEdSort title':             'ترتيب الأسطر أبجديا',
			'wikEdRedirect alt':           'تحويل',
			'wikEdRedirect title':         'إنشاء تحويل, مسح كامل النص',
			'wikEdUndoAll alt':            'إلغاء الكل',
			'wikEdUndoAll title':          'إلغاء كل التغييرات',
			'wikEdRedoAll alt':            'أعد الكل',
			'wikEdRedoAll title':          'أعد كل التغييرات',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'رابط',
			'wikEdWikiLink title':         'رابط ويكي',
			'wikEdWebLink alt':            'رابط ويب',
			'wikEdWebLink title':          'رابط ويب خارجي',
			'wikEdHeading alt':            'عنوان',
			'wikEdHeading title':          'زيادة مستويات العنوان (shift-أنقر: decrease)',
			'wikEdBulletList alt':         'قائمة البادئة',
			'wikEdBulletList title':       'زيادة مستوى قائمة البادئة (shift-أنقر: decrease)',
			'wikEdNumberList alt':         'قائمة مرقّمة',
			'wikEdNumberList title':       'زيادة مستوى القائمة المرقّمة (shift-أنقر: decrease)',
			'wikEdIndentList alt':         'Indent list',
			'wikEdIndentList title':       'Increase indention (shift-أنقر: decrease)',
			'wikEdDefinitionList alt':     'Def list',
			'wikEdDefinitionList title':   'قائمة تعريف',
			'wikEdImage alt':              'صورة',
			'wikEdImage title':            'صورة',
			'wikEdTable alt':              'جدول',
			'wikEdTable title':            'جدول',
			'wikEdReferences alt':         'مراجع',
			'wikEdReferences title':       'References location (shift-أنقر: References section)',

// textify buttons
			'wikEdWikify alt':             'Wikify',
			'wikEdWikify title':           'Convert pasted content to wiki code, update highlighting',
			'wikEdTextify alt':            'Textify',
			'wikEdTextify title':          'Convert pasted content to plain text, update highlighting (shift-أنقر: forced highlighting)',

// find and replace buttons, top row
			'wikEdFindAll alt':            'أوجد الكل',
			'wikEdFindAll title':          'أوجد كل النتائج',
			'wikEdFindPrev alt':           'أوجد السابق',
			'wikEdFindPrev title':         'أوجد النتيجة السابقة',
			'wikEdFindSelect title':       'إختر البحث السابق أو أقفز الى  رأس العنوان',
			'wikEdFindNext alt':           'أوجد اللاحق',
			'wikEdFindNext title':         'أوجد النتيجة التالية (shift-أنقر: أحصل على التحديد)',
			'wikEdJumpPrev alt':           'حدّد السابق',
			'wikEdJumpPrev title':         'Find the selected text backwards',
			'wikEdJumpNext alt':           'حدّد اللاحق',
			'wikEdJumpNext title':         'Find the selected text forwards',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'استبدل الكل',
			'wikEdReplaceAll title':       'Replace all matches in whole text or selection',
			'wikEdReplacePrev alt':        'استبدل السابق',
			'wikEdReplacePrev title':      'Replace previous match',
			'wikEdReplaceSelect title':    'Select a previous replacement',
			'wikEdReplaceNext alt':        'Replace next (shift-أنقر: get selection)',
			'wikEdReplaceNext title':      'Replace next match',
			'wikEdCaseSensitive alt':      'Case sensitive',
			'wikEdCaseSensitive title':    'Search is case sensitive',
			'wikEdRegExp alt':             'RegExp',
			'wikEdRegExp title':           'Search field is a regular expression',
			'wikEdFindAhead alt':          'Find ahead',
			'wikEdFindAhead title':        'Find ahead as you type (case-insensitive non-regexp search)',

// fix buttons, top row
			'wikEdFixBasic alt':           'تصحيح اساسي',
			'wikEdFixBasic title':         'صحّح الفراغات والاسطر الفارغة، also done by other fixing functions',
			'wikEdFixHtml alt':            'Fix html',
			'wikEdFixHtml title':          'Fix html to wikicode',
			'wikEdFixCaps alt':            'Fix caps',
			'wikEdFixCaps title':          'Fix caps in headers and lists',
			'wikEdFixUnicode alt':         'Fix Unicode',
			'wikEdFixUnicode title':       'Fix Unicode character representations',
			'wikEdFixAll alt':             'Fix all',
			'wikEdFixAll title':           'Fix basic, html, capitalization, and Unicode',
			'wikEdFixRedirect alt':        'Fix redirects',
			'wikEdFixRedirect title':      'Fix redirects',

// fix buttons, bottom row
			'wikEdFixDashes alt':          'Fix dashes',
			'wikEdFixDashes title':        'Fix dashes',
			'wikEdFixPunct alt':           'Fix punctuation',
			'wikEdFixPunct title':         'Fix spaces before punctuation',
			'wikEdFixMath alt':            'تصحيح رياضيات',
			'wikEdFixMath title':          'تصحيح صيغ رياضية',
			'wikEdFixChem alt':            'تصحيح كيمياء',
			'wikEdFixChem title':          'تصحيح صيغ كيميائية',
			'wikEdFixUnits alt':           'تصحيح وحدات',
			'wikEdFixUnits title':         'تصحيح الوحدات',
			'wikEdFixUnicode alt':         'Fix Unicode',
			'wikEdFixUnicode title':       'Fix Unicode character representations',
			'wikEdFixRegExTypo alt':       'Fix typos',
			'wikEdFixRegExTypo title':     'Fix typos using the AutoWikiBrowser RegExTypoFixer rules',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, TEMPL]',
			'wikEdRefHide title':          'Toggle [REF] and [TEMPL] hiding',
			'wikEdRefButtonTooltip':       'أنقر لعرض مرجع مخفي',
			'wikEdTemplButtonTooltip':     'أنقر لعرض قالب مخفي',
			'wikEdCharEntityButtonTooltip': 'Click to display hidden character entity',
			'wikEdRefButtonShowTooltip':   'أنقر لإخفاء المرجع',
			'wikEdTemplButtonShowTooltip': 'أنقر لإخفاء القالب',
			'wikEdCharEntityButtonShowTooltip': 'Click to hide character entity',
			'wikEdTextZoom alt':           'Text zoom',
			'wikEdTextZoom title':         'Text zoom cycling (shift-click: reverse)',
			'wikEdClearHistory alt':       'Clear history',
			'wikEdClearHistory title':     'Clear the find, replace, and summary history',
			'wikEdScrollToPreview alt':    'Scroll to preview',
			'wikEdScrollToPreview title':  'Scroll to preview field',
			'wikEdScrollToEdit alt':       'Scroll to edit',
			'wikEdScrollToEdit title':     'Scroll to edit field',
			'wikEdTableMode alt':          'Table mode',
			'wikEdTableMode title':        'Toggle table edit mode',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'استخدم wikEd',
			'wikEdUseWikEd title':         'Toggle between classic text area and wikEd',
			'wikEdHighlightSyntax alt':    'Syntax',
			'wikEdHighlightSyntax title':  'Toggle automatic syntax highlighting',
			'wikEdSource alt':             'المصدر',
			'wikEdCloseToolbar title':     'Close the standard non-wikEd toolbar',
			'wikEdCloseToolbar alt':       'Close toolbar',
			'wikEdSource title':           'Show the source code for testing purposes',
			'wikEdUsing alt':              'استخدام',
			'wikEdUsing title':            'Automatically add \'\'…using wikEd\'\' to summaries',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Toggle automatic improved diff view',
			'wikEdFullScreen alt':         'شاشة كاملة',
			'wikEdFullScreen title':       'Toggle the fullscreen mode',

// summary buttons
			'wikEdClearSummary alt':       'مسح الملخص',
			'wikEdClearSummary title':     'مسح حقل الملخص',
			'wikEdSummarySelect title':    'انتق الملخص السابق',
			'wikEdPresetSummary': [
				'/*  */ ', 'copyedit', 'reply', 'article created', 'intro rewrite',
				'linkfix', 'fixing typos', 'removing linkspam', 'reverting test',
				'reverting vandalism', 'formatting source text', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '…using [[en:User:Cacycle/wikEd|wikEd]]',

// button title acceskey
			'alt-shift':                   'alt-shift-',

// submit buttons
			'wikEdLocalPreviewImg alt':    'عرض مسبّق ادناه',
			'wikEdLocalPreview title':     'شاهد العرض المسبّق ادناه',
			'wikEdLocalDiffImg alt':       'تغييرات ادناه',
			'wikEdLocalDiff title':        'شاهد التغييرات الجارية ادناه',
			'wikEdHelpPageLink':           ' | <a href="{wikEdHomeBaseUrl}wiki/User:Cacycle/wikEd_help" target="helpwindow">wikEd help</a>', // use full link without {wikEdHomeBaseUrl} if the page is not on the English Wikipedia

// preview and changes buttons, top
			'wikEdClose alt':              'إغلق',
			'wikEdClose title':            'إغلق الصندوق السابق',
			'wikEdClose2 alt':             'إغلق',
			'wikEdClose2 title':           'إغلق الصندوق السابق',
			'wikEdScrollToPreview2 alt':   'حرّك للعرض المسبق',
			'wikEdScrollToPreview2 title': 'Scroll to preview field',
			'wikEdScrollToEdit2 alt':      'Scroll to edit',
			'wikEdScrollToEdit2 title':    'Scroll to edit field',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'حرّك للعرض المسبق',
			'wikEdScrollToPreview3 title': 'Scroll to preview field',
			'wikEdScrollToEdit3 alt':      'Scroll to edit',
			'wikEdScrollToEdit3 title':    'Scroll to edit field',

// preview field
			'wikEdPreviewLoading':         '...',


// formatting functions
			'image filename':              'اسم الملف',
			'image width':                 'عرض',
			'table caption':               'تسمية',
			'table heading':               'عنوان',
			'table cell':                  'عنصر',
			'redirect article link':       'رابط المقالة',

// fixing functions
			'External links':              'روابط خارجية',
			'See also':                    'شاهد أيضا',
			'References':                  'مراجع',

// language specific wiki code
			'wikicode Image':              'صورة',
			'wikicode File':               'ملف',
			'wikicode Category':           'تصنيف',
			'wikicode Template':           'قالب',
			'wikEdReferencesSection':      '\n== مراجع ==\n\n<references />\n',
			'talk page':                   'talk',
			'history page':                'history',
			'talk namespace':              'Talk',
			'talk namespace suffix':       '_talk',

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'TEMPL',

// shortened button texts
			'shortenedPreview':            'عرض مسبّق',
			'shortenedChanges':            'تغييرات',

// follow link popup
			'followLink':                  '(ctrl-أنقر)',
			'followLinkMac':               '(cmd-أنقر)',

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
			'wikEdFilePreview':            'عرض مسبق للصورة',

// from [[en:User:Cacycle/wikEdDiff.js]]
			'wikEdDiffButtonImg alt':      'wikEdDiff',
			'wikEdDiffButton title':       'شاهد العرض المسبّق المحسّن',
			'wikEdDiffLoading':            '...'
}