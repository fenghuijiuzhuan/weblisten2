define(['/src/router/index.js'], function(router) {
  function header(ele, data) {
    require(['text!tpl/header.js'], function (html) {
      data = $.extend({}, head_list, data)
      // data = data;
      layui.use('laytpl', function(){
        var laytpl = layui.laytpl;
        var tpl = laytpl(html);
        var result = tpl.render(data);
        nextTick(result);
        function nextTick(dom){
          var dom = $(dom).appendTo(ele)
          window.menagger && NowMOD.add('header', dom)
          //注意：导航 依赖 element 模块，否则无法进行功能性操作
          layui.use('element', function(){
            var element = layui.element;
            element.on('nav(header-nav)', function (data) {
              var hash = $(data[0]).attr('href2').slice('1');
              nowModel.router.chuand(hash)
              return false;
            })
          });
          $('<style type="text/css">.layui-body{top: 70px!important}.layui-side{top: 70px!important;}</style>').appendTo(dom)

          dom.find('.layui-nav .layui-nav-item a').on('click', function () { return false })
          
        }
      })
    })
  }

  var head_list = {
    router: 'index',
    list: [
      {
        text: '首页',
        src: 'index',
        children: []
      }, {
        text: '考核评分',
        src: 'kaohe',
        children: []
      }, {
        text: '栏目配置',
        src: 'peiz',
        children: []
      }, {
        text: '系统设置',
        src: 'sysset',
        children: []
      }, {
        text: '权限管理',
        src: 'power',
        children: []
      }, {
        text: '报告中心',
        src: 'baogao',
        children: []
      }, {
        text: '预警设置',
        src: 'yujing',
        children: []
      }
      
    ]
  }

  return {
    'create': header
  }
});