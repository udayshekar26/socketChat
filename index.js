const express  = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', function(req, res) {
    res.send('<h1> Hello Uday </h1>');
});

server.listen(3000,() =>{
    console.log("listening on port 3000");
});