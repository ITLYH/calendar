<template>
    <div>
        <div class="search">
            <mt-search v-model="value" style="background:blue;" cancel-text="取消" placeholder="搜索"></mt-search>
        </div>
        <div class="swiper_bar">
            <mt-swipe :auto="3000">
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
    </div>
</template>
<script>
import { Search, Swipe, SwipeItem } from "mint-ui";

export default {
    name: "main",
    data() {
        const that = this;
        return {
            value: ""
        };
    }
};
</script>
<style scoped>
.swiper_bar {
    height: 200px;
}
.swiper {
    width: 100%;
}
.search {
    height: 52px;
}
.mint-search {
    height: 100%;
}
</style>


