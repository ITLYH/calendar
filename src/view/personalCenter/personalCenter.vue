<template>
    <div id="personalCenter">
        <div class="top">
            <van-nav-bar fixed title="个人中心" id="top_bar">
                <van-icon name="setting" slot="right" size="20px" color="rgba(255, 100, 97, 0.7)" @click="set"/>
            </van-nav-bar>
        </div>
        <main class="main">
            <div class="main_user_img">
                <img class="user_img" src="../../../static/image/user_1.jpg" alt />
                <p class="user_name">{{this.$store.state.userName}}</p>
                <div class="user_sign">
                    <p>{{userInfos.userSign}}</p>
                </div>
                <div>
                    <div class="user_count">
                        获赞：
                        <span>{{Focus}}</span>
                    </div>
                    <div class="user_count">
                        粉丝：
                        <span>{{Fans}}</span>
                    </div>
                    <div class="user_count">
                        关注：
                        <span>{{Focus}}</span>
                    </div>
                    <div class="user_count">
                        积分：
                        <span>{{integral}}</span>
                    </div>
                </div>
            </div>
            <div class="userIntegral">
                <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" class="userIntegral_ul">
                    <li class="userIntegral_li">
                        <div class="userIntegral_top">
                            <p class="userIntegral_span">阳朔：国内不得不去的十大旅游城市之一</p>
                            <span class="tips">#旅游</span>
                        </div>
                        <div class="userIntegral_tip">
                            <img class="userIntegralImg" src="../../../static/image/yangshuo.jpg" alt />
                            <div class="userIntegral_div">
                                <p>阳朔县拥有漓江景区、《印象·刘三姐》、碧莲峰山水园、聚龙潭、蝴蝶泉、刘三姐水上公园、鉴山寺等营业景点15处。2018年11月，荣登“2018中国幸福百县榜”。</p>
                            </div>
                        </div>
                    </li>
                    <li class="userIntegral_li">
                        <div class="userIntegral_top">
                            <p class="userIntegral_span">阳朔：国内不得不去的十大旅游城市之一</p>
                            <span class="tips">#旅游</span>
                        </div>
                        <div class="userIntegral_tip">
                            <img class="userIntegralImg" src="../../../static/image/yangshuo.jpg" alt />
                            <div class="userIntegral_div">
                                <p>阳朔县拥有漓江景区、《印象·刘三姐》、碧莲峰山水园、聚龙潭、蝴蝶泉、刘三姐水上公园、鉴山寺等营业景点15处。2018年11月，荣登“2018中国幸福百县榜”。</p>
                            </div>
                        </div>
                    </li>
                    <li class="userIntegral_li">
                        <div class="userIntegral_top">
                            <p class="userIntegral_span">阳朔：国内不得不去的十大旅游城市之一</p>
                            <span class="tips">#旅游</span>
                        </div>
                        <div class="userIntegral_tip">
                            <img class="userIntegralImg" src="../../../static/image/yangshuo.jpg" alt />
                            <div class="userIntegral_div">
                                <p>阳朔县拥有漓江景区、《印象·刘三姐》、碧莲峰山水园、聚龙潭、蝴蝶泉、刘三姐水上公园、鉴山寺等营业景点15处。2018年11月，荣登“2018中国幸福百县榜”。</p>
                            </div>
                        </div>
                    </li>
                    <li class="userIntegral_li">
                        <div class="userIntegral_top">
                            <p class="userIntegral_span">阳朔：国内不得不去的十大旅游城市之一</p>
                            <span class="tips">#旅游</span>
                        </div>
                        <div class="userIntegral_tip">
                            <img class="userIntegralImg" src="../../../static/image/yangshuo.jpg" alt />
                            <div class="userIntegral_div">
                                <p>阳朔县拥有漓江景区、《印象·刘三姐》、碧莲峰山水园、聚龙潭、蝴蝶泉、刘三姐水上公园、鉴山寺等营业景点15处。2018年11月，荣登“2018中国幸福百县榜”。</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </main>
        <footer class="footer"></footer>
    </div>
</template>
<script>
import { NavBar,Icon  } from 'vant';
export default {
    name: "personalCenter",
    data() {
        return {
            Focus: "105",
            Fans: "10万",
            integral: "90万",
            userIntegralImg: "../../../static/image/yangshuo.jpg",
            list: [],
            userInfos: null,
            loading: false
        };
    },
    methods: {
        loadMore() {
            this.loading = true;
            setTimeout(() => {
                let last = this.list[this.list.length - 1];
                for (let i = 1; i <= 10; i++) {
                    this.list.push(last + i);
                }
                this.loading = false;
            }, 2500);
        },
        set(){
            this.$router.push({ path: '/userDetailInfo', query: {  }})
        }
    },
    created(){
        this.userInfos = JSON.parse(localStorage.getItem('userInfo'));
    }
};
</script>

<style scoped>
#top_bar{
        background: -webkit-linear-gradient(
        left,
        gold,
        pink
    ); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, gold, pink); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, gold, pink); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, gold, pink); /* 标准的语法 */
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
.main {
}
.main_user_img {
    height: 150px;
    width: 100%;
    padding-top: 75px;
    line-height: 20px;
    background: -webkit-linear-gradient(
        left,
        gold,
        pink
    ); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, gold, pink); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, gold, pink); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, gold, pink); /* 标准的语法 */
}
.user_img {
    height: 75px;
    width: 75px;
    border-radius: 37.5px;
    box-shadow: 1px 2px 26px #a79118;
}
.user_name {
    color: #fff;
    font-size: 16px;
}
.user_count {
    display: inline-block;
    width: 25%;
    color: #fff;
    font-size: 12px;
}
.userIntegral {
    background-color: #fff;
}
.userIntegral_ul {
    margin-top: 5px;
}
.userIntegral_li {
    height: 80px;
    text-align: left;
    padding: 0px 10px 8px 10px;
    box-shadow: 0px 0px 7px #cccccc;
    margin-bottom: 7px;
}
.userIntegral_tip {
    display: flex;
}
.userIntegralImg {
    flex: 0.25;
    height: 50px;
    width: auto;
}
.userIntegral_span {
    padding: 5px 0px;
    flex: 0.8;
}
.userIntegral_div {
    height: 50px;
    padding: 0px 5px 3px 5px;
    flex: 0.75;
    display: inline-block;
    font-size: 12px;
    color: #999;
}
.userIntegral_top {
    display: flex;
    height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.userIntegral_div > p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; /*截取第三行*/
    overflow: hidden;
}
.tips {
    flex: 0.2;
    text-align: center;
    height: 20px;
    border: 0.5px solid #f10215;
    display: inline-block;
    padding: 0px 3px;
    color: #f10215;
    line-height: 20px;
    margin: 5px 0px 0px 10px;
}
.user_sign{
    color: #fff;
    font-size: 14px;
}
</style>
