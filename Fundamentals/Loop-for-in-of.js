// function showObjectKeys(obj){
//     for (var key in obj){
//         console.log(key);
//     }
// }

// function showObjectValues(obj){
//     for (var key in obj){
//         console.log(obj[key]);
//     }
// }

// function showArrayValues(arr){
//     for (var value of arr){
//         console.log(value);
//     }
// }

// var arr=["one","two","three"];
// console.log(showObjectKeys(arr));
// console.log(showObjectValues(arr));
// console.log(showArrayValues(arr));

//for in은 아래와 같이 키 또는 값 또는 둘다를 찾아서 제어할 수 있다.
function giveMeFive(obj){
    let arr = [];
    for(var key in obj){
        if(key.length === 5) arr.push(key);
        if(obj[key].length === 5) arr.push(obj[key]);
    }
    return arr;
}

// console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}));
// console.log(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}));
// console.log(giveMeFive({Pears:"than",apple:"sweet"}));

let obj1={"elaad":"yr","bnf":"auvhc","zvmdkn":"mytqhje","rzvvad":"knvdmu","bpwwkft":"zmu","xu":"wc","gca":"sm","cewb":"rrondq"};
console.log(giveMeFive(obj1));