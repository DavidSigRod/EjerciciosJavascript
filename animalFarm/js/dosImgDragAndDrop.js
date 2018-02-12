
/* 
   Eventos:

   		-dragstart
   		-dragover
   		-drop

   	Usar "listeners":

   		-element.addEVentListener("",
   		function(event)) {código a 
   		ejecutar});
*/

document.addEventListener("dragstart", function(event){
	event.dataTransfer.setData("text", event.target.id);
});

document.addEventListener("drop", function(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data)); 
});

document.addEventListener("dragover", function(event){
	event.preventDefault();
});

/*
// Drag
document.addEventListener("dragstart", function(event){
    event.dataTransfer.setData("text", event.target.id);
});
//Drop
document.addEventListener("drop", function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
});
//Permite Drop (quita los valores predefinidos que dicen q no puedes drop un elemento)
document.addEventListener("dragover", function(event){
    event.preventDefault();
});*/