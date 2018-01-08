/**
 * fs: 文件系统
 */
const fs = require('fs');


// let data = fs.readFileSync(__filename);
// console.log(data.toString());
// console.log('-------------');

fs.readFile(__filename, (err, data) => {
    if(err) throw err;
    console.log(data.toString());
});
console.log('------------');