const http = require('http');
const fs = require('fs');

// fs.readFile("index.html", (err, html) => {
//     if(err) {
//         throw err;
//     }
//     http.createServer((req, res) => {
//         res.writeHeader(200, {"Content-Type": "text/html"});
//         console.log(req.url);
//         res.write(html)
//         res.end();
//     }).listen(8080);
//     console.log('http://127.0.0.1:8080/')
// })

http.createServer((req, res) => {
    // res.statusCode = 200;
    res.writeHead(200, {"Content-Type": "text/html"});
    console.log(req.url);
    // if(req.url === '/shit.html') {
    //     res.write(fs.readFile("./shit.html"))
    // } else {
    //     res.write(fs.readFile("./index.html"))
    // }
    res.end("Hello World");
}).listen(8080);
console.log('sucess!')
console.log('http://127.0.0.1:8080/')