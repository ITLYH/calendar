/*
 * create 2019-04-25 by liyh 
 */

const date = {
    year: "2019",
    mouth: "12",
    day: ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"]
}
let aa;
let bb = [];
let cc = null;

var getYear = new Date().getFullYear();     // 获取年
var getMouth = new Date().getMonth() + 1;     // 获取月
var getDay = new Date().getDate();          // 获取日
var getWeek = new Date().getDay();          // 获取今天是周几

const dateDay = date.day;                   // 获取所有月份的天数
const BBady = document.getElementById('everyDay');
const setMouth = document.getElementById("mouth");
cc = getMouth;

var DateDay = function () { }

// 数据初始化
DateDay.init = () => {
    setMouth.innerText = cc + "月";
    DateDay.day(cc);
}

// 获取当前显示的月份的天数
DateDay.day = (v) => {

    for (let i = 0; i < dateDay.length; i++) {  // 拿到各个月份的总天数
        let xx = v - 1;
        if (i == xx) {  // 判断是否是当前月份
            aa = parseInt(dateDay[i]);
            for (let k = 1; k <= aa; k++) {  // 根据总天数，分解获得一个月有多少天
                var dayDiv;
                if (k == getDay && v == cc) {
                    dayDiv = "<div class='day-div today'>" + k + "</div>";
                } else {
                    dayDiv = "<div class='day-div'>" + k + "</div>";
                }
                BBady.innerHTML += dayDiv;
            }
        }
    }

}

// 根据月份改变天数
DateDay.setMouthChange = (cc) => {
    setMouth.innerText = cc + "月";
    BBady.innerHTML = "";
    DateDay.day(cc);
}

// 上个月
DateDay.beforeMouth = () => {
    if (cc < 13 && cc > 1) {
        cc--;
        DateDay.setMouthChange(cc);
    } else if (cc == 1) {
        cc = 12
        DateDay.setMouthChange(cc);
    } else {
        return;
    }
}

// 下个月
DateDay.afterMouth = () => {
    if (cc < 12 && cc > 0) {
        cc++;
        DateDay.setMouthChange(cc);
    } else if (cc == 12) {
        cc = 1
        DateDay.setMouthChange(cc);
    } else {
        return;
    }
}

// 页面渲染
window.onload = function () {
    DateDay.init();
}