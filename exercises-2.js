function balikString(array){
    var balikKata = '';
    var stringBalik = array.length;
    for(var i = stringBalik-1; i >= 0; i--){
        balikKata += array[i];
    }
    return balikKata;
}

console.log(balikString('hello world!'));