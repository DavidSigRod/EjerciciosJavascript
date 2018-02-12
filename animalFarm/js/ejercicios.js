
/* 
      Se pide implementar JS para pintar por consola:

1) Facorial (numero). Hacer el factorial de un número.

2) Gritar (número,letra). Pinta por consola la letra el doble del número
que pongamos.

3) multipop (lista, golpes). Quitar de la lista el número de golpes.

*/

/*
function factorial (numero) {

	if (numero == 0) {
		return 1;
	}
	else {
		if (numero !== 0) {
			return numero * factorial(numero-1) ;
		}
	}
};

console.log(factorial(4));
*/

/*
function gritar (numero, letra) {

	if (numero == 0) {
		return  "!!";
	}
	else 
		if (numero >= 1) {
		return (letra + letra) + gritar(numero-1, letra) ; 
					}
}

console.log(gritar(number,"C") );
*/


function multipop(lista, golpes) {

	if (golpes == 0){
		return lista;
	}
	else{
		if (golpes >= 1) {
			return lista.pop() + multipop(lista, golpes - 1);
		}
	}
}

console.log(multipop([1, 2, 3, 4, 5],4));