<template>
    <div>
        <div ref="top_2">
            <van-tabs v-model="active">
                <van-tab title="关注">关注</van-tab>
                <van-tab title="推荐">
                    <div class="tab_barList" v-for="(item,index) in videoList" :key="index">
                        <div class="tab_barList_content">
                            <div class="content_left">
                                <img class="user_img" :src="item.userImg" alt />
                                <div class="user_msg">
                                    <span>{{item.user}}</span>
                                    <br />
                                    <span>{{item.describe}}</span>
                                </div>
                            </div>
                            <div class="content_right">
                                <van-dropdown-menu id="content_right_dropdown">
                                    <van-dropdown-item title="" ref="item">
                                        <van-switch-cell v-model="item.switch1" active-color="#07c160" title="不感兴趣" />
                                        <van-switch-cell v-model="item.switch2" active-color="#07c160" title="举报" />
                                        <van-switch-cell v-model="item.switch3" active-color="#07c160" :title="'屏蔽作者：'+item.user" />
                                        <van-switch-cell v-model="item.switch4" active-color="#07c160" title="内容不雅" />
                                        <van-switch-cell v-model="item.switch5" active-color="#07c160" title="内容重复" />
                                        <van-switch-cell v-model="item.switch6" active-color="#07c160" title="内容引起不适" />
                                    </van-dropdown-item>
                                </van-dropdown-menu>
                            </div>
                        </div>

                        <div class="tab_barList_video_box">
                            <p class="log_title">{{item.title}}</p>
                            <com-video :urls="item.url" v-if="item.url.split('.')[item.url.split('.').length-1] !== 'jpg'"></com-video>
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
                                <div class="tab_content" @click="goComments(item)">
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
                </van-tab>
                <van-tab title="视频">内容 3</van-tab>
                <van-tab title="图片">
                    <ul>
                        <li v-for="item in list" id="lazy_li">
                            <div class="tab_barList_content">
                                <div class="content_left">
                                    <img class="user_img" :src="item.userImg" alt />
                                    <div class="user_msg">
                                        <span>{{item.user}}</span>
                                        <br />
                                        <span>{{item.describe}}</span>
                                    </div>
                                </div>
                                <div class="content_right">
                                    <van-dropdown-menu id="content_right_dropdown">
                                        <van-dropdown-item title="" ref="item">
                                            <van-switch-cell v-model="item.switch1" active-color="#07c160" title="不感兴趣" />
                                            <van-switch-cell v-model="item.switch2" active-color="#07c160" title="举报" />
                                            <van-switch-cell v-model="item.switch3" active-color="#07c160" :title="'屏蔽作者：'+item.user" />
                                            <van-switch-cell v-model="item.switch4" active-color="#07c160" title="内容不雅" />
                                            <van-switch-cell v-model="item.switch5" active-color="#07c160" title="内容重复" />
                                            <van-switch-cell v-model="item.switch6" active-color="#07c160" title="内容引起不适" />
                                        </van-dropdown-item>
                                    </van-dropdown-menu>
                                </div>
                            </div>
                            <img :src="item.url" width="100%">
                            <div class="img_detail">
                                <span>查看详情</span>
                                <span>
                                    <van-icon name="arrow"></van-icon>
                                </span>
                            </div>
                        </li>
                    </ul>
                </van-tab>
                <van-tab title="资讯">内容 3</van-tab>
                <van-tab title="文字">内容 2</van-tab>
            </van-tabs>
        </div>

        <div id="toTop" @click="toTop" v-show="isShow">
            <span class="iconfont icon-less"></span>
        </div>
    </div>
</template>

<script>
import { NavBar, Tab, Tabs, DropdownMenu, DropdownItem, Checkbox, CheckboxGroup, Lazyload } from "vant";
import appData from "../../common/appDataS";
import video from "../../components/video";
export default {
    name: "lifeInfo",
    data() {
        return {
            share: false,
            value: "",
            selected: "2",
            praise: 0,
            tread: 0,
            checked: false,
            list: appData.lifeInfo.imgInfo,
            videoList: appData.lifeInfo.videoInfo,
            topText: "",
            allLoaded: false,
            isShow: false,
            active: 1,
        };
    },
    components: {
        "com-video": video
    },
    methods: {
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
        goComments: function (m) {
            localStorage.setItem("item_detail", JSON.stringify(m));
            this.$router.push({ path: "/comments", query: { item: m } });
        },
        loadTop() {
            //下拉刷新
            setTimeout(() => {
                this.$refs.loadmore.onTopLoaded();
            }, 1500);
        },
        loadBottom() {
            //上拉加载更多
            setTimeout(() => {
                this.allLoaded = true;
                this.$refs.loadmore.onBottomLoaded();
            }, 1500);
        },
        toTop() {
            let h = this.$refs.top_2.offsetTop;
            if (!document.documentElement.scrollTop) {
                document.body.scrollTop = h;
            } else {
                document.documentElement.scrollTop = h;
            }
        },
        showIcon() {
            if (
                !!document.documentElement.scrollTop &&
                document.documentElement.scrollTop > 30
            ) {
                this.isShow = true;
            } else {
                this.isShow = false;
            }
        }
    },
    created() { },
    mounted() {
        window.addEventListener("scroll", this.showIcon);
    },
    watch: {}
};
</script>

<style>
</style>

<style scoped>
#content_right_dropdown {
    height: 40px;
    text-align: center;
    padding-right: 15px;
    border: 0px;
}
.van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after {
    border-width: 0px 0;
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
    height: 35px;
    line-height: 32px;
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
#toTop {
    position: fixed;
    bottom: 90px;
    right: 20px;
    width: 35px;
    height: 35px;
    border-radius: 20px;
    background-color: #fff;
    text-align: center;
    line-height: 35px;
    opacity: 0.8;
}
#toTop span {
    font-size: 25px;
}
.custom-title {
    float: left;
}
#top_bar {
}
.img_detail {
    margin-top: -5px;
    height: 25px;
    width: auto;
    background: #fff;
    padding: 10px 5px;
    line-height: 25px;
    text-align: left;
}
.img_detail > span:last-child {
    float: right;
    line-height: 25px;
    color: #ccc;
}
</style>