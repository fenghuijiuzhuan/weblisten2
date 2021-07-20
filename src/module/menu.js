define(['util/onloadpage'], function(loadpage) {
  'use strict';
  function menu(ele, data) {
    require(['text!tpl/menu.js'], function (html) {
      data = $.extend({}, menuList, data);
      layui.use('laytpl', function(){
        var laytpl = layui.laytpl;
        var tpl = laytpl(html);
        var result = tpl.render(data);
        resultNext(result);
        function resultNext(result){
          var dom = $(result).appendTo(ele);
          NowMOD.add('menu', dom)
          layui.use('element', function(){
            var element = layui.element;
            element.render('nav')
            element.on('nav(wping-menu)', function () {
              var hasTree = ($(this).attr('addtree') === 'true')
              loadpage(this.href, hasTree)
            })
          })
          var aArr = dom.find('a');
          aArr.on('click', function (e) {
            return false;
          })
          dom.find('a.first:eq(0)').trigger('click').parent('dd').addClass('layui-this');
        }
      })
    })
  }


  var menuList = {
    list: [
      {
        text: '单项否决',
        src: 'javascript:;',
        children: [
          {
            text: '站点访问',
            src: '/src/page/kaohepingfen/danxiangfoujue/zhandianfangwen.html',
            children: []
          },
          {
            text: '首页更新',
            src: '/src/page/kaohepingfen/danxiangfoujue/shouyegengxin.html',
            children: []
          },
          {
            text: '栏目更新',
            src: '/src/page/kaohepingfen/danxiangfoujue/lanmugengxin.html',
            children: []
          },
          {
            text: '互动回应',
            src: '/src/page/kaohepingfen/danxiangfoujue/hudonghuiying.html',
            children: []
          }
        ]
      },
      {
        text: '综合评分',
        src: 'javascript:;',
        children: [
          {
            text: '网站可用性',
            src: 'javascript:;',
            children: [
              {
                text: '首页可用性',
                src: '/src/page/kaohepingfen/zonghepingfen/wangzhankeyongxing/shouyekeyongxing.html',
                children: []
              }, {
                text: '链接可用性',
                src: '/src/page/kaohepingfen/zonghepingfen/wangzhankeyongxing/lianjiekeyongxing.html',
                children: []
              }
            ]
          }, {
            text: '信息更新情况',
            src: 'javascript:;',
            children: [
              {
                text: '首页更新',
                src: '/src/page/kaohepingfen/zonghepingfen/xinxigengxinqingkuang/shouyegengxin.html',
                children: []
              }, {
                text: '栏目更新',
                src: '/src/page/kaohepingfen/zonghepingfen/xinxigengxinqingkuang/lanmugengxin.html',
                children: []
              }
            ]
          }, {
            text: '互动回应情况',
            src: 'javascript:;',
            children: [
              {
                text: '互动访谈',
                src: '/src/page/kaohepingfen/zonghepingfen/hudonghuiyingqingkuang/hudongfangtan.html',
                children: []
              }, {
                text: '政务咨询',
                src: '/src/page/kaohepingfen/zonghepingfen/hudonghuiyingqingkuang/zhengwuzixun.html',
                children: []
              }, {
                text: '征集调查',
                src: '/src/page/kaohepingfen/zonghepingfen/hudonghuiyingqingkuang/zhengjidiaocha.html',
                children: []
              }
            ]
          }
        ]
      },
    ]
  }
  return {
    'create': menu
  }

});
