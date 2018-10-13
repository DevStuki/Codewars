/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

eg:

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false
*/

function validatePIN (pin) {
    const regNumber = /^[0-9]*$/;
    return (regNumber.test(pin)) && (pin.length === 4 || pin.length === 6)
}


//정규표현식을 잘쓰면 이렇게 짧게 표현이 가능하다!!!
// function validatePin(pin) {
//     return /^(\4{4}|\d{6})$/.test(pin);
// }




console.log(validatePIN("286."));
console.log(validatePIN("52x5"));
console.log(validatePIN("962V"));
console.log(validatePIN("14835."));
console.log(validatePIN("1.2273"));
console.log(validatePIN("598[46"));

