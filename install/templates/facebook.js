(function() {
  window.INSTALL_RRSSB.register('facebook', function(options, page) {
    return '<li class="rrssb-facebook"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(page.url) + '" class="popup"><span class="rrssb-icon"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="29" height="29" viewBox="0 0 29 29"><path d="M26.4 0H2.6C1.714 0 0 1.715 0 2.6v23.8c0 .884 1.715 2.6 2.6 2.6h12.393V17.988h-3.996v-3.98h3.997v-3.062c0-3.746 2.835-5.97 6.177-5.97 1.6 0 2.444.173 2.845.226v3.792H21.18c-1.817 0-2.156.9-2.156 2.168v2.847h5.045l-.66 3.978h-4.386V29H26.4c.884 0 2.6-1.716 2.6-2.6V2.6c0-.885-1.716-2.6-2.6-2.6z"class="cls-2" fill-rule="evenodd" /></svg></span><span class="rrssb-text">facebook</span></a></li>';
  });
}).call(this);
