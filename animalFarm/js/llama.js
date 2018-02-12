
/*

// SIN FUNCION PURA

var encendido = 0;

function alternar() {

	// if (encendido == 1){	encendido = 0; 	}
	//else { 	encendido = 1; 	}

	 encendido = (encendido == 1) ? 0 : 1;
}

alternar();

// CON FUNCION PURA

var encendido = 0;

function alternar (estado){

	return (estado == 1) ? 0 : 1;

}

// Cambia el interruptor
encendido = alternar(encendido);

*/

// CLOSURES 

function Calculadora(num1, num2, operacion){

	var resultado = 0;

	function sumar() { // Closure
		resultado = num1 + num2;
	}

	function multiplicar() { // Closure
		resultado = num1 * num2;
	}

	function error(){ // Closure
		resultado = ("Aun no hemos implementado esa operación");
	}

	switch(operacion) {
		case "SUMAR":
		     sumar();
		     break;
		case "MULT":
		     multiplicar();
		     break;
		default:
		     error();
	}
}

console.log( Calculadora(2, 3, "SUMAR") );
console.log( Calculadora(2, 3, "MULT") );