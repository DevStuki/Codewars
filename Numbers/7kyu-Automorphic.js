/*
https://www.codewars.com/kata/automorphic-number-special-numbers-series-number-6

제곱을 했을 때 뒤의 숫자가 원래 숫자와 같은 수 검증
*/
function automorphic(n) {
  //들어온 수를 제곱
  //맨뒤를 정규표현식으로 검사
  let num = Math.pow(n, 2) + '';
  let reg = new RegExp(`${n}$`);
  return reg.test(num) ? 'Automorphic' : 'Not!!';
  //console.log(num, reg);
}

//BEST
const automorphic = n =>
  String(n * n).endsWith(String(n)) ? 'Automorphic' : 'Not!!';

console.log(automorphic(1), 'Automorphic');
console.log(automorphic(3), 'Not!!');
console.log(automorphic(6), 'Automorphic');
console.log(automorphic(9), 'Not!!');
console.log(automorphic(25), 'Automorphic');
console.log(automorphic(53), 'Not!!');
console.log(automorphic(76), 'Automorphic');
console.log(automorphic(95), 'Not!!');
console.log(automorphic(625), 'Automorphic');
console.log(automorphic(225), 'Not!!');
