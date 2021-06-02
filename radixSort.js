/*
var getDigit = function(num, place) {
  var numString = num.toString();
  var i = (numString.length - 1) - place;
  return Number(numString[i]);
}
var digitCount = function(num) {
  return num.toString().length;
}
*/
var getDigit = function(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};
// console.log(getDigit(12345, 2));

var digitCount = function(num) {
  if (num === 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1
}
// console.log(digitCount(12345));

var mostDigits = function(nums) {
  var most = digitCount(nums[0]);
  for (var i = 1; i < nums.length; i ++) {
    most = Math.max(most, digitCount(nums[i]))
  }
  return most;
}
//console.log(mostDigits([123, 2, 3456, 78, 17654, 123]));

var radixSort = function(nums) {
  var maxDigits = mostDigits(nums);
  for (var i = 0; i < maxDigits; i ++) {
    var buckets = Array.from({length: 10}, () => []);
    for (var j = 0; j < nums.length; j ++) {
      buckets[getDigit(nums[j], i)].push(nums[j]);
    }
    nums = [].concat(...buckets);
  }
  return nums;
}
//console.log(radixSort([12, 14, 456, 678, 9876, 1234, 23456, 12345, 345]))