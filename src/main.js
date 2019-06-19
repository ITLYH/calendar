import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import App from './App.vue'
import MintUI from 'mint-ui'

import 'mint-ui/lib/style.css'
import '../static/css/mint.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(MintUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
