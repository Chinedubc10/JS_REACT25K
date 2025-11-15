/* 
Write a function named getDayName:
Take a parameter day.
Use a switch statement to:
Return the name of the day (1 = "Monday", 2 = "Tuesday", etc.).
Use default to return "Invalid day" for invalid values.
Call the function with valid and invalid day numbers. 
*/

const getDayName = (day) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  console.log(days[day - 1] || "Invalid day");
};

getDayName(1);
getDayName(3);
getDayName(6);
getDayName(12);
getDayName(2);
getDayName(16);
getDayName(4);
getDayName(5);
getDayName(7);
