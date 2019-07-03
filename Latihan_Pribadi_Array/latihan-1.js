/*==================================
Array Mastery: Separate Them
==================================

Nama:________

[INSTRUKSI]
Setiap student di HACKTIV8 memiliki tim project dengan komposisi satu tim berdua. 

Function separateThem akan menerima satu parameter berupa array yang berisi string pasangan nama student dengan format 'NAMA_STUDENT_1 dan NAMA_STUDENT_2'.
Function ini akan memecah setiap kelompok menjadi per orang satu per satu.
[CONTOH]
input: ['Budi dan Badu', 'Indra dan Indri']
input: ['Budi', 'Badu', 'Indra', 'Indri']

input: ['Budi dan Badu', 'Indra dan Indri', 'James dan Rodhie']
input: ['Budi', 'Badu', 'Indra', 'Indri', 'James', 'Rodhie']

input: []
output: []

*/

function separateThem(students) {
    var newGroup = [];
    var class1 = '';
    var class2 = '';
    
    
    for(var i=0; i<students.length; i++){

        var group1 = [];
        var group2 = [];

        if(i%2 !== 0){
            class1 = students[i];
            group1 = class1.split('dan');
            class1 = '';
        } if(i%2 === 0){
            class2 = students[i];
            group2 = class2.split('dan');
            class2='';
            }
            if(group1 === undefined){
                return group2;
            } if(group2 === undefined){
                return group1;
            } else {
                newGroup.push(group1+group2);
            }
        }
        return newGroup;
    }
  
// TEST CASES
console.log(separateThem(['Budi dan Badu'])); // ['Budi', 'Badu']
console.log(separateThem(['Budi dan Michael'])); // ['Budi', 'Michael']
console.log(separateThem(['Budi dan Badu', 'Indra dan Indri'])); // ['Budi', 'Badu', 'Indra', 'Indri']
console.log(separateThem(['Budi dan Badu', 'Indra dan Indri', 'James dan Rodhes'])); // ['Budi', 'Badu', 'Indra', 'Indri', 'James', 'Rhodes']
console.log(separateThem([])); // []