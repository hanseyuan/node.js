// mkdir make directory

const fs = require('fs');
const path = require('path');

fs.mkdirSync(path.join(__dirname, 'dir1'));

fs.mkdir(path.join(__dirname, 'dir1', 'dir2'), (err) => {
    if(err) throw err;
});