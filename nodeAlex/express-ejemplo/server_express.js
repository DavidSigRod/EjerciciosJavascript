
// Módulo a utilizar:
var express = require('express');
var app = express();

//------------------------------------------------------------ Base de datos-------------------------

var mongo = require('mongodb');
//Cliente Mongo para interactuar con BDD
var mongo_client = mongo.MongoClient;
var url = "mongodb://user1:1234@ds233238.mlab.com:33238/db_mongo_ex";

// Conexion a la Base de Datos
mongo_client.connect(url, function(err, database) {
  if (err) throw err;
  console.log("Base de datos creada!!");
  

  // Rrepesenta la base de datos
  var dbo = database.db("db_mongo_ex");
  /*
  // Crear la tabla y dar nombre
  dbo.createCollection("clientes", function(err, res) {
    if (err) throw err;
    console.log("Tabla de clientes creada!");
    //database.close();
  }); Tiene que ir en otro js, que sera el encargado de crear las tablas
*/
  // Crear objeto JSON para insertar (solo 1)
  /*var usuario = { name: "Company Inc", address: "Highway 37" };

  dbo.collection("clientes").insertOne(usuario, function(err, res) {
    if (err) throw err;
    console.log("usuario insertado");
    database.close();
  });*/

  /*var usuarios = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ];
  // Insertar múltiple elementos en la BBDD
  dbo.collection("clientes").insertMany(usuarios, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    database.close();
  }); Una vez que hemos insertado en la bse de datos ya no nos hace falta
  */

  /*//Busca el primer elemento de la lista
  dbo.collection("clientes").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    database.close();
  });*/

  //devuelve valores de la BBDD

  //var query = {"name": /^M/, "address": "Valley 345"};
  //var orden = {name: -1}; //sort
  //var peticion = {};
  //var query_por_letra = {"name": /^V/};
  /*dbo.collection("clientes").find(peticion).limit(3).sort(orden).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    console.log(result[0].name);
    console.log(result[0].address);
    database.close();
  });*/

 // Borrar usuario
/*var peticion_borrar = {name: "Michael"};
  dbo.collection("clientes").deleteOne(peticion_borrar, function(err, obj) {
    if (err) throw err;
    console.log("Michael borrado");
    database.close();
  });*/

  // Borrar varios
/*var borrar_varios = {name: "Susan"};
  dbo.collection("clientes").deleteMany(borrar_varios, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    database.close();
  });*/
  
  
  //database.close();
//}); Ahora el cierre del connect lo llevamos al final

	//---------------------------------------------------- Manejo de peticiones GET:-----------------

	//app.get(path, callback);    ---> / representa el servidor en el qeu estamos (localhost:8080 = /)
	app.get("/",function(request, response){
		//response.end("Mi primer servidor express");
		//Con express __dirname+ te da la ruta completa hasta la raiz de tu proyecto.
		response.sendFile(__dirname+'/html/indexE.html');
		console.log(__dirname);
	});

	// Manejar petición get para otra ruta:

	app.get("/beta",function(request, response){
		//http://localhost:8080/beta?id=3&nombre=pepe
				//Con express __dirname+ te da la ruta completa hasta la raiz de tu proyecto.
		//response.write('cosas naxizS');
		//response.end("Petición GET para /beta");
		console.log("ID:"+request.query.id);
		console.log("nombre:"+request.query.nombre);
		response.write("ID:"+request.query.id);
		response.end(" nombre:"+request.query.nombre);
		console.log("Peticion GET para /beta");
	//});

// ------------------prueba BBDD-------------------
// Introducir datos en la BBDD
	var usuario = { name: request.query.nombre, address: request.query.address };

  dbo.collection("clientes").insertOne(usuario, function(err, res) {
    if (err) throw err;
    console.log("usuario insertado");
    database.close();
  });
});
//http://localhost:8080/beta?nombre=pepe&address=casa

//--------------------fin prueba BBDD-------------------------

	app.get("/beta2/:id/profile/:nombre",function(request, response){
			//http://localhost:8080/beta2/34/profile/antonio	
			// con 'params' guardamos lo que tengamos despues de :
			console.log(request.params);	
		response.write("ID:"+request.params.id);
		response.end(" nombre:"+request.params.nombre);
		console.log("Peticion GET para /beta");
	});

	//Redireccion
	app.get("/redireccion",function(request, response){
		response.redirect(302,"/");

	});

/*Ejemplo de middlewares (se utilizan para darle logica al 
paso intermedio entre los response y los request)*/
//first middleware before response is sent; el request ya esta hecho

app.use(function(request, response, next){
	console.log("start");
	next(); //next indica que no es el ultimo.
});

//Route handler
app.get("/middleware",function(request, response, next){
		response.send("Middle");
		next();
});

app.use("/middleware",function(request, response, next){
	console.log("end");
});

	//Escuchar en el puerto 8080;
	app.listen(8080,function(){
		console.log("escuchando en 8080.")
	});






	});