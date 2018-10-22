/**
 This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.


 */

function accum(s) {
    var arr = s.split("").map((c, i) => times(c, i))
                         .map(c => c.join(""))
                         .map(str => str.replace(/.+/, x=> x.toLowerCase()))
                         .map(str => str.replace(/^./, x => x.toUpperCase()));
    return arr.join("-");
}

function times(char, num){
    let str = [];
    for(let i = 0; i < num+1; i++){
        str.push(char);
    }
    return str;
}

//Best Practice
//repeat()을 처음본다. 확인해둘것!!
function accum(s){
    return s.split("").map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join("-");
}

console.log(accum("ZpglnRxqenU"));
console.log(accum("NyffsGeyylB"));
console.log(accum("MjtkuBovqrU"));
console.log(accum("EvidjUnokmM"));
console.log(accum("HbideVbxncC"));
