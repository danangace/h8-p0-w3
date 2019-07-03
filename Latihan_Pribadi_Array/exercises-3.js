/*

===============================
Soal Array 3 - Remove Duplicate
===============================

[INSTRUKSI]
Tersedia satu input array yang memiliki angka yang duplikat, Tugas kamu menghapus angka yang duplikat tersebut.

Output: array yang telah di-sorted, semua duplikat dihapus

[CONTOH]

1) [1, 4, 3, 1, 2, 2, 4]	-->	[1, 2, 3, 4]

*/

function hapusDuplikat(arr) {
    // start code here
    var newArray = arr.sort();

    for(var i=0; i<newArray.length; i++){
        for(var j=i+1; j<newArray.length; j++){
                if(newArray[i] === newArray[j]){
                    newArray.splice(j, 1);
                } 
            }
        }
        for(var k=0; k<newArray.length; k++){
            for(var l=k+1; l<newArray.length; l++){
                if(newArray[k] === newArray[l]){
                    newArray.splice(l, 1);
                }
            }
        }
        return newArray;
    }
console.log(hapusDuplikat([1, 4, 3, 1, 2, 2, 4])); // [1, 2, 3, 4]
console.log(hapusDuplikat([2, 2, 2, 2])); // [2]
console.log(hapusDuplikat([1, 2, 3])); // [1, 2, 3]
console.log(hapusDuplikat([6, 5, 3, 2])); // [2, 3, 5, 6]