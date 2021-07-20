define([], function() {
  'use strict';
  function loadPage(src){
    var reg = new RegExp("(javascript\:\;)", "g")
    if(!reg.test(src)){
      $('#wping-body-iframe').attr('src', src)
    }
    return
  }

  return  loadPage
  
});