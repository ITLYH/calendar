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
                // width: 'auto',
                height: '213px',
                volume: 0.3,
                width: window.innerWidth,
                // pip: true,   // 画中画
                lang: 'zh-cn',
                videoInit: true, // 是否显示初始帧数
                // download: true, //设置download控件显示
                // playbackRate: [0.7, 1.0, 1.5, 2.0], //播放速度
                autoplay: false, //如果true,浏览器准备好时开始回放。
                url: require('../../static/video/video_1.mp4'),
                // poster: require("../../static/video/video_1_gif.gif"), //你的封面地址
                // 'x5-video-player-fullscreen': false, // 微信的全屏播放
                "playsinline": true,
                "whitelist": [
                    ""
                ]
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