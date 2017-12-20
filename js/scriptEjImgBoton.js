

/*var mySwitch = true; */



function toggle( mySwitch ) {

	

/*	var myCurrentFoto = document.getElementsByTagName("img")[0];*/

	var myTarget = document.getElementById("myBotton");
	var myTFoto1 = document.getElementById("myFoto1");

	


	
	
	// Si el INTERRUPTOR está apagado...
	if( mySwitch == true  )	
	{
		// ... encienda el INTERRUPTOR
		mySwitch = false;

		myTarget.style.backgroundColor = "darkred";
		// myTarget.style.opacity = "0.8";
		myTarget.innerHTML = "2";

		myTFoto1.src = "img/cheetah.jpg";
		
		
	}

	// Si no...
	else
	{
	  
	    // ... apague el INTERRUPTOR
	    mySwitch = true;
 

	    myTarget.style.backgroundColor = "darkgreen";
		myTarget.innerHTML = "1";

		myTFoto1.src = "img/cheetah1.jpg";

		
	}

	return;
}