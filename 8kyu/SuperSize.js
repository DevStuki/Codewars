/*
Write a function that rearranges an integer into its largest possible value.

superSize(123456) //654321
superSize(105) // 510
superSize(12) // 21
If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.
*/

/* Beginning
function superSize(num){
    const str = String(num);
    let arr = [];
    for(let i = 0; i <str.length; i++){
        arr[i] = str[i];
    }    
    arr.sort((a,b) => a > b ? -1 : 1);
    return Number(arr.join(""));
}
*/

function superSize(num){
    let arr = String(num).split("")
    arr.sort((a,b) => a > b ? -1 : 1);
    return Number(arr.join(""));
}

//이렇게 짧게 만들기도 한다. 신기하다.
//n을 문자열로 > ""로 나눈후 > 정렬(문자열도 정렬이 된다) > 순서 뒤집기(순서데로하면 숫자가 작으니까) > 문자열로 합치기 > 이모든 것을 Int로 변환
//이렇게 변수에 담지 않고 그자리에서 변환을 연이어 하는 것이 적응이 안된다.
// function superSize(n){
//     return parseInt(n.toString().split("").sort().reverse().join(""));
// }

console.log(superSize(69));
console.log(superSize(513));
console.log(superSize(2017));
console.log(superSize(414));
console.log(superSize(608719));
console.log(superSize(123456789));
console.log(superSize(700000000001));
console.log(superSize(666666));
console.log(superSize(2));