var app = new Vue({
    el: '#app',
    data: {
      errors: [],
      nombre: null,
      correo: null,
      contra: null,
      contrar: '',
    },
    methods: {
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
        contraVal(){
            if(this.contra == this.contrar){
                return true;
            }else{
                return false;
            }
        },
        contraLength(){
            if(this.contra.length >= 6 && this.contrar.length >= 6){
                return true;
            }else{
                return false;
            }
        }
    },
  })