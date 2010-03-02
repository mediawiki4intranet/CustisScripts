
//Toolbar buttons

function StandardButtons(){
 if (mwEditButtons.length < 6) return
 mwEditButtons[0].imageFile = wgScriptPath+'/extensions/CustisScripts/images/Button_boldru.png'
 mwEditButtons[1].imageFile = wgScriptPath+'/extensions/CustisScripts/images/Button_italicru.png'
 mwEditButtons[2].imageFile = wgScriptPath+'/extensions/CustisScripts/images/Button_internal_link_ukr.png'
 mwEditButtons[5].tagClose = '|thumb]]'
}

function CustomButtons(){
 addCustomButton(wgScriptPath+'/extensions/CustisScripts/images/Button_redirect_rus.png', 'Перенаправление','#REDIRECT [[',']]','название страницы')
 addCustomButton(wgScriptPath+'/extensions/CustisScripts/images/Button-cat.png','Категория','[\[Категория:',']]\n','')
 addCustomButton(wgScriptPath+'/extensions/CustisScripts/images/Button_hide_comment.png', 'Комментарий', '<!-- ', ' -->', 'Комментарий')
 addCustomButton(wgScriptPath+'/extensions/CustisScripts/images/Button_blockquote.png', 'Развёрнутая цитата', '<blockquote>\n', '\n</blockquote>', 'Развёрнутая цитата одним абзацем')
 addCustomButton(wgScriptPath+'/extensions/CustisScripts/images/Button_insert_table.png',
 'Вставить таблицу', '{| class="wikitable"\n|-\n', '\n|}', '! заголовок 1\n! заголовок 2\n! заголовок 3\n|-\n| строка 1, ячейка 1\n| строка 1, ячейка 2\n| строка 1, ячейка 3\n|-\n| строка 2, ячейка 1\n| строка 2, ячейка 2\n| строка 2, ячейка 3')
 addCustomButton(wgScriptPath+'/extensions/CustisScripts/images/Button_reflink.png','Сноска','<ref>','</ref>','')
}

function addCustomButton(img, tip, open, close, sample){
 mwCustomEditButtons[mwCustomEditButtons.length] =
  {'imageFile':img, 'speedTip':tip, 'tagOpen':open, 'tagClose':close, 'sampleText':sample}
}

function addFuncButton(img, tip, func){
 var toolbar = document.getElementById('toolbar')
 if (!toolbar) return
 var i = document.createElement('img')
 i.src = img
 i.alt = tip;  i.title = tip
 i.onclick = func
 i.style.cursor = 'pointer'
 toolbar.appendChild(i)
}

function WikifButton(){
 var t = document.getElementById('wpTextbox1')
 if (!t || (!document.selection && t.selectionStart == null)) return
 addFuncButton(wgScriptPath+'/extensions/CustisScripts/images/Button-wikifikator.png', 'Викификатор', WikifyRus)
// addFuncButton(wgScriptPath+'/extensions/CustisScripts/images/Button-wikifikator.png', 'Викификатор', WikEdWikifyRus)
}

//Edit Summary buttons

/* Live Refresh JavaScript code */
/* TODO move it to an extension */
var liveRefreshDefaultSeconds = 30;
var liveRefreshEnableS5 = true;
var liveRefreshAddTo = 'userSummaryButtonsA';
var liveRefreshWindow;

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

function addLiveRefreshButton()
{
 var to = document.getElementByid();
 if (document.location.search.indexOf('&hideEditForm=1') > -1)
 {
  document.editform.style.display = 'none';
  document.getElementById('toolbar').style.display = 'none';
  return;
 }
 var btn = document.createElement('input');
 btn.type = 'checkbox';
 btn.id = 'LiveRefreshCheckbox';
 btn.onchange = function(){
  if (document.getElementById('LiveRefreshCheckbox').checked)
   liveRefreshWindow = window.open('about:blank','LiveRefreshingPreview');
  liverefresh();
 };
 btn.style.cursor = 'pointer';
 to.appendChild(btn);
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
  btn = document.createElement('input');
  btn.type = 'checkbox';
  btn.id = 'LiveRefreshAsS5';
  btn.style.cursor = 'pointer';
  to.appendChild(btn);
  lab = document.createElement('label');
  lab.htmlFor = 'LiveRefreshAsS5';
  lab.appendChild(document.createTextNode('слайды'));
  lab.style.cursor = 'pointer';
  to.appendChild(lab);
 }
 var ifr = document.createElement('iframe');
 ifr.id = 'LivePreviewInvisIframe';
 ifr.style.display = 'none';
 to.appendChild(ifr);
}

function livePreviewRefresh(uri)
{
 if (liveRefreshWindow && liveRefreshWindow.closed)
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
  liveRefreshWindow.location.reload(true);
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
  var na = oa+'&savetextboxsession=1';
  document.editform.action = na;
  document.editform.target = 'LivePreviewInvisIframe';
  document.editform.submit();
  document.editform.action = oa;
  document.editform.target = '';
  setTimeout("liverefresh()", sec*1000);
 }
}

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

//call functions
addOnloadHook(StandardButtons)
addOnloadHook(CustomButtons)
addOnloadHook(WikifButton)
addOnloadHook(SummaryButtons)
