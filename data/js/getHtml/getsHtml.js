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
//Planets
const namePlan = ['Tierra','Mercurio','Venus','Júpiter','Marte','Saturno','Urano','Neptuno'
]//fijarme si puedo hacerlo array asociativo 

//peso de los planetas 
const pesoPlanet = [1 , 3.7  * 1 / 9.81 , 8.87 * 1 / 9.81 ,24.79 * 1 / 9.81 , 3.72 * 1 / 9.81 ,10.44 * 1 / 9.81,8.69 * 1 / 9.81,11.15 * 1 / 9.81]
export {getsHtml,imgs,namePlan,pesoPlanet}
