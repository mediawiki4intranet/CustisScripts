/*

{{en:User:Cacycle/wikEd_template}}

This is the Simplified Chinese translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

'''[[:en:User:Cacycle/wikEd|wikEd]] '''0.9.91版媒体维基JavaScript附加软件简体中文翻译，翻译时请参考[[:en:User:Cacycle/wikEd international]]。

<pre><nowiki> */

var wikEdText = {

// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) 单击关闭',
			'wikEdLogo error alt':         'wikEd软件出现错误',
			'wikEdLogo error title':       'wikEd软件无法载入 {wikEdProgramVersion} ({wikEdProgramDate}) 单击关闭',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     '浏览器不支持软件 - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': '不支持脚本或配加软件 "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    'wikEd已被关闭 {wikEdProgramVersion} ({wikEdProgramDate}) 单击以重新启动',

// top preview jumper
			'wikEdScrollToEdit4 alt':      '滚动以便编辑',
			'wikEdScrollToEdit4 title':    '滚动以便编辑字段',

// button bar grip titles
			'wikEdGripFormat title':       '格式化系列按钮（单击以显示或隐藏）',
			'wikEdGripCustom1 title':      '自定义化系列按钮（单击以显示或隐藏）',
			'wikEdGripFind title':         '搜寻系列按钮（单击以显示或隐藏）',
			'wikEdGripFix title':          '修理系列按钮（单击以显示或隐藏）',
			'wikEdGripCustom2 title':      '自定义化系列按钮（单击以显示或隐藏）',
			'wikEdGripControl title':      'wikEd软件设置系列按钮（单击以显示或隐藏）',

// formatting buttons, top row
			'wikEdUndo alt':               '回退',
			'wikEdUndo title':             '回退',
			'wikEdRedo alt':               '重做',
			'wikEdRedo title':             '重做',
			'wikEdBold alt':               '粗体',
			'wikEdBold title':             '粗体文字',
			'wikEdItalic alt':             '斜体',
			'wikEdItalic title':           '斜体文字',
			'wikEdUnderline alt':          '下划线',
			'wikEdUnderline title':        '下划线',
			'wikEdStrikethrough alt':      '删除线',
			'wikEdStrikethrough title':    '删除线',
			'wikEdNowiki alt':             '非维基化',
			'wikEdNowiki title':           '插入非维基化文本',
			'wikEdSuperscript alt':        '上标',
			'wikEdSuperscript title':      '上标',
			'wikEdSubscript alt':          '下标',
			'wikEdSubscript title':        '下标',
			'wikEdRef alt':                '注释',
			'wikEdRef title':              '注释（同时按着Shift键点击此按钮：已命名标签）',
			'wikEdCase alt':               '大小写更变',
			'wikEdCase title':             '全部小写、首字母大写、全部大写状态更变',
			'wikEdSort alt':               '分类排序',
			'wikEdSort title':             '字母排序',
			'wikEdRedirect alt':           '重定向',
			'wikEdRedirect title':         '重定向',
			'wikEdUndoAll alt':            '回退一切',
			'wikEdUndoAll title':          '回退所有更改',
			'wikEdRedoAll alt':            '重做一切',
			'wikEdRedoAll title':          '重做所有更改',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           '内部链接',
			'wikEdWikiLink title':         '内部链接',
			'wikEdWebLink alt':            '外部链接',
			'wikEdWebLink title':          '外部链接',
			'wikEdHeading alt':            '标题',
			'wikEdHeading title':          '增高标题级别（同时按着Shift键点击此按钮：减低级别）',
			'wikEdBulletList alt':         '符号式条列',
			'wikEdBulletList title':       '增高符号条列级别（同时按着Shift键点击此按钮：减低级别）',
			'wikEdNumberList alt':         '序数式条列',
			'wikEdNumberList title':       '增高序数条列级别（同时按着Shift键点击此按钮：减低级别）',
			'wikEdIndentList alt':         '缩排式条列',
			'wikEdIndentList title':       '增加缩排宽度（同时按着Shift键点击此按钮：缩小宽度）',
			'wikEdDefinitionList alt':     '定义式条列',
			'wikEdDefinitionList title':   '定义式条列',
			'wikEdImage alt':              '图像',
			'wikEdImage title':            '图像',
			'wikEdTable alt':              '表格',
			'wikEdTable title':            '表格',
			'wikEdReferences alt':         '参考资料',
			'wikEdReferences title':       '引用参考资料（同时按着Shift键点击此按钮：跳至参考资料章节）',

// textify buttons
			'wikEdWikify alt':             '维基化',
			'wikEdWikify title':           '将复制粘贴内容维基化，突出显示被更新内容',
			'wikEdTextify alt':            '纯文本',
			'wikEdTextify title':          '还原复制粘贴内容，突出显示被更新内容（同时按着Shift键点击此按钮：强制突出显示被更新内容）',

// find and replace buttons, top row
			'wikEdFindAll alt':            '找出所有的相应内容',
			'wikEdFindAll title':          '找出所有的相应内容',
			'wikEdFindPrev alt':           '找出上一个相应内容',
			'wikEdFindSelect title':       '选择先前搜索内容或跳至新段落',
			'wikEdFindPrev title':         '找出上一个相应内容',
			'wikEdFindNext alt':           '找出下一个相应内容',
			'wikEdFindNext title':         '找出下一个相应内容（同时按着Shift键点击此按钮：复制内容）',
			'wikEdJumpPrev alt':           '跳至上一个相应内容',
			'wikEdJumpPrev title':         '向上文搜寻内容',
			'wikEdJumpNext alt':           '跳至下一个相应内容',
			'wikEdJumpNext title':         '向下文搜寻内容',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         '更替所有的相应内容',
			'wikEdReplaceAll title':       '更替选区或整条目中所有的相应内容',
			'wikEdReplacePrev alt':        '更替前面的相应内容',
			'wikEdReplacePrev title':      '更替前面的相应内容',
			'wikEdReplaceSelect title':    '选择先前更替内容',
			'wikEdReplaceNext alt':        '更替后面的相应内容',
			'wikEdReplaceNext title':      '更替后面的相应内容（同时按着Shift键点击此按钮：复制内容）',
			'wikEdCaseSensitive alt':      '字母大小写匹配',
			'wikEdCaseSensitive title':    '查找框中使用着字母大小写匹配',
			'wikEdRegExp alt':             '正则表达式',
			'wikEdRegExp title':           '查找框中使用着正则表达式',
			'wikEdFindAhead alt':          '边输入边查找',
			'wikEdFindAhead title':        '边输入边查找',

// fix buttons, top row
			'wikEdFixBasic alt':           '基本修正功能',
			'wikEdFixBasic title':         '修正空格与空行',
			'wikEdFixHtml alt':            '修正HTML',
			'wikEdFixHtml title':          '将HTML转换为维基代码',
			'wikEdFixCaps alt':            '修正首字母大写',
			'wikEdFixCaps title':          '修正首字母大写',
			'wikEdFixUnicode alt':         '修正统一码',
			'wikEdFixUnicode title':       '修正统一码',
			'wikEdFixAll alt':             '修正所有可修正的',
			'wikEdFixAll title':           '修正所有可修正的',
			'wikEdFixRedirect alt':        '修正重定向',
			'wikEdFixRedirect title':      '修正重定向',

// fix buttons, bottom row
			'wikEdFixDashes alt':          '修正破折号',
			'wikEdFixDashes title':        '修正破折号',
			'wikEdFixPunct alt':           '修正标点符号前的空格',
			'wikEdFixPunct title':         '修正标点符号前的空格',
			'wikEdFixMath alt':            '修正数学公式',
			'wikEdFixMath title':          '修正数学公式',
			'wikEdFixChem alt':            '修正化学公式',
			'wikEdFixChem title':          '修正化学公式',
			'wikEdFixUnits alt':           '修正数学单位',
			'wikEdFixUnits title':         '修正数学单位',
			'wikEdFixRegExTypo alt':       '修正笔误',
			'wikEdFixRegExTypo title':     '利用AutoWikiBrowser的RegExTypoFixer标准来修正笔误',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, TEMPL]',
			'wikEdRefHide title':          'Toggle [REF] and [TEMPL] hiding',
			'wikEdRefButtonTooltip':       '单击以显示被隐藏的参考资料',
			'wikEdTemplButtonTooltip':     '单击以显示被隐藏的模板',
			'wikEdCharEntityButtonTooltip': 'Click to display hidden character entity',
			'wikEdRefButtonShowTooltip':   '单击以隐藏参考资料',
			'wikEdTemplButtonShowTooltip': '单击以隐藏模板',
			'wikEdCharEntityButtonShowTooltip': 'Click to hide character entity',
			'wikEdTextZoom alt':           '变焦',
			'wikEdTextZoom title':         '变焦（同时按着Shift键点击此按钮：相反方向）',
			'wikEdClearHistory alt':       '清空储存',
			'wikEdClearHistory title':     '清空储存',
			'wikEdScrollToPreview alt':    '滚动以预览',
			'wikEdScrollToPreview title':  '滚动以预览字段',
			'wikEdScrollToEdit alt':       '滚动以编辑',
			'wikEdScrollToEdit title':     '滚动以编辑字段',
			'wikEdTableMode alt':          '表格模式',
			'wikEdTableMode title':        '切换至表格编辑模式',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           '使用WikEd',
			'wikEdUseWikEd title':         'WikEd、默认编辑窗口更变',
			'wikEdHighlightSyntax alt':    '语法分辨',
			'wikEdHighlightSyntax title':  '语法分辨色彩突出开关',
			'wikEdSource alt':             '源代码',
			'wikEdCloseToolbar title':     '隐藏工具栏',
			'wikEdCloseToolbar alt':       '隐藏工具栏',
			'wikEdSource title':           '显示源代码',
			'wikEdUsing alt':              '使用WikEd附加软件协助编辑',
			'wikEdUsing title':            '自动在编辑摘要中加入\'\'…使用WikEd附加软件协助编辑\'\' ',
			'wikEdDiff alt':               'wikEd差异',
			'wikEdDiff title':             '切换标准或改进版差异显示',
			'wikEdFullScreen alt':         '全屏',
			'wikEdFullScreen title':       '全屏显示',

// summary buttons
			'wikEdClearSummary alt':       '清空编辑摘要',
			'wikEdClearSummary title':     '清空编辑摘要',
			'wikEdSummarySelect title':    '选用先前输入的编辑摘要',
			'wikEdPresetSummary': [
			'大幅度修改', '回复', '新条目', '重写引文',
			'修正链接', '修正笔误', '删除垃圾链接', '回退小试验',
			'回退破坏', '源代码整容', '{wikEdUsing}'
],
			'wikEdSummaryUsing':           '…使用[[User:Cacycle/wikEd|WikEd]]附加软件协助编辑',

// button title acceskey
			'alt-shift':                   'alt-shift-',

// submit buttons
			'wikEdLocalPreviewImg alt':    '在底部显示预览',
			'wikEdLocalPreview title':     '在底部显示预览',
			'wikEdLocalDiffImg alt':       '在底部显示差异',
			'wikEdLocalDiff title':        '在底部显示差异',
			'wikEdHelpPageLink':           ' | <a href="{wikEdHomeBaseUrl}wiki/User:Cacycle/wikEd_help" target="helpwindow">wikEd help</a>', // use full link without {wikEdHomeBaseUrl} if the page is not on the English Wikipedia

// preview and changes buttons, top
			'wikEdClose alt':              '关闭预览',
			'wikEdClose title':            '关闭预览',
			'wikEdClose2 alt':             '关闭预览框',
			'wikEdClose2 title':           '关闭预览框',
			'wikEdScrollToPreview2 alt':   '滚动以预览',
			'wikEdScrollToPreview2 title': '滚动以预览字段',
			'wikEdScrollToEdit2 alt':      '滚动以编辑',
			'wikEdScrollToEdit2 title':    '滚动以编辑字段',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   '滚动以预览',
			'wikEdScrollToPreview3 title': '滚动以预览字段',
			'wikEdScrollToEdit3 alt':      '滚动以编辑',
			'wikEdScrollToEdit3 title':    '滚动以编辑字段',

// preview field
			'wikEdPreviewLoading':         '...',

// formatting functions
			'image filename':              '文件标题',
			'image width':                 '宽度',
			'table caption':               '说明',
			'table heading':               '标题',
			'table cell':                  '储存格',
			'redirect article link':       '条目链接',

// fixing functions
			'External links':              '外部链接',
			'See also':                    '参看',
			'References':                  '注释',

// language specific wiki code
			'wikicode Image':              '图像',
			'wikicode File':               '文件',
			'wikicode Category':           '分类',
			'wikicode Template':           '模板',
			'wikEdReferencesSection':      '\n==注释==\n\n<references />\n',
			'talk page':                   '讨论',
			'history page':                '历史',
			'talk namespace':              '讨论',
			'talk namespace suffix':       '_讨论',

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'TEMPL',

// shortened button texts
			'shortenedPreview':            '显示预览',
			'shortenedChanges':            '显示更改',

// follow link popup
			'followLink':                  '(Ctrl-click)',
			'followLinkMac':               '(cmd-click)',

// error message popups
			'wikEdTableModeError':         '维基编码出现错误',

// auto updating
			'wikEdGreasemonkeyAutoUpdate': 'wikEd Update:\n\n找到了新的GreaseMonkey "wikEd"脚本。\n\n\n下载地址：\n\n{updateURL}',

// highlighting popups
			'wikEdHyphenDash':             '标准连字号',
			'wikEdFigureDash':             'Figure dash',
			'wikEdEnDash':                 'En dash',
			'wikEdEmDash':                 'Em dash',
			'wikEdBarDash':                '横杠',
			'wikEdMinusDash':              '负号',
			'wikEdSoftHyphen':             'Soft hyphen',
			'wikEdTab':                    'Tab',
			'wikEdEnSpace':                'En space',
			'wikEdEmSpace':                'Em space',
			'wikEdThinSpace':              '半宽空格',
			'wikEdIdeographicSpace':       '全宽空格',

// highlighting
			'wikEdSignature3':             '仅留用户名',
			'wikEdSignature4':             '留下用户名和日期',
			'wikEdSignature5':             '仅留日期',

// highlighting errors
			'wikEdErrorHtmlUnknown':       '不支持此HTML标签',
			'wikEdErrorBoldItalic':        '非法粗体或斜体化',
			'wikEdErrorWrongClose':        'Close tag does not match',
			'wikEdErrorNoOpen':            'Close tag has no match',
			'wikEdErrorNoHandler':         'No handler',
			'wikEdErrorNoClose':           'Open tag has no match',
			'wikEdErrorNewline':           'Open tag closed by new line',
			'wikEdErrorTemplHeading':      'Headings in templates are ignored',
			'wikEdErrorTemplParam':        'Template/parameter tags do not match',
			'wikEdErrorTemplParamAmbig':   'Template/parameter tags are ambiguous',

// highlighting image preview
			'wikEdFilePreview':            '预览图像',

// from [[en:User:Cacycle/wikEdDiff.js]]
			'wikEdDiffButtonImg alt':      'wikEd差异',
			'wikEdDiffButton title':       '显示差异（改进版）',
			'wikEdDiffLoading':            '...'

}