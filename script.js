let intentos=6;
const palabras= ["PARED", "PERRO", "LLAVE", "PESTO", "MANOS","PLUMA", "DULCE"];

let palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];

window.addEventListener('load',init);

function init(){
    console.log('La página se ha cargado completamente');
    console.log('Palabra secreta seleccionada:'+ palabraSecreta);
}


const button = document.getElementById("guess-button") 
button.addEventListener("click",intentar);



function intentar() {
    const INTENTO = leerIntento().toUpperCase();
    if(INTENTO.length !==5){
        return;
    }
    const GRID = document.getElementById("grid");
    const ROW= document.createElement('div');
    ROW.className = 'row';
    
    for (let i=0; i< palabraSecreta.length; i++){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        SPAN.innerHTML = INTENTO [i]|| '';
    
   
        if(INTENTO[i]===palabraSecreta[i]){
            SPAN.style.backgroundColor = '#79b851';
        } else if (palabraSecreta.includes(INTENTO[i])){
            SPAN.style.backgroundColor ='#f3c337';
        } else{
            SPAN.style.backgroundColor = '#a4aec4';
        }
        ROW.appendChild(SPAN);
    }

    GRID.appendChild(ROW)

    intentos--;

    if(INTENTO === palabraSecreta){
        terminar ("<h1>¡GANASTE! ૮₍ ´ ꒳ `₎ა </h1>");
    }

    if (intentos === 0){
        terminar("<h1>¡PERDISTE!૮ ◞ ﻌ ◟ ა </h1>");
        const INPUT = document.getElementById("guess-input");
        const BOTON = document.getElementById("guess-button");
        INPUT.disabled=true;
        BOTON.disabled=true;
    }
}


function leerIntento(){
    let input = document.getElementById("guess-input");
    let intento = input.value;
    intento = intento.toUpperCase();
    return intento;
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    const BOTON = document.getElementById("guess-button");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML=mensaje;
}


