const  http=require('http');
// let  server=http.createServer((req,res)=>{
//     res.end('It works');
//
// });
let server = http.createServer();

server.on('request', (req, res) => {
    // req: request
    // res: response
    // console.log(req.url);
    // console.log(req.httpVersion);
    console.log(req.headers);
    res.end('hello...')
});


server.listen(81);
