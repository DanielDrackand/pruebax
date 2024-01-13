//dentro tendremos algunos efectos como el loader para separarlo de lo que es la lógica de programación 

//La idea es poder cambiarlo fácilmente sin necesidad de tener que leer código que no está relacionad sin necesidad de tener que leer código que no está relacionado

//Claramente para poder hacer animaciones nececitamos llamar algunas etiquetas del html 


import {getsHtml} from '.././getHtml/getsHtml.js';

function loaderAnimation(){
    setTimeout(()=>{
        getsHtml.conteiner.style.opacity = 1; 
        getsHtml.conteiner.style.opacity = 0;
    },4000)//duración del transition
    setTimeout(() => {
        getsHtml.conteiner.classList.remove('conteiner')
        getsHtml.conteiner.remove();//Una vez que ya finalizo el loader, lo iliminamos
    },7000)//cuanto tardara en desaparecer el loader para que nos deje ocupar la página
}

//El resultado solo se mostrará por unos segundos
function resultHide(){
        getsHtml.result.innerHTML= "";
    }
    setInterval(resultHide,6000);


export{loaderAnimation,resultHide};
