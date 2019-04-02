$(document).ready(function() {


});  


 
    var table = $('#tabla1').DataTable( {
        ajax: 'controller/muro.php?get=1',
        //dom: '<"col-xs-12 text-center"><"row"<"col-sm-6"l><"col-sm-6"fr>>t<"row"<"col-xs-12 text-center"p>><"row"<"col-xs-12 pull-"i>>',
        columns: [
            { data: 'nombre' },
            { data: 'suma' },
        ],
        dom: 'frtip',
        
        destroy: true,
        
    
    } );
    
    //archivos
   