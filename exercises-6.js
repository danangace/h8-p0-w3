function angkaPalindrome(num){
  var angPal = num.toString(); // "117"
  var angPalBaru = '';

  while (angPal !== angPalBaru){ // "117" !== ""
    var angPalBaru = '';
    var angPal = num.toString();
    for(i = angPal.length-1; i >=0; i--){
      angPalBaru += angPal[i];
    }
    if ( angPal === angPalBaru){ // "117" === "711"
      return num;
    } else {
      num++;
      // 118
    }
  }
}
    


  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
