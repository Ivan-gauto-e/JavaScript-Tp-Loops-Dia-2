//Ejercicio 1 - Duplicar Elementos con .map
//ejercicio1();
function ejercicio1() {
  const Numeros = [1, 2, 3, 4, 5];
  const Duplicados = Numeros.map((x) => x * 2);
  console.log(Duplicados);
}

//Ejercicio 2 - Convertir Números a Strings con .map
//ejercicio2();
function ejercicio2() {
  const Numeros2 = [1, 2, 3, 4, 5];
  const NumeroAStrings = Numeros2.map((x) => x.toString());
  console.log(NumeroAStrings);
}

//Ejercicio 3 - Calcular el Promedio con .forEach
//ejercicio3();
function ejercicio3() {
  let suma = 0;
  const Numeros3 = [1, 2, 3, 4, 5];
  Numeros3.forEach((x) => {
    suma += x;
  });
  const promedio = suma / Numeros3.length;
  console.log(promedio);
}

//Ejercicio 4 - Contar elementos con .forEach
ejercicio4();
function ejercicio4() {
  let contador = 0;
  const Numeros4 = [4, 6, 10, 40, 90];
  Numeros4.forEach((num) => {
    num > 10 ? contador++ : null;
  });
  console.log(contador);
}

//Ejercicio 5 - Mostrar los cuadrados de los números del 1 al 10 usando .map
ejercicio5();
function ejercicio5() {}
