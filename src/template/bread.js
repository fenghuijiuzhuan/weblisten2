<!-- 面包屑 -->
<div class="wping-breadcrumb">
  <i class="iconfont icon-house"></i>
  <span class="layui-breadcrumb" lay-separator="&gt;">
    {{# layui.each(d.bread, function(index, item){  }}
    {{# if(index !== d.bread.length-1 ){ }}
      <a href="">{{ item.title }}</a>
    {{# } else { }}
      <a><cite>{{ item.title }}</cite></a>
    {{# } }}
    {{# }); }}
  </span>
  {{ d.btnaggr }}
</div>

