/*
https://www.codewars.com/kata/strongn-strong-number-special-numbers-series-number-2/train/javascript
Strong number is the number that the sum of the factorial of its digits is equal to number itself.

For example : 145 , since
1! + 4! + 5! = 1 + 24 + 120 = 145
So, 145 is a Strong number.

Task
Given a number, Find if it is Strong or not .

Number passed is always Positive .
Return the result as String

( strong(1), "STRONG!!!!" );
( strong(2), "STRONG!!!!" );
( strong(145), "STRONG!!!!" );
( strong(7), "Not Strong !!" );
( strong(93), "Not Strong !!" );
( strong(185), "Not Strong !!" );
*/

function strong(num){
    var sum = num >= 10 ? (num+"").split("").map(n => parseInt(n)).reduce((a, v) => a + factorial(v)) : factorial(num);
    return num === sum ? "STRONG!!!!" : "Not Strong !!";
}

function factorial(num){
    return num < 0 ? -1 : num == 0 ? 1 : num * factorial(num - 1);
}

console.log( strong(1));
console.log( strong(2));
console.log( strong(145));
console.log( strong(7));
console.log( strong(93));
console.log( strong(185));