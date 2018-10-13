/*
Task:
Complete function saleHotdogs/SaleHotDogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

+---------------+-------------+
|  numbers n    | price(cents)|
+---------------+-------------+
|n<5            |    100      |
+---------------+-------------+
|n>=5 and n<10  |     95      |
+---------------+-------------+
|n>=10          |     90      |
+---------------+-------------+
*/

function saleHotdogs(n){
    return n<5 ? n*100 : n<10 ? n*95 : n*90;
}


//아래와 같이 더 간략하게 표현할 수도 있다.
function saleHotdogs(n){
    return n*(n<5 ? 100 : n<10 ? 95 : 90);
}
