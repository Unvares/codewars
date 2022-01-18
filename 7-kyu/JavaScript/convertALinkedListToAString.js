/*

  https://www.codewars.com/kata/582c297e56373f0426000098

*/

function stringify(list) {
  if(!list) return 'null';
  
  const separator = ' -> ';
  let result = '';
  
  do {
    result += list.data + separator;
    list = list.next;
  } while(list != null)
    
  return result + 'null';
}
