const http = require('http');
const fs = require('fs');
const common = require('./module/common.js');
const path = require('path');
const url = require('url');

http.createServer(function(request,response){
    response.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    // 127.0.0.1:3000/index.html
    // 127.0.0.1:3000/login.ejs.ejs

    // 1 获取地址
    let pathname = url.parse(request.url).pathname;
    console.log(pathname);
    pathname = pathname=='/' ? './index.html':pathname;

    let extname = path.extname(pathname); // 获取后缀名
    // 2 通过fs模块读取文件
    if(pathname != './favicon.ico'){
        fs.readFile('./static'+pathname,(err,data)=>{
            if(err){
                console.log(err);
                response.writeHead(404,{'Content-type':'text/html;charset=utf-8'});
                response.end('404这个页面不存在');
            }
            let mine = common.getMime(extname);
            response.writeHead(200,{'Content-type':''+mine+';charset=utf-8'});
            response.end(data);
        })
    }

}).listen(3000);

console.log("Server running at http://127.0.0.1:3000");