var http=require('http');
var fs=require('fs');

http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
    res.end('你好！');
}).listen('8800');