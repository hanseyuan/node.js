// 这是一个圆形模块
// 导出两个函数
//  fun1: 计算圆形的面积 area
//  fun2: 计算圆形的周长 perimeter

function area(radius) {
    return Math.PI * radius * radius;
}

function perimeter(radius) {
    return Math.PI * radius * 2;
}

exports.area = area;
exports.perimeter = perimeter;

// 在另一个模块中导入当前模块，测试函数