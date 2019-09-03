
import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../view/main/main.vue'
import personalCenter from '../view/personalCenter/personalCenter.vue'
import lifeInfo from '../view/lifeInfo/lifeInfo.vue'
import nav from '../view/nav.vue'
import login from '../view/login.vue'
import day from '../view/day.vue'
import comments from '../components/comments.vue'
import video from '../components/video.vue'

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
                { path: '/day', name: 'day', component: day },
                { path: '/personalCenter', name: 'personalCenter', component: personalCenter, meta: { permission: true } },
                { path: '/lifeInfo', name: 'lifeInfo', component: lifeInfo },
            ],
        },
        { path: '/comments', name: 'comments', component: comments },
        { path: '/video', name: 'video', component: video },
    ],
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return { x: 0, y: 0 }
    }
})

export default router
