/**
 * process: 进程
 */
console.log(process.arch); // 架构

console.log(process.pid); // process id

// process.kill(3372);

console.log(process.platform);

console.log(process.env);

console.log(process.execPath);

console.log(process.versions);

console.log(process.cwd()); // current working directory
console.log(__dirname);

console.log(process.memoryUsage());

let start = process.uptime();
for(let i = 0; i < 10000; i++) {
    console.log(i); // IO
}
console.log(process.uptime() - start);

// console.time()
// ...
// console.timeEnd()

// os
const os = require('os'); // Operating System 操作系统
console.log(os.uptime()); // seconds