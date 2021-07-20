define(['text!tpl/addcolumn.js'], function(html) {
  'use strict';
  function addcolumn(ele, data, callback) {
    var box = ele || $('body');
    var data = {}
    layui.use('laytpl', function () {
      var laytpl = layui.laytpl;
      var tpl = laytpl(html);
      var result = tpl.render(data);
      var dom = $(result).appendTo(box);
      callback&&callback(dom)
    })
  }
  return addcolumn 
});