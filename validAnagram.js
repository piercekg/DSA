/*
Frequency Counter - validAnagram
Given two strings, write a function to determine if the second string is an anagram of the first. You may assume the string contains only lowercase alphabets.
*/

function validAnagram(str1, str2){
  if (str1.length !== str2.length) {
    return false;
  }
  let chars1 = {};
  let chars2 = {};

  for (let char of str1) {
    chars1[char] = ++ chars1[char] || 1;
  }
  for (let char of str2) {
    chars2[char] = ++ chars2[char] || 1;
  }

  for (let char in chars1) {
    if (chars1[char] !== chars2[char]) {
      return false;
    }
  }
  return true;
};
/*
var result = validAnagram('', '');
console.log(result);
var result = validAnagram('aaz', 'zza');
console.log(result);
var result = validAnagram('anagram', 'nagaram');
console.log(result);
var result = validAnagram('rat', 'car');
console.log(result);
*/