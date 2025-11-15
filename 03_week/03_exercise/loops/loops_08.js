/* 
Write a function named findMinMax:
- Ask the user how many numbers they want to input.
- Then prompt them to enter that many numbers.
- Once all numbers are entered, determine and log:
- The smallest number.
- The largest number.
Display the results in the console. 
*/

const findMinMax = () => {
  const count = Number(prompt("How many numbers will you enter?"));
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < count; i++) {
    const num = Number(prompt("Enter a number:"));
    if (num < min) min = num;
    if (num > max) max = num;
  }

  console.log(min, max);
};

findMinMax();
