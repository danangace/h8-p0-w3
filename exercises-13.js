function targetTerdekat(arr) {
    var findX = false;
    var findO = false;
    var o = 0;
    var findingRightX = false;
    var leftX = 0 - arr.length;
    var rightX = arr.length * 2;
  
    for(var i = 0; i < arr.length && !findingRightX; i++) {
        if(arr[i] === 'o') {
            o = i;
            findO = true;
        }

        if(arr[i] === 'x') {
            findX = true;
            if(findO) {
                rightX = i;
                findingRightX = true;
            } else {
                leftX = i;
            }
        }
    }

    var left = o - leftX;
    var right = rightX - o;
    
    if(!findX) {
        return 0;
    } else if(left < right){
        return left;
    } else {
        return right;
    }
  }
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2


/*
Problem

Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter 
berupa array yang terdiri dari karakter. Function akan me-return jarak spasi 
antar karakter 'o' dengan karakter 'x' yang terdekat. 
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], 
maka jarak terdekat dari 'o' ke 'x' adalah 2. 
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.*/