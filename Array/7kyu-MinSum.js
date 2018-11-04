// https://www.codewars.com/kata/minimize-sum-of-array-array-series-number-1

// function minSum(arr) {
//   var sort = arr.sort((a, b) => a - b);
//   var len = sort.length / 2;
//   var result = 0;

//   for (let i = 0; i < len; i++) {
//     result += sort[i] * sort[sort.length - 1 - i];
//   }
//   return result;
// }

//BEST
//sort는 배열 원본을 바꾸기 떄문에 아래와 같이 할 수 있다.
function minSum(arr) {
  return arr
    .sort((a, b) => a - b)
    .slice(0, arr.length / 2)
    .reduce((acc, cur, index) => (acc += cur * arr[arr.length - index - 1]), 0);
}

console.log(minSum([5, 4, 2, 3]), 22);
console.log(minSum([12, 6, 10, 26, 3, 24]), 342);
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]), 74);
