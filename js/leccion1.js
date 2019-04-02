var inter;

Vue.component('actividad-interaciva', {
    template: `
    <div class="row mt-2">
        <div class="col-md-12 ">
            <div class="card text-white bg-primary mb-3">
                <div class="card-header">Actividad Interactiva</div>
                <div class="card-body">
                        <h4 class="card-title">Funcionamiento de un algoritmo "La suma de 2 numeros"</h4>
                        <p class="card-text">Aquí podrás contralar y observar en tiempo real la ejecución de un algoritmo.</p>
                        
                        <div class="row">
                        <div class="col-md-4">
                                <h5>Algoritmo</h5>
                            <table class="table bg-white">
                                <tbody>
                                    <tr id="lv1" data-toggle="popover" data-content="Se inicia el Algoritmo" v-bind:class="active(1)">
                                            <td   >1. INICIO</td>
                                    </tr>
                                    <tr id="lv2" data-toggle="popover" data-content="Se inicializa la variable num1 en 5" v-bind:class="active(2)">
                                            <td>2. num1 = 5;</td>
                                    </tr>
                                    <tr id="lv3" data-toggle="popover" data-content="Se inicializa la variable num2 en 6" v-bind:class="active(3)">
                                            <td>3. num2 = 6;</td>
                                    </tr>
                                    <tr id="lv4" data-toggle="popover" data-content="Se inicializa la variable suma en 0" v-bind:class="active(4)">
                                            <td>4. suma = 0;</td>
                                    </tr>
                                    <tr id="lv5" data-toggle="popover" data-content="A la variable suma se le asigna la operación num1 que vale 5 más num2 que vale 6, suma ahora vale 11" v-bind:class="active(5)">
                                            <td>5. suma = num1 + num2;</td>
                                    </tr>
                                    <tr id="lv6" data-toggle="popover" data-content="Se envia a la pantalla ''El resultado es:'' más suma que vale 11  " v-bind:class="active(6)">
                                            <td>6. Escribir( ' El resultado es: '+ suma );</td>
                                    </tr>
                                    <tr v-bind:class="active(7)">
                                            <td>7. FIN</td>
                                    </tr>
                                
                                </tbody>
                            </table>
                        </div>
                        <div class="col-md-3">
                            
                        </div>
                        <div class="col-md-5">
                            <h5>Controles</h5>
                            <button v-on:click="prev()" class="btn btn-lg btn-secondary" ><i class="fas fa-step-backward" ></i></button>
                            <button v-on:click="play()" class="btn btn-lg btn-secondary" ><i class="fas fa-play"></i></button>
                            <button v-on:click="pause()" class="btn btn-lg btn-secondary" ><i class="fas fa-pause"></i></button>
                            <button v-on:click="next()" class="btn btn-lg btn-secondary" ><i class="fas fa-step-forward"  ></i></button>
                            <br><br>
                            <h5>Internamente</h5>
                            <h5 class="bg-light text-dark p-3">{{outNum1}}<br>{{outNum2}}<br>{{outSuma}}</h5>
                            <h5>Pantalla</h5>
                            <h5 class="bg-light text-dark p-3">{{outPantalla}}<br>{{outPantalla2}}<br>{{outPantalla3}}<br></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    `,
    data() {
        return {
            nivel: 1,
            num: null,
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
        prev(){
            if(this.nivel >=2 ){
                this.nivel -= 1;
            }
        },
        play(){
            if(this.estado == 1){
                this.next();
            this.estado = 2
            inter = setInterval(response =>{
                this.next();
            },3500)
            }
            
        },
        pause(){
            window.clearInterval(inter);
            this.estado = 1
        },
        active(num){
                if(num == this.nivel){
                   switch(num){
                        case 1:
                            this.pantalla = 'Iniciando Algoritmo...';
                            this.num = null;
                            $('#lv2').popover('hide')
                        break;
                        
                        case 2:
                             this.num = 5;
                             this.num2 = null;
                             this.suma = null;
                             $('#lv1').popover('hide')
                             $('#lv2').popover('show')
                             $('#lv3').popover('hide')
                        break;
                        case 3:
                            this.num2 = 6;
                            this.suma = null;
                            $('#lv2').popover('hide')
                            $('#lv3').popover('show')
                            $('#lv4').popover('hide')
                            break;
                        case 4:
                            this.suma = '0';
                            $('#lv4').popover('show')
                            $('#lv3').popover('hide')
                            $('#lv5').popover('hide')
                        break;
                        case 5:
                            this.suma = this.num + this.num2;
                            this.pantalla2 = '';
                            $('#lv5').popover('show')
                            $('#lv4').popover('hide')
                            $('#lv6').popover('hide')
                        break;
                        case 6:
                            this.pantalla2 = 'El resultado es: '+this.suma;
                            this.pantalla3 = '';
                            $('#lv6').popover('show')
                            $('#lv5').popover('hide')
                        break;
                        case 7:
                            this.pantalla3 = 'Algoritmo Terminado.';
                            $('#lv6').popover('hide')
                            this.pause()
                        break;
                   }
                   return 'bg-dark text-white'
                }
        },
    },
    computed: {
        outNum1(){
            if(this.num){
                return 'num1: '+this.num;
            }else{
                return '';
            }
        },
        outNum2(){
            if(this.num2){
                return 'num2: '+this.num2;
            }else{
                return '';
            }
        },
        outSuma(){
            if(this.suma){
                return 'suma: '+this.suma;
            }else{
                return '';
            }
        },
        outPantalla(){
            if(this.pantalla){
                return '> '+this.pantalla;
            }else{
                return '';
            }
        },
        outPantalla2(){
            if(this.pantalla2){
                return '> '+this.pantalla2;
            }else{
                return '';
            }
        },
        outPantalla3(){
            if(this.pantalla3){
                return '> '+this.pantalla3;
            }else{
                return '';
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
