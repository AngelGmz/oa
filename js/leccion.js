var inter;

var app = new Vue({
    el: '#app',
    data: {
      errors: [],
      title: '1.1 ¿Que es la Algoítmica?',
      actividad: null,
      completo: false,
      contrar: '',
      preguntas: [],
      respuestas: [],
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
    },
    methods: {
        next(){
            if(this.nivel <=6 ){
                this.nivel += 1;
            }else{
                window.clearInterval(inter);
            }
        },
        prev(){
            if(this.nivel >=2 ){
                this.nivel -= 1;
            }
        },
        play(){
            inter = setInterval(response =>{
                this.next();
            },1800)
        },
        pause(){
            window.clearInterval(inter);
        },
        active(num){
                if(num == this.nivel){
                   switch(num){
                        case 1:
                            this.pantalla = 'Iniciando Algoritmo...';
                            this.num = null;
                        break;
                        
                        case 2:
                             this.num = 5;
                             this.num2 = null;
                             this.suma = null;
                        break;
                        case 3:
                            this.num2 = 6;
                            this.suma = null;
                            break;
                        case 4:
                            this.suma = '0';
                        break;
                        case 5:
                            this.suma = this.num + this.num2;
                            this.pantalla2 = '';
                        break;
                        case 6:
                            this.pantalla2 = 'El resultado es: '+this.suma;
                            this.pantalla3 = '';
                        break;
                        case 7:
                            this.pantalla3 = 'Algoritmo Terminado.';
                        break;
                   }
                   return 'bg-dark text-white'
                }
        },
        submit(){
            this.errors = []
            if(this.nombre && this.correo && this.contra && this.contrar){
                if(!this.contraVal){
                   this.errors.push("Las contraseñas deben coincidir ")
                }else if ( !this.contraLength) {
                    this.errors.push("Las contraseñas deben contener al menos 6 caracteres")
                }else{
                    var bodyFormData = new FormData();
                    bodyFormData.set('nombre', this.nombre);
                    bodyFormData.set('correo', this.correo);
                    bodyFormData.set('contra', this.contra);
                /*    
                axios({
                        method: 'post',
                        url: 'controller/victimas.php?task=alta',
                        data: bodyFormData,
                        config: { headers: {'Content-Type': 'multipart/form-data' }}
                        })
                        .then(response => {
                            //handle success
                        if(response.data){
                            var notification = new Notification("Guardado correcto")

                            
                        }else{
                                var notification = new Notification("Error al Guardar")
                            }
                        })
                        .catch(function (response) {
                            //handle error
                            console.log(response);
                        });*/
                        window.location = 'index.php';
                }
                

                
             }
            else{
                if(!this.nombre) this.errors.push("Nombre es Obligatorio.")
                if(!this.correo) this.errors.push("Conrreo es Obligatorio.")
                if(!this.contra) this.errors.push("Contraseña es Obligatorio.")
                if(!this.contrar) this.errors.push("Repetir Contraseña es Obligatorio.")
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
