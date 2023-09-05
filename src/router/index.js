import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Login from '@/views/Login'
import Forbidden from '@/views/Forbidden'

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/',
            name: 'main',
            component: Main,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/forbidden',
            name: 'forbidden',
            component: Forbidden
        }
    ]
})

export default router

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
        if (sessionStorage.getItem('username') === 'wei.han') { // 判断本地是否存在token
            next()
        } else {
            // 未登录,跳转到登陆页面
            next({
                path: '/login'
            })
        }
    } else {
        if (sessionStorage.getItem('username') === 'wei.han') {
            next('/')
        } else {
            next()
        }
    }
})