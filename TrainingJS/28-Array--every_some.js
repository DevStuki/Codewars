/*
Coding in function ```mirrorImage```. 
function accept 1 parameter ```arr```, it's a number array. 
Your task is find the first pair of mirror-image number and return as an array. 
The two number must be adjacent, and the returned array is in accordance with the order from left to right.

What's the mirror-image number? 
for example:```123``` and ```321``` is a pair of mirror-image number. 
Two the same number of palindromes can also be seen as a pair of mirror-image number, such as ```121``` and ```121```. 

If no such number is found, return```[-1,-1]```

Some example:
```
mirrorImage([11,22,33,33,22,11]) should return [33,33]
mirrorImage([454,86,57,75,16,88]) should return [57,75]
mirrorImage([454,0,57,0,16,88]) should return [-1,-1]
```
*/
var [a, b] = [0, 0];
function mirrorImage(arr){
    
    var isCheck = arr.some((x, i, arr) => checkNum(x, i, arr));
    console.log(a, b);
    if(isCheck) return [a, b];
    else return [-1, -1];
}

function checkNum(x, i, arr){    
    a = arr[i];
    b = arr[i+1];
    console.log(a, b);
    if(isNaN(b)) return false;
    
    return (a.toString().split("").join("") == b.toString().split("").reverse().join("") || a == b);
}

//Best Practice
//이게 더 간단하고 편하지만 some을 사용해서 해결하려고 했다.
function mirrorImage(arr){
    for(var i=0;i<arr.length-1;i++){
      if(arr[i].toString().split('').reverse().join('')===arr[i+1].toString())return [arr[i],arr[i+1]]
    }
    return [-1,-1]
}


console.log(mirrorImage([11,22,33,33,22,11]));
console.log(mirrorImage([454,86,57,75,16,88]));
//console.log(mirrorImage([454,0,57,0,16,88]));
