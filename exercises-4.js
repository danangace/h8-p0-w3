var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
var inputBaru = [];
var inputDua = [];
function dataHandling2(input){
        input.splice(1, 1, "Roman Alamsyah Elsharawy");
        input.splice(2, 1, "Provinsi Bandar Lampung");
        input.splice(4, 1, "Pria", "SMA International Metro");
    console.log(input);
        var ttl = input[3];
        var tanggal = ttl.substr(0,2);
        var bulanStr = ttl.substr(3,2);
        var tahun = ttl.substr(6,4);
        var bulan = Number(bulanStr);
    switch (bulan){
        case 01:
        console.log('Januari');
        break;
        case 02:
        console.log('Februari');
        break;
        case 03:
        console.log('Maret');
        break;
        case 04:
        console.log('April');
        break;
        case 05:
        console.log('Mei');
        break;
        case 06:
        console.log('Juni');
        break;
        case 07:
        console.log('Juli');
        break;
        case 08:
        console.log('Agustus');
        break;
        case 09:
        console.log('September');
        break;
        case 10:
        console.log('Oktober');
        break;
        case 11:
        console.log('November');
        break;
        case 12:
        console.log('Desember');
        break;
    }
    inputBaru.push(tanggal);
    inputBaru.push(bulanStr);
    inputBaru.push(tahun);
    inputBaru.sort(function(i,j){ return j-i});
    console.log(inputBaru);
    inputDua.push(tanggal);
    inputDua.push(bulanStr);
    inputDua.push(tahun);
    var inputTiga = inputDua.join('-');
    console.log(inputTiga);
    var name1 = input[1];
    var name = name1.substr(0,15);
    console.log(name);
}

dataHandling2(input);

// var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
// dataHandling2(input);var ttl = input[3];

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */