<?php
//Preguntar si los valores existen
$oculto = ""; //inicializando la variable
$usuario = "";
$nombre = "";
$clave = "";
$tipo = "";


if (isset($_POST["txtOculto"]))//Si trae valores
{
		$oculto= $_POST["txtOculto"];
}

if (isset($_POST["txtUsuario"]))//Si trae valores
{
		$usuario= $_POST["txtUsuario"];
}

if (isset($_POST["txtNombre"]))//Si trae valores
{
		$nombre= $_POST["txtNombre"];
}

if (isset($_POST["txtClave"]))//Si trae valores
{
		$clave= $_POST["txtClave"];
}

if (isset($_POST["txtTipo"]))//Si trae valores
{
		$tipo= $_POST["txtTipo"];
}

function guardaUsuario ($usuario, $nombre, $clave, $tipo){
	//conectarse al servidor MySQL
	//mysql conexiòn
	$conexion = mysql_connect ("localhost","root","");
	//Seleccionamos la base de datos
	mysql_select_db("bd2163");
	$consulta = "insert into usuarios values('".$usuario."','".$nombre."','" .$clave."','".$tipo."')";
	//ejecutamos la consulta
	mysql_query($consulta);
	//Preguntamos si hubo insercion
	if (mysql_affected_rows() >0)
	{
		print "Registro guardado<br>"; 
		print "<a href='ejemplo.php'>Regresar</a>";
	}

	else
	{

		print "No se pudo guardar el registro";
	}

}

switch ($oculto) {
case 'guardaUsuario':
guardaUsuario($usuario, $nombre, $clave, $tipo);
break;

default:
# code...
break;

}


?>