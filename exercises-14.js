function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var odd = [];
    var even = [];
    var threeMultiplying = [];
    var kelompokAngka = [];

    for(i = 0; i < arr.length; i++){
      if ( arr[i] % 2 === 0 && arr[i] % 3 !== 0 ){
        odd.push(arr[i]);
      } if ( arr[i] % 2 !== 0 && arr[i] % 3 !== 0 ){
        even.push(arr[i]);
      } if ( arr[i] % 3 === 0 ){
        threeMultiplying.push(arr[i]);
      }
      kelompokAngka[0] = odd;
      kelompokAngka[1] = even;
      kelompokAngka[2] = threeMultiplying;
    }   
    return kelompokAngka;
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]