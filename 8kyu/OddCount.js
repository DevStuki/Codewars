/* Beginning
function oddCount(n){
    let count = 0;
    for(let i = 1; i < n; i++){   
        if(i%2===0) continue;
        count++;
    }
    return count;
}
*/

/* Second
function oddCount(n){
    let arr= [];
    for(let i = 1; i < n; i++){   
        if(i%2===0) continue;
        arr.push(i);
    }
    return arr.length;
}
*/

//처음에는 위의 방식으로 했다가 CodeWars에서 너무 시간이 오래걸린다는 에러메시지가 나타났다.
//생각해보니 홀수는 절반일테니 아래와 같이 작성해서 해결 완료.
function oddCount(n){
    return Math.floor(n/2);
}

console.log(oddCount(15));
console.log(oddCount(10));
console.log(oddCount(15023));