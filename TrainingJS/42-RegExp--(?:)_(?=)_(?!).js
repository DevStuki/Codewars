/*
Your task is coding in function ```addCommas```. 
Function accepts 2 parameters: ```money``` and ```reg```. 
```money``` is a string, it only contains "$" and numbers. 
To avoid someone being lazy, so you should defined a regular expression outside function, its name should be ```regex```. 
It will passed to the function as parameter reg. 
You can write code that uses this regular expression in the function, such as using ```replace()``` or other methods.

 */

var regex=/\B(?=(\d{3})+(?!\d))/g;

function addCommas(money,reg){
  return money.replace(reg,x=>x+",");
}


console.log(addCommas("$123",regex));
console.log(addCommas("$1234",regex));
console.log(addCommas("$12345",regex));
console.log(addCommas("$1234567",regex));
console.log(addCommas("$123456789",regex));