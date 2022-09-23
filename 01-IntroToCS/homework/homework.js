'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  num = num.split('');
  var suma = 0;
  for (var i = 0; i < num.length; i++) {
    suma = suma + Math.pow(2, num.length-1-i)*num[i];
  }
  return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  var bin=[];
  while(num !==0){
    bin.unshift(num%2)
    num=Math.floor(num/2)
  }
  return bin.join("")
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}