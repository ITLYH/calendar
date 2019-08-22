import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userInfo: null, //用户信息
        isLogin: false,   //是否登录
        servicesPath: 'http://localhost:8080/',
    },
    mutations: {
        updateUserInfo(state, message) {
            state.userInfo = message
        },
        loginType(state, message) {
            state.isLogin = message
        },
    }
})

export default store