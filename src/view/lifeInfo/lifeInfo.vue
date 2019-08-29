<template>
    <div>
        <div>
            <div id="nav_bar_box">
                <mt-navbar fixed v-model="selected">
                    <mt-tab-item id="1" class="nav_bar">关注</mt-tab-item>
                    <mt-tab-item id="2" class="nav_bar">推荐</mt-tab-item>
                    <mt-tab-item id="3" class="nav_bar">视频</mt-tab-item>
                    <mt-tab-item id="4" class="nav_bar">图片</mt-tab-item>
                    <mt-tab-item id="5" class="nav_bar">资讯</mt-tab-item>
                    <mt-tab-item id="6" class="nav_bar">文字</mt-tab-item>
                </mt-navbar>
            </div>
            <!-- tab-container -->
            <mt-tab-container v-model="selected">
                <!--  -->
                <mt-tab-container-item id="1">
                    <p>关注</p>
                </mt-tab-container-item>

                <!--  -->
                <mt-tab-container-item id="2">
                    <div class="tab_barList" v-for="(item,index) in videoList" :key="index">
                        <div class="tab_barList_content">
                            <div class="content_left">
                                <img class="user_img" src="../../../static/image/user_1.jpg" alt />
                                <div class="user_msg">
                                    <span>{{item.user}}</span>
                                    <br />
                                    <span>{{item.describe}}</span>
                                </div>
                            </div>
                            <div class="content_right">
                                <label @click="actionSheet" id="icon-moreunfold" class="mint-button-text iconfont icon-moreunfold">&nbsp;&nbsp;</label>
                            </div>
                        </div>

                        <div class="tab_barList_video_box">
                            <p class="log_title">{{item.title}}</p>
                            <video width="100%" height="215" class="tab_barList_video" :src="item.url" poster controls v-if="item.url.split('.')[item.url.split('.').length-1] !== 'jpg'"></video>
                            <img :src="item.url" alt height="215" width="auto" v-else />
                        </div>

                        <div class="tab_barList_content">
                            <div class="content_footer">
                                <div class="tab_content" @click="praiseCount($event)">
                                    <i class="iconfont icon-good">&nbsp;{{item.praise}}</i>
                                </div>
                                <div class="tab_content" @click="treadCount($event)">
                                    <i class="iconfont icon-bad">&nbsp;{{item.tread}}</i>
                                </div>
                                <div class="tab_content" @click="goComments">
                                    <i class="iconfont icon-comments"></i>
                                    <span>&nbsp;{{item.comments}}万</span>&nbsp;&nbsp;
                                </div>
                                <div class="tab_content" @click="shareOrder($event)">
                                    <i class="iconfont icon-skip"></i>
                                    <span>&nbsp;{{item.share}}万</span>&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>
                    </div>
                </mt-tab-container-item>

                <!--  -->
                <mt-tab-container-item id="3">
                    <p>视频</p>
                </mt-tab-container-item>

                <!--  -->
                <mt-tab-container-item id="4">
                    <ul>
                        <li v-for="item in list" id="lazy_li">
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
                                    <label @click="actionSheet" id="icon-moreunfold" class="mint-button-text iconfont icon-moreunfold">&nbsp;&nbsp;</label>
                                </div>
                            </div>
                            <img v-lazy.4="item.url" style="width:100%" />
                            <mt-cell :title="item.title" :label="item.text" is-link :to="{ name: 'main' }"></mt-cell>
                        </li>
                    </ul>
                </mt-tab-container-item>

                <!--  -->
                <mt-tab-container-item id="5">
                    <p>资讯</p>
                </mt-tab-container-item>

                <!--  -->
                <mt-tab-container-item id="6">
                    <p>文字</p>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<script>
import { Lazyload } from "mint-ui";
import appData from "../../common/appDataS";
export default {
    name: "lifeInfo",
    data() {
        return {
            share: false,
            value: "",
            selected: "2",
            praise: 0,
            tread: 0,
            list: appData.lifeInfo.imgInfo,
            videoList: appData.lifeInfo.videoInfo
        };
    },
    methods: {
        actionSheet: function () {
            this.sheetVisible = true;
        },
        noInterest: function () {
            console.log("不感兴趣");
        },
        contentRepeat: function () {
            console.log("内容重复");
        },
        contentBad: function () {
            console.log("内容引起不适");
        },
        praiseCount: function (e) {
            var iconGood = e.currentTarget.firstElementChild;
            var iconGoodsss = e.currentTarget.nextElementSibling.firstElementChild;
            this.praise = iconGood.innerText;
            if (iconGoodsss.style.color == "red") return;
            if (iconGood.style.color == "red" && iconGoodsss.style.color !== "red") {
                this.praise--;
                iconGood.innerText = " " + this.praise;
                iconGood.style.color = "";
                iconGood.className = "iconfont icon-good";
            } else {
                this.praise++;
                iconGood.innerText = " " + this.praise;
                iconGood.className = "iconfont icon-good-filling";
                iconGood.style.color = "red";
            }
        },
        treadCount: function (e) {
            var iconBad = e.currentTarget.firstElementChild;
            var iconBadsss = e.currentTarget.previousElementSibling.firstElementChild;
            this.tread = iconBad.innerText;
            if (iconBadsss.style.color == "red") return;
            if (iconBad.style.color == "red" && iconBadsss.style.color !== "red") {
                this.tread--;
                iconBad.innerText = " " + this.tread;
                iconBad.style.color = "";
            } else {
                this.tread++;
                iconBad.innerText = " " + this.tread;
                iconBad.style.color = "red";
            }
        },
        shareOrder: function () {
            this.share = true;
        },
        goComments: function () {
            this.$router.push({ path: "/comments" })
        }
    },
    created() { }
};
</script>
<style>
</style>

<style scoped>
image[lazy="loading"] {
    width: 40px;
    height: 300px;
    margin: auto;
}
.tab_barList {
    box-shadow: 0 0 2px 0;
    margin-top: 7px;
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
    background-color: #fff;
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
    font-size: 13px;
}
.content_footer i {
    font-size: 13px;
}
.tab_content {
    display: inline-block;
    flex: 0.25;
}
#nav_bar_box {
    margin-bottom: 35px;
}
#lazy_li {
    margin-bottom: 10px;
}
.log_title {
    text-align: left;
    padding: 5px 5px;
    font-size: 12px;
}
</style>