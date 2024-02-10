//1.Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

//2.Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//3.Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//4.Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLenguagesSeparadamente() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
//Si 0 es menor que la longitud de la matriz (actualmente su lognitud es de 5) ira sumando 1.
//0<5 si, entonces a la próxima será 1<5 y luego 2<5 y asi sucesivamente ira mostrando en la consola cada uno de los lenguajes por separado.
      console.log(lenguagesDeProgramacion[i]);
    }
  }
  //Y aquí se cierra el bucle for y la función.
  mostrarLenguagesSeparadamente();

//5.Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarLenguagesReversoSeparadamente() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
//i=5-1(longitud del array) i=4; es para asegurarse de que la variable i inicialice con el índice de la última posición válida del array.
//Es decir, si se tiene la matriz con 5 elementos, los índices válidos serán 0,1,2,3 y 4; por lo tanto necesitamos restar 1 para que el retroceso empiece desde 4.
      console.log(lenguagesDeProgramacion[i]);
    }
  }
  
  mostrarLenguagesReversoSeparadamente();

//6.Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularMedia(lista) {
    let suma = 0; //Inicializa en 0 y se usará para acumular la suma de todos los números en la lista.
    for (let i = 0; i < lista.length; i++) {
//Se inicia en 0 y va recorriendo cada elemento de la lista.         
      suma += lista[i];
//En cada iteración del bucle, el numero de la posición i de la lista se agrega a la variable suma, acumulando así la suma total de todos los números en la lista.      
    }
    return suma / lista.length;
//Una vez que el bucle termina, se calcula el promedio de la suma entre el tamaño de la matriz.
}
  
  let numeros = [10, 20, 30, 40, 50]; //Se crea la lista de números.
  let media = calcularMedia(numeros); //Se llama a la función pasándole esta lista como argumento y el resultado se asigna a la variable media.
  console.log('Promedio:', media);
  //Se imprime el valor del promedio(media).

//7.Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
//Se inicializan variables con el primer elemento de la lista (0), esto proporciona valores iniciales para comparar con los otros elementos de la lista.  
    for (let i = 1; i < lista.length; i++) {
//Se inicia un bucle for que comienza desde el segundo elemento de la lista (índice 1) hasta el último elemento. Esto se hace porque ya hemos comparado el primer elemento con sí mismo.
      if (lista[i] > mayor) { 
//Dentro del bucle, se compara el elemento en la posición i con el valor actual de mayor. Si el elemento en la posición i es mayor que mayor, se actualiza el valor de mayor con el valor del elemento en la posición i.
       mayor = lista[i]; //Se actualiza la variable mayor con el nuevo valor.
      }
      if (lista[i] < menor) { 
        menor = lista[i]; 
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numeros = [15, 8, 16, 5, 25];
  encontrarMayorMenor(numeros);
//En este caso el ciclo for empezará con: 8 es mayor que 15? NO, entonces pasara al indice 3 y preguntará lo mismo, 16 es mayor que 15? SI, entonces se colocará en el indice 0 y seguirá preguntando al que sigue, 5 es mayor que 16? NO, pasará al siguiente 25 es mayor que 16? SI, entonces se actualizará el indice 0 a 25.
//Para el número menor hará lo mismo: 8<15? SI, indice0=8, 16<8?NO, 5<8 SI, se actualizará nuevo valor y 25<5, NO.


//8.Crea una función que devuelva la suma de todos los elementos en una lista.
function calcularSuma(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
//Recorrerá desde el índice 0 hasta el tamaño de la matriz.
//Si el tamaño es 5, incrementará desde 0,1,2,3,4.
      suma += lista[i]; //El valor de cada índice se irá sumando.
    }
    return suma; //Devolverá la suma.
  }
  
  let numeros = [15, 8, 25, 5, 12];
  let suma = calcularSuma(numeros); 
  //Se llama a la función calcularSuma con el parametro numeros y lo que haga la función se meterá en la variable suma.
  console.log('Suma:', suma);

//9.Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
//Recorrerá desde el índice 0 hasta el tamaño de la matriz.
      if (lista[i] === elemento) {
//Dentro del bucle, se compara el elemento en la posición i de la lista con el elemento que se está buscando (elemento). Si son iguales, significa que se ha encontrado el elemento en la lista.
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }

//10.Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
let lista1 = [8, 2, 5, 3];
let lista2 = [8, 3, 10, 17];
let listaFinal =[];

function sumarListas(lista1, lista2) {
  for (let i = 0; i < lista1.length; i++) {
//Se inicia un bucle for que recorrerá cada elemento de lista1. La variable i se inicializa en 0 y el bucle continuará mientras i sea menor que la longitud de lista1.
    listaFinal[i] = lista1[i] + lista2 [i];
  }
  return listaFinal;
}

sumarListas(lista1, lista2);
console.log(listaFinal);


//11.Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
let lista = [8, 2, 5, 3];
let cuadrados = [];

function calcularCuadrados(lista) {
  for (let i = 0; i < lista.length; i++) {
//Se inicia un bucle for que recorrerá cada elemento de lista. La variable i se inicializa en 0 y el bucle continuará mientras i sea menor que la longitud de lista1.
    cuadrados[i] = lista[i] * lista [i];
  }
  return cuadrados;
}

calcularCuadrados(lista);
console.log(cuadrados);
