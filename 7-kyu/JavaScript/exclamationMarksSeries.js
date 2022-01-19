/*

  Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

  Examples
    remove("Hi!") === ""
    remove("Hi! Hi!") === ""
    remove("Hi! Hi! Hi!") === ""
    remove("Hi Hi! Hi!") === "Hi"
    remove("Hi! !Hi Hi!") === ""
    remove("Hi! Hi!! Hi!") === "Hi!!"
    remove("Hi! !Hi! Hi!") === "!Hi!"

  https://www.codewars.com/kata/57fafb6d2b5314c839000195

*/

function remove(string) {
  let array = string.split(' ');
  
  array = array.filter(el => 
    el.indexOf('!') == -1 || el.indexOf('!') != el.lastIndexOf('!'));

  return array.join(' ');
}
