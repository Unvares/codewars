/*

  Write a function that determines whether the passed in arrays are similar.
  Similar means they contain the same elements, and the same number of
  occurrences of elements.

  const arr1 = [1, 2, 2, 3, 4],
        arr2 = [2, 1, 2, 4, 3],
        arr3 = [1, 2, 3, 4],
        arr4 = [1, 2, 3, "4"]

  arraysSimilar(arr1, arr2); // Should equal true
  arraysSimilar(arr2, arr3); // Should equal false
  arraysSimilar(arr3, arr4); // Should equal false

  https://www.codewars.com/kata/51e704f2d8dbace389000279
  
*/

function arraysSimilar(arr1, arr2) {
  const arr1Sorted = arr1.sort((a, b) => a - b);
  const arr2Sorted = arr2.sort((a, b) => a - b);
  return (JSON.stringify(arr1Sorted) === JSON.stringify(arr2Sorted));
}
