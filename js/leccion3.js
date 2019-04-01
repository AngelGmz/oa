var inter;

Vue.component('actividad-interaciva', {
    template: `
    <div class="row mt-2">
        <div class="col-md-12 ">
            <div class="card text-white bg-primary mb-3">
                <div class="card-header">Actividad Interactiva</div>
                    <div class="card-body">
                        <h4 class="card-title">Contador vs Acumulador</h4>
                        <p class="card-text">Aquí podrás probar diferentes valores de inicio y aumento para contador y acumulador y ver como aumentan.</p>
                        <div class="row text-center">
                            <div class="col-md-6">
                                <h5>CONTADOR</h5>
                                <div class="row mt-2">
                                    <div class="col-md-6">
                                        <label for="">Inicia en:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" v-model:value="i1" class="form-control">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-md-6">
                                        <label for="">Aumento de:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="number" v-model:value="a1" class="form-control">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-md-6">
                                        <label for="">Valor Actual:</label>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="" class="form-control">{{ r1 }}</label>
                                    </div>
                                </div>
                            
                            </div>
                            <div class="col-md-6">
                                    <h5>ACUMULADOR</h5>
                                    <div class="row mt-2">
                                        <div class="col-md-6">
                                            <label for="">Inicia en:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="number" v-model:value="i2" class="form-control">
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-6">
                                            <label for="">Aumento de:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="number" v-model:value="a2" class="form-control">
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-6">
                                            <label for="">Valor Actual:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="" class="form-control">{{r2}}</label>
                                        </div>
                                    </div>
                                    
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-3">
                            </div>
                            <div class="col-md-3">
                                <button class="btn btn-secondary  btn-block" v-on:click="avanzar"><i class="fas fa-plus"></i> Avanzar</button>
                            </div>
                            <div class="col-md-3">
                                <button class="btn btn-secondary  btn-block" v-on:click="reiniciar"> <i class="fas fa-redo-alt"></i> Reiniciar</button>         
                            </div>
                            <div class="col-md-3">
                                    </div      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    `,
    data() {
        return {
            i1: 0,
            a1: 1,
            r1: 0,
            i2: 0,
            a2: 7,
            r2: 0,
           
        }
    },
    methods: {
        avanzar(){
            this.r1 += parseFloat(this.a1);
            this.r2 += parseFloat(this.a2);
        },
        reiniciar(){
            this.i1 = 0
            this.a1= 1
            this.r1= 0
            this.i2= 0
            this.a2= 7
            this.r2= 0
        },

    },
    computed: {
      
    }
})


var app = new Vue({
    el: '#app',
    data: {
      errors: [],
      title: null,
      actividad: null,
      completo: false,
      contrar: '',
      preguntas: [],
      videoLink: null,
      res1: null,
      res2: null,
      res3: null,
      res4: null,
      res5: null,
      resArray: [null,null,null,null,null],
      
    },
    mounted() {
        window.addEventListener('load', () => {
            
            axios({
                method: 'get',
                url: 'controller/leccion.php?getLeccion=1',
                
                config: { headers: {'Content-Type': 'multipart/form-data' }}
                })
                .then(response => {
                    this.preguntas = response['data']
                    this.title = response['data'][0].nombre

                    this.videoLink = response['data'][0].linkVideo
                    let clave = 'https://www.youtube.com/embed/'
                    let subs = this.videoLink.substr(-11);
                    this.videoLink = clave+subs;

                    this.res1 = response['data'][0].correcta
                    this.res2 = response['data'][1].correcta
                    this.res3 = response['data'][2].correcta
                    this.res4 = response['data'][3].correcta
                    this.res5 = response['data'][4].correcta
                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
            });

               //obtener avance
               axios({
                method: 'get',
                url: 'controller/leccion.php?getAvance=1',

                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
                .then(response => {
                    let c = response['data'][0].cursado
                    if( c == 1 ){
                        this.completo = '[Leccion Completada]'
                    }
                    

                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                });
        })
    },
    methods: {
        validar(res, preg){
            
            switch (preg) {
                case 0:
                    if(this.res1 == res){
                        
                        this.$set(this.resArray, preg, true);
                    }else{
                        this.resArray[0] = false;
                        this.$set(this.resArray, preg, false);
                    }
                break;
                case 1:
                    if(this.res2 == res){
                        this.$set(this.resArray, preg, true);
                    }else{
                        this.$set(this.resArray, preg, false);
                    }
                    break;
                case 2:
                    if(this.res3 == res){
                        this.$set(this.resArray, preg, true);
                    }else{
                        this.$set(this.resArray, preg, false);
                    }
                    break;
                case 3:
                    if(this.res4 == res){
                        this.$set(this.resArray, preg, true);
                    }else{
                        this.$set(this.resArray, preg, false);
                    }
                    break;
                case 4:
                    if(this.res5 == res){
                        this.$set(this.resArray, preg, true);
                    }else{
                        this.$set(this.resArray, preg, false);
                    }
                    break;
            
                default:
                    break;
            }
        },
        submit(){
            
                     let formData = new FormData($('#frm_cuestion')[0]); 
                axios({
                        method: 'post',
                        url: 'controller/leccion.php?task=alta',
                        data: formData,
                        config: { headers: {'Content-Type': 'multipart/form-data' }}
                        })
                        .then(response => {
                            //handle success
                        
                            var notification = new Notification("Guardado correcto")
                            window.location.href = "controller/cambioleccion.php?order=next"
                        
                        })
                        .catch(function (response) {
                            //handle error
                            console.log(response);
                        });
                        //window.location = 'index.php';

        },
       
        
    },
    computed: {
        
    },
 
  })
