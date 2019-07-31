<template>
    <div id="app">
        <!-- <calender msg/> -->
        <router-view></router-view>
        <!-- <ul id="footTab">
            <li class="tab">
                <router-link to="/calendar">
                    <p class="icon iconfont icon-calendar"></p>
                    <p>Calender</p>
                </router-link>
            </li>
            <li class="tab">
                <router-link to="/main">
                    <p class="icon iconfont icon-warehouse-delivery"></p>
                    <p>Main</p>
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
        </ul> -->
    </div>
</template>

<script>
export default {
    name: "app",
};
</script>

<style scoped>
@import '../static/css/common.css';
@import '../static/font/iconfont.css';
#app {
    font-family: "微软雅黑","Microsoft YaHei","Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 0;
}
#footTab{
    bottom: 0px;
    width: 100%;
    height: 50px;
    line-height: 20px;
    background-color: #FFCC00;
    position: fixed;
    bottom: 0px;
}
.tab{
    display: inline-block;
    text-align: center;
    width: 25%;
    padding-top: 5px;
    color: azure;
}
.icon{
    
}
</style>
