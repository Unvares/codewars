/*

  Given an array of integers.

  Return an array, where the first element is the count of positives
  numbers and the second element is sum of negative numbers.
  0 is neither positive nor negative.

  If the input is an empty array or is null, return an empty array.

  Example
    For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
    For output [10, -65].

  https://www.codewars.com/kata/576bb71bbbcf0951d5000044

*/

function countPositivesSumNegatives(input) {
  if(!Array.isArray(input)) return [];

  const result = [0, 0];

  for(let i = 0; i < input.length; i++) {
    if(input[i] > 0) result[0]++
    else result[1] += input[i];
  }

  return (result[0] || result[1]) ? result : [];
}
