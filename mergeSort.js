var merge = function(arr1, arr2) {
  var merged = [];
  var i = 0;
  var j = 0;
  while(i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i ++;
    } else {
      merged.push(arr2[j]);
      j ++;
    }
  }
  while (i < arr1.length) {
    merged.push(arr1[i])
    i ++;
  }
  while (j < arr2.length) {
    merged.push(arr2[j])
    j ++;
  }
  return merged;
};

var mergeSort = function(arr) {
  if (arr.length <= 1) {
    return arr
  };
  var mid = Math.floor(arr.length / 2);
  var left = mergeSort(arr.slice(0, mid));
  var right = mergeSort(arr.slice(mid));
  return merge(left, right)
}

var array = [1, 56, 78, 35, 23, 18, 980, 45, 24, 79, 109]
console.log(mergeSort(array))
/*
var x = [1, 10, 50, 100];
var y = [2, 5, 29, 68, 101];
console.log(merge(x, y));
*/
