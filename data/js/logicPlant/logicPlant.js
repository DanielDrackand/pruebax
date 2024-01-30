//getHtml lo necesitamos para cosas concretas
import {getsHtml,imgs,namePlan,pesoPlanet,infoPlanet} from './../getHtml/getsHtml.js';

//usamos 'x' para saber que img de planeta mostrar
//se pude solucionar con un array de planetas
function namePlanet(x){
    getsHtml.name_planet.innerHTML = '<p>' + namePlan[x] +'</p>';
}
//funciones de bts
function next(){
    if(getsHtml.x < 7 ){
        getsHtml.x++
        getsHtml.planet.innerHTML = '<img src=" ' + imgs[getsHtml.x] + '" class="img-plant" alt="'+ namePlan[getsHtml.x]+'-img" >';
        namePlanet(getsHtml.x)
    }
}
function back(){
    if(getsHtml.x > 0 ){
        getsHtml.x--
        getsHtml.planet.innerHTML = '<img src=" ' + imgs[getsHtml.x] + '" class="img-plant" alt="'+ namePlan[getsHtml.x]+'-img" >';
        namePlanet(getsHtml.x)
        namePlanet(getsHtml.x)
    }
}
//calculo 
function calculo(){
    if(getsHtml.pesoUsuario.value == 0){
        getsHtml.result.innerHTML = '<p> Por favor escribe un número.</p>';
    }else{   
        let cal =  getsHtml.pesoUsuario.value * pesoPlanet[getsHtml.x]; 
        isNaN(cal)? getsHtml.result.innerHTML = '<p> El valor introducido,no es un número.</p>' :getsHtml.result.innerHTML = '<p> Tu peso en el planeta ' + namePlan[getsHtml.x] + ' sería: ' +parseFloat(cal.toFixed(2))+ ' kg </p>';
    }
}
//incertaremos en el html luego en effec lo iremos cambiando 
function showInfo(){
    let cont = 0;
    getsHtml.planetInfo.innerHTML = '<p>'+ infoPlanet[cont] +'</p>';
    setInterval(()=> {
        cont == 7 ? cont = 0 : cont++;
        getsHtml.planetInfo.innerHTML = '<p>' + infoPlanet[cont] + '</p>';
    },10000)
}
export { namePlanet, next, back, calculo,showInfo};



