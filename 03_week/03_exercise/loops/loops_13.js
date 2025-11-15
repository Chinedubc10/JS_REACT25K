/* 
Write a function named validatePassword:
- Use a loop to allow the user to input a password.
- If the password is "correct123", log: "Access granted!" and exit the loop.
- If incorrect, prompt the user again with: "Try again!".
 */

function validatePassword() {
  let password;
  while (password !== "correct123") {
    password = prompt("Please enter the password:");
    if (password === "correct123") {
      alert("Access granted!");
    } else {
      alert("Try again!");
    }
  }
}

validatePassword();
