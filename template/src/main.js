/**
 * @file 项目入口
 *
 * @author liubin29
 * 2017年8月31日
 */

{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue';
import App from './App';
{{#router}}
import router from './router';
{{/router}}
import axios from 'axios';

Vue.config.productionTip = false;

// 添加响应拦截器
axios.interceptors.response.use(function (res) {
    // 对响应数据做些事
    return res.data;
}, function (error) {
    // 请求错误时做些事
    return Promise.reject(error);
});

// 将axios挂载到prototype上，在组件中可以直接使用this.$ajax访问
Vue.prototype.$http = axios;

new Vue({
    el: '#app',
    {{#router}}
    router,
    {{/router}}
    {{#if_eq build "runtime"}}
    render(h) {
        return h(App);
    }
    {{/if_eq}}
    {{#if_eq build "standalone"}}
    template: '<App/>',
    components: {
        App
    }
    {{/if_eq}}
});
