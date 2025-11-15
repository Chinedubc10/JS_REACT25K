/* Create a variable description and assign it the value " JavaScript is Fun and powerful! ".
Perform the following:
Trim the extra spaces using .trim().
Convert the string to lowercase.
Check if it includes the word "fun".
Replace "powerful" with "amazing".
Print the final string and whether it includes "fun" using console.log().
Example output:
"Final description: javascript is fun and amazing!"
"Does it include 'fun'? true"
 */

const description = " JavaScript is Fun and powerful! ";
const finalDescription = description.trim().replace("powerful", "amazing").toLowerCase();
const hasFun = finalDescription.includes("fun");

if (hasFun) {
  console.log(`"Final description: ${finalDescription}"\n"Does it include 'fun'? true"`);
} else {
  console.log("Incorrect result");
}
