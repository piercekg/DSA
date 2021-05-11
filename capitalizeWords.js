/*
Write a recursive function that, given an array of words, returns a new array containing each word capitalized.
*/

function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let result = capitalizeWords(array.slice(0, -1));
  result.push(array.slice(array.length - 1)[0].toUpperCase());
  return result;
}

let words = ['i', 'am', 'learning', 'recursion'];
var result = capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
console.log(result);