/* 
Write a function named askToContinue:
- Prompt the user to enter a number.
- Then, ask: "Do you want to continue giving numbers? (y/n)".
- If the user answers "y", ask for another number.
- If the user answers "n", stop asking and log the average of all entered numbers in the console. 
*/

const askToContinue = () => {
  let count = 0;
  let total = 0;

  while (true) {
    const input = prompt("Please enter the number:");
    const number = Number(input);

    if (isNaN(number)) {
      alert("Invalid number, please refresh the web page!");
      break;
    }

    total += number;
    count++;

    const answer = prompt("Do you want to continue giving numbers? (y/n)").toLowerCase();

    if (answer === "n") break;
    if (answer !== "y") alert("Invalid response, the procedure will be continued!");
  }

  console.log(total);
  console.log(total / count);
};

askToContinue();
