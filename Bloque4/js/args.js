console.log('fgagg');

/*
function promedio(a,b,...args) {
	
let resultado = a+b;
	for (const i of args){
		resultado += i;
	}



	return resultado/arguments.length;

}

var args = [1,2,3];
console.log(promedio(...args));
*/


//Funcion promedio

/*function promedio(...avrg_values){

let suma = 0;
let average = 0;

	
	if(avrg_values>0){	
		for(const numero_actual of avrg_values){

			suma += numero_actual;
		};

		average = suma/avrg_values.length;
	};

	return average;

};

//console.log('promedio(1)');
var args = [1,1,1,1]; //1
console.log(promedio(...args));

*/
/*
console.log('promedio(2)');
var args2 = [2,2,2,2]; //2
console.log(promedio(...args2));

console.log('promedio(3)');
var args3 = [3,3,3,3]; // 3
console.log(promedio(...args3)*/



//-------------------YIELD--------

	function* dameEmpleado(){

		const empleados = ["pepe", "antonio", "pilar"];

		for (const nombre of empleados){
			//console.log(nombre);
			yield nombre;
		}
		console.log("He terminado.");
	}


/*
let result = generaEmpleado.next();

console.log(result);

result = generaEmpleado.next();
console.log(result);*/

function iterar(){

	const generaEmpleado = dameEmpleado();


	let result = generaEmpleado.next();
	let condicion = result.done;
	console.log(result);

	while(condicion == false ){
		result = generaEmpleado.next();
		condicion = result.done;
		if (result.value != undefined)
		console.log(result);
	}
}

iterar();


function* introduceDatos(){

	let datos = [];
		datos.push(yield);
console.log(datos);
		datos.push(yield);
		console.log(datos);
		datos.push(yield);
console.log(datos);
		
}

let introduce_datos = introduceDatos();

introduce_datos.next();
introduce_datos.next("hola");
introduce_datos.next("que");
introduce_datos.next("takl??");



// Objeto SET (conjunto de elementos)

let juegos = new Set(['Super Mario','Tekken','Mario Kart']);
console.log(juegos);

juegos.add('Tetris');
console.log(juegos);

juegos.delete('Super Mario');
console.log(juegos);

for(el_juego of juegos){
	console.log(el_juego);
}


var iterador = juegos.values();
console.log(iterador);
console.log(iterador.next());
console.log(iterador.next());

let persona1 = {nombre:'Pepe', edad:22};
let persona2 = {nombre:'Luis', edad:23};

let personas =new WeakSet([persona1, persona2]);
console.log(personas);

let personas3 = {nombre:'Mar', edad:22};
personas.add(personas3);

personas = null;
console.log(personas);

let mi_map = new Map();

	mi_map.set('Luis',3);
	mi_map.set('Arturo',3);
	mi_map.set('Laura',3);

	console.log(mi_map);