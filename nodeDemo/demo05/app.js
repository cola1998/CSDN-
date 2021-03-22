const fs = require('fs');
//1
// fs.stat('./package.json',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(`是文件：${data.isFile()}`);
//     console.log(`是目录：${data.isDirectory()}`);
// })

/*  2 mkdir的三个参数
* path:待创建目录或文件路径
* mode 文件权限 默认777
* callback 回调函数 传递异常参数err
* */
// fs.mkdir('./css',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("创建成功");
// })

/*
* 3 writeFile参数
* filename   文件名称
* data   写入内容
* options option数组对象，包含
*  - encoding 编码默认utf-8
*  - mode 文件读写权限 默认438
*  - flag 默认值‘w'
* callback {function} 回调函数 传递err
* */
// fs.writeFile('./html/index.html','你好nodejs hahaha',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("创建，写入成功");
// })

/*
* 4 appendFile追加文件
* 文件不存在，创建写入
* 文件存在，追加内容
* */
// fs.appendFile('./css/base.css','\nbody{color:red}\n<h2>{color:red}</h2>',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('追加成功');
// })

/*
* 5.readFile()
* */
// fs.readFile('./html/index.html',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data); //<Buffer e4 bd a0 e5 a5 bd 6e 6f 64 65 6a 73 20 68 61 68 61 68 61>
//     console.log(data.toString()); //你好nodejs hahaha  将buffer转换成string类型
// })

/*
 * 6.readdir
 */
// fs.readdir('./html',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })

//7.rename 重命名或者移动文件
// fs.rename('./css/aaa.css','./css/index.css',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('重命名成功');
// })

//8.rmdir删除目录
fs.unlink('./aaa/a',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('删除文件成功');
})
fs.rmdir('./aaa',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('删除目录成功');
})