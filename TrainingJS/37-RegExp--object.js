/*
Coding in function ```countAnimals```. 
function accept two parameters: ```animals```, 
a string contains some animals; ```count```, 
an array list of which animals we should count. 
The result should be a number array.

Some examples:
```
countAnimals("dog,cat",["dog","cat"]) should return [1,1]
countAnimals("dog,cat",["dog","cat","pig"]) should return [1,1,0]
countAnimals("dog,dog,cat",["dog","cat"]) should return [2,1]
countAnimals("dog,dog,cat",["pig","cow"]) should return [0,0]
```
count에 들어간 동물들의 수가 몇마리인지 배열로 반환

*/

function countAnimals(animals,count){ 
    var result = [];
    for( x of count){
        result.push(animals.split(x).length-1);
    }
    return result;
}

//Best Practice
function countAnimals(animals, count){    
    return count.map(animal => (animals.split(new RegExp(animal, "g")).length-1));
}

console.log(countAnimals("dog,cat",["dog","cat"]));
console.log(countAnimals("dog,cat",["dog","cat","pig"]));
console.log(countAnimals("dog,dog,cat",["dog","cat"]));
console.log(countAnimals("dog,dog,cat",["pig","cow"]));