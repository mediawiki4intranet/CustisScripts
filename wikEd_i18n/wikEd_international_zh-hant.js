/*

{{en:User:Cacycle/wikEd_template}}

This is the Traditional Chinese translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

<pre><nowiki> */

var wikEdText = {

// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion}（{wikEdProgramDate}）按一下以停用',
			'wikEdLogo error alt':         'wikEd發生錯誤',
			'wikEdLogo error title':       '載入時發生錯誤——wikEd {wikEdProgramVersion}（{wikEdProgramDate}）按一下以停用',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     '不支援的瀏覽器——wikEd {wikEdProgramVersion}（{wikEdProgramDate}）',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Incompatible script or gadget "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    '已停用——wikEd {wikEdProgramVersion}（{wikEdProgramDate}）按一下以啟用',

// top jumper
			'wikEdScrollToEdit4 alt':      '捲動到編輯框',
			'wikEdScrollToEdit4 title':    '捲動到編輯框',

// button bar grip titles
			'wikEdGripFormat title':       '設定格式按鈕（按一下以隱藏或顯示）',
			'wikEdGripTextify title':      '文字化和維基化按鈕（按一下以隱藏或顯示）',
			'wikEdGripCustom1 title':      '自定按鈕（按一下以隱藏或顯示）',
			'wikEdGripFind title':         '搜尋功能按鈕（按一下以隱藏或顯示）',
			'wikEdGripFix title':          '修正功能按鈕（按一下以隱藏或顯示）',
			'wikEdGripCustom2 title':      '自定按鈕（按一下以隱藏或顯示）',
			'wikEdGripControl title':      'wikEd控制按鈕（按一下以隱藏或顯示）',

// formatting buttons, top row
			'wikEdUndo alt':               '復原',
			'wikEdUndo title':             '復原',
			'wikEdRedo alt':               '取消復原',
			'wikEdRedo title':             '取消復原',
			'wikEdBold alt':               '粗體',
			'wikEdBold title':             '粗體文字',
			'wikEdItalic alt':             '斜體',
			'wikEdItalic title':           '斜體文字',
			'wikEdUnderline alt':          '底線',
			'wikEdUnderline title':        '底線',
			'wikEdStrikethrough alt':      '刪除線',
			'wikEdStrikethrough title':    '刪除線',
			'wikEdNowiki alt':             'Nowiki',
			'wikEdNowiki title':           '維基代碼無效化',
			'wikEdSuperscript alt':        '上標',
			'wikEdSuperscript title':      '上標文字',
			'wikEdSubscript alt':          '下標字',
			'wikEdSubscript title':        '下標文字',
			'wikEdRef alt':                '參考',
			'wikEdRef title':              '參考（按住SHIFT並按一下：同項參考）',
			'wikEdCase alt':               '字母大小寫',
			'wikEdCase title':             '在全部小寫、首字母大寫、全部大寫之間轉換',
			'wikEdSort alt':               '排序',
			'wikEdSort title':             '依字母順序排列每行',
			'wikEdRedirect alt':           '重定向',
			'wikEdRedirect title':         '建立重定向，並刪除所有文字',
			'wikEdUndoAll alt':            '全部復原',
			'wikEdUndoAll title':          '全部復原',
			'wikEdRedoAll alt':            '全部取消復原',
			'wikEdRedoAll title':          '全部取消復原',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           '內部連結',
			'wikEdWikiLink title':         '內部連結',
			'wikEdWebLink alt':            '外部連結',
			'wikEdWebLink title':          '外部連結',
			'wikEdHeading alt':            '標題',
			'wikEdHeading title':          '提升標題級別（按住SHIFT並按一下：降低級別）',
			'wikEdBulletList alt':         '項目符號清單',
			'wikEdBulletList title':       '提升項目符號清單層次（按住SHIFT並按一下：降低級別）',
			'wikEdNumberList alt':         '編號清單',
			'wikEdNumberList title':       '提升編號清單層次（按住SHIFT並按一下：降低級別）',
			'wikEdIndentList alt':         '縮排清單',
			'wikEdIndentList title':       '增加左邊縮排（按住SHIFT並按一下：降低級別）',
			'wikEdDefinitionList alt':     '定義列表',
			'wikEdDefinitionList title':   '定義列表',
			'wikEdImage alt':              '圖像',
			'wikEdImage title':            '圖像',
			'wikEdTable alt':              '表格',
			'wikEdTable title':            '表格',
			'wikEdReferences alt':         '參考資料',
			'wikEdReferences title':       '參考資料位置（按住SHIFT並按一下：參考資料段落)',

// textify buttons
			'wikEdWikify alt':             '維基化',
			'wikEdWikify title':           '將貼上的內容轉換成維基代碼，並更新格式語法辨識高亮提示',
			'wikEdTextify alt':            '純文本化',
			'wikEdTextify title':          '將貼上的內容轉換成純文本，並更新格式語法辨識高亮提示 (shift-click: forced highlighting)',

// find and replace buttons, top row
			'wikEdFindAll alt':            '尋找所有',
			'wikEdFindAll title':          '尋找所有配對內容',
			'wikEdFindPrev alt':           '找上一個',
			'wikEdFindPrev title':         '尋找上一個配對內容',
			'wikEdFindSelect title':       '選取用過的搜尋目標或跳到另一個標題',
			'wikEdFindNext alt':           '找下一個',
			'wikEdFindNext title':         '尋找下一個配對內容（按住SHIFT並按一下：取得已選取文字）',
			'wikEdJumpPrev alt':           'Selected prev',
			'wikEdJumpPrev title':         '尋找上一個配對已選取內容',
			'wikEdJumpNext alt':           'Selected next',
			'wikEdJumpNext title':         '尋找下一個配對已選取內容',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         '取代所有',
			'wikEdReplaceAll title':       '取代全部內容或選取範圍內的配對',
			'wikEdReplacePrev alt':        '取代上一個',
			'wikEdReplacePrev title':      '取代上一個配對內容',
			'wikEdReplaceSelect title':    '選取用過的取代內容',
			'wikEdReplaceNext alt':        '取代下一個',
			'wikEdReplaceNext title':      '取代下一個配對內容（按住SHIFT並按一下：取得已選取文字）',
			'wikEdCaseSensitive alt':      '區分大小寫',
			'wikEdCaseSensitive title':    '大小寫視為相異',
			'wikEdRegExp alt':             'RegExp',
			'wikEdRegExp title':           '搜尋框使用',
			'wikEdFindAhead alt':          '隨打即找',
			'wikEdFindAhead title':        '邊輸入邊尋找（尋找時不分大小寫及不用正則表達式',

// fix buttons, top row
			'wikEdFixBasic alt':           '基本修正',
			'wikEdFixBasic title':         '基本修正：空格與空行，其他修正按鈕亦可做到此功能',
			'wikEdFixHtml alt':            '修正html',
			'wikEdFixHtml title':          '將html轉換成維基代碼',
			'wikEdFixCaps alt':            '修正大寫字母',
			'wikEdFixCaps title':          '將標題及清單的首字母修正為大寫',
			'wikEdFixUnicode alt':         '修正Unicode',
			'wikEdFixUnicode title':       '修正Unicode字母代碼',
			'wikEdFixAll alt':             '修正所有錯誤',
			'wikEdFixAll title':           '基本修正、修正html、大寫字母、及Unicode',
			'wikEdFixRedirect alt':        '修正重定向',
			'wikEdFixRedirect title':      '修正重定向',

// fix buttons, bottom row
			'wikEdFixDashes alt':          '修正dashes',
			'wikEdFixDashes title':        '修正dashes',
			'wikEdFixPunct alt':           '修正標點符號前的空格',
			'wikEdFixPunct title':         '修正標點符號前的空格',
			'wikEdFixMath alt':            '修正數學公式',
			'wikEdFixMath title':          '修正數學公式',
			'wikEdFixChem alt':            '修正化學公式',
			'wikEdFixChem title':          '修正化學公式',
			'wikEdFixUnits alt':           '修正單位',
			'wikEdFixUnits title':         '修正單位',
			'wikEdFixRegExTypo alt':       '修正筆誤',
			'wikEdFixRegExTypo title':     '使用AutoWikiBrowser RegExTypoFixer rules修正筆誤',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, TEMPL]',
			'wikEdRefHide title':          'Toggle [REF] and [TEMPL] hiding',
			'wikEdRefButtonTooltip':       'Click to display hidden reference',
			'wikEdTemplButtonTooltip':     'Click to display hidden template',
			'wikEdCharEntityButtonTooltip': 'Click to display hidden character entity',
			'wikEdRefButtonShowTooltip':   'Click to hide reference',
			'wikEdTemplButtonShowTooltip': 'Click to hide template',
			'wikEdCharEntityButtonShowTooltip': 'Click to hide character entity',
			'wikEdTextZoom alt':           '文字縮放',
			'wikEdTextZoom title':         '循環轉換文字縮放（按住SHIFT並按一下：相反方向）',
			'wikEdClearHistory alt':       '清除記錄',
			'wikEdClearHistory title':     '清除尋找、取代、和編輯摘要的記錄',
			'wikEdScrollToPreview alt':    '捲動到預覽框',
			'wikEdScrollToPreview title':  '捲動到預覽框',
			'wikEdScrollToEdit alt':       '捲動到編輯框',
			'wikEdScrollToEdit title':     '捲動到編輯框',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           '使用wikEd',
			'wikEdUseWikEd title':         '在預設編輯框和wikEd之間轉換',
			'wikEdHighlightSyntax alt':    '語法辨識',
			'wikEdHighlightSyntax title':  '啟用或停用語法辨識高亮提示',
			'wikEdSource alt':             '原始碼',
			'wikEdSource title':           '顯示原始碼以供測試用途',
			'wikEdCloseToolbar alt':       '關閉工具列',
			'wikEdCloseToolbar title':     '關閉預設的非wikEd工具列',
			'wikEdUsing alt':              '使用',
			'wikEdUsing title':            '在編輯摘要中自動加入 \'\'…使用wikEd\'\' ',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Toggle automatic improved diff view',
			'wikEdFullScreen alt':         '全螢幕',
			'wikEdFullScreen title':       '全螢幕顯示',
			'wikEdTableMode alt':          '表格模式',
			'wikEdTableMode title':        '表格編輯模式',

// summary buttons
			'wikEdClearSummary alt':       '清除編輯摘要',
			'wikEdClearSummary title':     '清除編輯摘要',
			'wikEdSummarySelect title':    '選取用過的編輯摘要',
			'wikEdPresetSummary': [
				'/*  */ ', 'copyedit', '回覆', '新條目', '重寫首段',
				'修正連結', '修正筆誤', '刪除垃圾連結', '回退小試驗',
				'回退破壞', '設定原始文字格式', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '…使用[[en:User:Cacycle/wikEd|wikEd]]',

// button title acceskey
			'alt-shift':                   'alt-shift-',

// submit buttons
			'wikEdLocalPreviewImg alt':    '在底部顯示預覽',
			'wikEdLocalPreview title':     '在底部顯示預覽',
			'wikEdLocalDiffImg alt':       '在底部顯示差異',
			'wikEdLocalDiff title':        '在底部顯示差異',
			'wikEdHelpPageLink':           ' | <a href="{wikEdHomeBaseUrl}wiki/User:Cacycle/wikEd_help" target="helpwindow">wikEd 使用說明（英文）</a>', // use full link without {wikEdHomeBaseUrl} if the page is not on the English Wikipedia

// preview and changes buttons, top
			'wikEdClose alt':              '關閉',
			'wikEdClose title':            '關閉預覽框',
			'wikEdClose2 alt':             '關閉',
			'wikEdClose2 title':           '關閉預覽框',
			'wikEdScrollToPreview2 alt':   '捲動到預覽框',
			'wikEdScrollToPreview2 title': '捲動到預覽框',
			'wikEdScrollToEdit2 alt':      '捲動到編輯框',
			'wikEdScrollToEdit2 title':    '捲動到編輯框',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   '捲動到預覽框',
			'wikEdScrollToPreview3 title': '捲動到預覽框',
			'wikEdScrollToEdit3 alt':      '捲動到編輯框',
			'wikEdScrollToEdit3 title':    '捲動到編輯框',

// preview field
			'wikEdPreviewLoading':         '載入中……',

// formatting functions
			'image filename':              '檔案名稱',
			'image width':                 '寬度',
			'table caption':               '表格標題',
			'table heading':               '行列標題',
			'table cell':                  '單元格',
			'redirect article link':       '條目連結',

// fixing functions
			'External links':              '外部連結',
			'See also':                    '參看',
			'References':                  '參考資料',

// language specific wiki code
			'wikicode Image':              'Image',
			'wikicode File':               'File',
			'wikicode Category':           'Category',
			'wikicode Template':           'Template',
			'wikEdReferencesSection':      '\n== 參考資料 ==\n<div class="references-small">\n<references />\n</div>\n',
			'talk page':                   'talk',
			'history page':                'history',
			'talk namespace':              'Talk',
			'talk namespace suffix':       '_talk',

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'TEMPL',

// shortened button texts
			'shortenedPreview':            '顯示預覽',
			'shortenedChanges':            '顯示更改',

// follow link popup
			'followLink':                  '(Ctrl-click)',
			'followLinkMac':               '(cmd-click)',

// error message popups
			'wikEdTableModeError':         '表格的維基代碼包含錯誤',

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
			'wikEdDiffButton title':       'Show improved diff view',
			'wikEdDiffLoading':            '載入中……'

}