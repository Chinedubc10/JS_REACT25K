/* 
Write a function named countEvenNumbers:
- Prompt the user to input 20 numbers one by one.
- After all numbers are entered, log how many of them were even.
Display the result in the console. 
*/

function countEvenNumbers() {
  let count = 0;
  for (let i = 0; i < 20; i++) {
    const num = Number(prompt("Enter a number:"));
    if (num % 2 === 0) count++;
  }
  console.log(count);
}

// Alternatives
countEvenNumbers();

const countEvenNumbers = () => {
  let count = 0;

  for (let i = 0; i < 5; i++) {
    const number = Number(prompt("Enter a number:"));
    if (number % 2 === 0) count++;
  }

  console.log(count);
};

countEvenNumbers();

//Alternatives Two

const countEvenNumbersTwo = () => {
  let evenCount = 0;
  for (let i = 0; i < 5; i++) {
    const number = Number(prompt("Enter the number:"));
    if (number % 2 === 0) evenCount++;
  }
  console.log(evenCount);
};

countEvenNumbersTwo();

