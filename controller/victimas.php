<?php
require_once('../model/Victimas.php');
$obj = new Victimas();

//genera el json para la tabla
if (isset($_GET['get'])) {
	/*session_start();
	$tabla = $obj->getAll();
	if($tabla != false){
		foreach ($tabla as $key) {
			$data["data"][] = $key;
		}
	}else{
		$data["data"] = array();
	}
	
	echo json_encode($data);*/

	/*
		* DataTables example server-side processing script.
		*
		* Please note that this script is intentionally extremely simple to show how
		* server-side processing can be implemented, and probably shouldn't be used as
		* the basis for a large complex system. It is suitable for simple use cases as
		* for learning.
		*
		* See http://datatables.net/usage/server-side for full details on the server-
		* side processing requirements of DataTables.
		*
		* @license MIT - http://datatables.net/license_mit
		*/
		
		/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
		* Easy set variables
		*/
		
		// DB table to use
		$table = 'victima';
		
		// Table's primary key
		$primaryKey = 'id';
		
		// Array of database columns which should be read and sent back to DataTables.
		// The `db` parameter represents the column name in the database, while the `dt`
		// parameter represents the DataTables column identifier. In this case simple
		// indexes
		$columns = array(
			array( 'db' => 'id', 'dt' => 0 ),
			array( 'db' => 'nombre',  'dt' => 1 ),
			array( 'db' => 'ap1',   'dt' => 2 ),
			array( 'db' => 'ap2',     'dt' => 3 ),
			array( 'db' => 'tipo',     'dt' => 4 ),
			array( 'db' => 'especifico',     'dt' => 5 ),
			array( 'db' => 'calle',     'dt' => 6 ),
			array( 'db' => 'num',     'dt' => 7 ),
			array( 'db' => 'col',     'dt' => 8 ),
			array( 'db' => 'cp',     'dt' => 9 ),
			array( 'db' => 'municipio',     'dt' => 10 ),
			array( 'db' => 'localidad',     'dt' => 11 ),
			array( 'db' => 'entidadF',     'dt' => 12 ),
			array( 'db' => 'sello',     'dt' => 13 ),
		);
		
		// SQL server connection information
		$sql_details = array(
			'user' => 'root',
			'pass' => '',
			'db'   => 'ceeaiv',
			'host' => 'localhost'
		);
		
		
		/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
		* If you just want to use the basic configuration for DataTables with PHP
		* server-side, there is no need to edit below this line.
		*/
		
		require( 'ssp.class.php' );
		
		echo json_encode(
			SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns )
		);

}


if (isset($_GET['task'])) {
	switch ($_GET['task']) {
		case 'alta':
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
		
	}

}