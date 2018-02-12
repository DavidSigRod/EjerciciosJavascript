



document.getElementById("retroceder").addEventListener("click", function(){
		window.history.back();
	} );


document.getElementById("avanzar").addEventListener("click", function(){
	window.history.forward();
});

document.getElementById("retr3").addEventListener("click", function(){
	window.history.go(-3);
});