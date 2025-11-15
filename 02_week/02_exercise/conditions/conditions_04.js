/* 
Write a function named canEat:
Take two parameters: isHungry and hasFood.
If both are true, return "Time to eat!".
If either is false, return "You need to find food!"
Call the function with different combinations of isHungry and hasFood. 
*/

function canEat(isHungry, hasFood) {
  const message = isHungry && hasFood ? "Time to eat!" : "You need to find food!";
  console.log(message);
}

canEat(true, true);
canEat(false, true);
canEat(true, false);
