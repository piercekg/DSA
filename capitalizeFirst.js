/*
Write a recursive function which, given an array of strings, capitalizes the first letter of each string in the array.
*/

var capitalizeFirst = function(arr, i = 0) {
  if (i === arr.length) {
    return arr;
  }
  var letters = arr[i].split('');
  letters[0] = letters[0].toUpperCase();
  arr[i] = letters.join('');
  return capitalizeFirst(arr, i + 1);
};
/*
var result = capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
console.log(result);
*/