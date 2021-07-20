require(['/src/config/require.config.js'], function () {
  require(['incloude'], function () {
    require(['index' ], function( index ){
      // header.create($('body'), {'router': 'index'});
      index();
    })
  })
})

