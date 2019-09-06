<template>
    <div id="userPage">
        <div>
            <div class="top">
                <van-nav-bar fixed :title="userInfo.comments_user" id="top_bar" left-arrow @click-left="onClickLeft">
                    <van-icon name="ellipsis" slot="right" size="25px" color="rgba(255, 100, 97, 0.7)" @click="set" />
                </van-nav-bar>
            </div>
            <div class="center_box">
                <van-image round width="7rem" height="7rem" :src="userInfo.comments_user_img">
                    <template v-slot:loading>
                        <van-loading type="spinner" size="20" />
                    </template>
                </van-image>
                <div>
                    <ul>
                        <li>
                            <p>10万</p>
                            <p>积分</p>
                        </li>
                        <li>
                            <p>5000</p>
                            <p>粉丝</p>
                        </li>
                        <li>
                            <p>105</p>
                            <p>关注</p>
                        </li>
                        <li>
                            <p>50万</p>
                            <p>获赞</p>
                        </li>
                    </ul>
                    <div class="isGuanZhu">
                        <van-button plain hairline size="large" round type="danger">关注</van-button>
                    </div>
                </div>
            </div>
            <div class="user_signature">
                <p>2222222</p>
                <button>马尔代夫</button>
            </div>
            <div>
                <van-tabs v-model="active" sticky>
                    <van-tab title="全部">
                        内容1
                    </van-tab>
                    <van-tab title="帖子">
                        内容2
                    </van-tab>
                    <van-tab title="回复">
                        内容3
                    </van-tab>
                    <van-tab title="插眼">
                        内容4
                    </van-tab>
                </van-tabs>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "userPage",
    data() {
        return {
            userInfo: null,
            active:0, 
        }
    },
    methods: {
        set() {

        },
        onClickLeft() {
            this.$router.go(-1)
        }
    },
    created(){
        this.userInfo = JSON.parse(this.$route.query.userinfo);
    }
}
</script>

<style scoped>
#top_bar {
    background: -webkit-linear-gradient(
        left,
        gold,
        pink
    ); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, gold, pink); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, gold, pink); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, gold, pink); /* 标准的语法 */
    color: #fff;
}
#personalCenter {
    background-color: #f2f2f2;
}
.top {
    text-align: center;
    font-size: 20px;
    color: #fff;
    line-height: 50px;
    border-bottom: 1px solid #fff;
    box-sizing: border-box;
    background-color: #ffcc00;
}
.center_box {
    height: 125px;
    width: 100%;
    padding-top: 50px;
    background-color: #fff;
}
.center_box > div {
    display: inline-block;
    width: 65%;
    vertical-align: middle;
    margin-left: 5px;
}
.center_box > div > ul {
    margin-bottom: 7px;
    padding-top: 10px;
}
.center_box > div > ul > li {
    display: inline-block;
    text-align: center;
    line-height: 25px;
    height: 100%;
    width: 25%;
    font-size: 13px;
}
.isGuanZhu {
    padding: 10px 15px;
}
.van-button--large {
    height: 35px;
    line-height: 35px;
}
.user_signature {
    width: 100%;
    background-color: #fff;
    padding: 5px 10px;
    text-align: left;
    line-height: 20px;
    border-bottom: 1px solid #f2f2f2;
}
.user_signature > button {
    height: 20px;
    background-color: #f3f3f5;
    font-size: 12px;
    border: 0.5px solid #f3f3f9;
    border-radius: 10px;
    padding: 0 3px;
}
</style>