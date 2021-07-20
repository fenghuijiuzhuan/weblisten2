define([
  'jquery',
  // 'layui',
  '/src/js/layui_kz.js',
  'util/formatDate',
  'body',
  'bread',
  'bodytitle',
  'panel',
  'search',
  'echarts/echarts',
  'createChart',
  'createChartTable',
  'createChartTableAll'
], function($1, $2, $3, body, bread, bodytitle, panel, search, ec, createChart, createChartTable, createChartTableAll) {
  'use strict';
  return {
    body: body,
    bread: bread,
    bodytitle: bodytitle,
    panel: panel,
    search: search,
    ec: ec,
    createChart: createChart,
    createChartTable: createChartTable,
    createChartTableAll: createChartTableAll
  }
});
