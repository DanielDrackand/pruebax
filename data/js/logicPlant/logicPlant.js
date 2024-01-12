//getHtml lo necesitamos para cosas concretas
import {getsHtml} from './../getHtml/getsHtml.js';

//
function NombrePlanetas(){
        switch(x){
            case 0  :   
            Nombre_planeta.innerHTML = '<p> Tierra </p>';
            break;
        
            case 1  :
            
            Nombre_planeta.innerHTML = '<p> Mercurio </p>';
            break;
    
            case 2  :
            
                Nombre_planeta.innerHTML = '<p> Venus </p>';
            break;
            case 3  :
            
            Nombre_planeta.innerHTML = '<p> Júpiter </p>';
            break;

            case 4  :
                Nombre_planeta.innerHTML = '<p> Marte </p>';
            break;
            case 5  :
            
            Nombre_planeta.innerHTML = '<p> Saturno </p>';
            break;
            case 6  :
            
            Nombre_planeta.innerHTML = '<p> Urano </p>';
            break;
            case 7 :
            
            Nombre_planeta.innerHTML = '<p> Neptuno </p>';
            break;            
    }       
}

//funciones de botones
function next(){
    if(x < 7 ){
        x++
        planeta.innerHTML = '<img src=" ' + img[x] + '">';
        NombrePlanetas()
    }
}
function back(){
    if(x > 0 ){
        x--
        planeta.innerHTML = '<img src=" ' + imgs[x] + '">';
        NombrePlanetas()
    }
}
//calculo 
function calculo(){
    if(getsHtml.peso_usuario.value == 0){
        getsHtml.resultado.innerHTML = '<p> por favor escribe un número</p>'
    }else{
        if(x == 0){
            resultado.innerHTML = '<p> tu peso en la Tierra es ' + peso_usuario.value + " kg" ;
        }if(x == 1){
            let i = peso_usuario.value * 3.7  * 1 / 9.81 ;
            resultado.innerHTML = '<p> tu peso en Mercurio sería ' + parseInt(i) + " kg";
        }if ( x == 2 ){
            let i = peso_usuario.value * 8.87 * 1 / 9.81;
            resultado.innerHTML = '<p> tu peso en Venus sería ' + parseInt(i) + " kg"; 
        }if(x == 3){
            let i = peso_usuario.value * 24.79 * 1 / 9.81;
            resultado.innerHTML = '<p> tu peso en Júpiter sería ' + parseInt(i) + " kg"; 
        }
        if(x == 4 ){
            let i = peso_usuario.value * 3.721 * 1 / 9.81;
            resultado.innerHTML = '<p> tu peso en Marte sería ' + parseInt(i) + " kg"; 
        }
        if(x == 5){
            let i = peso_usuario.value * 10.44 * 1 / 9.81;
            resultado.innerHTML = '<p> tu peso en Saturno sería ' + parseInt(i) + " kg"; 
        }
        if( x == 6){
            let i = peso_usuario.value * 8.87 * 1 / 9.81;
            resultado.innerHTML = '<p> tu peso en Urano sería ' + parseInt(i) + " kg"; 
        }
        if(x == 7){
            let i = peso_usuario.value * 11.15 * 1 / 9.81;
            resultado.innerHTML = '<p> tu peso en Neptuno sería ' + parseInt(i) + " kg"; 
        }
    }
}


export { NombrePlanetas, next, back, calculo};



