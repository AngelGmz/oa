var app = new Vue({
    el: '#app',
    data: {
      lec: null,
      lec1: null,
      lec2: null,
      lec3: null,
      lec4: null,

    
      
    },
    mounted() {
        window.addEventListener('load', () => {
            
            axios({
                method: 'get',
                url: 'controller/leccion.php?getAllAvance=1',
                
                config: { headers: {'Content-Type': 'multipart/form-data' }}
                })
                .then(response => {
                   
                    this.lec1 = response['data'][0].cursado
                    this.lec2 = response['data'][1].cursado
                    this.lec3 = response['data'][2].cursado
                    this.lec4 = response['data'][3].cursado
                    
                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
            });
        })
    },
    
 
  })
