/*

  Description:
  We need to sum big numbers and we require your help.
  Write a function that returns the sum of two numbers.
  The input numbers are strings and the function must return a string.

  Example
    add("123", "321"); -> "444"
    add("11", "99");   -> "110"
  
  Notes
    The input numbers are big.
    The input is a string of only digits
    The numbers are positives

  https://www.codewars.com/kata/525f4206b73515bffb000b21

*/


function add(a, b) {
  const bigger =
    (+a > +b)
    ? a.split('').reverse()
    : b.split('').reverse();
  const smaller =
    (+a < +b)
    ? [...Array(bigger.length - a.length).fill('0'), ...a].reverse()
    : [...Array(bigger.length - b.length).fill('0'), ...b].reverse();
  const result = [];

  let additionalDecimal = 0;
  for(let i = 0; i < bigger.length; i++) {
    const sum = String(+bigger[i] + +smaller[i] + additionalDecimal);
    result[i] =
      (sum[1] && i != bigger.length - 1)
      ? sum[1]
      : sum;
    additionalDecimal = 0;
  
    if(!sum[1]) continue;
    additionalDecimal = 1;
  }

  return result.reverse().join('');
}