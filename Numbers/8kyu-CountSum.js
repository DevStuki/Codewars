/* 
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

//다른 사람들 답을 보니 나는 지나치게 확인을 많이 했다.
function countPositivesSumNegatives(input) {
    if(input === null || input === "" || input.length === 0 || input === undefined) return [];

    let posCount = 0;
    let negSum = 0;

    for(let i = 0; i < input.length; i++){
        if(input[i] === 0 || input[i] === NaN) continue;

        input[i] > 0 ? posCount++ : negSum += input[i];        
    }
    return [posCount, negSum];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, NaN, undefined, null, -11, -12, -13, -14]));
console.log(countPositivesSumNegatives(""));
console.log(countPositivesSumNegatives([]));