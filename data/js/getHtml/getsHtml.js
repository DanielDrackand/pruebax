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
    name_planet: document.getElementById('name_planet'),
    planetInfo: document.getElementById('info-planet')
}
//imgs of planet
const imgs = ['data/img/tierra.jpeg','data/img/mercurio.jpeg','data/img/venus.jpeg','data/img/jupiter.jpeg','data/img/marte.jpeg','data/img/saturno.jpeg','data/img/urano.jpeg','data/img/neptuno.jpeg',]
//Planets
const namePlan = ['Tierra','Mercurio','Venus','Júpiter','Marte','Saturno','Urano','Neptuno'
]//fijarme si puedo hacerlo array asociativo 

//peso de los planetas 
const pesoPlanet = [1 , 3.7  * 1 / 9.81 , 8.87 * 1 / 9.81 ,24.79 * 1 / 9.81 , 3.72 * 1 / 9.81 ,10.44 * 1 / 9.81,8.69 * 1 / 9.81,11.15 * 1 / 9.81]

const infoPlanet = [
    'El punto más alto de la Tierra es el monte Everest, con una altura de 8,848 metros sobre el nivel del mar.',//infon Tierra
    'Mercurio es el planeta más cercano al Sol en nuestro sistema solar. Experimenta extremos de temperatura debido a su proximidad al Sol. Durante     el día, la temperatura puede alcanzar hasta 430 grados Celsius (800 grados Fahrenheit), mientras que durante la noche puede descender a aproxi     mada  mente -180 grados Celsius (-290 grados Fahrenheit).',//info Mercurio
    'Venus tiene una rotación retrógrada, lo que significa que gira en sentido contrario a la mayoría de los otros planetas en el sistema solar.Tam     bién tiene el día más largo de todos los planetas, aunque su año es más corto que su día.',//info Venus'
    'Júpiter es el planeta más grande de nuestro sistema solar, con una masa que es más de dos veces la de todos los demás planetas juntos.',//jup
    'Marte es conocido como el Planeta Rojo" debido a su característico color rojo oxidado. Este color se debe a la presencia de óxido de hierro, s     imilar al óxido que causa la coloración en la tierra.',//info Marte
    'Saturno es conocido por sus espectaculares anillos, que son los más grandes y notables del sistema solar. Están compuestos principalmente de p     artículas de hielo y polvo.',//info saturno
    'Urano tiene una inclinación axial muy pronunciada. A diferencia de la mayoría de los planetas, Urano rota casi de lado, con un ángulo de incli     nación axial de aproximadamente 98 grados. Esto significa que sus polos están en los lados, en lugar de arriba y abajo.',//Info urano
    'Neptuno tiene los vientos más rápidos en el sistema solar, con velocidades que pueden superar los 2,000 kilómetros por hora. Estos vientos se      deben a su atmósfera dinámica y a su posición lejana del Sol.',//Indo Neptuno
]
export {getsHtml,imgs,namePlan,pesoPlanet,infoPlanet}
