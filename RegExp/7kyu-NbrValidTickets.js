/*
Rules
You must check if some ticket numbers are valid. To be valid, a ticket number must :

Contain exactly 6 characters
Contain : one letter then one digit then 4 letters
'letter' means a single character, unaccented, uppercase or lowercase, between a and z.

Input arguments
tickets : an array of string, representing ticket numbers
Return value
An integer representing the number of valid ticket numbers.

*/

function nbrValidTickets(tickets) {
  //6개의 문자
  //문자1개, 숫자1개, 그 뒤에 문자 4개
  //대소문자 구분없이 a-z까지
  return tickets.filter(v => /^[a-z]\d[a-z]{4}$/gi.test(v)).length;
}

var ex = [
  'A9JZOD',
  'E9FIDH',
  'SI2JIS',
  'F8JIODJ',
  'FDSNJA',
  'A9POF?',
  'AA9DIJD',
];
console.log(nbrValidTickets(ex), 2);
