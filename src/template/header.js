<!-- header start -->
<div class="wping-header clearfix">
  <a>
    <div class="wping-logo pull-left gfff fsize20 fweight">
      <img src="/src/static/img/logo.jpg" class="pull-left" alt="" width="100" height="50">
      河南省政府网站统一技术平台
    </div>
  </a>
  <ul class="layui-nav pull-left wping-nav-left" lay-filter="header-nav">
    {{# layui.each(d.list, function (index, item) {  }}
      <li class="layui-nav-item {{ d.router == item.src ? 'layui-this' : '' }}"><a href="javascript:;" href2="#{{ item.src }}">{{ item.text }}</a></li>
    {{# }) }}
  </ul>
  <ul class="layui-nav pull-right wping-nav-right">
    <li class="layui-nav-item">
      <a href="javascript:;"><img src="http://iconfont.alicdn.com/t/1492824790092.jpg@100h_100w.jpg" class="layui-nav-img">我</a>
      <dl class="layui-nav-child">
        <dd><a href="javascript:;">修改信息</a></dd>
        <dd><a href="javascript:;">安全管理</a></dd>
        <dd><a href="javascript:;">退出登录</a></dd>
      </dl>
    </li>
  </ul>
</div>
<!-- header end -->
  