
/*

function Cochino () {

	// Properties:

	//key  :  Valor,
	this.nombre : "", // String
	this.color : "", // String
	this.peso : 0, // Integer

	//Methods:
	Cochino : function() {
		this.nombre = "Babe";
		
	}

	getNombre : function() {
		return this.nombre;
	}


};

var myCochino = Cochino();

console.log( myCochino.getNombre() );

*/




function piezas() {
	
	this.color = "blanco";
	this.forma = "";

	function mover(){
		//casilla a casilla.
	};
	function comer(){
		//cuando la casilla esté ocupada por una pieza de otro color, eliminarla y ocupar su posición.
	};

}

var torre = new pieza();
torre.forma = "torre";
torre.mover(){
	//casillas en línea recta, sin límite.
}

var caballo = new pieza();
torre.forma = "caballo";
torre.mover(){
	//saltos en forma L.
}



function torre(){
		
	var forma = "torre";

	function mover(){
		//casillas en línea recta, sin límite.
	}
}

function caballo(){
	
	var forma ="caballo";

	function mover(){
		//saltos en forma L.
	}
}