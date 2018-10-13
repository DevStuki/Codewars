/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

//array의 여러 기능을 더욱 공부해야 함
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return args.sort((a, b) => a - b).shift();
    }
}

//Best Practice
//가장 작은 수를 찾아내는 Math함수인가보다. 기억해둘 것.
//array의 경우에는 ...을 붙이는 건가? 알아봐야함
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         return Math.min(...args);
//     }
// }


var sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([78,56,232,12,8]));
console.log(sif.findSmallestInt([78,56,232,12,18]));
console.log(sif.findSmallestInt([78,56,232,412,228]));
console.log(sif.findSmallestInt([78,56,232,12,0]));
console.log(sif.findSmallestInt([1,56,232,12,8]));
