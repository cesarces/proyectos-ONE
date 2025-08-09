console.log("Hola desde la consola");

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosGenerados = [];
let numeroMaximo = 10;

function asignarElemento (elemento, texto) {
    let = elemento = document.querySelector(elemento)
    elemento.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorDeUsuario").value);
   
    if (numeroSecreto === numeroDeUsuario) {
        asignarElemento("p", `¡Le achuntaste en ${intentos} ${(intentos == 1) ? "vez!" : "veces!"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarElemento("p", "El numero es menor");
        } else {
            asignarElemento("p", "El número es mayor");
        }
    intentos++
    limpiarCaja();
    }
}

function condicionesIniciales() {
    asignarElemento("h1", "Adivina el número secreto");
    asignarElemento("p", "Indica un número");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function limpiarCaja(){
 let valorCaja = document.getElementById("valorDeUsuario");
 valorCaja.value ="";  
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
        console.log(listaNumerosGenerados)
        console.log(numeroGenerado);
        if(listaNumerosGenerados.length == numeroMaximo) {
            asignarElemento("p", "Yo se sortearon todos los números");
            return alert("bye");
        } else {
            if(listaNumerosGenerados.includes(numeroGenerado)) {
                return generarNumeroSecreto();
            } else {
                listaNumerosGenerados.push(numeroGenerado);
                return numeroGenerado;
            }
        }
}

condicionesIniciales()