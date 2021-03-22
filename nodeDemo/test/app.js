const http = require('http');
const ejs = require('ejs');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    res.write("<p><input type= \"checkbox\" name=\"category\" value=\"50\">锅包肉</p>\n" +
        "        <p><input type= \"checkbox\" name=\"category\" value=\"20\">凉菜</p>\n" +
        "        <p><input type= \"checkbox\" name=\"category\" value=\"50\">土豆</p>")
    res.end();
}).listen(8081);
console.log("http://127.0.0.1:8081/");