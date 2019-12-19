<template>
    <div id="mains">
        <div class="search">
            <van-search id="search_box" v-model="value" background="linear-gradient(to right, gold, pink)" placeholder="请输入搜索关键词" show-action shape="round" :label="city" @search="onSearch">
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
        <div class="nav_box_s">
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
        </div>
        <!-- 导航栏end -->

        <div class="cell_hot">
            <van-cell value="更多" id="top_bar" is-link icon="shop-o">
                <!-- 使用 title 插槽来自定义标题 -->
                <template slot="title">
                    <span class="custom-title">热门信息</span>
                </template>
            </van-cell>
        </div>

        <div>
            <van-swipe :autoplay="4000" :show-indicators="false">

                <van-swipe-item>
                    <van-row class="hot_row" v-for="(item,index) in hotInfos[0].slides1" :key="index" gutter="20">
                        <van-col span="8">
                            <van-image width="5rem" height="7rem" fit="scale-down" :src="item.goodsImg" />
                            <div class="text">{{item.goodsMsg}}</div>
                        </van-col>
                    </van-row>
                </van-swipe-item>

                <van-swipe-item>
                    <van-row class="hot_row" v-for="(item,index) in hotInfos[0].slides2" :key="index" gutter="20">
                        <van-col span="8">
                            <van-image width="5rem" height="7rem" fit="scale-down" :src="item.goodsImg" />
                            <div class="text">123</div>
                        </van-col>
                    </van-row>
                </van-swipe-item>

            </van-swipe>
            <van-swipe :autoplay="5000" :show-indicators="false">

                <van-swipe-item>
                    <van-row class="hot_row" v-for="(item,index) in hotInfos[1].slides1" :key="index" gutter="20">
                        <van-col span="8">
                            <van-image width="5rem" height="7rem" fit="scale-down" :src="item.goodsImg" />
                            <div class="text">123</div>
                        </van-col>
                    </van-row>
                </van-swipe-item>

                <van-swipe-item>
                    <van-row class="hot_row" v-for="(item,index) in hotInfos[1].slides2" :key="index" gutter="20">
                        <van-col span="8">
                            <van-image width="5rem" height="7rem" fit="scale-down" :src="item.goodsImg" />
                            <div class="text">123</div>
                        </van-col>
                    </van-row>
                </van-swipe-item>

            </van-swipe>
        </div>

        <div class="cell_hot">
            <van-cell value="更多" id="top_bar" is-link icon="shop-collect-o">
                <!-- 使用 title 插槽来自定义标题 -->
                <template slot="title">
                    <span class="custom-title">每日逛</span>
                </template>
            </van-cell>
        </div>

        <div>
            <van-grid :column-num="4">
                <van-grid-item text="文字" v-for="(item,index) in daliyShops[0].grid1" :key="index">
                    <van-image :src="item.goodsImg" />
                </van-grid-item>
            </van-grid>
            <van-grid :column-num="4">
                <van-grid-item text="文字" v-for="(item,index) in daliyShops[0].grid2" :key="index">
                    <van-image :src="item.goodsImg" />
                </van-grid-item>
            </van-grid>
        </div>

        <div class="cell_hot">
            <van-cell value="更多" id="top_bar" is-link icon="goods-collect-o">
                <!-- 使用 title 插槽来自定义标题 -->
                <template slot="title">
                    <span class="custom-title">个性推荐</span>
                </template>
            </van-cell>
        </div>

        <div>
            <van-grid :column-num="4">
                <van-grid-item text="文字" v-for="(item,index) in daliyShops[1].grid1" :key="index">
                    <van-image :src="item.goodsImg" />
                </van-grid-item>
            </van-grid>
            <van-grid :column-num="4">
                <van-grid-item text="文字" v-for="(item,index) in daliyShops[1].grid2" :key="index">
                    <van-image :src="item.goodsImg" />
                </van-grid-item>
            </van-grid>
        </div>

        <div>
            <img id="qr_img" src="../../../static/image/qr_01.png" alt="">
        </div>

        <!-- 地址选择start -->
        <van-action-sheet v-model="showss" title="地址选择" :round="true">
            <van-area :area-list="areaLists" :value="addrCode" @confirm="confirm" />
        </van-action-sheet>
        <!-- 地址选择end -->
    </div>
</template>
<script>
import {
    Search,
    Swipe,
    SwipeItem,
    NavBar,
    Tab,
    Tabs,
    Area,
    Popup,
    ActionSheet,
    Image,
    Grid, GridItem
} from "vant";
import share from "../../components/share";
import appData from "../../common/appDataS";
import areaList from "../../common/area";

export default {
    components: {},
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
            areaLists: areaList,
            hotInfos: appData.main.hotInfo,
            daliyShops: appData.main.dailyShop,
            showss: false,
            addrCode: "440105",
            province: "",
            city: "地址",
            district: ""
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
        onSearch() {
            console.log("搜索");
        },
        confirm(e) {
            this.province = e[0].name;
            this.city = e[1].name;
            this.district = e[2].name;
            this.showss = false;
        }
    },
    created() {
    },
    mounted() {
        const that = this;
        let label = document.getElementsByClassName("van-search__label")[0];
        label.addEventListener("click", function () {
            that.showss ? (that.showss = false) : (that.showss = true);
        });
    },
    watch: {
        showss: function (n, o) { }
    }
};
</script>
<style scoped>
#qr_img{
    height: 100px;
    width: 100px;
    display: block;
    padding: 50px;
}
#mains {
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
    background: -webkit-linear-gradient(
        left,
        gold,
        pink
    ); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, gold, pink); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, gold, pink); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, gold, pink); /* 标准的语法 */
}
.mint-search {
    height: 100%;
}
#nav_box {
    height: 155px;
    padding: 5px;
    background: url("../../../static/image/nav-bg4.jpg") no-repeat left -265px;
    background-color: gold;
    background-size: 100% auto;
    border-bottom-right-radius: 35%;
    border-bottom-left-radius: 35%;
}
.nav_box_s {
    background: -webkit-linear-gradient(
        left,
        gold,
        pink
    ); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, gold, pink); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, gold, pink); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, gold, pink); /* 标准的语法 */
}
#top_bar {
    background: -webkit-linear-gradient(
        left,
        gold,
        pink
    ); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, gold, pink); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, gold, pink); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, gold, pink); /* 标准的语法 */
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
.van-row {
    padding: 0;
}
.van-col {
    margin-bottom: 20px;
}
.text {
    margin-top: -10px;
    color: #000;
    font-size: 14px;
    text-align: center;
    width: 80px;
}
.hot_row {
    display: inline-block;
    text-align: center;
    padding: 0 5px;
}
.custom-title {
    float: left;
}
</style>


