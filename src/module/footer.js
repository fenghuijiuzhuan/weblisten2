define([], function() {
  'use strict';
  function footer(ele, t1, t2) {
    require(['text!tpl/footer.js'], function (html) {
      t1 = t1 && t1.trim();
      t2 = t2 && t2.trim();
      var data = { //数据
        text1: t1 || '版权所有：河南省人民政府办公厅',
        text2: t2 || '技术支持：睿软科技'
      };
      layui.use('laytpl', function(){
        var laytpl = layui.laytpl;
        var tpl = laytpl(html);
        tpl.render(data, function(result){
          var dom = $(result).appendTo(ele)
          window.menagger && NowMOD.add('footer', dom)
          $('<style type="text/css">.layui-body{bottom: 60px!important;}.layui-side{bottom: 60px!important;}</style>').appendTo(dom)
    });
      })
    })
  }
  return {
    'create': footer
  }
});
