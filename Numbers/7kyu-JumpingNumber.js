/*
인접한 모든 수가 1씩 차이 나는 수
https://www.codewars.com/kata/jumping-number-special-numbers-series-number-4
*/

function jumpingNumber(n) {
  if (n < 10) return "Jumping!!";

  var result = [];
  let arr = n
    .toString()
    .split("")
    .map(v => parseInt(v))
    .reduce((pre, cur) => {
      result.push(pre - cur);
      return cur;
    });
  return result.every(n => Math.abs(n) === 1) ? "Jumping!!" : "Not!!";
}

//Best Practice
function jumpingNumber(n) {
  return [...("" + n)].every(
    (v, i, arr) => i === 0 || Math.abs(arr[i - 1] - v) === 1
  )
    ? "Jumping!!"
    : "Not!!";
}

// console.log(jumpingNumber(1), "Jumping!!");
// console.log(jumpingNumber(7), "Jumping!!");
// console.log(jumpingNumber(9), "Jumping!!");
console.log(jumpingNumber(234), "Jumping!!");
console.log(jumpingNumber(32), "Jumping!!");
console.log(jumpingNumber(79), "Not!!");
console.log(jumpingNumber(98), "Jumping!!");
console.log(jumpingNumber(8987), "Jumping!!");
console.log(jumpingNumber(4343456), "Jumping!!");
console.log(jumpingNumber(98789876), "Jumping!!");
