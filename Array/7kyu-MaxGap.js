//https://www.codewars.com/kata/maximum-gap-array-series-number-4
//연속된 수 중에 가장 차이가 많이 나는 수의 차이를 반환

function maxGap(numbers) {
  let gap = numbers
    .sort((a, b) => a - b)
    .map((v, i, arr) => i === 0 || arr[i - 1] - v)
    .sort((a, b) => a - b);

  return Math.abs(gap[0]);
}

console.log(maxGap([13, 10, 2, 9, 5]), 4);
console.log(maxGap([13, 3, 5]), 8);
console.log(maxGap([24, 299, 131, 14, 26, 25]), 168);
console.log(maxGap([-3, -27, -4, -2]), 23);
console.log(maxGap([-7, -42, -809, -14, -12]), 767);
console.log(maxGap([12, -5, -7, 0, 290]), 278);
console.log(maxGap([-54, 37, 0, 64, -15, 640, 0]), 576);
console.log(maxGap([130, 30, 50]), 80);
console.log(maxGap([1, 1, 1]), 0);
console.log(maxGap([-1, -1, -1]), 0);
