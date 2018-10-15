/*
찾는 문자가 있는 인덱스를 반환
일치하는 값이 없으면 -1을 반환
StringObject.indexOf(search value,from index) //from index로부터 오른쪽으로 
StringObject.lastIndexOf(search value,from index) //from index로부터 왼쪽으로 
StringObject.search(search value / regexp) //정규표현식을 이용해서
*/

var str="Hello World!";
console.log(str.indexOf("o",5));
console.log(str.lastIndexOf("e",3));
console.log(str.search("o"));

/*
Coding in function ```firstToLast```, function accept 2 parameters:```str``` and ```c```. ```str``` is a string. ```c``` is a char. 

Please return the gap between the first position of ```c``` and the last position of ```c```.

If there are a lot of ```c``` in the ```str```, should  return a positive integer; 
If there is only one ```c``` in ```str```, should return 0; 
If there is no ```c``` in the ```str```, should return -1. 
Retrieval should not ignored the case.

for example:

```
firstToLast("ababc","a") should return 2(2-0)
firstToLast("ababc","c") should return 0(4-4)
firstToLast("ababc","d") should return -1
```
*/

function firstToLast(str,c){  
    return str.indexOf(c) !== -1 ? str.lastIndexOf(c) - str.indexOf(c) : -1;
}

//Best Practice
//아래의 코드가 이해하기 더 쉬운 것 같다.
function firstToLast(str,c){
    var first = str.indexOf(c), 
        last = str.lastIndexOf(c);
    return first === -1 ? -1 : last - first;
}

console.log(firstToLast("ababc","a"));
console.log(firstToLast("ababc","c"));
console.log(firstToLast("ababc","d"));