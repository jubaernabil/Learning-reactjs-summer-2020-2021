const id = require('./User');
const path = require('path');
const fs = require('fs');
const http = require('http');
/*
 const add = "c://windows/asdfads.js";
 console.log(path.dirname(add));
 console.log(path.extname(add));
 console.log(path.normalize(add)); 
 */

 const server = http.createServer(function(req, res){
                //console.log('node http server working...');
                //console.log(req.url);
                //console.log(req.method);

                if(req.url == '/'){
                    res.write('this is root');
                    res.end();
                }
                if(req.url == '/home'){
                    res.write('<h1>Welcome home</h1>');
                    res.end();
                }
                if(req.url == '/login'){
                    //res.writeHead(200, {'content-type':'text/html'});
                    //res.write('<h5>Login page</h5> ');
                    //res.end();

                    fs.createReadStream('login.html').pipe(res);

                }

 });

 server.listen(8000);
 console.log('node server started at 8000');