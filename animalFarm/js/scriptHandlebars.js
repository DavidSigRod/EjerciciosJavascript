/*

 // HANDLEBARS

console.log("asdfasf")

var template = "Hola, me llamo {{nombre}}. Vivo en {{Direccion}}.<br>{{CIF}}.<br><li>Mi número de teléfono:{{Telefono}}.</li><br>{{Email}}"


var comTemplate = Handlebars.compile(template);

var contexto = {
		nombre: "David",
		Direccion: "Calle agfasghagh",
		CIF: "54641644B",
		Telefono: 45646749,
		Email: "asfñahg@asf.sdf"
	};

var html = comTemplate(contexto);

$("#resultado").append(html);

*/


// HELPER

$(document).ready(function(){

var template = $('#plantilla').html();

var comTemplate = Handlebars.compile(template);

var datos = {
	"empresas" : [
	{"nombre":"Genertaion", "ciudad":"Madrid", "telefono": 911222125},
	{"nombre":"La Caixa", "ciudad":"Barcelona", "telefono": 981251412}
]};

Handlebars.registerHelper("queCiudad", function(telefono) {

	if (telefono < 979999999){
		return "estás en Madrid.";
	}

	else {
		return "estás en Barcelona.";
	}
});

Handlebars.registerHelper("checkNombre", function(data, options) {

	return options.fn(data);

});

var html = comTemplate(datos);

$(document.body).append(html);






});