/*

{{en:User:Cacycle/wikEd_template}}

This is the French translation for the MediaWiki editing page extension '''[[User:Cacycle/wikEd|wikEd]]''' (last updated for version 0.9.91).
Please see the translation instructions at [[User:Cacycle/wikEd international]].

Voici la traduction française pour '''[[:fr:Utilisateur:Leag/wikEd|wikEd]]''' (dernière màj 0.9.91).
Voir les instructions de traduction ici : [[:en:User:Cacycle/wikEd international]].

<pre><nowiki> */

// language-specific settings
var wikEdFixPunctFrench = true;

var wikEdText = {

// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Cliquer pour désactiver',
			'wikEdLogo error alt':         'wikEd erreur',
			'wikEdLogo error title':       'Erreur de chargement - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Cliquer pour désactiver',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'Navigateur non supporté - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Script ou gadget incompatible "{wikEdParameter}" - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    'Désactivé - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Cliquer pour activer',

// standard preview jumper
			'wikEdScrollToEdit4 alt':      'Défiler édition',
			'wikEdScrollToEdit4 title':    'Défiler vers la fenêtre d\′édition',

// button bar grip titles
			'wikEdGripFormat title':       'Boutons de mise en forme (cliquer pour masquer ou afficher)',
			'wikEdGripTextify title':      'Boutons Textifier - Wikifier (cliquer pour masquer ou afficher)',
			'wikEdGripCustom1 title':      'Boutons personnels (cliquer pour masquer ou afficher)',
			'wikEdGripFind title':         'Boutons de recherche (cliquer pour masquer ou afficher)',
			'wikEdGripFix title':          'Boutons de correction (cliquer pour masquer ou afficher)',
			'wikEdGripCustom2 title':      'Boutons personnels (cliquer pour masquer ou afficher)',
			'wikEdGripControl title':      'Boutons de contrôle wikEd (cliquer pour masquer ou afficher)',

// formatting buttons, top row
			'wikEdUndo alt':               'Annuler',
			'wikEdUndo title':             'Annuler',
			'wikEdRedo alt':               'Répéter',
			'wikEdRedo title':             'Répéter',
			'wikEdBold alt':               'Gras',
			'wikEdBold title':             'Texte gras',
			'wikEdItalic alt':             'Italique',
			'wikEdItalic title':           'Texte italique',
			'wikEdUnderline alt':          'Souligner',
			'wikEdUnderline title':        'Texte souligné',
			'wikEdStrikethrough alt':      'Barrer',
			'wikEdStrikethrough title':    'Texte barré',
			'wikEdNowiki alt':             'Nowiki',
			'wikEdNowiki title':           'Texte Nowiki',
			'wikEdSuperscript alt':        'Exposant',
			'wikEdSuperscript title':      'Texte en exposant',
			'wikEdSubscript alt':          'Indice',
			'wikEdSubscript title':        'Texte en indice',
			'wikEdRef alt':                'Réf',
			'wikEdRef title':              'Texte en référence (maj-clic : balise nommée)',
			'wikEdCase alt':               'Casse',
			'wikEdCase title':             'Basculer entre minuscules, majuscules initiales et majuscules',
			'wikEdSort alt':               'Tri',
			'wikEdSort title':             'Trier les lignes alphabétiquement',
			'wikEdRedirect alt':           'Redirection',
			'wikEdRedirect title':         'Créer une redirection, effacer tout le texte',
			'wikEdUndoAll alt':            'Annuler tout',
			'wikEdUndoAll title':          'Annuler tous les changements',
			'wikEdRedoAll alt':            'Répéter tout',
			'wikEdRedoAll title':          'Répéter tous les changements',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'Lien',
			'wikEdWikiLink title':         'Lien Wiki',
			'wikEdWebLink alt':            'Lien externe',
			'wikEdWebLink title':          'Lien externe',
			'wikEdHeading alt':            'Titre',
                        // Notez que h1 est « plus haut » que h2, mais que h2 est une « augmentation » de h1
			'wikEdHeading title':          'Abaisser le niveau des titres (maj-clic : hausser)',
			'wikEdBulletList alt':         'Liste à puces',
			'wikEdBulletList title':       'Augmenter le niveau des listes à puces (maj-clic : diminuer)',
			'wikEdNumberList alt':         'Liste numérotée',
			'wikEdNumberList title':       'Augmenter le niveau des listes numérotées (maj-clic : diminuer)',
			'wikEdIndentList alt':         'Liste en retrait',
			'wikEdIndentList title':       'Augmenter le retrait des listes (maj-clic : diminuer)',
			'wikEdDefinitionList alt':     'Déf listes',
			'wikEdDefinitionList title':   'Liste de définitions',
			'wikEdImage alt':              'Image',
			'wikEdImage title':            'Image',
			'wikEdTable alt':              'Tableau',
			'wikEdTable title':            'Tableau',
			'wikEdReferences alt':         'Références',
			'wikEdReferences title':       'Insérer une référence (maj-clic : référence nommée)',

// textify buttons
			'wikEdWikify alt':             'Wikifier',
			'wikEdWikify title':           'Convertir le contenu collé en code wiki, mettre à jour le texte surligné',
			'wikEdTextify alt':            'Textifier',
			'wikEdTextify title':          'Convertir le contenu collé en texte normal, mettre à jour le texte surligné (shift-clic: forcer le surlignage)',

// find and replace buttons, top row
			'wikEdFindAll alt':            'Trouver tout',
			'wikEdFindAll title':          'Trouver toutes les occurences',
			'wikEdFindPrev alt':           'Trouver précédent',
			'wikEdFindPrev title':         'Trouver l\′occurence précédente',
			'wikEdFindSelect title':       'Sélectionner une recherche précédente ou sauter vers un titre',
			'wikEdFindNext alt':           'Trouver suivant',
			'wikEdFindNext title':         'Trouver l\′occurence suivante',
			'wikEdJumpPrev alt':           'Changement précédent',
			'wikEdJumpPrev title':         'Reculer au dernier changement',
			'wikEdJumpNext alt':           'Changement en cours',
			'wikEdJumpNext title':         'Revenir au changement en cours',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'Remplacer tout',
			'wikEdReplaceAll title':       'Remplacer toutes les occurences dans le texte entier ou la sélection',
			'wikEdReplacePrev alt':        'Remplacer précédent',
			'wikEdReplacePrev title':      'Trouver puis remplacer l\′occurence précédente',
			'wikEdReplaceSelect title':    'Sélectionner un remplacement précédent',
			'wikEdReplaceNext alt':        'Remplacer suivant',
			'wikEdReplaceNext title':      'Trouver puis remplacer l\′occurence suivante (maj-clic : copier la sélection)',
			'wikEdCaseSensitive alt':      'Respecter la casse',
			'wikEdCaseSensitive title':    'Rechercher en respectant la casse',
			'wikEdRegExp alt':             'RegExp',
			'wikEdRegExp title':           'Rechercher une expression rationnelle',
			'wikEdFindAhead alt':          'Immédiate',
			'wikEdFindAhead title':        'Rechercher au fil de la frappe (casse ignorée, tel-quel)',

// fix buttons, top row
			'wikEdFixBasic alt':           'Correction de base',
			'wikEdFixBasic title':         'Corriger les blancs et les lignes vides (fait avec les autres fonctions de correction)',
			'wikEdFixHtml alt':            'Correction html',
			'wikEdFixHtml title':          'Corriger html en wikicode',
			'wikEdFixCaps alt':            'Correction majuscules',
			'wikEdFixCaps title':          'Corriger les majuscules dans les titres et les listes',
			'wikEdFixUnicode alt':         'Correction Unicode',
			'wikEdFixUnicode title':       'Corriger les caractères Unicode',
			'wikEdFixAll alt':             'Correction totale',
			'wikEdFixAll title':           'Corriger blancs, lignes vides, html, majuscules et Unicode',
			'wikEdFixRedirect alt':        'Correction redirections',
			'wikEdFixRedirect title':      'Corriger les redirections',

// fix buttons, bottom row
			'wikEdFixDashes alt':          'Correction tirets',
			'wikEdFixDashes title':        'Corriger les tirets',
			'wikEdFixPunct alt':           'Correction ponctuation',
			'wikEdFixPunct title':         'Corriger les espaces avant la ponctuation',
			'wikEdFixMath alt':            'Correction math',
			'wikEdFixMath title':          'Corriger les formules de math',
			'wikEdFixChem alt':            'Correction chimie',
			'wikEdFixChem title':          'Corriger les formules de chimie',
			'wikEdFixUnits alt':           'Correction unités',
			'wikEdFixUnits title':         'Corriger les mesures',
			'wikEdFixRegExTypo alt':       'Correction typographique',
			'wikEdFixRegExTypo title':     'Corriger la typographie avec les règles RegExTypoFixer d\′AutoWikiBrowser',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, MODELE]',
			'wikEdRefHide title':          'Basculer en [REF] et [MODELE] cachés',
			'wikEdRefButtonTooltip':       'Afficher les références cachées',
			'wikEdTemplButtonTooltip':     'Afficher les modèles cachés',
			'wikEdCharEntityButtonTooltip': 'Afficher les caractères cachés',
			'wikEdRefButtonShowTooltip':   'Cacher les références',
			'wikEdTemplButtonShowTooltip': 'Cacher les modèles',
			'wikEdCharEntityButtonShowTooltip': 'Cacher les caractères',
			'wikEdRefHideTooltip':         'Afficher la référence',
			'wikEdTemplHideTooltip':       'Afficher le modèle',
			'wikEdRefHideTooltipShow':     'Cacher la référence',
			'wikEdTemplHideTooltipShow':   'Cacher le modèle',
		        'wikEdTextZoom alt':           'Zoom texte',
			'wikEdTextZoom title':         'Changer la taille du texte (maj-clic : cycle inverse)',
			'wikEdClearHistory alt':       'Effacer historique',
			'wikEdClearHistory title':     'Effacer l\′historique de rechercher, de remplacer et du résumé',
			'wikEdScrollToPreview alt':    'Défiler prévisualisation',
			'wikEdScrollToPreview title':  'Défiler vers la fenêtre de prévisualisation',
			'wikEdScrollToEdit alt':       'Défiler édition',
			'wikEdScrollToEdit title':     'Défiler vers la fenêtre d\′édition',
			'wikEdTableMode alt':          'Mode Tableau',
			'wikEdTableMode title':        'Basculer en mode d\′édition tableau',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'Utiliser wikEd',
			'wikEdUseWikEd title':         'Basculer entre le texte classique et wikEd',
			'wikEdHighlightSyntax alt':    'Syntaxe',
			'wikEdHighlightSyntax title':  'Basculer en surlignage automatique',
			'wikEdSource alt':             'Source',
			'wikEdCloseToolbar title':     'Fermer la barre d\′édition normale non-wikEd',
			'wikEdCloseToolbar alt':       'Fermer barre d\′édition',
			'wikEdSource title':           'Afficher le code source pour un test',
			'wikEdUsing alt':              'Avec wikEd',
			'wikEdUsing title':            'Ajouter automatiquement \'\'…avec wikEd\'\' au résumé',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Basculer automatiquement en prévisualisation améliorée',
			'wikEdFullScreen alt':         'Plein écran',
			'wikEdFullScreen title':       'Basculer vers le mode plein écran',

// summary buttons
			'wikEdClearSummary alt':       'Effacer résumé',
			'wikEdClearSummary title':     'Effacer le résumé',
			'wikEdSummarySelect title':    'Sélectionner un résumé précédent',
			'wikEdPresetSummary': [
				'mise à jour', 'réponse', 'article créé', 'intro réécrite',
				'correction lien', 'correction typos', 'suppression pollupostage',
				'révocation', 'wikification', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '…avec [[Utilisateur:Leag/wikEd|wikEd]]',

// button title acceskey
			'alt-shift':                   'alt-shift-',

// submit buttons
			'wikEdLocalPreviewImg alt':    'Prévisualiser en-dessous',
			'wikEdLocalPreview title':     'Afficher la prévisualisation en-dessous',
			'wikEdLocalDiffImg alt':       'Changements en-dessous',
			'wikEdLocalDiff title':        'Afficher les changements en cours en-dessous',
			'wikEdHelpPageLink':           ' | <a href="http://fr.wikipedia.org/wiki/Utilisateur:Leag/wikEd aide" target="helpwindow">wikEd aide</a>',

// preview and changes buttons, top
			'wikEdClose alt':              'Fermer prévisualisation',
			'wikEdClose title':            'Fermer la fenêtre de prévisualisation',
                        'wikEdClose2 alt':             'Fermer prévisualisation',
                        'wikEdClose2 title':           'Fermer la fenêtre de prévisualisation',
			'wikEdScrollToPreview2 alt':   'Défiler prévisualisation',
			'wikEdScrollToPreview2 title': 'Défiler vers la fenêtre de prévisualisation',
			'wikEdScrollToEdit2 alt':      'Défiler édition',
			'wikEdScrollToEdit2 title':    'Défiler vers la fenêtre d\′édition',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'Défiler prévisualisation',
			'wikEdScrollToPreview3 title': 'Défiler vers la fenêtre de prévisualisation',
			'wikEdScrollToEdit3 alt':      'Défiler édition',
			'wikEdScrollToEdit3 title':    'Défiler vers la fenêtre d\′édition',

// preview field
			'wikEdPreviewLoading':         '...',

// formatting functions
			'image filename':              'Nom du fichier',
			'image width':                 'Largeur',
			'table caption':               'Légende',
			'table heading':               'Titre',
			'table cell':                  'Élément',
			'redirect article link':       'Article cible',

// fixing functions
			'External links':              'Liens externes',
			'See also':                    'Voir aussi',
			'References':                  'Références',

// language specific wiki code
			'wikicode Image':              'Image',
			'wikicode File':               'Fichier',
			'wikicode Category':           'Catégorie',
			'wikicode Template':           'Modèle',
			'wikEdReferencesSection':      '\n== Notes et références ==\n\n<references />\n',
			'talk page':                   'discussion',
			'history page':                'historique',
			'talk namespace':              'Discussion',
			'talk namespace suffix':       '_talk',

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'MODELE',

// shortened button texts
			'shortenedPreview':            'Prévisualiser',
			'shortenedChanges':            'Changements',

// follow link popup
			'followLink':                  '(Ctrl-clic)',
			'followLinkMac':               '(cmd-clic)',

// error message popups
			'wikEdTableModeError':         'Cette table wikicode contient des erreurs',

// auto updating
			'wikEdGreasemonkeyAutoUpdate': 'wikEd Update:\n\nUne nouvelle version du script "wikEd" sur GreaseMonkey est disponible.\n\n\nElle peut être téléchargée depuis :\n\n{updateURL}',

// highlighting popups
			'wikEdHyphenDash':             'Trait d\′union',         //Ux002d
			'wikEdFigureDash':             'Tiret numérique',       //Ux2012
			'wikEdEnDash':                 'Tiret semi-cadratin',   //Ux2013
			'wikEdEmDash':                 'Tiret cadratin',        //Ux2014
			'wikEdBarDash':                'Barre horizontale',     //Ux2015
			'wikEdMinusDash':              'Signe moins',           //Ux2212
			'wikEdSoftHyphen':             'Trait d\′union virtuel', //Ux00ad
			'wikEdTab':                    'Tabulation',            //Ux0009
			'wikEdEnSpace':                'Demi-cadrat',           //Ux2002
			'wikEdEmSpace':                'Cadrat',                //Ux2003
			'wikEdThinSpace':              'Espace fine',           //Ux2009
			'wikEdIdeographicSpace':       'Espace idéographique',

// location search string functions
			'iconPage':                    'All icons and images used by wikEd. Save page as <i>web page, complete</i> to download all files into one folder.<br><br>',


// highlighting
			'wikEdSignature3':             'Signer avec le nom seulement',
			'wikEdSignature4':             'Signer avec le nom et la date',
			'wikEdSignature5':             'Signer avec la date seulement',

// highlighting errors
			'wikEdErrorHtmlUnknown':       'Balise HTML non supportée',
			'wikEdErrorBoldItalic':        'Gras / Italique invalide',
			'wikEdErrorWrongClose':        'Close tag does not match',
			'wikEdErrorNoOpen':            'Close tag has no match',
			'wikEdErrorNoHandler':         'Pas d\′accrochage',
			'wikEdErrorNoClose':	       'Open tag has no match',
			'wikEdErrorNewline':           'Open tag closed by new line',
			'wikEdErrorTemplHeading':      'Headings in templates are ignored',
			'wikEdErrorTemplParam':        'Template/parameter tags do not match',
			'wikEdErrorTemplParamAmbig':   'Template/parameter tags are ambiguous',
			'wikEdErrorCodeInLinkName':    'Code wiki dans le nom d\′un lien',
			'wikEdErrorCodeInTemplName':   'Code wiki dans le nom d\′un modèle',
			'wikEdErrorCodeInParamName':   'Code wiki dans le nom d\′un paramèter d\′un modèle',


// highlighting image preview
			'wikEdFilePreview':            'Prévisualisation de l\′image',

// from [[en:User:Cacycle/wikEdDiff.js]]
			'wikEdDiffButtonImg alt':      'wikEdDiff',
			'wikEdDiffButton title':       'Afficher la prévisualisation améliorée',
			'wikEdDiffLoading':            '…'
};