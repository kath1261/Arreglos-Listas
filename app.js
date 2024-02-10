let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//Esta función se utiliza para actualizar el contenido de texto de un elemento HTML.
//document.querySelector(elemento): Encuentra el primer elemento HTML al que se dirigirá ('p', 'div', '#elementId', 'elementClass') y lo alamcena en la variable "elementoHTML".
//Actualiza la "innerHTML" propiedad del elemento HTML seleccionado al valor del texto.

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
//Recupera el valor ingresado por el usuario de un elemento de entrada HTML con el ID "valorUsuario" y lo convierte a un número entero usando parseInt y lo almacena en la variable numeroDeUsuario.

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
//Llama a la función donde llama el elemento P y coloca el texto "Acertaste el número en 5 veces" ó si intentos es igual a 1 entonces debe decir vez.
        document.getElementById('reiniciar').removeAttribute('disabled');
//Seleccionamos un botón con el ID reiniciar.
//El removeAttribute disable es para quitarle el atributo al botón de Nuevojuego de inactivo y pase a activo.
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
//Si el numeroDeUsuario es mayor al numeroSecreto, llamará la función con elemento P y con el mensaje "El número secreto es menor"
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
//Si el numeroDeUsuario es menor al numeroSecreto, llamará la función con elemento P y con el mensaje "El número secreto es mayor"
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
//Incrementa el contador de intentos y borra el campo de entrada.


function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
//Esta función sirve para que el usuario limpie el campod onde digita el número y no tengamos que estar borrando para colocar el próximo número.


function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
//El Math random digamos que sale 0.99, éste se multiplicará por 10 y daria como resultado 9.8 y por lo tanto no llega a 10, entonces se coloca el +1 para que sume y llegue al rango de 10.
 //Generamos un numeroGenerado y es 5 por ejemplo, y a la siguiente rodada genera 5 y ahi entra la línea 62.

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    //Cada numero que capturemos se irá colocando en cada array hasta llegar a 10, una vez que llegue a los 10 lugares entonces mostrará el mensaje.
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
//El include recorre todo el arreglo y verifica si algo ya existe y lo devuelve como true o false.
//*********** RECURSIVIDAD ******************
//En este caso se va a verificar que el numeroGenerado esté dentro del arreglo ListaNumerosSorteados, si eso es verdad devolverá dicho numero secreto y seguira el ciclo, de lo contrario si el numeroGenerado es 8 por ejemplo, agrega ese numero a la listaNumerosSorteados.
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
    }

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    //El título
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    //El subtitulo
    numeroSecreto = generarNumeroSecreto();
    //Llamar la función y vaciarla en la variable.
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    //Seleccionamos  un botón con el ID reiniciar.
    //El setAttribute tiene dos parámetros, donde dice: que disabled debe ser reemplazado por true.
}

condicionesIniciales();