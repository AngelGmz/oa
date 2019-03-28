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
                        if(response.data){
                            var notification = new Notification("Guardado correcto")
                        }
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
