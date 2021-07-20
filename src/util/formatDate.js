define([], function() {
  'use strict';
  Date.prototype.format = function(format){
    var o={
     "M+":this.getMonth()+1,
     "d+":this.getDate(),
     "h+":this.getHours(),
     "m+":this.getMinutes(),
     "s+":this.getSeconds(),
     "q+":Math.floor((this.getMonth()+3)/3),
     "S":this.getMilliseconds()
    }
    if(/(y+)/.test(format)){
      format=format.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length));
    }
    for(var k in o){
      if(new RegExp("("+k+")").test(format)){
       format=format.replace(RegExp.$1,RegExp.$1.length==1?o[k]:("00"+o[k]).substr((""+o[k]).length))
      }
    }
    return format;
  }
  // window.onload=function(){
  //   var content=document.getElementById("content");
  //   var theDate=new Date(1320336000000);
  //   var dateFormate=theDate.format("yyyy年MM月dd日hh小时mm分ss秒");
  //   var dateGetTime=theDate.format("yyyyMMdd hh:mm:ss");
  //   content.innerHTML=dateFormate+"<br/>"+dateGetTime 
  // }

  // return formatDate
});