define(['panel'], function(panel) {
  'use strict';

  var defaultData = {
    height: 315,
    url: '',
    api: 'list',
    type: 'post',
    data: {},
    header: '',
    cols: [[ //表头
             {field: 'id', title: '序号', type: 'numbers', sort: true, width:"5%"}, 
             {title: '更新时间', width:"20%", sort: true, templet: function(d){
             	/* var time = new Date(d.columnUpdateTime);
             	return time.format("yyyy年MM月dd日"); */
             	return d.columnUpdateTime
             }},
             {title: '所属栏目', width:"10%", templet: function(d){
             	return d.monColumn.columnName
             }},
             {title: '标题', width:"", templet: function(d){
             	return "<a href='"+d.columnLink+"' target='_blank'>"+d.columnTitle+"</a>"
             }}
           ]],
           parseData: function(res){
             	return {
             		"code": 0,
             		"count": res.count,
             		"data": res.list
             	}
             },
             request: {
             	"pageName": 'pageNo',
             	"limitName": 'pageSize'
             },
             page: true,
    done: function (obj) {}
  }
  function createTable(data) {
    var _data = $.extend({}, defaultData, data);
    var panelTable = {
      body: '<div class="main-table"><table class="layui-hide" lay-filter="'+_data.panelTable.layFilter+'" id="'+ _data.panelTable.id.slice(1) +'"></table></div>',
    };
    _data.panelTable.title ? panelTable.title = _data.panelTable.title : '';
    _data.panelTable.isTmp ? panelTable.isTmp = _data.panelTable.isTmp : '';

    panel.create(_data.content, panelTable, function(dom){
      _data.callback&&_data.callback(dom);
      layui.use('table', function(){
        var table = layui.table;
        //第一个实例
        table.render({
          elem: _data.panelTable.id,
          height: _data.height,
          url: ''+_data.url+_data.api, //数据接口
          where: _data.data,
          method: _data.type,
          page: _data.page, //开启分页
          cols: _data.cols,
          parseData: _data.parseData,
          request: _data.request,
          done: function (res, curr, count) {
            _data.done(res, curr, count);
          }
        });
      });
    })

  }

  return createTable
});