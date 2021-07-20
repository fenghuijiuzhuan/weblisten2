require(['/src/config/require.config.js'], function () {
  require(['incloude'], function () {
    require(['header', 'menu', 'footer', 'body'], function (header, menu, footer, body) {
      // header
      header.create($('body'), {'router': 'kaohe'})
      
      // menu
      menu.create($('body'))
  
      // footer
      var footer1 = '版权所有：河南省人民政府办公厅',
          footer2 = '技术支持：睿软科技';
      footer.create($('body'), footer1, footer2)
  
      // main body
      var bod = body.create('iframe').appendTo($('body'));
      bod = bod.eq(1).append('<iframe width="100%" height="100%" style="display: block;border: 0" id="wping-body-iframe" src=""></iframe>')
    });
  })
})

