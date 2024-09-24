//Declaracion de variables 
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSecreto = [];
let numeroMaximo = 50; 

//Funcion de asignacion de texto-elemento
function asignarTexto(elemento, texto){
    let elementoHTML = document.getElementById(elemento); 
    elementoHTML.innerHTML = texto;
    return;
}

//Funcion para el boton intento
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    if(numeroUsuario === numeroSecreto){
        asignarTexto('texto', `Acertaste el numero en ${intentos} ${(intentos == 1) ? 'Intento' : 'Intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('verificar').setAttribute('disabled', 'true');
    }
    else{
        intentos++;
        asignarTexto('intentos', `intentos: ${intentos}`);
        limpiarNumero();

        if(numeroUsuario > numeroSecreto){
            asignarTexto('texto', 'El numero es menor, intenta de nuevo');
        }
        else{
            asignarTexto('texto', 'El numero es mayor, intenta de nuevo');
        }
    }
    return;
}

//Funcion para reiniciar el juego
function reiniciarIntento(){
    condicionesIniciales();
    limpiarNumero();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    document.getElementById('verificar').removeAttribute('disabled');
}

//Funcion para limpiar el numero
function limpiarNumero(){
    document.querySelector('#numeroUsuario').value = '';
    return;
}

//Funcion para generar numero aleatoreo 
function generarNumeroAleatorio(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+ 1;
    console.log(listaNumeroSecreto);
    
    //Verifica si el numero esta incluido en la lista y si la lista ya tiene todos los numeros
    if(listaNumeroSecreto.length == numeroMaximo){
        listaNumeroSecreto = []; 
        return generarNumeroAleatorio();
    }
    else{
        if(listaNumeroSecreto.includes(numeroGenerado)){
            return generarNumeroAleatorio();
        }
        else{
            listaNumeroSecreto.push(numeroGenerado); 
            return numeroGenerado; 
        }
    }
}   

//Funcion para valores iniciales
function condicionesIniciales(){
    numeroSecreto = generarNumeroAleatorio();
    console.log(numeroSecreto);
    intentos = 1; 
    asignarTexto('titulo', 'Juego del numero secreto'); 
    asignarTexto('texto', `Dame un numero del 1 al ${numeroMaximo}`); 
    asignarTexto('intentos', `intentos: ${intentos}`);
    
}
condicionesIniciales();
