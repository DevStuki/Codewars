/*
Given a string of words and numbers. Extract the expression including:

the operator: either addition or subtraction
the two numbers that we are operating on
Return the result of the calculation.

Example:

"Panda has 48 apples and loses 4" returns 44

"Jerry has 34 apples and gains 6" returns 40

"loses" and "gains" are the only two words describing operators.

Should be a nice little kata for you :)

Note: No fruit debts nor bitten apples = The numbers are integers and no negatives
*/

function calculate(string) {
  let nums = string.match(/\b\d+?\b/g).map(v => parseInt(v));
  let oper = string.match(/loses|gains/).join('');

  return oper !== null && oper === 'loses'
    ? nums.reduce((a, v) => a - v)
    : nums.reduce((a, v) => a + v);

  //숫자를 뽑아 낸다.
  //loses와 gains를 찾아 어느 것인지 확인
  //계산 후 반환
}

//BEST
//eval이라는 것을 사용하면 더 편하게 되는구나.
function calculate(string) {
  return eval(
    string
      .match(/\d+|lose|gain/g)
      .join('')
      .replace('lose', '-')
      .replace('gain', '+'),
  );
}

console.log(calculate('Panda has 48 apples and loses 4'), 44);
console.log(calculate('Jerry has 34 apples and gains 6'), 40);
