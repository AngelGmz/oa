var inter;

//-------

var waterfallCanvas;
var cascada;

var anim; 


//----------

Vue.component('actividad-interaciva', {
    template: `
    <div class="row mt-2">
        <div class="col-md-12 ">
            <div class="card text-white bg-primary mb-3">
                <div class="card-header">Actividad Interactiva</div>
                    <div class="card-body">
                        <h4 class="card-title">Reprecentando las Estructuras de control</h4>
                        <p class="card-text">Aqui podrás interactuar para entender el funcionamiento de las estrucuras de control.</p>
                        <div class="row">
                            <div class="col-md-12">
                                    <h4>Condicional simple: Si (if)</h4>
                                    <p>Cambia el resultado de la condición.</p>
                                    <div class="row ">
                                            
                                            <div class="col-md-6 text-center" >
                                                <div id="container1">
                                                    <canvas id="waterfall"></canvas>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <span class="texto"> Si(  
                                                    <select v-model="puerta" @change="algo">
                                                        <option value="1">Condición Verdadera</option>
                                                        <option value="0">Condición Falsa</option>
                                                    </select> )<br>
                                                    {<br>
                                                    abrirCompuerta(); <br>
                                                    }
                                                
                                                </span>
                                            </div>
                                    </div>
                            </div>
                        </div>
                        <hr>
                        <div class="row mt-3">
                            <div class="col-md-12">
                                    <h4>Condicional doble: Si Sino (if else)</h4>
                                    <p>Prueba con diferentes velocidades.</p>
                                    <div class="row ">
                                            <div class="col-md-6 text-center d-flex justify-content-center" >
                                                <table class="">
                                                    <tbody>
                                                        <tr>
                                                                <td></td>
                                                                <td></td>
                                                            <td v-if="nivel == 1" class="carretera"><img src="assets/images/car.png" alt=""></td>
                                                            <td v-else class="carretera">|</td>
                                                        </tr>
                                                        <tr>
                                                                <td></td>
                                                                <td></td>
                                                            <td v-if="nivel == 2" class="carretera"><img src="assets/images/car.png" alt=""></td>
                                                            <td v-else class="carretera">|</td>
                                                        </tr>
                                                        <tr>
                                                                <td></td>
                                                                <td></td>
                                                                <td v-if="nivel == 3" class="carretera"><img src="assets/images/car.png" alt=""></td>
                                                                <td v-else class="carretera">|</td>
                                                        </tr>
                                                        <tr>
                                                                <td>Carril LENTO</td>
                                                            <td v-if="nivel == 5 && vel <=100" class="c-izq"><img src="assets/images/car-izq.png" alt=""></td>
                                                            <td v-else class="c-izq">┌</td>
                                                            <td v-if="nivel == 4" class="c-cen"><img src="assets/images/car.png" alt=""></td>
                                                            <td v-else class="c-cen">┴</td>
                                                            <td v-if="nivel == 5 && vel > 100" class="c-der"><img src="assets/images/car-der.png" alt=""></td>
                                                            <td v-else  class="c-der">┐</td>
                                                            <td>Carril RÁPIDO</td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td v-if="nivel == 6 && vel <=100" class="carretera"><img src="assets/images/car.png" alt=""></td>
                                                            <td v-else  class="carretera">|</td>
                                                            <td></td>
                                                            <td v-if="nivel == 6 && vel > 100" class="carretera"><img src="assets/images/car.png" alt=""></td>
                                                            <td v-else  class="carretera">|</td>
                                                        </tr>
                                                        <tr>
                                                                <td></td>
                                                                <td v-if="nivel == 7 && vel <=100" class="carretera"><img src="assets/images/car.png" alt=""></td>
                                                                <td v-else  class="carretera">|</td>
                                                                <td></td>
                                                                <td v-if="nivel == 7 && vel > 100" class="carretera"><img src="assets/images/car.png" alt=""></td>
                                                                <td v-else  class="carretera">|</td>
                                                        </tr>
                                                        <tr>
                                                                <td></td>
                                                                <td v-if="nivel == 8 && vel <=100" class="carretera"><img src="assets/images/car.png" alt=""></td>
                                                                <td v-else  class="carretera">|</td>
                                                                <td></td>
                                                                <td v-if="nivel == 8 && vel > 100" class="carretera"><img src="assets/images/car.png" alt=""></td>
                                                                <td v-else  class="carretera">|</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="col-md-6">
                                               
                                                <div class="form-group">
                                                    <label for="formControlRange texto"> <span class="texto">Velocidad: {{vel}} </span></label>
                                                    <input type="range" v-bind:disabled="active == true" v-model:value="rvel" class="form-control-range" id="formControlRange">
                                                  </div>
                                                <span class="texto"> Si( velocidad > 100 )<br>
                                                    {<br>
                                                    usarCarrilRapido(); <br>
                                                    }<br>
                                                    Sino<br>
                                                    { <br>
                                                    usarCarrilLento(); <br>
                                                    }
                                                
                                                </span>
                                                <button @click="start" v-bind:disabled="active == true" class="btn btn-secondary btn-block">Probar</button>
                                            </div>
                                    </div>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-12">
                                <h4>Ciclos: Mientras (While)</h4>
                                <p>Aquí podras </p>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-md-6">
                                -
                            </div>
                            <div class="col-md-6 text-center">
                                <div class="d-flex justify-content-center">
                                        <div class="pila-top1 align-self-center"></div>
                                        
                                </div>
                                <div class="d-flex justify-content-center">
                                        <div class="pila-top align-self-center"></div>
                                        
                                </div>
                                <div class="d-flex justify-content-center">
                                        <div class="pila align-self-center"></div>
                                        
                                </div>
                                <div class="d-flex justify-content-center">
                                        <div class="pila align-self-center"></div>
                                        
                                </div>
                                <div class="d-flex justify-content-center">
                                        <div class="pila-bot align-self-center"></div>
                                        
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    `,
    mounted(){

       

         waterfallCanvas = function(c, cw, ch){
			
            var _this = this;
            this.c = c;
            this.ctx = c.getContext('2d');
            this.cw = cw;
            this.ch = ch;			
            
            this.particles = [];
            this.particleRate = 6;
            this.gravity = .15;
                            
        
            this.init = function(){				
                this.loop();
            };
            
            this.reset = function(){				
                this.ctx.clearRect(0,0,this.cw,this.ch);
                this.particles = [];
            };
                        
            this.rand = function(rMi, rMa){return ~~((Math.random()*(rMa-rMi+1))+rMi);};
            
            this.cerrar = function(){
                cancelAnimationFrame(anim);
                this.reset();
               
            }
        
            this.Particle = function(){
                var newWidth = _this.rand(1,20);
                var newHeight = _this.rand(1, 45);
                this.x = _this.rand(10+(newWidth/2), _this.cw-10-(newWidth/2));
                this.y = -newHeight;
                this.vx = 0;
                this.vy = 0;
                this.width = newWidth;
                this.height = newHeight;
                this.hue = _this.rand(200, 220);
                this.saturation = _this.rand(30, 60);
                this.lightness = _this.rand(30, 60);
            };
            
            this.Particle.prototype.update = function(i){
                this.vx += this.vx; 
                this.vy += _this.gravity;
                this.x += this.vx;
                this.y += this.vy;							
            };
            
            this.Particle.prototype.render = function(){			
                _this.ctx.strokeStyle = 'hsla('+this.hue+', '+this.saturation+'%, '+this.lightness+'%, .05)';
                _this.ctx.beginPath();
                _this.ctx.moveTo(this.x, this.y);
                _this.ctx.lineTo(this.x, this.y + this.height);
                _this.ctx.lineWidth = this.width/2;
                _this.ctx.lineCap = 'round';
                _this.ctx.stroke();
            };
            
            this.Particle.prototype.renderBubble = function(){				
                _this.ctx.fillStyle = 'hsla('+this.hue+', 40%, 40%, 1)';
                _this.ctx.fillStyle = 'hsla('+this.hue+', '+this.saturation+'%, '+this.lightness+'%, .3)';
                _this.ctx.beginPath();
                _this.ctx.arc(this.x+this.width/2, _this.ch-20-_this.rand(0,10), _this.rand(1,8), 0, Math.PI*2, false);
                _this.ctx.fill();
            };
                        
            this.createParticles = function(){
                var i = this.particleRate;
                while(i--){
                    this.particles.push(new this.Particle());
                }
            };
            
            this.removeParticles = function(){
                var i = this.particleRate;
                while(i--){
                    var p = this.particles[i];
                    if(p.y > _this.ch-20-p.height){
                        p.renderBubble();
                        _this.particles.splice(i, 1);
                    }	
                }
            };
                            
            this.updateParticles = function(){					
                var i = this.particles.length;						
                while(i--){
                    var p = this.particles[i];
                    p.update(i);											
                };						
            };
            
            this.renderParticles = function(){
                var i = this.particles.length;						
                while(i--){
                    var p = this.particles[i];
                    p.render();											
                };					
            };
            
            this.clearCanvas = function(){				
                this.ctx.globalCompositeOperation = 'destination-out';
                this.ctx.fillStyle = 'rgba(255,255,255,.06)';
                this.ctx.fillRect(0,0,this.cw,this.ch);
                this.ctx.globalCompositeOperation = 'lighter';
            };
            
            this.loop = function(){
                var loopIt = function(){					
                   anim = requestAnimationFrame(loopIt, _this.c);					
                        _this.clearCanvas();					
                        _this.createParticles();					
                        _this.updateParticles();					
                        _this.renderParticles();	
                        _this.removeParticles();
                };
                loopIt();					
            };
        
        };
        
        var isCanvasSupported = function(){
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
        };
        
        var setupRAF = function(){
            var lastTime = 0;
            var vendors = ['ms', 'moz', 'webkit', 'o'];
            for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x){
                window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
                window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
            };
            
            if(!window.requestAnimationFrame){
                window.requestAnimationFrame = function(callback, element){
                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };
            };
            
            if (!window.cancelAnimationFrame){
                window.cancelAnimationFrame = function(id){
                    clearTimeout(id);
                };
            };
        };			
        
        if(isCanvasSupported()){
            var c = document.getElementById('waterfall');
            var cw = c.width = 150;
            var ch = c.height = 140;	
            cascada = new waterfallCanvas(c, cw, ch);			  
            setupRAF();
        }
        
         
        
        
    },
    data() {
        return {
          puerta: 0, 
          nivel: 1,
          inter: null,
          active: false,
          rvel: 30,
        }
    },
    methods: {
        algo(){
            if(this.puerta == 1){
                cascada.init();
            }else{
                cascada.cerrar();
            }
        },
        level(n){
            this.nivel = n;
        },
        start(){
            this.active = true
            this.inter = setInterval(() => {
                this.nivel += 1
                if(this.nivel > 8 ){
                    clearInterval( this.inter)
                    this.nivel = 1
                    this.active = false
                }
            }, 300)
        },
      
    },
    computed: {
      vel(){
         return this.rvel*2
      }
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
        resArray: [null, null, null, null, null],

    },
    mounted() {
        window.addEventListener('load', () => {

            axios({
                method: 'get',
                url: 'controller/leccion.php?getLeccion=1',

                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
                .then(response => {
                    this.preguntas = response['data']
                    this.title = response['data'][0].nombre

                    this.videoLink = response['data'][0].linkVideo
                    let clave = 'https://www.youtube.com/embed/'
                    let subs = this.videoLink.substr(-11);
                    this.videoLink = clave + subs;

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
        validar(res, preg) {

            switch (preg) {
                case 0:
                    if (this.res1 == res) {

                        this.$set(this.resArray, preg, true);
                    } else {
                        this.resArray[0] = false;
                        this.$set(this.resArray, preg, false);
                    }
                    break;
                case 1:
                    if (this.res2 == res) {
                        this.$set(this.resArray, preg, true);
                    } else {
                        this.$set(this.resArray, preg, false);
                    }
                    break;
                case 2:
                    if (this.res3 == res) {
                        this.$set(this.resArray, preg, true);
                    } else {
                        this.$set(this.resArray, preg, false);
                    }
                    break;
                case 3:
                    if (this.res4 == res) {
                        this.$set(this.resArray, preg, true);
                    } else {
                        this.$set(this.resArray, preg, false);
                    }
                    break;
                case 4:
                    if (this.res5 == res) {
                        this.$set(this.resArray, preg, true);
                    } else {
                        this.$set(this.resArray, preg, false);
                    }
                    break;

                default:
                    break;
            }
        },
        submit() {

            let formData = new FormData($('#frm_cuestion')[0]);
            axios({
                method: 'post',
                url: 'controller/leccion.php?task=alta',
                data: formData,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
                .then(response => {
                    //handle success
                    if (response.data) {
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
