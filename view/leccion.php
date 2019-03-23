<div id="app">
    <div class="container">
        <div class="row mt-3">
            <div class="col-md-12">
                <h2>Avance</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-2">
                <a href="" class="btn btn-block btn-primary"><i class="fas fa-backward"></i> Anterior</a>
            </div>
            <div class="col-12 col-md-8">
                <div class="progress" style="min-height: 30px; height: 100%;">
                    <div class="progress-bar progress-bar-striped progress-bar-animated " role="progressbar"
                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
                </div>
            </div>
            <div class="col-12 col-md-2">
                <a href="" class="btn btn-block btn-primary">Siguiente <i class="fas fa-forward"></i></a>
            </div>
        </div>
        <!--
        <div class="row">
            <div class="col-md-12">
                <div v-if="errors.length" class="alert alert-danger" role="alert">
                    <p>
                        <b>Corriga los siguientes Error(es): </b>
                        <ul>
                            <li v-for="error in errors">{{error}}</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
        -->
        <div class="row mt-3">

        </div>

        <div class="row mt-3">
            <div class="col-md-12">
                <h3>{{ title }}</h3>
            </div>
        </div>

        <div class="row mt-2">
            <div class="col-md-8 col-12">
                <div class="card text-white  bg-primary mb-3">
                    <div class="card-header">Video</div>
                    <div class="card-body">
                        <h4 class="card-title">nombre del vidio</h4>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/kqEfoD9XYHQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div class="col-md-4  col-12">
                <div class="card text-white bg-danger ">
                    <div class="card-header">Instrucciones</div>
                    <div class="card-body">
                        <h4 class="card-title">Lee con atención</h4>
                        <p class="card-text">Para poder pasar a la siguiente lección deberás:
                            <ol>
                                <li>Ver el video hasta el final</li>
                                <li>Iteractuar con la actividad</li>
                                <li>Resolver el cuestionario</li>
                                <li>Dar Clic en Guardar y Continuar</li>
                            </ol>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-md-12 ">
                <div class="card text-white bg-warning mb-3">
                    <div class="card-header">Actividad Interactiva</div>
                    <div class="card-body">
                            <h4 class="card-title">Funcionamiento de un algoritmo</h4>
                            <p class="card-text">Aquí podrás contralar y observar en tiempo real la ejecución de un algoritmo.</p>
                            
                            <div class="row">
                            <div class="col-md-4">
                                    <h5>Algoritmo</h5>
                                <table class="table bg-white">
                                    <tbody>
                                        <tr v-bind:class="active(1)">
                                                <td>1. INICIO</td>
                                        </tr>
                                        <tr v-bind:class="active(2)">
                                                <td>2. num1 = 5;</td>
                                        </tr>
                                        <tr v-bind:class="active(3)">
                                                <td>3. num2 = 6;</td>
                                        </tr>
                                        <tr v-bind:class="active(4)">
                                                <td>4. suma = 0;</td>
                                        </tr>
                                        <tr v-bind:class="active(5)">
                                                <td>5. suma = num1 + num2;</td>
                                        </tr>
                                        <tr v-bind:class="active(6)">
                                                <td>5. imprimir(suma);</td>
                                        </tr>
                                        <tr v-bind:class="active(7)">
                                                <td>7. FIN</td>
                                        </tr>
                                       
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md-4">
                                <h5>Internamente</h5>
                                <h5 class="bg-dark p-5">num: 0</h5>
                                <h5>Pantalla</h5>
                                <h5 class="bg-dark p-5">></h5>
                            </div>
                            <div class="col-md-4">
                                <h5>Controles</h5>
                                <button v-on:click="nivel -= 1" class="btn btn-lg btn-primary" ><i class="fas fa-step-backward" ></i></button>
                                <button class="btn btn-lg btn-primary" ><i class="fas fa-play"></i></button>
                                <button class="btn btn-lg btn-primary" ><i class="fas fa-pause"></i></button>
                                <button v-on:click="nivel += 1" class="btn btn-lg btn-primary" ><i class="fas fa-step-forward"  ></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-md-12 ">
                <div class="card text-white bg-primary mb-3">
                    <div class="card-header">Actividad Interactiva</div>
                    <div class="card-body text-dark bg-light">
                        <h4 class="card-title">Nombre de la actividad</h4>
                        <form @submit.prevent="submit">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <legend>1.0 ¿Cúal es la respuesta correcta?</legend>
                                        <div class="custom-control custom-radio">
                                            <input type="radio" id="customRadio1" name="customRadio"
                                                class="custom-control-input" checked="">
                                            <label class="custom-control-label" for="customRadio1">Toggle this custom
                                                radio</label>
                                        </div>
                                        <div class="custom-control custom-radio">
                                            <input type="radio" id="customRadio2" name="customRadio"
                                                class="custom-control-input">
                                            <label class="custom-control-label" for="customRadio2">Or toggle this other
                                                custom radio</label>
                                        </div>
                                        <div class="custom-control custom-radio">
                                            <input type="radio" id="customRadio2" name="customRadio"
                                                class="custom-control-input">
                                            <label class="custom-control-label" for="customRadio2">Or toggle this other
                                                custom radio</label>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" id="customRadio1" name="customRadio"
                                                class="custom-control-input" checked="">
                                            <label class="custom-control-label" for="customRadio1">Toggle this custom
                                                radio</label>
                                        </div>
                                        <div class="custom-control custom-radio">
                                            <input type="radio" id="customRadio2" name="customRadio"
                                                class="custom-control-input">
                                            <label class="custom-control-label" for="customRadio2">Or toggle this other
                                                custom radio</label>
                                        </div>
                                        <div class="custom-control custom-radio">
                                            <input type="radio" id="customRadio2" name="customRadio"
                                                class="custom-control-input">
                                            <label class="custom-control-label" for="customRadio2">Or toggle this other
                                                custom radio</label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-md-3"></div>
                                <div class="col-md-6">
                                    <button class="btn btn-primary btn-block" type="submit"><i class="fas fa-save"></i> Guardar y Continuar </button>
                                </div>
                                <div class="col-md-3"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>