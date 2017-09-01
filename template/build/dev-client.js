/**
 * @file 开发环境热更新
 *
 * @author liubin29
 * 2017年8月31日
 */

require('eventsource-polyfill');
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true');

hotClient.subscribe(function (event) {
    if (event.action === 'reload') {
        window.location.reload();
    }

});
