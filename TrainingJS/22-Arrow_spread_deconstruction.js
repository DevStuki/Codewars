//############################################################################
//##### ((((((The Arrow Function)))))) ###########################################
//(parameters) => {statement} or expression

//a normal function:
function plus(a, b){
  return a + b;
}
//or we can write like this:
var plus = function(a, b){
  return a + b;
}
//now, we can use arrow function write it:
var plus = (a, b) => a + b; //return도 생략했다.

//만약 인자가 한개라면 이렇게도 가능하다.
var add = x => x + 1;

//만약 내용이 복잡하다면 {}를 쓴다.
var pushElement = (arr, el1, el2) => {
  arr.push(el1);
  arr.push(el2);
  return arr;
}
console.log( pushElement([1], 2, 3) );
//output:
//[ 1, 2, 3 ]

var str="abababab";
console.log( str.replace(/a/g, x => x.toUpperCase()) ); //여기서 x는 regex로 찾아낸 문자

//output:
// AbAbAbAb

//############################################################################
//##### ((((((The Spread Operator)))))) ###########################################
//... 이게 이름이 이거였구나
//여러개의 인수를 표현할 수 있다.

//1. array 내부의 모든 것으로 사용된다.
function plus(a,b,c,d,e){
  return a+b+c+d+e;
}
var arg1=[1,2,3,4,5];
var arg2=[2,3];
console.log(plus(...arg1));
console.log(plus(1,...arg2,4,5));

//output:
// 15
// 15

//2. array를 만들때
var a=[1,2,3]
var b=[...a,4,5] //...a의 전체를 각각 담았다.
console.log(b);

//output:
// [ 1, 2, 3, 4, 5 ]

//3. deconstruction(ES6)을 위해 사용한다. (아래에 설명)

//############################################################################
//##### ((((((The Deconstruction)))))) ###########################################
var [a,b]=[1,2];   //the old method is var a=1,b=2; 이거 array가 아니다!!!
console.log(a);
console.log(b);
//output:
// 1
// 2


//두 변수를 서로 바꿀 때
//기존 방식:
var c=a;    //c가 도와주어야 한다.
a=b;
b=c;
//deconstruction 방식!!!:
var [a,b]=[1,2];
[b,a]=[a,b]; //임시 저장 공간이 필요없다!!
console.log(a);
console.log(b);
//output:
// 2
// 1


var [a,...b]=[1,2,3,4,5]; //첫번째는 a에 나머지는 array에 담긴다!!!
//var [...a,b]=[1,2,3,4,5]; //이렇게는 안된다. spread operator는 마지막에 와야 한다. 앞쪽에 다 대입하고 남은 나머지를 ...에 넣을 수 있다.
console.log(a);
console.log(b);
//output:
// 1
// [ 2, 3, 4, 5 ]



//############################################################################
//##### ((((((rest parameters)))))) ###########################################
//위의 spread operator와 비슷하게 생겼지만 이름부터 다르다.
//무한의 인수를 받을 수 있다.
function plus(...num){ //spread operator가 아니고 무한으로 받을 수 있다는 뜻
  var rs=0
  for (x of num) rs+=x; //for of가 이렇게 쓰이는 거구나..
  return rs;
}
console.log(plus(1,2));
console.log(plus(3,4,5));

//output:
// 3
// 12

function mul(a,...b){ //spread operator와 마찬가지로 여러개 쓴다면 마지막에만 쓸 수 있다.
  for (var i=0;i<b.length;i++) b[i]*=a;
  return b;
}
console.log(mul(2,1,1,1));
console.log(mul(2,1,2,3,4));

//output:
// [2,2,2]
// [2,4,6,8]


/* Task
Create a function ```shuffleIt```. The function accepts two or more parameters. 
The first parameter arr is an array of numbers, followed by an arbitrary number of numeric arrays. 
Each numeric array contains two numbers, which are indices for elements in arr (the numbers will always be within bounds). 
For every such array, swap the elements. 
Try to use all your new skills: arrow functions, the spread operator, destructuring, and rest parameters.

Example:
```
shuffleIt([1,2,3,4,5],[1,2]) should return [1,3,2,4,5]
shuffleIt([1,2,3,4,5],[1,2],[3,4]) should return [1,3,2,5,4]
shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) should return [1,3,5,2,4]
```
*/

let shuffleIt = (arr,...arr2) => {
  for(let i = 0; i < arr2.length; i++){
    let [a,b] = [arr2[i][0], arr2[i][1]];
    [arr[a], arr[b]] = [arr[b], arr[a]];  
  }
  return arr;
};

//Best Practice
//for of를 쓰면 이렇게 보기 좋게 된다.
let shuffleIt = (arr, ...ex) => {
  for ([a,b] of ex)  [arr[a], arr[b]] = [arr[b], arr[a]]; //ex안에 있는 각각의 a, b를 대입! 정말 간단하게 가능
  return arr;
}

console.log("==================================================");
console.log(shuffleIt([1,2,3,4,5],[1,2]));
console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4]));
console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]));