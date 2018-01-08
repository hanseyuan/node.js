// 每个 js 文件都是一个模块

// require 导入
// ./ 当前目录
// 4_file_module 模块名，不需要 js 后缀
const file = require('./4_file-module');
console.log(file.key1);
file.key2();

const circle = require('./5_circle');
console.log(circle.area(1.2));
console.log(circle.perimeter(1.2));

const module2 = require('./m2/6_module');
console.log(module2.x);

const module3 = require('./m2');
console.log(module3.y);

const module4 = require('./m3');
console.log(module4.z);

const module5 = require('./m4');
console.log(module5.k);