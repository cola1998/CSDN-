//1 判断服务器上有没有upload目录，没有创建
const fs = require('fs');
var path = './upload';
fs.stat(path ,(err,data)=>{
    if(err){
        console.log(err);
        //执行创建文件目录
        mkdir(path);
        return;
    }
    if(data.isDirectory()){
        console.log("upload目录存在");
    }else{
        //首先删除文件，再执行创建目录
        fs.unlink(path,(err)=>{
            if(err){
                console.log("创建失败");
                return;
            }else{
                mkdir(path);
            }
        })
    }
})

function mkdir(dir){
    fs.mkdir(dir,(err)=>{
        if(err){
            console.log(err);
            return;
        }
    })
}
//2 wwwroot文件夹下面有没有image css js以及index.html，找出wwwroot目录下面的所有目录,