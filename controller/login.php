<?php 
require_once('../model/login.php');
$loginObj = new Login();



session_start();
$u = $_POST['usuario'];
$p = $_POST['contra'];
//variable control
$control=true;

$consulta = $loginObj->probarUsuario($u,$p);
if($consulta['correo']==$u AND $consulta['contra']==$p AND isset($_POST['usuario']) AND isset($_POST['contra']) ){

	$_SESSION['id']=$consulta['id'];
	$_SESSION['nombre']=$consulta['nombre'];
	$_SESSION['leccion']=1;

}else{
	echo "error";
}


?>