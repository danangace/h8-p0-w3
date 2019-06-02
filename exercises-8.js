function pasanganTerbesar(num) {
    var array = num.toString();
    var arrayBaru = array.split("");

    var pasanganAngka = [];
    for(i = 0; i < arrayBaru.length; i++){
      pasanganAngka.push(arrayBaru[i]+arrayBaru[i+1]);
    }
    pasanganAngka.pop();
    pasanganAngka.sort(function(a,z){ return (z-a)})
    return pasanganAngka[0];
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99