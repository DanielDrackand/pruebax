//gets html 
const getsHtml = {
    conteiner: document.querySelector('.conteiner'),
    planeta: document.querySelector('.planetas'),
    peso_usuario: document.querySelector('.peso_usuario'),
    calcular: document.querySelector('.calcular'),
    resultado: document.querySelector('.resultado'),
    boton_atras: document.querySelector('.atras'),
    boton_adelante: document.querySelector('.adelante'),
    Nombre_planeta: document.querySelector(".Nombre_planeta")

}
//imgs of planet
const imgs = ['data/img/tierra.jpeg','data/img/mercurio.jpeg','data/img/venus.jpeg','data/img/jupiter.jpeg','data/img/marte.jpeg','data/img/saturno.jpeg','data/img/urano.jpeg','data/img/neptuno.jpeg',]

export {getsHtml,imgs}
