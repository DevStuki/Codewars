/*
2차원 배열을 받아 하나의 배열로 만들고 내림차순으로 정렬하기
*/

"use strict";

function flattenAndSort(array) {
  return [].concat(...array).sort((a, b) => a - b)
}


console.log(flattenAndSort([]))
console.log(flattenAndSort([[], [1]]))
console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]))