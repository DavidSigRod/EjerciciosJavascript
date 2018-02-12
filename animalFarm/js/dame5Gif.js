
/*$(document).ready(function(){

	for (var i = 0; i < 5; i++) {
		
	document.getElementById('dale').addEventListener("click", function(){

		var xhr = $.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC");
		xhr.done(function(response) { console.log("Pidiendo Gif...", response); 


		var giphyURL = response.data.image_url;
		
		function ponerGif(){
		var promesa = new Promise(function(resolve,reject){

			resolve(giphyURL);

			})

		promesa.then(function(giphyURL){})

		var img = $('<img id=ponerGif />');

		img.attr("src", giphyURL);
		img.addClass('.col3');
		img.appendTo('.bloquegif')

		console.log("Recibido el gif")

		}
 
//console.log(response.data.image_url, response)

		});

	});

}});
*/



$(document).ready(function(){

	document.getElementById('dale').addEventListener("click", function(){

		
			
		
for (var i = 0; i < 5; i++) {
		var promesa = new Promise(function(resolve, reject){

			var callGiphy = $.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC");
			callGiphy.done(function(response){
				console.log("Pidiendo Gif...", response);

			var giphyURL = response.data.image_url;

			resolve(giphyURL);
			})
		});

		promesa.then(function(giphyURL){
			
			var img = $('<img />');

				img.attr('src', giphyURL);
				img.addClass('.col3');
				img.appendTo('.bloquegif', console.log('cargando gif'))
				
			
		});
	  };
	});
})