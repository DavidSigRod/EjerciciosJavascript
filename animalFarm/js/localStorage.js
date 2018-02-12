

var coches = {
	BMW : "Serie 5",
	Mercedes : "skl",
	Renault : "Laguna",
	Fiat : "Panda"
};

//function GrabarClaveSesion(clave) {
	document.getElementById("inputTemporal").addEventListener("click", function(){
	var valor = document.getElementById("inputTemporal").value;
    window.sessionStorage.setItem(coches, JSON.stringify(coches));

//}

//function LeerClaveSesion(clave) {
	var valor = window.sessionStorage.getItem(coches);

	//var valor = window.sessionStorage.getItem(JSON.parse(coches));
	//var valor = localStorage.getItem(coches);
	document.getElementById("valorTemporal").value = valor;

	//valorTemporal.innerHTML = "BMW: " + JSON.parse(coches).BMW;
//}

});

	document.getElementById("borrar").addEventListener("click", function(){
		document.getElementById("valorTemporal").innerHTML = "a";
	});