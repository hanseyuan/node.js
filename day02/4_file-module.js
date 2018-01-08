/**
 * 自定义模块 1：JS 文件本身做为模块
 * @type {number}
 */
let x = 1;
let y = 2;

function test() {
    console.log('test...');
}
test();

// exports 导出
// 第一个 x 是一个键
// 第二个 x 是一个值
exports.key1 = x;
exports.key2 = test;