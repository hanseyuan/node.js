# node.js
node.js练习
Node.js

### Day01

一. 什么是 Node.js
1. Node.js 官网：https://nodejs.org
2. JavaScript 的运行时 runtime
3. 基于 Chrome 的 V8 引擎
4. 特性之一：event-driven 事件驱动
5. 特性之二：non-blocking 非阻塞
6. NPM: Node.js Package Manager 包管理器
7. NPM 官网：https://npmjs.com
8. Node.js 跟传统的后端语言 PHP (.php) Java EE(.jsp)，.NET(.aspx)，Python，Go，Ruby 做同样的事情：服务器端开发

二. Node.js 和 JavaScript 是什么关系？
9. JavaScript，脚本语言，运行于客户端浏览器，浏览器对 JS 进行解释执行，每个浏览器都有一个组成部分：JavaScript 引擎。IE Firefox Safari Opera Chrome。Google Chrome V8 引擎
10. Node.js 运行于服务器端，JavaScript 运行于客户端
11. JavaScript: DOM / BOM；Node.js: 没有 DOM 和 BOM
12. 语法上 Node.js 与 JavaScript 基本一致

三. 安装 Node.js
12. 最新版 WebStorm 下载地址：https://download.jetbrains.8686c.com/webstorm/WebStorm-2017.3.exe
13. LTS（长期支持版，推荐） | Current （当前版本，含有最新特性，不推荐）
14. 当前下载 Node.js V8.9.3LTS
15. 下载地址： https://nodejs.org/dist/v8.9.3/node-v8.9.3-x64.msi
16. 卸载当前的 Node.js：开始-控制面板-程序和功能-找 Node.js-点击右键-卸载
17. 安装了：
	17.1 Node.js runtime
	17.2 NPM
	17.3 在线文档的快捷方式
	17.4 把 Node.js 和 NPM 设置为系统环境变量，作用是在命令行里可以直接运行 Node 和 NPM 命令
18. 安装路径：C:\Program Files\nodejs
19. 测试：
	19.1 打开命令行：开始-搜素程序和文件-cmd 19.2 快捷键：Win 键 + R
20. 命令一：node -v (回车) 输出：V8.9.3
21. 命令二：npm -v (回车) 输出：5.5.1

四. 运行 Node.js
22. 命令行里测试
	22.1 输入：node
	22.2 输入：var x = 1;
	22.3 输入：var y = 2;
	22.4 输入：x + y
23. Node.js 程序的执行有两种方式：交互模式，脚本模式
24. 交互模式 (REPL: Read - Evaluate - Print - Loop)，做法是在命令行里执行，先输入 node
25. 脚本模式：编写 Node.js 的脚本文件，全部是扩展名为 *.js 的文件，再在 Node.js 环境下执行
26. 配置 WebStorm 的 Node 环境
	26.1 创建一个 Node.js 的项目
	26.2 File - Settings - Languages & Frameworks
	26.3 JavaScript - JavaScript Language Version > EcmaScript 6
	26.4 Node.js and NPM
27. File - Settings - 搜索 font
28. 在项目里创建一个 hello.js 文件，编写代码：
console.log('Hello, Node.js!');
19. 在 “Run” 菜单中点击运行，控制台输出：Hello, Node.js!
20. 运行的快捷键：Shift + F10
21. 使用 Node.js 的核心模块 HTTP 搭建了一个简单的 web 服务器：
	21.1 引入核心模块 http: const http = require('http');
	21.2 创建服务器对象：let server = http.createServer((req, res) {//...});
	21.3 用 server 调用 listen 监听 80 端口，启动了服务器

五. Node.js 全局对象
22. Node.js 有核心模块和第三方模块
	22.1 核心模块一般直接引入，就可以使用
	22.2 第三方模块需要先下载安装，再引入，再使用
23. Node.js 中有全局模块： Global，全局模块可以直接使用，不需要引入
24. 全局对象之一：console 控制台
	console.log() 向标准输出 stdout 输出内容   
	console.info() 向标准输出 stdout 输出内容
	console.warn() 向标准错误输出 stderr 输出内容 
	console.error() 向标准错误输出 stderr 输出内容   
	console.trace() 向标准错误输出 stderr 输出栈信息

	console.time() 计时开始
	console.timeEnd() 计时结束，要求和 time() 的参数字符串完全一致 

25. 全局对象之二：process 进程 thread 线程
	process.arch 查看系统架构：x64
	process.pid 进程标识符，当前显示是 Node.js 的执行进程的标识符
	process.platform 平台信息
	process.evn 系统环境信息
	process.execPath Node.js 执行路径
	process.versions 各种版本信息
	process.kill(pid) 结束标识符为 pid 的进程
	process.cwd() 当前工作目录的绝对路径
	process.memoryUsage() 系统内存信息
	process.uptime() Node.js 进程到当前代码经过的时间毫秒数

26. 全局对象之三：buffer
	缓冲区：内存当中开辟的一个存放数据的区域
	缓冲区输出的形式默认是***十六进制***，一个 00 代表1个字节的数据
	new buffer(size) 开辟一个 size 字节的缓冲区，不推荐使用
	new buffer(array) 不推荐
	new buffer(string) 不推荐

	Buffer.from(array) 以数组 array 开辟缓冲区，数组的元素必须是数字 十进制、十六进制0x，八进制的0o
	Buffer.from(string) 以字符串 string 开辟一个缓冲区
	Buffer.alloc(size); 开辟一个 size 字节的缓冲区，推荐使用
	Buffer.allocUnsafe(size); 开辟一个 size 字节的缓冲区，Unsafe 不安全的：可能缓冲区内有一些别的数据
27. 查看 Node.js API文档，练习缓冲区的循环输出方式：
Buffer.entries();
Buffer.keys();
Buffer.values();
...
### Day02
一. package 和 NPM
1. 什么是 NPM：Node.js 的包管理器
2. https://npmjs.com
3. 这里管理着 Node.js 的第三方模块 third-party
4. 第三方包的使用：
    4.1 下载并安装：使用相关 npm 命令
    4.2 引入到项目的 JS 文件，require
    4.3 使用第三方模块
5. express 第三方模块的使用
    5.1 进入相关目录 cmd: npm install express，不推荐，从官网下载，速度慢
    5.2 安装 npm 的淘宝镜像
    5.3 npm.taobao.org
    5.4 打开目录 day02，按住 shift，鼠标右键-在此处打开命令窗口
    5.5 cmd：npm install -g cnpm --registry=https://registry.npm.taobao.org
    5.6 在 day02 目录中，执行cmd: cnpm install --save express，简写为：cnpm i -S express
    5.7 创建 2_express.js 文件
    5.8 引入 express：const express = require('express');
    5.9 创建 experess 对象，赋值给本地变量：let app = express();
    5.10 监听端口80：app.listen(80);如果报错：ERROR: listen EADDRINUSE，端口被占用。
    5.11 查找哪个程序占用了端口，使用 DOS 命令
    cmd：netstat -ano | findstr 80
    5.12 终止进程，使用命令，cmd：taskkill /f /pid <进程ID号>
    5.13 启动服务器应用：运行 2_express.js
    5.14 网页提示：Cannot GET /，含义是用户的关于网站根目录的请求，当前没有处理。处理方式：app.get('/', (req, res) => {//...});
二. Node.js 的模块
6. Node.js 中的模块的分类：核心模块、第三方模块、自定义模块
7. 自定义模块：文件模块、目录模块
8. 文件模块：文件本身做为模块
9. 目录模块：
	9.1 必须有一个名为 index.js 的一个文件模块，其它模块导入时：require('./目录名');
	9.2 JS 文件名任意，创建一个 package.json 文件，在其中指定主模块："main":"JS 文件名"，也可以使用命令生成 package.json 文件：cmd：npm init；（推荐）其它模块导入时：require('./目录名');
三. Node.js 核心模块
核心模块之一：工具模块
10. querystring：查询字符串
	10.1 parse 把查询字符串解析为 JavaScript 对象
	10.2 stringify 把 JavaScript 对象还原为查询字符串
11. url：地址字符串
	11.1 parse(urlString, true) 对 url 地址进行解析
	11.2 format 把解析的结果还原为 url 地址字符串
12. path：路径
	12.1 join 拼合路径
	12.2 isAbsolute 判断路径是否是绝对路径
	12.3 extname 获取一个文件的扩展名
13. util：工具
	13.1 isArray
	13.2 isDate
	13.3 isRegExp
	13.4 isError
核心模块之二：fs
14. fs: file system
15. readFile() 异步读取文件（推荐，非阻塞）
16. readFileSync() 同步读取（小文件适合，阻塞）
17. 查看 FS 的 API 文档，练习：writeFile() / writeFileSync()




### Day03

一. Node.js http 模块
1. http 模块两方面功能：服务器端，客户端
2. 服务器端：接收请求，处理请求，返回响应
	2.1 引入 http 模块
	2.2 创建 server 实例：http.createServer();
	2.3 server 监听 request 事件：server.on('request', (req, res) => {//...});
	2.4 查看请求相关信息
		a. req.url
		b. req.httpVersion
		c. req.headers
	2.5 返回响应：res.end('...');
	2.6 监听端口
	2.7 启动服务器端
3. 客户端：模拟客户端发出请求
	3.1 向某一个服务器发出请求：http.request(options, cb);
	3.2 options {} 指定服务器相关信息
	3.3 cb：(res) => { res.on('data',(buffer)=>{//...}};


二. Node.js mysql 模块
1. MySQL R-DBMS Oracle
2. MariaDB
3. SQL + Design
4. SQL = DDL + DML + DQL + DTL + DCL
5. DDL 数据定义
	5.1 CREATE: DATABASE TABLE INDEX VIEW
	5.2 DROP: DATABASE ...
	5.3 ALTER: TABLE
	5.4 CONSTRAINT: NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY
	5.5 TRUNCATE
6. DML 数据操纵
	6.1 INSERT
	6.2 UPDATE
	6.3 DELETE
7. DQL 数据查询
	7.1 SELECT...
	7.2 投影查询
	7.3 行检索 WHERE
	7.4 AND, OR, =, <>, IS NULL, BETWEEN AND, IN, LIKE, REGEXP/RLIKE, NOT
	7.5 ORDER BY: ASC|DEFAULT, DESC
	7.6 LIMIT OFFSET
	7.7 JOIN: CROSS JOIN, INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN, UNION
	7.8 SUB QUERY
	7.9 GROUP BY: 组检索 HAVING
	7.10 SQL 函数: 聚合函数，数值函数，文本函数，时间日期函数
8. DTL 事务相关
	8.1 开启事务：START TRANSACTION
	8.2 DML
	8.3 结束事务：COMMIT, ROLLBACK, DDL 隐式结束
	8.4 SAVE POINT, ROLLBACK SVAE POINT
9. DCL 控制语句 DBA
	9.1 GRANT
	9.2 REVOKE
10. Node.js 第三方模块：mysql
11. 进入 day03/ cmd：npm init，创建一个 package.json
12. 安装 mysql 模块：进入 day03/ cmd: cnpm install --save mysql | cnpm i -S mysql
13. 使用 mysql 模块创建数据库连接，并且进行一次简单查询
14. 建立 JS 文件，引入 mysql：const mysql = require('mysql');
15. 创建一次连接：let connection = mysql.createConnection({user:'root'});
16. 取得数据库连接：connection.connect((err) => {//...});
17. 没有错误的情况下，使用 connection 进行数据库操作：connection.query(sql, values, cb);
18. 取得 query 的结果,cb: (err, results, fields) => {console.log(results)}
19. 数据库连接池 pool: mysql.createPool({connectionLimit: 10}); connectionLimit:初始化数据库连接池中的连接数量
20. 查询时，从连接池中取出一个连接：pool.getConntection((err, connection) => {//...});
21. 使用 connection 进行数据库操作
22. 使用完毕后，释放连接：connection.release();
23. 第三方模块 bcryptjs 实现密码加密
24. 下载安装 bcryptjs，day03/ cmd：npm i -S bcryptjs
25. 引入 bcryptjs：const bcrypt = require('bcryptjs');
26. 加密密码
	26.1 let salt = bcrypt.genSaltSync(10);
	26.2 let encryptePwd = bcrypte.hashSync(明文密码, salt); // 生成了一个 64 位的加密密码，存入数据库
27. 登录时，先根据用户名查加密后的密码
28. 再使用 bcryptjs 模块的 compareSync 函数验证密码是否正确
29. 推荐的 SQL 执行方式：pool.query(sql,[],cb);
30. results 的属性：insertId，新生成的主键值
31. 使用 mysql 模块执行一个存储过程


