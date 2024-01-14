//Usaremos la ultima versión de javascript
"use strict";
//importaciones
//gets
import {getsHtml,imgs,namePlan} from './getHtml/getsHtml.js';
//lógica del funciones y btons
import {namePlanet,next,back,calculo} from './logicPlant/logicPlant.js';
//animaciones 
import {loaderAnimation,resultHide} from './effect/effect.js';

//loader
window.addEventListener('load',() => {
    //animacion loader
    loaderAnimation();
    //img
    getsHtml.planet.innerHTML = '<img src=" ' + imgs[0] + '">';
       
    //btons
    getsHtml.btnNext.addEventListener('click',next)
    getsHtml.btnBack.addEventListener('click',back)
    getsHtml.calcular.addEventListener('click',calculo) 

})
namePlanet(getsHtml.x);
