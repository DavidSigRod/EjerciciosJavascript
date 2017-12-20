

/* 
$( SELECTOR ).JFUNCION( PARAMETROS );

PARAMETROS:
	- Nada
	- Strings
	- Funciones anónimas, que actúan como respuesta al evento capturado (también llamadas "callbacks")
*/

// Cuando la pagina este lista (cuando el arbol este construido)
$( document ).ready( function() {


		

		

		$( "#myButton" ).click( function() {


			if( $( this ).hasClass( "enabledButton" ) == false ) // si estoy en OFF	
			{

			// 1) El propio botón se cambie el color y el contenido
			/*
			$( this ).css( "background-color" , "darkred" );
			$( this ).css( "border" , "1px solid grey" );
			*/
			$( this ).addClass( "enabledButton" );
			$( this ).html( "ON" );

			// 2) La imagen cambia su src
			$( "#myImage").attr("src", "img/vader.jpg");

			
			}

			else {
				// 1) El propio botón se cambie el color y el contenido
			$( this ).removeClass( "enabledButton" );
			$( this ).html( "OFF" );

			// 2) La imagen cambia su src
			$( "#myImage").attr("src", "img/luke.jpg");

			


			}

		});




/* ----------- INITIALIZE ------------- */

var mySwitch = 0;


function toggle() {

	var myTarget = document.getElementById("myBotton");

	// Si el INTERRUPTOR está apagado...

	if( mySwitch == 0 )	
	{
		// ... encienda el INTERRUPTOR
		mySwitch = 1;

		myTarget.style.backgroundColor = "darkgreen";
		// myTarget.style.opacity = "0.8";
		
	}

	// Si no...
	else
	{
	    // ... apague el INTERRUPTOR
	    mySwitch = 0;

	    myTarget.style.backgroundColor = "darkred";
		
	}
}

} ) ;