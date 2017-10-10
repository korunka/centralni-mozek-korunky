// app/index.js

const http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World!\n');
	console.log('pinged');
}).listen(8080, 'localhost');

console.log('server running at http://localhost:8080/');
