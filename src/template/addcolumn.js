<div class="wping-addcolumn-poper" lay-filter="addColumn" style="display: none;padding: 50px 50px;">
  <form class="layui-form" action="">
    <div class="layui-form-item">
      <label class="layui-form-label">请选择分类</label>
      <div class="layui-input-block">
        <select name="columntype" lay-verify="required">
          <option value=""></option>
          <!-- {{#  }} -->
          <option value="0">北京</option>
          <option value="1">上海</option>
          <option value="2">广州</option>
          <option value="3">深圳</option>
          <option value="4">杭州</option>
        </select>
      </div>
    </div>
    <div class="layui-form-item">
      <label class="layui-form-label">栏目名称:</label>
      <div class="layui-input-block">
        <input type="text" name="title" required  lay-verify="required" placeholder="栏目名称不能为空" autocomplete="off" class="layui-input">
      </div>
    </div>
    <div class="layui-form-item">
      <label class="layui-form-label">栏目分类:</label>
      <div class="layui-input-block">
        <input type="text" name="url" required  lay-verify="required" placeholder="栏目地址不能为空" autocomplete="off" class="layui-input">
      </div>
    </div>
    <div class="layui-form-item">
      <div class="layui-input-block">
        <a class="layui-btn layui-btn-primary wping-form-cancel">返回</a>
        <button class="layui-btn" lay-submit lay-filter="formDemo">保存</button>
        <!-- <a class="layui-btn layui-btn-normal wping-from-test">测试</a> -->
      </div>
    </div>
  </form>
</div>