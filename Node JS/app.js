//const id = require('./User');
import path from 'path';
import fs from 'fs';
import http from 'http';
//import {User, id} from './User.js';
import User from './User.js'; 
import Button from './Button.js';
import index from './index.js';
import UserList from './UserList.js';

/*
 const add = "c://windows/asdfads.js";
 console.log(path.dirname(add));
 console.log(path.extname(add));
 console.log(path.normalize(add)); 
 */
 
 //const user1 = new User('nabil', 1234);

 const server = http.createServer(function(req, res){
                //console.log('node http server working...');
                //console.log(req.url);
                //console.log(req.method);
                const users = [
                    
                ]
                const UpdateClick = ()=>{return `alert('this is update')`};
                const CreateClick = ()=>{return `alert('this is create')`};

                if(req.url  == '/style.css'){
                    fs.createReadStream('style.css').pipe(res);
                }

                if(req.url == '/'){
                    res.write('this is root');
                    res.end();
                }
                if(req.url == '/home'){
                   // res.write(`<h1>Welcome home ${user1.name}</h1>`);
                    /*res.write(`<h1>Welcome home, 
                        ${Button('create', CreateClick)} - 
                        ${Button('update', UpdateClick)} </h1>`);
                        */
                    //res.write(index('home', Button('create', CreateClick)));
                    res.write(index('home', UserList()));
                     
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