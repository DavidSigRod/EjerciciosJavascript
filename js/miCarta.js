
/*
Implementar con html y js un programa que muestre por consola 
del navegador una carta de presentación, con el siguiente formato EXACTO:

Mi nombre es <tu nombre>.
Nací el <día> del <mes> del <año>,
 así que tengo <años>.
*/




/* +++++++++++++INITIALIZE++++++++++++++++++ */

var myName= " David"; // Hardcoded (meter valores a "pelo")

var myDay= 5 ;

var myDayOutput = myDay;

var myMonth = 11;

var myMonthOutput = myMonth;

var myYear = 1989;

var myAge

var currentDate = new Date();
var currentYear= currentDate.getFullYear();
var currentMonth= currentDate.getMonth();
var currentDay= currentDate.getDay();

//Forma 1, días vividos//

var  birthday= new Date(1989,11,05);

var  today = new Date();

var diaNac = birthday.getDate();
var mesNac = birthday.getMonth();
var anioNac = birthday.getFullYear();

var myAge = today.getFullYear() - birthday.getFullYear();
var myTime = (today - birthday)/86400000;


//Forma 2, días vividos// 

var fecha1 = new Date('1989-11-5').getTime();
var fecha2 = new Date('2017-12-5').getTime();

var diff= fecha2 - fecha1;

/* Años bisisestos 

if ((yeart % 4 == 0) && ((yeart % 100)! = 0)|| ((yeart % 400) ==0)) 

else

*/

/* +++++++++++++ PROCESS ++++++++++++++++++ */

    if (myDay < 9) {
		myDayOutput = "0" + myDay;
	}

	if (myMonth < 9) {
		myMonthOutput = "0" + myMonth;
	}

	
	if (currentMonth > myMonth) {
		myAge = currentYear - myYear;
	}

	else{ 
	    if( currentMonth < myMonth) {
		  myAge = currentYear - myYear -1;
		  }
	        else{
	        	if (currentDay >= myDay) {
	        		myAge = currentYear - myYear;
	        	}
	        	  else {
                    myAge = currentYear - myYear -1;
	        	}
	        }

}
/* +++++++++++++ OUTPUT ++++++++++++++++++ */

console.log("Mi nombre es" + myName + ".");
console.log("Nací el " + myDayOutput + " del " + myMonthOutput + " del " + myYear + "," );
console.log("así que tengo " + (currentYear - myYear) + " años.");
console.log("He vivido " + myTime + " días."); //forma1//
console.log("He vivido " + (diff/(1000*60*60*24)) + " días.");//forma2//