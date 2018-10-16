//### trim() ###########################################
//stringObject.trim()
//trim은 whitespace를 지운다.
//단, 문자의 외곽에 있는 것들만 지운다.

var str1="             abc                ";
console.log(str1.trim());
str1="\n\n\n\nabc\t\t\t"
console.log(str1.trim());
//output:
// abc
// abc

var str2="  a b c  "; //이렇게 문자 사이에 있는 whitespace는 못지운다.
console.log(str2.trim());

//output:
// a b c


//### string template ###########################################
//ES6에 새로 나온 녀석
//이미 자주 쓰고 있다.
var a=1,b=2;
console.log(`${a} + ${b} = ${a+b}`);

//output:
// 1 + 2 = 3

function plus(a,b){
    console.log(`${a} + ${b} = ${a+b}`);
}
plus(1,2);
plus(3,4);

//output:
// 1 + 2 = 3
// 3 + 4 = 7


/*
Coding in function ```fiveLine```, function accept 1 parameter:```s```. ```s``` is a string.

Please return a string of 5 lines(newline symbol is ```\n```). 
The first line has one s; 
Second line have two s; 
and so on..Fifth line have five s;

Note1: The two sides of the parameter ```s``` may contain some whitespace, please clear them before using ```s```.

Note2: Using a string template can make your job easier.

Example:
```
fiveLine("  a") should return "a\naa\naaa\naaaa\naaaaa"
a
aa
aaa
aaaa
aaaaa       <---The effect when you console.log it
fiveLine("  xy ") 
should return "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
xy
xyxy
xyxyxy
xyxyxyxy
xyxyxyxyxy  <---The effect when you console.log it
```
*/

function fiveLine(s){
    let char = s.trim();
    let final = ""    ;
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < i+1; j++){
            final += char;
        }
        final += "\n";
    }
    return final.slice(0, final.length-1);
}

//Best Practice
function fiveLine(s){
s = s.trim();
var tmp = s;
var res = [s];

for (var i = 1; i < 5; i++) {
    res.push(s += tmp); //있던 변수에 계속 더해서 하나씩 배열에 담는다.
} 
return res.join("\n");
}

console.log(fiveLine("  a"));
console.log(fiveLine("\txy \n"));
console.log(fiveLine("           Ok               "));
