// En este archivo seleccionaremos todos los nodos (elementos) de nuestro html que vamos a utilizar para añadir interactividad a la página

// Empezamos declarando algunas variables para mandar llamar nuestros elementos.

// En nuestro html el elemento dónde van los valores anterior y actual tiene el id "valor-anterior" y "valor-actual". El "document.getElementById" devuelve una referencia al elemento por su id, es decir, en este caso el valor de las variables "displayValorAnterior" y "displayValorActual" darán el contenido a estas etiquetas de nuestro HTML.

const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");

// Creamos otra variable dónde vamos a guardar todos los botones de los numeros. Usamos "document.querySelectorAll" porque necesitamos seleccionar todos nuestros números y estos los seleccionaremos a través de la clase que le establecimos a nuestros numeros (class="numeros").
// El método "document.querySelectorAll" devuelve una lista de nodos no estática que representa un conjunto de elementos del documento que coinciden con el grupo de selectores indicados. En este caso en esta variable se guardan el grupo de los numeros que llamamos a través de class="numero". Se creará una lista (NodeList) con todos los elementos que corresponden a la clase anteriormente mencionada y a través de ella daremos interactividad a los números.

const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");

// Podemos notar como se crean las NodeList para todos nuestros núemeros y para los operadores.
//console.log(botonesNumeros);
//console.log(botonesOperadores);

// Tenemos ya cada uno de los elementos de nuestro html metidos en variables que utilizaremos en javascript para dar ineractividad a su contenido.

const calculadora = new Calculadora();

console.log(calculadora.sumar(2, 3));
console.log(calculadora.restar(2, 3));
console.log(calculadora.multiplicar(2, 3));
console.log(calculadora.dividir(2, 3));
