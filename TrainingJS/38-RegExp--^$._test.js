/**
 Coding in function ```findSimilarity```. 
 function accept two parameters: ```str```, a sentence contains some words, separated by spaces; 
 ```word```, a sample word. 

Your task is to keep the words that are similar to the sample word, and to remove the other words. 

The similarity is defined as: 
the same length as the sample; 
the letter at the beginning and the end of word are same as the sample too.

If there are no similar words in the sentence, should return an empty string.

Some examples:
```
findSimilarity("bag dog dig dot doog dogs","dog") should return "dog dig"
findSimilarity("bag dog dig dot doog dogs","dig") should return "dog dig"
findSimilarity("bag dog dig dot doog dogs","dot") should return "dot"
findSimilarity("bag dog dig dot doog dogs","god") should return ""
```

Hint: Use filter() will make your work easier; If you don't know how to solve the kata, please refer to the examples of lesson.
 */

function findSimilarity(str,word){
    //word의 정규식 제작
    var regstr = word[0]
    +word.slice(1,-1).replace(/./g, ".")
    +word.slice(-1);
    var reg = new RegExp(`^${regstr}$`);
   
    //각각을 단어별로 분리    
    //각 단어를 대입한 문자의 길이, 맨앞문자, 맨뒤문자와 같은지 판단
    var arr = []; 
    str.split(" ").map(s => reg.test(s) && arr.push(s));
    
    return arr.join(" ");
}


console.log(findSimilarity("bag dog dig dot doog dogs","dog"));
console.log(findSimilarity("bag dog dig dot doog dogs","dig"));
console.log(findSimilarity("bag dog dig dot doog dogs","dot"));
console.log(findSimilarity("bag dog dig dot doog dogs","god"));
console.log(findSimilarity("vRllN QRo cUz gdI SImLC fyQhN Gzi PWzja SxTdC VlQ SdmKC ImF","SWyfC"));
