
$ ( document ).ready( function() {

	$ ( "#miBoton" ).click( function() {
      
      console.log($ ( "#miLuz1" ).hasClass( "rojo" ) == false);

		if ($ ( "#miLuz1" ).hasClass( "rojo" ) == false && $ ( "#miLuz2" ).hasClass("ambar") == false && $ ( "#miLuz3" ).hasClass("verde") == false) 
		{
			
			$ ( "#miLuz3" ).addClass( "verde" );
			
			
		}

		else if ($ ( "#miLuz3" ).hasClass("verde") == true){ 

			
			$ ( "#miLuz3" ).removeClass( "verde" );
			$ ( "#miLuz2" ).addClass( "ambar");
		}

		else if ($ ( "#miLuz2" ).hasClass( "ambar") == true){

			$ ( "#miLuz2" ).removeClass( "ambar" );
			$ ( "#miLuz1" ).addClass( "rojo" );
			
		}

		else {

			$ ( "#miLuz1" ).removeClass( "rojo" );
			$ ( "#miLuz3" ).addClass( "verde" );

		}
	})

	

})