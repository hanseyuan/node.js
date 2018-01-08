
const fs = require('fs');
const path = require('path');

fs.writeFileSync(path.join(__dirname,
    'test.txt'), 'text...');
console.log('---------');

fs.writeFile(path.join(__dirname,
    'test.txt'), 'new text...', (err) => {
    if(err) throw err;
});