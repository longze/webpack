/**
 * @file 路由配置
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
        component() {
            return System.import('@/components/Hello');
        }
    }]
});
