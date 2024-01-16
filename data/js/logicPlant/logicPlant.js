//getHtml lo necesitamos para cosas concretas
import {getsHtml,imgs,namePlan,pesoPlanet} from './../getHtml/getsHtml.js';

//usamos 'x' para saber que img de planeta mostrar
//se pude solucionar con un array de planetas
function namePlanet(x){
    getsHtml.name_planet.innerHTML = '<p>' + namePlan[x] +'</p>';
}
//funciones de bts
function next(){
    if(getsHtml.x < 7 ){
        getsHtml.x++
        getsHtml.planet.innerHTML = '<img src=" ' + imgs[getsHtml.x] + '">';
        namePlanet(getsHtml.x)
    }
}
function back(){
    if(getsHtml.x > 0 ){
        getsHtml.x--
        getsHtml.planet.innerHTML = '<img src=" ' + imgs[getsHtml.x] + '">';
        namePlanet(getsHtml.x)
    }
}
//calculo 
function calculo(){
    if(getsHtml.pesoUsuario.value == 0){
        getsHtml.result.innerHTML = '<p> Por favor escribe un número .</p>';
    }else{   
        let cal =  getsHtml.pesoUsuario.value * pesoPlanet[getsHtml.x]; 
        getsHtml.result.innerHTML = "<p> Tu peso en el planeta " + namePlan[getsHtml.x] + " sería: "+parseFloat(cal.toFixed(2))+" kg </p>";
    }
}

export { namePlanet, next, back, calculo};



