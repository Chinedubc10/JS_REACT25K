/* Create a function named cleanAndTransform that:
Takes one parameter, str.
Trims whitespace, converts the string to lowercase, and replaces "powerful" with "amazing".
Returns the transformed string.
Call the function with " JavaScript is powerful! ".
Print the result using console.log(). 

*/

function canEnterEvent(age, hasID) {
  console.log(age >= 18 && hasID ? "You can enter the event." : "You cannot enter.");
}

canEnterEvent(13, true);
canEnterEvent(19, true);
canEnterEvent(12, false);
