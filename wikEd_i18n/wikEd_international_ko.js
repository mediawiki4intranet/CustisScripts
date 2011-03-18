/*
			
{{en:User:Cacycle/wikEd_template}}


This is the Korean translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

[[:en:User:Cacycle/wikEd|wikEd]] 한국어 번역
		
<pre><nowiki> */
			
var wikEdText = {
// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) 를 끄려면 클릭하세요',
			'wikEdLogo error alt':         'wikEd 에러',
			'wikEdLogo error title':       '로딩 에러 - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) 를 끄려면 클릭하세요',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     '지원하지 않는 브라우저를 사용 중 - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Incompatible script or gadget "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    '꺼진 상태 - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) 를 켜려면 클릭하세요',
			
// top jumper
			'wikEdScrollToEdit4 alt':      '편집창으로',
			'wikEdScrollToEdit4 title':    '편집창으로 이동',
			
// button bar grip titles
			'wikEdGripFormat title':       '편집 버튼 모음 (숨기거나 보려면 클릭하세요)',
			'wikEdGripTextify title':      'Textify and wikify buttons (click to hide or show)',
			'wikEdGripCustom1 title':      '사용자 버튼 모음 (숨기거나 보려면 클릭하세요)',
			'wikEdGripFind title':         '검색 버튼 모음 (숨기거나 보려면 클릭하세요)',
			'wikEdGripFix title':          '교정 버튼 모음 (숨기거나 보려면 클릭하세요)',
			'wikEdGripCustom2 title':      '사용자 버튼 모음 (숨기거나 보려면 클릭하세요)',
			'wikEdGripControl title':      'wikEd 설정 버튼 모음 (숨기거나 보려면 클릭하세요)',
			
// formatting buttons, top row
			'wikEdUndo alt':               '되돌리기',
			'wikEdUndo title':             '되돌리기',
			'wikEdRedo alt':               '다시 실행',
			'wikEdRedo title':             '되돌린 것을 다시 실행합니다',
			'wikEdBold alt': 'Bold',
			'wikEdBold title':             '진하게',
			'wikEdItalic alt':             '기울임',
			'wikEdItalic title':           '기울임',
			'wikEdUnderline alt':          '밑줄',
			'wikEdUnderline title':        '밑줄',
			'wikEdStrikethrough alt':      '취소선',
			'wikEdStrikethrough title':    '취소선',
			'wikEdNowiki alt':             '위키문법무시',
			'wikEdNowiki title':           '위키문법무시',
			'wikEdSuperscript alt':        '위 첨자',
			'wikEdSuperscript title':      '위 첨자',
			'wikEdSubscript alt':          '아래 첨자',
			'wikEdSubscript title':        '아래 첨자',
			'wikEdRef alt':                '주석 처리',
			'wikEdRef title':              '주석 처리할 부분을 드래그한 후 클릭(시프트키 누르고 클릭: 이름 붙인 주석)',
			'wikEdCase alt':               '대소문자',
			'wikEdCase title':             '드래그한 단어 중 첫 문자만 대문자로 바꾸거나 전부 대문자로 바꿀 수 있습니다',
			'wikEdSort alt':               '정렬',
			'wikEdSort title':             '목록을 알파벳 순서로 정렬합니다',
			'wikEdRedirect alt':           '넘겨주기',
			'wikEdRedirect title':         '모든 내용을 지우고 넘겨주기 링크를 작성합니다',
			'wikEdUndoAll alt':            '모두 되돌리기',
			'wikEdUndoAll title':          '미리 보기 전까지의 모든 편집을 취소합니다',
			'wikEdRedoAll alt':            '모두 다시 실행',
			'wikEdRedoAll title':          '되돌린 것을 모두 다시 실행합니다',
			
// formatting buttons, bottom row
			'wikEdWikiLink alt':           '내부 링크',
			'wikEdWikiLink title':         '위키 내부 링크',
			'wikEdWebLink alt':            '외부 링크',
			'wikEdWebLink title':          '외부 웹 링크',
			'wikEdHeading alt':            '제목',
			'wikEdHeading title':          '제목 단계를 높입니다 (시프트키 누르고 클릭: 단계를 내립니다)',
			'wikEdBulletList alt':         '점 목록',
			'wikEdBulletList title':       '점 목록을 만들거나 단계를 높입니다 (시프트키 누르고 클릭: 단계를 내립니다)',
			'wikEdNumberList alt':         '숫자 목록',
			'wikEdNumberList title':       '숫자 목록을 만들거나 단계를 높입니다 (시프트키 누르고 클릭: 단계를 내립니다)',
			'wikEdIndentList alt':         '들여쓰기 목록',
			'wikEdIndentList title':       '들여쓰기 목록을 만들거나 단계를 높입니다 (시프트키 누르고 클릭: 단계를 내립니다)',
			'wikEdDefinitionList alt':     '정의 목록',
			'wikEdDefinitionList title':   '정의 목록',
			'wikEdImage alt':              '그림',
			'wikEdImage title':            '그림을 추가합니다 (예: [[Image:파일이름.jpg|thumb|150px|설명]])',
			'wikEdTable alt':              '표',
			'wikEdTable title':            '표를 추가합니다',
			'wikEdReferences alt':         '주석 표시',
			'wikEdReferences title':       '주석 내용을 표시합니다 (시프트키 누르고 클릭: 주석 섹션 생성)',

// textify buttons
			'wikEdWikify alt':             '위키화',
			'wikEdWikify title':           '붙여넣은 내용을 위키화하고 구문 강조를 새로 고칩니다',
			'wikEdTextify alt':            '텍스트화',
			'wikEdTextify title':          '붙여넣은 내용을 일반 텍스트로 바꾸고 구문 강조를 새로 고칩니다 (shift-click: forced highlighting)',
			
// find and replace buttons, top row
			'wikEdFindAll alt':            '찾기',
			'wikEdFindAll title':          '문서 전체에서 찾습니다',
			'wikEdFindPrev alt':           '위로 찾기',
			'wikEdFindPrev title':         '위로 찾기',
			'wikEdFindSelect title':       '전에 찾았던 내용',
			'wikEdFindNext alt':           '아래로 찾기',
			'wikEdFindNext title':         '아래로 찾기',
			'wikEdJumpPrev alt':           '위로 찾기',
			'wikEdJumpPrev title':         '위로 찾기',
			'wikEdJumpNext alt':           '아래로 찾기',
			'wikEdJumpNext title':         '아래로 찾기',
			
// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         '모두 바꾸기',
			'wikEdReplaceAll title':       '문서 전체 또는 선택 부분의 글자를 바꿉니다',
			'wikEdReplacePrev alt':        '위로 바꾸기',
			'wikEdReplacePrev title':      '위로 바꾸기',
			'wikEdReplaceSelect title':    '전에 바꾸었던 내용',
			'wikEdReplaceNext alt':        '아래로 바꾸기',
			'wikEdReplaceNext title':      '아래로 바꾸기',
			'wikEdCaseSensitive alt':      '대소문자 구분',
			'wikEdCaseSensitive title':    '대소문자를 구분합니다',
			'wikEdRegExp alt':             '정규표현식 찾기',
			'wikEdRegExp title':           '정규표현식으로 찾습니다',
			'wikEdFindAhead alt':          '미리 찾기',
			'wikEdFindAhead title':        '입력하는 순간부터 찾습니다 (대소문자 구분하지 않고 찾습니다)',
			
// fix buttons, top row
			'wikEdFixBasic alt':           '기본 교정',
			'wikEdFixBasic title':         '빈칸, 빈줄 등을 교정합니다',
			'wikEdFixHtml alt':            'HTML 교정',
			'wikEdFixHtml title':          'HTML을 위키 구문으로 고칩니다',
			'wikEdFixCaps alt':            '대소문자 교정',
			'wikEdFixCaps title':          '제목과 목록의 대소문자를 교정합니다',
			'wikEdFixUnicode alt':         '유니코드 교정',
			'wikEdFixUnicode title':       '유니코드 문자를 교정합니다',
			'wikEdFixAll alt':             '모두 교정',
			'wikEdFixAll title':           '기본, HTML, 대소문자, 유니코드 교정을 모두 적용합니다',
			'wikEdFixRedirect alt':        'Fix redirects',
			'wikEdFixRedirect title':      'Fix redirects',
			
// fix buttons, bottom row
			'wikEdFixDashes alt':          '대시 교정',
			'wikEdFixDashes title':        '대시 교정',
			'wikEdFixPunct alt':           '문장부호 교정',
			'wikEdFixPunct title':         '문장부호 앞의 공백을 제거합니다',
			'wikEdFixMath alt':            '수식 교정',
			'wikEdFixMath title':          '수식 교정',
			'wikEdFixChem alt':            '화학식 교정',
			'wikEdFixChem title':          '화학식 교정',
			'wikEdFixUnits alt':           '단위 교정',
			'wikEdFixUnits title':         '단위 교정',
			'wikEdFixRegExTypo alt':       '틀린 글자 교정',
			'wikEdFixRegExTypo title':     'AutoWikiBrowser, RegExTypoFixer를 이용합니다',
			
// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, TEMPL]',
			'wikEdRefHide title':          'Toggle [REF] and [TEMPL] hiding',
			'wikEdRefButtonTooltip':       'Click to display hidden reference',
			'wikEdTemplButtonTooltip':     'Click to display hidden template',
			'wikEdCharEntityButtonTooltip': 'Click to display hidden character entity',
			'wikEdRefButtonShowTooltip':   'Click to hide reference',
			'wikEdTemplButtonShowTooltip': 'Click to hide template',
			'wikEdCharEntityButtonShowTooltip': 'Click to hide character entity',
			'wikEdTextZoom alt':           '글자 크기',
			'wikEdTextZoom title':         '편집창의 글자 크기를 바꿉니다 (시프트키 누르고 클릭: 반대 방향)',
			'wikEdClearHistory alt':       '기록 제거',
			'wikEdClearHistory title':     '찾기, 바꾸기, 편집요약 기록을 제거합니다',
			'wikEdScrollToPreview alt':    '미리보기 상자로',
			'wikEdScrollToPreview title':  '미리보기 상자로 이동',
			'wikEdScrollToEdit alt':       '편집창으로',
			'wikEdScrollToEdit title':     '편집창으로 이동',
			
// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           '버튼 보기/감추기',
			'wikEdUseWikEd title':         'wikEd 버튼을 보이게 하거나 감춥니다',
			'wikEdHighlightSyntax alt':    '구문 강조',
			'wikEdHighlightSyntax title':  '위키 구문을 강조합니다',
			'wikEdTableMode alt':          'Table mode',
			'wikEdTableMode title':        'Toggle table edit mode',
			'wikEdSource alt':             '소스',
			'wikEdCloseToolbar title':     '기본 툴바 감추기',
			'wikEdCloseToolbar alt':       '기본 툴바 감추기',
			'wikEdSource title':           '테스트를 위해 소스 코드를 보여줍니다',
			'wikEdUsing alt':              '자동편집요약',
			'wikEdUsing title':            '자동으로 wikEd를 사용했다는 편집요약을 남깁니다',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             '자동으로 wikEdDiff를 보여줍니다',
			'wikEdFullScreen alt':         '전체화면',
			'wikEdFullScreen title':       '편집창을 웹브라우저 창만큼 크게 합니다',
			
// summary buttons
			'wikEdClearSummary alt':       '편집 요약 지우기',
			'wikEdClearSummary title':     '편집 요약 지우기',
			'wikEdSummarySelect title':    '편집 요약 상용구',
			'wikEdPresetSummary': [
				'/* 제목 */ 편집내용.', '답변.', '도입부 고침.',
				'링크 고침.', '틀린 글자 고침.', '스팸 링크 제거.', 
				'문서 정리.', '글로벌세계대백과사전.',
				'분류 고침.', '삭제 신청.', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '[[:en:User:Cacycle/wikEd|wikEd]]를 사용해 편집함.',
			
// button title acceskey
			'alt-shift':                   'alt-shift-',

// submit buttons
			'wikEdLocalPreviewImg alt':    '미리보기 상자',
			'wikEdLocalPreview title':     '밑에 상자를 만들어 미리 보기',
			'wikEdLocalDiffImg alt':       '차이보기 상자',
			'wikEdLocalDiff title':        '밑에 상자를 만들어 차이 보기',
			'wikEdHelpPageLink':           ' | <a href="http://ko.wikipedia.org/wiki/위키백과:도구/wikEd/도움말" target="helpwindow">wikEd 도움말</a>',
			
// preview and changes buttons, top
			'wikEdClose alt':              '닫기',
			'wikEdClose title':            '미리보기 상자 닫기',
			'wikEdClose2 alt':             '닫기',
			'wikEdClose2 title':           '미리보기 상자 닫기',
			'wikEdScrollToPreview2 alt':   '미리보기 상자로',
			'wikEdScrollToPreview2 title': '미리보기 상자로 이동',
			'wikEdScrollToEdit2 alt':      '편집창으로',
			'wikEdScrollToEdit2 title':    '편집창으로 이동',
			
// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   '미리보기 상자로',
			'wikEdScrollToPreview3 title': '미리보기 상자로 이동',
			'wikEdScrollToEdit3 alt':      '편집창으로',
			'wikEdScrollToEdit3 title':    '편집창으로 이동',
			
// preview field
			'wikEdPreviewLoading':         '...',

// formatting functions
			'image filename':              '파일이름',
			'image width':                 '가로너비',
			'table caption':               '표 제목',
			'table heading':               '머리 내용',
			'table cell':                  '칸 내용',
			'redirect article link':       '문서 이름',
			
// fixing functions
			'External links':              '바깥 고리',
			'See also':                    '함께 보기',
			'References':                  '주석',
			
// language specific wiki code
			'wikicode Image':              '그림',
			'wikicode File':               '파일',
			'wikicode Category':           '분류',
			'wikicode Template':           '틀',
			'wikEdReferencesSection':      '\n== 주석 ==\n\n<references />\n',
			'talk page':                   'talk',
			'history page':                'history',
			'talk namespace':              'Talk',
			'talk namespace suffix':       '_talk',

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'TEMPL',
			
// shortened button texts
			'shortenedPreview':            '미리 보기',
			'shortenedChanges':            '차이 보기',
			
// follow link popup
			'followLink':                  '(컨트롤키-클릭)',
			'followLinkMac':               '(cmd-click)',
			
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
			'wikEdFilePreview':            'Image preview',

// from [[en:User:Cacycle/wikEdDiff.js]]
			'wikEdDiffButtonImg alt':      'wikEdDiff',
			'wikEdDiffButton title':       '바뀐 내용 확인하기',
			'wikEdDiffLoading':            '...'
			
}