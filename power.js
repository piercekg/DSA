/*
Write a function which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functinality of Math.pow() - do not worry about negative bases and exponents
*/

function power(base, exp){
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
};
/*
var result = power(2, 0);
console.log(result);
var result = power(2, 2);
console.log(result);
var result = power(2, 4);
console.log(result);
*/