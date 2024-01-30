//dentro tendremos algunos efectos como el loader para separarlo de lo que es la lógica de programación 

//La idea es poder cambiarlo fácilmente sin necesidad de tener que leer código que no está relacionad sin necesidad de tener que leer código que no está relacionado

//Claramente para poder hacer animaciones nececitamos llamar algunas etiquetas del html 


import {getsHtml} from '.././getHtml/getsHtml.js';

function loaderAnimation(){
        let imgElement = document.createElement('img');
        let url = ['data/img/alien.png','data/img/mar.png'];
        let im = Math.floor(Math.random()*2)
        imgElement.src = url[im];
        imgElement.classList.add('imgLoad');
       getsHtml.conteiner.appendChild(imgElement)
    setTimeout(()=>{
        getsHtml.conteiner.style.opacity = 1; 
        getsHtml.conteiner.style.opacity = 0;
    },400)//duración del transitions
    setTimeout(() => {
        getsHtml.conteiner.classList.remove('conteiner')
        getsHtml.conteiner.remove();//Una vez que ya finalizo el loader, lo iliminamos
        //body       
    },600)//cuanto tardara en desaparecer el loader para que nos deje ocupar la página
        
}

//El resultado solo se mostrará por unos segundos
function resultHide(){
        getsHtml.result.innerHTML= "";
    }
    setInterval(resultHide,600);

//boostrap effec
function toasShow(){
    setTimeout(() => {
        var myToast = new bootstrap.Toast(document.getElementById('myToast'));
        myToast.show();
    },3000);
}
//dato de planetas
export{loaderAnimation,resultHide,toasShow};
