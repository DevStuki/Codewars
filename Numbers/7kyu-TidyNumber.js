/*
https://www.codewars.com/kata/tidy-number-special-numbers-series-number-9
크기가 큰 순서로 나열된 숫자 가려내기
*/

function tidyNumber(n) {
  return [...('' + n)].every((v, i, arr) => i === 0 || arr[i - 1] <= v);
}

//BEST
function tidyNumber(n) {
  return [...(n += '')].sort().join`` == n;
}

console.log(tidyNumber(12), true);
console.log(tidyNumber(102), false);
console.log(tidyNumber(9672), false);
console.log(tidyNumber(2789), true);
console.log(tidyNumber(2335), true);
