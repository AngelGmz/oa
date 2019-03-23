<?php
require_once('../model/Usuarios.php');
$obj = new Usuarios();
//genera el json para la tabla
if (isset($_GET['get'])) {
	session_start();
	$tabla = $obj->getAll();
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

if (isset($_POST['task'])) {
	switch ($_POST['task']) {
		case 'agregar':
			$control = $obj->alta($_POST);
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