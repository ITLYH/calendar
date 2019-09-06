<template>
    <div id="userDetailInfo">
        <div>
            <div class="top">
                <van-nav-bar fixed title="设置" id="top_bar" left-arrow @click-left="onClickLeft">
                    <!-- <van-icon name="ellipsis" slot="right" size="25px" color="rgba(255, 100, 97, 0.7)" /> -->
                </van-nav-bar>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "userDetailInfo",
    data() {
        return {
            userInfo: null,
            active:0, 
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        }
    },
    created(){
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
</style>