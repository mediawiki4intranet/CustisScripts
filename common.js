// <source lang=javascript>
// http://ru.wikipedia.org/wiki/project:code
// Originally taken from http://ru.wikipedia.org/wiki/MediaWiki:Common.js
//
// Mediawiki4Intranet changes:
// * New functions: importScriptExt(), expandAllDivs(), collapseAllDivs()
// * msgResize(), openM3uVideo()
// * Also changes in AltNavigationBarHide, AltNavigationBarShow
// * editpage.js is loaded via PHP hook, not via js one

var zeroSectionTip = 'Править введение';

//hasClass, from en.wp
var hasClass = (function (){
  var reCache = {}
  return function (element, className){
    return (reCache[className] ? reCache[className] : (reCache[className] = new RegExp("(?:\\s|^)" + className + "(?:\\s|$)"))).test(element.className)
  }
})()

//fix for sortable tables: comma as decimal dot
window.ts_parseFloat = function(num){
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
  if( !wgArticleId ) return;
  $('.editsection:first')
    .clone().prependTo('.firstHeading')
    .css('float','right')
    .find('a')
    .attr('title', zeroSectionTip)
    .attr('href', wgScript + '?title='+mw.util.wikiUrlencode( wgPageName ) + '&action=edit&section=0' );
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

window.collapseTable = function(idx) {
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

var addListener = (function() {
  return window.addEventListener
    ? function(el, type, fn) { el.addEventListener(type, fn, false); }
    : function(el, type, fn) { el.attachEvent('on'+type, fn); };
})();

function collapsibleDivs(){
  var colNavs = [], i, NavFrame
  var content = document.getElementById('content');
  if (!content) return;
  var divs = document.getElementById('content').getElementsByTagName('div')
  addListener(window, 'click', function(ev)
  {
    ev = ev||window.event;
    var t = ev.target || ev.srcElement;
    while (t && (!t.className || t.className.indexOf('NavHead') < 0 && t.className.indexOf('NavOpen') < 0))
      t = t.parentNode;
    if (t)
    {
      if (t.className.indexOf('NavOpen') >= 0)
      {
        var n = t.parentNode.parentNode;
        var c = n.className.indexOf('collapsed') >= 0;
        n.className = c ? n.className.replace(/\s*collapsed\s*/g, ' ') : n.className+' collapsed';
        t.innerHTML = c ? t.getAttribute('data-collapse') : t.getAttribute('data-expand');
        ev.preventDefault && ev.preventDefault();
        return false;
      }
      else
      {
        var n = t.parentNode;
        if (n.className.indexOf('new') < 0)
        {
          var c = n.className.indexOf('collapsed') >= 0;
          n.className = c ? n.className.replace(/\s*collapsed\s*/g, ' ') : n.className+' collapsed';
        }
      }
    }
  });
  return
}

window.collapseAllDivs = function() {
  $('.NavFrame').each(function() {
    if (!/\bcollapsed\b/.exec(this.className))
      this.className += ' collapsed';
  })
}

window.expandAllDivs = function() {
  $('.NavFrame').each(function() {
    this.className = this.className.replace(/\s*collapsed\s*/g, ' ');
  })
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

var ruOnload = function() {
  if (wgCanonicalNamespace == 'Special') {
    if (wgCanonicalSpecialPageName == 'Upload') {
      uploadPage();
    }
  } else if (wgAction != 'history') {
    editZeroSection();
    collapsibleDivs();
    collapsibleTables();
    correctTitle();
    if (wgNamespaceNumber == 0)
      LinkFA();
    else
      newSectionLink();
  }
};

$ ? $(document).ready(ruOnload) : addOnloadHook(ruOnload);

// Non-jQuery version of [[mw:Reference Tooltips]]
// See also custis.css

(function(){
  var tooltipNode, timer;
  function findRef(h)
  {
    h = h.childNodes[0].getAttribute("href");
    h = h && h.split("#");
    h = h && h[1];
    h = h && document.getElementById(h);
    return h;
  }
  function findPos(obj)
  {
    if (obj.offsetParent)
    {
      var r = [ 0, 0 ];
      while (obj)
      {
        r[0] += obj.offsetLeft;
        r[1] += obj.offsetTop;
        obj = obj.offsetParent;
      }
      return r;
    }
    else if (obj.y)
      return [ obj.x, obj.y ];
  }
  function hide(ev)
  {
    if (tooltipNode && tooltipNode.parentNode == document.body)
    {
      timer = setTimeout(function() {
        tooltipNode.className = 'referencetooltip hidden';
        if (tooltipNode)
          document.body.removeChild(tooltipNode);
        tooltipNode = null;
      }, 100);
    }
    else
    {
      var h = findRef(this);
      h && (h.style.border = "");
    }
  }
  function show()
  {
    if (!tooltipNode.parentNode || tooltipNode.parentNode.nodeType === 11)
      document.body.appendChild(tooltipNode);
    clearTimeout(timer);
    timer = setTimeout(function() { tooltipNode.className = 'referencetooltip shown'; }, 1);
  }
  $(document).ready(function()
  {
    $('.reference').on('mouseover', function()
    {
      var h = findRef(this);
      if (!h)
        return;
      if (document.body.scrollTop + screen.availHeight > findPos(h)[1])
      {
        h.style.border = "#080086 2px solid";
        return;
      }
      if (!tooltipNode)
      {
        tooltipNode = document.createElement("ul");
        tooltipNode.className = "referencetooltip";
        var c = tooltipNode.appendChild(h.cloneNode(true));
        try
        {
          if (c.childNodes[0].nodeName != "A")
          {
            while (c.childNodes[1].nodeName == "A" && c.childNodes[1].getAttribute("href").indexOf("#cite_ref-") !== -1)
            {
              do { c.removeChild(c.childNodes[1]); }
              while (c.childNodes[1].nodeValue == " ");
            }
          }
        }
        catch (e) { mw.log(e) }
        c.removeChild(c.firstChild);
        $(tooltipNode).on('mouseover', show);
        $(tooltipNode).on('mouseout', hide);
      }
      show();
      var o = findPos(this);
      tooltipNode.style.top = (o[1]-tooltipNode.offsetHeight) + 'px';
      tooltipNode.style.left = (o[0]-7) + 'px';
    });
  })
  $('.reference').on('mouseout', hide);
})();

// Open document using inline data URI
window.openM3uVideo = function(url, duration, unixurl)
{
  var seconds = ''+duration;
  var m = /^(\d+):(\d+)(:(\d+))?$/.exec(seconds);
  if (m)
  {
    if (m[4])
      seconds = parseInt(m[1], 10)*3600 + parseInt(m[2], 10)*60 + parseInt(m[4], 10);
    else
      seconds = parseInt(m[1], 10)*60 + parseInt(m[2], 10);
  }
  var unix = window.navigator.platform.toLowerCase().indexOf('win') < 0;
  var s = "#EXTM3U\n#EXTVLCOPT:start-time="+seconds+"\n"+(unix && unixurl ? unixurl : url);
  document.location = "data:audio/x-mpegurl,"+encodeURIComponent(s);
}

// </source>
