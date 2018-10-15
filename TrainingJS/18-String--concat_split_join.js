/*
stringObject.split(separator,how many) separator를 기준으로 howmany-생략가능-의 수만큼 나눈다.
stringObject.concat(string1,string2,...,stringx) 여러 string을 하나의 string으로 만들어준다.
arrayObject.join(separator)
*/

/*
//### split ###########################################
//stringObject.split(separator,how many) separator를 기준으로 howmany-생략가능-의 수만큼

var str1="My name is John";
var words=str1.split(" "); //공백을 기준으로 나누어 변환
console.log(words);
//output:
//[ 'My', 'name', 'is', 'John' ]


var str2="My name is John";
var words1=str2.split(" ",3); //공백을 기준으로 나누어 3개만 변환
console.log("words1:",words1);
var words2=str2.split(" ",5);
console.log("words2:",words2);
//output:
// words1:[ 'My', 'name', 'is' ]
// words2:[ 'My', 'name', 'is', 'John' ]


var str3="My name is John";
var words=str3.split(""); //문자 하나씩 나누어 변환
//console.log(words);
//output:
//[ 'M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'J', 'o', 'h', 'n' ] 공백도 하나로서 자리를 차지한다.

//RegExp도 가능하지만 추후에 작성할 예정


//### concat ###########################################
//stringObject.concat(string1,string2,...,stringx) 여러 string을 하나의 string으로 만들어준다.

var str4="My".concat("name","is","John");
// var str4="My"+"name"+"is"+"John";  //위와 같다. 그럼 concat은 언제 쓰나?
console.log(str4);

//output:
//MynameisJohn


//### join ###########################################
//split의 반대 버전
//concat은 공백을 줄 수 없다. join을 사용하면 된다.
var str5="My name is John";
var words=str5.split(" "); //공백을 기준으로 나눈다.
console.log("use split():",words);
var s=words.join(" "); //각각에 공백을 두어 합쳐준다.
console.log("use join():",s);
console.log("use split() and join():",str5.split(" ").join(" ")); //이렇게 연결해서 사용가능
//output:
// use split():[ 'My', 'name', 'is', 'John' ]
// use join():My name is John
// use split() and join():My name is John

*/

/*
Task
Coding in function splitAndMerge, 
function accept 2 parameters:str and sp. str is a sentence. sp is a char as separator.

First we need to divide the sentence into words(Use separator space); 
and then divide each word into characters(Use separator empty string); 
and then merge each characters with the specified sp; 
at last merge all the words(Use separator space) and return it.

for example:

splitAndMerge("My name is John"," ") should return "M y n a m e i s J o h n"
splitAndMerge("My name is John","-") should return "M-y n-a-m-e i-s J-o-h-n"
splitAndMerge("Hello World!",".") should return "H.e.l.l.o W.o.r.l.d.!"
splitAndMerge("Hello World!",",") should return "H,e,l,l,o W,o,r,l,d,!"
*/

function splitAndMerge(str,sp){
    var div = str.split(" "); //공백을 중심으로 나누고
    var div2 = [];
    for(let i = 0; i < div.length; i++){
        div2[i] = div[i].split("").join(sp);    
    }
    return div2.join(" ");    
}

//Best Practice
//JS에서 map은 매우 자주 사용되는 것 같다. 활용법을 훈련해두자.
function splitAndMerge(str, sp) {
    return str.split(" ").map(word => word.split("").join(sp)).join(" ");
}

console.log(splitAndMerge("My name is John"," "));
console.log(splitAndMerge("My name is John","-"));
console.log(splitAndMerge("Hello World!","."));
console.log(splitAndMerge("Hello World!",","));