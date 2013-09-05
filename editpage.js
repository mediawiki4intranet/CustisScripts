// http://ru.wikipedia.org/wiki/project:code
// Parts from http://ru.wikipedia.org/wiki/MediaWiki:Editpage.js
//
// Changes made by 4Intra.net:
// * WikiEditor compatibility:
// ** Remove -- from signature code
// ** Add wikify, category, blockquote, and comment buttons
// ** Update textarea from WikEd before WikiEditor preview/save
// * WikEd configuration
// * All script links replaced with local
// * Added live-refreshing-preview-in-a-separate-window (TODO: move it away)

var wikEdConfig = {
  // Do not use WikEd live preview and diff:
  // a) there is more convenient live preview in WikiEditor
  // b) WikEd preview/diff breaks things
  useLocalPreview: false,
  disabledPreset: true,
  allowLocalAjax: false,
  useAjaxPreview: false,
  loadDiff: false,
  loadDiffScript: false,
  diffScriptSrc: wgScriptPath+'/extensions/CustisScripts/diff.js',
  diffSrc: wgScriptPath+'/extensions/CustisScripts/wikEdDiff.js',
  imagePath: wgScriptPath+'/extensions/CustisScripts/images/upload.wikimedia.org/wikipedia/commons/',
  instaViewSrc: wgScriptPath+'/extensions/CustisScripts/instaview.js',
  IERangeSrc: wgScriptPath+'/extensions/CustisScripts/ierange.js',
  regExTypoFixURL: wgScriptPath+'/index.php?action=raw&title=WikEd_Typos.xml',
  doCloneWarnings: false,
  translations: {
    'ar': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_ar.js',
    'zh-hans': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_zh.js',
    'zh-hant': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_zh-hant.js',
    'cs': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_cs.js',
    'nl': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_nl.js',
    'eo': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd-eo.js',
    'fi': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd international fi.js',
    'fr': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd-fr.js',
    'de': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_de.js',
    'he': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_he.js',
    'hu': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd-hu.js',
    'it': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_it.js',
    'ja': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_ja.js',
    'ko': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_ko.js',
    'dsb': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_dsb.js',
    'ms': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_ms.js',
    'no': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_no.js',
    'nn': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_nn.js',
    'pl': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_pl.js',
    'pt': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_pt.js',
    'ro': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_ro.js',
    'ru': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_ru.js',
    'scn': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_scn.js',
    'sk': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_sk.js',
    'sl': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_sl.js',
    'es': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_es.js',
    'sv': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_sv.js',
    'tr': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_tr.js',
    'hsb': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_hsb.js',
    'vi': wgScriptPath+'/extensions/CustisScripts/wikEd_i18n/wikEd_international_vi.js'
  },
  setupHook: [ function() {
    var b = document.getElementById('wikieditor-publish-button');
    if (b) {
      var fn = function() {
        b.disabled = false;
        return true;
      };
      if (window.MutationObserver) {
        new MutationObserver(fn).observe(wikEd.frameDocument, { childList: true, characterData: true, subtree: true });
      }
      wikEd.AddEventListener(wikEd.frameDocument, 'keypress', fn, true);
    }
  } ]
};

// Remove -- from WikiEditor signature button code
$('#wpTextbox1').bind('wikiEditor-toolbar-buildSection-main', function(event, section) {
  section.groups.insert.tools.signature.action.options.pre = '~~~~';
});

// Toolbar buttons

function CustomButtons(){
  if (mediaWiki && mediaWiki.user.options.get('usebetatoolbar') == 1) {
    $('#wpTextbox1').wikiEditor('addToToolbar', {
      section: 'advanced',
      group: 'insert',
      tools: { 'cat': {
        type: 'button',
        action: { type: 'encapsulate', options: { pre: '[[Категория:', post: ']]\n' } },
        label: 'Категория',
        icon: wgScriptPath+'/extensions/CustisScripts/images/we-cat.png'
      }, 'blockquote': {
        type: 'button',
        action: { type: 'encapsulate', options: { pre: '<blockquote>\n', post: '\n</blockquote>' } },
        label: 'Развёрнутая цитата',
        icon: wgScriptPath+'/extensions/CustisScripts/images/we-blockquote.png'
      }, 'comment': {
        type: 'button',
        action: { type: 'encapsulate', options: { pre: '<!-- ', post: ' -->' } },
        label: 'Комментарий',
        icon: wgScriptPath+'/extensions/CustisScripts/images/we-comment.png'
      } }
    });
    $('div[rel="wikiEditor-ui-view-preview"] a, div[rel="wikiEditor-ui-view-changes"] a, #wikieditor-publish-button').mousedown(function() {
      if (window.wikEd && wikEd.useWikEd) {
        wikEd.UpdateTextarea();
      }
      return false;
    });
  } else {
    addCustomButton(wgScriptPath+'/extensions/CustisScripts/images/Button_redirect_rus.png', 'Перенаправление','#REDIRECT [[',']]','название страницы')
    addCustomButton(wgScriptPath+'/extensions/CustisScripts/images/Button-cat.png','Категория','[\[Категория:',']]\n','')
    addCustomButton(wgScriptPath+'/extensions/CustisScripts/images/Button_hide_comment.png', 'Комментарий', '<!-- ', ' -->', 'Комментарий')
    addCustomButton(wgScriptPath+'/extensions/CustisScripts/images/Button_blockquote.png', 'Развёрнутая цитата', '<blockquote>\n', '\n</blockquote>', 'Развёрнутая цитата одним абзацем')
    addCustomButton(wgScriptPath+'/extensions/CustisScripts/images/Button_insert_table.png',
      'Вставить таблицу', '{| class="wikitable"\n|-\n', '\n|}', '! заголовок 1\n! заголовок 2\n! заголовок 3\n|-\n| строка 1, ячейка 1\n| строка 1, ячейка 2\n| строка 1, ячейка 3\n|-\n| строка 2, ячейка 1\n| строка 2, ячейка 2\n| строка 2, ячейка 3')
    addCustomButton(wgScriptPath+'/extensions/CustisScripts/images/Button_reflink.png','Сноска','<ref>','</ref>','')
  }
}

if (mw)
  addCustomButton = function(){ mw.toolbar.insertButton.apply(mw.toolbar, arguments) }
else
  addCustomButton = function(img, tip, open, close, sample){
    mwCustomEditButtons[mwCustomEditButtons.length] =
      {'imageFile':img, 'speedTip':tip, 'tagOpen':open, 'tagClose':close, 'sampleText':sample}
  }

function addFuncButton(img, tip, func){
  var toolbar = document.getElementById('toolbar')
  if (!toolbar) return
  var i = document.createElement('img')
  i.src = img
  i.alt = i.title = tip
  i.onclick = func
  i.style.cursor = 'pointer'
  toolbar.insertBefore(i, toolbar.firstChild)
}

// Add Wikificator button, compatible with WikiEditor extension.
// Originally from ru.wikisource.org/wiki/MediaWiki:Wikificator.js
// 4intra.net changes: $group.prepend() instead of .wikiEditor('addToToolbar'), local image

function AddWikifikatorButton() {
  if (mediaWiki.user.options.get('usebetatoolbar') == 1) {
    var toolbar = document.getElementById('wikiEditor-ui-toolbar');
    if (toolbar != null) {
      var ctx = $('#wpTextbox1').data( 'wikiEditor-context' );
      var $group = ctx.modules.toolbar.$toolbar.find(
        'div[rel="main"].section div[rel="format"].group'
      );
      $group.prepend( $.wikiEditor.modules.toolbar.fn.buildTool( ctx, 'wikifikator', {
        type: 'button',
        action: { type:'callback', execute: function() { WikifyRus(); } },
        label: 'Викификатор',
        icon: wgScriptPath+'/extensions/CustisScripts/images/upload.wikimedia.org/wikipedia/commons/0/06/Wikify-toolbutton.png'
      } ) );
    };
  } else {
    var toolbar = document.getElementById('toolbar');
    if (toolbar != null) {
      var btn = document.createElement('img');
      btn.id = 'wikifikator'; // Чтобы потом можно было легко найти эту кнопку
      btn.src = wgScriptPath+'/extensions/CustisScripts/images/Button-wikifikator.png';
      btn.title = 'Викификатор';
      btn.alt = btn.title;
      btn.onclick = function() { WikifyRus(); };
      btn.style.cursor = 'pointer';
      if (toolbar.hasChildNodes()) {
        toolbar.insertBefore(btn, toolbar.firstChild);
      } else {
        toolbar.insertBefore(btn, null);
      };
    };
  };
}

// Edit Summary buttons

function SummaryButtons(){
  var wpSummary = document.getElementById('wpSummary')
  if (!wpSummary || (wpSummary.form.wpSection && wpSummary.form.wpSection.value == 'new')) return
  wpSummaryBtn = document.createElement('span') //global var
  wpSummaryBtn.id = 'userSummaryButtonsA'
  wpSummary.parentNode.insertBefore(wpSummaryBtn, wpSummary.nextSibling)
  wpSummary.parentNode.insertBefore(document.createElement('br'), wpSummary.nextSibling)
  addSumButton('оформл.', 'оформление', 'Улучшено оформление')
  addSumButton('стиль', 'стилевые правки', 'Поправлен стиль изложения')
  addSumButton('орфогр./пункт.', 'орфография/пунктуация', 'Поправлена орфография и пунктуация')
  addSumButton('катег.', 'категория', 'Исправлена категоризация')
  addSumButton('дополн.', 'дополнение', 'Добавлены новые сведения')
  addSumButton('замеч.', 'замечание', 'Внесено существенное замечание')
  addSumButton('обнов.', 'обновление данных', 'Обновлены устаревшие данные')
  addLiveRefreshButton()
}

/* Live Refresh JavaScript code */
/* TODO move it to an extension */
var liveRefreshDefaultSeconds = 30;
var liveRefreshEnableS5 = true;
var liveRefreshAddTo = 'userSummaryButtonsA';
var liveRefreshWindow;

function addLiveRefreshButton()
{
  var to = document.getElementById(liveRefreshAddTo);
  if (document.location.search.indexOf('&hideEditForm=1') > -1)
  {
    document.editform.parentNode.removeChild(document.editform);
    document.getElementById('toolbar').parentNode.removeChild(document.getElementById('toolbar'));
    return;
  }
  var btn = document.createElement('input');
  btn.type = 'checkbox';
  btn.id = 'LiveRefreshCheckbox';
  btn.style.cursor = 'pointer';
  to.appendChild(btn);
  var openlive = function(){
    if (btn.checked)
    {
      liveRefreshWindow = window.open('about:blank','LiveRefreshingPreview');
      liverefresh();
    }
    return true;
  };
  $(btn).click(openlive);
  $(btn).blur(openlive);
  var lab = document.createElement('label');
  lab.htmlFor = 'LiveRefreshCheckbox';
  lab.appendChild(document.createTextNode('Автопредпросмотр '));
  lab.style.cursor = 'pointer';
  to.appendChild(lab);
  var edt = document.createElement('input');
  edt.type = 'text';
  edt.size = '3';
  edt.id = 'LiveRefreshSeconds';
  edt.style.fontSize = '100%';
  edt.title = 'Интервал автоматического предпросмотра';
  edt.value = liveRefreshDefaultSeconds;
  to.appendChild(edt);
  to.appendChild(document.createTextNode(' секунд \u00A0'));
  if (liveRefreshEnableS5 && document.getElementById('wpTextbox1').value.toLowerCase().indexOf('<slide') >= 0)
  {
    var btn2 = document.createElement('input');
    btn2.type = 'checkbox';
    btn2.id = 'LiveRefreshAsS5';
    btn2.style.cursor = 'pointer';
    to.appendChild(btn2);
    lab = document.createElement('label');
    lab.htmlFor = 'LiveRefreshAsS5';
    lab.appendChild(document.createTextNode('слайды'));
    lab.style.cursor = 'pointer';
    to.appendChild(lab);
  }
  var ifr = document.createElement('iframe');
  ifr.id = 'LivePreviewInvisIframe';
  ifr.name = 'LivePreviewInvisIframe';
  ifr.style.display = 'none';
  to.appendChild(ifr);
  if (self.frames[ifr.id].name != ifr.id) /* IE fix */
    self.frames[ifr.id].name = ifr.id;
}

function livePreviewRefresh(uri)
{
  if (!liveRefreshWindow || liveRefreshWindow.closed)
  {
    document.getElementById('LiveRefreshCheckbox').checked = false;
    return;
  }
  var iss5 = document.getElementById('LiveRefreshAsS5');
  if (iss5)
    iss5 = iss5.checked;
  if (iss5)
    uri = uri.replace(/\?.*/, '')+'?action=slide&loadtextboxsession=1&hideEditForm=1';
  if (liveRefreshWindow.location.pathname+liveRefreshWindow.location.search != uri)
    liveRefreshWindow.location = uri;
  else
    liveRefreshWindow.location.reload(false);
  return true;
}

function liverefresh()
{
  if (liveRefreshWindow && liveRefreshWindow.closed)
    document.getElementById('LiveRefreshCheckbox').checked = false;
  if (document.getElementById('LiveRefreshCheckbox').checked)
  {
    var sec;
    try { sec = parseInt(document.getElementById('LiveRefreshSeconds').value); } catch(e) {}
    if (!sec || sec < 1)
      sec = liveRefreshDefaultSeconds;
    var iss5 = document.getElementById('LiveRefreshAsS5');
    if (iss5)
      iss5 = iss5.checked;
    var oa = document.editform.action;
    var na = oa+'&savetextboxsession=1&useskin=ichick';
    if (window.wikEd && wikEd.useWikEd)
      wikEd.UpdateTextarea();
    document.editform.action = na;
    document.editform.target = 'LivePreviewInvisIframe';
    document.editform.submit();
    document.editform.action = oa;
    document.editform.target = '';
    setTimeout("liverefresh()", sec*1000);
  }
}
/* End Live Refresh code */

function addSumButton(name, text, title) {
  var btn = document.createElement('a')
  btn.appendChild(document.createTextNode(name))
  btn.title = title
  btn.onclick = function(){insertSummary(text)}
  wpSummaryBtn.appendChild(btn)
}

function insertSummary(text) {
  var wpSummary = document.getElementById('wpSummary')
  if (wpSummary.value.indexOf(text) != -1) return
  if (wpSummary.value.match(/[^,; \/]$/)) wpSummary.value += ','
  if (wpSummary.value.match(/[^ ]$/)) wpSummary.value += ' '
  wpSummary.value += text
}

// Call functions
if ($) {
  $(document).ready(CustomButtons)
  $(document).ready(AddWikifikatorButton)
  $(document).ready(SummaryButtons)
} else {
  addOnloadHook(CustomButtons)
  addOnloadHook(AddWikifikatorButton)
  addOnloadHook(SummaryButtons)
}
