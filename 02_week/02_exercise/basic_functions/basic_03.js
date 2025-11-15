/* Create a function named getLength that:
Takes one parameter, str.
Returns the length of str using .length.
Call the function with the string "JavaScript".
Print the result using console.log().

*/

// Function to get the length of a string
function getLength(str) {
  return str.length;
}

console.log(getLength("JavaScript"));

// Arrow function version
const getLength1 = (str) => str.length;

console.log(getLength1("JavaScript"));
