var inter;

Vue.component('actividad-interaciva', {
    template: `
    <div class="row mt-2">
        <div class="col-md-12 ">
            <div class="card text-white bg-primary mb-3">
                <div class="card-header">Actividad Interactiva</div>
                    <div class="card-body">
                        <h4 class="card-title">Jugando con tipos de datos.</h4>
                        <p class="card-text">Puedes módificar los valores e ir probando las diferentes convinaciones entre tipos de datos.</p>
                        <div class="row">
                            <div class="col-md-12">
                                <table class="text-center">
                                    <tbody>
                                        <tr>
                                            <th>TEXTO</th>
                                            <th>Operación</th>
                                            <th>TEXTO</th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <th><input class="form-control" v-model:name="o1" type="text"></th>
                                            <th>+</th>
                                            <th><input class="form-control" v-model:name="o2" type="text"></th>
                                            <th> = </th>
                                            <th><span class="bg-light text-dark p-2">{{r1}}</span></th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <th>.</th>
                                        </tr>
                                        <tr>
                                            <th>NÚMERO</th>
                                            <th>Operación</th>
                                            <th>NÚMERO</th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <th><input class="form-control" v-model:name="o3" type="number"></th>
                                            <th>+</th>
                                            <th><input class="form-control" v-model:name="o4" type="number"></th>
                                            <th> = </th>
                                            <th><span class="bg-light text-dark p-2">{{r2}}</span></th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <th>.</th>
                                        </tr>
                                        <tr>
                                            <th>NÚMERO</th>
                                            <th>Operación</th>
                                            <th>TEXTO</th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <th><input class="form-control" v-model:name="o5" type="number"></th>
                                            <th>+</th>
                                            <th><input class="form-control" v-model:name="o6" type="text"></th>
                                            <th> = </th>
                                            <th><span class="bg-light text-dark p-2">{{r3}}</span></th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <th>.</th>
                                        </tr>
                                        <tr>
                                            <th>BOOLEANO</th>
                                            <th>Operación</th>
                                            <th>BOOLEANO</th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <th>
                                                <select  class="form-control" v-model:value="o7" >
                                                    <option value="true">Verdadero</option>
                                                    <option value="false">Falso</option>
                                                </select>
                                            </th>
                                            <th>Y</th>
                                            <th>
                                                <select  class="form-control" v-model:value="o8" >
                                                    <option value="true">Verdadero</option>
                                                    <option value="false">Falso</option>
                                                </select>
                                            </th>
                                            <th> = </th>
                                            <th><span class="bg-light text-dark p-2">{{r4}}</span></th>
                                            <th></th>
                                        </tr>
                                    </tbody>
                                </table>
                                <br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    `,
    data() {
        return {
            o1: '5',
            o2: '6',
            o3: 5,
            o4: 6,
            o5: 5,
            o6: 6,
            o7: true,
            o8: false,
            nivel: 1,
            num2: null,
            suma: null,
            activeClass: null,
            interno: null,
            pantalla: "Iniciando Algoritmo...",
            pantalla2: null,
            pantalla3: null,
            estado: 1,
        }
    },
    methods: {
        next(){
            if(this.nivel <=6 ){
                this.nivel += 1;
            }else{
                this.pause()
            }
        },

    },
    computed: {
        r1(){
            return this.o1 + this.o2;
        },
        r2(){
            return parseFloat(this.o3) + parseFloat(this.o4);
        },
        r3(){
            return parseFloat(this.o5) + String(this.o6);
        },
        r4(){
            if(this.o7 == 'true' && this.o8  == 'true'){
                return 'Verdadero';
           }else{
                return 'Falso';
           }
        },
        
    }
})


var app = new Vue({
    el: '#app',
    data: {
      errors: [],
      title: null,
      actividad: null,
      completo: '',
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
