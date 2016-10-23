/*篮球商品店卖体育器材，里面有很多体育用品，及其相关介绍等。当你来到体育用品店买一个篮球及其相关介绍时，你只需要问售货员，他会帮你找到你所要的东西。*/
//篮球基类
var Basketball=function () {
    this.intro='篮球盛行于美国';
}
Basketball.prototype={
    getMember:function () {
        console.log('每个队伍需要五名队友');
    },
    getBallSize:function () {
        console.log('篮球big');
    }
}
//足球基类
var Football=function () {
    this.intro='足球在全球范围内很流行';
}
Football.prototype={
    getMember:function () {
        console.log('每个队伍需要11名队员');
    },
    getBallSize:function () {
        console.log('足球big');
    }
}
//网球基类
var Tennis=function () {
    console.log('每年都有很多的网球比赛');
}
Tennis.prototype={
    getMember:function () {
        console.log('单打or双打');
    },
    getBallSize:function () {
        console.log('Tennis is small');
    }
}
//运动工厂
var SportsFactory=function (name) {
    switch (name){
        case 'NBA':
            return new Basketball();
        case 'wordCup':
            return new Football();
        case 'FrenchOpen':
            return new Tennis();
    }
}
//为世界杯创建一个足球，只需要记住运动工厂 SportsFactory，调用并创建
var footnall=SportsFactory('wordCup');
console.log(footnall);
console.log(footnall.intro);
footnall.getMember();
const demo =require('./demo');
console.log(demo.demo.getName());