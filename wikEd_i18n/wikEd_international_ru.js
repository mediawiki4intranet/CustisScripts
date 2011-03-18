/* ver RU_1.2 на основе версии http://en.wikipedia.org/w/index.php?title=User:Cacycle/wikEd_international_en.js&oldid=356781873
 
{{en:User:Cacycle/wikEd_template}}
 
This is the English translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].
 
<pre><nowiki> */
 
var wikEdText = {
 
// logo
            'wikEdLogo alt':               'wikEd',
            'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Нажмите для отключения',
            'wikEdLogo error alt':         'Ошибка в wikEd',
            'wikEdLogo error title':       'Ошибка при загрузке wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Нажмите для отключения',
            'wikEdLogo browser alt':       '(wikEd)',
            'wikEdLogo browser title':     'Браузер не поддерживается - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
            'wikEdLogo incompatible alt':  '(wikEd)',
            'wikEdLogo incompatible title': 'Несовместимый скрипт или гаджет "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
            'wikEdLogo disabled alt':      '(wikEd)',
            'wikEdLogo disabled title':    'Редактор wikEd {wikEdProgramVersion} ({wikEdProgramDate}) отключён. Нажмите для включения',
 
// top jumper
            'wikEdScrollToEdit4 alt':      'К ред.',
            'wikEdScrollToEdit4 title':    'Прокрутить к окну редактирования',
 
// button bar grip titles
            'wikEdGripFormat title':       'Панель форматирования (click - свернуть/развернуть)',
            'wikEdGripTextify title':      'Панель textify и wikify (click - свернуть/развернуть)',
            'wikEdGripCustom1 title':      'Панель пользователя1 (click - свернуть/развернуть)',
            'wikEdGripFind title':         'Панель поиска (click - свернуть/развернуть)',
            'wikEdGripFix title':          'Панель корректировок (click - свернуть/развернуть)',
            'wikEdGripCustom2 title':      'панель пользователя2 (click - свернуть/развернуть)',
            'wikEdGripControl title':      'Панель управления wikEd (click - свернуть/развернуть)',
 
// formatting buttons, top row
            'wikEdUndo alt':               'Отм.',
            'wikEdUndo title':             'Отмена',
            'wikEdRedo alt':               'Повт.',
            'wikEdRedo title':             'Повтор',
            'wikEdBold alt':               'Ж',
            'wikEdBold title':             'Полужирный',
            'wikEdItalic alt':             'К',
            'wikEdItalic title':           'Курсив',
            'wikEdUnderline alt':          'Ч',
            'wikEdUnderline title':        'Подчёркнутый',
            'wikEdStrikethrough alt':      'З',
            'wikEdStrikethrough title':    'Зачеркнутый',
            'wikEdNowiki alt':             'Nowiki',
            'wikEdNowiki title':           'Без вики-форматирования',
            'wikEdSuperscript alt':        'Надст.',
            'wikEdSuperscript title':      'Надстрочный знак',
            'wikEdSubscript alt':          'Подмтр.',
            'wikEdSubscript title':        'Подстрочный знак',
            'wikEdRef alt':                'Ref',
            'wikEdRef title':              'Примечание (shift-click: с тегом name)',
            'wikEdCase alt':               'Регистр',
            'wikEdCase title':             'Переключение регистра: нижний, первая заглавная, заглавные',
            'wikEdSort alt':               'Сорт.',
            'wikEdSort title':             'Сортировка строк по алфавиту',
            'wikEdRedirect alt':           'Redirect',
            'wikEdRedirect title':         'Создать редирект, удалить весь текст',
            'wikEdUndoAll alt':            'Отм. всё',
            'wikEdUndoAll title':          'Отменить все изменения',
            'wikEdRedoAll alt':            'Верн. всё',
            'wikEdRedoAll title':          'Вернуть все изменения',
 
// formatting buttons, bottom row
            'wikEdWikiLink alt':           'Ссылка',
            'wikEdWikiLink title':         'Вики-ссылка',
            'wikEdWebLink alt':            'Веб-ссылка',
            'wikEdWebLink title':          'Внешняя веб-ссылка',
            'wikEdHeading alt':            'Заголовок',
            'wikEdHeading title':          'Увеличить уровень заголовка (shift-click: уменьшить)',
            'wikEdBulletList alt':         '*-список',
            'wikEdBulletList title':       'Увеличить уровень маркированного списка (shift-click: уменьшить)',
            'wikEdNumberList alt':         '#-список',
            'wikEdNumberList title':       'Увеличить уровень нумерованного списка (shift-click: уменьшить)',
            'wikEdIndentList alt':         ':-cписок',
            'wikEdIndentList title':       'Увеличить отступы (shift-click: уменьшить)',
            'wikEdDefinitionList alt':     ';-список',
            'wikEdDefinitionList title':   'Список определений',
            'wikEdImage alt':              'Рис.',
            'wikEdImage title':            'Изображение',
            'wikEdTable alt':              'Табл.',
            'wikEdTable title':            'Таблица',
            'wikEdReferences alt':         'Прим.',
            'wikEdReferences title':       'Тег <references/> (shift-click: Раздел Примечания)',

// textify buttons
            'wikEdWikify alt':             'Викифи',
            'wikEdWikify title':           'Преобразовать выделенный текст в вики-код, обновить подсветку',
            'wikEdTextify alt':            'Textify',
            'wikEdTextify title':          'Преобразовать выделенный текст в простой текст, обновить подсветку (shift-click: принудительная подсветка)',
 
// find and replace buttons, top row
            'wikEdFindAll alt':            'Поиск всё',
            'wikEdFindAll title':          'Найти всё',
            'wikEdFindPrev alt':           'Поиск наз.',
            'wikEdFindPrev title':         'Поиск назад',
            'wikEdFindSelect title':       'Выбрать предыдущий поиск или перейти к заголовку',
            'wikEdFindNext alt':           'Поиск впер.',
            'wikEdFindNext title':         'Поиск вперед (shift-click: искать выделенное)',
            'wikEdJumpPrev alt':           'Выд. наз.',
            'wikEdJumpPrev title':         'Найти выделенный текст ранее',
            'wikEdJumpNext alt':           'Выд. впер.',
            'wikEdJumpNext title':         'Найти выделенный текст дальше',
 
// find and replace buttons, bottom row
            'wikEdReplaceAll alt':         'Зам. всё',
            'wikEdReplaceAll title':       'Заменить все совпадения во всём тексте или выделении',
            'wikEdReplacePrev alt':        'Зам. наз.',
            'wikEdReplacePrev title':      'Заменить предыдущее совпадение',
            'wikEdReplaceSelect title':    'Выбрать предыдущую замену',
            'wikEdReplaceNext alt':        'Заменить вперед (shift-click: искать выделение)',
            'wikEdReplaceNext title':      'Заменить следующее совпадение',
            'wikEdCaseSensitive alt':      'Уч. регистр',
            'wikEdCaseSensitive title':    'Искать, учитывая регистр',
            'wikEdRegExp alt':             'RegExp',
            'wikEdRegExp title':           'Искать поле как регулярное выражение',
            'wikEdFindAhead alt':          'Искать сразу',
            'wikEdFindAhead title':        'Искать по мере ввода (поиск без учета регистра и регулярных выражений)',
 
// fix buttons, top row
            'wikEdFixBasic alt':           'Баз. корр.',
            'wikEdFixBasic title':         'Скорректировать пробелы и пустые строки (также выполняется другими функциями корректировок)',
            'wikEdFixHtml alt':            'Корр. html',
            'wikEdFixHtml title':          'Преобразовать html-разметку в вики',
            'wikEdFixCaps alt':            'Корр. загл.',
            'wikEdFixCaps title':          'Преобразовать в заглавные первые буквы в заголовках и списках',
            'wikEdFixUnicode alt':         'Корр. Unicode',
            'wikEdFixUnicode title':       'Скорректировать представление символов Юникод',
            'wikEdFixAll alt':             'Корр. всё',
            'wikEdFixAll title':           'Корретировка базовая, html, заглавных и Юникода',
            'wikEdFixRedirect alt':        'Корр. редир.',
            'wikEdFixRedirect title':      '«Выпрямить» ссылки на перенаправления',
 
// fix buttons, bottom row
            'wikEdFixDashes alt':          'Корр. тире',
            'wikEdFixDashes title':        'Корректировка тире',
            'wikEdFixPunct alt':           'Корр. пункт.',
            'wikEdFixPunct title':         'Скорректировать пробелы перед знаками пунктуации',
            'wikEdFixMath alt':            'Корр. матем.',
            'wikEdFixMath title':          'Скорректировать математические символы',
            'wikEdFixChem alt':            'Корр. хим.',
            'wikEdFixChem title':          'Скорректировать химические формулы',
            'wikEdFixUnits alt':           'Корр. ед.изм.',
            'wikEdFixUnits title':         'Скорректировать единицы измерений',
            'wikEdFixRegExTypo alt':       'Корр. опеч.',
            'wikEdFixRegExTypo title':     'Корректировка опечаток, используя правила RegExTypoFixer программы AutoWikiBrowser',
 
// wikEd control buttons, top row
            'wikEdRefHide alt':            'Скрыть [REF, TEMPL]',
            'wikEdRefHide title':          'Переключить скрытие [REF] и [TEMPL]',
            'wikEdRefButtonTooltip':       'Показать скрытую ссылку',
            'wikEdTemplButtonTooltip':     'Показать скрытый шаблон',
            'wikEdCharEntityButtonTooltip': 'Показать скрытый набор символов',
            'wikEdRefButtonShowTooltip':   'Скрыть ссылку',
            'wikEdTemplButtonShowTooltip': 'Скрыть шаблон',
            'wikEdCharEntityButtonShowTooltip': 'Скрыть набор символов',
            'wikEdTextZoom alt':           'Масштаб текста',
            'wikEdTextZoom title':         'Увеличение масштаба текста по круга(shift-click: в обратном порядке)',
            'wikEdClearHistory alt':       'Очист. ист.',
            'wikEdClearHistory title':     'Очистить историю поисков, замен и описаний правок',
            'wikEdScrollToPreview alt':    'К просм.',
            'wikEdScrollToPreview title':  'Прокрутить к полю просмотра',
            'wikEdScrollToEdit alt':       'К ред.',
            'wikEdScrollToEdit title':     'Прокрутить к окну редактирования',
 
// wikEd control buttons, bottom row
            'wikEdUseWikEd alt':           'Исп. wikEd',
            'wikEdUseWikEd title':         'Переключение между классической областью редактирования и wikEd',
            'wikEdHighlightSyntax alt':    'Подств.',
            'wikEdHighlightSyntax title':  'Переключение автоматической подсветки синтаксиса',
            'wikEdSource alt':             'Source',
            'wikEdCloseToolbar title':     'Скрыть стандартную панель редактирования (не wikEd)',
            'wikEdCloseToolbar alt':       'Скр. панель',
            'wikEdSource title':           'Показать исходный код для целей тестирования (Show the source code for testing purposes)',
            'wikEdUsing alt':              'Используя',
            'wikEdUsing title':            'Автоматически добавлять \'\'…используя wikEd\'\' в описание правки',
            'wikEdDiff alt':               'wikEdDiff',
            'wikEdDiff title':             'Переключить автоматический улучшенный просмотр дифов / Toggle automatic improved diff view',
            'wikEdFullScreen alt':         'Полн. экр.',
            'wikEdFullScreen title':       'Переключиться в полноэкранный режим',
            'wikEdTableMode alt':          'Табл. реж.',
            'wikEdTableMode title':        'Переключиться в режим редактирования таблиц Toggle table edit mode',
 
// summary buttons
            'wikEdClearSummary alt':       'Очист. опис. изм.',
            'wikEdClearSummary title':     'Очистить поле описания изменений',
            'wikEdSummarySelect title':    'Выбрать предыдущее описание',
            'wikEdPresetSummary': [
                '/*  */ ', 'copyedit', 'ответ', 'исправлены ошибки', 'создана статья', 'введение переписано',
                'исправлены ссылки', 'исправлена типографика', 'убран спам', 'откачена тестовая правка',
                'откачен вандализм', 'форматирование исходного текста', '{wikEdUsing}'
            ],
            'wikEdSummaryUsing':           '…используя [[:en:User:Cacycle/wikEd|wikEd]]',
 
// button title acceskey
            'alt-shift':                   'alt-shift-',
 
// submit buttons
            'wikEdLocalPreviewImg alt':    'Просм. ниже',
            'wikEdLocalPreview title':     'Показать предварительный просмотр ниже',
            'wikEdLocalDiffImg alt':       'Изм. ниже',
            'wikEdLocalDiff title':        'Показать внесённые изменения ниже',
            'wikEdHelpPageLink':           ' | <a href="http://ru.wikipedia.org/wiki/User:IGW/wikEd_help" target="helpwindow">wikEd help</a>',
//            'wikEdHelpPageLink': ' | <a href="{wikEdHomeBaseUrl}wiki/User:Cacycle/wikEd_help" target="helpwindow">wikEd help</a>', // use full link without {wikEdHomeBaseUrl} if the page is not on the English Wikipedia

// preview and changes buttons, top
            'wikEdClose alt':              'Закрыть',
            'wikEdClose title':            'Закрыть окно предварительного просмотра',
            'wikEdClose2 alt':              'Закрыть',
            'wikEdClose2 title':           'Закрыть окно предварительного просмотра',
            'wikEdScrollToPreview2 alt':   'К просмотру',
            'wikEdScrollToPreview2 title': 'Прокрутить к полю просмотра',
            'wikEdScrollToEdit2 alt':      'К редакт.',
            'wikEdScrollToEdit2 title':    'Прокрутить к полю редактирования',
 
// preview and changes buttons, bottom
            'wikEdScrollToPreview3 alt':   'К просмотру',
            'wikEdScrollToPreview3 title': 'Прокрутить к полю просмотра',
            'wikEdScrollToEdit3 alt':      'К редакт.',
            'wikEdScrollToEdit3 title':    'Прокрутить к полю редактирования',
 
// preview field
            'wikEdPreviewLoading':         '...',
 
// formatting functions
            'image filename':              'ИмяФайла',
            'image width':                 'ширина',
            'table caption':               'название',
            'table heading':               'заголовок',
            'table cell':                  'ячейка',
            'redirect article link':       'ссылка на статью',
 

// fixing functions
            'External links':              'Ссылки',
            'See also':                    'См. также',
            'References':                  'Примечания',
 
// language specific wiki code
            'wikicode Image':              'Файл',
            'wikicode File':               'Файл',
            'wikicode Category':           'Категория',
            'wikicode Template':           'Шаблон',
            'wikEdReferencesSection':      '\n== Примечания ==\n{{примечания}}\n',
            'talk page':                   'обсуждение',
            'history page':                'история',
            'talk namespace':              'Обсуждение',
            'talk namespace suffix':       '_обсуждение',
 
// shortened button texts
            'shortenedPreview':            'Просмотр',
            'shortenedChanges':            'Изменения',

// follow link popup
            'followLink':                  '(ctrl-click)',
 
// error message popups
            'wikEdTableModeError':         'Таблица вики-кода содержит ошибки The table wikicode contains errors',
 
// auto updating
            'wikEdGreasemonkeyAutoUpdate': 'Обновление wikEd:\n\nДоступна новая версия GreaseMonkey-скрипта «wikEd».\n\n\nЕго можно загрузить из:\n\n{updateURL}',
 
// highlighting popups
            'wikEdHyphenDash':             'Стандартный дефис',
            'wikEdFigureDash':             'Цифровое тире',
            'wikEdEnDash':                 'Среднее тире (En)',
            'wikEdEmDash':                 'Длинное тире (Em)',
            'wikEdBarDash':                'Горизонтальная линия',
            'wikEdMinusDash':              'Знак минуса',
            'wikEdSoftHyphen':             'Мягкий перенос',
            'wikEdTab':                    'Табуляция',
            'wikEdEnSpace':                'Короткий пробел (En)',
            'wikEdEmSpace':                'Длинный пробел (Em)',
            'wikEdThinSpace':              'Тонкий пробел',
            'wikEdIdeographicSpace':       'Идеографический пробел',

// highlighting
            'wikEdSignature3':             'Подпись только с именем',
            'wikEdSignature4':             'Подпись с именем и датой',
            'wikEdSignature5':             'Подпись только с датой',

// highlighting errors
            'wikEdErrorHtmlUnknown':       'Не поддерживаемый тег HTML',
            'wikEdErrorBoldItalic':        'Неправильное оформление жирный / курсив',
            'wikEdErrorWrongClose':        'Закрывающий тег неверен - Close tag does not match',
            'wikEdErrorNoOpen':            'Нет закрывающего тега - Close tag has no match',
            'wikEdErrorNoHandler':         'Нет хендлера - No handler',
            'wikEdErrorNoClose':           'Нет открывающего тега - Open tag has no match',
            'wikEdErrorNewline':           'Открывающей тег закрыт с новой строки - Open tag closed by new line',
            'wikEdErrorTemplHeading':      'Заголовки в шаблонах игнорируются - Headings in templates are ignored',
            'wikEdErrorTemplParam':        'Теги шаблона/параметра не подходят - Template/parameter tags do not match',
            'wikEdErrorTemplParamAmbig':   'Теги шаблона/параметра не однозначны - Template/parameter tags are ambiguous',

// highlighting image preview
            'wikEdFilePreview':            'Просмотр изображения',
 
// from [[en:User:Cacycle/wikEdDiff.js]]
            'wikEdDiffButtonImg alt':      'wikEdDiff',
            'wikEdDiffButton title':       'Показать улучшенный просмотр дифов',
            'wikEdDiffLoading':            '...'
 
}