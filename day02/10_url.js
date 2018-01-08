/**
 * url 地址字符串
 */
const url = require('url');

let string = 'http://cn.bing.com:80/search?k1=v1&k2=v2#anchor';

console.log(url.parse(string, true));
console.log('---');
console.log(url.format(url.parse(string)));