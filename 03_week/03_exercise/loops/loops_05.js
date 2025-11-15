/* 
Write a function named calculateAverageUntilZero:
- Continuously prompt the user to input numbers.
- Stop asking for inputs when the user enters 0.
- Calculate and log the average of all entered numbers in the console once the loop ends.
 */

function calculateAverageUnitZero() {
  let sum = 0;
  let count = 0;

  while (true) {
    const number = Number(prompt("Enter the number:"));
    if (number === 0) break;
    sum += number;
    count++;
  }

  console.log(sum / count);
}

calculateAverageUnitZero();
