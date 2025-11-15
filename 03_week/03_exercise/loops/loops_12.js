/* 
Write a function named buildGroceryList:
- Prompt the user to input grocery items one by one.
- Stop when the user types "done".
Log the complete grocery list in the console.
 */

const buildGroceryList = () => {
  let list = [];
  while (true) {
    const item = prompt("Enter a commodity (type 'done' to finish):");
    if (item === "done") break;
    list.push(item);
  }
  console.log(list.join(",") + ".");
};

buildGroceryList();
