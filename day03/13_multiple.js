/**
 * https://github.com/thu/nodejs-1707n
 * Date: 2017/12/14 17:47
 */

const mysql = require('mysql');

let pool = mysql.createPool({
    user: 'root',
    multipleStatements: true
});

pool.query('SELECT 1; SELECT 2', (err, results, fields) => {
    if(err) throw err;
    console.log(results);
});