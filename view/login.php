<div id="app">
    <div class="container full-h mt-5">
        <div class="row text-center">
            <div class="col-md-12">
           
            </div>
        </div>
        <div class="row text-center d-flex mt-3">
            <div class="col-md-6 mb-3 text-center align-middle">
                    <div class="card ">
                            <div class="card-header">
                                    <h2>Iniciar Sesión</h2>
                            </div>
                            <div class="card-body">
                                    <form @submit.prevent="submit" action="">
                                            <div v-if="errors.length" class="alert alert-danger" role="alert">
                                                    <p >
                                                    <b>Corriga los siguientes Error(es): </b>
                                                    <ul>
                                                        <li v-for="error in errors">{{error}}</li>
                                                    </ul>
                                                </p>
                                            </div>
                                            <div class="form-group">
                                                <label for="">Correo:</label>
                                                <input class="form-control" v-model="user">
                                            </div>
                                            <div class="form-group">
                                                <label for="">Contraseña:</label>
                                                <input type="password" class="form-control" v-model="pwd">
                                            </div>
                                            <input class="btn btn-primary btn-block" type="submit" value="Entrar">
                                        </form>
                            </div>
                        </div>
                
            </div>
            <div class="col-md-6">
                    <div class="card ">
                            <div class="card-header">
                                    <h3>Bienvenido a "Introducción a Algorítmica"</h3>
                            </div>
                            <div class="card-body">
                                    <blockquote class="blockquote">
                                            <p class="mb-0">Aquí aprenderas las bases de la algoritmica, que te permitirá tener un mejor desempeño en tu camino a convertirte en Programador.</p>
                                            <footer class="blockquote-footer">Angel Gómez </footer>
                                          </blockquote>
                                    <p class="font-weight-bolder"></p>
                                    <p>*Cuando el navegador te pregunta si quieres permitir notificaciones, porfavor preciona "Permitir".</p>
                                    <hr>
                                    <div class="row">
                                        <div class="col-md-6">
                                                <h5>¿No tienes cuenta?</h5>
                                                <a href="registro.php" class="btn btn-block btn-secondary">¡Registrarme!</a><br><br>
                                        </div>
                                        <div class="col-md-6">
                                                <h5>¿Ya completaste el curso?</h5>
                                                <a href="" class="btn btn-block btn-success">Muro del Conocimiento 8)</a>
                                        </div>
                                    </div>
                            </div>
                        </div>
            </div>
        </div>
    </div>
</div>