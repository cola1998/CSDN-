const fs = require('fs');
const path = require('path');
const url = require('url');
const ejs = require('ejs');

//私有方法
let getMime = function (extname) {
    var data = fs.readFileSync('./data/mime.json');//同步方法
    let mimeObj = JSON.parse(data.toString());
    return mimeObj[extname];
}

let app = {
    static: (req, res, staticPath) => {
        // 1 获取地址
        let pathname = url.parse(req.url).pathname;
        pathname = pathname == '/' ? './index.html' : pathname;
        let extname = path.extname(pathname); // 获取后缀名

        // 2 通过fs模块读取文件
        if (pathname != './favicon.ico') {
            try {
                let data = fs.readFileSync('./' + staticPath + pathname);
                if (data) {
                    let mine = getMime(extname);
                    res.writeHead(200, {'Content-type': '' + mine + ';charset=utf-8'});
                    res.end(data);
                }
            } catch (err) {

            }
        }
    },
    login: (req, res) => {
        //处理登录的业务逻辑
        // res.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
        // res.end("处理登录的业务逻辑");
        ejs.renderFile('./views/form.ejs',{},(err,data)=>{
            res.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
            res.end(data);
        });
    },
    news: (req, res) => {
        res.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
        res.end("news");
    },
    doLogin: (req, res) => {
        let postData = '';
        req.on('data',(chunk)=>{
            postData += chunk;
        })
        req.on('end',()=>{
            console.log(postData);
            res.end(postData);
        })
    },
    error:(req,res)=>{
        res.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
        res.end('error');
    }
}
//外部调用方式
//app.login.ejs('req','res');
//app['login.ejs']('req','res')


module.exports=app;