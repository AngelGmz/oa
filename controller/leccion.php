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
			$data["data"][] = $key;
		}
	}else{
		$data["data"] = array();
	}
	
	echo json_encode($data);
}


//obtener datos para formulario

if (isset($_GET['task'])) {
	switch ($_GET['task']) {
		case 'alta':
			echo($_POST['0']);	
			$control = 'correcto';
		//$control = $obj->alta($_POST);
			break;
		case 'editar':
				$control = $obj->editar($_POST);
			break;	
		case 'eliminar':
			
			$control = $obj->eliminar($_POST['id']);
	
			break;
		default:
			echo 'problema';
		break;
	}
	if ($control) {
		echo "correcto";
	}else{
		echo $control;
	}

}