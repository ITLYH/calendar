<template>
    <div id="tips">
    </div>
</template>
<script>
export default {
    data() {
        return {
        };
    },
    props: ["tipsData", "popupVisible"],
    watch: {
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