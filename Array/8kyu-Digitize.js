/*
Convert number to reversed array of digits
Given a random number:

C#: long;
C++: unsigned long;
You have to return the digits of this number within an array in reverse order.
*/

function digitize(num){
    let str = num.toString().split("").reverse();
    let arr = [];
    for(let i = 0; i < str.length; i++){
        arr[i] = parseInt(str[i]);
    }
    return arr;
}

//Best Practice
//이렇게 간단히 표현된다! map은 원하는 형태로 바꾸어 입혀주는 것 같다.
// function digitize(n){
//     return String(n).split("").map(Number).reverse();
// }

console.log(digitize(35231));