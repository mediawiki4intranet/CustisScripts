/*

{{en:User:Cacycle/wikEd_template}}

This is the Portuguese translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

Esta página contém a tradução para português utilizada pelo ''script'' [[:pt:Wikipedia:Software/Scripts/wikEd|wikEd]], versão 0.9.91.
([[User:Cacycle/wikEd international en.js]])

<pre><nowiki> */

var wikEdText = {

// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Clique para desativar',
			'wikEdLogo error alt':         'Erro wikEd',
			'wikEdLogo error title':       'Erro ao carregar o wikEd - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Clique para desactivar',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'Navegador (browser) não suportado pelo wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Incompatible script or gadget "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    'wikEd desativado {wikEdProgramVersion} ({wikEdProgramDate}) Clique para activar',

// top preview jumper
			'wikEdScrollToEdit4 alt':      'Ir para edição',
			'wikEdScrollToEdit4 title':    'Ir para a janela de edição',

// button bar grip titles
			'wikEdGripFormat title':       'Botões de formatação (clique para esconder ou mostrar)',
			'wikEdGripTextify title':      'Botões de wikificação e desformatação de texto (clique para esconder ou mostrar)',
			'wikEdGripCustom1 title':      'Botões personalizados (clique para esconder ou mostrar)',
			'wikEdGripFind title':         'Botões de pesquisa (clique para esconder ou mostrar)',
			'wikEdGripFix title':          'Botões de correcção (clique para esconder ou mostrar)',
			'wikEdGripCustom2 title':      'Botões personalizados (clique para esconder ou mostrar)',
			'wikEdGripControl title':      'Botões de controlo do wikEd (clique para esconder ou mostrar)',

// formatting buttons, top row
			'wikEdUndo alt':               'Desfazer',
			'wikEdUndo title':             'Desfazer',
			'wikEdRedo alt':               'Refazer',
			'wikEdRedo title':             'Refazer',
			'wikEdBold alt':               'Negrito',
			'wikEdBold title':             'Texto em negrito',
			'wikEdItalic alt':             'Itálico',
			'wikEdItalic title':           'Texto em itálico',
			'wikEdUnderline alt':          'Sublinhado',
			'wikEdUnderline title':        'Texto sublinhado',
			'wikEdStrikethrough alt':      'Riscado',
			'wikEdStrikethrough title':    'Texto riscado',
			'wikEdNowiki alt':             'Nowiki',
			'wikEdNowiki title':           'Código <nowiki> (não wikificar)',
			'wikEdSuperscript alt':        'Sobrescrito',
			'wikEdSuperscript title':      'Texto em sobrescrito (elevado)',
			'wikEdSubscript alt':          'Subscrito',
			'wikEdSubscript title':        'Texto em subscrito (baixado)',
			'wikEdRef alt':                'Ref',
			'wikEdRef title':              'Referência no corpo do texto (selecione primeiro o texto) (shift-clique: referência com nome)',
			'wikEdReferences alt':         'Referências',
			'wikEdReferences title':       'Lista das referências (shift-clique: adiciona também secção de referências)',
			'wikEdCase alt':               'Maiús minús',
			'wikEdCase title':             'Alterna entre minúsculas, maiúsculas e maiúscula na primeira letra',
			'wikEdSort alt':               'Ordenar',
			'wikEdSort title':             'Ordenar linhas alfabeticamente',
			'wikEdUndoAll alt':            'Desfazer tudo',
			'wikEdUndoAll title':          'Desfazer todas as alterações',
			'wikEdRedoAll alt':            'Refazer tudo',
			'wikEdRedoAll title':          'Refazer todas as alterações',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'Ligação wiki',
			'wikEdWikiLink title':         'Ligação wiki',
			'wikEdWebLink alt':            'Ligação web',
			'wikEdWebLink title':          'Ligação externa',
			'wikEdHeading alt':            'Secção',
			'wikEdHeading title':          'Aumenta o nível da secção (shift-clique: diminui o nível)',
			'wikEdBulletList alt':         'Lista simples',
			'wikEdBulletList title':       'Aumenta o nível da lista simples (shift-clique: diminui o nível)',
			'wikEdNumberList alt':         'Lista numerada',
			'wikEdNumberList title':       'Aumenta o nível da lista numerada (shift-clique: diminui o nível)',
			'wikEdIndentList alt':         'Lista afastada',
			'wikEdIndentList title':       'Aumenta o nível da lista afastada da margem (shift-clique: diminui o nível)',
			'wikEdDefinitionList alt':     'Lista def',
			'wikEdDefinitionList title':   'Lista de definições',
			'wikEdImage alt':              'Imagem',
			'wikEdImage title':            'Imagem (selecione primeiro o texto que servirá de legenda)',
			'wikEdTable alt':              'Tabela',
			'wikEdTable title':            'Tabela',
			'wikEdRedirect alt':           'Redirect',
			'wikEdRedirect title':         'Criar um redirecionamento e apagar o texto existente',

// textify buttons
			'wikEdWikify alt':             'Wikificar',
			'wikEdWikify title':           'Converter texto colado para código wiki (limitado)',
			'wikEdTextify alt':            'Textificar',
			'wikEdTextify title':          'Converter texto colado para texto sem formatação (shift-click: forced highlighting)',

// find and replace buttons, top row
			'wikEdFindAll alt':            'Localiza tudo',
			'wikEdFindAll title':          'Localizar todas as ocorrências',
			'wikEdFindPrev alt':           'Localiza anterior',
			'wikEdFindPrev title':         'Localizar a ocorrência anterior',
			'wikEdFindSelect title':       'Selecionar pesquisas anteriores ou secção presentes no texto',
			'wikEdFindNext alt':           'Locali. próx.',
			'wikEdFindNext title':         'Localizar a ocorrência seguinte (shift-clique: copiar texto selecionado)',
			'wikEdJumpPrev alt':           'Anterior',
			'wikEdJumpPrev title':         'Localizar anterior',
			'wikEdJumpNext alt':           'Seguinte',
			'wikEdJumpNext title':         'Localizar seguinte',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'Subst tudo',
			'wikEdReplaceAll title':       'Substituir todas as ocorrências no texto ou seleção',
			'wikEdReplacePrev alt':        'Subst anterior',
			'wikEdReplacePrev title':      'Substituir a ocorrência anterior',
			'wikEdReplaceSelect title':    'Selecionar esta substituição anterior',
			'wikEdReplaceNext alt':        'Subst seguinte',
			'wikEdReplaceNext title':      'Substituir a ocorrência seguinte (shift-clique: copiar texto selecionado)',
			'wikEdCaseSensitive alt':      'Difer maiús minús',
			'wikEdCaseSensitive title':    'Diferenciar maiúsculas de minúsculas ao localizar',
			'wikEdRegExp alt':             'ExpReg',
			'wikEdRegExp title':           'Usar expressões regulares no campo de localizar',
			'wikEdFindAhead alt':          'Localizar ao digitar',
			'wikEdFindAhead title':        'Localizar ao escrever (não diferencia: maiúsculas, minúsculas e exp. regulares)',

// fix buttons, top row
			'wikEdFixBasic alt':           'Corrige básico',
			'wikEdFixBasic title':         'Corrigir espaços e linhas em branco (usar com cautela)',
			'wikEdFixHtml alt':            'Corrige HTML',
			'wikEdFixHtml title':          'Converter código HTML para código wiki (usar com cautela)',
			'wikEdFixCaps alt':            'Corrige maiús',
			'wikEdFixCaps title':          'Corrigir capitais em cabeçalhos e listas (usar com cautela)',
			'wikEdFixUnicode alt':         'Corrige Unicode',
			'wikEdFixUnicode title':       'Corrigir caracteres em Unicode',
			'wikEdFixAll alt':             'Corrige tudo',
			'wikEdFixAll title':           'Corrigir o básico, HTML, capitalização e Unicode (usar com cautela)',
			'wikEdFixRedirect alt':        'Corrige redir',
			'wikEdFixRedirect title':      'Corrigir redirecionamentos',

// fix buttons, bottom row
			'wikEdFixDashes alt':          'Corrige traços',
			'wikEdFixDashes title':        'Corrigir travessão, meia-risca, hífen e sinal de menos (usar com cautela)',
			'wikEdFixPunct alt':           'Corrige pontuação',
			'wikEdFixPunct title':         'Corrigir espaços antes da pontuação (usar com cautela)',
			'wikEdFixMath alt':            'Corrige mat',
			'wikEdFixMath title':          'Corrigir fórmulas matemáticas (usar com cautela)',
			'wikEdFixChem alt':            'Corrige quím',
			'wikEdFixChem title':          'Corrigir fórmulas químicas (usar com cautela)',
			'wikEdFixUnits alt':           'Corrige unid',
			'wikEdFixUnits title':         'Corrigir unidades de medidas (usar com cautela)',
			'wikEdFixRegExTypo alt':       'Corrige erros',
			'wikEdFixRegExTypo title':     '(apenas inglês) Corrigir erros ortográficos através das definições do AutoWikiBrowser (usar com cautela)',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, TEMPL]',
			'wikEdRefHide title':          'Toggle [REF] and [TEMPL] hiding',
			'wikEdRefButtonTooltip':       'Click to display hidden reference',
			'wikEdTemplButtonTooltip':     'Click to display hidden template',
			'wikEdCharEntityButtonTooltip': 'Click to display hidden character entity',
			'wikEdRefButtonShowTooltip':   'Click to hide reference',
			'wikEdTemplButtonShowTooltip': 'Click to hide template',
			'wikEdCharEntityButtonShowTooltip': 'Click to hide character entity',
			'wikEdTextZoom alt':           'Zoom',
			'wikEdTextZoom title':         'Diminui o tamanho da fonte - apenas a editar (shift-clique: aumenta)',
			'wikEdClearHistory alt':       'Apaga histórico',
			'wikEdClearHistory title':     'Apagar o histórico das pesquisas, substituições e sumários',
			'wikEdScrollToPreview alt':    'Ir previsão',
			'wikEdScrollToPreview title':  'Ir para a previsão',
			'wikEdScrollToEdit alt':       'Ir edição',
			'wikEdScrollToEdit title':     'Ir para o campo de edição',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'Usar wikEd',
			'wikEdUseWikEd title':         'Alternar entre janela de edição clássica e wikEd',
			'wikEdHighlightSyntax alt':    'Sintaxe',
			'wikEdHighlightSyntax title':  'Ativar e desativar o destaque automático da sintaxe',
			'wikEdTableMode alt':          'Edição tabela',
			'wikEdTableMode title':        'Ativar e desativar modo de edição de tabela',
			'wikEdSource alt':             'cód-fonte',
			'wikEdSource title':           'Mostrar o código-fonte (apenas para testes)',
			'wikEdCloseToolbar alt':       'Esconde botões',
			'wikEdCloseToolbar title':     'Esconder os botões clássicos de edição',
			'wikEdUsing alt':              'Usando',
			'wikEdUsing title':            'Adiciona  \'\'…usando wikEd\'\' no sumário de edição',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Mostrar ou esconder a caixa de alterações avançada',
			'wikEdFullScreen alt':         'Tela cheia',
			'wikEdFullScreen title':       'Alterna entre o modo normal e tela cheia',

// summary buttons
			'wikEdClearSummary alt':       'Apaga sumário',
			'wikEdClearSummary title':     'Apagar sumário',
			'wikEdSummarySelect title':    'Selecionar um sumário anterior',
			'wikEdPresetSummary': [
				'revertida', '+interwikis', '+categorias', '+predefinição',
				'-spam', 'ortografia', 'redirect', 'peq. correções',
				'wikificando', 'nova página', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '…usando [[Wikipedia:Software/Scripts/wikEd|wikEd]]',

// button title acceskey
			'alt-shift':                   'alt-shift-',

// submit buttons
			'wikEdLocalPreviewImg alt':    'Prev abaixo',
			'wikEdLocalPreview title':     'Mostra previsão na parte inferior',
			'wikEdLocalDiffImg alt':       'Mudanças abaixo',
			'wikEdLocalDiff title':        'Mostrar alterações na parte inferior',
			'wikEdHelpPageLink':           ' | <a href="http://pt.wikipedia.org/wiki/Wikipedia:Software/Scripts/wikEd/ajuda" target="helpwindow">Ajuda wikEd</a>',

// preview and changes buttons, top
			'wikEdClose alt':              'Fechar previsão',
			'wikEdClose title':            'Fechar janela de previsão rápida em baixo',
			'wikEdClose2 alt':             'Fechar previsão',
			'wikEdClose2 title':           'Fechar janela de previsão rápida',
			'wikEdScrollToPreview2 alt':   'Ir previsão',
			'wikEdScrollToPreview2 title': 'Ir para a janela de previsão',
			'wikEdScrollToEdit2 alt':      'Ir edição',
			'wikEdScrollToEdit2 title':    'Ir para a janela de edição',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'Ir previsão',
			'wikEdScrollToPreview3 title': 'Ir para a janela de previsão',
			'wikEdScrollToEdit3 alt':      'Ir edição',
			'wikEdScrollToEdit3 title':    'Ir para a janela de edição',

// preview field
			'wikEdPreviewLoading':         '...',

// formatting functions
			'image filename':              'nome do ficheiro',
			'image width':                 'largura',
			'table caption':               'subtítulo',
			'table heading':               'título',
			'table cell':                  'célula',
			'redirect article link':       'artigo',

// fixing functions
			'External links':              'Ligações externas',
			'See also':                    'Ver também',
			'References':                  'Referências',

// language specific wiki code
			'wikicode Image':              'Imagem',
			'wikicode File':               'Ficheiro',
			'wikicode Category':           'Categoria',
			'wikicode Template':           'Predefinição',
			'wikEdReferencesSection':      '\n== Referências ==\n\n<references />\n',
			'talk page':                   'talk',
			'history page':                'history',
			'talk namespace':              'Talk',
			'talk namespace suffix':       '_talk',

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'TEMPL',

// shortened button texts
			'shortenedPreview':            'Previsão',
			'shortenedChanges':            'Alterações',

// follow link popup
			'followLink':                  '(Ctrl-clique)',
			'followLinkMac':               '(cmd-click)',

// error message popups
			'wikEdTableModeError':         'O código da tabela contém erros',

// auto updating
			'wikEdGreasemonkeyAutoUpdate': 'Atualização wikEd:\n\nEstá disponível uma nova versão do script "wikEd" para o GreaseMonkey.\n\n\nIrá ser descarregado de:\n\n{updateURL}',

// highlighting popups
			'wikEdHyphenDash':             'Hífen',
			'wikEdFigureDash':             'Travessão n',
			'wikEdEnDash':                 'Travessão m',
			'wikEdEmDash':                 'Travessão',
			'wikEdBarDash':                'Linha horizontal',
			'wikEdMinusDash':              'Sinal de menos',
			'wikEdSoftHyphen':             'Hífen curto',
			'wikEdTab':                    'Tab',
			'wikEdEnSpace':                'Espaço n',
			'wikEdEmSpace':                'Espaço m',
			'wikEdThinSpace':              'Espaço curto',
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
			'wikEdDiffButton title':       'Mostrar diferença entre revisões melhorada',
			'wikEdDiffLoading':            '...'

}