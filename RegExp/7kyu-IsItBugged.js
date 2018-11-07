/*
Chingel was creating a function which would return true if the input followed this time format 14-10-2016 01:12 and false otherwise. 
But looks like he has messed it up. Could you help him out? Please!

Rank and Upvote if you liked it :D

P.S.- Random tests to be added soon.
*/

function isItBugged(date) {
  return /^\d{2}-\d{2}-\d{4} \d{2}:\d{2}$/.test(date);
}

console.log(isItBugged('01_09_2016 01:20'), false);
console.log(isItBugged('14-10-1066 12:00'), true);
console.log(isItBugged('Tenth of January'), false);
