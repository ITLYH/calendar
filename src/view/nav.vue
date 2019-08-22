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
                <router-link to="/calendar">
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
    background-color: #ffcc00;
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