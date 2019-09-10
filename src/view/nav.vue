<template>
    <div id="navS">
        <router-view></router-view>

        <van-tabbar route id="footTab" active-color="#fff" fixed inactive-color="#000">
            <van-tabbar-item replace to="/main">
                <p class="icon iconfont icon-warehouse-delivery"></p>
                Main
            </van-tabbar-item>
            <van-tabbar-item replace to="/userPage">
                <p class="icon iconfont icon-calendar"></p>
                Calendar
            </van-tabbar-item>
            <van-tabbar-item replace to="/lifeInfo">
                <p class="icon iconfont icon-jewelry"></p>
                LifeInfo
            </van-tabbar-item>
            <van-tabbar-item replace to="/personalCenter">
                <p class="icon iconfont icon-account"></p>
                Center
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
    data() {
        return {};
    },
    created() {
        document.body.style.paddingBottom = "50px";
    },
    methods: {
    },
    watch: {
        $route(to, from) {
            console.log(to.path);
            if (to.path === '/main' || to.path === '/lifeInfo') {
                this.flag = false
            } else {
                this.flag = true;
            }
        }
    },
};
</script>>

<style scoped>
#footTab {
    bottom: 0px;
    width: 100%;
    height: 50px;
    line-height: 20px;
    background: -webkit-linear-gradient(
        left,
        gold,
        pink
    ); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, gold, pink); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, gold, pink); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, gold, pink); /* 标准的语法 */
}
.tab {
    display: inline-block;
    text-align: center;
    width: 25%;
    padding-top: 5px;
    color: azure;
}
</style>