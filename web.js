var express = require('express');

var sys = require("sys"),
http = require("http"),  
    url = require("url"),  
    path = require("path"),  
    fs = require("fs");  

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	fs.readFile('./index.html', function (err, data) {
	if (err) throw err;
		response.writeHead(200);
		response.write(data);
		response.end();
	});
	//response.send("Hello World");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});