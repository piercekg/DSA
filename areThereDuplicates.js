/*
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/

// Use Sets
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

// Multiple pointers
/*
function areThereDuplicates() {
  let args = Array.prototype.slice.call(arguments);
  args.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start ++;
    next ++;
  }
  return false;
};
*/
// Frequency counter
/*
function areThereDuplicates() {
  let counts = {};
  for (let i = 0; i < arguments.length; i ++) {
    if (counts[arguments[i]]) {
      return true;
    } else {
      counts[arguments[i]] = 1;
    }
  }
  return false;
};
*/
/*
var result = areThereDuplicates(1, 2, 3);
console.log(result);
var result = areThereDuplicates(1, 2, 2);
console.log(result);
var result = areThereDuplicates('a', 'b', 'c', 'a');
console.log(result);
*/