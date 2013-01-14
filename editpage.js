// http://ru.wikipedia.org/wiki/project:code

// Parts from http://ru.wikipedia.org/wiki/MediaWiki:Editpage.js
// Also contains LiveRefresh code

// Toolbar buttons

function CustomButtons(){
  if (mediaWiki.user.options.get('usebetatoolbar') == 1) {
    $j('#wpTextbox1').wikiEditor('addToToolbar', {
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
    })
    $j('div[rel="wikiEditor-ui-view-preview"] a, div[rel="wikiEditor-ui-view-changes"] a').mousedown(function() {
      if (wikEd && wikEd.useWikEd) {
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
  wikEd.AddEventListener(btn, 'click', openlive);
  wikEd.AddEventListener(btn, 'blur', openlive);
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
    if (wikEd.useWikEd)
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
