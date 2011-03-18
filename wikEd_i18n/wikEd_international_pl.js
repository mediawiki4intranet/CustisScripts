/*

{{en:User:Cacycle/wikEd_template}}

This is the Polish translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

<pre><nowiki> */

var wikEdText = {

// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Kliknij, aby dezaktywować',
			'wikEdLogo error alt':         'błąd wikEd',
			'wikEdLogo error title':       'Błąd ładowania – wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Kliknij, aby dezaktywować',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'Przeglądarka nieobsługiwana – wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Niezgodny skrypt lub dodatek „{wikEdParameter}” – wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    'Nieaktywne – wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Kliknij, aby uaktywnić',

// top jumper
			'wikEdScrollToEdit4 alt':      'Przewiń do edycji',
			'wikEdScrollToEdit4 title':    'Przewija do pola edycji',

// button bar grip titles
			'wikEdGripFormat title':       'Przyciski formatowania (kliknij, aby ukryć lub pokazać)',
			'wikEdGripTextify title':      'Przyciski poprawy tekstu i wikizacji (kliknij, aby ukryć lub pokazać)',
			'wikEdGripCustom1 title':      'Przyciski użytkownika (kliknij, aby ukryć lub pokazać)',
			'wikEdGripFind title':         'Przyciski szukania (kliknij, aby ukryć lub pokazać)',
			'wikEdGripFix title':          'Przyciski poprawiania (kliknij, aby ukryć lub pokazać)',
			'wikEdGripCustom2 title':      'Przyciski użytkownika (kliknij, aby ukryć lub pokazać)',
			'wikEdGripControl title':      'Przyciski sterowania wikEd (kliknij, aby ukryć lub pokazać)',

// formatting buttons, top row
			'wikEdUndo alt':               'Cofnij',
			'wikEdUndo title':             'Cofa ostatnią zmianę',
			'wikEdRedo alt':               'Przywróć',
			'wikEdRedo title':             'Przywraca ostatnią cofnięcie',
			'wikEdBold alt':               'Pogrubienie',
			'wikEdBold title':             'Pogrubienie tekstu',
			'wikEdItalic alt':             'Kursywa',
			'wikEdItalic title':           'Pochylenie tekstu',
			'wikEdUnderline alt':          'Podkreślenie',
			'wikEdUnderline title':        'Podkreślenie tekstu',
			'wikEdStrikethrough alt':      'Przekreślenie',
			'wikEdStrikethrough title':    'Przekreślenie tekstu',
			'wikEdNowiki alt':             'Nowiki',
			'wikEdNowiki title':           'Bez wiki-składni',
			'wikEdSuperscript alt':        'Indeks górny',
			'wikEdSuperscript title':      'Tekst w indeksie górnym',
			'wikEdSubscript alt':          'Indeks dolny',
			'wikEdSubscript title':        'Tekst w indeksie dolnym',
			'wikEdRef alt':                'Ref',
			'wikEdRef title':              'Przypis (shift-klik: znacznik z nazwą)',
			'wikEdCase alt':               'Wielkość',
			'wikEdCase title':             'Zmiana wielkości liter',
			'wikEdSort alt':               'Sortuj',
			'wikEdSort title':             'Sortuje wiersze alfabetycznie',
			'wikEdRedirect alt':           'Przekierowanie',
			'wikEdRedirect title':         'Tworzy przekierowanie, usuwa cały tekst',
			'wikEdUndoAll alt':            'Cofnij wszystko',
			'wikEdUndoAll title':          'Cofa wszystkie zmiany',
			'wikEdRedoAll alt':            'Przywróć wszystko',
			'wikEdRedoAll title':          'Przywraca wszystkie cofnięcia',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'Link',
			'wikEdWikiLink title':         'Link wewnętrzny',
			'wikEdWebLink alt':            'Link zew.',
			'wikEdWebLink title':          'Link zewnętrzny',
			'wikEdHeading alt':            'Nagłówek',
			'wikEdHeading title':          'Zwiększa poziom nagłówka (z shiftem: zmniejsza)',
			'wikEdBulletList alt':         'Punktory',
			'wikEdBulletList title':       'Zwiększa poziom punktorów (z shiftem: zmniejsza)',
			'wikEdNumberList alt':         'Numerowanie',
			'wikEdNumberList title':       'Zwiększa poziom numerowania (z shiftem: zmniejsza)',
			'wikEdIndentList alt':         'Wysunięcie',
			'wikEdIndentList title':       'Zwiększa wcięcie (z shiftem: zmniejsza)',
			'wikEdDefinitionList alt':     'Definicja',
			'wikEdDefinitionList title':   'Definicja',
			'wikEdImage alt':              'Grafika',
			'wikEdImage title':            'Grafika',
			'wikEdTable alt':              'Tabela',
			'wikEdTable title':            'Tabela',
			'wikEdReferences alt':         'Przypisy',
			'wikEdReferences title':       'Położenie przypisów (z shiftem: sekcja Przypisy)',

// textify buttons
			'wikEdWikify alt':             'Wikizacja',
			'wikEdWikify title':           'Konwertuje wklejony tekst do kodu wiki, aktualizuje podświetlanie',
			'wikEdTextify alt':            'Bez format.',
			'wikEdTextify title':          'Konwertuje wklejony tekst do tekstu bez formatowania, aktualizuje podświetlanie (shift-klik: wymuszone podświetlanie)',

// find and replace buttons, top row
			'wikEdFindAll alt':            'Znajdź wszędzie',
			'wikEdFindAll title':          'Wyszukuje wszędzie',
			'wikEdFindPrev alt':           'Znajdź poprz.',
			'wikEdFindPrev title':         'Wyszukuje poprzedni',
			'wikEdFindSelect title':       'Zaznacz poprzednie wyszukiwanie lub skocz do nagłówka',
			'wikEdFindNext alt':           'Znajdź nast.',
			'wikEdFindNext title':         'Wyszukuje następny (z shiftem: zaznacza)',
			'wikEdJumpPrev alt':           'Poprz. zazn.',
			'wikEdJumpPrev title':         'Szuka wyżej zaznaczonego tekstu',
			'wikEdJumpNext alt':           'Nast. zazn.',
			'wikEdJumpNext title':         'Szuka niżej zaznaczonego tekstu',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'Zamień wszędzie',
			'wikEdReplaceAll title':       'Zamienia wszystkie pasujące w całym tekście lub zaznaczeniu',
			'wikEdReplacePrev alt':        'Zam. poprz.',
			'wikEdReplacePrev title':      'Zamień poprzedni',
			'wikEdReplaceSelect title':    'Zaznacza poprzednią zamianę',
			'wikEdReplaceNext alt':        'Zam. nast.',
			'wikEdReplaceNext title':      'Zamienia następny (z shiftem: zaznacza)',
			'wikEdCaseSensitive alt':      'Wielk. lit.',
			'wikEdCaseSensitive title':    'Uwzględnia wielkość liter',
			'wikEdRegExp alt':             'RegExp',
			'wikEdRegExp title':           'Używa wyrażeń regularnych',
			'wikEdFindAhead alt':          'Natychmiast',
			'wikEdFindAhead title':        'Szuka podczas pisania (bez względu na wielkość, bez wyrażeń regularnych)',
			'wikEdFixRedirect alt':        'Popraw przekierowania',
			'wikEdFixRedirect title':      'Poprawia przekierowania',

// fix buttons, top row
			'wikEdFixBasic alt':           'Popraw drobne',
			'wikEdFixBasic title':         'Poprawia pustki i puste linie, używane przez pozostałe funkcje poprawiające',
			'wikEdFixHtml alt':            'Popraw html',
			'wikEdFixHtml title':          'Poprawia html na wikikod',
			'wikEdFixCaps alt':            'Popraw wielk.',
			'wikEdFixCaps title':          'Poprawia wielkość liter w nagłówkach i listach',
			'wikEdFixUnicode alt':         'Popraw Unikod',
			'wikEdFixUnicode title':       'Poprawia reprezentację znaków unikodu',
			'wikEdFixAll alt':             'Popraw wszys.',
			'wikEdFixAll title':           'Poprawia drobne, html, wielkość liter i unikod',
			'wikEdFixRegExTypo alt':       'Popraw lit.',
			'wikEdFixRegExTypo title':     'Poprawia literówki za pomocą reguł RegExTypoFixer AutoWikiBrowsera',

// fix buttons, bottom row
			'wikEdFixDashes alt':          'Popraw kreski',
			'wikEdFixDashes title':        'Poprawia kreski (pauzy, półpauzy, dywizy)',
			'wikEdFixPunct alt':           'Popraw wypunkt.',
			'wikEdFixPunct title':         'Poprawia spacje przed wypunktowaniami',
			'wikEdFixMath alt':            'Popraw mat.',
			'wikEdFixMath title':          'Poprawia wzory matematyczne',
			'wikEdFixChem alt':            'Popraw chem.',
			'wikEdFixChem title':          'Poprawia formuły chemiczne',
			'wikEdFixUnits alt':           'Popraw jedn.',
			'wikEdFixUnits title':         'Poprawia jednostki',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[PRZYP, SZABL]',
			'wikEdRefHide title':          'Przełącza ukrywanie [PRZYP] i [SZABL]',
			'wikEdRefButtonTooltip':       'Kliknij, by wyświetlić ukryty przypis',
			'wikEdTemplButtonTooltip':     'Kliknij, by wyświetlić ukryty szablon',
			'wikEdCharEntityButtonTooltip': 'Kliknij, by wyświetlić ukrytą encję znaku',
			'wikEdRefButtonShowTooltip':   'Kliknij, by ukryć przypis',
			'wikEdTemplButtonShowTooltip': 'Kliknij, by ukryć szablon',
			'wikEdCharEntityButtonShowTooltip': 'Kliknij, by ukryć encję znaku',
			'wikEdTextZoom alt':           'Przybliż. tekstu',
			'wikEdTextZoom title':         'Przybliżenie tekstu (cykliczne, z shiftem: odwrotnie)',
			'wikEdClearHistory alt':       'Wyczyść historię',
			'wikEdClearHistory title':     'Czyści historię szukania, zamian i opisu zmian',
			'wikEdScrollToPreview alt':    'Przewiń do podglądu',
			'wikEdScrollToPreview title':  'Przewija do pola podglądu',
			'wikEdScrollToEdit alt':       'Przewiń do edycji',
			'wikEdScrollToEdit title':     'Przewija do pola edycji',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'Użyj wikEd',
			'wikEdUseWikEd title':         'Przełącza między klasyczną przestrzenią tekstową a przestrzenią wikEd',
			'wikEdHighlightSyntax alt':    'Składnia',
			'wikEdHighlightSyntax title':  'Przełącza automatyczne podświetlanie składni',
			'wikEdTableMode alt':          'Tryb tabeli',
			'wikEdTableMode title':        'Przełącza tryb edycji tabeli',
			'wikEdSource alt':             'Źródło',
			'wikEdCloseToolbar title':     'Ukrywa standardowy pasek narzędzi',
			'wikEdCloseToolbar alt':       'Ukryj pasek',
			'wikEdSource title':           'Pokazuje kod źródłowy (do celów testowych)',
			'wikEdUsing alt':              'Za pomocą',
			'wikEdUsing title':            'Dodaje automatycznie „…za pomocą wikEd” do opisu zmian',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Przełącza automatyczny, ulepszony podgląd zmian',
			'wikEdFullScreen alt':         'Pełny ekran',
			'wikEdFullScreen title':       'Przełącza tryb pełnego ekranu',

// summary buttons
			'wikEdClearSummary alt':       'Wyczyść opis',
			'wikEdClearSummary title':     'Czyści pole opisu zmian',
			'wikEdSummarySelect title':    'Wybiera poprzedni opis zmian',
			'wikEdPresetSummary': [
				'/*  */ ', 'drukarskie', 'odpowiedź', 'utworzono artykuł', 'przepisanie wstępu',
				'poprawa linków', 'lit.', 'usunięcie spamlinków', 'przywrócenie poprzedniej wersji (test)',
				'przywrócenie poprzedniej wersji (wandalizm)', 'formatowanie tekstu', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '…za pomocą [[en:User:Cacycle/wikEd|wikEd]]',

// button title acceskey
			'alt-shift':                   'alt-shift-',

// submit buttons
			'wikEdLocalPreviewImg alt':    'Podgląd poniżej',
			'wikEdLocalPreview title':     'Pokazuje poniżej efekty edycji przed zapisaniem zmian!',
			'wikEdLocalDiffImg alt':       'Zmiany poniżej',
			'wikEdLocalDiff title':        'Pokazuje poniżej zmiany dokonane w tekście.',
			'wikEdHelpPageLink':           ' | <a href="{wikEdHomeBaseUrl}wiki/User:Cacycle/wikEd_help" target="helpwindow">Pomoc wikEd</a>', // use full link without {wikEdHomeBaseUrl} if the page is not on the English Wikipedia

// preview and changes buttons, top
			'wikEdClose alt':              'Zamknij',
			'wikEdClose title':            'Zamyka podgląd',
			'wikEdClose2 alt':             'Zamknij',
			'wikEdClose2 title':           'Zamyka podgląd',
			'wikEdScrollToPreview2 alt':   'Przewiń do podglądu',
			'wikEdScrollToPreview2 title': 'Przewija do pola podglądu',
			'wikEdScrollToEdit2 alt':      'Przewiń do edycji',
			'wikEdScrollToEdit2 title':    'Przewija do pola edycji',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'Przewiń do podglądu',
			'wikEdScrollToPreview3 title': 'Przewija do pola podglądu',
			'wikEdScrollToEdit3 alt':      'Przewiń do edycji',
			'wikEdScrollToEdit3 title':    'Przewija do pola edycji',

// preview field
			'wikEdPreviewLoading':         '…',

// formatting functions
			'image filename':              'filename',
			'image width':                 'width',
			'table caption':               'caption',
			'table heading':               'heading',
			'table cell':                  'cell',
			'redirect article link':       'article link',

// fixing functions
			'External links':              'Linki zewnętrzne',
			'See also':                    'Zobacz też',
			'References':                  'Przypisy',

// language specific wiki code
			'wikicode Image':              'Plik',
			'wikicode File':               'Plik',
			'wikicode Category':           'Kategoria',
			'wikicode Template':           'Szablon',
			'wikEdReferencesSection':      '\n{{Przypisy}}\n',
			'talk page':                   'dyskusja',
			'history page':                'historia',
			'talk namespace':              'Dyskusja',
			'talk namespace suffix':       '_talk',

// hiding buttons
			'hideRef':                     'PRZYP',
			'hideTempl':                   'SZABL',

// shortened button texts
			'shortenedPreview':            'Podgląd',
			'shortenedChanges':            'Zmiany',

// follow link popup
			'followLink':                  '(Ctrl+klik)',
			'followLinkMac':               '(Cmd+klik)',

// error message popups
			'wikEdTableModeError':         'Wikikod tabeli zawiera błędy',

// auto updating
			'wikEdGreasemonkeyAutoUpdate': 'Aktualizacja wikEd:\n\nDostępna jest nowa wersja skryptu GreaseMonkey „wikEd”.\n\n\nMożna ją pobrać z:\n\n{updateURL}',

// highlighting popups
			'wikEdHyphenDash':             'Dywiz (łącznik)',
			'wikEdFigureDash':             'Kreska liczbowa',
			'wikEdEnDash':                 'Półpauza',
			'wikEdEmDash':                 'Pauza',
			'wikEdBarDash':                'Kreska pozioma',
			'wikEdMinusDash':              'Znak odejmowania',
			'wikEdSoftHyphen':             'Miękki łącznik',
			'wikEdTab':                    'Tabulator',
			'wikEdEnSpace':                'Średni odstęp',
			'wikEdEmSpace':                'Długi odstęp',
			'wikEdThinSpace':              'Krótki odstęp',
			'wikEdIdeographicSpace':       'Odstęp ideograficzny',

// highlighting
			'wikEdSignature3':             'Podpisz tylko nazwą',
			'wikEdSignature4':             'Podpisz nazwą i datą',
			'wikEdSignature5':             'Podpisz tylko datą',

// highlighting errors
			'wikEdErrorHtmlUnknown':       'Nieobsługiwany znacznik HTML',
			'wikEdErrorBoldItalic':        'Nieprawidłowe pogrubienie/kursywa',
			'wikEdErrorWrongClose':        'Błędna para dla znacznika zamykającego',
			'wikEdErrorNoOpen':            'Brak pary dla znacznika zamykającego',
			'wikEdErrorNoHandler':         'Brak uchwytu',
			'wikEdErrorNoClose':           'Brak pary dla znacznika otwierającego',
			'wikEdErrorNewline':           'Znacznik otwierający zamknięty nowym wierszem',
			'wikEdErrorTemplHeading':      'Nagłówki w szablonach są ignorowane',
			'wikEdErrorTemplParam':        'Niepasujące znaczniki szablonu/parametrów',
			'wikEdErrorTemplParamAmbig':   'Niejednoznaczne znaczniki szablonu/parametrów',

// highlighting image preview
			'wikEdFilePreview':            'Podgląd obrazu',

// from [[en:User:Cacycle/wikEdDiff.js]]
			'wikEdDiffButtonImg alt':      'wikEdDiff',
			'wikEdDiffButton title':       'Pokaż ulepszony podgląd zmian',
			'wikEdDiffLoading':            '…'

}