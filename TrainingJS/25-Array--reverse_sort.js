/*
Coding in function ```sortIt```. 
function accept 1  parameters ```arr```, it's a number array. 
Your task is to sort the array according to the specified conditions, 
and returns a new array(should not modify the original array).

conditions1: according to the number of elements(in ascending order)
for example:
```
sortIt([1,1,1,2,2,3]) should return [3,2,2,1,1,1]
because [1,1,1,2,2,3] has one 3, two 2 and three 1
```
conditions2: If the same number of elements, 
according to the number values(in descending order)
for example:
```
sortIt([1,1,1,2,2,2,3,3,3]) should return [3,3,3,2,2,2,1,1,1]
because number of 3,2 and 1 both are three, then according to 3>2>1
```
Comprehensive two conditions should be like this:
```
sortIt([1,2,3,4,4,5,5,6,6]) should return [3,2,1,6,6,5,5,4,4]
```
*/

function sortIt(arr){
    //배열을 받아서 각각 같은 수가 몇개인지 파악
    //각각 같은수끼리 배열에 담아야 함
    var elements = arr.slice();
    elements.sort();

    var current = null;
    
    //각각의 배열을 length기준으로 정렬
    //length가 같을 경우 안의 숫자가 큰 수가 앞에 온다
}

console.log(sortIt([1,1,1,2,2,3]));
console.log(sortIt([1,1,1,2,2,2,3,3,3]));
console.log(sortIt([1,2,3,4,4,5,5,6,6]));
var arr1=[1,3,3,5,2,2,4,6,6,7,7,7],copy=arr1.slice();
console.log(sortIt(arr1));
console.log(arr1 , copy , "You should not modify the original array");
