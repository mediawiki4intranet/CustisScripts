//HTML5 postMessage usage to ease embedding iframes from different domains
//The page loaded in iframe needs to send postMessage("resize(w=WIDTH;h=HEIGHT)") to be resized.
//Works in IE8+, FF3+, Opera 9.5+ and Chrome.

var msgResize = function(e)
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

if (window.addEventListener)
    window.addEventListener('message', msgResize, false);
else if (window.attachEvent)
    window.attachEvent('onmessage', msgResize);
