// 1. 引入第三方模块：express: web framework
const  express=require("express");

// 2. 创建 express 对象
let app=express();

app.get('/', (req, res) => {
    // ...
    res.end('Hello, Express!');
});

app.get('/test', (req, res) => {
    // ...
    res.end('test response...');
});

app.post('/signUp', (req, res) => {
    // 从 req 请求中获取表单信息： username password
    // 连接数据库，执行 SQL 语句：INSERT INTO ...
    // 返回响应
});


// 3. 监听端口
app.listen(80);

// 4. 启动服务器 run