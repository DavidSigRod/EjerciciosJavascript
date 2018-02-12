



// Funcioón para iniciar worker
function inciarWorker(){

	if (worker) {
	var worker = new Worker("workSec.js");

	// worker.addEventListener("message", function(event){})
	worker.onmessage = function (event){
				
		var y = event.data[0];
		var z = event.data[1];
		var w = event.data[2];
		var x = (y+z)*w;
		//Guardar resultado
		document.getElementById("resultado").innerHTML = x;

	}
	}
	else{
		document.getElementById("resultado").innerHTML = "error";
	}
}

document.getElementById("inicio").addEventListener("click", iniciarWorker());