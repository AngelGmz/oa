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
	$_SESSION['tipo']=$consulta['tipo'];
	$_SESSION['ap1']=$consulta['ap1'];
	$_SESSION['ap2']=$consulta['ap2'];
	$_SESSION['area']=$consulta['area'];

	

}else{
	echo "error";
}


?>