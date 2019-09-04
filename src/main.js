import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import router from './router/index.js'
import App from './App.vue'
import store from './store/store.js'
import MintUI from 'mint-ui'
import Vant from 'vant';
import 'vant/lib/index.css';


// import './config/rem'

import 'mint-ui/lib/style.css'
import '../static/css/mint.css'

Vue.config.productionTip = false

Vue.use(MintUI)
Vue.use(Vant);

Vue.use(VueRouter)
Vue.use(Vuex)


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
