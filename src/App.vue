<template>
  <div id="c">
    <router-view>
      <login-view></login-view>
    </router-view>
  </div>
</template>

<script>
import login from "./view/login";
export default {
  data() {
    return {};
  },
  components: {
    "login-view": login
  },
  watch: {
    $route(to, from) {
      // if (to.path === '/main' || to.path === '/lifeInfo') {
      //     this.$store.commit("isFlag", false);
      // } else {
      //     this.$store.commit("isFlag", true);
      // }
      const that = this;
      if (to.path === "/login") {
        var token = localStorage.getItem("token");
        if (!token) {
          that.$router.push({ path: "/main" });
        }
      }
    }
  }
};
</script>

<style>
@import "../static/css/common.css";
@import "../static/font/iconfont.css";
#c {
  font-family: "微软雅黑", "Microsoft YaHei", "Avenir", Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  overflow: hidden;
}
</style>
