<template>
    <div id="login">
        <div class="login_box">
            <div class="login_content">
                <div class="login_content_top">
                    <span>登录</span>
                </div>
                <div class="login_content_center">
                    <label for="username">
                        账户：
                        <input
                            id="username"
                            type="text"
                            v-model="username"
                            placeholder="请输入账户"
                            autofocus
                        />
                    </label>
                    <br />
                    <label for="psw">
                        密码：
                        <input id="psw" type="password" v-model="password" placeholder="请输入密码" />
                    </label>
                </div>
                <div>
                    <mt-button
                        type="default"
                        id="login_in"
                        @click="loginIn()"
                        @click.native="popupVisible2 = true"
                    >登录</mt-button>
                    <mt-button type="default" id="registered">注册</mt-button>
                </div>
            </div>
        </div>
        <!-- 提示组件 -->
        <show-tips :tipsData="tipsData" :popupVisible="popupVisible"></show-tips>
    </div>
</template>
<script>
import { Field, Button, Popup } from "mint-ui";
import tips from "../components/showTips";
export default {
    name: "login",
    data() {
        return {
            username: "",
            password: "",
            saveUsername: ["admin", "username"],
            savePsw: "111111",
            popupVisible: false,
            tipsData: ""
        };
    },
    components: {
        "show-tips": tips
    },
    created() {
        document.body.style.paddingBottom = "0px";
    },
    computed: {
        keyDown(e) {
            let ev = window.event || e;
            if (ev.keyCode == 13) {
                //你要执行的方法
                this.loginIn();
            }
        }
    },
    methods: {
        // 登录
        loginIn() {
            if (
                this.saveUsername.indexOf(this.username) != -1 &&
                this.savePsw == this.password
            ) {
                const token = this.randomCoding();

                localStorage.setItem("username", this.username);
                localStorage.setItem("token", token);
                
                this.$store.commit("loginType", true);
                this.$store.commit("updateUserInfo", {
                    username: this.username
                });

                this.$router.push({ path: "/nav" });
            } else {
                this.username = "";
                this.password = "";
                this.popupVisible = true;
                this.tipsData = "用户名或密码错误，请重新输入。";
            }
        },
        // 随机字母
        randomCoding() {
            var result = [];
            var n = 30;
            for (var i = 0; i < n; i++) {
                var ranNum = Math.ceil(Math.random() * 25);
                result.push(String.fromCharCode(65 + ranNum));
            }
            return result.join("");
        }
    },
    watch: {
        popupVisible(val) {
            if (val) {
                setTimeout(() => {
                    this.popupVisible = false;
                }, 2000);
            }
        }
    }
};
</script>


<style scoped>
.login_box {
    background: url("../../static/image/login-img.jpg") no-repeat;
    background-size: 100% 100%;
    height: 667px;
    width: 100%;
}
.login_content {
    height: 230px;
    width: 250px;
    position: relative;
    top: 35%;
    left: 50%;
    margin-left: -125px;
    text-align: center;
    overflow: hidden;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 7px #cccccc;
    /* padding-top: 65px; */
}
.login_content .login_content_top {
    font-size: 25px;
    height: 40px;
    color: #fff;
    padding-top: 8px;
    background-color: #58b5c0;
    margin-bottom: 25px;
}
.login_content_center {
    height: 100px;
    line-height: 45px;
    margin-bottom: 10px;
    /* background-color: rgba(0,0,0,0.2); */
}
label {
    font-size: 17px;
    color: #fff;
    border-bottom: 1px solid #58b5c0;
}
#username {
    height: 25px;
    background-color: rgba(0, 0, 0, 0);
    color: #fff;
}
#psw {
    height: 25px;
    background-color: rgba(0, 0, 0, 0);
    color: #fff;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
    color: #58b5c0;
}
#login_in {
    border: 0;
    width: 70px;
    height: 25px;
    background-color: #58b5c0;
    color: #fff;
    font-size: 13px;
    border-radius: 5px;
    margin-right: 20px;
}
#registered {
    border: 0;
    width: 70px;
    height: 25px;
    background-color: #58b5c0;
    color: rgb(243, 247, 9);
    font-size: 13px;
    border-radius: 5px;
}
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