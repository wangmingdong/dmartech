// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 完整引入 Element
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://dmdelivery.com/webservice/'
    // let requests = axios.create({
    //     //基础路径
    //     baseURL: "/api", //对应vue.config文件里面的proxy代理
    //     //请求不能超过5S
    //     timeout: 5000,
    // });

// 请求拦截器--所有通过axios发送的请求，全部都先处理：在请求头中添加
axios.interceptors.request.use(req => {
        req.headers.Authorization = sessionStorage.getItem('token')
        return req
    })
    // 响应了拦截器（在响应之后对数据进行一些处理）
axios.interceptors.response.use(res => res.data)
Vue.prototype.$http = axios

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})