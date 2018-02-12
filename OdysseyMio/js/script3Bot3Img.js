

/* COn 3 imágenes
$ (document).ready( function(){

 

	$ ("#miBoton1").click( function(){


			$ ( "#miImagen1" ).removeClass( "noVisible" );
			$ ( "#miImagen1" ).addClass( "visible" );
			
		    $ ( "#miImagen2" ).addClass( "noVisible" );
		    
		    $ ( "#miImagen3" ).addClass( "noVisible" );
			

				
	})

	$ ("#miBoton2").click( function(){

			
			$ ( "#miImagen1" ).addClass( "noVisible" );
			$ ( "#miImagen2" ).removeClass( "noVisible" );
		    $ ( "#miImagen2" ).addClass( "visible" );
		    
		    $ ( "#miImagen3" ).addClass( "noVisible" );
			
				
	})

	$ ("#miBoton3").click( function(){

            
			$ ( "#miImagen1" ).addClass( "noVisible" );
			
		    $ ( "#miImagen2" ).addClass( "noVisible" );
		    $ ( "#miImagen3" ).removeClass( "noVisible" );
		    $ ( "#miImagen3" ).addClass( "visible" );
			
			
				
	})

}) */


$ (document).ready( function(){

 

	$ ("#miBoton1").click( function(){

			/* $ ( "#miImagen1" ).removeClass( "noVisible" );
			$ ( "#miImagen1" ).addClass( "visible" );
			
		    $ ( "#miImagen2" ).addClass( "noVisible" );
		    
		    $ ( "#miImagen3" ).addClass( "noVisible" ); */

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

	$ ("#miBoton2").click( function(){

			
			/*$ ( "#miImagen1" ).addClass( "noVisible" );
			$ ( "#miImagen2" ).removeClass( "noVisible" );
		    $ ( "#miImagen2" ).addClass( "visible" );
		    
		    $ ( "#miImagen3" ).addClass( "noVisible" );*/
			
				
	})

	$ ("#miBoton3").click( function(){

            
			/*$ ( "#miImagen1" ).addClass( "noVisible" );
			
		    $ ( "#miImagen2" ).addClass( "noVisible" );
		    $ ( "#miImagen3" ).removeClass( "noVisible" );
		    $ ( "#miImagen3" ).addClass( "visible" );*/
			
			
				
	})

})