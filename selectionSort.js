/*
Selection Sort
*/

var selectionSort = function(arr) {
  for (var i = 0; i < arr.length; i ++) {
    var min = i;
    for (var j = i + 1; j < arr.length; j ++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (minb !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
};
/*
var result = selectionSort([2, 4, 6, 8, 9, 7, 3, 1, 12, 17, 124, 18, 11, 123, 178, 98, 87, 64, 31, 45]);
console.log(result);
*/