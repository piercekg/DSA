/*
Insertion Sort
*/

var insertionSort = function(arr) {
  for (var i = 1; i < arr.length; i ++) {
    var current = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > current; j --) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = current;
  }
  return arr;
};
/*
var result = insertionSort([2, 4, 6, 8, 9, 7, 3, 1, 12, 17, 124, 18, 11, 123, 178, 98, 87, 64, 31, 45]);
console.log(result);
*/