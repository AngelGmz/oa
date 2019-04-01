<?php 
require_once 'Connection.php';
class Leccion extends Connection 
{	
	//query para obtener todo los campos
	public function getById($id){
		return $this->con->query("SELECT * from leccion JOIN pregunta ON leccion.id = pregunta.idLeccion WHERE leccion.id = '$id'")->fetchAll(PDO::FETCH_ASSOC);
	}

	public function getCursadoById($lec,$id){
		return $this->con->query("SELECT * from avance WHERE idUsuario = '$id' and idLeccion = '$lec'")->fetchAll(PDO::FETCH_ASSOC);
	}

	public function getAllAvance($id){
		return $this->con->query("SELECT * from avance WHERE idUsuario = '$id'")->fetchAll(PDO::FETCH_ASSOC);
	}

	//query para editar 
	public function alta($lec, $id){
		$query = $this->con->prepare("UPDATE avance SET cursado=1  WHERE idUsuario=? AND idLeccion=?");
		$exc = $query->execute(array($id, $lec));
		if ($exc) {
			return true;
		}else{
			return false;
		}
	}
	
	

	
}