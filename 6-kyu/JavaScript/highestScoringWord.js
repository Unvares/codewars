/*

  Given a string of words, you need to find the highest scoring word.
  Each letter of a word scores points according to its position in the alphabet:
    a = 1
    b = 2
    c = 3
    etc.
  You need to return the highest scoring word as a string.
  If two words score the same, return the word that appears earliest in the original string.
  All letters will be lowercase and all inputs will be valid.

  https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/

*/

function high(string) {
  const arrayOfWords = string.split(' ');
  let resultIndex = 0;
  arrayOfWords
    .map(word => {
      return word
        .split('')
        .reduce((result, symbol) => result + (symbol.charCodeAt(0) - 96), 0);
    })
    .forEach((score, index, array) => {
      if(score <= array[resultIndex]) return;
      resultIndex = index;
    });
  return arrayOfWords[resultIndex];
}
