let numAnterior;
let numPosterior;
let operador;


let resultado = document.getElementById("result");


function tomarValor(valor) {
    resultado.innerHTML += valor;
   
}

function calcular(valor) {
    if (!datosPantalla() ) {
        tomarValor(valor);
    }
    else {
    numAnterior = resultado.innerHTML;
    operador = valor;
    borrarPantalla();
    }
}

function igualA() {
    numPosterior= resultado.innerHTML;
    let solucion;
    switch(operador) {
        case '+':
            solucion= parseFloat(numAnterior) + parseFloat(numPosterior);
            break;

        case '-':
            solucion= parseFloat(numAnterior) - parseFloat(numPosterior);
            break;

        case '*':
            solucion= parseFloat(numAnterior) * parseFloat(numPosterior);
            break;
        
        case '/':
            solucion= parseFloat(numAnterior) / parseFloat(numPosterior);
            break;
    }
  resultado.textContent = solucion;
  

}

function borrarPantalla(){
    resultado.innerHTML = "";
}

function mostrarEnPantalla(resul) {
    resultado.innerHTML = resul.toFixed(3);
}

function resetear() {
    resultado.innerHTML = "";
    numAnterior=0;
    numPosterior=0;
    operador = "";
}



//Función comprobar si hay algo en pantalla

function datosPantalla() {
    if (resultado.innerHTML != "") {
        //HAY DATOS, es un cálculo
        return true;
    }
    //NO hay datos, es un número negativo
    else {
        return false;
    }
}