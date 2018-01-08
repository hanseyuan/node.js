/**
 * https://github.com/thu/nodejs-1707n
 * Date: 2017/12/14 15:25
 *
 * pooling 池塘 池化技术
 */

// 1. 引入 mysql 模块
const mysql = require('mysql');
const bcrypt = require('bcryptjs')
// 2. 创建一个数据库连接池，初始化 10 个连接
let pool = mysql.createPool({
    user: 'root',
    connectionLimit: 10
});
// 从数据库连接池中取出一个连接
pool.getConnection((err, connection) => {
    if (err) throw err;
    let uname = 'jerry';
    let upwd = '123';
    let sql = 'SELECT * FROM xz.xz_user WHERE uname = ?';
    connection.query(sql, [uname], (err, resutls, fields) => {
        if (resutls.length === 0) {
            console.error('Invalid username or password.');
        } else {
            let encryptedPwd = resutls[0].upwd;
            if (bcrypt.compareSync(upwd, encryptedPwd)) {
                console.log('Sign in successful.');
            } else {
                console.error('Invalid username or password');
            }
        }
    });
    connection.release(); // 释放连接
});