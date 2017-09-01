/**
 * @file 模拟数据
 *
 * @author liubin29
 * 2017年8月17日
 */

let mock = require('mockjs');

module.exports = function (param) {

    return {
        status: 0,
        statusInfo: '',
        data: mock.Random.cparagraph()
    };
};
