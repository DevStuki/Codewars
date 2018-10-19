/*
Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

If arr is not an array, function should return:

"It's a fake array"
If arr contains elements 5 and 13, function should return:

"It's a black array"
If arr contains neither 5 nor 13, function should return:

"It's a white array"
Some example:

blackAndWhite(5,13) should return "It's a fake array"
blackAndWhite([5,13]) should return "It's a black array"
blackAndWhite([5,12]) should return "It's a white array"
Using string template and ternary operator can make your work easier.
*/

function blackAndWhite(arr){
    // if(Array.isArray(arr) === false) return "It's a fake array";
    
    // if(arr.indexOf(5) >= 0 && arr.indexOf(13) >= 0){
    //     return "It's a black array";
    // }else{
    //     return "It's a white array";
    // }

   return Array.isArray(arr) ? (arr.indexOf(5) >= 0 && arr.indexOf(13) >= 0 ? "It's a black array" : "It's a white array") : "It's a fake array";
}

//이렇게 표현할 수도 있구나.
function blackAndWhite(arr){
    return `It's a ${!Array.isArray(arr)?"fake":arr.indexOf(5)>-1&&arr.indexOf(13)>-1?"black":"white"} array`;
}

console.log(blackAndWhite(5,13));
console.log(blackAndWhite([5,13]));
console.log(blackAndWhite([5,12]));