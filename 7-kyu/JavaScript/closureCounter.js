/*

  Define the function counter that returns a function that returns
  an increasing value.
  The first value should be 1.
  You're going to have to use closures.
  
  Example:
  const newCounter = counter();
  newCounter() // 1
  newCounter() // 2
  
  Closure:
  A closure is the combination of a function bundled together (enclosed) with
  references to its surrounding state (the lexical environment). In other
  words, a closure gives you access to an outer function’s scope from an inner
  function. In JavaScript, closures are created every time a function is
  created, at function creation time.

  https://www.codewars.com/kata/60edafd71dad1800563cf933

*/

function counter() {
  let count = 1;
  return () => count++;
}