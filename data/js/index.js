//Usaremos la ultima versión de javascript
"use strict";
//importaciones
//gets
import {getsHtml,imgs} from './getHtml/getsHtml.js';
//lógica del funciones y btons
import {namePlanet,next,back,calculo,resultHide} from './logicPlant/logicPlant.js';
//loader
window.addEventListener('load',() => {
    setTimeout(()=>{
        getsHtml.conteiner.style.opacity = 0; 
        getsHtml.conteiner.style.opacity = 0;
    },4000)//duración del transition
    setTimeout(() => {
        getsHtml.conteiner.classList.remove('conteiner')
        getsHtml.conteiner.remove();
    },7000)//cuanto tardara en desaparecer el loader para que nos deje ocupar la página
    //img
    getsHtml.planet.innerHTML = '<img src=" ' + imgs[0] + '">';
    getsHtml.Nombre_planeta.innerHTML = '<p> Tierra </p>';   
    //btons
    getsHtml.btnNext.addEventListener('click',next)
    getsHtml.btnBack.addEventListener('click',back)
    getsHtml.calcular.addEventListener('click',calculo) 

})

