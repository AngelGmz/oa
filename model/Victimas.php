<?php 
require_once 'Connection.php';


class Victimas extends Connection 
{	
	//query para obtener todo los campos
	public function getAll(){
		return $this->con->query("SELECT * from victima")->fetchAll(PDO::FETCH_ASSOC);
	}

	//query para dar de alta
	public function alta($data){
		$query = $this->con->prepare("INSERT INTO victima ( nombre, ap1, ap2, tipo, especifico, calle, num, col, cp, municipio, localidad, entidadF) values(?,?,?,?,?,?,?,?,?,?,?,?)");
		$exc = $query->execute(array($data['nombre'],$data['ap1'],$data['ap2'],$data['tipo'],$data['especifico'],$data['calle'],$data['num'],$data['col'],$data['cp'],$data['municipio'],$data['localidad'],$data['entidadF']));
		if ($exc) {
			return true;
		}else{
			return false;
		}
	}
	
	//query para editar 
	public function editar($data){
		$query = $this->con->prepare("UPDATE victima SET nombre=?, ap1=?, ap2=?, tipo=?, especifico=?, calle=?, num=?, col=?, cp=?, municipio=?, localidad=?, entidadF=? WHERE id=?");
		$exc = $query->execute(array($data['nombre'],$data['ap1'],$data['ap2'],$data['tipo'],$data['especifico'],$data['calle'],$data['num'],$data['col'],$data['cp'],$data['municipio'],$data['localidad'],$data['entidadF'],$data['id']));
		if ($exc) {
			return true;
		}else{
			return false;
		}
	}
	
	//query para dar de baja 
	public function eliminar($id){
		$query = $this->con->prepare("DELETE FROM victima WHERE id=?");
		$exc = $query->execute(array($id));
		if ($exc) {
			return true;
		}else{
			return false;
		}
	}
	//obtener datos extra

	
}