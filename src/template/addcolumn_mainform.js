<div class="layui-form-item">
<label class="layui-form-label">栏目名称:</label>
<div class="layui-input-block">
  <input type="text" name="columnName" required  lay-verify="required" placeholder="栏目名称不能为空" autocomplete="off" class="layui-input">
</div>
</div>
<!-- == "0" || d.code== "tyjlpt" || d.code=="zsjkf" || d.code == "fwgn" || d.code == "znwd" || d.code == "znss" -->
{{# if( d.code ){ }}
<div class="layui-form-item">
<label class="layui-form-label">栏目地址:</label>
{{# if(d.code=='tyjlpt'){ }}
  <div class="layui-input-inline">
    <input type="text" name="columnLink" required  lay-verify="required" placeholder="栏目地址不能为空" autocomplete="off" class="layui-input">
  </div>
  <div class="layui-form-mid" style="color: #f00">填写包括所有互动交流功能的页面链接</div>
{{# } else { }}
<div class="layui-input-block">
  <input type="text" name="columnLink" required  lay-verify="required" placeholder="栏目地址不能为空" autocomplete="off" class="layui-input">
</div>
{{# } }}
</div>
<div class="layui-form-item">
<label class="layui-form-label">是否是首页</label>
<div class="layui-input-block">
  <input type="checkbox" name="isHomePage" lay-skin="switch" lay-text="是|否" value="1">
</div>
</div>
{{# } }}
{{# if(d.code == "zsjkf"){ }}
<div class="layui-form-item">
<label class="layui-form-label">提供数据集统计:</label>
<div class="layui-input-block">
  <input type="radio" name="hasDataCount" value="1" title="是">
  <input type="radio" name="hasDataCount" value="0" title="否" checked>
</div>
</div>
<div class="layui-form-item">
<label class="layui-form-label">提供数据接口:</label>
<div class="layui-input-block">
  <input type="radio" name="hasDataApi" value="1" title="是">
  <input type="radio" name="hasDataApi" value="0" title="否" checked>
</div>
</div>
{{# } }}
{{# if(d.code == "fwgn"){ }}
<div class="layui-form-item">
<label class="layui-form-label">提供服务评价功能:</label>
<div class="layui-input-block">
  <input type="radio" name="hasServerEvaluate" value="1" title="是">
  <input type="radio" name="hasServerEvaluate" value="0" title="否" checked>
</div>
</div>
<div class="layui-form-item">
<label class="layui-form-label">提供重点服务:</label>
<div class="layui-input-block">
  <input type="radio" name="hasKeyServer" value="1" title="是">
  <input type="radio" name="hasKeyServer" value="0" title="否" checked>
</div>
</div>
<div class="layui-form-item">
<label class="layui-form-label">公布服务评价结果:</label>
<div class="layui-input-block">
  <input type="radio" name="openServerResult" value="1" title="是">
  <input type="radio" name="openServerResult" value="0" title="否" checked>
</div>
</div>
{{# } }}
{{# if(d.code == "znwd"){ }}
<div class="layui-form-item">
<label class="layui-form-label">智能对答:</label>
<div class="layui-input-block">
  <input type="radio" name="AiAnswer" value="1" title="是">
  <input type="radio" name="AiAnswer" value="0" title="否" checked>
</div>
</div>
{{# } }}
{{# if(d.code == "znss"){ }}
<div class="layui-form-item">
<label class="layui-form-label">错别字自动纠正:</label>
<div class="layui-input-block">
  <input type="radio" name="wrongWordModify" value="1" title="是">
  <input type="radio" name="wrongWordModify" value="0" title="否" checked>
</div>
</div>
<div class="layui-form-item">
<label class="layui-form-label">关键词关联推荐:</label>
<div class="layui-input-block">
  <input type="radio" name="keyWordSearch" value="1" title="是">
  <input type="radio" name="keyWordSearch" value="0" title="否" checked>
</div>
</div>
<div class="layui-form-item">
<label class="layui-form-label">关键词模糊搜索:</label>
<div class="layui-input-block">
  <input type="radio" name="keyWordVagueSearch" value="1" title="是">
  <input type="radio" name="keyWordVagueSearch" value="0" title="否" checked>
</div>
</div>
<div class="layui-form-item">
<label class="layui-form-label">搜索关键字:</label>
<div class="layui-input-block">
  <input type="radio" name="searchKeyWord " value="1" title="是">
  <input type="radio" name="searchKeyWord " value="0" title="否" checked>
</div>
</div>
<div class="layui-form-item">
<label class="layui-form-label">用户空间:</label>
<div class="layui-input-block">
  <input type="radio" name="userSpace" value="1" title="是">
  <input type="radio" name="userSpace" value="0" title="否" checked>
</div>
</div>
<div class="layui-form-item">
<label class="layui-form-label">移动化:</label>
<div class="layui-input-block">
  <input type="radio" name="mobility" value="1" title="是">
  <input type="radio" name="mobility" value="0" title="否" checked>
</div>
</div>
{{# } }}

{{# if(d.code == "jgzn"){ }}
<div class="layui-form-item">
<label class="layui-form-label">机构部门:</label>
<div class="layui-input-block">
  <input type="text" name="departments" id="departments" required  lay-verify="required" placeholder="填写涵盖机构部门跟网站中存在的部门" autocomplete="off" class="layui-input">
</div>
</div>
{{# } }}
{{# if(d.code == "zxft"){ }}
<div class="layui-form-item">
<label class="layui-form-label">在线提交问题:</label>
<div class="layui-input-block">
  <input type="radio" name="onlineProblem" value="1" title="是">
  <input type="radio" name="onlineProblem" value="0" title="否" checked>
</div>
</div>
{{# } }}







<div class="layui-form-item">
<div class="layui-input-block">
<a class="layui-btn layui-btn-primary wping-form-cancel">返回</a>
<button class="layui-btn" lay-submit lay-filter="formDemo">保存</button>
<button class="layui-btn" lay-submit lay-filter="formChange" style="display: none">保存</button>
<!-- <a class="layui-btn layui-btn-normal wping-from-test">测试</a> -->
</div>
</div>