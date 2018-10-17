/*
Coding in function ```threeInOne```. 
function accept 1  parameters ```arr```, it's a 1D number array. 
Your task is to merge each of the 3 elements into 1 elements (sum value) and return the result. 

Note1: You should not modify the original array.

Note2: Because this is a beginner Kata, and due to the author's mercy ;-), 
so you do not have to verify the validity of the parameter, 
and do not worry about the number of elements of the array is not a multiple of 3.

Example:
```
threeInOne( [1,2,3]) should return [6]
threeInOne( [1,2,3,4,5,6]) should return [6,15]
threeInOne( [1,2,3,4,5,6,7,8,9]) should return [6,15,24]
threeInOne( [1,3,5,2,4,6,7,7,7]) should return [9,12,21]
```
*/

/*
function threeInOne(arr){
    let temp = arr.slice();
    let sumArr = [];
    let finalArr = [];
    let len = arr.length/3;
    
    for(let i = 0; i < len; i++){
        sumArr[i] = temp.splice(0, 3);        
    }

    for(let i = 0; i < sumArr.length; i++){
        finalArr[i] = sumNums(sumArr[i]);
    }
    
    return finalArr;
}

function sumNums(arr){
    let sum = 0;
    for(val of arr){
        sum += val;
    }
    return sum;
}
*/

//Best Practice
function threeInOne(arr){
    var result = [];
    for(var i = 0; i < arr.length; i += 3){
        result.push(arr[i] + arr[i+1] + arr[i+2]);
    }
    return result;
}

console.log(threeInOne( [1,2,3] ));
console.log(threeInOne( [1,2,3,4,5,6] ));
console.log(threeInOne( [1,2,3,4,5,6,7,8,9] ));
const arr1 = [1, 3, 5, 2, 4, 6, 7, 7, 7];
const copy = arr1.slice();
console.log(threeInOne(arr1));
console.log(arr1 , copy);