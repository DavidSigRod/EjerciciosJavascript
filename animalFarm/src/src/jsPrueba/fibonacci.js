
/*
var resultado = 0;
var resAnterior = 0;
var resAnteriorCopia = 0;


for (var i=0; i<5; i++){

	if (i == 0) {

		resultado++;
	}

	else {

		resAnteriorCopia = resAnterior; //Guardo una copia del anterior
		resultado += resAnterior; //Actualizo mi nuevo resultado
		resAnterior = resAnteriorCopia; // Restauro la copia en el anterior
	}
}
*/




function fibonacci (paso) {
	// Paso base
	if ( paso == 0 ) // Paso base 0 
		return 0;
    else
    if ( paso == 1 ) // Paso base 1
    	return 1;
    else // Paso resursivo
    	return fibonacci(paso-1) + fibonacci(paso-2);
}