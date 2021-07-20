define([], function() {
  'use strict';
  function body(){
    var child = '<div class="wping-bodymain"><div class="wping-bodycontent"></div></div>';
    var bod = '<div class="layui-body wping-body">'+ child +'</div>'
    var html = '<!-- main start -->'+bod+'<!-- main end -->';
    var dom = $(html)
    NowMOD.add('body', dom)
    return dom
  }
  return {
    create: body
  }
});