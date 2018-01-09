/**
 * https://github.com/thu/nodejs-1707n
 * Date: 2017/12/14 17:54
 */

const mysql = require('mysql');

exports.pool = mysql.createPool({
    user: 'root',
    multipleStatements: true
});