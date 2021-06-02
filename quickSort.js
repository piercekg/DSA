var pivot = function(arr, start = 0, end = arr.length - 1) {
  var pivot = arr[start];
  var i = start;
  for (var j = start + 1; j < arr.length; j ++) {
    if (pivot > arr[j]) {
      i ++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[start], arr[i]] = [arr[i], arr[start]];
  return i;
}

var quickSort = function(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    var i = pivot(arr, left, right);
    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);
  }
  return arr;
}

var array = [9, 5, 6, 7, 3];
console.log(quickSort(array));