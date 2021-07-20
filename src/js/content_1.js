require(['/src/config/require.config.js'], function () {
  require(['incloude'], function () {
    require(['menu', 'body'], function (menu, body) {
      // menu
      menu.create($('body'))
  
      // main body
      body.create().appendTo($('body'));
    });
  })
})

