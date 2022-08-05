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
//     console.log('http://127.0.0.1:8080/%27)
// })

http.createServer((req, res) => {
    // res.statusCode = 200;
    res.writeHead(200, {"Content-Type": "text/html"});
    console.log(req.url);
    if(req.url === '/shit.html') {
        res.write(fs.readFile("./shit.html"))
    } else {
        res.write(fs.readFile("./index.html"))
    }
    res.end();
}).listen(8080);
console.log('sucess!')
console.log('http://127.0.0.1:8080/%27);


http
.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

//   switch(req.url){
//       case "/profile.html":
//           res.write(profile);
//           break;
//       case "/index.html": case "/":
//           res.write(index);
//           break;
//       default:
//           res.writeHead(404, { "Content-Type": "text/html" });
//           res.write(page_404)
//           break;

//   }
  res.end('lol');
})
.listen(8080)