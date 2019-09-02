<template>
    <div id="video_tmp">
        <div>
            <Xgplayer :config="config" @player="Player = $event" />
        </div>
    </div>
</template>
<script>
import Xgplayer from 'xgplayer-vue';

export default {
    data() {
        return {
            config: {
                id: 'vs',
                // fluid: true,
                width: 'auto',
                height: '213px',
                pip: true,
                lang: 'zh-cn',
                videoInit: true,
                download: true, //设置download控件显示
                // playbackRate: [0.7, 1.0, 1.5, 2.0], //播放速度
                autoplay: false, //如果true,浏览器准备好时开始回放。
                url: require('../../static/video/video_1.mp4'),
                // poster: require("../../static/video/video_1_gif.gif"), //你的封面地址
            },
            Player: null
        };
    },
    components: {
        Xgplayer
    },
    props: ["src"],
    watch: {

    },
    methods: {
    },
    created() {
    },
    mounted() {

    }
};
</script>

<style scoped>
#video_tmp {
    background-color: #fff;
}
</style>