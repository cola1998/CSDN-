var express = require('express'); //引入express框架
// var app = express();  //实例化express框架
//
let app = function(){
    console.log("调用app方法");
}
app.get=function(){
    console.log("get方法");
}
app.post=function(){
    console.log("post方法");
}

//调用
// app.get()
app();