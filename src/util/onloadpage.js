define(['util/globparam'], function(globparam) {
  'use strict';
  function loadPage(src, a){
    $('#pageJsave').remove();
    var reg = new RegExp("(javascript\:\;)", "g")
    if(!reg.test(src)){
      if(globparam(src, true)){
        var pageJsave = $('#pageJsave');
        pageJsave = pageJsave[0] || $('<div id="pageJsave"></div>').appendTo($('body'))[0];
        pageJsave = $(pageJsave)
        pageJsave.empty();
        nowModel.router.page.clear('body')
        require(['text!'+src], function (html) {
          var js = html.slice(html.indexOf('<body>')+6, html.indexOf('</body>'));
          pageJsave.append(js)
        })
      }
    }
    return
  }

  return loadPage
  
});