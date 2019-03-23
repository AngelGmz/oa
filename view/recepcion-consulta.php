<div id="app">
    <div class="container">
        <div class="row">
            <div class="col-md-6 mt-3">
                <h2>Recepción - Consulta</h2>
            </div>
            <div class="col-md-6 mt-3 float-right">
                <a class="float-right" href="recepcion-datos.php"><button class="btn btn-primary"><i class="fas fa-user-plus"></i> Nueva Alta</button></a> 
            </div>
        </div>
        <div class="row  mt-4">
            <div class="col-md-12">
                <div class="table-responsive">
                    <table class="table" id="table1" data-order='[[ 0, "desc" ]]'>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Nombre(s)</th>
                                <th>Primer A.</th>
                                <th>Segundo A.</th>
                                <th>Tipo</th>
                                <th>Específico</th>
                                <th>Calle</th>
                                <th>No.</th>
                                <th>Colonia</th>
                                <th>CP.</th>
                                <th>Mnicipio</th>
                                <th>Localidad</th>
                                <th>entidadF</th>
                                <th>sello</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
        <form @submit.prevent="submit" action="">
        <div class="row">
            <div class="col-md-8"><input v-model="buscar" class="form-control" type="search"></div>
            <div class="col-md-4"><button class="btn btn-primary btn-block" type="submit"><i class="fas fa-search"></i> Buscar</button> </div>
        </div>
        </form>
        <div class="row mt-4">
            <div class="col-md-12">
                <div v-if="encontrado" class="card">
                    <div class="card-header">
                        Datos Generales
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <tr>
                                <th>Nombre</th>
                                <td>Lorem, ipsum dolor.</td>
                            </tr>
                            <tr>
                                <th>Domicilio</th>
                                <td>Lorem ipsum, dolor sit amet consectetur adipisicing.</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div v-else class="card">
                    <div class="card-header">
                        Datos Generales
                    </div>
                    <div class="card-body">
                        <p>No se encontraron coincidencias</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        Citas Programadas
                    </div>
                    <div class="card-body">
                        
                        <table v-if="encontrado" class="table">
                            <thead>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Unidad</th>
                                <th>Observación</th>
                                <th>Check-in</th>
                            </thead>
                            <tr>
                                <th>05/09/2019</th>
                                <th>8:45</th>
                                <td>Unidad de Genero</td>
                                <td>Sin observaciones</td>
                                <td><button class="btn btn-sm btn-primary"><i class="fas fa-user-check"></i> Registrar</button></td>
                            </tr>
                        
                        </table>
                        <p v-else >No tiene sitas programadas</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>