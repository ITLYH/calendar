<template>
    <div id="login">
        <div class="login_box">
            <div class="login_content">
                <div class="login_content_top">
                    <span>登录</span>
                </div>
                <div class="login_content_center">
                    <label for="username">账户：
                        <input id="username" type="text" v-model="username" placeholder="请输入账户" autofocus>
                    </label>
                    <br>
                    <label for="psw">密码：
                        <input id="psw" type="password" v-model="password" placeholder="请输入密码">
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Field } from "mint-ui";
export default {
    name: "login",
    data() {
        return {
            username: '',
            password: '',
        };
    }
};
</script>


<style scoped>
.login_box {
    background: url("../../static/image/login-img.jpg") no-repeat;
    background-size: 100% 667px;
    height: 667px;
    width: 100%;
}
.login_content{
    height: 230px;
    width: 250px;
    position: relative;
    top: 35%;
    left: 50%;
    margin-left: -125px;
    overflow: hidden;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: rgba(0,0,0,0.2);
    box-shadow: 0px 0px 7px #cccccc;
    /* padding-top: 65px; */
}
.login_content .login_content_top{
    font-size: 25px;
    height: 40px;
    color: #fff;
    padding-top: 8px;
    background-color: #83AF9B;
    margin-bottom: 50px;
}
.login_content_center{
    height: 100px;
    line-height: 45px;
    background-color: rgba(0,0,0,0.2);
}
label{
    font-size: 20px;
    color: #fff;
    /* border-bottom: 1px solid red; */
}
#username{
    height: 20px;
    background-color: rgba(0,0,0,0.2);
}
#psw{
    height: 20px;
    background-color: rgba(0,0,0,0.2);
}
</style>