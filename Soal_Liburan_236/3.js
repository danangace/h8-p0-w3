/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  menghitung persentase jumlah pemudik kendaraan.

  [INPUT]
  cars = ['B', 'D', 'B', 'B', 'A', 'C', 'D']

  [PROCESS]
  cars plat - B ada 3/7
  cars plat - D ada 2/7
  cars plat - A ada 1/7
  cars plat - C ada 1/7

  [OUTPUT]
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapuns
*/

function mostCarsByState (cars) {
  //code below here
  var banyakMobil = cars.length
  var nilaiPerMobil = 1*100/cars.length
  var jawaban = []
  for (var i = 0; i< cars.length; i++) {
    var car = cars[i]
    var ada = false
    var index = null
    for (var j = 0; j < jawaban.length; j++) {
      if (car === jawaban[j]) {
        ada = true
        index = j
      } 
    }

    if (ada) {
      jawaban[index+1] += nilaiPerMobil
    } else {
      jawaban.push(car, nilaiPerMobil)
    }
  }
    return jawaban;
};

console.log(mostCarsByState(['B', 'D', 'B', 'B', 'A', 'C', 'D']));
/*
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]
*/
  // CARA 1.
  // var banyakMobil = cars.length
  
  // var aCount = 0
  // var bCount = 0
  // var cCount = 0
  // var dCount = 0
  // for (var i = 0; i < banyakMobil; i++) {
  //   var car = cars[i]
  //   if (car === 'A') { 
  //     aCount ++
  //   } else if (car === 'B') {
  //     bCount ++
  //   } else if (car === 'C') {
  //     cCount ++
  //   } else if (car === 'D') {
  //     dCount ++
  //   }
  // }
  // var sorted = []
  // var percentile = ['A', aCount*100/banyakMobil, 'B', bCount*100/banyakMobil, 'C', cCount*100/banyakMobil, 'D', dCount*100/banyakMobil]
  // for (var i = 0; i <banyakMobil; i++) {
  //   for (var j = 0; j < percentile.length; j++) {
  //     if (cars[i] === percentile[j]) {
  //       sorted.push(percentile[j], percentile[j+1])
  //     }
  //   }
  // }




  // CARA 2.
  // var banyakMobil = cars.length
  // var nilaiPerMobil = 1*100/cars.length
  // var jawaban = []
  // for (var i = 0; i< cars.length; i++) {
  //   var car = cars[i]
  //   var ada = false
  //   var index = null
  //   for (var j = 0; j < jawaban.length; j++) {
  //     if (car === jawaban[j]) {
  //       ada = true
  //       index = j
  //     } 
  //   }

  //   if (ada) {
  //     jawaban[index+1] += nilaiPerMobil
  //   } else {
  //     jawaban.push(car, nilaiPerMobil)
  //   }

  // }
  // return jawaban