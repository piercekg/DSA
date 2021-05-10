/*
Write a function which accepts a number and returns the factorial of that number. factorial of 0 is always 1.
*/

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}
/*
var result = factorial(1); // 1
console.log(result);
var result = factorial(2); // 2
console.log(result);
var result = factorial(4); // 24
console.log(result);
var result = factorial(7); // 5040
console.log(result);
*/