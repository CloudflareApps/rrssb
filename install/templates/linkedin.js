(function() {
  window.INSTALL_RRSSB.register('linkedin', function(options, page) {
    var title, summary;
    if (options.buttons.linkedin.auto) {
      title = page.title || '';
      summary = page.description || page.url || '';
    } else {
      title = options.buttons.linkedin.title || '';
      summary = options.buttons.linkedin.summary || '';
    }
    return '<li class="rrssb-linkedin"><a target="_blank" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=' + encodeURIComponent(page.url) + '&amp;title=' + encodeURIComponent(title) + '&amp;summary=' + encodeURIComponent(summary) + '" class="popup"><span class="rrssb-icon"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path d="M25.424 15.887v8.447h-4.896v-7.882c0-1.98-.71-3.33-2.48-3.33-1.354 0-2.158.91-2.514 1.802-.13.315-.162.753-.162 1.194v8.216h-4.9s.067-13.35 0-14.73h4.9v2.087c-.01.017-.023.033-.033.05h.032v-.05c.65-1.002 1.812-2.435 4.414-2.435 3.222 0 5.638 2.106 5.638 6.632zM5.348 2.5c-1.676 0-2.772 1.093-2.772 2.54 0 1.42 1.066 2.538 2.717 2.546h.032c1.71 0 2.77-1.132 2.77-2.546C8.056 3.593 7.02 2.5 5.344 2.5h.005zm-2.48 21.834h4.896V9.604H2.867v14.73z" /></svg></span><span class="rrssb-text">linkedin</span></a></li>';
  });
}).call(this);
