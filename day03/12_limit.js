/**
 * https://github.com/thu/nodejs-1707n
 * Date: 2017/12/14 17:44
 */

const mysql = require('mysql');

let pool = mysql.createPool({
    user: 'root'
});

let sql = 'SELECT * FROM xz.xz_laptop LIMIT 10 OFFSET 0';

pool.query(sql, (err, results, fields) => {
    console.log(results);
    console.log(results.length);
});