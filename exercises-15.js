function groupAnimals(animals) {
        var newAnimals=[];
        
        for (var i=0; i<animals.length; i++){
             
            var res=[];
            var charHewan= animals[i][0];
            var hewan=animals[i];
            
            for(var j=animals.length-1; j>i; j--){
              if(charHewan===animals[j][0]){
                hewan=hewan+', '+animals[j]
                animals.splice(j,1);
              }
            }
            hewan = hewan.split(', ');
            newAnimals.push(hewan)  
            newAnimals.sort()            
        }
        return newAnimals;                    
    }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]