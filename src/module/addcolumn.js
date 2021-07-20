define(['text!tpl/addcolumn.js', 'text!tpl/addcolumn_mainform.js'], function(html1, html2) {
  'use strict';
  function addcolumn(data, callback) {
    var box = $('body');
    var data = {}
    layui.use('laytpl', function () {
      var laytpl = layui.laytpl;
      var tpl = laytpl(html1);
      var result = tpl.render(data);
      var dom = $(result).appendTo(box);
      window.menagger && NowMOD.add('addColumn', dom); 
      callback&&callback(dom)
    })
  }
  function addcolumn_mainform(ele, param, callback) {
    ele.empty();
    var def = {
      code: 0
    };
    var data = $.extend({}, def, param);
    layui.use('laytpl', function () {
      var laytpl = layui.laytpl;
      var tpl = laytpl(html2);
      var result = tpl.render(data);
      var dom = $(result).appendTo(ele);
      $('<style>.layui-form-label{width: 110px}.layui-input-block{margin-left: 140px}</style>').appendTo(ele)
      callback&&callback(dom)
    })
  }
  return {
    addcolumn: addcolumn,
    addcolumn_mainform: addcolumn_mainform
  }
});