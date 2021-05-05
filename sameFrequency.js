/*
Frequency Counter - sameFrequency
Write a function that, given two positive integers, finds out if the two numbers have the same frequency of digits.
*/

function sameFrequency(num1, num2){
  let freq1 = {};
  let numString = num1.toString();
  for (let dig of numString) {
    freq1[dig] ? freq1[dig] ++ : freq1[dig] = 1;
  }

  numString = num2.toString();
  for (let dig of numString) {
    if (!freq1[dig]) {
      return false;
    } else {
      freq1[dig] --;
    }
  }
  return true;
};
/*
var result = sameFrequency(182, 281);
console.log(result);
var result = sameFrequency(34, 14);
console.log(result);
var result = sameFrequency(3589578, 5879385);
console.log(result);
var result = sameFrequency(22, 222);
console.log(result);
*/