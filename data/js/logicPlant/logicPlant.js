//getHtml lo necesitamos para cosas concretas
import {getsHtml,imgs, namePlan} from './../getHtml/getsHtml.js';

//usamos 'x' para saber que img de planeta mostrar
//se pude solucionar con un array de planetas
function namePlanet(x){
    getsHtml.name_planet.innerHTML = '<p>' + namePlan[x] +'<p>';
    console.log(x)
}
////funciones de bts
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
        getsHtml.result.innerHTML = '<p> por favor escribe un número</p>';
    }else{
        switch(getsHtml.x){ 
            case 0  :
                getsHtml.result.innerHTML = '<p> tu peso en la Tierra es ' + getsHtml.pesoUsuario.value + " kg" ;
            break;  
            case 1  :
                getsHtml.result.innerHTML = '<p> tu peso en Mercurio sería ' + parseInt( getsHtml.pesoUsuario.value * 3.7  * 1 / 9.81) + " kg";
            break; 
            case 2 :
                getsHtml.result.innerHTML = '<p> tu peso en Venus sería ' + parseInt(getsHtml.pesoUsuario.value * 8.87 * 1 / 9.81) + " kg";
            break; 
            case 3 :
                getsHtml.result.innerHTML = '<p> tu peso en Júpiter sería ' + parseInt(getsHtml.pesoUsuario.value * 24.79 * 1 / 9.81) + " kg";
            break; 
            case 4 :
                getsHtml.result.innerHTML = '<p> tu peso en Marte sería ' + parseInt(getsHtml.pesoUsuario.value * 3.72 * 1 / 9.81) + " kg";
            break; 
            case 5 :
                getsHtml.result.innerHTML = '<p> tu peso en Saturno sería ' + parseInt(getsHtml.pesoUsuario.value * 10.44 * 1 / 9.81) + " kg";
            break; 
            case 6 :
                getsHtml.result.innerHTML = '<p> tu peso en  Urano  sería ' + parseInt(getsHtml.pesoUsuario.value * 8.69 * 1 / 9.81) + " kg";
            break; 
            case 7 :
            getsHtml.result.innerHTML = '<p> tu peso en Neptuno  sería ' + parseInt(getsHtml.pesoUsuario.value * 11.15 * 1 / 9.81) + " kg";
            break;
    }
           
    }
}

export { namePlanet, next, back, calculo};



