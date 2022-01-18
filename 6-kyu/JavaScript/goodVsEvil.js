/*

  https://www.codewars.com/kata/52761ee4cffbc69732000738

*/

function goodVsEvil(good, evil){
  var getWorth = function (side, worth) {
    return side.split(' ').reduce(function (result, value, index) {
      return result + (worth[index] * value);
    }, 0);
  };
  
  var result = getWorth(good, [1, 2, 3, 3, 4, 10]) - getWorth(evil, [1, 2, 2, 2, 3, 5, 10]);
  
  return result > 0 ? "Battle Result: Good triumphs over Evil":
         result < 0 ? "Battle Result: Evil eradicates all trace of Good":
                       "Battle Result: No victor on this battle field";
  
}
