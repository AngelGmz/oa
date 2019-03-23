var app = new Vue({
    el: '#app',
    data: {
      user: null,
      pwd: null,
      errors: []
    },
    methods: {
        submit(){
            this.errors = []
            if(this.user && this.pwd){
               
                var bodyFormData = new FormData();
                bodyFormData.set('usuario', this.user);
                bodyFormData.set('contra', this.pwd);
                window.location.href = "leccion.php"
                /*
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
                           this.errors.push("Usuario o contraseña incorrectos")
                       }else{
                            var notification = new Notification("Bienvenido Iniciando Sesión")
                            window.location.href = "recepcion.php";
                       }
                    })
                    .catch(function (response) {
                        //handle error
                        console.log(response);
                    });
                    */

             }
            else{
                if(!this.user) this.errors.push("Usuario es Obligatorio.")
                if(!this.pwd) this.errors.push("Contraseña es Obligatorio.")
            }
            
        }
    },
    computed: {
        acept(){
            if(this.user == '' || this.pwd == ''){
                return false;
            }else{
                return true;
            }
        }
    },
  })