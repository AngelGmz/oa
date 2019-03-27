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

	//query para dar de alta
	public function alta($data){
		$query = $this->con->prepare("INSERT INTO usuario (nombre, correo, area, ap1, ap2,  contra, fechaNac, tipo, cargo, tel, ext) values(?,?,?,?,?,?,?,?,?,?,?)");
		$exc = $query->execute(array($data['nombre'],$data['correo'],$data['area'],$data['ap1'],$data['ap2'],$data['contra'],$data['fechaNac'],$data['tipo'],$data['cargo'],$data['tel'],$data['ext']));
		if ($exc) {
			return true;
		}else{
			return false;
		}
	}
	
	//query para editar 
	public function editar($data){
		$query = $this->con->prepare("UPDATE usuario SET nombre=?, correo=?, area=?, ap1=?, ap2=?,  contra=?, fechaNac=?, tipo=?, cargo=?, tel=?, ext=?  WHERE id=?");
		$exc = $query->execute(array($data['nombre'],$data['correo'],$data['area'],$data['ap1'],$data['ap2'],$data['contra'],$data['fechaNac'],$data['tipo'],$data['cargo'],$data['tel'],$data['ext'],$data['id']));
		if ($exc) {
			return true;
		}else{
			return false;
		}
	}
	
	//query para dar de baja 
	public function eliminar($id){
		$query = $this->con->prepare("DELETE FROM usuario WHERE id=?");
		$exc = $query->execute(array($id));
		if ($exc) {
			return true;
		}else{
			return false;
		}
	}
	//obtener datos extra

	
}