<div id="app">
    <div class="container">
        <div class="row mt-3">
            <div class="col-md-12">
                <h2>Introduce tus datos</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div v-if="errors.length" class="alert alert-danger" role="alert">
                <p >
                <b>Corriga los siguientes Error(es): </b>
                <ul>
                    <li v-for="error in errors">{{error}}</li>
                </ul>
            </p>
                </div>
          
            </div>
        </div>
        <form @submit.prevent="submit">
        <div class="row text-center ">
            <div class="col-md-6">
                <div class="form-grpup ">
                    <label  for="">Nombre*:</label>
                    <input v-model="nombre" type="text" autofocus class="form-control">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-grpup ">
                    <label for="">Correo Electrónico*:</label>
                    <input v-model="correo" style=" text-transform: lowercase;"  type="mail" class="form-control">
                </div>
            </div>
           
        </div>
        <div class="row text-center mt-3">
            <div class="form-grpup col-md-6">
                <label for="">Contraseña*:</label>
                <input v-model="contra" type="password" class="form-control">
            </div>
            <div class="form-grpup col-md-6">
                <label for="">Repetir Contraseña*:</label>
                <input v-model="contrar" type="password" class="form-control">
            </div>
        </div>
      
        <div class="row mt-4">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <button class="btn btn-primary btn-block" type="submit"><i class="fas fa-save"></i> Registrar</button>
            </div>
            <div class="col-md-3"></div>
        </div>
    </form>
    </div>
</div>