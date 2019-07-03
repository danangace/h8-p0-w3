/*
========================
Soal 4 : Number Grouping
========================

Disediakan sebuah function numberGrouping yang bertugas untuk menerima sebuah parameter berupa angka, 
dan mengembalikan susunan angka baru yang merupakan hasil pengelompokan berdasarkan 3 digit angka. 
Apabila jumlah angka yang belum dikelompokan ada 4 maka akan dibagi menjadi 2 buah 2 digit angka tidak 3 dan 1.


Ex: Input: [ 1 , 2 , 3 , 4 , 5 , 6 ]
Output: 123-456
Input: [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 1]
Output: 123-456-78-91
Input: [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8]
Output: 123-456-78

*/

function numberGrouping(angka) {
      //pisahkan yang bisa dibagi 3 dan tidak
    if(angka.length % 3 === 0){
      
      //looping untuk masukan ke temporer variabel
        var containerOne = [];
          var realArray = [];
            var containerTwo = [];
            var containerThree = [];

            for(var i=0; i<angka.length; i++){
              containerOne += angka[i];
                if(containerOne.length === 3){
                  realArray.push(containerOne);
                    containerOne=[];
              }
            }
      //yang tidak bisa di bagi tiga tentukan modulonya berapa
    } else if (angka.length % 6 === 4){

        var containerTwo = [];
        var realArray = [];
          for(var j=0; j<6; j++){
            containerTwo += angka[j];
              if(containerTwo.length === 3){
                realArray.push(containerTwo);
                  containerTwo=[];

                  var containerTwo = [];
                    for(var j=6; j<angka.length; j++){
                      containerTwo += angka[j];
                        if(containerTwo.length === 2){
                          realArray.push(containerTwo);
                            containerTwo=[];
                    }
                }
            }
          }
    } else if (angka.length % 3 === 1){

      var realArray = [];
      var containerThree = [];
        for(var k=0; k<3; k++){
          containerThree += angka[k];
            if(containerThree.length === 3){
              realArray.push(containerThree);
                containerThree=[];

                  var containerThree = [];
                    for(var k=3; k<7; k++){
                      containerThree += angka[k];
                        if(containerThree.length === 2){
                          realArray.push(containerThree);
                            containerThree=[];
                      }
                    }
                  }
                }
              }
              return realArray;
            }
          
  
  console.log(numberGrouping([4,6,7,9,2,9]));
  /*
  [
    [ '467' ],
    [ '929' ]
  ]
  */
  
  console.log(numberGrouping([6,3,1,8,4,7,9,3,5,8]));
  /*
  [
    [ '631' ],
    [ '847' ],
    [ '93'  ],
    [ '58'  ]
  ]
  */
  
  console.log(numberGrouping([1,8,4,7,3,7,1]));
  /*
  [
    [ '184' ],
    [ '73'  ],
    [ '71'  ]
  ]
  */
  
  // console.log(numberGrouping([4,6,7,9,2,9])); //467-929
  // console.log(numberGrouping([6,3,1,8,4,7,9,3,5,8])); //631-847-93-58
  // console.log(numberGrouping([1,8,4,7,3,7,1])); //184-73-71