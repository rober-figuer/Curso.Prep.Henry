// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];
  for(let prop in objeto) {
    //for(i = 0; i <= 1; i++) {
        //for(j = 0; j <= 1; j++) {
        //  if(j === 0) {
        //    matriz[i][j] = prop;
        //  }
        //  if(j === 1) {
        //    matriz[i][j] = objeto.prop;
        //  }       
        //  }
    //    matriz[i][0] = prop;
    //    matriz[i][1] = objeto[prop];
    //  }
    matriz.push([prop, objeto[prop]]);
    }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
//  var box = 0;
//  var objeto = {};
//  for (i = 0; i <= string.length; i++) {
//    box = string[i];
//    var cont = 1;
//    for(var j = i + 1; j <= string.length; j++) {
//      if(string[i] === string[j]) {
//        cont = cont + 1;
//      }
//    }
//    objeto[box] = cont;
//  }
//  return objeto;
  var objeto = {};
  for(i = 0; i < string.length; i++) {
    if(Object.keys(objeto).includes(string[i])) {
      objeto[string[i]] = objeto[string[i]] + 1;
    } else {
      objeto[string[i]] = 1;
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  //var boxArray = '';   // :v
  //for(i = 0; i < s.length; i++) {
  //  if(s.toUpperCase() !== s[i]) {  //es una mayuscula (va al principio del array)
  //    boxArray.unshift(s[i]);
  //  }
  //  else boxArray.push(s[i]);   //es una minuscula (va al final del array)
  //}
  //return boxArray;

  var boxUpper = ''; 
  var boxLower = '';
  for(i = 0; i < s.length; i++) {
    if(s[i].toUpperCase() === s[i]) {  
      boxUpper = boxUpper + s[i];
    }
    else {boxLower = boxLower + s[i]};  
  }
  return boxUpper + boxLower;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  //var finalBox = '';
  //var boxString = '';
  //var leftIndex = 0;
  //var rightIndex = 0;
  //var letterCount = 0;
  //for(i = str.length - 1; i >= 0; i--) {
  //  boxString = boxString + str[i];
  //}
  // !hcum os uoy evol I

  //for(i = boxString.length - 1; i >= 0; i--) {     // boxtring.length = 19   
  //  if(boxString[i] === ' ') {      // cuando i = posicion 17 (el espacio) necesito que el cursor este entre 18 y 19
  //    leftIndex = i + 1;
  //    rightIndex = leftIndex + letterCount;
  //    finalBox = finalBox + boxString.slice(leftIndex, rightIndex)
  //    letterCount = 0;
  //  }
  //  letterCount = letterCount + 1;
  //} 
  //return finalBox;

  var mirror = str.split(' ').map(function(word) {
                                  return word.split('').reverse().join('')
                              }                                              ).join(' ');

  return mirror;

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var copiedNumber = numero.toString();  //paso el numero a string
  var arrayOfNumbers = Array.from(copiedNumber);   //el string paso a un array
  var box = arrayOfNumbers.reverse().join('')
  if(copiedNumber === box) {
    return 'Es capicua';
  } else return 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var boxStr = cadena.split('a').join('').split('b').join('').split('c').join('');
  return boxStr;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
 // var boxArray = arr;
 // var orderedArray = [];
 // var box = arr[0];
 // var index = 0;
 // for(j = 0; j <= boxArray.length; j++) {
 //   for(i = 1; i < boxArray.length; i++) {   
 //     if(boxArray[i].length > box.length) {
 //       box = boxArray[i];
 //       index = i
 //     }
 //   }
 //   orderedArray.push(box);
//    boxArray.splice(index, 1);
//  }

//  return orderedArray;

for(i = 0; i < arr.length; i++) {
  for(j = i + 1; j < arr.length; j++) {
    if(arr[i].length > arr[j].length) {
      var auxMayor = arr[i];
      arr[i] = arr[j];
      arr[j] = auxMayor;
    }
  }
}
return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var outputArray = [];
  var contInter = -1;
  for(i = 0; i < arreglo1.length; i++) {
    var numberBox = arreglo1[i]; // guardo el elemento pivot en numberBox
    for(j = 0; j < arreglo2.length; j++) {
      if(numberBox === arreglo2[j]) {
        contInter = contInter + 1;
        outputArray[contInter] = arreglo2[j];
      }
    }
  }
  console.log({outputArray});
  return outputArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

