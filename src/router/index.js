import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/Login.vue'
import ResultPage from '@/views/Result.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        alias: '/',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/result',
        name: 'result',
        component: ResultPage
    }
]

const router = new VueRouter({
    mode: 'hash', // 添加这一行
    routes
})

export default router
