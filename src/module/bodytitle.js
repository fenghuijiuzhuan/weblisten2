define([], function() {
  'use strict';
  // btn: [{'text':'配置监测项', 'src': '/src/page/kaohepingfen/zonghepingfen/xinxigengxinqingkuang/child_configlisten.html', 'target': '', 'type':'bodytitle-configbtn'}] 
  function bodytitle(ele, param, callback) {
    require(['text!tpl/bodytitle.js'], function (html) {
      var data = $.extend({}, param);
      layui.use('laytpl', function(){
        var laytpl = layui.laytpl;
        var tpl = laytpl(html);
        var result = tpl.render(data);
        result = $(result).prependTo(ele)
        callback&&callback()
      })
    })
  }
  return {
    create: bodytitle
  }
});