/*
Define createSequence(regex) function that returns a string of all characters (in ASCII order) 
matching specified regular expression one-character criterion.

Examples
let digits = /[0-9]/;
// createSequence(digits) === '0123456789'

let hexadecimal = /[0-9A-F]/;
// createSequence(hexadecimal) === '012345678
*/

const createSequence = regex => {
  return [...Array(256)]
    .map((_, i) => String.fromCharCode(i))
    .filter(ch => regex.test(ch))
    .join('');
};

console.log(createSequence(/[a-c]/), 'abc');
console.log(createSequence(/[0-9A-F]/), '0123456789ABCDEF');
