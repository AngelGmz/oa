

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
      num: 0,
      activeClass: null,
    },
    methods: {
        active(num){
            
                if(num == this.nivel){
                   return 'bg-dark text-white';
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
        
    }
  })
