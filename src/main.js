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

// import './config/rem'

Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(Lazyload);

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.use(axios)
// Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:8080/';
axios.defaults.headers.common['token'] = localStorage.getItem('token');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


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
