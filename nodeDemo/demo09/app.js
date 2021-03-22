const http = require('http');
const routes = require('./module/routes');
const url = require('url');
const ejs = require('ejs');

http.createServer(function (req, res) {
    routes.static(req, res, 'static'); // 创建静态web服务器

    //路由
    let pathname = url.parse(req.url).pathname;

    //获取请求类型
    console.log(req.method);
    if (pathname == '/news') {
        var query = url.parse(req.url,true).query;
        console.log(query);//获取get传值
        res.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
        res.end('get传值成功');
    }else if(pathname == "/logout"){
        //post演示
        ejs.renderFile("./views/form.ejs",{},(err,data)=>{
            res.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
            res.end(data);
        })
    }
    else if(pathname == "/doLogin"){
        //获取post传值
        let postData = '';
        req.on('data',(chunk)=>{
            postData += chunk;
        })
        req.on('end',()=>{
            console.log(postData);
            res.end(postData);
        })

    }
    else if (pathname == '/login.ejs') {
        let msg = "从数据库中获取的数据";  //加载的是动态的数据
        let list = [
            {
                title: '新闻111'
            },
            {
                title: '新闻222'
            },
            {
                title: '新闻333'
            },
            {
                title: '新闻444'
            },
            {
                title: '新闻555'
            }
        ]
        ejs.renderFile('./views/login.ejs.ejs',
            {
                msg: msg,
                list: list
            }
            , (err, data) => {
                res.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
                res.end(data);
            })
    } else if (pathname == '/register') {
        res.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
        res.end('执行注册');
    } else if (pathname == '/admin') {
        res.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
        res.end('处理后端业务逻辑');
    } else {
        res.writeHead(404, {'Content-type': 'text/html;charset=utf-8'});
        res.end('页面不存在');
    }

}).listen(3000);

console.log('Server running at "http://127.0.0.1:3000/');