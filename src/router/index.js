
import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../view/main.vue'
import personalCenter from '../view/personalCenter.vue'
import lifeInfo from '../view/lifeInfo.vue'
import calender from '../view/calender.vue'
import login from '../view/login.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '*', redirect: '/login' },
        { path: '/', redirect: '/login' },
        // { path: '*', name: 'calender', component: calender },
        { path: '/calender', name: 'calender', component: calender },
        { path: '/main', name: 'main', component: main },
        { path: '/personalCenter', name: 'personalCenter', component: personalCenter },
        { path: '/lifeInfo', name: 'lifeInfo', component: lifeInfo },
        { path: '/login', name: 'login', component: login },
    ]
})

export default router