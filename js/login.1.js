$(document).ready(function() {
});
   
$('#frmLogin').on('submit', function(e){
    e.preventDefault();
    var frm = $(this).serialize();
    $.ajax({
        method: 'POST',
        url: "controller/login.php",
        data: frm,
        success: function(data){
            if(data == "error" ){
                toastr.error('Usuario o contraseña incorrectos');
            }else{
                //var obj = JSON.parse(data);
                //var tipo = obj.data[3];
                window.location = "muro.php";
                toastr.success('Iniciando Sessión');
            }
            
        }
    });
});
