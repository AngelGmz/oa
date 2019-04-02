<?php 
require_once 'Connection.php';
class Muro extends Connection 
{	
	//query para obtener todo los campos
	public function getAll(){
		return $this->con->query("SELECT usuario.id, sum(avance.cursado) as suma, usuario.nombre from avance JOIN usuario ON  avance.idUsuario = usuario.id group by usuario.id ORDER by suma desc")->fetchAll(PDO::FETCH_ASSOC);
	}


	
}