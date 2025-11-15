/* Create a function named isEven that:
Takes one parameter, num.
Returns true if num is even, otherwise returns false.
Call the function with the arguments 4 and 7.
Print the results using console.log().

Bonus: Modify the function to use implicit return. 
*/

// Standard function
function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(18));

// Arrow function
const isEven1 = (num) => num % 2 === 0;

console.log(isEven1(19));
console.log(isEven1(28));