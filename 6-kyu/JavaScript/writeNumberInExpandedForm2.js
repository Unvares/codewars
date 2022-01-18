/*

  This is version 2 of my 'Write Number in Exanded Form' Kata.

  For example:
    expandedForm(1.24); // should return '1 + 2/10 + 4/100'
    expandedForm(7.304); // should return '7 + 3/10 + 4/1000'
    expandedForm(0.04); // should return '4/100'
    expandedForm(807.304); // Should return '800 + 7 + 3/10 + 4/1000'

  https://www.codewars.com/kata/58cda88814e65627c5000045

*/

function expandedForm(num) {
  var integer = num
                   .toString()
                   .split('.', 1)
                   .join('')
                   .split('')
                   .reverse()
                   .map((item, i) => item * Math.pow(10, i))
                   .reverse()
                   .filter(number => number > 0)
                   .join(' + ');
  var double = num
                  .toString()
                  .split('.')
                  .splice(1, 1)
                  .join('')
                  .split('')
                  .map((item, i) => item + '/' + (Math.pow(10, i+1)))
                  .filter(item => item.slice(0, 1) != 0)
                  .join(' + ');
  if(integer != 0) return integer + ' + ' + double;
  return double;
}
