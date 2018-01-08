const mysql = require('mysql');
let connection = mysql.createConnection({
    user: 'root'
});
connection.connect((err) => {
    if(err) throw err;
    connection.query('SELECT * FROM xz.xz_user', (err, results, fields) => {
        if(err) throw err;
        console.log(results);
        console.log(fields);
    })
});