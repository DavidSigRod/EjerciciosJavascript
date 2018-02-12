/*
	//Describe una frase:

	 	describe('', function(){
	 			//
	
			it('', function(){
				//Auí van las pruebas unitarias con 
				la sintaxis d jasmine. Funcionalidad a testear.
				
				expect

			})

	 	});

*/


describe('Functional module', function(){

	it(' calculate Fibonacci iterativo', function(){

			// expect ( mi funcion a testear ).operador( salida );
			expect(fibonacci(3)).toEqual(34);


	});

	/*it(' calculate Fibonacci recursively', function(){

			expect(fibonacciRecursivo(10)).toEqual(34);




	});*/
});