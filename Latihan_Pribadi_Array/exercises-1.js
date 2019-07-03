/*
===================                                                                    ====
Soal Array 1 - Pair Sum
=======================

[INSTRUKSI]
Diberikan 2 input: array dan targetSum
Output ada berapa pasangan nilai dalam array yang memiliki jumlah sama dengan
targetSum, sepasang nilai tidak boleh memiliki indeks yang sama

[CONTOH]
1)	[1 ,2, 3, 4, 5], targetSum = 8		-->		1
*/

function pairSum(arr, targetSum){
    // start code here
    var result = 0;
  for (var i = 0; i < arr.length; i++){
      for (var j = i+1; j < arr.length; j++){
        if (arr[i] + arr[j] === targetSum){
          result++;
        }
      }
    }
    return result;    
  }
  
  console.log(pairSum([1, 2, 3, 4, 5], 8));	// 1
  console.log(pairSum([3, 2, 1, 5, 2], 4));	// 2
  console.log(pairSum([1, 1, 1], 2)); // 3
  console.log(pairSum([1, 2, 3], 6)); // 0



  // var output = 0;

  //   for(var i=0; i<arr.length; i++){      // to access arr
  //     for(var j=arr.length-1; j>i; j--){    
  //     if(arr[i]+arr[j] === targetSum && i !== j){
  //       output++;
  //     }
  //   }
  // }
  //   return output;