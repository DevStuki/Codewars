/*
stringObject.toUpperCase()
stringObject.toLowerCase()
stringObject.replace(substring/regexp, replacement)
*/

//### toUppper(), toLower() ###########################################
var str1="My name is John";
console.log(str1.toUpperCase()); //모든 대문자로
console.log(str1.toLowerCase()); //모두 소문자로
//output:
//MY NAME IS JOHN
//my name is john

var str2="this is an example.";
var result2=str2[0].toUpperCase()+str2.slice(1); //첫글자만 대문자로
console.log(result2);
//output:
//This is an example.

var str="this is an example.";
var words=str.split(" ");
for (var i=0;i<words.length;i++){
  words[i]=words[i][0].toUpperCase()+words[i].slice(1);
}
console.log(words.join(" "));

//output:
//This Is An Example.


//### replace() ###########################################
var str4="this is an example.";
var result4=str4.replace("this","that"); //this를 that으로 변경
console.log(result4);
//output:
//that is an example.

var str5="this is an example.";
//RegExp로 원하는 문자열을 찾아서 ,뒤에 오는 함수를 이용하여 원하는 방식으로 변경한다.
var result5=str5.replace(/\b\w/g, x=>x.toUpperCase()); //이렇게 RegExp를 사용하면 자를 필요가 없다.
console.log(result5);
//output:
//This Is An Example.

var str="example";
var result=str.replace("e","@"); //RegExp로 따로 설정을 하지 않으면 하나의 문자만 변경된다.
console.log(result);
//output:
//@xample

/*
Coding in function ```alienLanguage```, function accept 1 parameter:```str```. ```str``` is a sentence.

We translate the sentence into an alien language according to the following rules:

Each word in the sentence is separated by spaces. 
The last letter of each word in the sentence turns to lowercase, 
and the other letters are capitalized. Looks very strange? 
Because this is the form of alien language ;-)

for example:

```
alienLanguage("My name is John") should return "My NAMe Is JOHn"
alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
alienLanguage("Hello World") should return "HELLo WORLd"
```
A small hint: The first conversion of the entire string will make the code easier
*/

function alienLanguage(str){
    var word = str.split(" ");
    for(let i = 0; i < word.length; i++){
        word[i] = word[i].slice(0, word[i].length-1).toUpperCase() 
                        + word[i][word[i].length-1].toLowerCase();
    }
    return word.join(" ");
}

//Best Practice
//RegExp를 사용하면 더 간단하게 할 수 있다. (아직은 어렵다.)
function alienLanguage(str){
    return str.replace(/\w+/g, w.slice(0,-1).toUpperCase() + w.slice(-1).toLowerCase());
}

//나는 이 코드가 더 보기 좋다.
function alienLanguage(str){
    return str.toUpperCase().replace(/.\b/g, x=>x.toLowerCase()); //전체를 대문자로 만들고 끝만 찾아서 소문자로
}

console.log(alienLanguage("My name is John"));
console.log(alienLanguage("this is an example"));
console.log(alienLanguage("Hello World"));
console.log(alienLanguage("HELLO WORLD"));