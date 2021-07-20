<div class="wping-indexall layui-body">
  <div class="wping-indextable layui-fluid">
    <div class="layui-row">
      <div class="layui-col-md12">
        <div class="layui-card">
          <div class="layui-card-header">网站数据总览</div>
          <div class="layui-card-body">
            <table class="layui-table" style="margin: 0;">
              <colgroup>
                <col width="200">
                <col width="200">
                <col width="30%">
                <col>
              </colgroup>
              <tbody>
                <tr>
                  <td rowspan="3">检测汇总</td>
                  <td rowspan="3">检测网站数：<span class="fweight" style="color: #ff5722">128</span></td>
                  <td>考核合格网站数：<span class="fweight" style="color: #ff5722">99</span></td>
                  <td>合格率：<span class="fweight" style="color: #ff5722">66%</span></td>
                </tr>
                <tr>
                  <td>考核满分网站：<span class="fweight" style="color: #ff5722">0</span></td>
                  <td>合格率：<span class="fweight" style="color: #ff5722">0%</span></td>
                </tr>
                <tr>
                  <td>单项否决不合格：<span class="fweight" style="color: #ff5722">6</span></td>
                  <td>合格率：<span class="fweight" style="color: #ff5722">6%</span></td>
                </tr>
              </tbody>
            </table>
            <table class="layui-table" style="margin: 0;" id="wping-index-table">
              <colgroup>
                <col width="3%">
                <col width="15%">
                <col width="20%">
                <col width="10%">
                <col width="13%">
                <col width="10%">
                <col>
              </colgroup>
              <thead>
                <tr>
                  <th>序号</th>
                  <th>网站名称</th>
                  <th>域名</th>
                  <th>用户名</th>
                  <th>手机号码</th>
                  <th>电子邮箱</th>
                  <th>操作</th>
                </tr> 
              </thead>
              <tbody id="wping-table-body">
                {{# layui.each(d.list, function (index, item) { }}
                <tr style="background-color: #{{ item.id%2 ? 'transparent' : 'f2f2f2' }};" >
                  <td rowspan="3">{{ item.id }}</td>
                  <td>{{ item.web_name }}</td>
                  <td><a class="domain" href="{{ item.web_src }}">{{ item.web_src }}</a></td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.tel }}</td>
                  <td>{{ item.email }}</td>
                  <td style="font-size:0;">
                    <a href="javascript:;" class="layui-btn layui-btn-normal">修改</a>
                    <a href="javascript:;" class="layui-btn layui-btn-danger">删除</a>
                  </td>
                </tr>
                <tr style="background-color: #{{ item.id%2 ? 'transparent' : 'f2f2f2' }};">
                  <td rowspan="2">考核结果</td>
                  <td rowspan="2">
                  {{# if(item.kaohe == "ok"){ }}
                    <span class="layui-badge" style="font-size: 12px;height: 24px;line-height: 24px;background-color: #4ac444;margin-right: 4px;">合格</span>
                    <i class="layui-icon layui-icon-face-smile" style="font-size: 26px;font-weight: bold;vertical-align: middle; color: #4ac444;"></i>
                  {{# } else { }}
                    <span class="layui-badge" style="font-size: 12px;height: 24px;line-height: 24px;background-color: #ff5722;margin-right: 4px;">不合格</span>
                    <i class="layui-icon layui-icon-face-cry" style="font-size: 26px;font-weight: bold;vertical-align: middle; color: #ff5722;"></i>
                  {{# } }}
                  </td>
                  <td>单项否决</td>
                  <td>
                  {{# if(item.danxiang == "ok"){ }}
                    <span class="layui-badge" style="font-size: 12px;height: 24px;line-height: 24px;background-color: #4ac444;margin-right: 4px;">合格</span>
                    <i class="layui-icon layui-icon-face-smile" style="font-size: 26px;font-weight: bold;vertical-align: middle; color: #4ac444;"></i>
                  {{# } else { }}
                    <span class="layui-badge" style="font-size: 12px;height: 24px;line-height: 24px;background-color: #ff5722;margin-right: 4px;">不合格</span>
                    <i class="layui-icon layui-icon-face-cry" style="font-size: 26px;font-weight: bold;vertical-align: middle; color: #ff5722;"></i>
                  {{# } }}
                  </td>
                  <td rowspan="2">总得分：</td>
                  <td rowspan="2"><span class="fweight" style="color: #{{ item.danxiang == 'ok'?'4ac444': 'ff5722'  }}">{{ item.zongfen }}</span></td>
                </tr>
                <tr style="background-color: #{{ item.id%2 ? 'transparent' : 'f2f2f2' }};">
                  <td>综合评分</td>
                  <td>
                    <span class="fweight" style="color: #{{ (item.kaohe == 'ok')?'4ac444':'ff5722' }}">{{ item.zongping }}分</span>
                  </td>
                </tr>
                {{# }) }}
              </tbody>
            </table>
            <div id="wping-indexlpage"></div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>
