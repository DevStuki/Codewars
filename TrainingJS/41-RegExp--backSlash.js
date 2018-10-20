/*
You might have guessed the task. 
Yes, This time your task is to write a regular expressions matching all palindrome substring of a string. 

The rules:

1) The string contains letters, numbers, underscores and spaces. 
space is the separator. 
the substring means the whole of a substring that separated by spaces. For example:

```
"aaa bcccd" should match a substring "aaa" , 
should not match "ccc", "ccc" is a part of substring "bcccd"
```

2) Palindrome substring length range is 2-7. 
It means don't match the substring which length=1 or length>7.

3) A string may contain multiple palindrome substring.

4) You should not ignore case.

5) Your regular expression name should be ```regex``` and your result should be a string array.




Some examples:
```
"aa bbb cccc".match(regex)             should return [ 'aa', 'bbb', 'cccc' ]
"aaa bcccd".match(regex)               should return [ 'aaa' ]
"_x_x_ --- ~~|~~".match(regex)         should return [ '_x_x_' ]
"ABCDCBA ABABABA".match(regex)         should return [ 'ABCDCBA', 'ABABABA' ]
"121 1221 13577531 11211".match(regex) should return [ '121', '1221', '11211' ]
"aabbbcccc d".match(regex)             should return null
"1    1".match(regex)                  should return null 
"abbA CdDc".match(regex)               should return null
```
공백으로 나뉘어진 단어만 추출
서로 반대되는 거울문자
최대 7글자
대소문자 구분
*/
var regex=/\b(\w)(\w?)(\w?)\w?\3\2\1\b/g

console.log("aa bbb cccc".match(regex)             );
console.log("aaa bcccd".match(regex)               );
console.log("_x_x_ --- ~~|~~".match(regex)         );
console.log("ABCDCBA ABABABA".match(regex)         );
console.log("121 1221 13577531 11211".match(regex) );
console.log("aabbbcccc d".match(regex)             );
console.log("1    1".match(regex)                  );
console.log("abbA CdDc".match(regex)               );