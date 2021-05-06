/*
Multiple Pointers - isSubsequence
Write a function which takes in two strings and checks whether the characters in the first string form a subsequence of the characers in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
*/

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i ++;
    }
    if (i === str1.length) {
      return true;
    }
    j ++;
  }
  return false;
};
/*
var result = isSubsequence('hello', 'hello world');
console.log(result);
var result = isSubsequence('sing', 'sting');
console.log(result);
var result = isSubsequence('abc', 'abracadabra');
console.log(result);
var result = isSubsequence('abc', 'acb');
console.log(result);
*/