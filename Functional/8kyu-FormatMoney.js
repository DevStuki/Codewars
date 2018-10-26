function formatMoney(amount){
    var num = Number.parseFloat(amount).toFixed(2)
    return `$${num}`
}

//Best
function formatMoney(amount){
    return '$' + amount.toFixed(2);
} 

console.log(formatMoney(39.99))
console.log(formatMoney(1))