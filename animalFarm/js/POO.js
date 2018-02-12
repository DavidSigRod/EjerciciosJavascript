

// Ejemplo de Sobrecarga (mismo método hace cosas ..
// ..distintas por tener diferentes parámetros).
// Le pedimos al usuario como quiere logarse..
// .... y ya lo sabemos (user+pass O CuentaFB).

var session = new Session();

if ( user+pass )
{
	session.login(user, pass);
}
else 
{
	session.login(fbObject);
}