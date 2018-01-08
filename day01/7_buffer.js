// buffer 缓冲区

let buffer = new Buffer(8); // size: byte 字节
console.log(buffer);

let buffer1 = Buffer.alloc(8); // allocate 分配
console.log(buffer1);

// 1 byte 字节
// bit 比特 计算机中存放数据的最小单位
// 1bit 0 1 二进制
// 1byte = 8bit
// binary: [00000000, 11111111]
// dec: [0, 255]
// hex: [0, ff] 0-9 + a-f

let buffer2 = Buffer.from('abcde'); // a - 97
console.log(buffer2); // <Buffer ?? ...>

let buffer3 = Buffer.from([0x61, 0x62, 0x63]); // 0x HEX
console.log(buffer3);
console.log(buffer3.toString()); // abc

let buffer4 = Buffer.from([0o111, 0o112, 0o113]);
console.log(buffer4);
console.log(buffer4.toString());

let buffer5 = Buffer.allocUnsafe(16);
console.log(buffer5);