// Additional buttons for WikiEditor: _u_, [[Категория:]], <blockquote>, <!-- -->, russian wikify, wikify&paste HTML
// License: Mozilla Public License 2.0 or later
// Author(s): Vitaliy Filippov, 2013+

// $.wikiEditor.addHook is Mediawiki4Intranet modification allowing to initialize
// WikiEditor instances dynamically, not hardcoded to DOM ready event

var weAddHook = $.wikiEditor.addHook;
if ( !weAddHook ) {
	// Be compatible with unmodified WikiEditor
	weAddHook = function(cb) { $(document).ready(function() { $('#wpTextbox1').each(cb); }); };
}

weAddHook(function()
{
  // Paste HTML button handler (uses wikEd.WikifyHTML)
  if (!$('#pastehtmldia').length)
  {
    $(document.body).append($('<div id="pastehtmldia" style="position: absolute; left: 20%; top: 20%; right: 20%; bottom: 20%;'+
      ' z-index: 100; background: white; border: 1px solid gray; padding: 8px; display: none">'+
      '<div style="float: right"><a href="javascript:void(0)" onclick="document.getElementById(\'pastehtmldia\').style.display = \'none\';">Закрыть</a></div>'+
      'Скопируйте сюда текст из текстового процессора, и нажмите <input type="button" value="Вставить" id="pastehtmllink" /><div id="pastehtmldiv"'+
      ' contenteditable="true" style="background: white; position: absolute; top: 32px; bottom: 8px;'+
      ' overflow: scroll; left: 8px; right: 8px; border: 1px solid gray; padding: 8px"></div></div>'));
    $('#pastehtmllink').click(function()
    {
      document.getElementById('pastehtmldia').style.display = 'none';
      var obj = { html: document.getElementById('pastehtmldiv').innerHTML, from: 'whole' };
      obj.html = obj.html.replace(/(>[^><\n]*)\n([^><\n]*<)/g, '$1<br>$2');
      wikEd.server = mw.config.get('wgServer');
      wikEd.articlePath = mw.config.get('wgArticlePath');
      wikEd.script = mw.config.get('wgScript');
      wikEd.WikifyHTML(obj);
      obj.html = obj.html.replace(/<br>/g, '\n');
      obj.html = obj.html.replace(/&lt;/g, '<');
      obj.html = obj.html.replace(/&gt;/g, '>');
      obj.html = obj.html.replace(/&amp;/g, '&');
      this.textarea.textSelection('encapsulateSelection', { 'peri': obj.html, 'replace': true });
      document.getElementById('pastehtmldiv').innerHTML = '';
      return false;
    });
  }

  var ctx = $(this).data('wikiEditor-context');
  if (!('toolbar' in ctx.modules))
    return;

  var textarea = this;

  $(this).wikiEditor('addToToolbar', {
    section: 'main',
    group: 'format',
    tools: {
      underline: {
        type: 'button',
        action: { type: 'encapsulate', options: { pre: '<u>', post: '</u>' } },
        label: 'Подчёркнутый',
        icon: wgScriptPath+'/extensions/CustisScripts/images/we-underline.png'
      }
    }
  });

  $(this).wikiEditor('addToToolbar', {
    section: 'advanced',
    group: 'insert',
    tools: {
      cat: {
        type: 'button',
        action: { type: 'encapsulate', options: { pre: '[[Категория:', post: ']]\n' } },
        label: 'Категория',
        icon: wgScriptPath+'/extensions/CustisScripts/images/we-cat.png'
      },
      blockquote: {
        type: 'button',
        action: { type: 'encapsulate', options: { pre: '<blockquote>\n', post: '\n</blockquote>' } },
        label: 'Развёрнутая цитата',
        icon: wgScriptPath+'/extensions/CustisScripts/images/we-blockquote.png'
      },
      comment: {
        type: 'button',
        action: { type: 'encapsulate', options: { pre: '<!-- ', post: ' -->' } },
        label: 'Комментарий',
        icon: wgScriptPath+'/extensions/CustisScripts/images/we-comment.png'
      },
      pastehtml: {
        type: 'button',
        label: 'Вставить текст из Word и других текстовых процессоров',
        icon: wgScriptPath+'/extensions/CustisScripts/images/we-paste.png',
        action: {
          type: 'callback',
          execute: function()
          {
            document.getElementById('pastehtmllink').textarea = textarea;
            document.getElementById('pastehtmldia').style.display = 'block';
            document.getElementById('pastehtmldiv').focus();
            return false;
          }
        }
      }
    }
  });

  // Change WikiEditor signature button to insert ~~~~ instead of --~~~~
  // Could be section.groups.insert.tools.signature.action.options.pre = '~~~~' before init
  var $sign = ctx.modules.toolbar.$toolbar.find('div[rel="main"].section div[rel="insert"].group a[rel="signature"].tool-button');
  if ($sign.length)
  {
    $sign.data('action').options.pre = '~~~~';
  }

  // Add Wikificator button, compatible with WikiEditor extension.
  // Inspired by ru.wikisource.org/wiki/MediaWiki:Wikificator.js
  // 4intra.net: use $group.prepend() instead of .wikiEditor('addToToolbar'), add local copy of image
  var $group = ctx.modules.toolbar.$toolbar.find(
    'div[rel="main"].section div[rel="format"].group'
  );
  $group.prepend($.wikiEditor.modules.toolbar.fn.buildTool(ctx, 'wikifikator', {
    type: 'button',
    action: { type: 'callback', execute: function() { WikifyRus(); } },
    label: 'Викификатор',
    icon: wgScriptPath+'/extensions/CustisScripts/images/upload.wikimedia.org/wikipedia/commons/0/06/Wikify-toolbutton.png'
  }));
});
