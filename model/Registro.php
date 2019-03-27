<?php 
require_once 'Connection.php';
class Registro extends Connection 
{	
	//query para obtener todo los campos
	public function getAll(){
		return $this->con->query("SELECT usuario.*, area.nombreArea from usuario JOIN area where usuario.area = area.id order BY usuario.area ASC")->fetchAll(PDO::FETCH_ASSOC);
	}

	//query para dar de alta
	public function alta($data){
		$query = $this->con->prepare("INSERT INTO usuario (nombre, correo, contra) values(?,?,?)");
		$exc = $query->execute(array($data['nombre'],$data['correo'],$data['contra']));
		if ($exc) {
			return true;
		}else{
			return false;
		}
	}
	
}