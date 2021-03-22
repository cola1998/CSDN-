const http = require('http');
const url = require('url');
const ejs = require('ejs');
var  express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('hello world');
})
var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("访问地址为http://%s:%s",host,port);
})
// http.createServer(function (req, res) {
//     let pathname = url.parse(req.url).pathname;
//     console.log(pathname);
//     if (pathname == '/login') {
//         // res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
//         ejs.renderFile("./views/login.ejs", {}, (err, data) => {
//             res.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
//             res.end(data);
//         })
//     } else if (pathname == '/doLogin') {
//         let postData = '';
//         req.on('data', (chunk) => {
//             postData += chunk;
//         })
//         req.on('end', () => {
//             console.log(postData);
//             res.end(postData);
//         })
//
//     } else {
//         res.writeHead(404, {'Content-type': 'text/html;charset=utf-8'});
//         res.end("该页面不存在");
//     }
// }).listen(3000);

// console.log("http://127.0.0.1:3000/");