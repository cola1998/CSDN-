//普通方法
// function test(){
//     return "你好nodejs";
// }
// console.log(test());

// async function test(){
//     return "你好nodejs";
// }
// async function main(){
//     var data = await test();// 必须用在异步方法中  获取异步方法里面的数据
//     console.log(data);
// }
// main();

var fs = require('fs');

//isDir方法判断是目录还是文件
async function isDir(path) {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stats) => {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }

            if (stats.isDirectory()) {
                resolve(true);
            } else {
                resolve(false);
            }
        })
    })
}

function main() {
    var path = './wwwroot';
    var dirArr = [];

    fs.readdir(path, async (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        for (var i = 0; i < data.length; i++) {
            if (await isDir(path + '/' + data[i])) {
                dirArr.push(data[i]);
            }
        }
        console.log(dirArr);
    })
}

main();