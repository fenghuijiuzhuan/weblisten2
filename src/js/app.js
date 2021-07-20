require(['/src/config/require.config.js'], function () {
  require(['incloude'], function () {
    require([ 'header', 'index' ], function( header, index ){
      header.create($('body'), {'router': 'index'});
      index();
    })
  })
})

