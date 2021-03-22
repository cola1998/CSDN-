const fs = require('fs');
const path = require('path');
const url = require('url');

//私有方法
let getMime = function(extname){
    var data = fs.readFileSync('./data/mime.json');//同步方法
    let mimeObj = JSON.parse(data.toString());
    return mimeObj[extname];
}

exports.static = function (req, res, staticPath) {
    // 1 获取地址
    let pathname = url.parse(req.url).pathname;
    pathname = pathname == '/' ? './index.html' : pathname;
    let extname = path.extname(pathname); // 获取后缀名

    // 2 通过fs模块读取文件
    if (pathname != './favicon.ico') {
        try{
            let data = fs.readFileSync('./'+staticPath+pathname);
            if (data) {
               let mine = getMime(extname);
                res.writeHead(200, {'Content-type': '' + mine + ';charset=utf-8'});
                res.end(data);
            }
        }catch(err){

        }
    }
}