/**
 * path 路径
 */
const path = require('path');
console.log(path.join(__dirname, 'test1/test2', 'test3'));
console.log(path.isAbsolute(__dirname));
console.log(path.isAbsolute('./path.js'));
console.log(path.extname(__filename));