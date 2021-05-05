/*
Multiple Pointers - countUniqueValues
Implement a function which accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
*/

function countUniqueValues(arr){
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 0; j < arr.length; j ++) {
    if (arr[i] !== arr[j]) {
      i ++
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
/*
var result = countUniqueValues([1,1,1,1,1,2]);
console.log(result);
var result = countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);
console.log(result);
var result = countUniqueValues([]);
console.log(result);
var result = countUniqueValues([-2,-1,-1,0,1]);
console.log(result);
*/