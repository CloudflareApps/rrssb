(function() {
  window.INSTALL_RRSSB.register('twitter', function(options, page) {
    var text;
    if (options.buttons.twitter.auto) {
      text = page.description || page.title || '';
    } else {
      text = options.buttons.twitter.text || '';
    }
    text = (text ? text + ' ' : '') + page.url;
    return '<li class="rrssb-twitter"><a target="_blank" href="https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '" class="popup"><span class="rrssb-icon"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path d="M24.253 8.756C24.69 17.08 18.297 24.182 9.97 24.62c-3.122.162-6.22-.646-8.86-2.32 2.702.18 5.375-.648 7.507-2.32-2.072-.248-3.818-1.662-4.49-3.64.802.13 1.62.077 2.4-.154-2.482-.466-4.312-2.586-4.412-5.11.688.276 1.426.408 2.168.387-2.135-1.65-2.73-4.62-1.394-6.965C5.574 7.816 9.54 9.84 13.802 10.07c-.842-2.738.694-5.64 3.434-6.48 2.018-.624 4.212.043 5.546 1.682 1.186-.213 2.318-.662 3.33-1.317-.386 1.256-1.248 2.312-2.4 2.942 1.048-.106 2.07-.394 3.02-.85-.458 1.182-1.343 2.15-2.48 2.71z" /></svg></span><span class="rrssb-text">twitter</span></a></li>';
  });
}).call(this);
