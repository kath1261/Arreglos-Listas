//************ ARRAYS *********************/
//Un array, arreglo o lista en JavaScript es una estructura de datos que permite almacenar y organizar múltiples valores en una sola variable. Los valores en un array pueden ser de cualquier tipo de dato, como números, strings, objetos, otros arrays, y así sucesivamente. Los arrays en JavaScript son indexados, lo que significa que cada valor dentro de ellos está asociado con un índice numérico, generalmente comenzando desde el índice 0.
//Puedes crear un array en JavaScript declarando una variable y asignándole valores entre corchetes []:

let frutas = ["Manzana", "Uva", "Naranja"];
//Accediendo a los valores Los elementos de un array se acceden mediante índices numéricos, que comienzan en 0.
//índice    Elemento
//  0       "Manzana"      
//  1       "Uva"
//  2       "Naranja"
console.log(frutas[0]); // Salida: "Manzana"
console.log(frutas[2]); // Salida: "Naranja"

//Para agregar un elemento al final del array, puedes usar el método push.
frutas.push("Fresa");
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja", "Fresa"]

//Para eliminar el último elemento, puedes usar el método pop.
frutas.pop();
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja"]


//Ejercicio
//Se crea la función "sortearLibro"
//Supongamos que el numeroLimite es 20.
//El Math random digamos que sale 0.99, éste se multiplicará por 20 y daria como resultado 19.8 y por lo tanto no llega a 20, entonces se coloca el +1 para que sume y llegue al rango de 20. Después con el parseInt se vuelve entero tomando hasta el punto decimal, es decir si sale 19.8+1=20.8, pero con el parseInt se queda en 20 exactos.
//Todo esto se almacena en variable libroElegido.
//Se declara la variable "cantidadDeLibrosSorteados" que almacenará la longitud de la matriz "listaDeLibrosSorteados". Esta variable representa cuantos libros se han sorteado hasta ahora.
// Si la cantidad de libros sorteados es igual a 20, entonces los libros que se tienen hasta ahora "se olvidan" y se reinicia el proceso de sorteo.
function sortearLibro() {
    let libroElegido = parseInt(Math.random() * numeroLimite + 1);
    let cantidadDeLibrosSorteados = listaDeLibrosSorteados.length;
    if (cantidadDeLibrosSorteados == numeroLimite) {
        listaDeLibrosSorteados = [];
    }
}