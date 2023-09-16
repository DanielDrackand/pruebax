//Usaremos la ultima versión de javascript
"use strict";
//loader
window.addEventListener('load',() => {
    const conteiner = document.querySelector('.conteiner')
    setTimeout(()=>{
        conteiner.style.opacity = 0 
        conteiner.style.opacity = 'hide'
    },4000)//duración del transition
    setTimeout(() => {
        conteiner.classList.remove('conteiner')
        conteiner.classList.add('x')
    },7000)//cuanto tardara en desaparecer el loader para que nos deje ocupar la página
})

//encerramos las imagenes en string.
//cuando se elija determinada imagen arriba del peso del usuario    
let img = ["data/index/img/tierra.jpeg","data/index/img/mercurio.jpeg","data/index/img/venus.jpeg","data/index/img/jupiter.jpeg",
            "data/index/img/marte.jpeg","data/index/img/saturno.jpeg","data/index/img/urano.jpeg","data/index/img/neptuno.jpeg" ];
//planeta
let planeta = document.querySelector(".planetas")
//lamada al input
let peso_usuario = document.querySelector(".peso_usuario");
let calcular = document.querySelector(".calcular");
let resultado = document.querySelector(".resultado");
//lamada a los botones de la img
let boton_atras = document.querySelector(".atras");
let boton_adelante = document.querySelector(".adelante");
//nombre  planeta
let Nombre_planeta  =  document.querySelector(".Nombre_planeta")
//la variable x nos ayudara a saber en que img estamos posicionados
let x = 0;
//img
planeta.innerHTML = '<img src=" ' + img[0] + '">';
Nombre_planeta.innerHTML = '<p> Tierra </p>';
//funciones globales
function duracionResultado(){
    resultado.innerHTML= "";
}
setInterval(duracionResultado,6000);
//no queremos que nuestro resultado este todo el rato ahí, con setIterval aremos que despues de x tipo desaparezca
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
function cambiar_foto_delante(){
    if(x < 7 ){
        x++
        planeta.innerHTML = '<img src=" ' + img[x] + '">';
        NombrePlanetas()
    }
}
function cambiar_foto_atras(){
    if(x > 0 ){
        x--
        planeta.innerHTML = '<img src=" ' + img[x] + '">';
        NombrePlanetas()
    }
}
//Con esta función estamos validando que el usuario haya introducido un número y no otro cararter
function calculo(){
    if(peso_usuario.value == 0){
        resultado.innerHTML = '<p> por favor escribe un número</p>'
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

//eventos finales
boton_adelante.addEventListener("click",cambiar_foto_delante)
boton_atras.addEventListener("click",cambiar_foto_atras)
calcular.addEventListener("click" , calculo) 
//console 