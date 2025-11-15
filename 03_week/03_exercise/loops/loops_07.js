/* 
Write a function named sumAndAverage:
- Ask the user to input ten numbers.
- Calculate and log:
    - The sum of the numbers.
    - The average of the numbers.
    - The smallest and largest numbers.
Display all results in the console.
*/

const sumAndAverage = () => {
  let sum = 0, min = Infinity, max = -Infinity;
  const totalInputs = 4;

  for (let i = 0; i < totalInputs; i++) {
    const num = Number(prompt("Enter a number:"));
    sum += num;
    if (num < min) min = num;
    if (num > max) max = num;
  }

  console.log(sum, sum / totalInputs, min, max);
};

sumAndAverage();
