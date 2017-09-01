/**
 * @file 测试环境变量
 *
 * @author liubin29
 * 2017年8月31日
 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Hello',
        component: () => System.import('@/components/Hello')
    }]
});
