/*

  Write simple .camelCase method (camel_case function in PHP, CamelCase in C#
  or camelCase in Java) for strings. All words must have their first letter
  capitalized without spaces.

  For instance:
  "hello case".camelCase() => HelloCase
  "camel case word".camelCase() => CamelCaseWord

  Don't forget to rate this kata! Thanks :)

  https://www.codewars.com/kata/587731fda577b3d1b0001196

*/

String.prototype.camelCase = function() {
  return this
    .split(' ')
    .map((word) => {
      if (word === '') return word;
      return word.toUpperCase()[0] + word.slice(1);
    })
    .join('');
  }
