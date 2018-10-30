/*
Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).
*/


function validateUsr(username) {
    res =  /^[a-z0-9_][a-z0-9_]{2,14}[a-z0-9_]$/g.test(username);
    return res;
}

//Best Practice
//그냥 이렇게 g를 없애고 앞뒤에만 붙여도 되는구나..
function validateUsr(username) {
    return /^[0-9a-z_]{4,16}$/.test(username);
}

console.log(validateUsr('asddsa'));
console.log(validateUsr('a'));
console.log(validateUsr('Hass'));
console.log(validateUsr('Hasd_12assssssasasasasasaasasasasas'));
console.log(validateUsr(''));
console.log(validateUsr('____'));
console.log(validateUsr('012'));
console.log(validateUsr('p1pp1'));
console.log(validateUsr('asd43 34'));
console.log(validateUsr('asd43_34'));