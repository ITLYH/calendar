<template>
    <div id="main">
        <div class="search">
            <mt-search v-model="value" style="background:blue;" cancel-text="取消" placeholder="搜索"></mt-search>
        </div>

        <div class="swiper_bar">
            <mt-swipe >
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
                        <div class="tab_barList_content">
                            <div class="content_left">
                                <img class="user_img" src="../../static/image/user_1.jpg" alt>
                                <div class="user_msg">
                                    <span>X先生</span>
                                    <br>
                                    <span>知名咨询博主</span>
                                </div>
                            </div>
                            <div class="content_right">
                                <label
                                    @click="actionSheet"
                                    id="icon-moreunfold"
                                    class="mint-button-text iconfont icon-moreunfold"
                                >&nbsp;&nbsp;</label>
                            </div>
                        </div>
                        <div class="tab_barList_video_box">
                            <video
                                width="100%"
                                height="215"
                                class="tab_barList_video"
                                src="../../static/video/video_1.mp4"
                                poster="../../static/video/video_1_gif.gif"
                                controls
                            ></video>
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
                                <div class="tab_content" @click="shareOrder">
                                    <i class="iconfont icon-skip"></i>
                                    <span>&nbsp;{{this.share}}万</span>&nbsp;&nbsp;
                                </div>
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
        
        <mt-actionsheet :actions="actions" v-model="sheetVisible" closeOnClickModal="true"></mt-actionsheet>
        <share v-show="share"></share>
    </div>
</template>
<script>
import {
    Loadmore,
    Navbar,
    TabItem,
    Cell,
    Search,
    Swipe,
    SwipeItem
} from "mint-ui";
import share from "../components/share";

export default {
    name: "main",
    components:{
        share,
    },
    data() {
        const that = this;
        return {
            share: false,
            value: "",
            selected: "1",
            praise: 99, // 赞
            tread: 0, // 踩
            comments: 150, // 评论
            share: 66, // 分享
            sheetVisible: false,
            actions: [
                { name: "不感兴趣", method: this.noInterest },
                { name: "内容重复", method: this.contentRepeat },
                { name: "内容引起不适", method: this.contentBad }
            ]
        };
    },
    methods: {
        actionSheet: function() {
            this.sheetVisible = true;
        },
        noInterest: function() {
            console.log("不感兴趣");
        },
        contentRepeat: function() {
            console.log("内容重复");
        },
        contentBad: function() {
            console.log("内容引起不适");
        },
        praiseCount: function() {
            this.praise++;
            var iconGood = document.getElementById("icon-good");
            iconGood.className = "iconfont icon-good-filling";
            iconGood.style.color = "red";
        },
        treadCount: function() {
            this.tread++;
            var iconGood = document.getElementById("icon-bad");
            iconGood.style.color = "red";
        },
        shareOrder: function(){
            this.share = true;
        },
    },
    created() {
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
    background: url("../../static/image/nav-bg4.jpg") no-repeat left -100px;
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
#nav {
    height: 155px;
    padding: 5px;
    background: url("../../static/image/nav-bg4.jpg") no-repeat left -265px;
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
    box-shadow: 0px 0px 0px 0px;
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


