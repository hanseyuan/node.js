/**
 * https://github.com/thu/nodejs-1707n
 * Date: 2017/12/14 16:25
 */

const mysql = require('mysql');
const bcrypt = require('bcryptjs');

let pool = mysql.createPool({
    // connectionLimit: 10, // 默认连接数量 10
    user: 'root'
});

pool.getConnection((err, connection) => {
    if(err) throw err;
    let uname = 'Jerry';
    let upwd = '123';
    let salt = bcrypt.genSaltSync(10);
    let encryptedPwd = bcrypt.hashSync(upwd, salt);
    let sql = 'INSERT INTO xz.xz_user(uname, upwd) VALUE(?, ?)';
    connection.query(sql, [uname, encryptedPwd], (err, results, fields) => {
        if(err) throw err;
        console.log(results.affectedRows);
    });
    connection.release();
});