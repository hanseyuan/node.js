/**
 * console.log()
 * console.info()
 * console.warn()
 * console.error()
 * console.trace()
 * console.time()
 * console.timeEnd()
 */

console.log('log...');
console.info('info...');

console.warn('warn...');
console.error('error...');

console.trace('trace...'); // 栈信息

console.log('hello'); // '输出的内容'.log + TAB
console.log('hi...');

// jetbrains IDEA
// live template 动态模板
// File - Settings - 搜索 live templates - 添加动态模板
// 缩写 cl
// 模板内容 console.log($END$);
console.log(1); // cl + TAB

console.log('----------------')

console.time('计时'); // timer name String
let sum = 0;
for(let i = 0; i < 10000; i++) {
    sum += i;
}
console.log(`sum: ${sum}`);
console.timeEnd('计时');