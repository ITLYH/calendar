<template>
    <div id="navS">
        <router-view></router-view>
        <ul id="footTab">
            <li class="tab">
                <router-link to="/main">
                    <p class="icon iconfont icon-warehouse-delivery"></p>
                    <p>Main</p>
                </router-link>
            </li>
            <li class="tab">
                <router-link to="/video">
                    <p class="icon iconfont icon-calendar"></p>
                    <p>Calender</p>
                </router-link>
            </li>
            <li class="tab">
                <router-link to="/lifeInfo">
                    <p class="icon iconfont icon-jewelry"></p>
                    <p>LifeInfo</p>
                </router-link>
            </li>
            <li class="tab">
                <router-link to="/personalCenter">
                    <p class="icon iconfont icon-account"></p>
                    <p>Center</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "nav",
    data() {
        return {};
    },
    created() {
        document.body.style.paddingBottom = "50px";
    },
    methods: {
    }
};
</script>>

<style scoped>
#footTab {
    bottom: 0px;
    width: 100%;
    height: 50px;
    line-height: 20px;
    background: -webkit-linear-gradient(left, gold, pink); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, gold, pink); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, gold, pink); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, gold, pink); /* 标准的语法 */
    position: fixed;
    bottom: 0px;
}
.tab {
    display: inline-block;
    text-align: center;
    width: 25%;
    padding-top: 5px;
    color: azure;
}
</style>