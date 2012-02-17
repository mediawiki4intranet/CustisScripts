// Russian Wikify for MediaWiki
// Original taken from: http://ru.wikipedia.org/w/index.php?title=MediaWiki:Wikificator.js
// Changes made by 4Intra.net:
// * Custom config for WikEd, replaces all script links to local wiki
// * Bug 70580 - thin spaces in cities and initials
// * Do not wikify <m>, code-*, links
// * Do not replace english namespace names with russian

// <source lang=javascript>
var wmVersion = '2012-02-02'
var wmCantWork = 'Викификатор не может работать в вашем браузере\n\nWikificator can not work in your browser'
var wmFullText = 'Викификатор обработает ВЕСЬ текст на этой странице. Продолжить?'
var wmTalkPage = 'Викификатор не обрабатывает страницы обсуждения целиком.\n\nВыделите ваше сообщение — обработано будет только оно'
wfPlugins = window.wfPlugins || []

// set local paths for images and scripts
var wikEdConfig = {
    diffScriptSrc: wgScriptPath+'/extensions/CustisScripts/diff.js',
    diffSrc: wgScriptPath+'/extensions/CustisScripts/wikEdDiff.js',
    imagePath: wgScriptPath+'/extensions/CustisScripts/images/upload.wikimedia.org/wikipedia/commons/',
    instaViewSrc: wgScriptPath+'/extensions/CustisScripts/instaview.js',
    IERangeSrc: wgScriptPath+'/extensions/CustisScripts/ierange.js',
    regExTypoFixURL: wgScriptPath+'/index.php?action=raw&title=WikEd_Typos.xml',
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
    }
};

function WikifyRus()
{
  var txt, hidden = [], hidIdx = 0;
  if (typeof wikEd.useWikEd != 'undefined' && wikEd.useWikEd) {
    wikEd.EditButton(document.getElementById('wikEdInsertTags'), 'wikEdWikifyRus', [], MyWikifyHandler);
    return;
  }
  if (('code'.replace(/d/g, 'r') != 'core') //check regexp support
      || (navigator.appName=='Netscape' && navigator.appVersion.substr (0, 1) < 5))
  { alert(wmCantWork); return; }
  var wpTextbox1 = document.editform.wpTextbox1
  var winScroll = document.documentElement.scrollTop //remember window scroll
  wpTextbox1.focus()

  var endPos = wpTextbox1.selectionEnd

  if (typeof wpTextbox1.selectionStart != 'undefined')
  { // Mozilla/Opera/Safari3
    var textScroll = wpTextbox1.scrollTop
    var startPos = wpTextbox1.selectionStart
    var endPos = wpTextbox1.selectionEnd
    txt = wpTextbox1.value.substring(startPos, endPos)
    if (txt == '') processAllText()
    else {
      processText()
      wpTextbox1.value = wpTextbox1.value.substring(0, startPos) + txt + wpTextbox1.value.substring(endPos)
    }
    wpTextbox1.selectionStart = startPos
    wpTextbox1.selectionEnd = startPos + txt.length
    wpTextbox1.scrollTop = textScroll
  }
  else if (document.selection && document.selection.createRange) { // IE
    var range = document.selection.createRange()
    txt = range.text
    if (txt == '')
      processAllText()
    else {
      processText()
      range.text = txt
      if (range.moveStart) range.moveStart('character', - txt.length)
      range.select()
    }
  } else if (confirm(wmFullText)) // other browsers
    processAllText()

  document.documentElement.scrollTop = winScroll // scroll back, for IE/Opera

//functions

function processAllText(){
 txt = wpTextbox1.value
 if (txt=='version') alert('Викификатор '+wmVersion)
 processText()
 r(/^[\n\r]+/, '')
 wpTextbox1.value = txt
 txt = ''
 if (window.auto_comment && window.insertSummary && !document.editform.wpSection.value)
   insertSummary('викификатор')
}

function processText(){
var thinspace = '\u202F' // 4Intra.net Patch Bug 70580
var u = '\u00A0' //unbreakable space
if (wgNamespaceNumber % 2 || wgNamespaceNumber==4) { //is talk page
 u = ' '
 var sigs = txt.match(/\d\d:\d\d, \d\d? \S{3,8} 20\d\d \(UTC\)/g)
 if (sigs && sigs.length > 1) {
   alert(wmTalkPage); return
 }
}

// 4Intra.net patch begin
hideTag('html')
hideTag('m')
hide(RegExp('^ .*$', 'gi')) //lines starting with space
hide(RegExp('(http|https|ftp|tftp|news|nntp|telnet|irc|gopher)://[^ \n\r\u00A0]* ?', 'gi')) //links
// 4Intra.net patch end

hideTag('nowiki')
hideTag('pre')
hideTag('source')
hideTag('syntaxhighlight')
hideTag('code[\\-\\w]*')
hideTag('tt')
hideTag('math')
hideTag('timeline')

r(/( |\n|\r)+\{\{(·|•|\*)\}\}/g, '{{$2}}') //before {{·/•/*}}, usually in templates
r(/{\{\s*([Шш]аблон|[tT]emplate):([\s\S]+?)}}/g, '{{$2}}') // 4intra.net: also normalise english alias
r(/({\{\s*)reflist(\s*[|}])/ig,'$1примечания$2')
hide(/{\{[\s\S]+?}}/g)//templates

hide(/^ .*/mg)
hide(/(https?|ftp|news|nntp|telnet|irc|gopher):\/\/[^\s\[\]<>"]+ ?/gi)
hide(/^#(redirect|перенапр(авление)?)/i)
hideTag('gallery')


r(/ +(\n|\r)/g,'$1')//spaces at EOL
txt = '\n'+txt+'\n'



// 4intra.net patch: removed 'Category:' 'Image:' 'File:' link normalisation
//Linked years, centuries and ranges
r(/(\(|\s)(\[\[[12]?\d{3}\]\])[\u00A0 ]?(-{1,3}|–|—) ?(\[\[[12]?\d{3}\]\])(\W)/g, '$1$2—$4$5')
r(/(\[\[[12]?\d{3}\]\]) ?(гг?\.)/g, '$1'+u+'$2')
r(/(\(|\s)(\[\[[IVX]{1,5}\]\])[\u00A0 ]?(-{1,3}|–|—) ?(\[\[[IVX]{1,5}\]\])(\W)/g, '$1$2—$4$5')
r(/(\[\[[IVX]{1,5}\]\]) ?(вв?\.)/g, '$1'+u+'$2')
r(/\[\[(\d+)\]\]\sгод/g, '[[$1'+u+'год]]')
r(/\[\[(\d+)\sгод\|\1\]\]\sгод/g, '[[$1'+u+'год]]')
r(/\[\[(\d+)\sгод\|\1\sгод([а-я]{0,3})\]\]/g, '[[$1'+u+'год]]$2')
r(/\[\[((\d+)(?: (?:год )?в [\wa-яёА-ЯЁ ]+\|\2)?)\]\][\u00A0 ](год[а-яё]*)/g, '[[$1'+u+'$3]]')
r(/\[\[([XVI]+)\]\]\sвек/g, '[[$1'+u+'век]]')
r(/\[\[([XVI]+)\sвек\|\1\]\]\sвек/g, '[[$1'+u+'век]]')
r(/\[\[([XVI]+)\sвек\|\1\sвек([а-я]{0,3})\]\]/g, '[[$1'+u+'век]]$2')
r(/\[\[(([XVI]+) век\|\2)\]\][\u00A0 ]век/g, '[[$2'+u+'век]]')
// Nice links
r(/(\[\[[^|\[\]]*)[\u00AD\u200E\u200F]+([^\[\]]*\]\])/g, '$1$2') // Soft Hyphen & DirMark
r(/\[\[ *([^|\[\]]+) *\| *(\1)([a-zа-яё]*) *\]\]/g, '[[$2]]$3')
r(/\[\[ *([^|\[\]]+)([^|\[\]()]+) *\| *\1 *\]\]\2/g, '[[$1$2]]') // text repetition after link
r(/\[\[ *(?!Файл:|Категория:|File:|Image:|Category:)([a-zA-Zа-яёА-ЯЁ\u00A0-\u00FF %!\"$&'()*,\-—.\/0-9:;=?\\@\^_`’~]+) *\| *([^|[\]]+) *\]\]([a-zа-яё]+)/g, '[[$1|$2$3]]') // "
hide(/\[\[[^\]|]+/g)//only link part

//TAGS
r(/<<(\S.+\S)>>/g, '"$1"') //<< >>
r(/(su[pb]>)-(\d)/g, '$1−$2') // ->minus
r(/&sup2;/gi, '²')
r(/&sup3;/gi, '³')
r(/<(b|strong)>(.*?)<\/(b|strong)>/gi,"'''$2'''")
r(/<(i|em)>(.*?)<\/(i|em)>/gi,"''$2''")
r(/^<hr ?\/?>/gim, '----')
r(/<[\/\\]?(hr|br)( [^\/\\>]+?)? ?[\/\\]?>/gi, '<$1$2 />')
r(/[ \t]*<ref(?:\s+name="")?(\s|>)/gi, '<ref$1')
r(/(\n== *[a-zа-я\s\.:]+ *==\n+)<references *\/>/ig,'$1{\{примечания}}')
hide(/<[a-z][^>]*?>/gi)

hide(/^({\||\|-).*/mg)//table/row def
hide(/(^\||^!|!!|\|\|) *[a-z]+=[^|]+\|(?!\|)/mgi)//cell style
hide(/\| +/g)//formatted cell

r(/[ \t]+/g,' ')//double spaces

// Headings
r(/^(=+)[ \t\f\v]*(.*?)[ \t\f\v]*=+$/gm, '$1 $2 $1') //add spaces inside
r(/([^\r\n])(\r?\n==.*==\r?\n)/g, '$1\n$2') //add empty line before
r(/^== см(\.?|отри|отрите) ?также ==$/gmi, '== См. также ==')
r(/^== сноски ==$/gmi, '== Примечания ==')
r(/^== внешние\sссылки ==$/gmi, '== Ссылки ==')
r(/^== (.+)[.:] ==$/gm, '== $1 ==')
r(/^== '''(?!.*'''.*''')(.+)''' ==$/gm, '== $1 ==')

r(/«|»|“|”|„/g, '"')//temp

// Hyphens and en dashes to pretty dashes
r(/–/g, '-') //&ndash; ->  hyphen
r(/&(#151|[nm]dash);/g, '—') // -> &mdash;
r(/(&nbsp;|\s)-{1,3} /g, '$1— ') // hyphen -> &mdash;
r(/(\d)--(\d)/g, '$1—$2') // -> &mdash;
r(/(\s)-(\d)/g, '$1−$2') //hyphen -> minus

// Entities etc. → Unicode chars
r(/&#x([0-9a-f]{1,4});/gi, function(n,a){return String.fromCharCode(eval('0x'+a.substr(-4)))})  //&#x301;
r(/&copy;/gi,'©')
r(/&reg;/gi,'®')
r(/&sect;/gi,'§')
r(/&euro;/gi,'€')
r(/&yen;/gi,'¥')
r(/&pound;/gi,'£')
r(/&deg;/g,'°')
r(/\(tm\)|&trade;/gi,'™')
r(/\.\.\.|&hellip;/g,'…')
r(/(^|[^+])\+-(?!\+|-)|&plusmn;/g,'$1±')
r(/~=/g,'≈')
r(/\^2(\D)/g,'²$1')
r(/\^3(\D)/g,'³$1')
r(/(\s)кв\.\s*(дм|см|мм|мкм|нм|км|м)(\s)/g, '$1'+u+'$2²$3')
r(/(\s)куб\.\s*(дм|см|мм|мкм|нм|км|м)(\s)/g, '$1'+u+'$2³$3')
r(/((?:^|[\s"])\d+(?:[\.,]\d+)?)\s*[xх]\s*(\d+(?:[\.,]\d+)?)\s*([мm]{1,2}(?:[\s"\.,;?!]|$))/g, '$1×$2'+u+'$3')
r(/&((la|ra|bd|ld)quo|quot);/g,'"')
r(/([\wа-яА-ЯёЁ])'([\wа-яА-ЯёЁ])/g,'$1’$2') //'
r(/№№/g,'№')

// Year and century ranges
r(/(\(|\s)([12]?\d{3})[\u00A0 ]?(-{1,3}|—) ?([12]?\d{3})(?![\w-])/g, '$1$2—$4')
r(/([12]?\d{3}) ?(гг?\.)/g, '$1'+u+'$2')
r(/(\(|\s)([IVX]{1,5})[\u00A0 ]?(-{1,3}|—) ?([IVX]{1,5})(?![\w-])/g, '$1$2—$4')
r(/([IVX]{1,5}) ?(вв?\.)/g, '$1'+u+'$2')

// Reductions
r(/(Т|т)\.\s?е\./g, '$1о есть')
r(/(Т|т)\.\s?к\./g, '$1ак как')
r(/(В|в)\sт\. ?ч\./g, '$1 том числе')
r(/(И|и)\sт\.\s?д\./g, '$1'+u+'т\.'+u+'д\.')
r(/(И|и)\sт\.\s?п\./g, '$1'+u+'т\.'+u+'п\.')
r(/(Т|т)\.\s?н\./g, '$1\.'+u+'н\.')
r(/(И|и)\.\s?о\./g, '$1\.'+u+'о\.')
r(/н\.\s?э\./g, 'н\.'+u+'э\.')
r(/(Д|д)(о|\.)\sн\.\s?э\./g, '$1о'+u+'н\.'+u+'э\.')
r(/(\d)[\u00A0 ]?(млн|млрд|трлн|(?:м|с|д|к)?м|[км]г)\.?(?=[,;.]| "?[а-яё-])/g, '$1'+u+'$2')
r(/(\d)[\u00A0 ](тыс)([^\.А-Яа-яЁё])/g, '$1'+u+'$2.$3')
r(/ISBN:\s?(?=[\d\-]{8,17})/,'ISBN ')

// Insert/delete spaces
r(/^([#*:]+)[ \t\f\v]*(?!\{\|)([^ \t\f\v*#:;])/gm, '$1 $2') //space after #*: unless before table
r(/(\S) (-{1,3}|—) (\S)/g, '$1'+u+'— $3')
r(/([А-ЯЁ]\.) ?([А-ЯЁ]\.) ?([А-ЯЁ][а-яё])/g, '$1'+thinspace+'$2'+thinspace+'$3')  // 4Intra.net Patch Bug 70580 - Инициалы
r(/([А-ЯЁ]\.)([А-ЯЁ]\.)/g, '$1'+thinspace+'$2')  // 4Intra.net Patch Bug 70580 - Инициалы
r(/(г\.) ?([А-Я][а-я])/g, '$1'+thinspace+'$2')  // 4Intra.net Patch Bug 70580 - Города
r(/([а-яё]"?\)?[\.\?!:])((?:\x01\d+\x02\|)?[A-ZА-ЯЁ])/g, '$1 $2') // word. word
r(/([)"a-zа-яё\]])\s*([,:])([\[("a-zа-яё])/g, '$1$2 $3') // word, word
r(/([)"a-zа-яё\]])\s([,;])\s([\[("a-zа-яё])/g, '$1$2 $3')
r(/([^%\/\wА-Яа-яЁё]\d+?(?:[\.,]\d+?)?) ?([%‰])(?!-[А-Яа-яЁё])/g, '$1'+u+'$2') //5 %
r(/(\d) ([%‰])(?=-[А-Яа-яЁё])/g, '$1$2') //5%-й
r(/([№§])(\s*)(\d)/g, '$1'+u+'$3')
r(/\( +/g, '('); r(/ +\)/g, ')') //inside ()

//Temperature
r(/([\s\d=≈≠≤≥<>—("'|])([+±−-]?\d+?(?:[.,]\d+?)?)(([ °^*]| [°^*])C)(?=[\s"').,;!?|])/gm, '$1$2'+u+'°C') //'
r(/([\s\d=≈≠≤≥<>—("'|])([+±−-]?\d+?(?:[.,]\d+?)?)(([ °^*]| [°^*])F)(?=[\s"').,;|!?])/gm, '$1$2'+u+'°F') //'

//Dot → comma in numbers
r(/(\s\d+)\.(\d+[\u00A0 ]*[%‰°×])/gi, '$1,$2')

//Plugins
for (var p in wfPlugins) {
 wfPlugins[p](txt,r)
}

//"" → «»
for (var i=1; i<=2; i++)
 r(/([\s\x02!|#'"\/(;+-])"([^"]*)([^\s"(|])"([^a-zа-яё])/ig, '$1«$2$3»$4') //"
while (/«[^»]*«/.test(txt))
 r(/«([^»]*)«([^»]*)»/g, '«$1„$2“')

if ('0'.replace('0','$$') == '$') ////$ in replacing string is special, except in IE
 for (var i=0; i<hidden.length; i++) hidden[i] = hidden[i].replace(/\$/g, '$$$$')
while (hidden.length>0)
 r('\x01'+hidden.length+'\x02', hidden.pop())
txt=txt.substr(1, txt.length-2)

}

function r(r1, r2){ txt = txt.replace(r1, r2) }
function hide(re){ r(re, function(s){return '\x01'+hidden.push(s)+'\x02'})}
function hideTag(tag){ hide(RegExp('<' + tag + '( [^>]+)?>[\\s\\S]+?<\\/' + tag + '>','gi')) }


// 4Intra.net patch begin
function MyWikifyHandler(obj){
  txt=obj.changed.plain;
  processText();
  obj.changed.plain = txt;
}
// 4Intra.net patch end

}
