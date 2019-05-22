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
const setYear = document.getElementById("year");
const getWeekLength = document.getElementsByClassName("week");
console.log(getWeekLength);
cc = getMouth;

var DateDay = function () { }

// 数据初始化
DateDay.init = () => {
    setYear.innerText = getYear + " 年";
    setMouth.innerText = cc + " 月";
    DateDay.day(cc);
}

// 判断每月的第一天是周几，再循环创建天的时候根据 周几 进行文本插入，再在插入之前放入前一个的最后几天 填充在插入之前；

// 获取当前显示的月份的天数
DateDay.day = (cc) => {

    for (let i = 0; i < dateDay.length; i++) {  // 拿到各个月份的总天数
        let xx = cc - 1;
        if (i == xx) {  // 判断是否是当前月份
            aa = parseInt(dateDay[i]);
            for (let k = 1; k <= aa; k++) {  // 根据总天数，分解获得一个月有多少天
                var dayDiv;
                if (k == getDay && cc == getMouth) {
                    dayDiv = "<div class='day-div today'>" + k + "</div>";
                } else {
                    dayDiv = "<div class='day-div'>" + k + "</div>";
                }
                BBady.innerHTML += dayDiv;
            }
        }
    }

}

// 判断周几
// DateDay.isWeek = () => {
//     for (var l = 1; l <= getWeek; l++) {
//         // 判断每个月的第一天是周几，就在循环前面加入几天
//         for (let j = 0; j < dateDay.length; j++) {  // 各个月份的总天数
//             let xx = cc - 1;
//             if (xx == j) {  // 是当前月

//             }
//             dayDiv = "<div class='day-div'>" + k + "</div>";
//             BBady.innerHTML += dayDiv;
//         }
//     }
//     this.day()
// }

// 根据月份改变天数
DateDay.setMouthChange = (cc) => {
    setMouth.innerText = cc + " 月";
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

$(window).on('scroll', function () {
    let pageHeight = $('body').height(),
        scrollTop = $(window).scrollTop(),
        winHeight = $(window).height(),
        thresold = pageHeight - scrollTop - winHeight;
    if (thresold > -50 && thresold <= 20) {
        console.log('end');
    }
});

// 页面渲染
window.onload = function () {
    DateDay.init();
}