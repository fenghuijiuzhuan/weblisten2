define(['btn_aggr'], function(getBtn) {
  'use strict';

  function  BtnFactory(arr) {
    var _arr = [];
    for(var i = 0; i < arr.length; i ++){
      var o = {}, b = arr[i];
      o['text'] = b.name;
      o['color'] = 'layui-btn-normal';
      o['filter'] = b.filter;
      o['def'] = b.def;
      _arr.push(getBtn(o))
    }
    return _arr;
  }
  function SearchForm(ele, param, callback) {
    require(['text!tpl/search.js'], function (html) {
      
      var def = {
        select: [
          {name: '1111', content: [{text: '网站类别', value: '0'},{text: '本级门户', value: '1'},{text: '本级部门', value: '2'},{text: '下属单位', value: '3'}]},
          {name: '2222', content: [{text: '检测频率', value: '0'},{text: '5分钟一次', value: '1'},{text: '15分钟一次', value: '2'},{text: '1天一次', value: '3'}]},
        ],
        date: {
          isArea: true,
          dateStart: {name: '日期范围：', placeholder: 'yyyy-MM-dd', id: 'findDateStart'},
          dateEnd: {name: '至', placeholder: 'yyyy-MM-dd', id: 'findDateEnd'}
        },
        search: {name: 'searchbox', placeholder: '请输入新闻标题或ID', id: 'searchbar'},
        check: {name: '不连通率超过15%', status: true},
        btn: [
          {name: '查询', filter: 'search', def: 'lay-submit'}
        ]
      }
      
      var data = $.extend({}, def, param)
      data.btn = BtnFactory(data.btn);
      // console.log(data)

      layui.use('laytpl', function(){
        var laytpl = layui.laytpl;
        var tpl = laytpl(html);
        tpl.render(data, function(result){
          ele.prepend($(result))
          callback&&callback(ele);
        });
      })
    })
  }
  
  return {
    create: SearchForm
  }
  
});