function tentukanDeretGeometri(arr) {
    for(var i = arr.length-1; i >= 0; i--){
      for(var j = arr.length-2; i>= 0;  j--){
        if( arr[i]/arr[i-1] !== arr[j]/arr[j-1]){
          return false;
          } else {
            return true;
          }
        }
      }
    }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false