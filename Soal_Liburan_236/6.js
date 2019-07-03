/*

CALCULATE NUMBER
================

Calculate number adalah sebuah fungsi untuk melakukan operasi matematika.
Fungsi akan menerima input berupa persamaan matematika dan mengembalikan nilai
berupa hasil kalkulasi.

RULES:
  - fungsi hanya menghandle operasi tambah dan kurang saja
  - fungsi dapat menerima angka satuan, puluhan, dan ratusan

EXAMPLE:
  console.log(calculateNumber("2+3+4+5-4-3-2"))
  OUTPUT: 5

*/

function calculateNumber(strNum) {
  // code below here
  var currentNumber = '';
  var currentSymbol = '';
  var currentValue = 0;

  for (var i = 0; i < strNum.length; i++){
    if (strNum[i] === '+'){
      currentValue = currentValue + Number(currentNumber);
      currentNumber = '';
      currentSymbol = '+';
    }
    if (strNum[i] === '-'){
      currentValue = currentValue - Number(currentNumber);
      currentNumber = '';
      currentSymbol = '-';
    } else {
      currentNumber += strNum[i];
    }
  }
  if (currentSymbol === '-'){
    currentValue -= Number(currentNumber);
  } else {
    currentValue += Number(currentNumber);
  }
  return currentValue;
}

console.log(calculateNumber("1+10+100")) // 111
console.log(calculateNumber("100")) // 100
console.log(calculateNumber("200-200+100")) // 100