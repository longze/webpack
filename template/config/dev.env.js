/**
 * @file 开发环境变量
 *
 * @author liubin29
 * 2017年8月31日
 */

var merge = require('webpack-merge');
var prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"'
});
