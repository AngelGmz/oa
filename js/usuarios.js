$(document).ready(function() {
    //actualizarNum();
  //  $("#tabla1").DataTable().fnDestroy();
  document.getElementById("navUs").classList.add("active"); 
  precarga();
});  

function precarga(){
    $.ajax({
        method: 'POST',
        url: 'controller/areas.php?get=1'
        
    }).done( function( data ){
        let obj = JSON.parse(data);
        $.each(obj.data, function(data){
            $("#area").append('<option value="'+obj.data[data].id+'">'+obj.data[data].nombreArea+'</option>');
        });
        
    });
}

function mostrarVentana()
{   
    $('#miVentana').modal("show");
    $('#task').val('agregar');
    $('#tituloModal').html('Agregar nuevo registro');
    

}

function ocultarVentana(e)
{
    e.preventDefault;
    var ventana = document.getElementById('miVentana');
    ventana.style.display = 'none';
}

 
    var table = $('#tabla1').DataTable( {
        ajax: 'controller/usuarios.php?get=1',
        //dom: '<"col-xs-12 text-center"B><"row"<"col-sm-6"l><"col-sm-6"fr>>t<"row"<"col-xs-12 text-center"p>><"row"<"col-xs-12 pull-"i>>',
        columns: [

           
            { data: 'id' },
            { data: 'nombreArea' },
			{ data: 'cargo' },
            { data: 'nombre' },
            { data: 'ap1' },
            { data: 'ap2' },
            { data: 'tel' },
            { data: 'ext' },
           
            { data: 'correo' },
            { data: 'fechaNac' },
            {
				data : 'tipo',
				render: function(data, type, row) {
                    switch (data) {
                        case '1':
                            return 'usuario';
                            break;
                        case '2':
                            return 'Admin';
                            break;
                        case '3':
                            return 'Jurídico';
                            break;
                    
                        default:
                            break;
                    }
          
				}
            },
            { defaultContent: '<button data-toggle="modal" data-target="#miVentana" class="editar btn btn-warning btn-sm"><i class="fa fa-edit"></i></button>  <button data-toggle="modal" data-target="#confirmar" class="eliminar btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>'},
            { data: 'contra' },
        ],
        dom: 'Bfrtip',
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            'pdfHtml5'
        ],
        destroy: true,
        "columnDefs": [
            {
                "targets": [ 12 ],
                "visible": false,
                "searchable": false
            },
      
        ]
    
    } );
    
    //archivos
    
    $('#frm').on('submit', function(e){
        e.preventDefault();
        var frm = new FormData($(this)[0]);
       
            $.ajax({
                method: 'POST',
                url: 'controller/usuarios.php',
                data: frm,
                contentType: false,
				processData: false
            }).done( function( info ){
                table.ajax.reload();
                toastr.success('Generado Correctamente');
                document.getElementById("frm").reset();
               
               $("#miVentana").modal("hide");
            });
        
       
    });


    $('#formEliminar').on('submit', function(e){
        e.preventDefault();
        var frm = $(this).serialize();
        $.ajax({
            method: 'POST',
            url: 'controller/usuarios.php',
            data: frm
        }).done( function( info ){
            $('#confirmar').modal('hide');
            table.ajax.reload();
            toastr.success('Eliminado Correctamente');
        });
    });   
    
    $('button.agregar').click(function(){
            $('#formGuardar')[0].reset();
            $('#accion').val('agregar');
            $('#tituloModal').html('Agregar nuevo registro');
    });
    
    $('#tabla1 tbody').on('click','button.editar', function(){
        var data = table.row( $(this).parents('tr') ).data();
        $('#tituloModal').html('Editando Datos de '+data.nombre); //editando titulo
        $('#task').val('editar');
        $('#id').val(data.id);
        $('#nombre').val(data.nombre);
        $('#ap1').val(data.ap1);
        $('#ap2').val(data.ap2);
        $('#area').val(data.area);
        $('#cargo').val(data.cargo);
        $('#tel').val(data.tel);
        $('#ext').val(data.ext);
        $('#fechaNac').val(data.fechaNac);
        $('#correo').val(data.correo);
        $('#contra').val(data.contra);
      
       
    });

    $('#tabla1 tbody').on('click','button.eliminar', function(){
		console.log('llegue aqui');
		var data = table.row( $(this).parents('tr') ).data();
        //$('#accion').val('eliminar');
        
        $('#formEliminar #idDel').val(data.id);

    });
    