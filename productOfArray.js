/*
Write a function which takes in an array of numbers and returns the product of them all.
*/

var productOfArray = function(arr) {
  if (arr.length === 0) {
    return 1;
  }
  var num = arr.shift();
  return num * productOfArray(arr);
};
/*
var productOfArray = function(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
*/
/*
var result = productOfArray([1,2,3]); // 6
console.log(result);
var result = productOfArray([1,2,3,10]); // 60
console.log(result);
*/