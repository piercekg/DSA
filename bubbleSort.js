/*
Bubble Sort
*/

var bubbleSort = function(arr) {
  for (var i = arr.length - 1; i > 0; i --) {
    var swapped = false;
    for (var j = 0; j < i; j ++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      return arr;
    }
  }
  return arr;
};
/*
var result = bubbleSort([2, 4, 6, 8, 9, 7, 3, 1, 12, 17, 124, 18, 11, 123, 178, 98, 87, 64, 31, 45]);
console.log(result);
*/