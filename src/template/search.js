<div class="layui-card">
  {{# if(d.title){ }}
    <div class="layui-card-header">{{ d.title }}</div>
  {{# } }}
  <div class="layui-card-body">
    <div class="wping-searchform layui-form-item layui-form">
      <form class="layui-form" id="formSearchModel" lay-filter="searchbar">
        {{# if(d.select){ }}
          <div class="layui-inline">
          {{# layui.each(d.select, function(index, item) { }}
            {{# if(item.name){ }}
            <label class="layui-form-label">{{item.name}}</label>
            {{# } }}
            <div class="layui-input-inline" style="">
              <select name="{{item.formName||'select'+index}}">
              {{# layui.each(item.content, function(_index, _item) { }}
                <option value="{{_item.value}}">{{_item.text}}</option>
              {{# }) }}
              </select>
            </div>
          {{# }) }}
          </div>
        {{# } }}

        {{# if(d.date){ }}
          {{# if(d.date.isArea){ }}
            <div class="layui-inline">
              <label class="layui-form-label">{{d.date.dateStart.name}}</label>
              <div class="layui-input-inline">
                <input type="text" name="{{d.date.dateStart.formName||'date_min'}}" id="{{d.date.dateStart.id}}" placeholder="{{d.date.dateStart.placeholder}}" autocomplete="off" class="layui-input">
              </div>
              <div class="layui-form-mid">{{d.date.dateEnd.name}}</div>
              <div class="layui-input-inline">
                <input type="text" name="{{d.date.dateEnd.formName||'date_max'}}" id="{{d.date.dateEnd.id}}" placeholder="{{d.date.dateEnd.placeholder}}" autocomplete="off" class="layui-input">
              </div>
            </div>
          {{# }else{ }}
          <div class="layui-inline">
            {{# if(d.date.dateStart.name){ }}
            <label class="layui-form-label">{{d.date.dateStart.name}}</label>
            {{# } }}
            <div class="layui-input-inline">
              <input type="text" name="{{d.date.dateStart.formName||'date'}}" class="layui-input" id="{{d.date.dateStart.id}}" placeholder="{{d.date.dateStart.placeholder}}">
            </div>
          </div>
          {{# } }}
        {{# } }}

        {{# if(d.search&&!d.search.length){ }}
        <div class="layui-inline">
          {{# if(d.search.name){ }}
          <label class="layui-form-label">{{d.search.name}}</label>
          {{# } }}
          <div class="layui-input-inline">
            <input type="text" name="{{d.search.formName}}"  placeholder="{{d.search.placeholder}}" autocomplete="off" id="{{d.search.id}}" class="layui-input">
          </div>
        </div>
        {{# } else if(d.search&&d.search.length) { }}
        {{# layui.each(d.search, function (index, item) { }}
        <div class="layui-inline">
          {{# if(item.name){ }}
          <label class="layui-form-label">{{item.name}}</label>
          {{# } }}
          <div class="layui-input-inline">
            <input type="text" name="{{item.formName}}"  placeholder="{{item.placeholder}}" autocomplete="off" id="{{item.id}}" class="layui-input">
          </div>
        </div>
        {{# }) }}
        {{# } }}
        {{# if(d.check){ }}
        <div class="layui-inline">
          <div class="layui-input-inline">
            <input type="checkbox" name="{{d.search.formName||'fenkl'}}" title="{{d.check.name}}" lay-skin="primary" {{ d.check.status ? 'checked' : "" }} value="1"></input>
          </div>
        </div>
        {{# } }}
        
        {{# if(d.checkList){ }}
        {{# layui.each(d.checkList, function(index, item){ }}
        <div class="layui-inline">
          <div class="layui-input-inline" style="width: 100px">
            <input type="checkbox" name="{{item.formName||'fenkl'+index}}" title="{{item.name}}" lay-skin="primary" {{ item.status ? 'checked' : '' }} value="1"></input>
          </div>
        </div>
        {{# }) }}
        {{# } }}
        
        {{# if(d.result){ }}
          <div class="layui-inline">
            <div id="searchresult"></div>
          </div>
        {{# } }}

        <div class="layui-inline">
          {{# layui.each(d.btn, function (index, item) { }}
            {{ item }}
          {{# }) }}
        </div>
      </form>
    </div>
  </div>
</div>
