/*
https://www.codewars.com/kata/special-number-special-numbers-series-number-5
*/

function specialNumber(n) {
  if (n < 0) return 'NOT!!';

  let arr = n
    .toString()
    .split('')
    .map(v => parseInt(v));

  return arr.some(v => 5 < v) ? 'NOT!!' : 'Special!!';
}

//Best
//RegExp로 간단하게 처리 가능, 숫자도 문자열처럼 검색이 되는구나..
function specialNumber(n) {
  return /[6-9]/.test(n) ? 'NOT!!' : 'Special!!';
}

console.log(specialNumber(2), 'Special!!');
console.log(specialNumber(3), 'Special!!');
console.log(specialNumber(6), 'NOT!!');
console.log(specialNumber(9), 'NOT!!');
console.log(specialNumber(11), 'Special!!');
console.log(specialNumber(55), 'Special!!');
console.log(specialNumber(26), 'NOT!!');
console.log(specialNumber(92), 'NOT!!');
console.log(specialNumber(25432), 'Special!!');
console.log(specialNumber(2783), 'NOT!!');
