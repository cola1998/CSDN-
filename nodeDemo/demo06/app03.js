var fs = require('fs');
//文件较大时，最好采用流的方式读写文件
// var fileReadStream = fs.createReadStream('./wwwroot/input');
//
// var count = 0;
// var str = "";
// fileReadStream.on('data',(data)=>{
//     str += data;
//     count++;
// })
// fileReadStream.on('end',()=>{
//     console.log(str);
//     console.log(count);
// })
// fileReadStream.on('error',(err)=>{
//     console.log(err);
// })


// 写入
// var data = "";
// for(var i=0;i<500;i++){
//     data += '我是从数据库中获取的数据，我要保存起来.\n';
// }
// var fileWriteStream = fs.createWriteStream('input.txt');
// fileWriteStream.write(data,"UTF-8"); //写入数据
// fileWriteStream.end(); //标记文档末尾
//
// //监听写入完成事件
// fileWriteStream.on('finish',function () {
//     console.log('写入完成');
// })


var readerStream = fs.createReadStream("input.txt");
var writerStream = fs.createWriteStream("output.txt");

readerStream.pipe(writerStream);
console.log("程序写入完成");