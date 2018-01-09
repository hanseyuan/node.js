/**
 * https://github.com/thu/nodejs-1707n
 * Date: 2017/12/14 17:24
 */

const mysql = require('mysql');

let pool = mysql.createPool({
    user: 'root'
});

let uname = 'Mike';
let uid = 5;
let sql = 'UPDATE xz.xz_user set uname = ? WHERE uid = ?'
/*
pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(sql, [uname, uid], (err, results, fields) => {
        console.log(results.affectedRows);
    });
    connection.release();
});
*/

// 推荐
pool.query(sql, [uname, uid], (err, results, fields) => {
    if(err) throw err;
    console.log(results.affectedRows);
});

