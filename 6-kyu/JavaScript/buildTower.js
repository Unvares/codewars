/*

  Build a pyramid-shaped tower given a positive integer number of floors.
  A tower block is represented with "*" character.

  For example, a tower with 3 floors looks like this:

  [
    "  *  ",
    " *** ", 
    "*****"
  ]
  And a tower with 6 floors looks like this:

  [
    "     *     ", 
    "    ***    ", 
    "   *****   ", 
    "  *******  ", 
    " ********* ", 
    "***********"
  ]

  https://www.codewars.com/kata/576757b1df89ecf5bd00073b

*/

function towerBuilder(floors) {
  let result = [];

  for (let i = 0; i < floors; i++) {
    let spaces = ' '.repeat(floors - i - 1);
    let floor = `*`.repeat(1 + 2 * i);
    result.push(spaces + floor + spaces);
  }

  return result;
}
