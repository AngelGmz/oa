<?php 
session_start();
if ($_GET['order'] == 'next') {
    if($_SESSION['leccion'] <= 3){
        $_SESSION['leccion'] = $_SESSION['leccion'] + 1;
        header('Location: ../leccion.php'); 
    }else{
        header('Location: ../leccion.php'); 
    }
    
}else{
    if($_SESSION['leccion'] >= 2){
        $_SESSION['leccion'] = $_SESSION['leccion'] -1;
        header('Location: ../leccion.php'); 
    }else{
        header('Location: ../leccion.php'); 
    }
   
}

?>