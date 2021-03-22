//引入url模块
const url = require('url');

var api = 'http://www.itying.com?name=zhangsan&age=22';

// console.log(url.parse(api,true));  //将query转换成对象
var getValue = url.parse(api,true).query;
console.log(getValue);
console.log(`姓名：${getValue.name} -- 年龄：${getValue.age}`)