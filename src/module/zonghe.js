define([], function(){
	var Moo;
	var body,
	    bread,
	    bodytitle,
	    search,
	    panel,
	    ec;
	var bod,
		main,
		content;
    
    
	var ZongH = function(obj, func, bodybox){
		this.param = obj;
		this.tempArr = obj.tempArr;
		this.bodybox = bodybox?bodybox:false;
		Moo = func;
		console.log(this.bodybox)
		this.run();
	};
	ZongH.prototype.preset = function(){
		body = Moo.body,
		  bread = Moo.bread,
		  bodytitle = Moo.bodytitle,
		  panel = Moo.panel,
		  search = Moo.search,
		  ec = Moo.ec;
		if(this.bodybox){
			bod = this.bodybox;
		}else{
			bod = body.create().appendTo($('body'))
		}
		main = bod.find('.wping-bodymain');
		content = bod.find('.wping-bodycontent');
		bod.eq(1).css({
	      top: 0, 
	      left: 0,
	      bottom: 0
	    });
	}
	ZongH.prototype.init = function(obj){
		var _this = this;
		var contentbox = $('<div class="model_'+obj.index+'" style="margin-bottom: 20px;"></div>').appendTo(content);
		var chartType = '';
		if(obj.chart&&obj.chart.chartParseData){
			switch(obj.chart.chartParseData){
				case 'columnLoseChart': chartType='line';break;
				case 'interactPageChart': chartType='pie';break;
				case 'columnUpdateChart': chartType='bar';break;
				case 'linkUnconnectChart': chartType='line';break;
			}
		}
		if(obj.chart&&obj.chart.chartType){
			chartType = obj.chart.chartType;
		}
		if(obj.chart){
			var panelParam = {
		      title: '<div id="main-search-chart'+obj.index+'"></div>',
		      body: '<div id="main-tablebox-chart'+obj.index+'"></div>'
		    };
		    panel.create(contentbox, panelParam, function (dom) {
				layui.use(['table', 'form', 'layer'], function(){
			        var form = layui.form;
			        var table = layui.table;
			        var layer = layui.layer;
			          var searchbox = dom.find('#main-search-chart'+obj.index);
				      var tablebox = dom.find('#main-tablebox-chart'+obj.index);
				    if(chartType!='pie'){
				    	// search-form chart的查询模块
				        var param = {
				      	layFilter: 'searchbar-chart'+obj.index,
				          search: false,
				          select: [
				              {name: '时间点',
				              formName: 'intervalFlag',
				              content: [
				    	            {text: '2周', value: '2 WEEK'},
				    	            {text: '1个月', value: '1 MONTH'},
				    	            {text: '2个月', value: '2 MONTH'},
				    	            {text: '3个月', value: '3 MONTH'},
				    	            {text: '6个月', value: '6 MONTH'},
				    	            {text: '1年', value: '1 YEAR'},
				              ]}
				          ],
				          date: false,
				          check: false,
				          result: false,
				          btn: [
				            {name: '查询', filter: 'search-chart'+obj.index, def: 'lay-submit'}
				          ]
				        };
				        search.create(searchbox, param, function (dom) {
				            form.render();
				            form.val('searchbar-chart'+obj.index, $.extend({}, _this.param.data&&_this.param.data, obj.chart.data))
				            form.on('submit(search-chart'+obj.index+')', function (data) {
				          	var _data = $.extend({}, _this.param.data&&_this.param.data, obj.chart.data, data.field)
				          	var myChart = tablebox.find('.main-chart')[0].chartObjEntity;
				          	myChart.clear();
				      		tablebox.empty();
				      		Moo.createChartTableAll(ec, {
				    			  title: obj.chart.title,
				    		      toolName: obj.chart.toolName,
				    		      text: obj.chart.text,
				    		      panelTable: {
				    			     id: '#main-table-rf-chart'+obj.index,
				    			     height: obj.chart.panelTable&&obj.chart.panelTable.height
				    		      },
				    		      url: obj.chart.url,
				    		      api: obj.chart.api||"",
				    			  data: _data,
				    		      content: tablebox,
				    		      cols: obj.chart.cols,
				    		      chartType: obj.chart.chartType||chartType,
				    		      chartValue: obj.chart.chartValue,
				    		      chartName: obj.chart.chartName,
				    		      isAddAllNum: obj.chart.isAddNum,
				    		      chartParseData: obj.chart.chartParseData
				    			});
				              return false;
				            })
				        });
				    }
			        Moo.createChartTableAll(ec, {
					  title: obj.chart.title,
				      toolName: obj.chart.toolName,
				      text: obj.chart.text,
				      panelTable: {
				    	  id: '#main-table-rf-chart'+obj.index,
				    	  height: obj.chart.panelTable&&obj.chart.panelTable.height
					  },
				      url: obj.chart.url,
				      api: obj.chart.api||"",
					  data: $.extend({}, _this.param.data&&_this.param.data, obj.chart.data),
				      content: tablebox,
				      cols: obj.chart.cols,
				      chartType: obj.chart.chartType||chartType,
				      chartValue: obj.chart.chartValue,
				      chartName: obj.chart.chartName,
				      isAddAllNum: obj.chart.isAddNum,
				      chartParseData: obj.chart.chartParseData
					});
				})
		    })
		};
		if(obj.datalist){
			var panelParam = {
		      title: '<div id="main-search-datalist'+obj.index+'"></div>',
		      body: '<div id="main-tablebox-datalist'+obj.index+'"></div>'
		    }
	
		    panel.create(contentbox, panelParam, function (dom) {
				layui.use(['table', 'form', 'layer', 'laydate'], function(){
			        var form = layui.form;
			        var table = layui.table;
			        var layer = layui.layer;
			        var laydate = layui.laydate;
				      var searchbox = dom.find('#main-search-datalist'+obj.index);
				      var tablebox = dom.find('#main-tablebox-datalist'+obj.index);
				      // search-form
				      var param = {
				    	layFilter: 'searchbar-datalist'+obj.index,
				        search: [{
				          name: '栏目名称',
				          formName: 'name',
				          placeholder: '输入栏目名称'
				        }],
				        select: false,
				        date: {
				            //isArea: true,
				        	isRange: true,
				        	dateStart: {name: obj.datalist.searchDateName||'时间范围：', placeholder: 'yyyy-MM-dd', id: 'findDateStart-datalist'+obj.index, formName: 'startDate'},
				            dateEnd: {name: '至', placeholder: 'yyyy-MM-dd', id: 'findDateEnd-datalist'+obj.index, formName: 'endDate'}
				          },
				        check: false,
				        result: {id: 'searchresult-datalist'+obj.index},
				        btn: [
				          {name: '查询', filter: 'search-datalist'+obj.index, def: 'lay-submit'}
				        ]
				      };
				      search.create(searchbox, param, function (dom) {
			              laydate.render({
				              elem: '#findDateStart-datalist'+obj.index,
				              range: true,
				              done: function(value){
				              	var oInput = $(this.elem[0]).nextAll('input');
				              	if(value){
				  	            	var date = value.split(' - ');
				  	            	oInput.filter('[name=startDate]').val(date[0]);
				  	            	oInput.filter('[name=endDate]').val(date[1]);
				              	}else{
				              		oInput.filter('[name=startDate]').val("");
				  	            	oInput.filter('[name=endDate]').val("");
				              	};
				              }
			              });
				          form.render();
				          form.on('submit(search-datalist'+obj.index+')', function (data) {
				            table.reload('main-table-datalist'+obj.index, {
				              where: data.field,
				              done: function(res){
				              	dom.find('#searchresult-datalist'+obj.index).html('查询结果：'+(res.data?res.data.length:0)+'条');
				              }
				            })
				            return false;
				          })
				      });
				      if(chartType=='pie'){
				    	  Moo.createChartTable({
					        panelTable: {
					          id: '#main-table-datalist'+obj.index,
					          layFilter: 'scoreListen-datalist'+obj.index
					        },
					        content: tablebox,
					        height: '',
					        url: obj.datalist.url,
					        api: obj.datalist.api||"",
					        data: $.extend({}, _this.param.data&&_this.param.data, obj.datalist.data),
					        cols: obj.datalist.cols||[[ //表头content  interactLink monColumnDetail.columnName  startTime  statue
                              {title: '序号', type: 'numbers', sort: true, width:"5%"}, 
                              {title: '发起时间', width:"20%", sort: true, templet: function(d){
                              	return d.startTime;
                              }},
                              {title: '所属栏目', width:"10%", templet: function(d){
                              	return d.monColumn.columnName;
                              }},
                              {title: '互动内容', width:"", templet: function(d){
                              	return "<a href='"+d.interactLink+"' target='_blank'>"+d.content+"</a>";
                              }},
                              {title: '链接', width:"", templet: function(d){
                              	return "<a href='"+d.interactLink+"' target='_blank'>"+d.interactLink+"</a>";
                              }},
                               {title: '状态', width:"", sort: true, templet: function(d){
                              	return d.statue;
                              }}
                            ]],
					        parseData: obj.datalist.parseData
					      })
				      }else if(chartType=='line'){
					      Moo.createChartTable({
					        panelTable: {
					          id: '#main-table-datalist'+obj.index,
					          layFilter: 'scoreListen-datalist'+obj.index
					        },
					        content: tablebox,
					        height: '',
					        url: obj.datalist.url,
					        api: obj.datalist.api||"",
					        data: $.extend({}, _this.param.data&&_this.param.data, obj.datalist.data),
					        cols: obj.datalist.cols||[[
					          {title: '序号', width:"10%", templet: function(d){
					          	return d.LAY_INDEX;
					          }},
					          {title: '错误链接',width:"", templet: function(d){
					        	  return '<a href="'+d.linkUrl+'" target="_blank" style="text-decoration: underline;">'+d.linkUrl+'</a>'
					          }},
					          {field: 'createDate', title: '测试时间',width:""},
					          {title: '所在页面地址', width:"", templet: function(d){
					        	  return '<a href="'+d.parentUrl+'" target="_blank" style="text-decoration: underline;">'+d.parentUrl+'</a>'
					          }},
					          {field:'isHomePage', title: '是否是首页',width:""}					          
					        ]],
					        parseData: obj.datalist.parseData
					      })
				      }else{
					      Moo.createChartTable({
						        panelTable: {
						          id: '#main-table-datalist'+obj.index,
						          layFilter: 'scoreListen-datalist'+obj.index
						        },
						        content: tablebox,
						        height: '',
						        url: obj.datalist.url,
						        api: obj.datalist.api||"",
						        data: $.extend({}, _this.param.data&&_this.param.data, obj.datalist.data),
						        cols: obj.datalist.cols||[[
						          {title: '序号', width:"10%", templet: function(d){
						          	return d.LAY_INDEX;
						          }},
						          {field: 'columnUpdateTime', title: '更新时间',width:""},
						          {title: '所属栏目', width:"", templet: function(d){
						        	  if(d.monColumn){
						        		  return d.monColumn.columnName  
						        	  }
						          }},
						          {title: '标题',width:"", templet: function(d){
						        	  return '<a href="'+d.columnLink+'" target="_blank" style="text-decoration: underline;">'+d.columnTitle+'</a>'
						          }},
						          {title: 'url',width:"", templet: function(d){
						        	  return '<a href="'+d.columnLink+'" target="_blank" style="text-decoration: underline;">'+d.columnLink+'</a>'
						          }}
						        ]],
						        parseData: obj.datalist.parseData
						      })
					      }
	    		})
		    })
		};
		if(obj.resultlist){
			var panelParam = {
		      title: '<div id="main-search-resultlist'+obj.index+'"></div>',
		      body: '<div id="main-tablebox-resultlist'+obj.index+'"></div>'
		    }
	
		    panel.create(contentbox, panelParam, function (dom) {
				layui.use(['table', 'form', 'layer', 'laydate'], function(){
			        var form = layui.form;
			        var table = layui.table;
			        var layer = layui.layer;
			        var laydate = layui.laydate;
				      var searchbox = dom.find('#main-search-resultlist'+obj.index);
				      var tablebox = dom.find('#main-tablebox-resultlist'+obj.index);
				      // search-form
				      var param = {
				    	layFilter: 'searchbar-resultlist'+obj.index,
				        search: [{
				          name: '栏目类别',
				          formName: 'name',
				          placeholder: '输入栏目类别名称'
				        }],
				        select: false,
				        date: {
				            //isArea: true,
				        	isRange: true,
				        	dateStart: {name: '时间范围：', placeholder: 'yyyy-MM-dd', id: 'findDateStart-resultlist'+obj.index, formName: 'startDate'},
				            dateEnd: {name: '至', placeholder: 'yyyy-MM-dd', id: 'findDateEnd-resultlist'+obj.index, formName: 'endDate'}
				          },
				        check: false,
				        result: {id: 'searchresult-resultlist'+obj.index},
				        btn: [
				          {name: '查询', filter: 'search-resultlist'+obj.index, def: 'lay-submit'}
				        ]
				      };
				      search.create(searchbox, param, function (dom) {
				    	  laydate.render({
				              elem: '#findDateStart-resultlist'+obj.index,
				              range: true,
				              done: function(value){
				              	var oInput = $(this.elem[0]).nextAll('input');
				              	if(value){
				  	            	var date = value.split(' - ');
				  	            	oInput.filter('[name=startDate]').val(date[0]);
				  	            	oInput.filter('[name=endDate]').val(date[1]);
				              	}else{
				              		oInput.filter('[name=startDate]').val("");
				  	            	oInput.filter('[name=endDate]').val("");
				              	};
				              }
			              });
				          form.render()
				          form.on('submit(search-resultlist'+obj.index+')', function (data) {
				        	  table.reload('main-table-resultlist'+obj.index, {
					              where: data.field,
					              done: function(res){
					              	dom.find('#searchresult-resultlist'+obj.index).html('查询结果：'+(res.data?res.data.length:0)+'条');
					              }
					          })
				              return false;
				          })
				      });
				      
			    	  Moo.createChartTable({
				        panelTable: {
				          id: '#main-table-resultlist'+obj.index,
				          layFilter: 'scoreListen-resultlist'+obj.index
				        },
				        content: tablebox,
				        height: '',
				        url: obj.resultlist.url,
				        api: obj.resultlist.api||"",
				        data: $.extend({}, _this.param.data&&_this.param.data, obj.resultlist.data),
				        cols: obj.resultlist.cols||[[
				          {title: '序号', width:"10%", templet: function(d){
				          	return d.LAY_INDEX;
				          }},
				          {field: 'columnTypeName', title: '栏目类别名称',width:""},
				          {field: 'columnName', title: '栏目名称', width:""},
				          {field: 'indexDetail', title: '扣分细项',width:"30%"},
				          {field: 'score', title: '扣分',width:""},
				          {field: 'createDate', title: '评分时间',width:""}
				        ]],
				        parseData: obj.resultlist.parseData
				      })
				      
	    		})
		    })
		}
	};
	ZongH.prototype.createNotCommon = function(){
		this.commonHead = $('<div></div>').appendTo(content);
		// main body
		bodytitle.create(this.commonHead, {title: this.param.tempTitle})
		var _this = this;
		_this.param.tempHead.mTitle = _this.param.tempHead.mTitle||[];
		$.ajax({
			url: this.param.tempHead.url,
			type: 'post',
			data: $.extend({}, this.param.data&&this.param.data, this.param.tempHead.data),
			dataType: 'json',
			success: function(res){
				if(res.types=="0"){
					var panelIBox_1 = {
						title: _this.param.tempHead.mTitle[0]||"当前站点状态",
						body: res.columnResult=="0"?"yes":"no",
		      			isTmp: true
					};
				}else{
					var panelIBox_1 = {
						title: _this.param.tempHead.mTitle[0]||"当前扣分情况",
						body: 'num:-'+parseFloat(res.columnTotalScore).toFixed(1),
		      			isTmp: true
					};
				}
			    panel.create(_this.commonHead, panelIBox_1, function (dom) {
			      dom.css({
			    		display: 'inline-block',
			    		'vertical-align': 'top',
			    		width: '32%',
			        height:'200px',
			        marginRight: '1%'
			    	})
			    });
			    if(_this.bodybox){
			    	var panelIBox_2 = {
		    	      title: _this.param.tempHead.mTitle[1]||'考察点',
		    	      body: res.inspectionPoint?res.inspectionPoint.join('<br />'):''
		    	    }
		    	    panel.create(_this.commonHead, panelIBox_2, function(dom){
		    	    	dom.css({
		    	    		display: 'inline-block',
		    	    		'vertical-align': 'top',
		    	    		width: '32%',
		    	        height:'200px',
		    	        marginRight: '1%'
		    	    	})
		    	    });
			    }
			    
			    var panelIBox_3 = {
				    	title: _this.param.tempHead.mTitle[2]||'考核标准',
				    	body: res.checkStandard?res.checkStandard.join('<br />'):''
				    };
			    panel.create(_this.commonHead, panelIBox_3, function(dom){
			    	dom.css({
			    		display: 'inline-block',
			    		'vertical-align': 'top',
			    		width: _this.bodybox?'34%':'67%',
			        height:'200px'
			    	})
			    })
			}
		});
	};
	ZongH.prototype.run = function(){
		this.preset()
		if(this.tempArr){
			this.sort();
			this.createNotCommon();
			for(var i in this.tempArr){
				this.init(this.tempArr[i]);
			}
		}else{
			this.createNotCommon();
		}
		
	};
	ZongH.prototype.sort = function(){
		switch(this.param.sort){
			case 0: ;break;// 不排序
			case 1: this.tempArr.sort(function(a, b){ // 正序
				return a.index - b.index
			});break;
			case 2: this.tempArr.sort(function(a, b){ // 倒序
				return b.index - a.index
			});break;
			default:  this.tempArr.sort(this.param.sort); // 自定义
		};
	};
	return ZongH;
	
	
	
});
