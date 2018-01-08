
const fs = require('fs');
const path = require('path');

// fs.appendFileSync(path.join(__dirname, 'append.txt'), 'data...');

fs.appendFile(path.join(__dirname, 'append.txt'), 'new data...', (err) => {
    if(err) throw err;
});