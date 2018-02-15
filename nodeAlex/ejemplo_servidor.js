// MODULOS

var http = require('http');
var url = require('url');

http.createServer( function(request, response) {
	//console.log(request.url);
		//Parametros guarda un JSON  con la peticion
	var parametros = url.parse(request.url,true).query;
	console.log(parametros);
	console.log(parametros.param1);
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('<h1>Titulo<h1/> ' );
	response.write(request.url);
	
	response.end('<br>Mi primer servidor en Node');
}).listen(8080);

console.log('Servidor ejecutandose en http://localhost:8080')