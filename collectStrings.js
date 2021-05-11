/*
Write a function which accepts an object and returns an array of all the values in the object that have a typeof string.
*/

var collectStrings = function(obj) {
  var strings = [];
  for (var k in obj) {
    if (typeof obj[k] === 'string') {
      strings.push(obj[k]);
    }
    if (obj[k] instanceof Object) {
      strings = strings.concat(collectStrings(obj[k]));
    }
  }
  return strings;
}
/*
var collectStrings = function(object) {
  var result = [];
  var helper = function(obj) {
    for (var k in obj) {
      if (typeof obj[k] === 'string') {
        result.push(obj[k]);
      }
      if (obj[k] instanceof Object) {
        helper(obj[k])
      }
    }
  }
  helper(object);
  return result;
};
*/
/*
var obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

var result = collectStrings(obj); // ["foo", "bar", "baz"])
console.log(result);
*/