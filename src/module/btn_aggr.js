define([], function() {
  var btn = {
    INDEXAGGR: '<button BTNSTYLE class="layui-btn BTNSIZE BTNCOLOR" lay-event="BTNEVENT" lay-filter="BTNFILTER" BTNDEF><i class="layui-icon" style="margin-right: 5px;">&#xe609;</i>BTNTEXT</button>',
    SEARCH: '<button BTNSTYLE class="layui-btn BTNSIZE BTNCOLOR" lay-event="BTNEVENT" lay-filter="BTNFILTER" BTNDEF><i class="layui-icon" style="margin-right: 5px;">&#xe615;</i>BTNTEXT</button>',
    ADD: '<button BTNSTYLE class="layui-btn BTNSIZE BTNCOLOR" lay-event="BTNEVENT" lay-filter="BTNFILTER" BTNDEF><i class="layui-icon" style="margin-right: 5px;">&#xe654;</i>BTNTEXT</button>',
    EDIT: '<button BTNSTYLE class="layui-btn BTNSIZE BTNCOLOR" lay-event="BTNEVENT" lay-filter="BTNFILTER" BTNDEF><i class="layui-icon" style="margin-right: 5px;">&#xe642;</i>BTNTEXT</button>',
    WAIT: '<button BTNSTYLE class="layui-btn BTNSIZE BTNCOLOR" lay-event="BTNEVENT" lay-filter="BTNFILTER" BTNDEF><i class="layui-icon" style="margin-right: 5px;">&#xe60e;</i>BTNTEXT</button>',
    DEL: '<button BTNSTYLE class="layui-btn BTNSIZE BTNCOLOR" lay-event="BTNEVENT" lay-filter="BTNFILTER" BTNDEF><i class="layui-icon" style="margin-right: 5px;">&#xe640;</i>BTNTEXT</button>',
    RELOAD: '<button BTNSTYLE class="layui-btn BTNSIZE BTNCOLOR" lay-event="BTNEVENT" lay-filter="BTNFILTER" BTNDEF><i class="layui-icon">&#xe669;</i>BTNTEXT</button>',
    DEFAULT: '<button BTNSTYLE class="layui-btn BTNSIZE BTNCOLOR" lay-event="BTNEVENT" lay-filter="BTNFILTER" BTNDEF>BTNTEXT</button>'
  };
  // BTNCOLOR 
  function getBtn(param) {
    var def = {name: 'DEFAULT', text: '', size: 'layui-btn-sm', style: '', event: ''};
    param = $.extend({}, def, param);
    
    var tmp = btn[param.name];
    tmp = tmp.replace(/(BTNTEXT)/g, param.text);
    tmp = tmp.replace(/(BTNSIZE)/g, param.size);
    tmp = tmp.replace(/(BTNCOLOR)/g, param.color);
    tmp = tmp.replace(/(BTNEVENT)/g, param.event);
    tmp = tmp.replace(/(BTNFILTER)/g, param.filter);
    tmp = tmp.replace(/(BTNDEF)/g, param.def);
    if(param.style) tmp = tmp.replace(/(BTNSTYLE)/g, 'style="'+param.style+'"' );
    return tmp;
  }

  return getBtn;
  
});