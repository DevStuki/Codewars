//https://www.codewars.com/kata/array-leaders-array-series-number-3
//array에서 요소가 오른쪽의 모든 합보다 큰 요소만 걸러내기

var arrayLeaders = numbers => {
  return numbers.filter((v, i) => {
    let sum = 0;

    i === numbers.length - 1
      ? (sum = 0)
      : (sum = numbers.slice(i + 1).reduce((a, b) => a + b));

    return v > sum;
  });
};

console.log(arrayLeaders([1, 2, 3, 4, 0]), [4]);
console.log(arrayLeaders([16, 17, 4, 3, 5, 2]), [17, 5, 2]);
console.log(arrayLeaders([-1, -29, -26, -2]), [-1]);
console.log(arrayLeaders([-36, -12, -27]), [-36, -12]);
console.log(arrayLeaders([5, -2, 2]), [5, 2]);
console.log(arrayLeaders([0, -1, -29, 3, 2]), [0, -1, 3, 2]);
