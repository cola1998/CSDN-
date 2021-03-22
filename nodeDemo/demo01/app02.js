const http = require('http');
const url = require('url');

http.createServer(function (req,res) {
    console.log(req.url);
    res.writeHead(200,{'Content-type':"text/html;charset=utf-8"});
    // res.write('<head><meta charset="UTF-8"></head>')// 显示中文不乱码或者utf-8去掉单引号

    if(req.url!='/favicon.ico'){
        var userInfo = url.parse(req.url,true).query;
        console.log(`姓名：${userInfo.username} -- 年龄：${userInfo.age}`);
    }
    res.end();//结束响应
}).listen(8081);
