// // ###숫자를 문자열로 바꾸는 3가지 방법###
// var num=111;
// var a=num.toString(), 
//     b=num.toLocaleString(), //지역에 맞게 바꾸어 준다! 하지만 작동이 잘 안된다. 검색해보니 거의 쓰이지 않는다고 함.
//     c=num+"" //이렇게 해도 된다는게 놀랍다.
// console.log([a,b,c])   //put them to an array, we can see the quotes
// //output: [ '111', '111', '111' ]



var number = 123456.789;
// India uses thousands/lakh/crore separators
console.log(number.toLocaleString('en-IN'));
// → 1,23,456.789

// request a currency format
console.log(number.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// → 123.456,79 €

//toString(여기에 숫자를 입력하면 해당 진법으로 표시 : 기본은 10진수)
var num=111;
var a=num.toString(2), //2진수
    b=num.toString(8), //8진수
    c=num.toString(16) //16진수
console.log([a,b,c])
//output: [ '1101111', '157', '6f' ]


/*
Coding in function ```colorOf```. function accept 3 parameter:```r``` ```g``` ```b```. It means value of color red green and blue. the value range is 0-255.

Use ```toString(16)``` Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

the color code should starting with "#". and then use 2 characters per color.

for example:

```
colorOf(255,0,0) should return "#ff0000"
colorOf(0,111,0) should return "#006f00"
colorOf(1, 2 ,3) should return "#010203"

```

That's all of your work. My work is print your color code on your screen.
*/

function colorOf(r,g,b){
    return `#${makeStr(r)}${makeStr(g)}${makeStr(b)}`;
}

function makeStr(num){
    let str = num.toString(16);
    return str.length < 2 ? `0${str}` : str;
}

console.log(colorOf(255,0,0));
console.log(colorOf(0,111,0));
console.log(colorOf(1, 2 ,3));