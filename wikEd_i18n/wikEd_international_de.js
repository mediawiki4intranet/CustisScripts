/*

{{en:User:Cacycle/wikEd_template}}

This is the German translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

<pre><nowiki> */

var wikEdText = {

// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} Deutsch ({wikEdProgramDate}) Klicken zum Deaktivieren',
			'wikEdLogo error alt':         'wikEd Fehler',
			'wikEdLogo error title':       'Ladefehler - wikEd {wikEdProgramVersion} Deutsch ({wikEdProgramDate}) Klick zum Ausschalten',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'Browser nicht unterstützt - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Inkompatibles Skript oder Gadget "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    'Ausgeschaltet - wikEd {wikEdProgramVersion} Deutsch ({wikEdProgramDate}) Klicken zum Anschalten',

// top jumper
			'wikEdScrollToEdit4 alt':      'Scrolle zur Bearbeitung',
			'wikEdScrollToEdit4 title':    'Scrolle zum Bearbeitungsfeld',

// button bar grip titles
			'wikEdGripFormat title':       'Formatierungs-Schaltflächen (Klicken zum Verbergen oder Zeigen)',
			'wikEdGripTextify title':      'Textifizieren und Wikifizieren (Klicken zum Verbergen oder Zeigen)',
			'wikEdGripCustom1 title':      'Angepasste Schaltflächen (Klicken zum Verbergen oder Zeigen)',
			'wikEdGripFind title':         'Suchen-Schaltflächen (Klicken zum Verbergen oder Zeigen)',
			'wikEdGripFix title':          'Autokorrektur-Schaltflächen (Klicken zum Verbergen oder Zeigen)',
			'wikEdGripCustom2 title':      'Angepasste Schaltflächen (Klicken zum Verbergen oder Zeigen)',
			'wikEdGripControl title':      'wikEd Kontroll-Schaltflächen (Klicken zum Verbergen oder Zeigen)',

// formatting buttons, top row
			'wikEdUndo alt':               'Rückgängig',
			'wikEdUndo title':             'Rückgängig',
			'wikEdRedo alt':               'Wiederherstellen',
			'wikEdRedo title':             'Wiederherstellen',
			'wikEdBold alt':               'fett',
			'wikEdBold title':             'Fettschrift',
			'wikEdItalic alt':             'kursiv',
			'wikEdItalic title':           'Kursivschrift',
			'wikEdUnderline alt':          'unterstrichen',
			'wikEdUnderline title':        'unterstrichener Text',
			'wikEdStrikethrough alt':      'durchgestrichen',
			'wikEdStrikethrough title':    'durchgestrichener Text',
			'wikEdNowiki alt':             'Nowiki',
			'wikEdNowiki title':           'ohne Wiki-Textauszeichnungs',
			'wikEdSuperscript alt':        'Hochgestellt',
			'wikEdSuperscript title':      'Hochgestellter Text',
			'wikEdSubscript alt':          'Tiefergestellt',
			'wikEdSubscript title':        'Tiefergestellter Text',
			'wikEdRef alt':                'Ref',
			'wikEdRef title':              'Einzelnachweis (mit Umschalttaste: benannter ref-Tag)',
			'wikEdCase alt':               'Referenz',
			'wikEdCase title':             'Wechsle zwischen Kleinbuchstaben, Anfangsgroßbuchstaben und Großbuchstaben',
			'wikEdSort alt':               'Sortierung',
			'wikEdSort title':             'Sortiere Zeilen alphabetisch',
			'wikEdRedirect alt':           'Weiterleitung',
			'wikEdRedirect title':         'Weiterleitung erstellen (löscht den gesamten Text)',
			'wikEdUndoAll alt':            'Alles Rückgängig',
			'wikEdUndoAll title':          'Mache alle Änderungen rückgängig',
			'wikEdRedoAll alt':            'Alles Wiederholen',
			'wikEdRedoAll title':          'Wiederhole alle Änderungen',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'Wikilink',
			'wikEdWikiLink title':         'interner Wikilink',
			'wikEdWebLink alt':            'Weblink',
			'wikEdWebLink title':          'Externer Weblink',
			'wikEdHeading alt':            'Überschrift',
			'wikEdHeading title':          'Erhöhe Überschriften-Grad (mit Umschalt: Verringerung)',
			'wikEdBulletList alt':         'Punkt-Liste',
			'wikEdBulletList title':       'Punkt-Liste',
			'wikEdNumberList alt':         'Erhöhe Nummer-Listen-Grad (mit Umschalt: Verringerung)',
			'wikEdNumberList title':       'Erhöhe Nummer-Listen-Grad (mit Umschalt: Verringerung)',
			'wikEdIndentList alt':         'Eingerückte Liste',
			'wikEdIndentList title':       'weiter einrücken (mit Umschalt: zurück)',
			'wikEdDefinitionList alt':     'Definitionsliste',
			'wikEdDefinitionList title':   'Definitionsliste',
			'wikEdImage alt':              'Bild',
			'wikEdImage title':            'Bild',
			'wikEdTable alt':              'Tabelle',
			'wikEdTable title':            'Tabelle',
			'wikEdReferences alt':         'Fußnoten',
			'wikEdReferences title':       'Fußnotenplatzierung (mit Umschalt: Fußnotenabschnitt)',

// textify buttons
			'wikEdWikify alt':             'Wikifizieren',
			'wikEdWikify title':           'Wandle eingefügten Inhalt zu Wikiquelltext, aktualisiere Hervorhebung',
			'wikEdTextify alt':            'Textifiziere',
			'wikEdTextify title':          'Wandle eingefügten Inhalt zu Klartext, aktualisiere Hervorhebung (shift-click: forced highlighting)',

// find and replace buttons, top row
			'wikEdFindAll alt':            'Finde Alle',
			'wikEdFindAll title':          'Finde alle Übereinstimmungen',
			'wikEdFindPrev alt':           'Finde Vorherige',
			'wikEdFindPrev title':         'Finde vorherige Übereinstimmung',
			'wikEdFindSelect title':       'Wähle eine vorherige Suche oder springe zu einer Überschrift',
			'wikEdFindNext alt':           'Finde Nächste',
			'wikEdFindNext title':         'Finde nächsten Treffer (mit Umschalt: finde Markierung)',
			'wikEdJumpPrev alt':           'Vorherige Auswahl',
			'wikEdJumpPrev title':         'Finde den ausgewählten Text (rückwärts)',
			'wikEdJumpNext alt':           'Nächste Auswahl',
			'wikEdJumpNext title':         'Finde den ausgewählten Text (vorwärts)',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'Ersetze alle',
			'wikEdReplaceAll title':       'Ersetze alle Übereinstimmungen im gesamten Text oder der Auswahl',
			'wikEdReplacePrev alt':        'Ersetze Vorherigen',
			'wikEdReplacePrev title':      'Ersetze vorherigen Treffer',
			'wikEdReplaceSelect title':    'Wähle eine vorherige Ersetzung',
			'wikEdReplaceNext alt':        'Ersetze nächsten Treffer (mit Umschalt: bekomme Auswahl)',
			'wikEdReplaceNext title':      'Ersetze Nächsten',
			'wikEdCaseSensitive alt':      'Groß-/Kleinschreibung berücksichtigen',
			'wikEdCaseSensitive title':    'Die Suche ist Groß- / Kleinschreibungs-abhängig',
			'wikEdRegExp alt':             'regulärer Ausdruck',
			'wikEdRegExp title':           'Das Suchfeld ist ein regulärer Ausdruck.',
			'wikEdFindAhead alt':          'Suche vorwärts',
			'wikEdFindAhead title':        'Suche vorwärts während des Tippens (ohne Berücksichtigung der Groß-/Kleinschreibung, keine regulären Ausdrücke)',

// fix buttons, top row
			'wikEdFixBasic alt':           'Korrigiere Grundlegendes',
			'wikEdFixBasic title':         'Korrigiere Leerzeilen, wird auch von anderen Korrekturfunktionen ausgeführt',
			'wikEdFixHtml alt':            'Korrigiere HTML',
			'wikEdFixHtml title':          'Korrigiere HTML zu Wikisyntax',
			'wikEdFixCaps alt':            'Korrigiere Großschreibung',
			'wikEdFixCaps title':          'Korrigiere Großschreibung in Überschriften und Listen',
			'wikEdFixUnicode alt':         'Korrigiere Unicode',
			'wikEdFixUnicode title':       'Korrigiere Unicode Schriftzeichen-Darstellung',
			'wikEdFixAll alt':             'Korrigiere alles',
			'wikEdFixAll title':           'Korrigiere Grundlegendes, HTML, Großschreibung und Unicode',
			'wikEdFixRedirect alt':        'Korrigiere Weiterleitungen',
			'wikEdFixRedirect title':      'Korrigiere Weiterleitungen',

// fix buttons, bottom row
			'wikEdFixDashes alt':          'Korrigiere Bindestriche',
			'wikEdFixDashes title':        'Korrigiere Bindestriche',
			'wikEdFixPunct alt':           'Korrigiere Zeichensetzung',
			'wikEdFixPunct title':         'Korrigiere Leerzeichen vor Zeichensetzung',
			'wikEdFixMath alt':            'Korrigiere Mathe',
			'wikEdFixMath title':          'Korrigiere mathematische Formeln',
			'wikEdFixChem alt':            'Korrigiere Chemie',
			'wikEdFixChem title':          'Korrigiere chemische Formeln',
			'wikEdFixUnits alt':           'Korrigiere Einheiten',
			'wikEdFixUnits title':         'Korrigiere Einheiten',
			'wikEdFixRegExTypo alt':       'Korrigiere Tippfehler und Rechtschreibung',
			'wikEdFixRegExTypo title':     'Korrigiere englische Rechtschreibung mit den AutoWikiBrowser RegExTypoFixer-Regeln',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, VORL]',
			'wikEdRefHide title':          '[REF] und [VORL] anzeigen/verstecken',
			'wikEdRefButtonTooltip':       'Anklicken um verstecke Einzelnachweise anzuzeigen',
			'wikEdTemplButtonTooltip':     'Anklicken um verstecke Vorlagen anzuzeigen',
			'wikEdCharEntityButtonTooltip': 'Anklicken um Vorlagen anzuzeigen',
			'wikEdRefButtonShowTooltip':   'Anklicken um Einzelnachweise zu verbergen',
			'wikEdTemplButtonShowTooltip': 'Anklicken um Vorlagen zu verbergen',
			'wikEdCharEntityButtonShowTooltip': 'Anklicken um Zeichen-Entität zu verbergen',
			'wikEdTextZoom alt':           'Textvergrößerung',
			'wikEdTextZoom title':         'zyklische Textvergrößerung (mit Umschalt: rückwärts)',
			'wikEdClearHistory alt':       'Chronik leeren',
			'wikEdClearHistory title':     'Säubere die Such-, Ersetz-, und Zusammenfassungs-Chronik',
			'wikEdScrollToPreview alt':    'zur Vorschau',
			'wikEdScrollToPreview title':  'zum Vorschaufeld springen',
			'wikEdScrollToEdit alt':       'zum Editierfeld',
			'wikEdScrollToEdit title':     'zum Editierfeld springen',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'Benutze wikEd',
			'wikEdUseWikEd title':         'Wechsle zwischen klassischen Textfeld und WikEd',
			'wikEdHighlightSyntax alt':    'Syntax',
			'wikEdHighlightSyntax title':  'Wechsle die automatische Syntaxhervorhebung',
			'wikEdTableMode alt':          'Tabellenmodus',
			'wikEdTableMode title':        'Wechseln zum Tabellenmodus',
			'wikEdSource alt':             'Quelltext',
			'wikEdCloseToolbar title':     'Schließe Editierleiste',
			'wikEdCloseToolbar alt':       'Schließe die Standard-(nicht-wikEd)-Editierleiste',
			'wikEdSource title':           'Zeige den Quelltext für Testzwecke an',
			'wikEdUsing alt':              'Verwendet',
			'wikEdUsing title':            'Fügt automatisch \'\'…wikEd verwendet\'\' zur Zusammenfassung',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Wechsle die automatische verbesserte Vergleichsansicht',
			'wikEdFullScreen alt':         'Vollbild',
			'wikEdFullScreen title':       'Wechsle in den Vollbildmodus',

// summary buttons
			'wikEdClearSummary alt':       'Lösche Zusammenfassung',
			'wikEdClearSummary title':     'Lösche das Zusammenfassungsfeld',
			'wikEdSummarySelect title':    'Wähle eine vorherige Zusammenfassung',
			'wikEdPresetSummary': [
				'/*  */ ', 'redigiert', 'geantwortet', 'Artikel angelegt', 'Einleitung bearbeitet',
				'Link korrigiert', 'Rechtschreibfehler', 'Linkspam entfernt', 'Test rückgängig gemacht',
				'Vandalismus rückgängig gemacht', 'Quelltext formatiert', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '…[[Wikipedia:Texteditor#wikEd]] verwendet',

// button title acceskey
			'alt-shift':                   'Alt-Umschalt-',

// submit buttons
			'wikEdLocalPreviewImg alt':    'Vorschau unten',
			'wikEdLocalPreview title':     'Zeige Vorschau unten',
			'wikEdLocalDiffImg alt':       'Änderungen unten',
			'wikEdLocalDiff title':        'Zeige änderungen unten',
			'wikEdHelpPageLink':           ' | <a href="http://de.wikipedia.org/wiki/Wikipedia:Texteditor#wikEd" target="helpwindow">wikEd Hilfe</a>',

// preview and changes buttons, top
			'wikEdClose alt':              'Schließen',
			'wikEdClose title':            'Schließe Vorschaufenster',
			'wikEdClose2 alt':             'Schließen',
			'wikEdClose2 title':           'Schließe Vorschaufenster',
			'wikEdScrollToPreview2 alt':   'Zur Vorschau',
			'wikEdScrollToPreview2 title': 'Springe zum Vorschaufeld',
			'wikEdScrollToEdit2 alt':      'Zum Bearbeitungsfeld',
			'wikEdScrollToEdit2 title':    'Springe zum Bearbeitungsfeld',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'Zur Vorschau',
			'wikEdScrollToPreview3 title': 'Springe zur Vorschau',
			'wikEdScrollToEdit3 alt':      'Zum Editieren',
			'wikEdScrollToEdit3 title':    'Springe zum Editieren',

// preview field
			'wikEdPreviewLoading':         'Lade Vorschau...',

// formatting functions
			'image filename':              'Dateiname',
			'image width':                 'Breite',
			'table caption':               'Beschriftung',
			'table heading':               'Überschrift',
			'table cell':                  'Zelle',
			'redirect article link':       'Artikelverknüpfung',

// fixing functions
			'External links':              'Weblinks',
			'See also':                    'Siehe auch',
			'References':                  'Einzelnachweise',

// language specific wiki code
			'wikicode Image':              'Bild',
			'wikicode File':               'Datei',
			'wikicode Category':           'Kategorie',
			'wikicode Template':           'Vorlage',
			'wikEdReferencesSection':      '\n== Einzelnachweise ==\n<references />\n',
			'talk page':                   'Diskussion',
			'history page':                'Versionsgeschichte',
			'talk namespace':              'Diskussion',
			'talk namespace suffix':       '_Diskussion',

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'VORL',

// shortened button texts
			'shortenedPreview':            'Vorschau',
			'shortenedChanges':            'Änderungen',

// follow link popup
			'followLink':                  '(Strg+Klick)',
			'followLinkMac':               '(Apfel+Klick)',

// error message popups
			'wikEdTableModeError':         'Die Tabellenwikisyntax enthält Fehler.',

// auto updating
			'wikEdGreasemonkeyAutoUpdate': 'wikEd Aktualisierung:\n\nEine neue Version des Benutzerskriptes "wikEd" ist verfügbar.\n\n\nEs wird von folgender Seite heruntergeladen:\n\n{updateURL}',

// highlighting popups
			'wikEdHyphenDash':             'Standard Bindestrich',
			'wikEdFigureDash':             'Gedankenstrich',
			'wikEdEnDash':                 'En Trennstrich',
			'wikEdEmDash':                 'Em Trennstrich',
			'wikEdBarDash':                'horizontale Linie',
			'wikEdMinusDash':              'Minuszeichen',
			'wikEdSoftHyphen':             'Weicher Bindestrich',
			'wikEdTab':                    'Tab',
			'wikEdEnSpace':                'En Leerzeichen',
			'wikEdEmSpace':                'Em Leerzeichen',
			'wikEdThinSpace':              'Dünnes Leerzeichen',
			'wikEdIdeographicSpace':       'ideographisches Leerzeichen',

// highlighting
			'wikEdSignature3':             'Anmeldung nur mit Benutzername',
			'wikEdSignature4':             'Signiere ausschließlich mit Benutzername und Datum',
			'wikEdSignature5':             'Signiere ausschließlich mit Datum',

// highlighting errors
			'wikEdErrorHtmlUnknown':       'Nicht unterstütztes HTML-tag',
			'wikEdErrorBoldItalic':        'Invalides fett / kursiv',
			'wikEdErrorWrongClose':        'Schließender Tag passt nicht',
			'wikEdErrorNoOpen':            'Schließender Tag hat kein Gegenstück',
			'wikEdErrorNoHandler':         'Kein Steuerungsprogramm',
			'wikEdErrorNoClose':           'Öffnender Tag hat kein Gegenstück',
			'wikEdErrorNewline':           'Öffnender Tag schließt mit neuer Zeile',
			'wikEdErrorTemplHeading':      'Überschriften in Vorlagen werden ignoriert',
			'wikEdErrorTemplParam':        'Vorlage/Parameter Tags passen nicht',
			'wikEdErrorTemplParamAmbig':   'Vorlage/Parameter Tags sind mehrdeutig',

// highlighting image preview
			'wikEdFilePreview':            'Bildvorschau',

// from [[en:User:Cacycle/wikEdDiff.js]]
			'wikEdDiffButtonImg alt':      'wikEdDiff',
			'wikEdDiffButton title':       'Zeige erweiterte Änderungsansicht',
			'wikEdDiffLoading':            'Lade Änderungsansicht...'

}