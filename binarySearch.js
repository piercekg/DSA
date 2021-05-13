/*
Write a function which accepts a sorted array and a value and returns the index at which the value exists; otherwise return -1.
*/

var binarySearch = function(array, target) {
  var start = 0;
  var end = array.length - 1;
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};
/*
var result = binarySearch([1, 2, 3, 4, 5], 2);
console.log(result);
var result = binarySearch([1, 2, 3, 4, 5], 4);
console.log(result);
var result = binarySearch([1, 2, 3, 4, 5], 6);
console.log(result);
*/