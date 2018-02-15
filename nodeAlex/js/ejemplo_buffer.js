// crear un buffer de datos
// Buffer de 20 octetos sin inicializar
// Reservo memoria de 256*8 = 2048 bits


var mi_buffer = new Buffer(30);

mi_buffer.write("Para cuando la pizza?");
console.log(mi_buffer.toString('ascii',0,8));

// Sacar los datos del Buffer en formato JSON

var mi_json = mi_buffer.toJSON(mi_buffer);

console.log(mi_json);

//Concatenar con otro buffer
var mi_buffer2 = new Buffer(100);
mi_buffer2.write(" Para mañana");
mi_buffer2.write(" Para mañana");
mi_buffer2.write(" Para mañana");
mi_buffer2.write(" Para mañana");

// Buffer concatenado
var buffer_concatenado = Buffer.concat([mi_buffer, mi_buffer2]);
console.log(buffer_concatenado.toString('utf-8'));

// Copiar Buffer

var copia_buffer = new Buffer(30);
mi_buffer.copy(copia_buffer);
console.log(copia_buffer.toString('utf-8'));

// Comparar bufferes
var comparacion = copia_buffer.compare(mi_buffer2);
console.log(comparacion);