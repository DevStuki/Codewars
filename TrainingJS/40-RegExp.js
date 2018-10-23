/*
This time you need to write a regular expression that matches all URL contained in the string. 

The rules:

1) URL start with ```http:// or https://```

2) URL end with ```.com``` or ```.net```

3) The middle part of URL can use letters, numbers and dots

4) Need to ignore case, and a string may contain multiple URLs

5) Your regular expression name should be ```regex``` and your result should be a string array.

Some examples:
```
"http://codewars.com".match(regex)
should return [ 'http://codewars.com' ]    
"http://www.codewars.com".match(regex)
should return [ 'http://www.codewars.com' ]
"HTTP://CODEWARS.COM".match(regex)
should return [ 'HTTP://CODEWARS.COM' ]
"https://www.codewars.com".match(regex)
should return [ 'https://www.codewars.com' ]
"http://www.codewars.net".match(regex)
should return [ 'http://www.codewars.net' ]
"1234http://www.codewars.comabcd".match(regex)
should return [ 'http://www.codewars.com' ]
"http://www.codewars1.com!@#$%http://www.codewars2.net".match(regex)
should return [ 'http://www.codewars1.com', 'http://www.codewars2.net' ]
"http://www.codewars.com.net".match(regex)
should return [ 'http://www.codewars.com.net' ]
"http://www.codewars.com.fak".match(regex)
should return [ 'http://www.codewars.com' ]

These examples should return null:
"ftp://www.codewars.com".match(regex)
"http://www.code#wars.com".match(regex)
"http://wwwcodewarscom".match(regex)
"http://www.codewars.org".match(regex)
"http://www . codewars . com".match(regex)
"http://mail@codewars.com".match(regex)
```

Hint: to match ```"/"``` and ```"."```, you should use ```"\/"``` and ```"\."``` 
```"\"``` is the escape character, we will learn it in the next lesson.
*/

// 1) 시작은 http:// or https://
// 2) 끝은 .com or .net
// 3) 가운데는 알파벳, 숫자, 점
// 4) 대소문자 구분없고 여러개의 URL이 있을 수 있다.

var regex=/(https?:\/\/[a-zA-Z0-9\.]+?(\.com|\.net)+)+/gi

//Best Practice 아직은 이해 안감 ?:는 아직 배우지 않은 것
var regex= /https?:\/\/[a-z0-9.]+\.(?:com|net)/gi

console.log("http://codewars.com".match(regex) );
console.log("http://www.codewars.com".match(regex));
console.log("HTTP://CODEWARS.COM".match(regex));
console.log("https://www.codewars.com".match(regex));
console.log("http://www.codewars.net".match(regex));
console.log("1234http://www.codewars.comabcd".match(regex));
console.log("http://www.codewars1.com!@#$%http://www.codewars2.net".match(regex));
console.log("http://www.codewars.com.net".match(regex));
console.log("http://www.codewars.com.fak".match(regex));
console.log("ftp://www.codewars.com".match(regex));
console.log("http://www.code#wars.com".match(regex));
console.log("http://wwwcodewarscom".match(regex));
console.log("http://www.codewars.org".match(regex));
console.log("http://www . codewars . com".match(regex));
console.log("http://mail@codewars.com".match(regex));
