//Ejercicio 1 - Duplicar Elementos con .map
function ejercicio1() {
  const NUMEROS = [1, 2, 3, 4, 5];
  const Duplicados = NUMEROS.map((x) => x * 2);
  console.log(Duplicados);
}
//ejercicio1();

//Ejercicio 2 - Convertir Números a Strings con .map
//ejercicio2();
function ejercicio2() {
  const NUMEROS2 = [1, 2, 3, 4, 5];
  const NumeroAStrings = NUMEROS2.map((x) => x.toString());
  console.log(NumeroAStrings);
}

//Ejercicio 3 - Calcular el Promedio con .forEach
//ejercicio3();
function ejercicio3() {
  let suma = 0;
  const NUMEROS3 = [1, 2, 3, 4, 5];
  NUMEROS3.forEach((x) => {
    suma += x;
  });
  const promedio = suma / NUMEROS3.length;
  console.log(promedio);
}

//Ejercicio 4 - Contar elementos con .forEach
//ejercicio4();
function ejercicio4() {
  let contador = 0;
  const NUMEROS4 = [4, 6, 10, 40, 90];
  NUMEROS4.forEach((num) => {
    num > 10 ? contador++ : null;
  });
  console.log(contador);
}

//Ejercicio 5 - Mostrar los cuadrados de los números del 1 al 10 usando .map
//ejercicio5();
function ejercicio5() {
  const Numeros5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const cuadrados = Numeros5.map((x) => x * x);
  console.log(cuadrados);
}

//Ejercicio 6 - Sumar todos los números de un arreglo usando .forEach
//ejercicio6();
function ejercicio6() {
  let suma = 0;
  const NUMERO6 = [1, 2, 3, 4, 5];
  NUMERO6.forEach((x) => (suma = suma + x));
  console.log(suma);
}

//Ejercicio 7 - Mostrar los elementos de un arreglo con su posición (índice) usando .forEach
function ejercicio7() {
  const NOMBRES = ["Julian", "Roberto", "Martin", "Agustin"];
  NOMBRES.forEach(x);
  {
    console.log("Indice: " + index + " Valor: " + numero);
  }
}
ejercicio7();
