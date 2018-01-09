/**
 * https://github.com/thu/nodejs-1707n
 * Date: 2017/12/14 17:33
 */


const mysql = require('mysql');

let pool = mysql.createPool({
    user: 'root'
});

let sql = 'DELETE FROM xz.xz_user WHERE uid = ?';
let uid = 5;
pool.query(sql, [uid], (err, results, fields) => {
    if(err) throw err;
    console.log(results.affectedRows);
})