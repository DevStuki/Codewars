/*
Coding in function ```rndCode```. 
Your task is to generate a random verification code. 
In accordance with the following rules:

1) the code length should be 8;

2) The 1st and 2nd characters should be two uppercase letters. The range is "ABCDEFGHIJKLM".

3) The 3rd-6th characters should be four numbers.

4) the 7th and 8th characters should be two symbols. The range is "~!@#$%^&*".

5) If Your code runs 100 times, It should generate 100 non duplicate verification codes.

Some valid verification code examples:
```
AB1234#$ MG6145$@ KJ2249@&
CD5678%^ IG7593~% FH8638@&
EF9012!@ GB7047%$ KD7604^%
```
1) 길이는 8
2) 1,2번째 문자는 대문자 알파벳 A~M -_-
3) 3~6번째 문자는 숫자
4) 7,8번째 문자는 ~!@#$%^&*
5) 100번을 했을 때 전부 다른 코드가 나와야 함

Random() * 26 은 0~25까지의 랜덤한 실수 
거기에 +65를 하면 65~97까지의 수가 나옴
a ~ b : b-a+1 * Math.random() + a 
*/
function rndCode(){
    let code = [];
    code.push(String.fromCharCode(~~(13*Math.random()+65)));
    code.push(String.fromCharCode(~~(13*Math.random()+65)));
    
    for(let i = 0; i < 4; i++){
        code.push(String.fromCharCode(~~(10*Math.random()+48)));
    
    }
    var chars = "~!@#$%^&*";
    code.push(chars[~~(chars.length*Math.random())]);
    code.push(chars[~~(chars.length*Math.random())]);

    return code.join("");
}

//Best Practice
//문자열을 넣어두고 고르는 방식
//보기좋고 기능도 재사용가능하다.
function rndCode(){
    var randomRange = function (range, count){
        var sequence = [];
        for (let i = 0; i < count; i++){
            sequence.push(range[~~(range.length*Math.random())]);
        }

        return sequence.join("");
    }

    return randomRange("ABCDEFGHIJKLM", 2) + randomRange("0123456789", 4) + randomRange("~!@#$%^&*", 2);
    
}

console.log(rndCode());