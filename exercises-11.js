function tentukanDeretAritmatika(arr) {
    for(var i = arr.length-1; i >= 0; i--){
        for(var j = arr.length-2; j >= 0; j--){
            if((arr[i]-arr[i-1]) !== (arr[j]-arr[j-1])){   
                return false;                            
            } else {
                return true;
            }
        }
    }
}
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false