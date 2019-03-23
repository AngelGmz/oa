<?php 
require_once 'Connection.php';
class Login extends Connection 
{	
	public function probarUsuario($usuario, $contra){
		return $this->con->query("SELECT * FROM usuario WHERE correo LIKE '$usuario' AND  contra LIKE '$contra'")->fetch(PDO::FETCH_ASSOC);
	}

	
	public function array2Json($arreglo){
		foreach ($arreglo as $key) {
			$data["data"][] = $key;
		}
		echo json_encode($data);
	}
	
	
	public function getEventosActivos(){
		return $this->con->query("SELECT id FROM evento WHERE date(end) >= date(now()) ")->fetchAll(PDO::FETCH_ASSOC);
	}
	
	public function comprobarEvento($evento, $usuario){
		return $this->con->query("SELECT * FROM visto WHERE idEvento = $evento AND idUsuario = ".$usuario)->fetchAll(PDO::FETCH_ASSOC);
	}

	public function paseLista($evento,$usuario){
	
            $query = $this->con->prepare("INSERT INTO visto (idUsuario,idEvento) values (?,?)");
            $exc = $query->execute(array($usuario, $evento));
            if ($exc) {
                return true;
            } else {
                return false;
            }
    

	}

	//asistencias SELECT evento.*, visto.idUsuario, visto.status FROM evento JOIN visto on evento.id = visto.idEvento WHERE date(end) >= date(now()) AND visto.idUsuario = 1 

	//SELECT evento.*, visto.idUsuario, visto.status FROM evento left JOIN visto on evento.id = visto.idEvento WHERE date(end) >= date(now()) AND visto.idUsuario = 1 AND visto.idUsuario = NULL

}
?>