/*
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
https://www.codewars.com/kata/disarium-number-special-numbers-series-number-3/javascript
*/


function disariumNumber(n) {
  var sum = (n + "")
    .split("")
    .map(n => parseInt(n))
    .map((n, i) => Math.pow(n, i + 1))
    .reduce((a, n) => (a += n));
  return sum === n ? "Disarium !!" : "Not !!";
}

console.log(disariumNumber(89), "Disarium !!");
console.log(disariumNumber(564), "Not !!");
console.log(disariumNumber(1024), "Not !!");
console.log(disariumNumber(135), "Disarium !!");
console.log(disariumNumber(136586), "Not !!");
