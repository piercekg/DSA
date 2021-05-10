/*
Write a recursive function which returns true if the string passed to it is a palindrome; otherwise, return false.
*/

var isPalindrome = function(str) {
  if (str.length === 1) {
    return true;
  }
  if (str.length === 2) {
    return str[0] === str[1];
  }
  if (str[0] === str.slice(-1)) {
    return isPalindrome(str.slice(1, -1));
  }
  return false;
};
/*
var isPalindrome = function(str) {
  var reverse = function(arr1, arr2) {
    if (arr1.length === 0) {
      return arr2.join('');
    }
    arr2.unshift(arr1.shift());
    return reverse(arr1, arr2);
  }
  if (str === reverse(str.split(''), [])) {
    return true;
  }
  return false;
};
*/
/*
var result = isPalindrome('awesome'); // false
console.log(result);
var result = isPalindrome('foobar'); // false
console.log(result);
var result = isPalindrome('tacocat'); // true
console.log(result);
var result = isPalindrome('amanaplanacanalpanama'); // true
console.log(result);
var result = isPalindrome('amanaplanacanalpandemonium'); // false
console.log(result);
*/