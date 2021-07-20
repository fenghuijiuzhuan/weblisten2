<div class="layui-card wping-bodytitle">
  <div class="layui-card-header" style=""> &nbsp; {{ d.title }} 
    {{# if (d.btn) { }}
      {{# layui.each(d.btn, function (index, item) { }}
      <a href="{{ item.src?item.src:'javascript:;' }}" class="layui-btn layui-btn-sm layui-btn-normal {{ item.type }}" style="margin-left:10px"  target="{{ item.target }}" title="{{ item.text }}">{{ item.text }}</a>
      {{# }) }}
    {{# } }}
  </div>
</div>