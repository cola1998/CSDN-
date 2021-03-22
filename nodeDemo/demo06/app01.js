//1 let const的使用 let 和 var是一样用来定义变量的
//let 是一个块作用域
// const用于定义常量，不能改变 也是块作用域
// if(true){
//     // let a = 123;
//     var a = 123;
// }
// console.log(a)

// 2 模板字符串
// var username = 'zhangsan';
// var age = 22;
// console.log(`姓名：${username}   年龄：${age}`);

// 3 方法与属性的简写
// var name = 'zhangsan';
// // var app = {"name":name}
// var app = {name} //属性简写==>属性名称和变量名称一样
// console.log(app.name);

// var name = 'zhangsan';
// // var app = {"name":name}
// var app = {
//     name,
//     // run:function(){
//     //     console.log(`${this.name}在跑步`);
//     // }
//     run(){
//         console.log(`${this.name}在跑步`);
//     }//方法简写
// }
// app.run();

// 4 箭头函数  注意不能有原型
// setTimeout(function (){
//     console.log("执行");
// },1000)

// setTimeout(()=>{
//     console.log("执行");
// },1000)

/* 5 Promise 来处理异步
* resolve 成功的回调函数
*
* reject 失败的回调函数
*
*/

//利用回调函数处理异步函数 es6之前处理办法
// function getData(callback){
//     //ajax
//     setTimeout(function(){
//         var name = '张三';
//         callback(name);
//     },1000);
// }
// //外部获取异步方法里的数据
// getData(function (aaa) {
//     console.log(aaa);
// })

// promise如何处理 
var p = new Promise(function(resolve,reject){
    setTimeout(function () {
    var name = '张三';
    resolve(name);
    },1000);
})
p.then(function (data) {
    console.log(data);
})