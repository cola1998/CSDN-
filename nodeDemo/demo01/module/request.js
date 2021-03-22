// var obj = {
//     get:function () {
//         console.log('从服务器获取数据');
//     },
//     post:function () {
//         console.log('提交数据')
//     }
// }
// exports.xxx = obj;
//或者是  对象建议用这个
// module.exports = obj;

//这样也可以暴露多个单独的方法
exports.get=function () {
        console.log('从服务器获取数据');
    }
exports.post=function () {
        console.log('提交数据')
    }