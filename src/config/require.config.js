require.config({
  baseUrl: '/src/module',
  paths: {
    "layui": '/frame/layui/layui',
    "echarts": '/frame/echarts-2.2.7/dist',
    "jquery": '/lib/jquery-1.11.1.min',
    "text":"/lib/text",
    "tpl": '/src/template/',
    "util": '/src/util',
    "router": '/src/router/index',
    // "modstatus": ''
  },
  shim: {
    'header': {
      deps: ['jquery', 'layui'],
      exports: 'header'
    },
    'iframe': {
      deps: ['jquery', 'layui']
    }
  }
});
