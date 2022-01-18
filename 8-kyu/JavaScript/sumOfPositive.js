/*

  You get an array of numbers, return the sum of all of the positives ones.

  Example [1,-4,7,12] => 1 + 7 + 12 = 20

  Note: if there is nothing to sum, the sum is default to 0.

  https://www.codewars.com/kata/5715eaedb436cf5606000381

*/

function positiveSum(arr) {
  let sum = 0;
  for(let val of arr) {
    if (val >= 0) sum += val;
  }
  return sum;
}
