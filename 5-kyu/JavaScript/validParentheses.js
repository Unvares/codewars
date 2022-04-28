/*

  Write a function that takes a string of parentheses, and determines if the
  order of the parentheses is valid. The function should return true if the
  string is valid, and false if it's invalid.

  Examples
    "()"              =>  true
    ")(()))"          =>  false
    "("               =>  false
    "(())((()())())"  =>  true
    Constraints
    0 <= input.length <= 100

  https://www.codewars.com/kata/52774a314c2333f0a7000688/

*/

function validParentheses(string) {
  const validity = [...string]
    .reduce((val, char) => {
      if (val < 0) return Infinity;
      return val += (char === '(') ? 1 : -1;
    }, 0);
  return (validity === 0);
}
