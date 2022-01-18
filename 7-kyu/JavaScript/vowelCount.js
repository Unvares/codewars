/*

  Return the number (count) of vowels in the given string.

  We will consider a, e, i, o, u as vowels for this Kata (but not y).

  The input string will only consist of lower case letters and/or spaces.

  https://www.codewars.com/kata/54ff3102c1bad923760001f3

*/

function getCount(str) {
  let vowelsCount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  
  for (let vowel of vowels) {
    let index = -1;
  
    index = str.indexOf(vowel);

    while(index != -1) {
      vowelsCount++;
      index = str.indexOf(vowel, index + 1);
    }
  }
  
  return vowelsCount;
}
