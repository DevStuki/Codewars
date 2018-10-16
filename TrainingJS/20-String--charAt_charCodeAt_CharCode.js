/*
stringObject.charAt(index)
stringObject.charCodeAt(index)
String.fromCharCode(num1,num2,...,numX)
*/

//### charAt() ###########################################
//stringObject.charAt(index) 인덱스를 지정하면 그 문자를 반환
//잘 안쓴다.

var str1="abcde";
console.log(str1.charAt(0)); //하지만 보통 str[0] 이렇게 쓴다. 더 편하니까.
console.log(str1.charAt(1));
//output:
// a
// b



//### charCodeAt() ###########################################
//stringObject.charCodeAt(index) 인덱스를 지정하면 유니코드를 보여준다.

var str2="abcde";
for (var i=0;i<str2.length;i++){
  console.log(str2.charAt(i),str2.charCodeAt(i));
}
//output:
// a 97
// b 98
// c 99
// d 100
// e 101

//아래와 같이 인덱스를 생략하면 첫번째 해당 문자의 유니코드를 반환한다.
var chars3="abcde".split("");
for (var i=0;i<chars3.length;i++){
  var tmp=chars3[i].charCodeAt(); 
  if (tmp==97) console.log("a for apple");
  else console.log(tmp);
}
//output:
// a for apple
// 98
// 99
// 100
// 101


//### String.fromCharCode() ###########################################
//String.fromCharCode(num1,num2,...,numX)
//지정한 위치에 문자의 유니코드를 반환
//스테틱이기 때문에 반드시 앞에 String.으로 시작한다.

function decode(str4){
    var chars=str4.split("");
    for (var i=0;i<chars.length;i++) 
      chars[i]=String.fromCharCode(chars[i].charCodeAt()-1);
    return chars.join("");
  }
  function encode(str4){
    var chars=str4.split("");
    for (var i=0;i<chars.length;i++) 
      chars[i]=String.fromCharCode(chars[i].charCodeAt()+1);
    return chars.join("");
  }
  var s="abcde"
  s=encode(s);
  console.log("encode:",s)    //encryption s
  s=decode(s);
  console.log("decode:",s)    //decryption s
  //output:
//   encode: bcdef
//   decode: abcde



/*
Coding in function ```topSecret```, function accept 1 parameter:```file```. ```file``` is an encrypted string.

Encryption using the right shift 3. Your job is to decrypt the file and read the contents of the file, 
and then answer my three questions. If the answer is correct, you will pass the test.
Note: the decryption should be left shift; Shift is only for uppercase and lowercase letters, 
other characters will remain the same; The shift mode is a cyclic shift, for example:
```
character "A" after decryption should be "X" instead of ">"
character "B" after decryption should be "Y" instead of "?"
character "C" after decryption should be "Z" instead of "@"
character "a" after decryption should be "x" instead of "^"
character "b" after decryption should be "y" instead of "_"
character "c" after decryption should be "z" instead of "`"
```
Additional hints: Fixed testcase only test the correctness of the decryption code. 
The answer to the three question will appear only after clicking on "Submit".

This task may be more difficult for beginners. Good Luck!

Some trainer may have doubts about the three questions, the following is some explanation, 
I hope to be helpful to the trainer.

for example, after you click "submit", you see these text on your screen:

Top secret files: No. 3330
Super agent eEB, on a dark night, stole the Apple core from National Museum, causing $100 million in damage.

question 1 should answer:"3330"
question 2 should answer:"eEB"
question 3 should answer:"Apple core"
*/

//Beginning
// function topSecret(str){
//     var chars = str.split("");
//     for (let i = 0; i < chars.length; i++){
//         if(chars[i] === " ") continue;    

//         let codeNum = chars[i].charCodeAt() - 3;
//         let bA = ("A").charCodeAt();
//         let sA = ("a").charCodeAt();
//         switch(true){
//             case (codeNum < bA || (codeNum < sA && codeNum > 90)) : codeNum = codeNum + 26; break; 
//             default : codeNum = codeNum; break;
//         }
//         chars[i] = String.fromCharCode(codeNum);
//     }
//     return chars.join("");
// }

function topSecret(str){
    var chars = str.split("");
    for (let i = 0; i < chars.length; i++){
        var pattern = /^[a-zA-Z0-9]*$/
        if(!pattern.test(chars[i])) continue;

        let char = chars[i].charCodeAt();
        if(char < ("A").charCodeAt() || (char < ("a").charCodeAt() && char > ("Z").charCodeAt()) ||  ("z").charCodeAt() < char) continue;

        let codeNum = char - 3;
        codeNum = (codeNum < ("A").charCodeAt() || (codeNum < ("a").charCodeAt() && codeNum > 90)) ? codeNum + 26 : codeNum;
        chars[i] = String.fromCharCode(codeNum);
    }
    return chars.join("");
}

//Best Practice
//문자열의 문자가 abc중 하나이면 유니코드에 23을 더하고 아니면 3을 뺀다. 그리고 그것을 문자들만 모아서 바꾼다.
//정규표현식에서 g는 전체적으로, i는 대소문자 구분없이!
const topSecret = str => str.replace(/[a-z]/gi, c => String.fromCharCode(c.charCodeAt(0) + (/[abc]/i.test(c) ? 23 : -3)));

//question1: The top secret file number is...
// answer1="?";
//question2: Super agent's name is...
// answer2="?";
//question3: He stole the treasure is...
// answer3="?";
console.log("==========================================");
console.log(topSecret("3330"));
console.log(topSecret("eEB"));
console.log(topSecret("Apple core"));

console.log(topSecret("Pb qdph lv Mrkq"));
console.log(topSecret("wklv lv dq hadpsoh"));
console.log(topSecret("Khoor Zruog!"));