//getHtml lo necesitamos para cosas concretas
import {getsHtml,imgs} from './../getHtml/getsHtml.js';

//usamos 'x' para saber que img de planeta mostrar
function namePlanet(){
        switch(getsHtml.x){
            case 0:   
                 getsHtml.name_planet.innerHTML = '<p> Tierra </p>';
            break;
            case 1:    
                getsHtml.name_planet.innerHTML = '<p> Mercurio </p>';
            break;   
            case 2:
                getsHtml.name_planet.innerHTML = '<p> Venus </p>';
            break;
            case 3:
                getsHtml.name_planet.innerHTML = '<p> Júpiter </p>';
            break;
            case 4:
                getsHtml.name_planet.innerHTML = '<p> Marte </p>';
            break;
            case 5:
                getsHtml.name_planet.innerHTML = '<p> Saturno </p>';
            break;
            case 6:
                getsHtml.name_planet.innerHTML = '<p> Urano </p>';
            break;
            case 7:  
                getsHtml.name_planet.innerHTML = '<p> Neptuno </p>';
            break;            
    }       
}

//funciones de bts
function next(){
    if(getsHtml.x < 7 ){
        getsHtml.x++
        getsHtml.planet.innerHTML = '<img src=" ' + imgs[getsHtml.x] + '">';
        namePlanet()
    }
}
function back(){
    if(getsHtml.x > 0 ){
        getsHtml.x--
        getsHtml.planet.innerHTML = '<img src=" ' + imgs[getsHtml.x] + '">';
        namePlanet()
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



