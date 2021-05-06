/*
Sliding Window - findLongestSubstring
Write a function which accepts a string and returns the length of the longest substring with all distinct characters.
*/

function findLongestSubstring(str) {
  let longest = 0;
  let start = 0;
  let seen = {};

  for (let i = 0; i < str.length; i ++) {
    if (seen[str[i]]) {
      start = Math.max(start, seen[str[i]]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[str[i]] = i + 1;
  }
  return longest;
};
/*
var result = findLongestSubstring('');
console.log(result);
var result = findLongestSubstring('rithmschool');
console.log(result);
var result = findLongestSubstring('thecatinthehat');
console.log(result);
var result = findLongestSubstring('bbbbbb');
console.log(result);
*/