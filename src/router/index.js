define(['util/globparam', 'util/nowmodel', 'header', 'index', 'menu', 'footer'], function(globparam, a, header, index, menu, footer) {
  'use strict';
  function WPING(hash){
    this.router = this.page;
    // this.chuand(hash)
    // return this;
  }
  window.menagger = true;

  WPING.prototype = {
    page: {
      index: function () {
        this.clear('menu')
        this.clear('footer')
        index()
      },
      kaohe: function () {
        this.clear('menu')       
        // menu
        menu.create($('body'))
        // footer
        if(!NowMOD.get('footer')){
          var footer1 = '版权所有：河南省人民政府办公厅',
            footer2 = '技术支持：睿软科技';
          footer.create($('body'), footer1, footer2)
        }
      }, 
      peiz: function () {
        this.clear('menu')
        // menu
        var menulist = {
          list: [
            {
              text: '栏目配置',
              src: 'javascript:;',
              children: [
                {
                  text: '栏目更新配置',
                  src: '/src/page/lanmupeizhi/configlisten.html',
                  children: []
                }
              ]
            }
          ]
        };
        menu.create($('body'), menulist)
        // footer
        if(!NowMOD.get('footer')){
          var footer1 = '版权所有：河南省人民政府办公厅',
            footer2 = '技术支持：睿软科技';
          footer.create($('body'), footer1, footer2)
        }
      },
      sysset: function () {
        this.clear('menu')
        // menu
        var menulist = {
          list: [
            {
              text: '机构用户',
              src: 'javascript:;',
              children: [
                {
                  text: '用户管理',
                  src: 'javascript:;',
                  children: []
                },
                {
                  text: '机构管理',
                  src: 'javascript:;',
                  children: []
                },
                {
                  text: '区域管理',
                  src: 'javascript:;',
                  children: []
                },
              ]
            }, {
              text: '系统设置',
              src: 'javascript:;',
              children: [
                {
                  text: '菜单管理',
                  src: 'javascript:;',
                  children: []
                },
                {
                  text: '角色管理',
                  src: 'javascript:;',
                  children: []
                },
                {
                  text: '字典管理',
                  src: 'javascript:;',
                  children: []
                },
              ]
            }, {
              text: '日志查询',
              src: 'javascript:;',
              children: [
                {
                  text: '日志查询',
                  src: 'javascript:;',
                  children: []
                },
                {
                  text: '连接池监视',
                  src: 'javascript:;',
                  children: []
                }
              ]
            },
          ]
        };
        menu.create($('body'), menulist)
        // footer
        if(!NowMOD.get('footer')){
          var footer1 = '版权所有：河南省人民政府办公厅',
            footer2 = '技术支持：睿软科技';
          footer.create($('body'), footer1, footer2)
        }
      },
      clear: function (name) {
        var dom = NowMOD.get(name)
        dom && dom.remove()
        NowMOD.sub(name)
        console.log(NowMOD.get())
      }
    },
  }
  WPING.prototype.chuand = function (page) {
    
    if(globparam(page)){
      this.page.clear('body')
      this.page.clear('addColumn')
      if(!NowMOD.get('header')){
        header.create($('body'), {router: page})
      }
      this.router[page] && this.router[page]()
    }
  }
  if(!NowMOD.get('router')){
    var router = new WPING()
    NowMOD.add('router', router)
  }
  return WPING
  
});