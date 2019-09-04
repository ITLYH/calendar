<template>
    <div id="main">
        <div class="search">
            <van-search id="search_box" v-model="value" background="linear-gradient(to right, gold, pink)" placeholder="请输入搜索关键词" show-action shape="round" label="地址" @search="onSearch">
                <template #action>
                    <div @click="onSearch">搜索</div>
                </template>
            </van-search>
        </div>

        <!-- 轮播图start -->
        <div class="swiper_bar">
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item, index) in slidesPath" :key="index">
                    <img class="swiper" :src="item.url" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- 轮播图end -->

        <!-- 导航栏start -->
        <div id="nav_box">
            <van-swipe :show-indicators="false">
                <van-swipe-item>
                    <div class="nav_div" v-for="(item ,index) in navPath1" :key="index">
                        <img class="nav_img" :src="item.url" />
                        <p class="nav_p">{{item.name}}</p>
                    </div>
                </van-swipe-item>
                <van-swipe-item>
                    <div class="nav_div" v-for="(item ,index) in navPath2" :key="index">
                        <img class="nav_img" :src="item.url" />
                        <p class="nav_p">{{item.name}}</p>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- 导航栏end -->

        <div class="cell_hot">
            <van-nav-bar title="" left-text="热门信息">
                <van-icon name="arrow" slot="right" />
            </van-nav-bar>
        </div>

        <div>
            <van-tabs>
                <van-tab title="video">
                    <div class="tab_barList">
                        <div class="tab_barList_content">
                            <div class="content_left">
                                <img class="user_img" src="../../../static/image/user_1.jpg" alt />
                                <div class="user_msg">
                                    <span>X先生</span>
                                    <br />
                                    <span>知名咨询博主</span>
                                </div>
                            </div>
                            <div class="content_right">
                                <label id="icon-moreunfold" class="mint-button-text iconfont icon-moreunfold">&nbsp;&nbsp;</label>
                            </div>
                        </div>
                        <div class="tab_barList_video_box">
                            <video width="100%" height="215" class="tab_barList_video" src="../../../static/video/video_1.mp4" poster="../../../static/video/video_1_gif.gif" controls></video>
                        </div>
                        <div class="tab_barList_content">
                            <div class="content_footer">
                                <div class="tab_content" @click="praiseCount">
                                    <i class="iconfont icon-good" id="icon-good"></i>
                                    <span>&nbsp;{{this.praise}}</span>
                                </div>
                                <div class="tab_content" @click="treadCount">
                                    <i class="iconfont icon-bad" id="icon-bad"></i>
                                    <span>&nbsp;{{this.tread}}</span>
                                </div>
                                <div class="tab_content">
                                    <i class="iconfont icon-comments"></i>
                                    <span>&nbsp;{{this.comments}}万</span>&nbsp;&nbsp;
                                </div>
                                <div class="tab_content" >
                                    <i class="iconfont icon-skip"></i>
                                    <span>&nbsp;{{this.share}}万</span>&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="image">内容 2</van-tab>
                <van-tab title="message">内容 3</van-tab>
                <van-tab title="image">内容 2</van-tab>
                <van-tab title="message">内容 3</van-tab>
                <van-tab title="image">内容 2</van-tab>
                <van-tab title="message">内容 3</van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script>
import {
    Loadmore,
    Cell,
    Actionsheet
} from "mint-ui";
import { Search, Swipe, SwipeItem, NavBar, Tab, Tabs } from 'vant';
import share from "../../components/share";
import appData from "../../common/appDataS";

export default {
    name: "main",
    components: {
    },
    data() {
        const that = this;
        return {
            value: "",
            selected: "1",
            praise: 99, // 赞
            tread: 0, // 踩
            comments: 150, // 评论
            share: 66, // 分享
            searchData: appData.main.searchData,
            slidesPath: appData.main.imgPath.slides,
            navPath1: appData.main.imgPath.nav[0],
            navPath2: appData.main.imgPath.nav[1],
        };
    },
    methods: {
        praiseCount: function () {
            this.praise++;
            var iconGood = document.getElementById("icon-good");
            iconGood.className = "iconfont icon-good-filling";
            iconGood.style.color = "red";
        },
        treadCount: function () {
            this.tread++;
            var iconGood = document.getElementById("icon-bad");
            iconGood.style.color = "red";
        },
        onSearch(){
            console.log("搜索")
        }
    },
    created() { }
};
</script>
<style scoped>
#search_box {
    background: -webkit-linear-gradient(
        left,
        gold,
        pink
    ); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, gold, pink); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, gold, pink); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, gold, pink); /* 标准的语法 */
}
#main {
    height: auto;
}
.swiper_bar {
    height: 125px;
    padding: 13px 0px 8px 0px;
    background: url("../../../static/image/nav-bg4.jpg") no-repeat left -100px;
    background-size: 100% auto;
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
#nav_box {
    height: 155px;
    padding: 5px;
    background: url("../../../static/image/nav-bg4.jpg") no-repeat left -265px;
    background-color: #fff;
    background-size: 100% auto;
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
    box-shadow: 1px 1px 8px #999;
}
.nav_p {
    color: #fff;
    font-size: 12px;
}
.cell_hot {
}
.tab_barList {
    box-shadow: 0 0 2px 0;
    margin-bottom: 52px;
    margin-top: 5px;
    background-color: #fff;
}
.tab_barList_video {
    display: inline-block;
}
.tab_barList_content {
    padding: 5px;
    height: 30px;
    line-height: 27px;
    font-size: 13px;
}
.user_img {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    vertical-align: middle;
    margin-right: 10px;
}
.user_msg {
    display: inline-block;
    padding-top: 3px;
    height: 32px;
    width: 100px;
    font-size: 10px;
    line-height: 15px;
    text-align: left;
    vertical-align: middle;
}
.user_msg > span:last-child {
    color: #ccc;
}
.content_left {
    float: left;
}
.content_right {
    float: right;
}
.content_footer {
    display: flex;
}
.tab_content {
    display: inline-block;
    flex: 0.25;
}
</style>


