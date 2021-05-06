/*
Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function which finds the maximum sum of a subarray with the length of the number passed to the function.
Note that a subarray must consist of consecutive elements from the original array.
*/

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = 0;
  let temp = 0;
  for (let i = 0; i < num; i ++) {
    max += arr[i];
  }
  temp = max;
  for (let i = num; i < arr.length; i ++) {
    temp = temp - arr[i - num] + arr[i];
    max = Math.max(max, temp);
  }
  return max;
};
/*
var result = maxSubarraySum([100, 200, 300, 400], 2);
console.log(result);
var result = maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
console.log(result);
var result = maxSubarraySum([-3, 4, 0, -2, 6, -1], 2);
console.log(result);
var result = maxSubarraySum([2, 3], 3);
console.log(result);
*/