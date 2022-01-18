/*

  Complete the solution so that the function will
  break up camel casing, using a space between words.

  Example
    "camelCasing"  =>  "camel Casing"
    "identifier"   =>  "identifier"
    ""             =>  ""

  https://www.codewars.com/kata/5208f99aee097e6552000148

*/

function solution(string) {
  string = string.split('').map(function(char) {
    if (char === char.toUpperCase() ) return " " + char;
    return char;
  });
  return string.join('');
}
