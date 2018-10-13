/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Example:

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12
Notes:

The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/

function makeNegative(num) {
    return num <= 0 ? num : num * -1;
}

//Best Practice
//이렇게 간단하게 처리가 가능하다. Math관련 메서드를 공부할 것.
// function makeNegative(num){
//     return -Math.abs(num);
// }

console.log(makeNegative(1)); // return -1
console.log(makeNegative(-5)); // return -5
console.log(makeNegative(0)); // return 0
console.log(makeNegative(0.12)); // return -0.12