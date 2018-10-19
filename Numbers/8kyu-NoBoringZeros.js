/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
*/

function noBoringZeros(n) {
    if(n === 0) return 0;

    var str = n.toString().split("");
    for(let i = str.length-1; i >= 0; i--){
        if(str[i] === "0"){
            str.pop();
        }else{
            break;
        }
    }  
    return parseInt(str.join(""));
}

//Best Practice
//수학적으로 해결한 방법
function noBoringZeros(n){
    while(n%10 === 0 && n !== 0){n /= 10}
    return n;
}

console.log(noBoringZeros(1450));
console.log(noBoringZeros(960000));
console.log(noBoringZeros(1050));
console.log(noBoringZeros(-1050));
console.log(noBoringZeros(-105));
console.log(noBoringZeros(0));