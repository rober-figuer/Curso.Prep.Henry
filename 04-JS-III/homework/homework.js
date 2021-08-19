// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array.shift();
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array.pop();
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var aux = array.length - 1;
  let newMatrix = [];
  for (i = 0; i <= aux; i++) {
    newMatrix[i] = array[i] + 1;
  } return newMatrix;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var newArray = array;
  newArray.push(elemento);
  return newArray;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  var newArray = array;
  newArray.unshift(elemento);
  return newArray;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var str = ''; 
  for(i = 0; i <= palabras.length - 2; i++) {
    str = str + palabras[i] + ' ';
  } str = str + palabras.pop();
  return str;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(i = 0; i <= array.length - 1; i++) {
    if(array[i] === elemento) {
      return true;
    } 
  } return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var sum = 0;
  for (i = 0; i <= numeros.length - 1; i++) {
    sum = sum + numeros[i]
  } return sum;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var sum = 0;
  var average = 0;
  for (i = 0; i <= resultadosTest.length - 1; i++) {
    sum = sum + resultadosTest[i]
  } average = sum / resultadosTest.length;
  return average;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)    |||||||||||||||||||||||||||||||||||||||||||||||||||||
  // Devuelve el número más grande
  // Tu código:
//  var box = 0;
//  for(i = 0; i <= numeros.length - 2; i++) {
//    if(numeros[i] >= numeros[i + 1]) {
//      box = i;
//    }
//  } return numeros[box];
  var box_max = numeros[0];
  for (i = 1; i < numeros.length; i++) {
    if (numeros[i] > box_max) {
      box_max = numeros[i];
    }
  } return box_max;
} 



function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  //if (arguments[0] === null) {
  //  return 0;
  var contArg = arguments.length;
  if (contArg === 0) {
    return 0;
  }
  var prod = 1;
  for(i = 0; i <= contArg - 1; i++) {
    prod = prod * arguments[i];
  } return prod;

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cont = 0;
  for (i = 0; i <= arreglo.length - 1; i++) {
    if (arreglo[i] > 18) {
      cont = cont + 1;
    }
  } return cont;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return 'Es fin de semana';
  } if (numeroDeDia > 1 && numeroDeDia < 7) {
    return 'Es dia Laboral';
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if (n === 9 || n >= 90 && n <= 99) {
    return true;
  } else return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (i = 0; i <= arreglo.length - 2; i++) {
    if (arreglo[i] !== arreglo[i + 1]) {
      return false
    }
  } return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var box = [];
  var cont = 0;
  var aux = -1;
  for (i = 0; i <= array.length - 1; i++) {
    if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre') {
      aux = aux + 1;
      box[aux] = array[i];
    }
  } if (box.length === 3) {
    return box;
  } else return 'No se encontraron los meses pedidos';
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var box = [];
  var aux = -1;
  for (i = 0; i <= array.length - 1; i++) {
    if (array[i] > 100) {
      aux = aux + 1;
      box[aux] = array[i];
    }
  } return box;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var box = [];
  var n = numero;
  for (i = 1; i < 11; i++) {
    box[i - 1] = n + 2 * i;
    if (box[i - 1] === i) {
      return 'Se interrumpió la ejecución';
    }
  } return box;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  //  var box = [];
  //  var n = numero;
  //  for (i = 1; i <= 10; i++) {
  //    if (i === 5) {
  //      continue;
  //    } 
  //    if (i >= 6) {
  //      for ( j = 1; j <= 5; j++) {
  //        box[3 + j] = n + 8 + 2 * j;
  //      }
  //    }
  //    box[i - 1] = n + 2 * i;
  //  } return box;
  var box_array = [];
  var new_number = numero;
  for (i = 1; i <= 10; i++) {
    if (i == 5) {
      continue;
    }
    new_number = new_number + 2;
    box_array.push(new_number);
  }
  return box_array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
