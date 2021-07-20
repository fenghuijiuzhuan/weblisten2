define(['panel'], function(panel) {
  'use strict';

  var defaultData = {
    text: '',
    height: 315,
    panelTable: {},
    api: 'listStatue',
    type: 'post',
    data: {},
    header: '',
    chartType: 'pie',
    cols: [[ //表头
      {field: 'content', title: '标题', width:""},
      {field: 'counts', title: '次数', width:"20%"},
      {field: 'percent', title: '占比', width:"25%"}
    ]],
    cols2: [[ //表头
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
    chartValue: 'counts',
    chartName: 'content',
    parseData: function(res){
       return {
         "code": 0,
         "count": res.length,
         "data": res
       };
    },
    parseData2: function(res){
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
    done: function (obj) {},
    done2: function (obj) {}
  };
  
  function Option(type) {
	    var opt = {
	      'bar': {
	        title: {
	            text: '最近2周动态、要闻更新情况',
	            x: 'center'
	        },
	        tooltip: {
	            trigger: 'axis',
	            axisPointer: {
	            // 坐标轴指示器，坐标轴触发有效
	                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
	            }
	        },
	        grid: {
	            left: '3%',
	            right: '4%',
	            bottom: '3%',
	            containLabel: true
	        },
	        xAxis: [
	            {
	                type: 'category',
	                data: []
	            }
	        ],
	        yAxis: [
	            {
	                type: 'value'
	            }
	        ],
	        series: [
	            {
	                name: '更新数量',
	                type: 'bar',
	                data: [],
	                barMinHeight: 10,
	                "barWidth": 30,
	                markPoint : {
	                    data : [
	                        {type : 'max', name: '最大值'},
	                        {type : 'min', name: '最小值'}
	                    ],
	                    itemStyle: {
	                      normal: {
	                        color: '#c23531'
	                      }
	                    }
	                },
	                itemStyle:{
	                    normal:{
	                        color:'#c23531'
	                    }
	                }
	            }
	        ]
	      },
	      'pie': {
	          title : {
	              text: '用户访问时长',
	              x:'left'
	          },
	          tooltip : {
	              trigger: 'item',
	              formatter: "{a} <br/>{b} : {c} ({d}%)"
	          },
	          series : [
	              {
	                  name: '访问来源',
	                  type: 'pie',
	                  radius : '55%',
	                  center: ['50%', '60%'],
	                  data:[
	                      // {value:12, name:'大于15(s)的访问次数'},
	                      // {value:160, name:'小于15(s)的访问次数'},
	                  ],
	                  itemStyle: {
	                    emphasis: {
	                      shadowBlur: 10,
	                      shadowOffsetX: 0,
	                      shadowColor: 'rgba(0, 0, 0, 0.5)'
	                    }
	                  }
	              }
	          ],
	          color: ['#d53a35', '#334b5c','#ff5722', '#4ac444', '#333']
	      },
	      'line':  {
	    	    title : {
	    	        text: '未来一周气温变化',
	    	    },
	    	    tooltip : {
	    	        trigger: 'axis'
	    	    },
	    	    xAxis : [
	    	        {
	    	            type : 'category',
	    	            boundaryGap : false,
	    	            data : []
	    	        }
	    	    ],
	    	    yAxis : [
	    	        {
	    	            type : 'value',
	    	            axisLabel : {
	    	                formatter: '{value}'
	    	            }
	    	        }
	    	    ],
	    	    series : [
	    	        {
	    	            name: '错误链接数量',
	    	            type:'line',
	    	            data:[],
	    	            markPoint : {
	    	                data : [
	    	                    {type : 'max', name: '最大值'},
	    	                    {type : 'min', name: '最小值'}
	    	                ]
	    	            },
	    	            markLine : {
	    	                data : [
	    	                    {type : 'average', name: '平均值'}
	    	                ]
	    	            }
	    	        }
	    	    ]
	    	}
	      
	    };
	    return opt[type];
	  }
  
  function createTable(ec, data, myChart) {
    var _data = $.extend({}, defaultData, data);
    var str = '';
    if(_data.panelTable.id){
    	str = '<div class="main-chart" style="width:60%; height:400px; display:inline-block;"></div><div class="main-table" style="width: 40%;display: inline-block;vertical-align: top;height:400px;"><table id="'+ (_data.panelTable.id&&_data.panelTable.id.slice(1)) +'"></table></div>';
    }else{
    	str = '<div class="main-chart"></div>';
    }
    var panelTable = {
      title: _data.title,
      body: str,
    };
    _data.panelTable.title ? panelTable.title = _data.panelTable.title : '';
    _data.panelTable.isTmp ? panelTable.isTmp = _data.panelTable.isTmp : '';
    if(_data.panelTable.id2){
    	panelTable.body += '<div class="main-table"><table id="'+ _data.panelTable.id2.slice(1) +'"></table></div>'
    }
    panel.create(_data.content, panelTable, function(dom){
	  layui.use('table', function(){
	    var table = layui.table;
	      var div = dom.find('.main-chart');
	      div.height(400);
	      var myChart = ec.init(div[0]);
	      div[0].chartObjEntity = myChart;
	      var option = Option(_data.chartType);
	      $.ajax({
	    	  url: ''+_data.url+_data.api,
	    	  type: _data.type,
	    	  data: _data.data,
	    	  success: function(edata){
	    		  if(_data.chartParseData){
	    			  if(edata[_data.chartParseData]){
	    				  edata = edata[_data.chartParseData];
	    			  }else{
	    				  return;
	    			  }
	    			  
	    		  }
	    		  var tabledata=[];
	    		  var ctname = edata.ctname;
	              switch(_data.chartType){
	                case 'pie': !function() {
	                	var dlen = _data.isAddAllNum?edata.length-1:edata.length;
	                    var arr = [];
	                    tabledata=[];
	                    for(var i = 0, _i=dlen;i<_i;i++){
	                      var arri = {}, arri2={};
	                      arri['value'] = edata[i][_data.chartValue];
	                      arri['name'] = edata[i][_data.chartName];
	                      arr.push(arri);
	                      arri2['content'] = arri['name'];
	                      arri2['counts'] = arri['value'];
	                      arri2['percent'] = edata[i]['percent'];
	                      tabledata.push(arri2)
	                    }
	                    var _option = {
	                      title: {
	                        text: ctname||_data.text,
	                      },
	                      tooltip : {
	                        trigger: 'item',
	                        formatter: function (da) {
	                          return ""+da[0]+" <br/>"+da[1]+" "+da[2]+" ("+edata[da.dataIndex]['percent']+")";
	                        }
	                      },
	                      series: [
	                        {
	                          name: edata.toolName || _data.toolName,
	                          data: arr,
	                        }
	                      ]
	                    }
	                    myChart.setOption($.extend(true, {}, option, _option));
	                  //tabledata = edata;
	                }();break;
	                case 'bar': !function () {
	                	if(typeof edata.cname == 'string'){
	                		var cname = JSON.parse(edata.cname);
	                		var csum = JSON.parse(edata.csum);
	                	}else{
	                		var cname = edata.cname;
	                		var csum = edata.csum;
	                		if(csum.length<=0){return;}
	                	}
	                  var alnum = getSum(csum);
	                  var _option = {
	                    title: {
	                      text: ctname||_data.text,
	                    },
	                    xAxis: [
	                      {
	                          data: cname
	                      }
	                    ],
	                    series: [
	                      {
	                          data: csum
	                      }
	                    ]
	                  }
	                  myChart.setOption($.extend(true, {}, option, _option));
	                  tabledata = [];
	                  for(var i = 0;i<cname.length;i++){
	                    var o = {}
	                    o['content'] = cname[i];
	                    o['counts'] = csum[i];
	                    o['percent'] = (csum[i]/alnum*100).toFixed(2)+'%';
	                    tabledata.push(o);
	                  }
	                }();break;
	                case 'line': !function () {
	                	if(typeof edata.cname == 'string'){
	                		var cname = JSON.parse(edata.cname);
	                		var csum = JSON.parse(edata.csum);
	                	}else{
	                		var cname = edata.cname;
	                		var csum = edata.csum;
	                		if(csum.length<=0){return;}
	                	}
		                  var alnum = getSum(csum);
		                  var _option = {
		                    title: {
		                      text: ctname||_data.text,
		                    },
		                    xAxis: [
		                      {
		                          data: cname
		                      }
		                    ],
		                    series: [
		                      {
		                    	  name: edata.toolName || _data.toolName,
		                          data: csum
		                      }
		                    ]
		                  }
		                  myChart.setOption($.extend(true, {}, option, _option));
		                  tabledata = [];
		                  for(var i = 0;i<cname.length;i++){
		                    var o = {}
		                    o['content'] = cname[i];
		                    o['counts'] = csum[i];
		                    o['percent'] = (csum[i]/alnum*100).toFixed(2)+'%';
		                    tabledata.push(o);
		                  }
	                }();break;
	              }
	            
	              if(_data.panelTable.id){
		              //第一个实例
		              table.render({
		                elem: _data.panelTable.id,
		                height: _data.panelTable.height,
		                data: tabledata,
		                page: _data.page,
		                cols: _data.cols,
		                parseData: _data.parseData,
		                request: _data.request,
		                done: _data.done
		              });
	              }
	    	  }
	    	  
	      	});
		    if(_data.panelTable.id2){
	        	table.render({
		            elem: _data.panelTable.id2,
		            url: _data.url+_data.api2, //数据接口
		            where: _data.data2 || _data.data,
		            page: true,
		            cols: _data.cols2,
		            parseData: _data.parseData2,
		            request: _data.request,
		            done: _data.done2
		          });
	        }
    	});
	  return myChart;
    });
  }
  function getSum(arr){
	  var sum = 0;
	  for(var i=0,_i=arr.length;i<_i;i++){
		  sum += arr[i];
	  }
	  return sum;
  }
  return createTable
});