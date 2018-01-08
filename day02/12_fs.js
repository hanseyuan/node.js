/**
 * fs 文件系统
 */
const fs = require('fs');


// 同步读取文件数据
let data = fs.readFileSync(__filename);
console.log(data.toString());
console.log('--- test ---');

// 异步读取文件数据
// fs.readFile(__filename, (err, data) => {
//     if(err) throw err;
//     console.log(data.toString());
// });
// console.log('--- test ---');
