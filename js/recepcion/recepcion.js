

var app = new Vue({
    el: '#app',
    data: {
      registro: null,
      buscar: null,
      datos: [],
      encontrado: false,
    },
    methods: {
        submit(){
            this.datos = []
            if(validar){
                var bodyFormData = new FormData();
                bodyFormData.set('usuario', this.user);
                bodyFormData.set('contra', this.pwd);
              let res =  axios({
                    method: 'post',
                    url: 'controller/login.php',
                    data: bodyFormData,
                    config: { headers: {'Content-Type': 'multipart/form-data' }}
                    })
                    .then(response => {
                        //handle success
                       if(response.data){
                           var notification = new Notification("Usuario o contraseña incorrectos")
                           this.datos.push("Usuario o contraseña incorrectos")
                       }else{
                            var notification = new Notification("Bienvenido Iniciando Sesión")
                            this.datos = ['No hay coinsidencias']
                       }
                    })
                    .catch(function (response) {
                        //handle error
                        console.log(response);
                    });
             }
            else{
                if(!this.user) this.errors.push("Usuario es Obligatorio.")
                if(!this.pwd) this.errors.push("Contraseña es Obligatorio.")
            }
            
        }
    },
    computed: {
        validar(){
            if(this.buscar){
                return true;
            }else{
                return false;
            }
        }
    },
  })