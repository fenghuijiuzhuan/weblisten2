define([], function() {
  'use strict';
  function loadPage(src, a){
    var reg = new RegExp("(javascript\:\;)", "g")
    if(!reg.test(src)){
      // $('#wping-body-iframe').attr('src', src).hide(0)
      $('.wping-body').empty();
      require(['text!'+src], function (html) {
        var js = html.slice(html.indexOf('<body>')+6, html.indexOf('</body>'));
        $('.wping-body').append(js)
      })
    }
    return
  }

  return loadPage
  
});