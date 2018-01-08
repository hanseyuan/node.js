/**
 * buffer iteration
 */

let buffer = Buffer.from('abcde');
console.log(buffer);
console.log(buffer.length); // 字节数

// method 1: length
for(let i = 0; i < buffer.length; i++) {
    console.log(buffer[i]);
}

console.log('---------------');

// method 2: ES6 for...of
for(let v of buffer) {
    console.log(v);
}

console.log('---------------');

// method 3: buffer.keys()
for(let k of buffer.keys()) {
    console.log(`key: ${k}, value: ${buffer[k]}`);
}

console.log('---------------');

// method 4: buffer.values()

for(let v of buffer.values()){
    console.log(v);
}

console.log('---------------');

// method 5: buffer.entries()

for(let pair of buffer.entries()){
    console.log(pair); // pair 对儿
}

