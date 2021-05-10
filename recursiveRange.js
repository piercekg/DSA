/*
Write a function which accepts a number anbd adds up all the numbers from 0 to the number passed to the function.
*/

var recursiveRange = function(num) {
  if (num === 0) {
    return 0;
  }
  return num + recursiveRange(num - 1);
};
/*
var result = recursiveRange(6); // 21
console.log(result);
var result = recursiveRange(10); // 55
console.log(result);
*/