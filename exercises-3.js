var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(input){
    for(var i = 0; i < input.length; i++){
        console.log('Nomor Id : ' + input[i][0]);
        console.log('Nama Lengkap : ' + input[i][1]);
        console.log('TTL : ' + input[i][2] + ' ' + input[i][3]);
        console.log('Hobi : ' + input[i][4]);
        console.log();
    }
}

dataHandling(input);


// hardCodenya

// akses nilai array [0][0]; print console.log nomor ID 
// akses nilai array [0][1]; print console.log Nama Lengkap
// akses nilai array [0][2]; print console.log TTL
// akses nilai array [0][3]; print console.log Hobi