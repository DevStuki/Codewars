function showObjectKeys(obj){
    for (var key in obj){
        console.log(key);
    }
}

function showObjectValues(obj){
    for (var key in obj){
        console.log(obj[key]);
    }
}

function showArrayValues(arr){
    for (var value of arr){
        console.log(value);
    }
}

function showArrayFor(arr){
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

var arr=["one","two","three"];

console.log(showObjectKeys(arr));
console.log(showObjectValues(arr));
console.log(showArrayValues(arr));
console.log(showArrayFor(arr));

//내가 궁금했던 것.
//어째서 콘솔에 찍으면 맨 뒤에 undefined가 나오는가?
//크롬 콘솔에서도 그렇게 나오는데
//console.log가 아니라 그냥 return을 해보면 undefined라는 문구가 안나온다.
//undefined된 값이 들어있나 계속 신경이 쓰였었는데 그냥 반환이 없으면 이렇게 나오나보다.

//#####################################################################################

//for in은 아래와 같이 키 또는 값 또는 둘다를 찾아서 제어할 수 있다.
function giveMeFive(obj){
    let arr = [];
    for(var key in obj){
        if(key.length === 5) arr.push(key);
        if(obj[key].length === 5) arr.push(obj[key]);
    }
    return arr;
}

console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}));
console.log(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}));
console.log(giveMeFive({Pears:"than",apple:"sweet"}));

let obj1={"elaad":"yr","bnf":"auvhc","zvmdkn":"mytqhje","rzvvad":"knvdmu","bpwwkft":"zmu","xu":"wc","gca":"sm","cewb":"rrondq"};
console.log(giveMeFive(obj1));

