/*
Write a recursive function which accepts a number and returns the nth number in the Fibbionacci sequence. Recall that the Fibbionacci sequence is the sequence of whole numbers such that every number is equal to the sum of the two previous numbers.
*/

var fib = function(num) {
  if (num <= 2) {
    return 1;
  }
  return fib(num - 1) + fib(num - 2)
}

/*
var fib = function(num) {
  var sequence = function(arr) {
    if (arr.length === num) {
      return arr;
    }
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    return sequence(arr);
  }
  var result = sequence([1, 1]);
  return result[result.length - 1];
};
*/
/*
var result = fib(4); // 3
console.log(result);
var result = fib(10); // 55
console.log(result);
var result = fib(28); // 317811
console.log(result);
var result = fib(35); // 9227465
console.log(result);
*/