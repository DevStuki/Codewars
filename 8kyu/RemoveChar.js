//Remove First and Last Character

function removeChar(str){
    let arr = str.split("");
    arr.shift();
    arr.pop();
    return arr.join("");
};

//Best Praactice
// function removeChar(str){
//     return str.slice(1, -1);
// }

console.log(removeChar('eloquent'));
console.log(removeChar('country'));
console.log(removeChar('person'));
console.log(removeChar('place'));