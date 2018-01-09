/**
 * https://github.com/thu/nodejs-1707n
 * Date: 2017/12/14 17:55
 */

const db = require('./db');

let sql = 'INSERT INTO xz.xz_user(uname, upwd) VALUE(?, ?)';
let uname = 'tester';
let upwd = '123';

db.pool.query(sql, [uname, upwd], (err, results, fields) => {
    if (err) throw err;
    console.log(results.insertId);
    console.log(results.affectedRows);
});