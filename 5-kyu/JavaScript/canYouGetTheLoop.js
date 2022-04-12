/*

  You are given a node that is the beginning of a linked list.
  This list always contains a tail and a loop. Your objective
  is to determine the length of the loop.

  Use the `getNext' method or 'next' property to get the following node.
    node.getNext()
    node.next

  Note: do NOT mutate the nodes!

  https://www.codewars.com/kata/52a89c2ea8ddc5547a000863

*/

function loop_size(node) {
  const arr = [];

  while(true) {
    arr.push(node);
    
    for(let i = 0; i < arr.length; i++) {
      if(arr[arr.length - 1].next === arr[i]) return arr.length - i;
    }
    
    node = node.next;
  }
}
