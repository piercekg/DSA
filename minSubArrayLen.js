/*
Sliding Window - minSubArrayLen
Write a function which accepts two parameters - an array of positive integers and a positive integer. Return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0.
*/

function minSubArrayLen(arr, num) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
  while (start < arr.length) {
    if (total < num && end < arr.length) {
      total += arr[end];
      end ++;
    } else if (total >= num) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start ++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
};
/*
var result = minSubArrayLen([2, 3, 1, 2, 4, 3], 7);
console.log(result);
var result = minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 62, 33, 19], 52);
console.log(result);
var result = minSubArrayLen([1, 4, 16, 33, 5, 7, 8, 9, 10], 55);
console.log(result);
var result = minSubArrayLen([1, 4, 16, 22, 4, 7, 8, 9, 10], 95);
console.log(result);
*/