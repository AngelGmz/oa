<div id="app">
    <div class="container">
        <div class="row mt-3">
            <div class="col-md-12">
                <h2>Avance</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                            Selecciona una Lección
                    </div>
                    <div class="card-body">
                        <ul>
                            <li class="p-3"><span v-if="lec1 == 1">[Lección Completada]</span> 1.1 ¿Qué es la algorítmica? <a class="btn btn-primary" href="">Iniciar Lección</a> </li>
                            <li class="p-3"><span v-if="lec2 == 1">[Lección Completada]</span> 1.2 Tipos de datos <a class="btn btn-primary" href="">Iniciar Lección</a> </li>
                            <li class="p-3"><span v-if="lec3 == 1">[Lección Completada]</span> 1.3 Variables <a class="btn btn-primary" href="">Iniciar Lección</a> </li>
                            <li class="p-3"><span v-if="lec4 == 1">[Lección Completada]</span> 1.4 Estructuras de Control <a class="btn btn-primary" href="">Iniciar Lección</a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>