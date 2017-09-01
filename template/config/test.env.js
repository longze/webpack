/**
 * @file 测试环境变量
 *
 * @author liubin29
 * 2017年8月31日
 */

var merge = require('webpack-merge');
var devEnv = require('./dev.env');

module.exports = merge(devEnv, {
    NODE_ENV: '"testing"'
});
