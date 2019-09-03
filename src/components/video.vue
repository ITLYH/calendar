<template>
    <div id="video_tmp">
        <div id="box">
            <div class="top_back" v-show="flag">
                <span class="back iconfont icon-back" @click="$router.go(-1)"></span>
            </div>
            <video width="100%" height="215" id="tab_barList_video" x5-playsinline="" playsinline="" webkit-playsinline="" class="tab_barList_video" :src="urls" poster preload controls></video>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            isShow: false,
        };
    },
    props: ["urls", "flag"],
    watch: {
    },
    methods: {

    },
    created() {

    },
    mounted() {
        let v = document.getElementById('tab_barList_video');
        v.addEventListener('play', function () {//播放开始执行的函数
            console.log(v.controls);
            if (v.controls == 'false') {
                console.log('1');
                this.flag = false;
            } else {
                console.log('2');
                this.flag = true;
            }
        });
        v.addEventListener('pause', function () {//播放开始执行的函数
            console.log('pause');
            this.flag = true;
        });
    },
    watch: {
    }
};
</script>

<style scoped>
#video_tmp {
    background-color: #fff;
}
#box {
    position: relative;
}
.top_back {
    width: 100%;
    height: 30px;
    position: absolute;
    /* background: transparent; */
    background: #000;
    /* background-image: linear-gradient(to bottom, #676866, transparent); */
    line-height: 30px;
    text-align: left;
    z-index: 999;
}
.back {
    color: #fff;
    font-size: 25px;
    opacity: 1;
}
</style>