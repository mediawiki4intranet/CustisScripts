//<source lang=javascript>
//See http://ru.wikipedia.org/wiki/project:code
//I.e http://ru.wikipedia.org/wiki/MediaWiki:Common.js
//New functions: importScriptExt(), expandAllDivs(), collapseAllDivs(), isExpanded(idx), msgResize()
//Also changes in AltNavigationBarHide, AltNavigationBarShow

//import module
importScriptExt = function (page){
  importScriptURI(wgScriptPath+'/extensions/CustisScripts/'+page);
}

//hasClass, from en.wp
var hasClass = (function (){
  var reCache = {}
  return function (element, className){
    return (reCache[className] ? reCache[className] : (reCache[className] = new RegExp("(?:\\s|^)" + className + "(?:\\s|$)"))).test(element.className)
  }
})()

addLoadEvent = addOnloadHook //used on 48 user .js pages

//fix for sortable tables: comma as decimal dot
function ts_parseFloat(num){
  if (!num) return 0
  num = parseFloat(num.replace(/\./g, '').replace(/,/, '.'))
  return (isNaN(num) ? 0 : num)
}

//{Link FA} & {Link GA}
function LinkFA(){
  var pLang = document.getElementById('p-lang')
  if (!pLang) return
  var iw = pLang.getElementsByTagName('li')
  for (var i=0; i < iw.length; i++)
    if (document.getElementById(iw[i].className+'-fa')){
      iw[i].className += ' FA'
      iw[i].title = 'Эта статья является избранной в другом языковом разделе'
    }else if (document.getElementById(iw[i].className+'-ga')){
      iw[i].className += ' GA'
      iw[i].title = 'Эта статья является хорошей в другом языковом разделе'
    }
}

//{Modifynewsectionlink}
function newSectionLink(){
  var plus = document.getElementById('ca-addsection')
  if (!plus) return
  var custom = document.getElementById('add-custom-section')
  if (!custom) return
  plus.firstChild.setAttribute('href', custom.getElementsByTagName('A')[0].href)
}

//{Неверный заголовок}
function correctTitle(){
  if (window.disableRealTitle) return
  var toHide = document.getElementById('trestrictions_replace')
  if (!toHide) return
  var newTitle = document.getElementById('trestrictions_correct')
  if (!newTitle) return
  document.getElementsByTagName('h1')[0].innerHTML  = newTitle.innerHTML
  toHide.style.display = 'none'
  document.getElementById('trestrictions_replaced').style.display = 'block'
}

//[edit] zero section
function editZeroSection(){
  var body = document.getElementById('bodyContent')
  var first = document.getElementById('firstHeading')
  if (!body || window.disable_zero_section) return
  var h2s = body.getElementsByTagName('H2')
  var h2 = h2s[0]
  if (!h2) return
  if (h2.parentNode.id == 'toctitle') h2 = h2s[1]
  if (!h2) return
  var span = h2.firstChild
  if (!span || span.className != 'editsection') return
  var zero = span.cloneNode(true)
  first.insertBefore(zero, first.firstChild)
  var a = zero.getElementsByTagName('a')[0]
  if (a.href.indexOf('&section=T') == -1 )  a.title = a.title.replace(/:.*$/,': 0')
  else a.title = 'Править секцию: 0'
  a.setAttribute('href', wgScript + '?title='+wgPageName + '&action=edit&section=0')
}

//Collapsible Tables and Divs, [[ВП:СБ]]

var autoCollapse = 2
var collapseCaption = 'скрыть'
var expandCaption = 'показать'

function collapsibleTables(){
  var Table, HRow,  HCell, btn, a, tblIdx = 0, colTables = []
  var allTables = document.getElementsByTagName('table')
  for (var i=0; Table = allTables[i]; i++){
    if (!hasClass(Table, 'collapsible')) continue
    if (!(HRow=Table.rows[0])) continue
    if (!(HCell=HRow.getElementsByTagName('th')[0])) continue
    Table.id = 'collapsibleTable' + tblIdx
    btn = document.createElement('span')
    btn.style.cssText = 'float:right; font-weight:normal'
    a = document.createElement('a')
    a.id = 'collapseButton' + tblIdx
    a.href = 'javascript:collapseTable(' + tblIdx + ');' 
    a.style.color = HCell.style.color
    a.appendChild(document.createTextNode(collapseCaption))
    btn.appendChild(document.createTextNode('['))
    btn.appendChild(a)
    btn.appendChild(document.createTextNode(']'))
    HCell.insertBefore(btn, HCell.childNodes[0])
    colTables[tblIdx++] = Table
  }
  for (var i=0; i < tblIdx; i++)
    if ((tblIdx > autoCollapse && hasClass(colTables[i], 'autocollapse')) || hasClass(colTables[i], 'collapsed'))
      collapseTable(i)
}

function collapseTable (idx){
  var Table = document.getElementById('collapsibleTable' + idx)
  var btn = document.getElementById('collapseButton' + idx)
  if (!Table || !btn) return false
  var Rows = Table.rows
  var isShown = (btn.firstChild.data == collapseCaption)
  btn.firstChild.data = isShown ?  expandCaption : collapseCaption
  var disp = isShown ? 'none' : Rows[0].style.display
  for (var i=1; i < Rows.length; i++)
    Rows[i].style.display = disp
}

var NavigationBarHide = '[' + collapseCaption + ']'
var NavigationBarShow = '[' + expandCaption + ']'
var AltNavigationBarHide = '[-] '
var AltNavigationBarShow = '[+] '
var AltMargin = 18
var NavigationBarShowDefault = autoCollapse
var NavFrameCount = 0

function collapsibleDivs(){
  var colNavs = [], i, NavFrame
  var divs = document.getElementById('content').getElementsByTagName('div')
  for (i=0; NavFrame = divs[i]; i++) {
    if (!hasClass(NavFrame, 'NavFrame')) continue
    NavFrame.id = 'NavFrame' + NavFrameCount
    var a = document.createElement('a')
    a.className = 'NavToggle'
    a.id = 'NavToggle' + NavFrameCount
    a.href = 'javascript:collapseDiv(' + NavFrameCount + ');'
    if (hasClass(NavFrame, 'alternative'))
    {
      NavFrame.style.marginLeft = AltMargin+'px'
      a.appendChild(document.createTextNode(AltNavigationBarHide))
      for (var j=0; j < NavFrame.childNodes.length; j++)
        if (hasClass(NavFrame.childNodes[j], 'NavHead'))
        {
          NavFrame.childNodes[j].style.textIndent = '-'+AltMargin+'px'
          if (NavFrame.childNodes[j].childNodes.length > 0)
            NavFrame.childNodes[j].insertBefore(a, NavFrame.childNodes[j].childNodes[0])
          else
            NavFrame.insertBefore(a, NavFrame.childNodes[j])
        }
    }
    else
    {
      a.appendChild(document.createTextNode(NavigationBarHide))
      // Find the NavHead and attach the toggle link (Must be this complicated because Moz's firstChild handling is borked)
      for (var j=0; j < NavFrame.childNodes.length; j++)
        if (hasClass(NavFrame.childNodes[j], 'NavHead'))
          NavFrame.childNodes[j].appendChild(a)
    }
    colNavs[NavFrameCount++] = NavFrame
  }
  for (i=0; i < NavFrameCount; i++)
    if ((NavFrameCount > NavigationBarShowDefault && !hasClass(colNavs[i], 'expanded')) || hasClass(colNavs[i], 'collapsed'))
      collapseDiv(i)
}

function collapseAllDivs() {
  for (var i = 0; i < NavFrameCount; i++)
    if (isExpanded(i))
      collapseDiv(i);
}

function expandAllDivs() {
  for (var i = 0; i < NavFrameCount; i++)
    if (!isExpanded(i))
      collapseDiv(i);
}

function isExpanded(idx) {
  var btn = document.getElementById('NavToggle' + idx);
  if (!btn) return null;
  return (btn.firstChild.data == NavigationBarHide || btn.firstChild.data == AltNavigationBarHide);
}

function collapseDiv(idx) {
  var div = document.getElementById('NavFrame' + idx)
  var btn = document.getElementById('NavToggle' + idx)
  if (!div || !btn) return false
  var isShown = (btn.firstChild.data == NavigationBarHide || btn.firstChild.data == AltNavigationBarHide)
  var isAlt = (btn.firstChild.data == AltNavigationBarHide || btn.firstChild.data == AltNavigationBarShow)
  btn.firstChild.data = isAlt ? (isShown ? AltNavigationBarShow : AltNavigationBarHide) : (isShown ? NavigationBarShow : NavigationBarHide)
  var disp = isShown ? 'none' : 'block'
  for (var child = div.firstChild;  child != null;  child = child.nextSibling)
    if (hasClass(child, 'NavPic') || hasClass(child, 'NavContent'))
      child.style.display = disp
}

//[[Special:Upload]]: insert {Изображение} automatically, insert {Обоснование добросовестного использования} with click
function uploadPage(){
  var desc = document.getElementById('wpUploadDescription')
  var tmpl = document.getElementById('imageinfo')
  if (tmpl && desc && !desc.value) desc.value = tmpl.innerHTML
  var span = document.getElementById('insertlink')
  if (!span) return
  var a = document.createElement('a')
  a.href = 'javascript:addRationaleTemplate()'
  span.parentNode.insertBefore(a, span)
  a.appendChild(span)
  span.style.display = 'inline'
}

function addRationaleTemplate(){
  var desc = document.getElementById('wpUploadDescription')
  var tmpl = document.getElementById('rationale')
  if (desc && tmpl && desc.value.indexOf(tmpl.innerHTML.substring(0,8)) == -1){
    desc.value += '\n' + tmpl.innerHTML
    desc.rows = 15
  }
}

//Load functions on special pages
if (wgCanonicalNamespace == 'Special'){
  if (wgCanonicalSpecialPageName == 'Upload')
    addOnloadHook(uploadPage)
  else if (wgCanonicalSpecialPageName == 'Search' && searchPage)
    addOnloadHook(searchPage)

//Load functions on normal pages
}else if (wgAction != 'history'){
  addOnloadHook(editZeroSection)
  addOnloadHook(collapsibleDivs)
  addOnloadHook(collapsibleTables)
  addOnloadHook(correctTitle)
  if (wgNamespaceNumber == 0)
    addOnloadHook(LinkFA)
  else
    addOnloadHook(newSectionLink)
  if (wgAction == 'edit' || wgAction == 'submit')
    importScriptExt('editpage.js');
}

if (navigator.appName == 'Microsoft Internet Explorer')
  addOnloadHook(function(){
    if (!window.IEFixesDisabled) importScript('MediaWiki:IEFixes.js')
  })

//HTML5 postMessage usage to ease embedding iframes from different domains
//The page loaded in iframe needs to send postMessage("resize(w=WIDTH;h=HEIGHT)") to be resized.
//Works in IE8+, FF3+, Opera 9.5+ and Chrome.

msgResize = function(e)
{
  var m = /resize\(w=(\d+);h=(\d+)\)/.exec(e.data);
  if (m)
  {
    var f = document.getElementsByTagName('iframe');
    for (var i = 0; i < f.length; i++)
    {
      if (f[i].contentWindow == e.source)
      {
        f[i].style.width = m[1]+'px';
        f[i].style.height = m[2]+'px';
        break;
      }
    }
  }
};

addHandler(window, 'message', msgResize);

//</source>
