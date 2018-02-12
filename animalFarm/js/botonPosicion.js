

 document.getElementById("posicion").addEventListener("click", function(){
	document.getElementById("muestra").innerHTML = localizacion();


function localizacion(){

	if (navigator.geolocation){
    document.getElementById("muestra").innerHTML = 
    "<p>Geolocation is not supported by your browser</p>";
    navigator.geolocation.getCurrentPosition(success)
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    var precision = position.coords.accuracy;
    var altitud = position.coords.altitude;
    var velocidad = position.coords.speed;

    document.getElementById("muestra").innerHTML = '<p>Latitude is ' 
    + latitude + '° <br>Longitude is ' + longitude + '°<br>' + precision 
    + '<br>' + altitud + '<br>' + velocidad + '</p>' ;

    }
};

});


/*var coordenadas = document.getElementById("muestra");
var boton = document.getElementById("posicion");

// Función para obtener localización

function obtenerlocalizacion (){
	// Comprobar si el navegador admite geo

	if (navigator.geolocation == true) {
	// Llamar a la funcion getCurrentPosition
		navigator.geolocation.getCurrentPosition(mostraPosicion)
	}

	else {
		coordenadas.innerHTML = "Tu navegador no admite geo"
	}

}

// Función para mostrar posición en el HTML

	function mostraPosicion (position) {
		coordenadas.innerHTML = "latitud: " + 
		position.coords.latitude + "<br> longitud" 
		+ position.coords.longitude;

	}

// Añadir el listener que capte cuando se haga click

boton.addEventListener("click", function())

document.getElementById("position")*/