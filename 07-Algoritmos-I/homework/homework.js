'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factors = [1]; // [1, 2, 5]
  let x = 2; // 5

  while(num > 1){ // 1 > 1
    if(num % x === 0){ // 5 % 5
      factors.push(x); // 5
      num = num / x; // 5 = 5 / 5 ---> 1
    }
    else{
      x++
    }
  }
  return factors; // [1, 2, 5]

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
   //swappea el mayor al final

// [2, 3, 5, 7, 9]
//           ^ 


// swap = false
// aux = 7

let swap = true;

while(swap){
  swap = false;

  for(let i = 0; i < array.length - 1; i++){
    if(array[i] > array[i + 1]){ // 
      let aux = array[i] // 7
      array[i] = array[i + 1]
      array[i + 1] = aux
      swap = true
    }
  }
}
return array; // [2, 3, 5, 7, 9]

}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
   // Busca la posición correcta y compara hacia atrás

//       [2, 3, 5, 7, 9]
//                    i
//       j

for(let i = 1; i < array.length; i++){
  let j = i - 1;
  let aux = array[i]; // 3

  while(j >= 0 && aux < array[j]){ // 3 < 2
    array[j + 1] = array[j];
    j--;
  }
  array[j + 1] = aux; // 
}
return array; // [2, 3, 5, 7, 9]

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
   //    [1, 3, 4, 7, 9]
  //                   i
  //                    j

// min = 4

for (let i = 0; i < array.length; i++) {
  let min = i;

  for (let j = i + 1; j < array.length; j++) {
    if(array[j] < array[min]){ // 9 < 7
      min = j;
    }
  }

  if(i !== min){ // 
    let aux = array[i]; // 
    array[i] = array[min];
    array[min] = aux;
  }
}
return array; // [1, 3, 4, 7, 9]

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
