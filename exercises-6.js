function angkaPalindrome(num){
  for(var i = num+1; !palindrome; i++) {
    var palindrome = true;
    var angka = "" + i;

    for(var j = 0; j < angka.length / 2; j++) {
        if(angka[j] !== angka[angka.length-1-j]) {
            palindrome = false;
        }
    }
    if(palindrome) {
        return i;
    }
  }
}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
