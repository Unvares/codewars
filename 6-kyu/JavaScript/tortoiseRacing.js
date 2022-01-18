/*

  https://www.codewars.com/kata/55e2adece53b4cdcb900006c

*/

function race(v1, v2, g) {
  var time = g/(v2-v1);
  
  return v2 > v1 ? [Math.floor(time), Math.floor(time*60%60), Math.floor(time*3600%60)] : null;
}
