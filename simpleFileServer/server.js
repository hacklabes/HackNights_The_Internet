/*jslint node: true */

// import required libraries
var serveIndex = require('serve-index');
var express = require('express');
var ip = require("ip");

var app = express();

var port =  4000;
var dirPath = process.argv[2];

if (dirPath === undefined){
	dirPath = __dirname;
}


console.log("This is my IP:" + ip.address());
console.log("and your PORT:" + port);
console.log("Server on path:" + dirPath);

app.get('/hello', function(req, res) {
      res.send('hello world');
});

app.use(express.static(dirPath));
app.use(serveIndex(dirPath));
app.listen(port);
