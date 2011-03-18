/*

{{en:User:Cacycle/wikEd_template}}

This is the Vietnamese translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

Đây là bản dịch tiếng Việt của chương trình mở rộng trang soạn thảo MediaWiki '''[[User:Cacycle/wikEd|wikEd]]''' (cập nhật mới nhất của phiên bản 0.9.91).

<pre><nowiki> */

var wikEdText = {

// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Nhấn chuột để tắt',
			'wikEdLogo error alt':         'wikEd bị lỗi',
			'wikEdLogo error title':       'Lỗi khi tải - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Nhấn chuột để tắt',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'Trình duyệt không hỗ trợ - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Mã kịch bản hoặc công cụ đa năng không tương thích "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdFixRedirect alt':        'Sửa đổi hướng',
			'wikEdFixRedirect title':      'Sửa đổi hướng',
			'wikEdLogo disabled title':    'Đã tắt - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Nhấn chuột để kích hoạt',

// top jumper
			'wikEdScrollToEdit4 alt':      'Di chuyển tới soạn thảo',
			'wikEdScrollToEdit4 title':    'Di chuyển tới vùng soạn thảo',

// button bar grip titles
			'wikEdGripFormat title':       'Nhóm nút định dạng (nhấp chuột để ẩn hoặc hiện)',
			'wikEdGripTextify title':      'Nhóm nút chữ hóa hoặc wiki hóa (nhấp chuột để ẩn hoặc hiện)',
			'wikEdGripCustom1 title':      'Nhóm nút tùy chỉnh (nhấp chuột để ẩn hoặc hiện)',
			'wikEdGripFind title':         'Nhóm nút tìm kiếm (nhấp chuột để ẩn hoặc hiện)',
			'wikEdGripFix title':          'Nhóm nút chỉnh sửa (nhấp chuột để ẩn hoặc hiện)',
			'wikEdGripCustom2 title':      'Nhóm nút tùy chỉnh (nhấp chuột để ẩn hoặc hiện)',
			'wikEdGripControl title':      'Nhóm nút điều khiển wikEd (nhấp chuột để ẩn hoặc hiện)',

// formatting buttons, top row
			'wikEdUndo alt':               'Hồi sửa',
			'wikEdUndo title':             'Phục hồi',
			'wikEdRedo alt':               'Tái sửa',
			'wikEdRedo title':             'Làm lại',
			'wikEdBold alt':               'Bold',
			'wikEdBold title':             'Chữ đậm',
			'wikEdItalic alt':             'Xiên',
			'wikEdItalic title':           'Chữ xiên',
			'wikEdUnderline alt':          'Gạch dưới',
			'wikEdUnderline title':        'Chữ gạch dưới',
			'wikEdStrikethrough alt':      'Gạch ngang',
			'wikEdStrikethrough title':    'Chữ gạch ngang',
			'wikEdNowiki alt':             'Không wiki',
			'wikEdNowiki title':           'Chữ không theo mã wiki',
			'wikEdSuperscript alt':        'Chữ trên',
			'wikEdSuperscript title':      'Chữ trên',
			'wikEdSubscript alt':          'Chữ dưới',
			'wikEdSubscript title':        'Chữ dưới',
			'wikEdRef alt':                'Tham khảo',
			'wikEdRef title':              'Tham khảo trong văn bản (shift-nhấp chuột: thẻ có tên)',
			'wikEdCase alt':               'Kiểu chữ',
			'wikEdCase title':             'Thay đổi giữa chữ thường, chữ in đầu tiên, và chữ in toàn bộ',
			'wikEdSort alt':               'Sắp xếp',
			'wikEdSort title':             'Sắp các hàng theo vần',
			'wikEdRedirect alt':           'Chuyển hướng',
			'wikEdRedirect title':         'Tạo chuyển hướng, xóa toàn bộ văn bản',
			'wikEdUndoAll alt':            'Hồi sửa tất cả',
			'wikEdUndoAll title':          'Phục hồi toàn bộ các thay đổi',
			'wikEdRedoAll alt':            'Tái sửa tất cả',
			'wikEdRedoAll title':          'Làm lại tất cả các thay đổi',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'Liên kết',
			'wikEdWikiLink title':         'Liên kết wiki',
			'wikEdWebLink alt':            'Liên kết web',
			'wikEdWebLink title':          'Liên kết web ra ngoài',
			'wikEdHeading alt':            'Tựa đề',
			'wikEdHeading title':          'Tăng cấp tựa đề (shift-nhấp chuột: giảm)',
			'wikEdBulletList alt':         'Danh sách chấm',
			'wikEdBulletList title':       'Tăng cấp danh sách dùng dấu chấm (shift-nhấp chuột: giảm)',
			'wikEdNumberList alt':         'Danh sách số',
			'wikEdNumberList title':       'Tăng cấp danh sách dùng số (shift-nhấp chuột: giảm)',
			'wikEdIndentList alt':         'Vô hàng',
			'wikEdIndentList title':       'Tăng cấp vô hàng (shift-nhấp chuột: giảm)',
			'wikEdDefinitionList alt':     'Danh sách định nghĩa',
			'wikEdDefinitionList title':   'Danh sách định nghĩa',
			'wikEdImage alt':              'Hình',
			'wikEdImage title':            'Hình ảnh',
			'wikEdTable alt':              'Bảng',
			'wikEdTable title':            'Bảng biểu',
			'wikEdReferences alt':         'Tham khảo',
			'wikEdReferences title':       'Vị trí tham khảo (shift-nhấp chuột: Tham khảo đề mục)',

// textify buttons
			'wikEdWikify alt':             'Wiki hóa',
			'wikEdWikify title':           'Chuyển nội dung đã dán thành mã wiki, cập nhật tô màu',
			'wikEdTextify alt':            'Chữ hóa',
			'wikEdTextify title':          'Chuyển nội dung đã dán thành ký tự thuần, cập nhật tô màu (shift-click: forced highlighting)',

// find and replace buttons, top row
			'wikEdFindAll alt':            'Tìm tất cả',
			'wikEdFindAll title':          'Tìm tất cả các mẫu trùng',
			'wikEdFindPrev alt':           'Tìm ra trước',
			'wikEdFindPrev title':         'Tìm mẫu trùng phía trước',
			'wikEdFindSelect title':       'Chọn một lần tìm kiếm trước hoặc đi đến một tựa đề',
			'wikEdFindNext alt':           'Tìm ra sau',
			'wikEdFindNext title':         'Tìm mẫu trùng phía sau (shift-nhấp chuột: bôi để chọn)',
			'wikEdJumpPrev alt':           'Đã chọn ở trước',
			'wikEdJumpPrev title':         'Tìm trong vùng đã chọn ở trước',
			'wikEdJumpNext alt':           'Đã chọn ở sau',
			'wikEdJumpNext title':         'Tìm trong vùng đã chọn ở sau',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'Thay tất cả',
			'wikEdReplaceAll title':       'Thay thế toàn bộ các so trùng trong toàn văn bản hoặc đoạn đã chọn',
			'wikEdReplacePrev alt':        'Thay ở trước',
			'wikEdReplacePrev title':      'Thay thế mẫu trùng ở trước',
			'wikEdReplaceSelect title':    'Chọn một thay thế ở trước',
			'wikEdReplaceNext alt':        'Thay ở sau (shift-nhấp chuột: chọn hết)',
			'wikEdReplaceNext title':      'Thay thế mẫu trùng ở sau',
			'wikEdCaseSensitive alt':      'Phân biệt hoa thường',
			'wikEdCaseSensitive title':    'Tìm kiếm là phân biệt chữ hoa thường',
			'wikEdRegExp alt':             'RegExp',
			'wikEdRegExp title':           'Vùng tìm kiếm là biểu thức chính quy',
			'wikEdFindAhead alt':          'Tìm ngay',
			'wikEdFindAhead title':        'Tìm ngay khi bạn gõ (tìm không hoa thường, không regexp)',

// fix buttons, top row
			'wikEdFixBasic alt':           'Sửa cơ bản',
			'wikEdFixBasic title':         'Sửa các dòng trống, có thể làm bằng các hàm sửa khác',
			'wikEdFixHtml alt':            'Sửa html',
			'wikEdFixHtml title':          'Sửa html thành mã wiki',
			'wikEdFixCaps alt':            'Sửa chữ hoa',
			'wikEdFixCaps title':          'Sửa viết hoa thường trong tiêu đề và danh sách',
			'wikEdFixUnicode alt':         'Sửa Unicode',
			'wikEdFixUnicode title':       'Sửa trình bày ký tự Unicode',
			'wikEdFixAll alt':             'Sửa tất cả',
			'wikEdFixAll title':           'Sửa cơ bản, html, viết hoa, và Unicode',
			'wikEdFixRedirect alt':        'Sửa đổi hướng',
			'wikEdFixRedirect title':      'Sửa đổi hướng',

// fix buttons, bottom row
			'wikEdFixDashes alt':          'Sửa dấu ngang',
			'wikEdFixDashes title':        'Sửa dấu gạch ngang',
			'wikEdFixPunct alt':           'Sửa dấu câu',
			'wikEdFixPunct title':         'Sửa khoảng cách trước dấu câu',
			'wikEdFixMath alt':            'Sửa toán',
			'wikEdFixMath title':          'Sửa công thức toán',
			'wikEdFixChem alt':            'Sửa hóa',
			'wikEdFixChem title':          'Sửa công thức hóa học',
			'wikEdFixUnits alt':           'Sửa đơn vị',
			'wikEdFixUnits title':         'Sửa đơn vị',
			'wikEdFixRegExTypo alt':       'Sửa gõ sai',
			'wikEdFixRegExTypo title':     'Sửa gõ sai dùng quy luật AutoWikiBrowser RegExTypoFixer',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, TEMPL]',
			'wikEdRefHide title':          'Chuyển ẩn giữa [REF] và [TEMPL]',
			'wikEdRefButtonTooltip':       'Nhấn để hiển thị chú thích ẩn',
			'wikEdTemplButtonTooltip':     'Nhấn để hiển thị bản mẫu ẩn',
			'wikEdCharEntityButtonTooltip': 'Nhấn để hiển thị thể ký tự ẩn',
			'wikEdRefButtonShowTooltip':   'Nhấn để ẩn chú thích',
			'wikEdTemplButtonShowTooltip': 'Nhấn để ẩn bản mẫu',
			'wikEdCharEntityButtonShowTooltip': 'Nhấn để ẩn thể ký tự',
			'wikEdTextZoom alt':           'Phóng chữ',
			'wikEdTextZoom title':         'Phóng chữ theo vòng (shift-nhấp chuột: đảo ngược)',
			'wikEdClearHistory alt':       'Xóa lịch sử',
			'wikEdClearHistory title':     'Xóa lịch sử tìm kiếm, thay thế, và tóm tắt',
			'wikEdScrollToPreview alt':    'Đến xem thử',
			'wikEdScrollToPreview title':  'Di chuyển đến vùng xem thử',
			'wikEdScrollToEdit alt':       'Đến soạn thảo',
			'wikEdScrollToEdit title':     'Di chuyển đến vùng soạn thảo',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'Dùng wikEd',
			'wikEdUseWikEd title':         'Thay đổi giữa vùng văn bản thường và wikiEd',
			'wikEdHighlightSyntax alt':    'Cú pháp',
			'wikEdHighlightSyntax title':  'Thay đổi giữa tô màu cú pháp',
			'wikEdTableMode alt':          'Chế độ bảng biểu',
			'wikEdTableMode title':        'Chuyển đổi chế độ sửa bảng biểu',
			'wikEdSource alt':             'Nguồn',
			'wikEdCloseToolbar title':     'Đóng thanh công cụ chuẩn không phải wikiEd',
			'wikEdCloseToolbar alt':       'Đóng thanh công cụ',
			'wikEdSource title':           'Xem mã nguồn để kiểm tra',
			'wikEdUsing alt':              'Dùng',
			'wikEdUsing title':            'Tự động thêm \'\'…dùng wikEd\'\' để tóm tắt',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Thay đổi giữa góc nhìn so sánh tự động',
			'wikEdFullScreen alt':         'Toàn trang',
			'wikEdFullScreen title':       'Thay đổi giữa chế độ toàn trang',

// button title acceskey
			'alt-shift':                   'alt-shift-',

// summary buttons
			'wikEdClearSummary alt':       'Xóa tóm tắt',
			'wikEdClearSummary title':     'Xóa vùng tóm tắt',
			'wikEdSummarySelect title':    'Chọn một tóm tắt đã có',
			'wikEdPresetSummary': [
				'/*  */ ', 'sửa chữa', 'trả lời', 'tạo bài mới', 'viết lại phần giới thiệu',
				'sửa liên kết', 'sửa chính tả', 'bỏ liên kết spam', 'lùi sửa đổi linh tinh',
				'lùi phá hoại', 'sửa định dạng', '{wikEdUsing}'
        		],
			'wikEdSummaryUsing':           '…dùng [[en:User:Cacycle/wikEd|wikEd]]',

// submit buttons
			'wikEdLocalPreviewImg alt':    'Xem thử ở dưới',
			'wikEdLocalPreview title':     'Hiện xem thử ở dưới',
			'wikEdLocalDiffImg alt':       'Thay đổi ở dưới',
			'wikEdLocalDiff title':        'Hiện các thay đổi ở dưới',
			'wikEdHelpPageLink':           ' | <a href="{wikEdHomeBaseUrl}wiki/User:Cacycle/wikEd_help" target="helpwindow">trợ giúp wikEd</a>', // use full link without {wikEdHomeBaseUrl} if the page is not on the English Wikipedia

// preview and changes buttons, top
			'wikEdClose alt':              'Đóng',
			'wikEdClose title':            'Đóng hộp xem thử',
			'wikEdClose2 alt':             'Đóng',
			'wikEdClose2 title':           'Đóng hộp xem thử',
			'wikEdScrollToPreview2 alt':   'Đến xem thử',
			'wikEdScrollToPreview2 title': 'Đi đến vùng xem thử',
			'wikEdScrollToEdit2 alt':      'Đến soạn thảo',
			'wikEdScrollToEdit2 title':    'Đi đến vùng soạn thảo',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'Đến xem thử',
			'wikEdScrollToPreview3 title': 'Đi đến vùng xem thử',
			'wikEdScrollToEdit3 alt':      'Đến soạn thảo',
			'wikEdScrollToEdit3 title':    'Đi đến vùng soạn thảo',

// preview field
			'wikEdPreviewLoading':         '...',

// formatting functions
			'image filename':              'tên tập tin',
			'image width':                 'rộng',
			'table caption':               'chú thích',
			'table heading':               'tựa đề',
			'table cell':                  'ô',
			'redirect article link':       'liên kết bài viết',

// fixing functions
			'External links':              'Liên kết ngoài',
			'See also':                    'Xem thêm',
			'References':                  'Tham khảo',

// language specific wiki code
			'wikicode Image':              'Image',
			'wikicode File':               'File',
			'wikicode Category':           'Category',
			'wikicode Template':           'Template',
			'wikEdReferencesSection':      '\n== Tham khảo ==\n\n{{reflist}}\n',
			'talk page':                   'talk',
			'history page':                'history',
			'talk namespace':              'Talk',
			'talk namespace suffix':       '_talk',

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'TEMPL',

// shortened button texts
			'shortenedPreview':            'Xem thử',
			'shortenedChanges':            'Thay đổi',

// follow link popup
			'followLink':                  '(Ctrl-chuột)',
			'followLinkMac':               '(cmd-chuột)',

// error message popups
			'wikEdTableModeError':         'Mã của bảng có lỗi',

// auto updating
			'wikEdGreasemonkeyAutoUpdate': 'Cập nhật wikEd:\n\nĐã có phiên bản mới của mã "wikEd" cho GreaseMonkey.\n\n\nTải về tại:\n\n{updateURL}',

// highlighting popups
			'wikEdHyphenDash':             'Gạch ngang chuẩn',
			'wikEdFigureDash':             'Gạch ngang dài',
			'wikEdEnDash':                 'Gạch ngang en',
			'wikEdEmDash':                 'Gạch ngang em',
			'wikEdBarDash':                'Thanh ngang',
			'wikEdMinusDash':              'Dấu trừ',
			'wikEdSoftHyphen':             'Gạch mềm',
			'wikEdTab':                    'Tab',
			'wikEdEnSpace':                'Khoảng cách en',
			'wikEdEmSpace':                'Khoảng cách em',
			'wikEdThinSpace':              'Khoảng cách hẹp',
			'wikEdIdeographicSpace':       'Khoảng cách chữ ghi ý',

// highlighting
			'wikEdSignature3':             'Chữ ký chỉ có tên',
			'wikEdSignature4':             'Chữ ký có tên và ngày',
			'wikEdSignature5':             'Chữ ký chỉ có ngày',

// highlighting errors
			'wikEdErrorHtmlUnknown':       'Thẻ HTML không được hỗ trợ',
			'wikEdErrorBoldItalic':        'Đậm / nghiêng không hợp lệ',
			'wikEdErrorWrongClose':        'Không trùng thẻ đóng',
			'wikEdErrorNoOpen':            'Thẻ đóng không có thẻ mở',
			'wikEdErrorNoHandler':         'Không có thành phần xử lý',
			'wikEdErrorNoClose':           'Thẻ mở không có thẻ đóng',
			'wikEdErrorNewline':           'Xuống hàng sau thẻ mở',
			'wikEdErrorTemplHeading':      'Tựa đề trong bản mẫu bị bỏ qua',
			'wikEdErrorTemplParam':        'Thẻ bản mẫu/thông số không khớp',
			'wikEdErrorTemplParamAmbig':   'Thẻ bản mẫu/thông số gây nhập nhằng',

// highlighting image preview
			'wikEdFilePreview':            'Xem thử hình',

// from [[en:User:Cacycle/wikEdDiff.js]]
			'wikEdDiffButtonImg alt':      'wikEdDiff',
			'wikEdDiffButton title':       'Hiển thị xem khác nhau nâng cao',
			'wikEdDiffLoading':            '...'

}