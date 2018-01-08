/**
 * http 模拟客户端
 * 1. 向淘宝 IP 服务器发出请求，查询 ip 地址的地理位置
 * 2. 接收返回结果
 */
const http = require('http');

let ip = '125.34.56.78';

let options = {
  host: 'ip.taobao.com',
  path: '/service/getIpInfo.php?ip=' + ip
};

let request = http.request(options, (res) => {
  res.on('data', (buffer) => {
      console.log(JSON.parse(buffer.toString()));
  })
});

request.end();