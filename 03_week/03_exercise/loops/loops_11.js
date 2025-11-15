/* 

Write a function named generateMultiplicationTable:
- Take a number (e.g., 5) as input.
- Use a loop to generate the multiplication table for that number.
Log the table in the console.

Example for 5:

5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
 */

function generateMultiplicationTable() {
  const number = Number(prompt("Enter a number:"));
  for (let i = 1; i <= 50; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
  }
}

generateMultiplicationTable();
