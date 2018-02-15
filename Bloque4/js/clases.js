/*
//----------------- EJEMPLO CLASE-------------------------------
class Persona{

	//Construtor
	constructor(nombre,edad){
		this.nombre = nombre;
		this.edad = edad;
	}

	//Métodos
	getNombre(){
		return this.nombre;
	}
	setNombre(nombre){
		this.nombre = nombre;
	}
}

// Clase estudiante (hereda de persona)
class Estudiante extends Persona{

	constructor(nombre="Antonio",edad=80,id=25){
		//Llamar al constructor del padre
		// Primera linea siempre el constructor
		super(nombre,edad);
		// Nuevo parámetro
		this.id = id;
	}

	getId(){
		return this.id;
	}

	setId(id){
	    this.id;
	}

	// Sobreescribir un método del padre
	setNombre(nombre){
		this.nombre = `${nombre}`;
	}
}

// Instanciar objetos
var estudiante = new Estudiante("Pepe",25,1);
console.log(estudiante.getNombre());
console.log(estudiante.getId());

// Modificar nombre con metodo hijo
estudiante.setNombre('Hola');
console.log(estudiante.getNombre());

//Padre
var persona = new Persona("Pepe2",22);

console.log(persona.getNombre());

persona.setNombre('Hola2');
console.log(persona.getNombre());



// valores por defecto

var estudiante2 = new Estudiante(undefined,undefined,undefined);
console.log(estudiante2.getNombre());

*/

//--------------------------FIN EJEMPLO CLASE-------------------

//-------------------------EJERCICIO----------------------------

/* 

Crear una subclase bicicleta que extienda de la clase vehículo.
 La subclase bicicleta debe sobreescribir al constructor cambiando sus 
    valores por defecto.

 -Parámetros por defecto del constructor del vehículo:
        +Color = "Azul" 
        +Ruedas = 4
		+sonido = "beep beep"

 -Nuevos parámetro por defecto del constructor de bicicleta:
        +Ruedas = 2
		+sonido = "bip bip"


class Vehiculo {

	constructor(color="azul",ruedas=4,sonido="run run"){
		this.color = color;
		this.ruedas = ruedas;
		this.sonido = sonido;

	}

	//Métodos
	getColor(){
		return this.color;
	}
	setColor(color){
		this.color = color;
	}

	getRuedas(){
		return this.ruedas;
	}
	setRuedas(ruedas){
		this.ruedas = ruedas;
	}
	getSonido(){
		return this.sonido;
	}
	setSonido(ruedas){
		this.sonido = sonido;
	}



	tocarClaxon() {
		return this.sonido;
	}
}

class Bicicleta extends Vehiculo{

	constructor(color,ruedas=2,sonido="beep beep",id=1){

		super(color,ruedas,sonido);
		this.id = id;
	}
	getId(){
		return this.id;
	}

	setId(id){
	    this.id;
	}

	setColor(color){
		this.color = `${color}`;
	}

	
	setRuedas(ruedas){
		this.ruedas = ruedas;
	}

}

var bicicleta = new Bicicleta(undefined,undefined,"brrr brrrr",undefined);

console.log(bicicleta);
console.log(bicicleta.getColor());
console.log(bicicleta.getRuedas());
console.log(bicicleta.tocarClaxon());*/


