/*

{{en:User:Cacycle/wikEd_template}}

This is the Japanese translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

<pre><nowiki> */

var wikEdText = {

// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) クリックすると無効になります',
			'wikEdLogo error alt':         'wikEd での失敗',
			'wikEdLogo error title':       '読み込み失敗 - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) クリックすると無効になります',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     '対応していないブラウザ - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': '互換性のないスクリプトかガジェット "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    '無効 - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) クリックすると有効になります',

// top jumper
			'wikEdScrollToEdit4 alt':      '編集窓へ',
			'wikEdScrollToEdit4 title':    '編集窓まで移動',

// button bar grip titles
			'wikEdGripFormat title':       '整形ボタン (クリックで表示オン/オフ)',
			'wikEdGripTextify title':      'ウィキ化/ウィキ化戻しボタン (クリックで表示オン/オフ)',
			'wikEdGripCustom1 title':      'カスタムボタン (クリックで表示オン/オフ)',
			'wikEdGripFind title':         '検索ボタン (クリックで表示オン/オフ)',
			'wikEdGripFix title':          '校正ボタン (クリックで表示オン/オフ)',
			'wikEdGripCustom2 title':      'カスタムボタン (クリックで表示オン/オフ)',
			'wikEdGripControl title':      'wikEdコントロールボタン (クリックで表示オン/オフ)',

// formatting buttons, top row
			'wikEdUndo alt':               '元に戻す',
			'wikEdUndo title':             '元に戻す',
			'wikEdRedo alt':               'やり直し',
			'wikEdRedo title':             'やり直す',
			'wikEdBold alt':               '強い強調',
			'wikEdBold title':             'テキストを強い強調 (たいていは太字) とする',
			'wikEdItalic alt':             '弱い強調',
			'wikEdItalic title':           'テキストを弱い強調 (たいていは斜体) とする',
			'wikEdUnderline alt':          '傍線',
			'wikEdUnderline title':        'テキストに傍線を引く',
			'wikEdStrikethrough alt':      '打ち消し線',
			'wikEdStrikethrough title':    'テキストに打ち消し線を引く',
			'wikEdNowiki alt':             'nowiki',
			'wikEdNowiki title':           '入力文字をそのまま表示',
			'wikEdSuperscript alt':        '上付き',
			'wikEdSuperscript title':      'テキストを上付きにする',
			'wikEdSubscript alt':          '下付き',
			'wikEdSubscript title':        'テキストを下付きにする',
			'wikEdRef alt':                '脚注番号',
			'wikEdRef title':              '脚注番号のリンク ([Shift] を押しながらクリックでname付きタグ)',
			'wikEdCase alt':               '大文字小文字',
			'wikEdCase title':             '小文字、先頭大文字、全部大文字の切り替え',
			'wikEdSort alt':               '並べ替え',
			'wikEdSort title':             'アルファベット順に並べ替え (漢字や仮名はうまく並べ替えられません)',
			'wikEdRedirect alt':           'リダイレクト',
			'wikEdRedirect title':         'リダイレクトを作成してテキストをすべて削除',
			'wikEdUndoAll alt':            '元に戻す',
			'wikEdUndoAll title':          '変えたところをすべて元に戻す',
			'wikEdRedoAll alt':            'やり直し',
			'wikEdRedoAll title':          '変えたところをすべてやり直す',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'リンク',
			'wikEdWikiLink title':         '内部リンク',
			'wikEdWebLink alt':            'ウェブリンク',
			'wikEdWebLink title':          '外部リンク',
			'wikEdHeading alt':            '見出し',
			'wikEdHeading title':          '見出しレベルを下げる ([Shift] を押しながらクリックで上げる)',
			'wikEdBulletList alt':         '番号なし箇条書き',
			'wikEdBulletList title':       '箇条書きレベルを下げる ([Shift] を押しながらクリックで上げる)',
			'wikEdNumberList alt':         '番号付き箇条書き',
			'wikEdNumberList title':       '箇条書きレベルを下げる ([Shift] を押しながらクリックで上げる)',
			'wikEdIndentList alt':         '字下げ',
			'wikEdIndentList title':       '字下げレベルを下げる ([Shift] を押しながらクリックで上げる)',
			'wikEdDefinitionList alt':     '定義リスト',
			'wikEdDefinitionList title':   '定義リスト',
			'wikEdImage alt':              '画像',
			'wikEdImage title':            '画像の埋め込み',
			'wikEdTable alt':              '表',
			'wikEdTable title':            '表組み',
			'wikEdReferences alt':         '脚注',
			'wikEdReferences title':       '脚注を入れる ([Shift] を押しながらクリックで「参考文献」節)',
			'wikEdUpdateSyntax alt':       'マークアップ', /* obs. */
			'wikEdUpdateSyntax title':     'マークアップ色分け表示を更新', /* obs. */

// textify buttons
			'wikEdWikify alt':             'ウィキ化',
			'wikEdWikify title':           '貼り付けたものをウィキ化',
			'wikEdTextify alt':            'ウィキ化を戻す',
			'wikEdTextify title':          '貼り付けたものを普通のテキストにする ([Shift] を押しながらクリックで色分けを維持)', /* verifying... */

// find and replace buttons, top row
			'wikEdFindAll alt':            'すべて検索',
			'wikEdFindAll title':          '見付かるものをすべて検索',
			'wikEdFindPrev alt':           '前を検索',
			'wikEdFindPrev title':         '前のほうへ検索',
			'wikEdFindSelect title':       '前で見付かるものを検索するが、見出しで停まる',
			'wikEdFindNext alt':           '次を検索',
			'wikEdFindNext title':         '次に見付かるものを検索 ([Shift] を押しながらクリックで選択したものを使う)',
			'wikEdJumpPrev alt':           '選択で前を検索',
			'wikEdJumpPrev title':         '選択したテキストで前で見つかるものを検索',
			'wikEdJumpNext alt':           '選択で次を検索',
			'wikEdJumpNext title':         '選択したテキストで次に見つかるものを検索',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'すべて置換',
			'wikEdReplaceAll title':       'テキスト全体か、選択したものの中で見付かるものをすべて置換',
			'wikEdReplacePrev alt':        '前を置換',
			'wikEdReplacePrev title':      '前のほうで見付かるものを置換',
			'wikEdReplaceSelect title':    '選択したもので前で見付かるものを置換',
			'wikEdReplaceNext alt':        '次を置換',
			'wikEdReplaceNext title':      '次に見付かるものを置換 ([Shift] を押しながらクリックで選択したものを使う)',
			'wikEdCaseSensitive alt':      '大文字小文字の区別',
			'wikEdCaseSensitive title':    '大文字小文字を区別して検索',
			'wikEdRegExp alt':             '正規表現',
			'wikEdRegExp title':           '検索条件は正規表現',
			'wikEdFindAhead alt':          '補完検索',
			'wikEdFindAhead title':        '入力するものにあわせて見つける (大文字小文字の区別なし。正規表現なし)',

// fix buttons, top row
			'wikEdFixBasic alt':           '校正/基本',
			'wikEdFixBasic title':         '空白や空行の校正 (ほかの校正機能でもやります)',
			'wikEdFixHtml alt':            '校正/HTML',
			'wikEdFixHtml title':          'HTMLをウィキマークアップに修正',
			'wikEdFixCaps alt':            '校正/大文字',
			'wikEdFixCaps title':          '見出しや箇条書きを先頭大文字にする',
			'wikEdFixUnicode alt':         '校正/Unicode',
			'wikEdFixUnicode title':       'Unicodeの文字表現を訂正する',
			'wikEdFixAll alt':             '校正/すべて',
			'wikEdFixAll title':           '校正/基本、HTML、大文字、Unicode',
			'wikEdFixRedirect alt':        'リダイレクトの校正',
			'wikEdFixRedirect title':      'リダイレクトを修正する',

// fix buttons, bottom row
			'wikEdFixDashes alt':          '校正/ダッシュ',
			'wikEdFixDashes title':        'ダッシュやハイフンの校正',
			'wikEdFixPunct alt':           '校正/句読点',
			'wikEdFixPunct title':         '句読点の前の空白を校正',
			'wikEdFixMath alt':            '校正/数式',
			'wikEdFixMath title':          '数式の校正',
			'wikEdFixChem alt':            '校正/化学式',
			'wikEdFixChem title':          '化学式の校正',
			'wikEdFixUnits alt':           '校正/単位',
			'wikEdFixUnits title':         '単位の校正',
			'wikEdFixRegExTypo alt':       '校正/誤字',
			'wikEdFixRegExTypo title':     'AutoWikiBrowser RegExTypoFixerのルールで誤字を訂正',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[注]、[テ]',
			'wikEdRefHide title':          '脚注やテンプレートの内容を隠す/出す',
			'wikEdRefButtonTooltip':       'クリックで脚注の内容を出す',
			'wikEdTemplButtonTooltip':     'クリックでテンプレートの内容を出す',
			'wikEdCharEntityButtonTooltip': 'クリックで文字実体の内容を出す',
			'wikEdRefButtonShowTooltip':   'クリックで脚注の内容を隠す',
			'wikEdTemplButtonShowTooltip': 'クリックでテンプレートの内容を隠す',
			'wikEdCharEntityButtonShowTooltip': 'クリックで文字実体の内容を隠す',
			'wikEdTextZoom alt':           '文字拡大',
			'wikEdTextZoom title':         '文字の拡大、縮小を繰り返す ([Shift] を押しながらクリックすると逆順)',
			'wikEdClearHistory alt':       '履歴消去',
			'wikEdClearHistory title':     '検索、置換、要約の履歴を消去する',
			'wikEdScrollToPreview alt':    'プレビューへ',
			'wikEdScrollToPreview title':  'プレビュー領域まで移動',
			'wikEdScrollToEdit alt':       '編集窓へ',
			'wikEdScrollToEdit title':     '編集窓まで移動',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'wikEdを使う',
			'wikEdUseWikEd title':         'wikEd拡張編集画面のオン/オフ',
			'wikEdHighlightSyntax alt':    'マークアップの色分け',
			'wikEdHighlightSyntax title':  'ウィキマークアップの自動色分けのオン/オフ',
			'wikEdSource alt':             'ソース',
			'wikEdCloseToolbar title':     'wikEd以外の標準ツールバーを閉じる',
			'wikEdCloseToolbar alt':       'ツールバーを閉じる',
			'wikEdSource title':           'HTMLソースコードを表示する (動作テストのため)',
			'wikEdUsing alt':              '使用',
			'wikEdUsing title':            '編集内容の要約に「…wikEdを使用」を自動追加',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             '強化版差分表示のオン/オフ',
			'wikEdFullScreen alt':         '拡大',
			'wikEdFullScreen title':       'ウィンドウの幅いっぱいに表示/戻す',
			'wikEdTableMode alt':          '表組みモード',
			'wikEdTableMode title':        '表組み編集モードのオン/オフ',

// summary buttons
			'wikEdClearSummary alt':       '要約消去',
			'wikEdClearSummary title':     '編集内容の要約を消去する',
			'wikEdSummarySelect title':    '以前の要約文から選ぶ',
			'wikEdPresetSummary': [
				'/*  */ ', 'copyedit', 'reply', 'article created', 'intro rewrite',
				'linkfix', 'fixing typos', 'removing linkspam', 'reverting test',
				'reverting vandalism', 'formatting source text', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '…[[w:en:User:Cacycle/wikEd|wikEd]]を使用',

// button title accesskey
			'alt-shift':                   'alt-shift-',

// submit buttons
			'wikEdLocalPreviewImg alt':    'プレビューを表示',
			'wikEdLocalPreview title':     '下にプレビューを表示する',
			'wikEdLocalDiffImg alt':       '差分を表示',
			'wikEdLocalDiff title':        '下に差分を表示する',
			'wikEdHelpPageLink':           ' | <a href="http://ja.wikipedia.org/wiki/Help:wikEd" target="helpwindow">wikEdの使い方</a>',

// preview and changes buttons, top
			'wikEdClose alt':              '閉じる',
			'wikEdClose title':            'プレビューを閉じる',
			'wikEdClose2 alt':             '閉じる',
			'wikEdClose2 title':           'プレビューを閉じる',
			'wikEdScrollToPreview2 alt':   'プレビューへ移動',
			'wikEdScrollToPreview2 title': 'プレビューの位置まで移動',
			'wikEdScrollToEdit2 alt':      '編集へ移動',
			'wikEdScrollToEdit2 title':    '編集窓の位置まで移動',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'プレビューへ移動',
			'wikEdScrollToPreview3 title': 'プレビューの位置まで移動',
			'wikEdScrollToEdit3 alt':      '編集へ移動',
			'wikEdScrollToEdit3 title':    '編集窓の位置まで移動',

// preview field
			'wikEdPreviewLoading':         '……',

// formatting functions
			'image filename':              'ファイル名',
			'image width':                 '幅',
			'table caption':               'キャプション',
			'table heading':               '見出し',
			'table cell':                  '内容',
			'redirect article link':       '記事へのリンク',

// fixing functions
			'External links':              '外部リンク',
			'See also':                    '関連項目',
			'References':                  '参考文献',

// language specific wiki code
			'wikicode Image':              'ファイル',
			'wikicode File':               'ファイル',
			'wikicode Category':           'Category',
			'wikicode Template':           'Template',
			'wikEdReferencesSection':      '\n== 参考文献 ==\n\n<references />\n',
			'talk page':                   'ノート',
			'history page':                '履歴',
			'talk namespace':              'ノート',
			'talk namespace suffix':       '_talk',
 
// hiding buttons
			'hideRef':                     '注', /* "REF" */
			'hideTempl':                   'テ', /* "TEMPL" */

// shortened button texts
			'shortenedPreview':            'プレビュー',
			'shortenedChanges':            '差分',

// follow link popup
			'followLink':                  '(Ctrl を押しながらクリック)' /* Dont use [...] etc. */,
			'followLinkMac':               '(Commandを押しながらクリック)',

// error message popups
			'wikEdTableModeError':         '表組みのウィキマークアップに間違いがあります',

// auto updating
			'wikEdGreasemonkeyAutoUpdate': 'wikEd更新情報:\n\nGreaseMonkeyスクリプト「wikEd」の新版をご利用になれます。\n\n\n次の場所からダウンロードできます。\n\n{updateURL}',

// highlighting popups
			'wikEdHyphenDash':             'ハイフンマイナス',
			'wikEdFigureDash':             'フィギュアダッシュ (日本語では使いません)',
			'wikEdEnDash':                 '二分ダッシュ',
			'wikEdEmDash':                 '全角ダッシュ',
			'wikEdBarDash':                '水平線 (全角ダッシュを使ってください)',
			'wikEdMinusDash':              'マイナス記号 (日本語プロジェクトではハイフンマイナスを使います)',
			'wikEdSoftHyphen':             'ソフトハイフン (日本語では使いません)',
			'wikEdTab':                    '水平タブ (使わないでください)',
			'wikEdEnSpace':                '二分スペース (日本語では使いません)',
			'wikEdEmSpace':                'エムスペース (日本語では使いません)',
			'wikEdThinSpace':              'シンスペース (日本語では使いません)',
			'wikEdIdeographicSpace':       '和字間隔 (日本語プロジェクトでは使いません)',

// highlighting
			'wikEdSignature3':             '署名 (利用者名のみ)',
			'wikEdSignature4':             '署名 (利用者名と日付)',
			'wikEdSignature5':             '署名 (日付のみ)',

// highlighting errors
			'wikEdErrorHtmlUnknown':       '未対応のHTMLタグ',
			'wikEdErrorBoldItalic':        'Invalid bold / italic',
			'wikEdErrorWrongClose':        '閉じるタグが違います',
			'wikEdErrorNoOpen':            '閉じるタグに対応する開きタグがありません',
			'wikEdErrorNoHandler':         'No handler',
			'wikEdErrorNoClose':           'タグが閉じていません',
			'wikEdErrorNewline':           'タグが行をまたいでいます',
			'wikEdErrorTemplHeading':      'テンプレート内では見出しは使えません',
			'wikEdErrorTemplParam':        'Template/parameter tags do not match',
			'wikEdErrorTemplParamAmbig':   'Template/parameter tags are ambiguous',

// highlighting image preview
			'wikEdFilePreview':            '画像のプレビュー',

// from [[en:User:Cacycle/wikEdDiff.js]]
			'wikEdDiffButtonImg alt':      'wikEdDiff',
			'wikEdDiffButton title':       '強化版の差分で表示',
			'wikEdDiffLoading':            '...',

			'wikEd':                       'wikEd' /* avoid last item followed by ",". */
};