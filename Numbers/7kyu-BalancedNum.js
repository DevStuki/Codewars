/*
숫자를 반으로 쪼개서 왼쪽의 합과 오른쪽의 합이 같은지 확이하는 함수
홀수라면 가운데 수를 기준으로 나누고 짝수라면 가운데 수가 2개로 취급하여 나누어 계산

Test.assertEquals(balancedNum(7), "Balanced")
Test.assertEquals(balancedNum(959), "Balanced")
Test.assertEquals(balancedNum(13), "Balanced")
Test.assertEquals(balancedNum(432), "Not Balanced")
Test.assertEquals(balancedNum(424), "Balanced")

Test.assertEquals(balancedNum(1024), "Not Balanced")
Test.assertEquals(balancedNum(66545), "Not Balanced")
Test.assertEquals(balancedNum(295591), "Not Balanced")
Test.assertEquals(balancedNum(1230987), "Not Balanced")
Test.assertEquals(balancedNum(56239814), "Balanced")
*/



function balancedNum(number)
{    
    var arr = number.toString().split("");
    if(arr.length <= 2) return "Balanced";

    var center = Math.floor(arr.length/2);
    var num1 = [];
    var num2 = [];
    if(arr.length%2 === 0){
        num1 = arr.slice(0, center-1).map(v => parseInt(v));
        num2 = arr.slice(-(center-1)).map(v => parseInt(v));        
    }else{
        num1 = arr.slice(0, center).map(v => parseInt(v));
        num2 = arr.slice(-center).map(v => parseInt(v));        
    }

    return num1.reduce((a, v) => a + v) === num2.reduce((a, v) => a + v) ? "Balanced" : "Not Balanced";
}

//Best Practice
function balancedNum(number) {
    let str = `${number}`
    ,   len = (str.length - (str.length % 2 ? -1 : -2)) / 2
    ,   sum = digits => [...digits].reduce((a, v) => a + +v, 0);

    return sum(str.slice(0, len)) === sum(str.slice(-len)) ? "Balanced" : "Not Balanced";
}

console.log(balancedNum(7));
console.log(balancedNum(959));
console.log(balancedNum(13));
console.log(balancedNum(432));
console.log(balancedNum(424));
console.log(balancedNum(1024));
console.log(balancedNum(66545));
console.log(balancedNum(295591));
console.log(balancedNum(1230987));
console.log(balancedNum(56239814));