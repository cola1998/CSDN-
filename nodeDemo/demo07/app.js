//利用http、url、path和fs模块创建一个静态web服务器

const http = require('http');

http.createServer(function(request,response){
    response.writeHead(200,{'Content-type':'text/html;charset=utf-8'});

    response.end("hello world");
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081");