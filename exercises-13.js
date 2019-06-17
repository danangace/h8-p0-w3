function targetTerdekat(arr) {
      var i = 0;
      var objectO, objectX;
      var dist;
      
      function searchXO() {
          for (i=0; i<arr.length; i++) {
              if (arr[i] === 'o') {
                  objectO = i;      
                  num++;
                  break;
              }
          }
          
          for (i=0; i<arr.length; i++) {
              if (arr[i] === 'x') {
                  objectX = i;
                  break;
              }
          }
      }
      
      searchXO();
            
      if (objectX > objectO) {
          dist = objectX - objectO;
      } else if (objectO > objectX) {
          dist = objectO - objectX;
      } else {
          dist = 0;
      }
      
      return dist;
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