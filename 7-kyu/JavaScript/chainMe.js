/*

  Write a generic function chainer that takes a starting value, and an array of
  functions to execute on it (array of symbols for ruby).

  The input for each function is the output of the previous function (except
  the first function, which takes the starting value as it's input). Return
  the final value after execution is complete.

  function add(num) {
    return num + 1
  }

  function mult(num) {
    return num * 30
  }

  chain(2, [add, mult]);
  // returns 90;

  https://www.codewars.com/kata/54fb853b2c8785dd5e000957

*/

function chain(input, fs) {
  return fs.reduce((input, func) => {
    return func(input);
  }, input);
}
