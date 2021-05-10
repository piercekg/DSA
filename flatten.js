/*
Write a recursive function which accepts an array of arrays and returns a new array with all the values of all the arrays.
*/

var flatten = function(arr) {
  var flatArr = [];
  for (var i = 0; i < arr.length; i ++) {
    if (Array.isArray(arr[i])) {
      flatArr = flatArr.concat(flatten(arr[i]));
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
};
/*
var result = flatten([1, 2, 3, [4, 5] ]); // [1, 2, 3, 4, 5]
console.log(result);
var result = flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
console.log(result);
var result = flatten([[1],[2],[3]]); // [1,2,3]
console.log(result);
var result = flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3]
console.log(result);
*/