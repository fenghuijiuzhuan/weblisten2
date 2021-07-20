require(['/src/config/require.config.js'], function () {
  require(['incloude'], function () {
    require(['menu', 'body'], function (menu, body) {

      var menulist = {
        list: [
          {
            text: '栏目添加',
            src: '/src/page/lanmupeizhi/configlisten.html',
            children: []
          }, {
            text: '首页栏目添加',
            src: '/src/page/lanmupeizhi/indexaddcolm.html',
            children: []
          }
        ]
      }
      // menu
      menu.create($('body'), menulist)
  
      // main body
      body.create().appendTo($('body'));
    });
  })
})

