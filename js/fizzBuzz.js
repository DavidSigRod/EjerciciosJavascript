

// Implementar un algoritmo que muestre por consola el resutlado de jugar a FizzBuzz hasta 100. //


                                        /* Forma 1 */


/* +++++++++++++++++INPUT+++++++++++++++ */

/*var numero;
var nuevNumero;*/


/* ++++++++++++++++PROCESS++++++++++++++++++ */

/*for(numero = 1; numero < 150; numero++){

	 if (numero % 105 == 0){
		nuevNumero = "FizzBuzzPumm";
	}


	else 
		if (numero % 15 == 0) {
		nuevNumero = "FizzBuzz";
	}

	else 
		if (numero % 3 == 0) {
		nuevNumero = "fizz"; 
	}

	else 
		if (numero % 5 == 0) {
		nuevNumero = "Buzz";
	}

	else 
		if (numero % 7 == 0){
		nuevNumero = "Pumm";
	}

	

	else {
		nuevNumero = numero;
	}

*/

/* ++++++++++++++++++OUTPUT++++++++++++++++ */

/*console.log(numero);
console.log(nuevNumero);

}*/



                                               /* Otra forma */
                                               /* Con Funciones */






/* +++++++++++++++++INPUT+++++++++++++++ */

/*var numero;
var nuevNumero; */


/* ++++++++++++++++PROCESS++++++++++++++++++ */



function prueba(){

	 if (numero % 105 == 0){
		nuevNumero = "FizzBuzzPumm";
	}


	else 
		if (numero % 15 == 0) {
		nuevNumero = "FizzBuzz";
	}

	else 
		if (numero % 3 == 0) {
		nuevNumero = "fizz"; 
	}

	else 
		if (numero % 5 == 0) {
		nuevNumero = "Buzz";
	}

	else 
		if (numero % 7 == 0){
		nuevNumero = "Pumm";
	}

	

	else {
		nuevNumero = numero;
	}

}

/* ++++++++++++++++++OUTPUT++++++++++++++++ */

for(var numero = 1; numero < 150; numero++){

	prueba();
	console.log(nuevNumero);
}


