/*

{{en:User:Cacycle/wikEd_template}}

This is an Spanish translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

Esta es una traducción al español del script de edición de páginas '''[[User:Cacycle/wikEd|wikEd]]''' (actualizado para la versión 0.9.91). 
Por favor mira las instrucciones de las traducciones en  [[User:Cacycle/wikEd international]].


<pre><nowiki> */

var wikEdText = {

// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Click para deshabilitar',
			'wikEdLogo error alt':         'wikEd error',
			'wikEdLogo error title':       'Error al cargar - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Click para deshabilitar',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'Navagador no soportado - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Incompatible script or gadget "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    'Deshabilitado - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Click para habilitar',

// top jumper
			'wikEdScrollToEdit4 alt':      'Ir a editar',
			'wikEdScrollToEdit4 title':    'Ir al campo de edición',

// button bar grip titles
			'wikEdGripFormat title':       'Botones de formato (click para mostrar o esconder)',
			'wikEdGripTextify title':      'Textify and wikify buttons (click to hide or show)',
			'wikEdGripCustom1 title':      'Botones personalizados (click para mostrar o esconder)',
			'wikEdGripFind title':         'Botones de encontrar (click para mostrar o esconder)',
			'wikEdGripFix title':          'Botones de arreglar (click para mostrar o esconder)',
			'wikEdGripCustom2 title':      'Botones personalizados (click para mostrar o esconder)',
			'wikEdGripControl title':      'Botones de control de wikiEd (click para mostrar o esconder)',

// formatting buttons, top row
			'wikEdUndo alt':               'Deshacer',
			'wikEdUndo title':             'Deshacer',
			'wikEdRedo alt':               'Rehacer',
			'wikEdRedo title':             'Rehacer',
			'wikEdBold alt':               'Bold',
			'wikEdBold title':             'Negritas',
			'wikEdItalic alt':             'Cursiva',
			'wikEdItalic title':           'Texto en cursiva',
			'wikEdUnderline alt':          'Subrayado',
			'wikEdUnderline title':        'Texto subrayado',
			'wikEdStrikethrough alt':      'Tachado',
			'wikEdStrikethrough title':    'Texto tachado',
			'wikEdNowiki alt':             'Nowiki',
			'wikEdNowiki title':           'Texto Nowiki',
			'wikEdSuperscript alt':        'Superíndices',
			'wikEdSuperscript title':      'Texto en superíndices',
			'wikEdSubscript alt':          'Subíndices',
			'wikEdSubscript title':        'Texto en subíndices',
			'wikEdRef alt':                'Ref',
			'wikEdRef title':              'Referencias del texto (shift-click: con nombre)',
			'wikEdCase alt':               'Mayúsculas/minúsculas',
			'wikEdCase title':             'Alternar entre minúsculas, mayúsculas y la primera en mayúscula y resto minúscilas.',
			'wikEdSort alt':               'Sort',
			'wikEdSort title':             'Sort lines alphabetically',
			'wikEdRedirect alt':           'Redireccionar',
			'wikEdRedirect title':         'Crear redirección, borra todo el texto.',
			'wikEdUndoAll alt':            'Deshacer todo',
			'wikEdUndoAll title':          'Deshacer todos los cambios',
			'wikEdRedoAll alt':            'Rehacer todo',
			'wikEdRedoAll title':          'Rehacer todos los cambios',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'Enlace',
			'wikEdWikiLink title':         'Wikienlace',
			'wikEdWebLink alt':            'Hiperenlace',
			'wikEdWebLink title':          'Enlace externo',
			'wikEdHeading alt':            'Encabezamiento',
			'wikEdHeading title':          'Incrementar nivel de encabezamiento (shift-click: decrementar)',
			'wikEdBulletList alt':         'Lista con viñetas',
			'wikEdBulletList title':       'Incrementar el nivel de la lista con viñetas (shift-click: decrementar)',
			'wikEdNumberList alt':         'Lista numerada',
			'wikEdNumberList title':       'Incrementar el nivel de la lista numerada (shift-click: decrementar)',
			'wikEdIndentList alt':         'Lista de sangría',
			'wikEdIndentList title':       'Incrementar sangría (shift-click: decrementar)',
			'wikEdDefinitionList alt':     'Lista de definición',
			'wikEdDefinitionList title':   'Lista de definiciones',
			'wikEdImage alt':              'Imagen',
			'wikEdImage title':            'Imagen',
			'wikEdTable alt':              'Tabla',
			'wikEdTable title':            'Tabla',
			'wikEdReferences alt':         'Referencias',
			'wikEdReferences title':       'Localización de referencia (shift-click: Sección de refencias)',

// textify buttons
			'wikEdWikify alt':             'Wikificar',
			'wikEdWikify title':           'Convertir el contenido pegado a código wiki, actualizar resultado',
			'wikEdTextify alt':            'Textificar',
			'wikEdTextify title':          'Convertir el contenido pegado a texto plano, actualizar resltado (shift-click: forced highlighting)',

// find and replace buttons, top row
			'wikEdFindAll alt':            'Encontrar todos',
			'wikEdFindAll title':          'Encontrar todas las ocurrencias',
			'wikEdFindPrev alt':           'Encontrar anterior',
			'wikEdFindPrev title':         'Encontrar ocurrencia anterior',
			'wikEdFindSelect title':       'Seleccionar una búsqueda anterior o saltar a un encabezado',
			'wikEdFindNext alt':           'Encontrar próximo',
			'wikEdFindNext title':         'Encontrar la próxima ocurrencia (shift-click: get selection)',
			'wikEdJumpPrev alt':           'Anterior seleccionado',
			'wikEdJumpPrev title':         'Encontrar el texto seleccionado hacia atrás',
			'wikEdJumpNext alt':           'Próximo seleccionado',
			'wikEdJumpNext title':         'Encontrar el texto seleccionado hacia delante',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'Reemplazar todos',
			'wikEdReplaceAll title':       'Reemplazar todas las ocurrencias en todo el texto o selección',
			'wikEdReplacePrev alt':        'Reemplazar anterior',
			'wikEdReplacePrev title':      'Reemplazar la ocurrencia anterior',
			'wikEdReplaceSelect title':    'Eelgir un reemplazo anterior',
			'wikEdReplaceNext alt':        'Reemplazar próximo (shift-click: coger selección)',
			'wikEdReplaceNext title':      'Reeemplazar la próxima ocurrencia',
			'wikEdCaseSensitive alt':      'Sensible a mayúsculas/minúsculas',
			'wikEdCaseSensitive title':    'La búsqueda es sensible a mayúsculas/minúsculas',
			'wikEdRegExp alt':             'RegExp',
			'wikEdRegExp title':           'El campo de búsquedas es una expresión regular',
			'wikEdFindAhead alt':          'Encontrar más adelante',
			'wikEdFindAhead title':        'Encontrar más adelante mientras escribes (no distingue may/min, no es regexp)',

// fix buttons, top row
			'wikEdFixBasic alt':           'Arreglar básico',
			'wikEdFixBasic title':         'Arregla espacios en blanco y líneas vacías, también lo hace otras funciones.',
			'wikEdFixHtml alt':            'Arreglar html',
			'wikEdFixHtml title':          'Arregla el html y convierte a código wiki',
			'wikEdFixCaps alt':            'Arreglar mayúsculas',
			'wikEdFixCaps title':          'Arregla mayúsculas en encabezamientos y listas',
			'wikEdFixUnicode alt':         'Arreglar Unicode',
			'wikEdFixUnicode title':       'Arreglar las representaciones de caracteres unicode',
			'wikEdFixAll alt':             'Arreglar todo',
			'wikEdFixAll title':           'Arreglar básico, html, mayúsculas y Unicode.',
			'wikEdFixRedirect alt':        'Fix redirects',
			'wikEdFixRedirect title':      'Fix redirects',

// fix buttons, bottom row
			'wikEdFixDashes alt':          'Arreglar guiones/rayas',
			'wikEdFixDashes title':        'Arreglar guiones/rayas',
			'wikEdFixPunct alt':           'Arreglar puntuación',
			'wikEdFixPunct title':         'Arreglar espacios antes de puntuación',
			'wikEdFixMath alt':            'Arreglar matemáticas',
			'wikEdFixMath title':          'Arreglar expresiones matemáticas',
			'wikEdFixChem alt':            'Arreglar química',
			'wikEdFixChem title':          'Arreglar fórmulas químicas',
			'wikEdFixUnits alt':           'Arreglar unidades',
			'wikEdFixUnits title':         'Arreglar unidades',
			'wikEdFixRegExTypo alt':       'Arreglar fallos al escribir',
			'wikEdFixRegExTypo title':     'Arregla fallos al escribir usando las reglas de AutoWikiBrowser y RegExTypoFixer',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, TEMPL]',
			'wikEdRefHide title':          'Toggle [REF] and [TEMPL] hiding',
			'wikEdRefButtonTooltip':       'Click to display hidden reference',
			'wikEdTemplButtonTooltip':     'Click to display hidden template',
			'wikEdCharEntityButtonTooltip': 'Click to display hidden character entity',
			'wikEdRefButtonShowTooltip':   'Click to hide reference',
			'wikEdTemplButtonShowTooltip': 'Click to hide template',
			'wikEdCharEntityButtonShowTooltip': 'Click to hide character entity',
			'wikEdTextZoom alt':           'Zoom de texto',
			'wikEdTextZoom title':         'Alternar zooms de texto Text zoom cycling (shift-click: al revés)',
			'wikEdClearHistory alt':       'Borrar historial',
			'wikEdClearHistory title':     'Limpiar el historial de búsqueda, reemplazar y sumario.',
			'wikEdScrollToPreview alt':    'Ir a vista previa',
			'wikEdScrollToPreview title':  'Ir al campo de vista previa',
			'wikEdScrollToEdit alt':       'Ir a editar',
			'wikEdScrollToEdit title':     'Ir al campo de editar',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'Usar wikEd',
			'wikEdUseWikEd title':         'Alternar entre el área de texto clásica y wikEd',
			'wikEdHighlightSyntax alt':    'Sintaxis',
			'wikEdHighlightSyntax title':  'Toggle automatic syntax highlighting',
			'wikEdTableMode alt':          'Table mode',
			'wikEdTableMode title':        'Toggle table edit mode',
			'wikEdSource alt':             'Fuente',
			'wikEdCloseToolbar title':     'Cerrar la barra de herramientas estándar no wikEd ',
			'wikEdCloseToolbar alt':       'Cerrar barra de herramientas',
			'wikEdSource title':           'Mostrar el código fuente para propósitos de muetra',
			'wikEdUsing alt':              'Usando…',
			'wikEdUsing title':            'Añadir automáticamente \'\'…usando wikEd\'\' to summaries',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Activar/desactivar vista automática del diff mejorado',
			'wikEdFullScreen alt':         'Pantalla completa',
			'wikEdFullScreen title':       'Activar/desactivar pantalla completa',

// summary buttons
			'wikEdClearSummary alt':       'Limpiar sumario',
			'wikEdClearSummary title':     'Limpiar el campo de sumario',
			'wikEdSummarySelect title':    'Elegir un sumario anterior',
			'wikEdPresetSummary': [
				'/*  */ ', 'copyedit', 'respuesta', 'artículo creado', 'reescritura de introducción',
				'arreglar enlaces', 'arreglando fallos al escribir', 'removing linkspam', 'reverting test',
				'revirtiendo vandalismo', 'formateando el código fuente', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '…usando [[en:User:Cacycle/wikEd|wikEd]]',

// button title acceskey
			'alt-shift':                   'alt-shift-',

// submit buttons
			'wikEdLocalPreviewImg alt':    'Previsualizar abajo',
			'wikEdLocalPreview title':     'Mostrar la previsualización abajo',
			'wikEdLocalDiffImg alt':       'Cambios abajo',
			'wikEdLocalDiff title':        'Mostrar los cambios actuales abajo',
			'wikEdHelpPageLink':           ' | <a href="{wikEdHomeBaseUrl}wiki/User:Cacycle/wikEd_help" target="helpwindow">Ayuda de wikiEd</a>', // use full link without {wikEdHomeBaseUrl} if the page is not on the English Wikipedia

// preview and changes buttons, top
			'wikEdClose alt':              'Cerrar',
			'wikEdClose title':            'Cerrar caja de previsualización',
			'wikEdClose2 alt':             'Cerrar',
			'wikEdClose2 title':           'Cerrar la caja de previsualización',
			'wikEdScrollToPreview2 alt':   'Ir a previsualización',
			'wikEdScrollToPreview2 title': 'Ir al campo de previsualización',
			'wikEdScrollToEdit2 alt':      'Ir a editar',
			'wikEdScrollToEdit2 title':    'Ir al campo de edición',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'Ir a previsualización',
			'wikEdScrollToPreview3 title': 'Ir al campo de previsualización',
			'wikEdScrollToEdit3 alt':      'Ir a editar',
			'wikEdScrollToEdit3 title':    'Ir al campo de edición',

// preview field
			'wikEdPreviewLoading':         '...',

// formatting functions
			'image filename':              'filename',
			'image width':                 'width',
			'table caption':               'caption',
			'table heading':               'heading',
			'table cell':                  'cell',
			'redirect article link':       'enlace al artículo',

// fixing functions
			'External links':              'Enlaces externos',
			'See also':                    'Ver también',
			'References':                  'Referencias',

// language specific wiki code
			'wikicode Image':              'Imagen',
			'wikicode File':               'Archivo',
			'wikicode Category':           'Categoría',
			'wikicode Template':           'Plantilla',
			'wikEdReferencesSection':      '\n== Referencias ==\n\n<references />\n',
			'talk page':                   'talk',
			'history page':                'history',
			'talk namespace':              'Talk',
			'talk namespace suffix':       '_talk',

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'TEMPL',

// shortened button texts
			'shortenedPreview':            'Previsualización',
			'shortenedChanges':            'Cambios',

// follow link popup
			'followLink':                  '(ctrl-click)',
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
			'wikEdDiffButton title':       'Mostrar vista de diferencias mejorada',
			'wikEdDiffLoading':            '...'

}