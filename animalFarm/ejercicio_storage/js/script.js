

var resultado = document.getElementById("resultado");
var datos = { 'one': 1, 'two': 2, 'three': 3 , 'four': 4};

// Poner los elementos del JSON en "localstorage"
localStorage.setItem('datos', JSON.stringify(datos));

// Recuperar los elementos del "Storage". Usar clave = 'datos'
var objetos_recuperados = localStorage.getItem('datos');

// Añadir listener para el evento "click"
document.getElementById("boton").addEventListener("click", function(){
	// Mostrar resultado en el HTML
	 resultado.innerHTML += "<br> one: "+JSON.parse(objetos_recuperados).one+"<br>";
	 resultado.innerHTML += "two: "+JSON.parse(objetos_recuperados).two+"<br>";
	 resultado.innerHTML += "three: "+JSON.parse(objetos_recuperados).three+"<br>";
	 resultado.innerHTML += "four: "+JSON.parse(objetos_recuperados).four+"<br>";

});