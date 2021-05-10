/*
Write a recursive function which accepts a string and returns a new string in reverse.
*/

var reverse = function(str) {
  if (str.length <= 1) {
    return str;
    return reverse(str.slice(1)) + str[0];
  }
};
/*
var reverse = function(str) {
  var helper = function(arr1, arr2) {
    if (arr1.length === 0) {
      return arr2;
    }
    arr2.unshift(arr1.shift());
    return helper(arr1, arr2);
  }
  var reverseStr = helper(str.split(''), []);
  return reverseStr.join('');
};
*/
/*
var result = reverse('awesome'); // 'emosewa'
console.log(result);
var result = reverse('rithmschool'); // 'loohcsmhtir'
console.log(result);
*/