/*
Write a function which accepts an array and a value, and returns the index at which the value exists; if the value does not exist in the array, return -1.
*/

var linearSearch = function(array, target) {
  for (var i = 0; i < array.length; i ++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};
