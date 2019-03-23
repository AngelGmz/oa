var table = $('#table1').DataTable( {
    serverSide: false,
    ajax: 'controller/victimas.php?get=all',
    columnDefs: [   
    {
       "targets": 14,
       "orderable": false,
        "render": function ( data, type, row ) {
            return '<a href="#" class="yourClass">Edit</a>';

         }
        }
     ], //revisar botones de reportes
     dom: 'Bfrtip',
     buttons: [
        
        'excelHtml5',
    
    ],
} );