/*
StringObject.slice(startindex,endindex)
StringObject.substring(startindex,endindex)
StringObject.substr(startindex,length)
두번째 인자는 생략가능
*/

/*
Coding in function ```cutIt```, function accept 1 parameter:```arr```. ```arr``` is a string array.

The first mission: Traversing ```arr```, find the shortest string length.

The second mission: Traversing ```arr``` again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

for example:

```
cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
cutIt(["codewars","javascript","java"]) should return ["code","java","java"]
*/

//slice, substring, substr의 인자에 대해 잘못생각했었다.
//어디서부터 어디까지를 원하는지 잘 생각해서 코드를 작성할 것.
// function cutIt(arr){
//     let shortest = findShortest(arr);
//     let fixed = [];
//     for(let i = 0; i < arr.length; i++){
                
//         fixed[i] = arr[i].substr(0, shortest);
//     }
//     return fixed;
// }

// function findShortest(arr){
//     let shortest = arr[0].length;
//     for(let i = 1 ; i < arr.length; i++){
//         if(arr[i].length < shortest){
//             shortest = arr[i].length;
//         }
//     }
//     //arr.forEach( n => {if(n.length < shortest) shortest = n.length});
//     return shortest;
// }

//Best Practice
//이렇게 간단히 줄일 수있다. 
function cutIt(arr){
    //Math.min()은 가장 작은 수를 반환한다.
    const minLength = Math.min(...arr.map(n => n.length));
    return arr.map(n => n.slice(0, minLength));
    //console.log(arr.map(n => n.slice(0, minLength)));
}

console.log(cutIt(["ab","cde","fgh"]));
console.log(cutIt(["abc","defgh","ijklmn"]));
console.log(cutIt(["codewars","javascript","java"]));
