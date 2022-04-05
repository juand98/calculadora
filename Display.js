// En este archivo crearemos otra clase la cual será la encargada de controlar la calculadora y será esta la clase que va a interactuar con nuestros botones y mostrar en el display las interacciones.

class Display {
  // Esta clase tendrá un constructor, es decir, cuando instanciemos la clase, pasaremos valores para llamarla. Según lo anterior esta clase requiere tener los dos valores que se muestran en el display, el "displayValorANterior" y el "displayValorActual" estos valores recordemos que son las variables previamente definidas que modifican el contenido de los elementos del display.

  //Constructor:
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    // Así hacemos que las dos variables anteriore sean dos propiedades de la clase. La palabra reservada this en la función constructora hace referencia a las propiedades que tendrá el objeto, en este caso "displayValorAnterior" y "displayValorActual" serán dos propiedades del constructor y sus valores estarán definidos por las variables previamente creadas con el mismo nombre.

    this.calculador = new Calculadora();
    this.tipoOperación = undefined;
    //El display también tendrá una calduladora, la cual creamos una clase previamente para esta y en ella se encuentran los métodos que creamos para realizar las operaciones. Mandamos llamar la clase usando "new".

    this.valorActual = "";
    this.valorAnterior = "";
    // El display tendrá un "valorActual" y un "valorAnterior" que serán diferentes al display. El display es el elemento que queremos modificar y el "valorActual" y el "valorAnterior" que vamos a crear son los numeros que estamos guardando o presionando en pantalla.
    this.signos = {
      sumar: "+",
      dividir: "/",
      multiplicar: "x",
      restar: "-",
    };
  }

  //Una vez listo nuestro constructor procedemos a generar los métodos para poder agregar números a nuestra calcduladora.

  borrar() {
    // Este método no recibirá ningún parámetro, lo que hará es que el valor actual será igual al mismo pero lo que hará con este valor será recortarlo sólo en su último número. Una vez más usamos el método imprimirValores() para que se actualice nuestro display.
    this.valorActual = this.valorActual.toString().slice(0, -1);
    this.imprimirValores();
    //Por último agregamos esta función a nuestro botón de borrar en el archivo html. Directamente en el elemento.
  }

  borrarTodo() {
    //Este metodo lo que hace es quitar el valor anterior, el valor actual y configurar todo desde cero.
    this.valorActual = "";
    this.valorAnterior = "";
    //Además en este método queremos configurar que no haya ningún tipo de operación. Para eso agregamos en nuestro constructor un tipo de operación "this.tipoDeOperacion" que lo que hará es guardar el tipo de operación que estaba usando el usuario. Cuando borramos todo queremos que el tipo de operación sea undefined.
    this.tipoOperación = undefined;
    this.imprimirValores(); // para actualizar el display agregamos el método previamente creado.
    //Por último recordemos agregar este método en el elemento del archivo html.
  }

  computar(tipo) {
    //Este método recibe como parámetro el tipo de operación.
    this.tipoOperación !== "igual" && this.calcular();
    this.tipoOperación = tipo;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = "";
    this.imprimirValores();
  }

  agregarNumero(numero) {
    //Este metodo recibe un parámetro, el cual será un número.
    if (numero === "." && this.valorActual.includes(".")) return; //Si el valor ingresado es un punto y en el valor actual ya hay un punto no retornará nada y así evitamos que se ponga más de un punto.

    this.valorActual = this.valorActual.toString() + numero.toString(); // Inicialmente si dejamos sólo "numero" sólo se imprimirá el número que presiona el usuario y al presionar otro número se modifica, debemos concatenar estos valores para que se impriman todos los números que presiona el usuario. Notemos que así se pueden poner los puntos decimales que queramos y en operaciones matemáticas sólo se admite un punto, entonces debemos establecer una estructura de control.
    this.imprimirValores();

    //Básicamente lo que queremos hacer es asignar un valor a la propiedad "valorActual". Queremos que ese valorActual sea igual al numero que el usuario elige. El usuario ingresa un número y vamos a configurar el display para que se muestre el valor seleccionado. El cual modificará el contenido del elemento HTML "valor.actual"
  }

  // Agregamos un nuevo método que nos permita mostrar los valores que presiona el usuario en pantalla

  imprimirValores() {
    this.displayValorActual.textContent = this.valorActual; //El valor de la propiedad "displayValorActual" tendrá un "textContent", es decir configuraremos el texto que tiene el html como el valor de la propiedad.
    //this.displayValorAnterior.textContent = this.valorAnterior;
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${
      this.signos[thist.tipoOperación] || ""
    }`;
  }

  // Creamos el método para hacer los calculos. Este tomará los valores que tiene cargados el display y darselos a la calculadora para que haga el calculo.

  calcular() {
    const valorAnterior = parseFloat(this.valorAnterior); // Como estamos trabajando entre strings y números reales, tenemos que convertir los strings en numeros para que deje de ser un string y se convierta en un número
    const valorActual = parseFloat(this.valorActual); // Con esto ya tenemos guardados nuestros dos valores como numeros para ser utilizados.

    if (isNaN(valorAnterior) || isNaN(valorActual)) return; // Si cualquiera de estos dos valores es de tipo NaN no haremos ningún tipo de operación y de vuelta retornaresmos sin hacer la operación

    //En el caso que "valorAnterior" y "valorActual" sí tengan valores, tenemos que hacer un update de nuestro "valorActual"
    this.valorActual = this.calculador[this.tipoOperación](
      valorAnterior,
      valorActual
    );
    //acá es donde utilizamos nuestra calculadora para hacer nuestros cálculos, seleccionamos un método de la calculadora según el tipo de operación que haya seleccionado el usuario (this.tipoDeOperación), finalmente le pasamos los valores que creamos arriba.
    //Este método no nos sirve demasiado si no agregamos lo que necesitamos para los botones de operaciones (esto lo hacemos en nuestro archivo app.js).
  }
}
