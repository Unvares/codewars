/*

  You will be given a number and you will need to return it as a string in Expanded Form.
  
  For example:
    expandedForm(12); // Should return '10 + 2'
    expandedForm(42); // Should return '40 + 2'
    expandedForm(70304); // Should return '70000 + 300 + 4'

  NOTE: All numbers will be whole numbers greater than 0.

  https://www.codewars.com/kata/5842df8ccbd22792a4000245

*/

function expandedForm(num) {
  var array = num.toString().split('');
  var iteration = 1;
  for(let i = array.length-1; i >= 0; i--){
    array[i] *= iteration;
    iteration *= 10;
  }
  for(let i = 0; i < array.length; i++){
    if(array[i] == 0) {
    array.splice(i, 1);
    i--;
    }
    
  }
  return array.join(' + ');
}
