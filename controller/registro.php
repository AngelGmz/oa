<?php
require_once('../model/Registro.php');
$obj = new Registro();
//genera el json para la tabla

//obtener datos para formulario

if (isset($_GET['task'])) {
	switch ($_GET['task']) {
		case 'alta':
			$control = $obj->alta($_POST);
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