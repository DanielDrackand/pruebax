//Usaremos la ultima versión de javascript
"use strict";
//importaciones
//gets
import {getsHtml,imgs} from './getHtml/getsHtml.js';
//lógica del comportamioeto de los planetas
import {NombrePlanetas,next,back,calculo} from './logicPlant/logicPlant.js'
//loader
window.addEventListener('load',() => {
    setTimeout(()=>{
        getsHtml.conteiner.style.opacity = 0; 
        getsHtml.conteiner.style.opacity = 'hide';
    },4000)//duración del transition
    setTimeout(() => {
        getsHtml.conteiner.classList.remove('conteiner')
        getsHtml.conteiner.classList.add('x')
    },7000)//cuanto tardara en desaparecer el loader para que nos deje ocupar la página
    //la variable x nos ayudara a saber en que img estamos posicionados
    let x = 0;
    //img
    getsHtml.planeta.innerHTML = '<img src=" ' + imgs[0] + '">';
    getsHtml.Nombre_planeta.innerHTML = '<p> Tierra </p>';    
    //funciones globales
    function duracionResultado(){
        getsHtml.resultado.innerHTML= "";
    }
    setInterval(duracionResultado,6000);
    //no queremos que nuestro resultado este todo el rato ahí, con setIterval aremos que despues de x tipo desaparezca

//Con esta función estamos validando que el usuario haya introducido un número y no otro cararter
//eventos finales
getsHtml.boton_adelante.addEventListener("click",next)
getsHtml.boton_atras.addEventListener("click",back)
getsHtml.calcular.addEventListener("click" , calculo) 

})

