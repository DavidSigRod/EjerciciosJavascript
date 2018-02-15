// Declarar el modulo
var file = require("fs");
// Para guardar datos
var datos_guardados = '';
// Crear stream de lecura
var stream_lectura = file.createReadStream('../html/index2.html');

//Manejar eventos del stream. Evento para cuando hay datos
stream_lectura.on('data', function(caracter) {
	datos_guardados += caracter;
	console.log(caracter);
});

//Manejar evento terminar de leer el stream
stream_lectura.on('end', function() {
	console.log(datos_guardados);
	console.log('Fin lectura fichero.');
});

//Cuando se abra el documento
stream_lectura.on('open', function() {
	console.log('Abierto fichero.');
});

//Manejar evento error en el stream
stream_lectura.on('error', function(err) {
	console.log(err.stack);
});

console.log('He terminado TODO.');