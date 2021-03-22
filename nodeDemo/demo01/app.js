const http = require('http');

http.createServer(function (req,res) {
    console.log(req.url);
    res.writeHead(200,{'Content-type':"text/html;charset=utf-8"});
    // res.write('<head><meta charset="UTF-8"></head>')// 显示中文不乱码或者utf-8去掉单引号
    res.write('<h2>我的天</h2>')
    res.write('this is not 我的天');

    res.end();//结束响应
}).listen(8081);
