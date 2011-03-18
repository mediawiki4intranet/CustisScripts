/*
 
{{en:User:Cacycle/wikEd_template}}
 
This is the Hebrew translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].
 
<pre><nowiki> */
 
var wikEdText = {
 
// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) לחץ כדי לכבות',
			'wikEdLogo error alt':         'wikEd תקלת',
			'wikEdLogo error title':       'תקלת טעינה - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) לחץ כדי לכבות',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'דפדפן לא נתמך - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Incompatible script or gadget "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    'מכובה - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) לחץ כדי להפעיל',
 
// top jumper
			'wikEdScrollToEdit4 alt':      'גלול לעריכה',
			'wikEdScrollToEdit4 title':    'גלול לשדה העריכה',
 
// button bar grip titles
			'wikEdGripFormat title':       'כפתורי עיצוב (לחץ כדי להסתיר או להראות)',
			'wikEdGripTextify title':      'Textify and wikify buttons (click to hide or show)',
			'wikEdGripCustom1 title':      'כפתורים אישיים (לחץ כדי להסתיר או להראות)',
			'wikEdGripFind title':         'כפתורי חיפוש (לחץ כדי להסתיר או להראות)',
			'wikEdGripFix title':          'כפתורי תיקון (לחץ כדי להסתיר או להראות)',
			'wikEdGripCustom2 title':      'כפתורים אישיים (לחץ כדי להסתיר או להראות)',
			'wikEdGripControl title':      'כפתורי שליטה (לחץ כדי להסתיר או להראות)',
 
// formatting buttons, top row
			'wikEdUndo alt':               'בטל',
			'wikEdUndo title':             'בטל',
			'wikEdRedo alt':               'חזור',
			'wikEdRedo title':             'חזור',
			'wikEdBold alt':               'הדגש',
			'wikEdBold title':             'הדגשת טקסט',
			'wikEdItalic alt':             'הטה',
			'wikEdItalic title':           'הטיית טקסט',
			'wikEdUnderline alt':          'קו תחתי',
			'wikEdUnderline title':        'העבר קו תחתי',
			'wikEdStrikethrough alt':      'קו חוצה',
			'wikEdStrikethrough title':    'העבר קו חוצה',
			'wikEdNowiki alt':             'Nowiki',
			'wikEdNowiki title':           'טקסט לא מעוצב (התעלם מסימני ויקי)',
			'wikEdSuperscript alt':        'עילי',
			'wikEdSuperscript title':      'טקסט עילי',
			'wikEdSubscript alt':          'תחתי',
			'wikEdSubscript title':        'טקסט תחתי',
			'wikEdRef alt':                'הערה',
			'wikEdRef title':              'הערות שוליים (shift-click: named tag)',
			'wikEdCase alt':               'רשיות',
			'wikEdCase title':             'העבר בין אותיות קטנות, גדולות וגדולות בתחילת מילה',
			'wikEdSort alt':               'מיין',
			'wikEdSort title':             'מיין שורות לפי האלף-בית',
			'wikEdRedirect alt':           'הפנייה',
			'wikEdRedirect title':         'צור הפנייה ומחק את כל הטקסט',
			'wikEdUndoAll alt':            'בטל הכל',
			'wikEdUndoAll title':          'בטל את כל השינויים',
			'wikEdRedoAll alt':            'חזור על הכל',
			'wikEdRedoAll title':          'חזור על כל השינויים',
 
// formatting buttons, bottom row
			'wikEdWikiLink alt':           'קישור',
			'wikEdWikiLink title':         'קישור פנימי',
			'wikEdWebLink alt':            'קישור חיצוני',
			'wikEdWebLink title':          'קישור חיצוני',
			'wikEdHeading alt':            'כותרת',
			'wikEdHeading title':          'העלה רמת כותרת (shift-click: הורד)',
			'wikEdBulletList alt':         'רשימה תבליטית',
			'wikEdBulletList title':       'העלה רמת רשימה תבליטית (shift-click: הורד)',
			'wikEdNumberList alt':         'רשימה ממוספרת',
			'wikEdNumberList title':       'העלה רמת רשימה ממוספרת (shift-click: הורד)',
			'wikEdIndentList alt':         'הזח רשימה',
			'wikEdIndentList title':       'הגדל הזחה (shift-click: הקטן)',
			'wikEdDefinitionList alt':     'רשימת הגדרות',
			'wikEdDefinitionList title':   'רשימת הגדרות',
			'wikEdImage alt':              'תמונה',
			'wikEdImage title':            'תמונה',
			'wikEdTable alt':              'טבלה',
			'wikEdTable title':            'טבלה',
			'wikEdReferences alt':         'הערות שוליים',
			'wikEdReferences title':       'מיקום הערות שוליים (shift-click: פסקת הערות שוליים)',

// textify buttons
			'wikEdWikify alt':             'Wikify',
			'wikEdWikify title':           'המר תוכן מודבק לוויקי-קוד, עדכן הארות',
			'wikEdTextify alt':            'Textify',
			'wikEdTextify title':          'המר תוכן מודבק לטקסט פשוט, עדכן הארות (shift-click: forced highlighting)',
 
// find and replace buttons, top row
			'wikEdFindAll alt':            'מצא הכל',
			'wikEdFindAll title':          'מצא את כל ההתאמות',
			'wikEdFindPrev alt':           'מצא את הקודם',
			'wikEdFindPrev title':         'מצא את ההתאמה הקודמת',
			'wikEdFindSelect title':       'בחר את החיפוש הקודם או קפוץ לכותרת',
			'wikEdFindNext alt':           'מצא את הבא',
			'wikEdFindNext title':         'מצא את ההתאמה הבאה (shift-click: בחר אותה)',
			'wikEdJumpPrev alt':           'Selected prev',
			'wikEdJumpPrev title':         'Find the selected text backwards',
			'wikEdJumpNext alt':           'Selected next',
			'wikEdJumpNext title':         'Find the selected text forwards',
 
// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'החלף הכל',
			'wikEdReplaceAll title':       'החלף את כל ההתאמות בטקסט או בבחירה',
			'wikEdReplacePrev alt':        'החלף את הקודם',
			'wikEdReplacePrev title':      'החלף את ההתאמה הקודמת',
			'wikEdReplaceSelect title':    'בחר את ההחלפה הקודמת',
			'wikEdReplaceNext alt':        'החלף את הבא (shift-click: בחר)',
			'wikEdReplaceNext title':      'החלף את ההתאמה הבאה',
			'wikEdCaseSensitive alt':      'תלוי רשיות',
			'wikEdCaseSensitive title':    'החיפוש הוא תלוי רשיות',
			'wikEdRegExp alt':             'RegExp',
			'wikEdRegExp title':           'שדה החיפוש הוא ברגקס',
			'wikEdFindAhead alt':          'Find ahead',
			'wikEdFindAhead title':        'Find ahead as you type (case-insensitive non-regexp search)',
 
// fix buttons, top row
			'wikEdFixBasic alt':           'תיקון בסיסי',
			'wikEdFixBasic title':         'תקן שורות ריקות, מבוצע על ידי תיקונים אחרים',
			'wikEdFixHtml alt':            'תקן HTML',
			'wikEdFixHtml title':          'תקן HTML לוויקיקוד',
			'wikEdFixCaps alt':            'תקן רשיות',
			'wikEdFixCaps title':          'תקן רשיות בכותרות וברשימות',
			'wikEdFixUnicode alt':         'תקן יוניקוד',
			'wikEdFixUnicode title':       'תקן ישויות יוניקוד',
			'wikEdFixAll alt':             'תקן הכל',
			'wikEdFixAll title':           'תקן בסיסי, רשיות ויוניקוד',
			'wikEdFixRedirect alt':        'תקן הפניות',
			'wikEdFixRedirect title':      'תקן הפניות',
 
// fix buttons, bottom row
			'wikEdFixDashes alt':          'Fix dashes',
			'wikEdFixDashes title':        'Fix dashes',
			'wikEdFixPunct alt':           'תקן פיסוק',
			'wikEdFixPunct title':         'תקן רווחים לפני פיסוק',
			'wikEdFixMath alt':            'תקן מתמטיקה',
			'wikEdFixMath title':          'תקן מתמטיקה',
			'wikEdFixChem alt':            'תקן כימיה',
			'wikEdFixChem title':          'תקן נוסחאות כימיות',
			'wikEdFixUnits alt':           'תקן יחידות',
			'wikEdFixUnits title':         'תקן יחידות',
			'wikEdFixRegExTypo alt':       'תקן תקלדות',
			'wikEdFixRegExTypo title':     'תקן תקלדות לפי כללי ה-AutoWikiBrowser RegExTypoFixer',
 
// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, TEMPL]',
			'wikEdRefHide title':          'Toggle [REF] and [TEMPL] hiding',
			'wikEdRefButtonTooltip':       'Click to display hidden reference',
			'wikEdTemplButtonTooltip':     'Click to display hidden template',
			'wikEdCharEntityButtonTooltip': 'Click to display hidden character entity',
			'wikEdRefButtonShowTooltip':   'Click to hide reference',
			'wikEdTemplButtonShowTooltip': 'Click to hide template',
			'wikEdCharEntityButtonShowTooltip': 'Click to hide character entity',
			'wikEdTextZoom alt':           'הגדלת טקסט',
			'wikEdTextZoom title':         'מעגל הגדלת טקסט (shift-click: אחורה)',
			'wikEdClearHistory alt':       'נקה היסטוריה',
			'wikEdClearHistory title':     'נקה היסטוריית חיפוש, החלפה ותקציר עריכה',
			'wikEdScrollToPreview alt':    'גלול לתצוגה המקדימה',
			'wikEdScrollToPreview title':  'גלול לתצוגה המקדימה',
			'wikEdScrollToEdit alt':       'גלול לעריכה',
			'wikEdScrollToEdit title':     'גלול לשדה עריכה',
 
// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'Use wikEd',
			'wikEdUseWikEd title':         'Toggle between classic text area and wikEd',
			'wikEdHighlightSyntax alt':    'Syntax',
			'wikEdHighlightSyntax title':  'Toggle automatic syntax highlighting',
			'wikEdSource alt':             'Source',
			'wikEdCloseToolbar title':     'Close the standard non-wikEd toolbar',
			'wikEdCloseToolbar alt':       'Close toolbar',
			'wikEdSource title':           'Show the source code for testing purposes',
			'wikEdUsing alt':              'Using',
			'wikEdUsing title':            'Automatically add \'\'…using wikEd\'\' to summaries',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Toggle automatic improved diff view',
			'wikEdFullScreen alt':         'מסך מלא',
			'wikEdFullScreen title':       'כנס/צא ממצב מסך מלא',
			'wikEdTableMode alt':          'מצב טבלאי',
			'wikEdTableMode title':        'כנס/צא ממצב עריכת טבלאות',
 
// summary buttons
			'wikEdClearSummary alt':       'נקה תקציר',
			'wikEdClearSummary title':     'נקה את שדה תקציר העריכה',
			'wikEdSummarySelect title':    'בחר את התקציר האחרון',
			'wikEdPresetSummary': [
				'/*  */ ', 'copyedit', 'תגובה', 'יצירת ערך', 'שכתוב הקדמה',
				'תיקון קישור', 'תקלדות', 'removing linkspam', 'ביטול ניסוי',
				'שחזור', 'ויקיזציה', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '…using [[en:User:Cacycle/wikEd|wikEd]]',
 
// button title acceskey
			'alt-shift':                   'alt-shift-',
 
// submit buttons
			'wikEdLocalPreviewImg alt':    'Preview below',
			'wikEdLocalPreview title':     'Show preview below',
			'wikEdLocalDiffImg alt':       'Changes below',
			'wikEdLocalDiff title':        'Show current changes below',
			'wikEdHelpPageLink':           ' | <a href="{wikEdHomeBaseUrl}wiki/User:Cacycle/wikEd_help" target="helpwindow">wikEd help</a>', // use full link without {wikEdHomeBaseUrl} if the page is not on the English Wikipedia
 
// preview and changes buttons, top
			'wikEdClose alt':              'סגור',
			'wikEdClose title':            'Close preview box',
			'wikEdClose2 alt':             'סגור',
			'wikEdClose2 title':           'Close preview box',
			'wikEdScrollToPreview2 alt':   'Scroll to preview',
			'wikEdScrollToPreview2 title': 'Scroll to preview field',
			'wikEdScrollToEdit2 alt':      'Scroll to edit',
			'wikEdScrollToEdit2 title':    'Scroll to edit field',
 
// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'Scroll to preview',
			'wikEdScrollToPreview3 title': 'Scroll to preview field',
			'wikEdScrollToEdit3 alt':      'Scroll to edit',
			'wikEdScrollToEdit3 title':    'Scroll to edit field',
 
// preview field
			'wikEdPreviewLoading':         '...',
 
// formatting functions
			'image filename':              'שם הקובץ',
			'image width':                 'רוחב',
			'table caption':               'כיתוב',
			'table heading':               'כותרת',
			'table cell':                  'תא',
			'redirect article link':       'article link',
 
// fixing functions
			'External links':              'קישורים חיצוניים',
			'See also':                    'ראו גם',
			'References':                  'הערות שוליים',
 
// language specific wiki code
			'wikicode Image':              'תמונה',
			'wikicode File':               'קובץ',
			'wikicode Category':           'קטגוריה',
			'wikicode Template':           'תבנית',
			'wikEdReferencesSection':      '\n== הערות שוליים ==\n<references/>\n',
			'talk page':                   'talk',
			'history page':                'history',
			'talk namespace':              'Talk',
			'talk namespace suffix':       '_talk', 
 
// shortened button texts
			'shortenedPreview':            'תצוגה מקדימה',
			'shortenedChanges':            'שינויים',
 
// follow link popup
			'followLink':                  '(ctrl-click)',
			'followLinkMac':               '(cmd-click)',
 
// error message popups
			'wikEdTableModeError':         'קוד הטבלה מכיל שגיאות',
 
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
			'wikEdDiffButton title':       'מצב הצגת שינויים משופר',
			'wikEdDiffLoading':            '...'
 
};

var wikEdMainEditCSS = {
			'.wikEdButtonsWrapper':                'direction:ltr',
			'.wikEdCombo':                   'height:18.2333px',
			'#wikEdSummarySelect':                 'direction:ltr'
};

// define  custom buttons (id, class, popup title, image src, width, height, alt text, onClick and parameters)
var wikEdButton = {};
wikEdButton[100] = ['alignTA', 'wikEdButton', 'ישר לצד השני את תיבת העריכה', 'http://upload.wikimedia.org/wikipedia/commons/6/67/WikEd_logo.png', '16', '16', 'יישור עריכה', 'javascript:WikEdEditButton(this, this.id, null, AlignTAHandler);' ];
// define custom button bars (id outer, class outer, id inner, class inner, height, grip title, button numbers)
var wikEdButtonBar = {};
wikEdButtonBar['custom1'] = ['wikEdButtonBarCustom1',  'wikEdButtonBarCustom1',  'wikEdButtonsCustom1',  'wikEdButtonsCustom1',  44, 'כפתורים מותאמים לעורך העברי', [100] ];
function AlignTAHandler(obj) {
  if(wikEdFrameBody.style.direction=="rtl")
    wikEdFrameBody.style.direction="ltr";
  else
    wikEdFrameBody.style.direction="rtl";
  return;
}