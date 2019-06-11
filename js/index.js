/*
 * create 2019-04-25 by liyh 
 */

let aa;
let bb = [];
let cc = null;

var getYear = new Date().getFullYear();     // 获取年
var getMouth = new Date().getMonth() + 1;     // 获取月
var getDay = new Date().getDate();          // 获取日
var getWeek = new Date().getDay();          // 获取今天是周几

const BBady = document.getElementById('everyDay');
const setMouth = document.getElementById("mouth");
const setYear = document.getElementById("year");
const getWeekLength = document.getElementsByClassName("week");
console.log(getWeekLength);
cc = getMouth;

var DateDay = function () { }

// 获取每年选择的月的天数
DateDay.mGetDate = (year, month)=> {
    var d = new Date(year, month, 0);
    return d.getDate();
}

// 获取当前月份天数
DateDay.getCountDays = () => {
    var daysArr = [];
    var curDate = new Date();
    var curMonth = curDate.getMonth();
    curDate.setMonth(curMonth + 1);
    curDate.setDate(0);
    var days = curDate.getDate();
    // for (var i = 1; !(i > days); i++) {
    //     daysArr.push(i);
    // }
    return days;
}

// 获取当前显示的月份的天数
DateDay.day = (CountDays,cc) => {
    if(!CountDays){
        var CountDays = DateDay.getCountDays();  // 总天数
    }
    for (let k = 1; k <= CountDays; k++) {  
        var dayDiv;
        if (k == getDay && cc == getMouth) {
            dayDiv = "<div class='day-div today'>" + k + "</div>";
        } else {
            dayDiv = "<div class='day-div'>" + k + "</div>";
        }
        BBady.innerHTML += dayDiv;
    }
}

// 根据月份改变天数
DateDay.setMouthChange = (cc) => {
    setYear.innerText = getYear + " 年";
    setMouth.innerText = cc + " 月";
    BBady.innerHTML = "";
    var newDayCount = DateDay.mGetDate(getYear,cc)
    DateDay.day(newDayCount,cc);
}

// 上个月
DateDay.beforeMouth = () => {
    if (cc < 13 && cc > 1) {
        cc--;
        DateDay.setMouthChange(cc);
    } else if (cc == 1) {
        cc = 12
        getYear--;
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
        cc = 1;
        getYear++;
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

window.onload = function () {
    setYear.innerText = getYear + " 年";
    setMouth.innerText = cc + " 月";
    DateDay.day(null,cc);
}