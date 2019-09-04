<template>
    <div id="commentDetail">
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
                    <span @click="sheetVisible=true">{{item.comments_reply}}回复<i class="iconfont icon-more"></i></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import appData from "../common/appDataS";
export default {
    data() {
        return {
            commentsList: appData.comments.comments_list,
        };
    },
    props: [],
    methods: {
    },
    created() {
    },
    mounted() {
    },
    watch: {
    },
    computed: {
    }
};
</script>

<style scoped>
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
</style>