<template>
    <div>
        <div class="search">
            <mt-search v-model="value" style="background:blue;" cancel-text="取消" placeholder="搜索"></mt-search>
        </div>

        <div class="swiper_bar">
            <mt-swipe :auto="3000">
                <mt-swipe-item>
                    <img class="swiper" src="../../static/image/swiper-1.jpg" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                    <img class="swiper" src="../../static/image/swiper-2.jpg" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                    <img class="swiper" src="../../static/image/swiper-3.jpg" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                    <img class="swiper" src="../../static/image/swiper-4.jpg" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                    <img class="swiper" src="../../static/image/swiper-5.jpg" alt>
                </mt-swipe-item>
            </mt-swipe>
        </div>

        <div id="nav">
            <mt-swipe :auto="0">
                <mt-swipe-item>
                    <div class="nav_div">
                        <img class="nav_img" src="../../static/image/swiper-1.jpg" alt>
                         <p class="nav_p">冷饮</p>
                    </div>
                    <div class="nav_div">
                        <img class="nav_img" src="../../static/image/swiper-2.jpg" alt>
                         <p class="nav_p">冷饮</p>
                    </div>
                    <div class="nav_div">
                        <img class="nav_img" src="../../static/image/swiper-3.jpg" alt>
                         <p class="nav_p">冷饮</p>
                    </div>
                    <div class="nav_div">
                        <img class="nav_img" src="../../static/image/swiper-4.jpg" alt>
                         <p class="nav_p">冷饮</p>
                    </div>
                    <div class="nav_div">
                        <img class="nav_img" src="../../static/image/swiper-5.jpg" alt>
                         <p class="nav_p">冷饮</p>
                    </div>
                    <div class="nav_div">
                        <img class="nav_img" src="../../static/image/swiper-1.jpg" alt>
                         <p class="nav_p">冷饮</p>
                    </div>
                    <div class="nav_div">
                        <img class="nav_img" src="../../static/image/swiper-2.jpg" alt>
                         <p class="nav_p">冷饮</p>
                    </div>
                    <div class="nav_div">
                        <img class="nav_img" src="../../static/image/swiper-3.jpg" alt>
                         <p class="nav_p">冷饮</p>
                    </div>
                    <div class="nav_div">
                        <img class="nav_img" src="../../static/image/swiper-4.jpg" alt>
                         <p class="nav_p">冷饮</p>
                    </div>
                    <div class="nav_div">
                        <img class="nav_img" src="../../static/image/swiper-5.jpg" alt>
                        <p class="nav_p">冷饮</p>
                    </div>
                </mt-swipe-item>
                <mt-swipe-item>
                    <div class="nav_div">
                        <img class="nav_img" src="../../static/image/swiper-1.jpg" alt>
                         <p class="nav_p">冷饮</p>
                    </div>
                    <div class="nav_div">
                        <img class="nav_img" src="../../static/image/swiper-2.jpg" alt>
                         <p class="nav_p">冷饮</p>
                    </div>
                    <div class="nav_div">
                        <img class="nav_img" src="../../static/image/swiper-3.jpg" alt>
                         <p class="nav_p">冷饮</p>
                    </div>
                    <div class="nav_div">
                        <img class="nav_img" src="../../static/image/swiper-4.jpg" alt>
                         <p class="nav_p">冷饮</p>
                    </div>
                    <div class="nav_div">
                        <img class="nav_img" src="../../static/image/swiper-5.jpg" alt>
                         <p class="nav_p">冷饮</p>
                    </div>
                    <div class="nav_div">
                        <img class="nav_img" src="../../static/image/swiper-1.jpg" alt>
                         <p class="nav_p">冷饮</p>
                    </div>
                    <div class="nav_div">
                        <img class="nav_img" src="../../static/image/swiper-2.jpg" alt>
                         <p class="nav_p">冷饮</p>
                    </div>
                    <div class="nav_div">
                        <img class="nav_img" src="../../static/image/swiper-3.jpg" alt>
                         <p class="nav_p">冷饮</p>
                    </div>
                    <div class="nav_div">
                        <img class="nav_img" src="../../static/image/swiper-4.jpg" alt>
                         <p class="nav_p">冷饮</p>
                    </div>
                    <div class="nav_div">
                        <img class="nav_img" src="../../static/image/swiper-5.jpg" alt>
                        <p class="nav_p">冷饮</p>
                    </div>
                </mt-swipe-item>
            </mt-swipe>
        </div>

        <div class="cell_hot">
            <mt-cell title="热门信息" is-link>
                <span style="color: #000;">更多</span>
            </mt-cell>
        </div>
    </div>
</template>
<script>
import { Cell, Search, Swipe, SwipeItem } from "mint-ui";

export default {
    name: "main",
    data() {
        const that = this;
        return {
            value: ""
        };
    }
};
</script>
<style scoped>
.swiper_bar {
    height: 115px;
    padding: 15px 0px 15px 0px;
    background:url("../../static/image/nav-bg.jpg") no-repeat center;
    /* background-size:  100% 165px; */
}
.swiper {
    height: 120px;
    width: 90%;
    border-radius: 15px;
    box-shadow: 0px 0px 2px 0px ;
}
.search {
    height: 52px;
}
.mint-search {
    height: 100%;
}
#nav {
    height: 155px;
    padding: 5px;
    background:url("../../static/image/nav-bg.jpg") no-repeat center;
    /* background-size:  100% 165px; */
}
.nav_div{
    flex: 0.2;
    display: inline-block;
    width: 20%;
    padding-top: 12px;
    z-index: 99999;
}
.nav_img {
    height: 30px;
    width: 45px;
    border-radius: 15px;
    box-shadow: 0px 0px 0px 0px ;
}
.nav_p{
    color: #fff;
    font-size: 12px;
}
.cell_hot {
}
</style>


