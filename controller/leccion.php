<?php
require_once('../model/Leccion.php');
$obj = new Leccion();

//genera el json para la tabla
if (isset($_GET['getLeccion'])) {
	session_start();
	$tabla = $obj->getById($_SESSION['leccion']);
	if($tabla != false){
		foreach ($tabla as $key) {
			$data[] = $key;
		}
	}else{
		$data["data"] = array();
	}
	
	echo json_encode($data);
}
if (isset($_GET['getAvance'])) {
	session_start();
	$tabla = $obj->getCursadoById($_SESSION['leccion'],$_SESSION['id']);
	if($tabla != false){
		foreach ($tabla as $key) {
			$data[] = $key;
		}
	}else{
		$data["data"] = array();
	}
	
	echo json_encode($data);
}
if (isset($_GET['getAllAvance'])) {
	session_start();
	$tabla = $obj->getAllAvance($_SESSION['id']);
	if($tabla != false){
		foreach ($tabla as $key) {
			$data[] = $key;
		}
	}else{
		$data["data"] = array();
	}
	
	echo json_encode($data);
}


//obtener datos para formulario

if (isset($_GET['task'])) {
	session_start();
	$control = $obj->alta($_SESSION['leccion'],$_SESSION['id']);
		
	if ($control) {
		echo "correcto";
	}else{
		echo $control;
	}

}