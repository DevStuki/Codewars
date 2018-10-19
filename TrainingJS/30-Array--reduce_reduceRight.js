/*
 Coding in function ```tailAndHead```. 
 function accept 1 parameter ```arr```(a number array). 

We use an example to explain this task:

You got an array ```[123,456,789,12,34,56,78]```.

First, from left to right, the tail of an element and the head of the next element are added together. 
The results are put into an array. 

like this:
```
[123,456,789,1 2,3 4,5 6,78]
   3+4 6+7 9+1 2+3 4+5 6+7  
    |   |   |   |   |   |
   [7 ,13 ,10 , 5 , 9 ,13]
```
And then, Calculate their product and return it(```7x13x10x5x9x13=532350```)

So, ```tailAndHead([123,456,789,12,34,56,78]) should return 532350 ```

All elements of arr are positive integer. 
If a number is less than 10, its head and tail are the same. 
Please try to use ```reduce()``` solve this kata.

Some example:
```
tailAndHead([1,2,3,4,5]) should return 945
tailAndHead([111,2345,66,78,900]) should return 7293
tailAndHead([35456,782,569,2454,875]) should return 12012
```
 */

// function tailAndHead(arr){
//     let arr2 = arr.map((v, i, arr) => {           
//         let first, second;        
//         if(!isNaN(arr[i+1])){
//             let last = arr[i].toString();
//             first = parseInt(last[last.length-1]);        
//             second = parseInt(arr[i+1].toString()[0]);
//         }
//         return first + second;
//     })

//     arr2.pop();
//     return arr2.reduce((a, b) => a*b);
// }

//Best Practice
function tailAndHead(arr){
    var result = 1;
    arr.reduce((pre, cur) => {
        console.log(pre, cur);
        var n1 = pre.toString();
        var n2 = cur.toString();
        result *= parseInt(n1[n1.length-1]) + parseInt(n2[0]); //Reduce자체 기능과는 상관없이 result에 모은다.
        return cur; //현재 값을 바꾸지 않아서 다음 누적값(pre)이 이전 값이 된다! 
    });
    return result;
}

console.log(tailAndHead([123,456,789,12,34,56,78]));
console.log(tailAndHead([1,2,3,4,5]));
console.log(tailAndHead([111,2345,66,78,900]));
console.log(tailAndHead([35456,782,569,2454,875]));

