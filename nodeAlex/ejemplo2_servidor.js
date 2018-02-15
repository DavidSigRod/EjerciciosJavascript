
var http = require('http');
var url = require('url');
var file = require('fs');

http.createServer( function(request, response) {
	//console.log(request.url);
		//Parametros guarda un JSON  con la peticion
	file.readFile('index.html', function(err, datos){
	
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('<h1>Escribiendo data del fichero<h1/> ' );
	response.write(datos);
	response.end('<br>Mi primer servidor en Node');


	});

}).listen(7000);

console.log('Servidor ejecutandose en http://localhost:7000')