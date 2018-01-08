/**
 * util 工具
 */
const util = require('util');

console.log(util.isArray([]));
console.log(util.isArray(new Array()));
console.log(util.isArray({}));

console.log(util.isDate(Date));
console.log(util.isDate(Date()));
console.log(util.isDate(new Date()));
console.log(util.isDate('2017-12-13'));
console.log(util.isDate(new Date(0)));

console.log(util.isRegExp(/a/));
console.log(util.isRegExp(/[a-z]/ig));
console.log(util.isRegExp(new RegExp()));

console.log(util.isError(new Error()));
console.log(util.isError(TypeError));
console.log(util.isError(new TypeError));