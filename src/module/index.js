define([], function() {
  'use strict';
  var func = {
    indexAll: function (param, param2){// 总览
      require(['text!tpl/indexall.js'], function(html){
    	var json = param.siteCheckResults.list;
        var data = {
          list: json,
          allData: param,
          nowHref: param2.nowHref
        }
        layui.use('laytpl', function(){
          var laytpl = layui.laytpl;
          var tpl = laytpl(html);
          var result = tpl.render(data);
          resultNext(result);
          function resultNext(result){
            var dom = $(result).appendTo($('body'));
            var tablebox = dom.find('#wping-index-table')
            var start = tpl.tpl.indexOf('<block>');
            var end = tpl.tpl.indexOf('</block>', start);
            var tableTemp = tpl.tpl.slice(start+7, end);
            var page = dom.find('#wping-indexlpage');
            layui.use(['laypage', 'layer'], function(){
              var laypage = layui.laypage;
              var layer = layui.layer;
              
              laypage.render({
                elem: page,
                count: param.siteCheckResults.count, //数据总数，从服务端得到
                limit: 6,
                limits: [6, 10],
                curr: 1,
                layout: ['prev', 'page', 'next', 'count', 'limit', 'skip'],
                jump: function(obj, first){
                  //首次不执行
                  if(!first){
                    $.ajax({
                    	url: param2.url,
                    	type: 'post',
                    	data: {
                    		pageNo: obj.curr,
                    		pageSize: obj.limit
                    	},
                    	dataType: 'json',
                    	success: function(res){
                    		var data = {
            		          list: res.siteCheckResults.list,
            		          nowHref: param2.nowHref
            		        }
                    		laytpl(tableTemp).render(data, function(html){
                    			dom.find('block').html(html)
                    		})
                    	},
                    	error: function(err){
                    		layer.msg("网络异常");
                    	}
                    })
                  }
                }
                
              });
            });
          }
        })
      })
    },
    indexUser: function (param) {// 单个用户
      require(['text!tpl/indexuser.js'], function(html){
        var data = param;
        layui.use('laytpl', function(){
          var laytpl = layui.laytpl;
          var tpl = laytpl(html);
          var result = tpl.render(data);
          resultNext(result);
          function resultNext(result){
            var dom = $(result).appendTo($('body'));
            // NowMOD.add('index', dom)
          }
        })
      })
    },
    fn: function (param) {
      var ajaxdata = {};
      if(param.page){
    	  ajaxdata = {siteId: param.siteId}
      }else{
    	  ajaxdata = {pageNo: 1, pageSize: 6}
      }
      $.ajax({
    	  url: param.url,
    	  data: ajaxdata,
    	  tpye: 'post',
    	  success: function(msg){
    		  if(param.page){
    			  func['indexUser'](msg)
		      }else{
		    	  func['indexAll'](msg, param)
		      }
    	  },
    	  error: function(msg){
    		  alert('服务器错误！')
    	  }
      })	
      
    }
  }
  
  
  return function (param) {
    func['fn'](param)
  }
});