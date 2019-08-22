<template>
    <div id="tips">
        <mt-popup
            v-model="popupVisible"
            popup-transition="popup-fade"
            :modal="false"
            position="top"
            id="popup_login"
        >{{tipsData}}</mt-popup>
    </div>
</template>
<script>
import { Popup } from "mint-ui";
export default {
    data() {
        return {
        };
    },
    props: ["tipsData", "popupVisible"],
    watch: {
        popupVisible(val) {
            if (val) {
                setTimeout(() => {
                    this.popupVisible = false;
                }, 2000);
            }
        }
    },
    methods: {
    }
};
</script>


<style scoped>
#popup_login {
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    width: 80%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 8px;
    backface-visibility: hidden;
}
</style>