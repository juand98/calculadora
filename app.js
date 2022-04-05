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

// Ahora queremos que cada vez que se presione un botón se agregue el valor del botón al display, así que en este archivo empezamos a realizar la interacción. Para ello seleccionamos "botonesNumeros" y le agregaremos un eventlistener de click a cada uno.

const display = new Display(displayValorAnterior, displayValorActual); //Los parametros que necesita esta clase están definidos  en el constructor.

botonesNumeros.forEach((boton) => {
  boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML)); //Cada vez que se presione un botón, el display agregue un número y el número que tiene que agregar es el número que le corresponda al botón que tenemos dentro del elemento en el archivo html (inner.HTML).
});
// Para lo anterior usamos un .forEach donde tednremos cada uno de los botones. Posteriomente como argumento creamos una función, esta función a cada botón le agregará un eventlistener de click y como segundo parámetro que tiene que pasar cada vez que el usuario haga click en uno de nuestros botones e display agregue un número, para ello debemos mandar llamar una instancia de la clase display antes del .forEach.
// Resuminedo: se manda a llamar la variable que modifica el contenido de nuestro HTML, luego con el forEach el cual recorrerá cada botón, a cada botón se le asignara un eventlistener de click, que cada vez que el usuario presione un numero o clickee sobre el se agrega el número en el constructor con el valor que tiene el elemento en el archivo HTML.
