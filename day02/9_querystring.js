/**
 * querystring 网址后的查询字符串
 */
const queryString = require('querystring');

// k1=v1&k2=v2&...
let string = 'q=node.js&qs=n&form=QBLH&sp=-1&pq=undefined&sc=0-7&sk=&cvid=9E15632A92354539A14A669C81A89E2B';

console.log(queryString.parse(string));

let obj = { q: 'node.js',
    qs: 'n',
    form: 'QBLH',
    sp: '-1',
    pq: 'undefined',
    sc: '0-7',
    sk: '',
    cvid: '9E15632A92354539A14A669C81A89E2B' };

console.log(queryString.stringify(obj));