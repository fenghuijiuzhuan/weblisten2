define(['panel'], function(panel) {
  'use strict';

  var defaultData = {
    text: '更新情况',
    height: 400,
    url: '',
    api: 'chartlist',
    data: {}
  };
  function createTable(ec,data) {
    var _data = $.extend({}, defaultData, data);
    var panelTable = {
      body: '<div class="main-chart"></div>',
    };
    panel.create(_data.content, panelTable, function(dom){
      var div = dom.find('.main-chart');
      div.height(400);
      var myChart = ec.init(div[0]);
      var option = {
        title: {
            text: _data.text,
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
                data: _data.nameData
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
                data: _data.countData,
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
    };

        $.post(''+_data.url+_data.api, _data.data, function (edata) {
        	if(typeof edata.cname == 'string'){
        		var cname = JSON.parse(edata.cname);
        		var csum = JSON.parse(edata.csum);
        	}else{
        		var cname = edata.cname;
        		var csum = edata.csum;
        	}
        	var ctname = edata.ctname;
        	
        	
        	
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
                  data: csum,
              }
            ]
          }
          myChart.setOption($.extend(true, {}, option, _option));
        }, 'json')
      
    })
    
  }

  return createTable
});