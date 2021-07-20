define(['jquery'], function() {
  'use strict';
  !function(){
    var tpl = '<meta charset="UTF-8">'+
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
    '<meta http-equiv="X-UA-Compatible" content="ie=edge">'+
    '<link rel="stylesheet" href="/src/static/css/common/base.css">'+
    '<link rel="stylesheet" href="/frame/layui/css/layui.css"  media="all">'+
    '<link rel="stylesheet" href="/frame/layui/css/admin.css"  media="all">'+
    '<link rel="stylesheet" href="/src/static/font-awesome-4.7.0/css/font-awesome.min.css">'+
    '<link rel="stylesheet" href="/src/static/css/common/comm.css">'+
    '<link rel="stylesheet" href="/src/static/css/index.css">'+
    '<!-- <link rel="stylesheet" type="text/css" href="/src/static/font/iconfont.css"> -->'+
    '<link rel="stylesheet" type="text/css" href="//at.alicdn.com/t/font_912067_sdzsqkthgn8.css">'+
    '<script type="text/javascript" charset="utf-8" src="/src/util/nowmodel.js"></script>';
    // '<script type="text/javascript" charset="utf-8" src="/lib/jquery-1.11.1.min.js"></script>'
    $('head').prepend(tpl);
  }()
});