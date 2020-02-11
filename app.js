new Vue({
    el: '#vue-app',
    data() {
        return {
            name: '雷树峰',
            wechat: 'zylei21',
            website: 'https:www.baidu.com',
            websiteTag: '<a href="https:www.taobao.com">淘宝</a>',
            age: 30,
            x: 0,
            y: 0,
            tName: "",
            tAge: 32
        };
    },
    methods: {
        greet(time) {
            return `good ${time}! ${this.name}`;
        },
        haveLunch() {
            return `你吃过饭了吗？`
        },
        add(num) {
            return this.age += num;
        },
        sub(num) {
            return this.age -= num;
        },
        updateXY(event) {
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        handleClick() {
            alert("你好！");
        },
        logName() {
            console.log("正在输入名称。。。");
        },
        logAge() {
            console.log("正在输入年龄。。。");
        }
    }
});