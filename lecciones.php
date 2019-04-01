<?php

require 'view/layout/header.php'; 
require 'view/layout/navbar.php'; 
require 'view/lecciones.php'; 
require 'view/layout/footer.php'; 
if(session_status() == PHP_SESSION_NONE){
    //session has not started
    session_start();
   
}
?>
<script src="js/lecciones.js"></script>
