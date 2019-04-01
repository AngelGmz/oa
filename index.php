<?php
if(session_status() == PHP_SESSION_NONE){
    
    session_start();
    session_destroy();
}

require 'view/layout/header.php'; 
require 'view/layout/nav.php'; 
require 'view/login.php'; 
require 'view/layout/footer.php'; 

?>
<script src="js/login.js"></script>