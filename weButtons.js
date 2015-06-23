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

window.processPasteHtml = function()
{
  // LibreOffice actually copies images into contenteditable div - extract them
  var imgInfo = '';
  var imgs = document.getElementById('pastehtmldiv').getElementsByTagName('img');
  var extracted = [];
  var today;
  var m;
  for (var i = 0; i < imgs.length; i++)
  {
    if (m = /^data:([^;]*);base64,/.exec(imgs[i].src))
    {
      imgs[i].id = 'paste_img_pic_'+i;
      var t = m[1];
      var w = imgs[i].naturalWidth;
      var h = imgs[i].naturalHeight;
      if (t == 'image/jpeg')
        t = 'jpg';
      else if (t == 'image/png' || t == 'image/gif')
        t = t.substr(6);
      else if (t == 'image/svg+xml')
        t = 'svg';
      else
        t = '???';
      var kbsize = Math.ceil(imgs[i].src.length*3/4/1024);
      if (!today)
      {
        today = new Date();
        var d = today.getDate();
        var m = today.getMonth()+1;
        var y = today.getYear()+1900;
        today = y+'-'+(m < 10 ? '0' : '')+m+'-'+(d < 10 ? '0' : '')+d;
      }
      var inf = (imgs[i].name || '#'+(i+1))+' ('+w+'x'+h+', '+kbsize+' кб)';
      imgInfo += '<div>'+
        '<a href="javascript:void(0)" onclick="showPasteImage('+i+')">'+inf+'</a><br />'+
        '<input type="text" id="paste_img_'+i+'" style="width: 100%'+
        (t == '???' ? '; background: #fee' : '')+'" value="'+today+' '+imgs[i].name+'.'+t+'" />'+
        '<div id="paste_img_status_'+i+'"></div></div>';
      extracted.push(i);
    }
  }
  if (imgInfo != '')
  {
    var cats = this.textarea[0].value.match(new RegExp('\\[\\[\\s*(Category|'+mw.msg('webuttons-category')+'):\\s*([^\\|\\]]+)', 'gi'));
    for (var i = 0; i < cats.length; i++)
      cats[i] = '[[Category:'+cats[i].match(/^[^:]*:\s*(.+)$/)[1]+']]';
    cats = cats.join(' ');
    var e = document.getElementById('pastehtmlimages');
    e.innerHTML = '<p>' + mw.msg('pastehtml-upload-images-as') +
      (extracted.length > 1 ? '<input type="text" style="width: 100%" value="'+today+
        '" data-prev="'+today+'" onkeyup="pasteImagesChangePrefix(this)" onchange="pasteImagesChangePrefix(this)" />' : '') +
      '</p>'+imgInfo+
      '<p>'+mw.msg('webuttons-categories')+': <input type="text" id="paste_imgcats" style="width: 100%" value="'+cats+'" /></p>'+
      '<p><input type="button" value="'+mw.msg('pastehtml-upload')+'" onclick="uploadPasteImages()" /> ' +
      '<input type="button" value="'+mw.msg('pastehtml-cancel')+'" onclick="closePasteImages()" /></p>';
    e._indexes = extracted;
    e = document.getElementById('pastehtmlimgtd');
    e.style.display = '';
    e = document.getElementById('pastehtmllink');
    e.style.display = 'none';
    return false;
  }
  // Proceed to converting HTML to wikitext with WikifyHTML if there are no images
  document.getElementById('pastehtmldia').style.display = 'none';
  var obj = { html: document.getElementById('pastehtmldiv').innerHTML, from: 'whole' };
  obj.html = obj.html.replace(/\n/g, ' ');
  obj.html = obj.html.replace(/<br[^<>]*>/g, '&lt;br&gt;');
  wikEd.server = mw.config.get('wgServer');
  wikEd.articlePath = mw.config.get('wgArticlePath');
  wikEd.script = mw.config.get('wgScript');
  wikEd.WikifyHTML(obj);
  obj.html = obj.html.replace(/<br[^<>]*>(\s*<br[^<>]*>)+/g, '\n\n');
  obj.html = obj.html.replace(/<br[^<>]*>/g, '\n');
  obj.html = obj.html.replace(/&lt;/g, '<');
  obj.html = obj.html.replace(/&gt;/g, '>');
  obj.html = obj.html.replace(/&amp;/g, '&');
  obj.html = obj.html.replace(/[ \t]+/g, ' ');
  this.textarea.textSelection('encapsulateSelection', { 'peri': obj.html, 'replace': true });
  document.getElementById('pastehtmldiv').innerHTML = '';
  return false;
};

window.pasteImagesChangePrefix = function(e)
{
  var prev = e._prev || e.getAttribute('data-prev');
  var p = e.value.replace(/^\s+|\s+$/g, '');
  if (p != prev)
  {
    var indexes = document.getElementById('pastehtmlimages')._indexes;
    for (var n = 0; n < indexes.length; n++)
    {
      var i = indexes[n];
      var img = document.getElementById('paste_img_'+i);
      if (prev === '' || img.value.substr(0, prev.length+1) == prev+' ')
        img.value = p + img.value.substr(prev.length);
    }
    e._prev = p;
  }
};

window.showPasteImage = function(i)
{
  var img = document.getElementById('paste_img_pic_'+i);
  if (img)
  {
    var d = document.getElementById('pastehtmldiv');
    d.scrollTop = img.offsetTop;
  }
};

window.tryUploadImage = function(img, token, callback)
{
  if (img.input._done)
  {
    img.ok = true;
    callback();
    return;
  }
  var params = {
    action: 'upload',
    format: 'json',
    token: token,
    filename: img.input.value,
    comment: img.name,
    text: img.text
  };
  var end = function()
  {
    if (img.error)
    {
      document.getElementById('paste_img_status_'+img.i).innerHTML =
        (img.ok ? '' : mw.msg('pastehtml-upload-error'))+(img.error && !img.ok ? ': ' : '')+img.error;
    }
    if (img.ok)
    {
      img.input._done = true;
      img.input.parentNode.style.display = 'none';
    }
    callback();
  };
  var handleError = function(xhr, status, err)
  {
    img.error = err || status;
    end();
  };
  var handleSuccess = function(data)
  {
    if (data.error)
    {
      if (data.error.code == 'verification-error' &&
        data.error.details && data.error.details[0] == 'filetype-mime-mismatch')
        img.error = mw.msg.apply(mw, data.error.details);
      else
        img.error = data.error.info;
    }
    else if (data.upload)
    {
      if (data.upload.result == 'Success')
        img.ok = true;
      else if (data.upload.warnings)
      {
        if (data.upload.warnings.duplicate)
        {
          img.error = mw.msg('pastehtml-file-already-uploaded');
          img.input.value = data.upload.warnings.duplicate[0];
          img.ok = true;
        }
        else if (data.upload.warnings.badfilename)
        {
          img.error = mw.msg('pastehtml-badfilename');
          img.input.value = data.upload.warnings.badfilename;
        }
        // Other possible warnings: exists, duplicate-archive, was-deleted
        else if (!params.ignorewarnings)
        {
          params.filekey = data.upload.filekey;
          params.ignorewarnings = 1;
          $.ajax({
            url: mw.util.wikiScript('api'),
            type: 'POST',
            data: params,
            dataType: 'json',
            success: handleSuccess,
            error: handleError
          });
          return;
        }
        else
          img.error = params.warnings;
      }
    }
    end();
  };
  var boundary = '--'+new Date().getTime();
  // +base64-encoded is handled by our PHP code
  var data = '\n--'+boundary+'\nContent-Disposition: form-data; name="file"; filename="'+img.input.value+'"\n'+
    'Content-Type: '+img.type+'+base64-encoded\n\n'+img.element.src.substr(img.type.length+13);
  for (var p in params)
    data += '\n--'+boundary+'\nContent-Disposition: form-data; name="'+p+'"\n\n'+params[p];
  data += '\n--'+boundary+'--';
  $.ajax({
    url: mw.util.wikiScript('api'),
    type: 'POST',
    contentType: 'multipart/form-data; boundary='+boundary,
    data: data,
    dataType: 'json',
    success: handleSuccess,
    error: handleError
  });
};

window.uploadPasteImages = function()
{
  var indexes = document.getElementById('pastehtmlimages')._indexes;
  var queue = [];
  var m;
  var pagetxt = document.getElementById('paste_imgcats').value;
  for (var n = 0; n < indexes.length; n++)
  {
    var i = indexes[n];
    var img = document.getElementById('paste_img_pic_'+i);
    if (img)
    {
      queue.push({
        i: i,
        element: img,
        type: /^data:([^;]*);base64,/.exec(img.src)[1],
        input: document.getElementById('paste_img_'+i),
        name: img.name.replace(/\]\]|"/g, ''), //"
        text: pagetxt
      });
    }
  }
  var i = 0, error;
  var callback = function()
  {
    if (!window.edittoken)
    {
      document.getElementById('paste_img_status_'+queue[0].i).innerHTML =
        mw.msg('pastehtml-token-error')+(error ? ': ' : '')+(error || '');
      return;
    }
    var img = queue[i];
    i++;
    if (img)
      tryUploadImage(img, window.edittoken, callback);
    else
    {
      var fail = false;
      for (i = 0; i < queue.length; i++)
      {
        if (!queue[i].ok)
          fail = true;
        else
        {
          var img = queue[i].element;
          var rw = img.offsetWidth;
          var code = document.createTextNode('[[File:'+queue[i].input.value+'|'+rw+'px'+(name ? '|'+name : '')+']]');
          img.parentNode.insertBefore(code, img);
          img.parentNode.removeChild(img);
        }
      }
      if (!fail)
        closePasteImages();
    }
  };
  if (queue.length)
  {
    // We need a single edit token for all uploads,
    // so request it only if it's not available from previous attempts
    if (window.edittoken)
      callback();
    else
    {
      $.ajax({
        url: mw.util.wikiScript('api'),
        type: 'POST',
        data: { action: 'tokens', format: 'json', type: 'edit' },
        success: function(data)
        {
          if (data.error)
            error = data.error.info;
          else if (data.tokens.edittoken)
            window.edittoken = data.tokens.edittoken;
          callback();
        },
        error: function(xhr, status, err)
        {
          error = err;
          callback();
        }
      });
    }
  }
};

window.closePasteImages = function()
{
  var e = document.getElementById('pastehtmllink');
  e.style.display = '';
  e = document.getElementById('pastehtmlimgtd');
  e.style.display = 'none';
};

weAddHook(function()
{
  // Paste HTML button handler (uses wikEd.WikifyHTML)
  if (!$('#pastehtmldia').length)
  {
    $(document.body).append($('\
<div id="pastehtmldia" style="display: none">\
  <table>\
    <tr><td colspan="2">\
      <div style="float: right"><a href="javascript:void(0)" onclick="document.getElementById(\'pastehtmldia\').style.display = \'none\'">\
      '+mw.msg('pastehtml-close')+'</a></div>\
      '+mw.msg('pastehtml-paste-and-press')+' <input type="button" value="'+mw.msg('pastehtml-paste')+'" id="pastehtmllink" />\
    </td></tr>\
    <tr>\
      <td id="pastehtmltd"><div class="full_cell_wrap"><div id="pastehtmldiv" class="full_cell_div" contenteditable="true"></div></div></td>\
      <td id="pastehtmlimgtd" style="display: none"><div class="full_cell_wrap"><div id="pastehtmlimages" class="full_cell_div"></div></div></td>\
    </tr>\
    <tr><td colspan="2" id="pastehtmllibreofficeinfo">\
      '+mw.msg('pastehtml-use-libreoffice', mw.config.get('wgServer')+mw.config.get('wgScriptPath'))+'\
    </td></tr>\
  </table>\
</div>'));
    $('#pastehtmllink').click(processPasteHtml);
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
        label: mw.msg('webuttons-underline'),
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
        action: { type: 'encapsulate', options: { pre: '[['+mw.msg('webuttons-category')+':', post: ']]\n' } },
        label: mw.msg('webuttons-category'),
        icon: wgScriptPath+'/extensions/CustisScripts/images/we-cat.png'
      },
      blockquote: {
        type: 'button',
        action: { type: 'encapsulate', options: { pre: '<blockquote>\n', post: '\n</blockquote>' } },
        label: mw.msg('webuttons-blockquote'),
        icon: wgScriptPath+'/extensions/CustisScripts/images/we-blockquote.png'
      },
      comment: {
        type: 'button',
        action: { type: 'encapsulate', options: { pre: '<!-- ', post: ' -->' } },
        label: mw.msg('webuttons-comment'),
        icon: wgScriptPath+'/extensions/CustisScripts/images/we-comment.png'
      },
      pastehtml: {
        type: 'button',
        label: mw.msg('pastehtml-webutton'),
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
    label: mw.msg('webuttons-wikificator'),
    icon: wgScriptPath+'/extensions/CustisScripts/images/upload.wikimedia.org/wikipedia/commons/0/06/Wikify-toolbutton.png'
  }));
});
