/*
Multiple Pointers - averagePair
Write a function that, given a sorted array of integers and a target average, determines if there is a pair of values in the array where the average of the pair equals the arget average.
*/

function averagePair(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2
    if (avg === target) {
      return true;
    } else if (avg < target) {
      start ++;
    } else {
      end --
    }
  }
  return false;
};
/*
var result = averagePair([1, 2, 3], 2.5);
console.log(result);
var result = averagePair([1, 3, 3, 5, 6, 7, ], 2.5);
console.log(result);
*/