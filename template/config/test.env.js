/**
 * @file 测试环境变量
 *
 * @author liubin29
 * 2017年8月31日
 */

let merge = require('webpack-merge');
let devEnv = require('./dev.env');

module.exports = merge(devEnv, {
    NODE_ENV: '"testing"'
});
