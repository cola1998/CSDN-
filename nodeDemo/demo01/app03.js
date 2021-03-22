const http = require('http');
const url = require('url');
const tools = require('./module/tools01.js');  //引入自定义模块

console.log(tools);

http.createServer(function (request,response) {
    response.writeHead(200,{'Content-type':'text/html;charset=utf-8'})
    if(request.url != '/favicon.ico'){
        var getValue = url.parse(request.url,true).query;
        console.log(`姓名：${getValue.username} -- 年龄：${getValue.age}`)
    }
    response.write("<head><meta charset='UTF-8'></head>");
    response.write("你好 nodejs<br>");
    var api = tools.formatApi("8081");
    response.write(api);
    response.end();
}).listen(8081);