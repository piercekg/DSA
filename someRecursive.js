/*
Write a recursive function which acceptsw an array and a callback. The function returns true if a single value in the array returns true when passed to the callback; otherwise, return false.
*/

var someRecursive = function(arr, cb) {
  if (arr.length === 0) {
    return false;
  }
  if (cb(arr[0])) {
    return true;
  }
  return someRecursive(arr.slice(1), cb);
};

/*
var isOdd = val => val % 2 !== 0;

var result = someRecursive([1,2,3,4], isOdd); // true
console.log(result);
var result = someRecursive([4,6,8,9], isOdd); // true
console.log(result);
var result = someRecursive([4,6,8], isOdd); // false
console.log(result);
var result = someRecursive([4,6,8], val => val > 10); // false
console.log(result);
*/