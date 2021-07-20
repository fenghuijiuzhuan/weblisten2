<div class="wping-menu layui-side">
<!-- menu start -->
  <div class="layui-side-scroll">
  <ul class="layui-nav layui-nav-tree " lay-filter="wping-menu">
    <!-- 第1级  -->
    {{#  layui.each(d.list, function(index, item){ }}
      <li class="layui-nav-item {{ index==0?'layui-nav-itemed':'' }}">
        <a class="{{ (item.children.length === 0 && index === 0)?'first':'' }}" href="{{ item.src }}">{{ item.text }}</a>
        {{#  if(item.children.length !== 0){ }}
        <dl class="layui-nav-child">
        {{#  layui.each(item.children, function(index_1, item_1){ }}
          <dd class="{{ index==0 && item_1.children.length  ?'layui-nav-itemed':'' }}">
            <a class="{{ (item_1.children.length === 0 && index_1 === 0)?'first':'' }}" href="{{ item_1.src }}">
              <i class="layui-icon layui-icon-triangle-r" style="color: #094AAA;{{ item_1.children.length ===0 && 'opacity: 0;' }}"></i>
              &nbsp;
              <i class="iconfont {{ item_1.children.length === 0 ? 'icon-wenjian': 'icon-wenjianjia' }}" style="color: #094AAA;"></i>
              &nbsp;
              {{ item_1.text }}
            </a>
            <!-- 第2级  -->
            {{#  if(item_1.children.length !== 0){ }}
            <dl class="layui-nav-child">
            {{#  layui.each(item_1.children, function(index_2, item_2){ }}
              <dd class="{{ index==0 && item_2.children.length  ?'layui-nav-itemed':'' }}">
                <a class="{{ (item_2.children.length === 0 && index_2 === 0)?'first':'' }}" href="{{ item_2.src }}">
                  <i class="layui-icon layui-icon-triangle-r" style="color: #094AAA;{{ item_2.children.length ===0 && 'opacity: 0;' }}"></i>
                  &nbsp;
                  <i class="iconfont {{ item_2.children.length === 0 ? 'icon-wenjian': 'icon-wenjianjia' }}" style="color: #094AAA;"></i>
                  &nbsp;
                  {{ item_2.text }}
                </a>

                <!-- 第3级  -->
                {{#  if(item_2.children.length !== 0){ }}
                <dl class="layui-nav-child">
                {{#  layui.each(item_2.children, function(index_3, item_3){ }}
                  <dd class="{{ index==0 && item_3.children.length !== 0  ?'layui-nav-itemed':'' }}">
                    <a class="{{ (item_3.children.length === 0 && index_3 === 0)?'first':'' }}" href="{{ item_3.src }}">
                      <i class="layui-icon layui-icon-triangle-r" style="color: #094AAA;{{ item_3.children.length ===0 && 'opacity: 0;' }}"></i>
                      &nbsp;
                      <i class="iconfont {{ item_3.children.length === 0 ? 'icon-wenjian': 'icon-wenjianjia' }}" style="color: #094AAA;"></i>
                      &nbsp;
                      {{ item_3.text }}
                    </a>

                    <!-- 第4级  -->
                    {{#  if(item_3.children.length !== 0){ }}
                    <dl class="layui-nav-child">
                    {{#  layui.each(item_3.children, function(index_4, item_4){ }}
                      <dd class="{{ index==0 && item_4.children.length !== 0  ?'layui-nav-itemed':'' }}">
                        <a class="{{ (item_4.children.length == 0 && index_4 == 0)?'first':'' }}" href="{{ item_4.src }}">
                          <i class="layui-icon layui-icon-triangle-r" style="color: #094AAA;{{ item_4.children.length ===0 && 'opacity: 0;' }}"></i>
                          &nbsp;
                          <i class="iconfont {{ item_4.children.length === 0 ? 'icon-wenjian': 'icon-wenjianjia' }}" style="color: #094AAA;"></i>
                          &nbsp;
                          {{ item_4.text }}
                        </a>
                      </dd>
                    {{#  }); }}
                    </dl>
                    {{#  } }}



                  </dd>
                {{#  }); }}
                </dl>
                {{#  } }}


              </dd>
            {{#  }); }}
            </dl>
            {{#  } }}



          </dd>
        {{#  }); }}
        </dl>
        {{#  } }}
      </li>
    {{#  }); }}
  </ul>
  </div>
<!-- menu end -->
</div>