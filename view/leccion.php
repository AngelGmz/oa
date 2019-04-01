<div id="app">
    <div class="container">
        <div class="row mt-3">
            <div class="col-md-12">
                <h2>Avance</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-2">
                <a href="controller/cambioleccion.php?order=prev" class="btn btn-block btn-primary"><i class="fas fa-backward"></i> Anterior</a>
            </div>
            <div class="col-12 col-md-8">
                <div class="progress" style="min-height: 30px; height: 100%;">
                    <div class="progress-bar progress-bar-striped progress-bar-animated " role="progressbar" style="width: <?php echo(($_SESSION['leccion']*25).'%' );?>"></div>
                </div>
            </div>
            <div class="col-12 col-md-2">
                <a href="controller/cambioleccion.php?order=next"  class="btn btn-block btn-primary">Siguiente <i class="fas fa-forward"></i></a>
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
                <h3>{{ title }} {{completo}}</h3>
            </div>
        </div>

        <div class="row mt-2">
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
            <div class="col-md-8 col-12">
                <div class="card text-white  bg-primary mb-3">
                    <div class="card-header">Video</div>
                    <div class="card-body">
                        <iframe width="100%" height="315" :src="videoLink" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            
        </div>
        <!-- ACTIVIDAD INTERACTIVA -->
        <actividad-interaciva></actividad-interaciva>
        <!-- ACTIVIDAD INTERACTIVA -->
        <div class="row mt-2">
            <div class="col-md-12 ">
                <div class="card text-white bg-primary mb-3">
                    <div class="card-header">Cuestionario</div>
                    <div class="card-body text-dark bg-light">
                        <form id="frm_cuestion" @submit.prevent="submit">
                            
                            <div v-for="(pregunta, index) in preguntas" class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <legend>{{index+1+'. ' }} {{pregunta.pregunta}}</legend>
                                        <div class="custom-control custom-radio">
                                            <input required type="radio" v-on:input="validar(1,index)" v-bind:id="pregunta.res1" v-bind:name="index" value="1" class="custom-control-input" >
                                            <label class="custom-control-label" v-bind:for="pregunta.res1" >{{pregunta.res1}}</label>
                                        </div>
                                        <div class="custom-control custom-radio">
                                            <input required type="radio"  v-on:input="validar(2,index)" v-bind:id="pregunta.res2" v-bind:name="index" value="2" class="custom-control-input">
                                            <label class="custom-control-label" v-bind:for="pregunta.res2" >{{pregunta.res2}}</label>
                                        </div>
                                        <div class="custom-control custom-radio">
                                            <input required type="radio" v-on:input="validar(3,index)"  v-bind:id="pregunta.res3" v-bind:name="index" value="3" class="custom-control-input">
                                            <label class="custom-control-label" v-bind:for="pregunta.res3">{{pregunta.res3}}</label>
                                        </div>
                                        <div v-if="resArray[index] == true" class="alert alert-success" role="alert">
                                        ¡Excelente, Continúa así!
                                        </div>
                                        <div v-if="resArray[index] == false" class="alert alert-danger" role="alert">
                                        {{ pregunta.consejo }}
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