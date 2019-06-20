<template>
    <div>
        <div class="header">
            <span id="year" v-html="year + '年'"></span>
        </div>

        <div id="father">
            <h3 class="mouth" id="mouth" v-html="mouth+' 月'"></h3>
            <button id="btnLeft" class="btn" @click="beforeMouth">上一月</button>
            <button id="btnRight" class="btn" @click="afterMouth">下一月</button>
            <div class="weekDay">
                <span class="week Sun">日</span>
                <span class="week">一</span>
                <span class="week">二</span>
                <span class="week">三</span>
                <span class="week">四</span>
                <span class="week">五</span>
                <span class="week Sat">六</span>
            </div>
            <div id="everyDay" v-html="innerTxt"></div>
        </div>
    </div>
</template>

<script>
let getYear = new Date().getFullYear();     // 获取年
let getMouth = new Date().getMonth() + 1;   // 获取月
let getDay = new Date().getDate();          // 获取日
let getWeek = new Date().getDay();          // 获取今天是周几

export default {
    name: "calender",
    data() {
        const that = this;
        return {
            year: getYear,
            mouth: getMouth,
            cc: getMouth,
            innerTxt: "",
        };
    },
    methods: {

        // 获取每年选择的月的天数
        mGetDate: (year, month) => {
            var d = new Date(year, month, 0);
            return d.getDate();
        },

        // 获取当前月份天数
        getCountDays: () => {
            var curDate = new Date();
            var curMonth = curDate.getMonth();
            curDate.setMonth(curMonth + 1);
            curDate.setDate(0);
            var dayCount = curDate.getDate();
            return dayCount;
        },

        // 获取当前显示的月份的天数
        days: function(CountDays,cc,toYear) {
            if (!CountDays) {
                CountDays = this.getCountDays(); 
            }
            let dayDiv; 
            for (let k = 1; k <= CountDays; k++) {  
                if (k == getDay && cc == getMouth && toYear == getYear) { 
                    dayDiv = "<div class='day-div today'>" + k + "</div>";
                } else {
                    dayDiv = "<div class='day-div'>" + k + "</div>";
                }
                this.innerTxt += dayDiv;
            }
        },

        // 根据月份改变天数
        setMouthChange: function(cc) {
            this.innerTxt = "";
            var newDayCount = this.mGetDate(getYear, cc);
            this.days(newDayCount, cc,this.year);
        },

        // 上个月
        beforeMouth:function() {
            if (this.mouth < 13 && this.mouth > 1) {
                this.mouth--;
                this.setMouthChange(this.mouth);
            } else if (this.mouth == 1) {
                this.mouth = 12;
                this.year--;
                this.setMouthChange(this.mouth);
            } else {
                return;
            }
        },

        // 下个月
        afterMouth:function() {
            if (this.mouth < 12 && this.mouth > 0) {
                this.mouth++;
                this.setMouthChange(this.mouth);
            } else if (this.mouth == 12) {
                this.mouth = 1;
                this.year++;
                this.setMouthChange(this.mouth);
            } else {
                return;
            }
        }
    },
    created(){
        this.days(null,this.cc,getYear);
    },
    mounted(){
        
    }
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
}
h3 {
    padding: 0;
    margin: 0px;
}

body {
    overflow: hidden;
    /* height: 2000px; */
}

.header {
    width: 100%;
    height: 50px;
    background-color: rgb(250, 252, 250);
    text-align: center;
    line-height: 50px;
    box-shadow: 0px -1px 12px #a1a09a;
}

.header > span {
    font-size: 22px;
}

#father {
    text-align: center;
    width: 345px;
    padding: 15px;
    position: relative;
    margin: 0 auto;
}

.mouth {
    text-align: center;
    line-height: 30px;
    font-size: 20px;
    margin: 8px 0px 42px 0px;
    /* position: absolute; */
    /* top: 10px; */
}

#everyDay {
    /* width: 333px; */
    height: 300px;
    background-color: rgb(248, 250, 248);
    /* border: 1px solid #666; */
    box-shadow: 0px 2px 7px #bbb9b0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
    padding: 12px 5px 5px 7px;
    text-align: left;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
}

#btnLeft {
    position: absolute;
    top: 26px;
    left: 25px;
}

#btnRight {
    position: absolute;
    top: 26px;
    right: 25px;
}

.btn {
    width: 70px;
    height: 28px;
    border: 0px;
    background-color: gold;
    border-radius: 15px;
    outline: 0;
    line-height: 25px;
    text-align: center;
    box-shadow: 1px 0px 26px #e0dfd5;
}

.weekDay {
    width: 100%;
    height: 30px;
    background-color: gold;
    display: flex;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: 0px 3px 7px #bbb9b0;
    margin-top: 0px;
}

.week {
    font-size: 16px;
    flex: auto;
    line-height: 30px;
}
.Sun {
    color: #f10215;
}
.Sat {
    color: #f10215;
}

.day-div {
    width: 47px;
    height: 40px;
    /* border-top: 1px solid black; */
    padding-top: 8px;
    display: inline-block;
    text-align: center;
    line-height: 20px;
    box-sizing: border-box;
    /* flex-wrap: wrap; */
}
.today {
    /* border-bottom: 1px solid #f10215; */
    background-color: #FFCC00;
    border-bottom-right-radius: 27.5px;
    border-bottom-left-radius: 27.5px;
}
</style>
