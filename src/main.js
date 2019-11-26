import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import router from './router/index.js'
import App from './App.vue'
import store from './store/store.js'
import axios from 'axios'
import Vant from 'vant';
import { Lazyload } from 'vant';
import 'vant/lib/index.css';
import less from 'less'

// import './config/rem'

Vue.config.productionTip = false

Vue.use(Vant);
Vue.use(Lazyload);

Vue.use(less)
// 在组件内使用 <style lang="less" scoped></style>

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.use(axios)
// Vue.prototype.$axios = axios   // 挂载到vue
axios.defaults.baseURL = 'http://localhost:8080/';
axios.defaults.headers.common['token'] = localStorage.getItem('token');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 全局路由监控
router.beforeEach((to, from, next) => {
  if (to.meta.permission) {
    var token = localStorage.getItem('token');
    if (!token) {
      next({ path: '/login' })
    } else {
      next();
    }
  } else {
    next();
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
