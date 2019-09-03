<template>
    <div id="comments">
        <div id="comments_box">
            <div class="tab_barList_video_box">
                <div class="img_tiezi" v-show="this.items.url.split('.')[this.items.url.split('.').length-1] == 'jpg'">
                    <span class="back iconfont icon-back" @click="$router.go(-1)"></span>
                    <span>帖子详情</span>
                    <span class="iconfont icon-share"></span>
                </div>
                <img :src="this.items.url" alt height="215" width="auto" v-if="this.items.url.split('.')[this.items.url.split('.').length-1] == 'jpg'" />
                <com-video :urls="this.items.url" :flag="this.flag" v-else></com-video>
            </div>
            <div class="tab_barList_content">
                <div class="content_left">
                    <img class="user_img" :src="this.items.userImg" alt />
                    <div class="user_msg">
                        <span>{{this.items.user}}</span>
                        <br />
                        <span>{{this.items.describe}}</span>
                    </div>
                </div>
                <div class="content_right" @click="GuanZuFun">
                    <span class="guanZu" :style="{'color':isGuanZu?'red':'#fff'}" v-text="isGuanZu?'已关注':'关注'"></span>
                </div>
            </div>
        </div>
        <p class="log_title">{{this.items.title}}</p>
        <div class="statistical_log">
            <p><span class="iconfont icon-discount"></span> 吃鸡小分队</p>
            <div>
                <div><span>{{this.items.look}}次观看</span></div>
                <div><span>{{this.items.attention}}人关注</span><i class="iconfont icon-attachment"></i></div>
            </div>
        </div>

        <!-- 评论列表 -->
        <div class="comments_list" id="" ref="comments_top">
            <div class="comments_listS" v-for="(item,index) in commentsList" :key="index">
                <img :src="item.comments_user_img">
                <div>
                    <div>
                        <span>{{item.comments_user}}</span> · <span>{{item.comments_time}}</span>
                        <span @click="giveLike(item.comments_good,index,$event)">
                            <span>{{item.comments_good}} </span><i :class="item.flag?'iconfont icon-good-filling':'iconfont icon-good'" :style="{'color':item.flag?'red':'black'}"></i>
                        </span>
                    </div>
                    <p>{{item.comments_detail}}</p>
                    <span>{{item.comments_reply}}回复<i class="iconfont icon-more"></i></span>
                </div>
            </div>
        </div>

        <!-- 回复 -->
        <div class="user_reply">
            <div>
                <input id="user_reply_text" type="text" placeholder="说点什么...">
            </div>
            <div>
                <span>
                    <p class="iconfont icon-good"></p>
                    <span>1.5万 </span>
                    <!-- <span>1.5万 </span><i :class="item.flag?'iconfont icon-good-filling':'iconfont icon-good'" :style="{'color':item.flag?'red':'black'}"></i> -->
                </span>
                <span @click="toTop">
                    <p class="iconfont icon-comments"></p>
                    <span>100</span>
                </span>
                <span>
                    <p class="iconfont icon-favorite"></p>
                    <span>收藏</span>
                </span>
                <span>
                    <p class="iconfont icon-skip"></p>
                    <span>分享</span>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import appData from "../common/appDataS";
import { Toast, MessageBox } from 'mint-ui';
import video from "./video";
export default {
    data() {
        return {
            isGuanZu: false,
            good: 0,
            code: '',
            items: JSON.parse(localStorage.getItem('item_detail')),
            commentsList: appData.comments.comments_list,
            flag: false,
            // urls: require('../../static/video/video_1.mp4'),
        };
    },
    props: [],
    components: {
        "com-video": video
    },
    watch: {

    },
    methods: {
        GuanZuFun() {
            if (this.isGuanZu == false) {
                this.isGuanZu = true;
                Toast({
                    message: '关注成功',
                    duration: 1000
                });
            } else {
                MessageBox.confirm('确定执行此操作?', '取消关注').then(action => {
                    this.isGuanZu = false;
                    Toast({
                        message: '取消关注成功',
                        duration: 1000
                    });
                });
            }
        },
        giveLike(num, index, e) {
            // 方法一
            var iconGood = e.currentTarget.lastElementChild;
            iconGood.style.color == "red" ? num-- : num++;
            iconGood.style.color == "red" ? this.commentsList[index].flag = false : this.commentsList[index].flag = true;
            this.commentsList[index].comments_good = num;

            // 方法二
            // this.commentsList[index].comments_good = this.commentsList[index].flag ? num--:num++;
            // this.commentsList[index].comments_good = num;
            // this.commentsList[index].flag = this.commentsList[index].flag?false:true;
        },
        toTop() {
            if (this.items.url.split('.')[this.items.url.split('.').length - 1] == "mp4") {
                let h = this.$refs.comments_top.offsetTop - 260;
                if (!document.documentElement.scrollTop) {
                    document.body.scrollTop = h;
                } else {
                    document.documentElement.scrollTop = h;
                }
            } else {
                let h = this.$refs.comments_top.offsetTop - 290;
                if (!document.documentElement.scrollTop) {
                    document.body.scrollTop = h;
                } else {
                    document.documentElement.scrollTop = h;
                }
            }

        },
        rout() {
            if (this.$route.path === "/comments") {
                this.flag = true;
            }
        },
        checkFo() {
            if (document.addEventListener) {
                document.getElementById('user_reply_text').addEventListener('blur', function () {
                    document.getElementsByClassName('user_reply')[0].style.bottom = "0px";
                })
            } else {
                document.getElementById('user_reply_text').attachEvent('blur', function () {
                    document.getElementsByClassName('user_reply')[0].style.bottom = "0px";
                })
            }

        }
    },
    created() {
        this.rout();
    },
    mounted() {
        if (this.items.url.split('.')[this.items.url.split('.').length - 1] == "mp4") {
            document.getElementById('comments').style.paddingTop = '260px';
        }
    },
    watch: {
        "$route": "rout"
    },

};
</script>


<style scoped>
#comments {
    padding-top: 290px;
}
.tab_barList_content {
    padding: 5px;
    height: 30px;
    line-height: 27px;
    font-size: 13px;
    background-color: #fff;
    border-bottom: 1px solid rgb(238, 237, 237);
}
.content_left {
    float: left;
}
.content_right {
    margin-top: 2px;
    float: right;
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
    height: 30px;
    width: 100px;
    font-size: 10px;
    line-height: 15px;
    text-align: left;
    vertical-align: middle;
}
.user_msg > span:last-child {
    color: #ccc;
}
#comments_box {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    background-color: #fff;
}
.log_title {
    text-align: left;
    padding: 5px 5px;
    font-size: 12px;
    background-color: #fff;
}
.tab_barList_video {
    display: inline-block;
}
.guanZu {
    display: block;
    height: 25px;
    width: 60px;
    line-height: 25px;
    border-radius: 12.5px;
    text-align: center;
    color: #fff;
    background: -webkit-linear-gradient(
        left,
        gold,
        pink
    ); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, gold, pink); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, gold, pink); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, gold, pink); /* 标准的语法 */
}
.statistical_log {
    background-color: #fff;
    font-size: 12px;
    padding: 5px 5px 0px 5px;
    margin-bottom: 5px;
}
.statistical_log > p {
    border: 1px solid rgb(238, 237, 237);
    background-color: rgb(238, 237, 237);
    height: 20px;
    width: 85px;
    border-radius: 10px;
    line-height: 17px;
    text-align: center;
    box-sizing: border-box;
}
.statistical_log > p > span {
    color: #f10215;
    font-size: 12px;
}
.statistical_log > div {
    margin-top: 5px;
    height: 25px;
    line-height: 25px;
}
.statistical_log > div > div:first-child {
    float: left;
}
.statistical_log > div > div:first-child > span {
    color: #ccc;
    font-size: 12px;
}
.statistical_log > div > div:last-child {
    height: 18px;
    text-align: center;
    float: right;
    line-height: 16px;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid rgb(238, 237, 237);
    box-sizing: border-box;
}
.statistical_log > div > div:last-child > span {
    font-size: 12px;
    height: 16px;
    padding: 0 0px 0 5px;
    display: inline-block;
    background-color: rgb(238, 237, 237);
    border-top-left-radius: 9px;
    border-bottom-left-radius: 9px;
}
.statistical_log > div > div:last-child > i {
    color: #f10215;
    font-size: 12px;
    display: inline-block;
    background-color: #fff;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 15px;
    padding: 0 5px 0 2px;
}
.comments_list {
    padding: 5px;
    background-color: #fff;
}
.comments_listS {
    padding: 8px 0px;
}
.comments_list > div > img {
    display: inline-block;
    width: 8.5%;
    height: 30px;
    border-radius: 15px;
    line-height: 50%;
    margin-right: 5px;
}
.comments_list > div > div {
    display: inline-block;
    width: 90%;
    font-size: 12px;
    vertical-align: top;
}
.comments_list > div > div > div:first-child {
    text-align: left;
}
.comments_list > div > div > div:first-child > div {
    text-align: right;
    float: right;
    font-size: 12px;
}
.comments_list > div > div > div:first-child > div > span > i {
    font-size: 12px;
}
.comments_list > div > div > p {
    text-align: left;
    padding: 8px 0px 0px 0px;
    font-size: 13px;
}
.comments_list > div > div > span {
    font-size: 12px;
    border: 1px solid rgb(238, 237, 237);
    background-color: rgb(238, 237, 237);
    box-sizing: border-box;
    border-radius: 15px;
    padding: 1px 5px 1px 8px;
    float: left;
    margin-top: 8px;
    box-sizing: border-box;
}
.comments_list > div > div > span > i {
    font-size: 12px;
}
.comments_list > div > div > div > span > i {
    font-size: 12px;
}
.comments_list > div > div > div > span:last-child {
    text-align: right;
    float: right;
    font-size: 12px;
}
.user_reply {
    height: 38px;
    width: 100%;
    position: fixed;
    bottom: 0px;
    padding: 7px 0px 0px 7px;
    border-top: 1px solid #ccc;
    background-color: #fff;
}
.user_reply > div:first-child {
    display: inline-block;
    width: 150px;
    height: 25px;
    border-radius: 12.5px;
    overflow: hidden;
    vertical-align: middle;
    line-height: 0px;
    border: 1px solid #ccc;
}
.user_reply > div:first-child > input {
    width: 100%;
    height: 100%;
    padding-left: 10px;
}
.user_reply > div:last-child {
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
}
.user_reply > div:last-child > span {
    display: inline-block;
    padding: 0 13px;
}
.user_reply > div:last-child i {
    font-size: 12px;
}
.img_tiezi {
    height: 30px;
    width: 100%;
    text-align: center;
    line-height: 30px;
}
.img_tiezi > span:nth-child(2) {
    float: left;
    margin-left: 50%;
    transform: translate(-98%);
}
.back {
    height: 30px;
    width: 30px;
    float: left;
    font-size: 20px;
}
.icon-share {
    float: right;
    height: 30px;
    width: 30px;
    font-size: 15px;
    padding-right: 5px;
}
</style>