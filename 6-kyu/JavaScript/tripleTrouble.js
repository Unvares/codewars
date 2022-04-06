/*

  Write a function tripledouble(num1,num2), which takes numbers num1 and num2
  and returns 1 if there is a straight triple of a number at any place in num1
  and also a straight double of the same number in num2.
  If this isn't the case, return 0

  Examples
    tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                              // num2 has straight double 99s
    tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2
    tripledouble(12345, 12345) == 0
    tripledouble(666789, 12345667) == 1

*/

function tripledouble(num1, num2) {
  num1 = [...`${num1}`];
  num2 = [...`${num2}`];
  const triples = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const doubles = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  let sequenceLength = 1;
  let currentNumber = num1[0];
  for(let i = 1; i < num1.length+1; i++) {
    if(num1[i] == currentNumber) {
      sequenceLength++;
      continue;
    }
    else {
      if(sequenceLength >= 3) triples[currentNumber] = 1;
      sequenceLength = 1;
      currentNumber = num1[i];
    }
  }

  sequenceLength = 1;
  currentNumber = num2[0];

  for(let i = 1; i < num2.length+1; i++) {
    if(num2[i] == currentNumber) {
      sequenceLength++;
      continue;
    }
    else {
      if(sequenceLength > 1) doubles[currentNumber] = 1;
      sequenceLength = 1;
      currentNumber = num2[i];
    }
  }
  for(let i = 0; i < triples.length; i++) {
    if(triples[i] == doubles[i] && triples[i] == 1) return 1;
  }
  return 0;
}
