<template>
    <div id="app">
        <!-- <calender msg/> -->
        <ul id="footTab">
            <li class="tab">
                <router-link to="/calendar">
                    <p class="icon iconfont icon-calendar"></p>
                    <p>calender</p>
                </router-link>
            </li>
            <li class="tab">
                <router-link to="/main">
                    <p class="icon iconfont icon-warehouse-delivery"></p>
                    <p>main</p>
                </router-link>
            </li>
            <li class="tab">
                <router-link to="/lifeInfo">
                    <p class="icon iconfont icon-jewelry"></p>
                    <p>lifeInfo</p>
                </router-link>
            </li>
            <li class="tab">
                <router-link to="/personalCenter">
                    <p class="icon iconfont icon-account"></p>
                    <p>Center</p>
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
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
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 0;
    height: 667px;
}
#footTab{
    display: flex;
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 50px;
    line-height: 20px;
    background-color: rgb(255, 204, 0);
}
.tab{
    flex: .25;
    display: inline-block;
    text-align: center;
    width: 100%;
    padding-top: 5px;
    color: azure;
}
.icon{
    
}
</style>
