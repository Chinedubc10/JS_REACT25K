/*
  Create a function named checkAdult that:
    - Accepts an age as a parameter
    - Returns "You are an adult." if the age is 18 or older
    - Returns nothing otherwise
  
  Call the function with several age values and print the results.
*/



const checkAge = age => console.log(age >= 18 ? "You are an adult." : null);

checkAge();

