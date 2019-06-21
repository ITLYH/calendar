<template>
    <div id="main">
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

        <div>
            <mt-navbar v-model="selected">
                <mt-tab-item id="1" class="nav_bar">video</mt-tab-item>
                <mt-tab-item id="2" class="nav_bar">image</mt-tab-item>
                <mt-tab-item id="3" class="nav_bar">message</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <div class="tab_barList">
                        <div >
                            <video
                                width="100%"
                                height="250"
                                class="tab_barList_video"
                                src="../../static/video/video_1.mp4"
                                poster="../../static/video/video_1_gif.gif"
                                controls
                            ></video>
                        </div>
                        <div class="tab_barList_content">
                            <p>1</p>
                            <p>2</p>
                            <div>
                                <p>3</p>
                                <span>4</span>
                            </div>
                        </div>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <p>2222</p>
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <p>3333</p>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>
<script>
import { Navbar, TabItem, Cell, Search, Swipe, SwipeItem } from "mint-ui";

export default {
    name: "main",
    data() {
        const that = this;
        return {
            value: "",
            selected: "1"
        };
    }
};
</script>
<style scoped>
#main {
    height: auto;
}
.swiper_bar {
    height: 125px;
    padding: 13px 0px 8px 0px;
    background: url("../../static/image/nav-bg.jpg") no-repeat left top;
    background-size: 100% 301px;
}
.swiper {
    height: 120px;
    width: 90%;
    border-radius: 15px;
    box-shadow: 0px 0px 2px 0px;
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
    background: url("../../static/image/nav-bg.jpg") no-repeat left bottom;
    background-size: 100% 320px;
}
.nav_div {
    flex: 0.2;
    display: inline-block;
    width: 20%;
    padding-top: 12px;
    z-index: 99999;
}
.nav_img {
    height: 35px;
    width: 35px;
    border-radius: 17.5px;
    box-shadow: 0px 0px 0px 0px;
}
.nav_p {
    color: #fff;
    font-size: 12px;
}
.cell_hot {
}
.tab_barList_video {
    /* width: 70px;
    height: 35px; */
    display: inline-block;
}
.tab_barList_content {
    display: inline-block;
}
</style>


