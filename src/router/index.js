
import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../view/main.vue'
import personalCenter from '../view/personalCenter.vue'
import lifeInfo from '../view/lifeInfo.vue'
import calender from '../view/calender.vue'
import nav from '../view/nav.vue'
import login from '../view/login.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', name: 'login', component: login },
        {
            path: '/nav', component: nav,
            children: [
                { path: '/', redirect: '/main' },
                { path: '/main', name: 'main', component: main },
                { path: '/calender', name: 'calender', component: calender },
                { path: '/personalCenter', name: 'personalCenter', component: personalCenter, meta: { permission: true } },
                { path: '/lifeInfo', name: 'lifeInfo', component: lifeInfo },
            ],
        },
    ]
})

export default router
