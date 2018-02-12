var resultados = document.getElementById("resultado");
var datos = { 'one': 1, 'two': 2, 'three': 3 , 'four': 4};
//Guardar los elementos del JSON en "localstorage"
//setItem(clave, valor)
var password = "password"; 
localStorage.setItem(password,JSON.stringify(datos));

//Recuperar los elementos del "Storage"(es un string) 
var datos_recuperados = localStorage.getItem(password);

//Añadir listener para el evento "click"

document.getElementById("boton").addEventListener("click", function(){

resultado.innerHTML = "one: "+JSON.parse(datos_recuperados).one;
resultado.innerHTML = "one: "+JSON.parse(datos_recuperados).two;



});