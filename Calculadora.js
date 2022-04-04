// Una vez todos nuestros elementos de nuestro html estén metidos en variables para generar interactividad a su contenido procedemos a crear la calculadora como tal.

// Este archivo por buenas prácticas tiene su inicial de nombre en mayúscula y es porque va a ser una clase javascript que por convención los archivos que tienen una clase deben ser nombrados así.

// Las clases son "funciones especiales" para definir una clase se usa la palabra reservada "class" y un nombre para la clase.

class Calculadora {
  // Esta calculadora tiene que hacer básicamente 4 cosas: sumar, restar, dividir y multiplicar. Así que agregamos métodos para cada una de estas operaciones.
  sumar(num1, num2) {
    return num1 + num2;
  }
  restar(num1, num2) {
    return num1 - num2;
  }
  multiplicar(num1, num2) {
    return num1 * num2;
  }
  dividir(num1, num2) {
    return num1 / num2;
  }
}

// Definida esta clase tenemos nuestra claculadora definida.
