/*
Write a function which takes in an object and finds all of the values which are numbers and converts them to strings, returning a new object.
*/

var stringifyNumbers = function(obj) {
  var newObj = {};
  for (var k in obj) {
    if (typeof obj[k] === 'number') {
      newObj[k] = obj[k].toString();
    } else if (obj[k] instanceof Object) {
      newObj[k] = stringifyNumbers(obj[k]);
    } else {
      newObj[k] = obj[k];
    }
  }
  return newObj;
};
/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

var result = stringifyNumbers(obj);
console.log(result);
*/
/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/