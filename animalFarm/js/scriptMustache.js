
/*
 	Vista: variable que almacena un JSON:
 		-nombre
 		-dirección
 		-CIF
 		-Teléfono
 		-Email
 	Función para cargar datos:
 		function cargaDatos(){
			Mutache.render(plantilla, vista);
 		}

		Utilizar .html(datos) de jQuery

	Llamada a la funcion con jQuery.


*/

	
	var almacenar = {
		Nombre: "David",
		Direccion: "Calle agfasghagh",
		CIF: "54641644B",
		Telefono: 45646749,
		Email: "asfñahg@asf.sdf"
	};

	


$(document).ready(function(){

	var plantilla = "Nombre: {{Nombre}}<br> Direccion: {{Direccion}}<br> CIF: {{CIF}}<br> Telefono: {{Telefono}}<br> Email: {{Email}}"

	var rendered = Mustache.render(plantilla, almacenar);
		
	$("#datos").html(rendered);

	
	});