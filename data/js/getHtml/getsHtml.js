//gets html 
const getsHtml = {
    x: 0,//Nos ayuda a saber en que imagen estamos
    conteiner: document.querySelector('.conteiner'),
    planet: document.getElementById('planet'),
    pesoUsuario: document.querySelector('.peso_usuario'),
    calcular: document.querySelector('.calcular'),
    result: document.querySelector('.resultado'),
    btnBack: document.querySelector('.atras'),
    btnNext: document.querySelector('.adelante'),
    name_planet: document.getElementById("name_planet")

}
//imgs of planet
const imgs = ['data/img/tierra.jpeg','data/img/mercurio.jpeg','data/img/venus.jpeg','data/img/jupiter.jpeg','data/img/marte.jpeg','data/img/saturno.jpeg','data/img/urano.jpeg','data/img/neptuno.jpeg',]

export {getsHtml,imgs}
