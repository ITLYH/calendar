<template>
  <div>
    <div ref="top_2">
      <van-tabs v-model="active">
        <van-tab title="关注">关注</van-tab>
        <van-tab title="推荐">
          <div class="tab_barList" v-for="(item,index) in videoList" :key="index">
            <div class="tab_barList_content">
              <div class="content_left">
                <img class="user_img" :src="item.userImg" alt />
                <div class="user_msg">
                  <span>{{item.user}}</span>
                  <br />
                  <span>{{item.describe}}</span>
                </div>
              </div>
              <div class="content_right">
                <van-dropdown-menu id="content_right_dropdown">
                  <van-dropdown-item title="" ref="item">
                    <van-switch-cell v-model="switch1" title="包邮" />
                    <van-switch-cell v-model="switch2" title="团购" />
                  </van-dropdown-item>
                </van-dropdown-menu>
                <!-- <label
                  @click="actionSheet"
                  id="icon-moreunfold"
                  class="mint-button-text iconfont icon-moreunfold"
                >&nbsp;&nbsp;</label>-->
              </div>
            </div>

            <div class="tab_barList_video_box">
              <p class="log_title">{{item.title}}</p>
              <com-video
                :urls="item.url"
                v-if="item.url.split('.')[item.url.split('.').length-1] !== 'jpg'"
              ></com-video>
              <img :src="item.url" alt height="215" width="auto" v-else />
            </div>

            <div class="tab_barList_content">
              <div class="content_footer">
                <div class="tab_content" @click="praiseCount($event)">
                  <i class="iconfont icon-good">&nbsp;{{item.praise}}</i>
                </div>
                <div class="tab_content" @click="treadCount($event)">
                  <i class="iconfont icon-bad">&nbsp;{{item.tread}}</i>
                </div>
                <div class="tab_content" @click="goComments(item)">
                  <i class="iconfont icon-comments"></i>
                  <span>&nbsp;{{item.comments}}万</span>&nbsp;&nbsp;
                </div>
                <div class="tab_content" @click="shareOrder($event)">
                  <i class="iconfont icon-skip"></i>
                  <span>&nbsp;{{item.share}}万</span>&nbsp;&nbsp;
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="视频">内容 3</van-tab>
        <van-tab title="图片">
          <ul>
            <li v-for="item in list" id="lazy_li">
              <div class="tab_barList_content">
                <div class="content_left">
                  <img class="user_img" src="../../../static/image/user_1.jpg" alt />
                  <div class="user_msg">
                    <span>X先生</span>
                    <br />
                    <span>知名咨询博主</span>
                  </div>
                </div>
                <div class="content_right">
                  <label
                    @click="actionSheet"
                    id="icon-moreunfold"
                    class="mint-button-text iconfont icon-moreunfold"
                  >&nbsp;&nbsp;</label>
                </div>
              </div>
              <img v-lazy.4="item.url" style="width:100%" />
              <mt-cell :title="item.title" :label="item.text" is-link :to="{ name: 'main' }"></mt-cell>
            </li>
          </ul>
        </van-tab>
        <van-tab title="资讯">内容 3</van-tab>
        <van-tab title="文字">内容 2</van-tab>
      </van-tabs>
    </div>

    <div id="toTop" @click="toTop" v-show="isShow">
      <span class="iconfont icon-less"></span>
    </div>
  </div>
</template>

<script>
import { NavBar, Tab, Tabs, DropdownMenu, DropdownItem } from "vant";
import appData from "../../common/appDataS";
import video from "../../components/video";
export default {
  name: "lifeInfo",
  data() {
    return {
      share: false,
      value: "",
      selected: "2",
      praise: 0,
      tread: 0,
      list: appData.lifeInfo.imgInfo,
      videoList: appData.lifeInfo.videoInfo,
      topText: "",
      allLoaded: false,
      isShow: false,
      active: 1,
      switch1: false,
      switch2: false
    };
  },
  components: {
    "com-video": video
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    actionSheet: function() {
      this.sheetVisible = true;
    },
    noInterest: function() {
      console.log("不感兴趣");
    },
    contentRepeat: function() {
      console.log("内容重复");
    },
    contentBad: function() {
      console.log("内容引起不适");
    },
    praiseCount: function(e) {
      var iconGood = e.currentTarget.firstElementChild;
      var iconGoodsss = e.currentTarget.nextElementSibling.firstElementChild;
      this.praise = iconGood.innerText;
      if (iconGoodsss.style.color == "red") return;
      if (iconGood.style.color == "red" && iconGoodsss.style.color !== "red") {
        this.praise--;
        iconGood.innerText = " " + this.praise;
        iconGood.style.color = "";
        iconGood.className = "iconfont icon-good";
      } else {
        this.praise++;
        iconGood.innerText = " " + this.praise;
        iconGood.className = "iconfont icon-good-filling";
        iconGood.style.color = "red";
      }
    },
    treadCount: function(e) {
      var iconBad = e.currentTarget.firstElementChild;
      var iconBadsss = e.currentTarget.previousElementSibling.firstElementChild;
      this.tread = iconBad.innerText;
      if (iconBadsss.style.color == "red") return;
      if (iconBad.style.color == "red" && iconBadsss.style.color !== "red") {
        this.tread--;
        iconBad.innerText = " " + this.tread;
        iconBad.style.color = "";
      } else {
        this.tread++;
        iconBad.innerText = " " + this.tread;
        iconBad.style.color = "red";
      }
    },
    shareOrder: function() {
      this.share = true;
    },
    goComments: function(m) {
      localStorage.setItem("item_detail", JSON.stringify(m));
      this.$router.push({ path: "/comments", query: { item: m } });
    },
    loadTop() {
      //下拉刷新
      setTimeout(() => {
        this.$refs.loadmore.onTopLoaded();
      }, 1500);
    },
    loadBottom() {
      //上拉加载更多
      setTimeout(() => {
        this.allLoaded = true;
        this.$refs.loadmore.onBottomLoaded();
      }, 1500);
    },
    toTop() {
      let h = this.$refs.top_2.offsetTop;
      if (!document.documentElement.scrollTop) {
        document.body.scrollTop = h;
      } else {
        document.documentElement.scrollTop = h;
      }
    },
    showIcon() {
      if (
        !!document.documentElement.scrollTop &&
        document.documentElement.scrollTop > 30
      ) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", this.showIcon);
  },
  watch: {}
};
</script>
<style>
</style>

<style scoped>
#content_right_dropdown {
  height: 40px;
  text-align: center;
  padding-right: 15px;
}
image[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.tab_barList {
  box-shadow: 0 0 2px 0;
  margin-top: 7px;
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
  background-color: #fff;
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
  font-size: 13px;
}
.content_footer i {
  font-size: 13px;
}
.tab_content {
  display: inline-block;
  flex: 0.25;
}
#nav_bar_box {
  margin-bottom: 35px;
}
#lazy_li {
  margin-bottom: 10px;
}
.log_title {
  text-align: left;
  padding: 5px 5px;
  font-size: 12px;
}
#toTop {
  position: fixed;
  bottom: 90px;
  right: 20px;
  width: 35px;
  height: 35px;
  border-radius: 20px;
  background-color: #fff;
  text-align: center;
  line-height: 35px;
  opacity: 0.8;
}
#toTop span {
  font-size: 25px;
}
</style>