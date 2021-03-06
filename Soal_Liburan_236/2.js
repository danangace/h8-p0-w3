/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  yang paling cepat sampai ke tujuan, berdasarkan laju dan kecepatan sampai di 
  tujuan.

  [INPUT]
  cars = [['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]]
  info: ['PLAT NOMOR', 'SPEED', 'CURRENT POSITION']
  totalKM = 450

  [PROCESS]
  butuh waktu = jarak tersisa / kecepatan
  cars ke - 0 = butuh waktu 2,5 jam
  cars ke - 1 = butuh waktu 2,25 jam
  cars ke - 2 = butuh waktu 2.35 jam
  cars ke - 3 = butuh waktu 0.63 jam

  [OUTPUT]
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function winner (cars, totalKM) {
  
  var newArr = [];

  for(var i = 0; i < cars.length; i++){

    var carsDistance = totalKM - cars[i][2];
    var carsTime = carsDistance/cars[i][1];
    var timeAndDistance = [cars[i][0], carsTime];
    newArr.push(timeAndDistance);
  }
    
    for(var j = 0; j < newArr.length; j++){

      for( var k = j+1; k < newArr.length; k++){
        if(newArr[j][1] > newArr[k][1]){
            var temp = newArr[j];
            newArr[j] = newArr[k];
            newArr[k] = temp;
        }
      }
    }
    var carsWinner = [];
    for ( var i = 0; i < newArr.length; i++){
        carsWinner.push(newArr[i][0]);
    }
    return carsWinner;
  }


console.log(winner([['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]], 450));
/*
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]
*/