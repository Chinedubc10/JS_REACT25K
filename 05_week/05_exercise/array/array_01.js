/* 
Initial data:
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

1. Loop through the `teamMembers` array and log each name to the console.  
2. Remove the first member of the array.  
3. Remove the last member of the array.  
4. Add a new member "Alex" to the front of the array.  
5. Append a new member "Linda" to the end of the array.  
6. Create a new array that excludes the first two members, keeping the original array unchanged.  
7. Find the index of "Mike" in the array.  
8. Try to find the index of "Jake" (who is not in the array).  
9. Replace "Mike" with "Carol" and "Bruce" in the same position.  
10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged.  
11. Copy the entire `teamMembers` array using `slice` and store it in a new variable.  
12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.  
13. Find all occurrences of "John" in the array and store their positions in a new array.  
14. Transform all names in the array to be uppercase while keeping the original array unchanged.  
15. Sort `teamMembers` in alphabetical order.  
16. Reverse the `teamMembers` array.  
17. Check if at least one member in the array is named "John".  
18. Check if all names in the array have more than three letters. 
*/


let team = ['John', 'Emily', 'Mike', 'Sarah'];


team.forEach(name => console.log(name));


team.shift();
console.log(team);

team.pop();
console.log(team);


team.unshift('Alex');
console.log(team);

team.push('Linda');
console.log(team);

let slicedTeam = team.slice(2);
console.log(slicedTeam);


let mikePos = team.indexOf('Mike');
console.log(mikePos);

let jakePos = team.indexOf('Jake');
console.log(jakePos);


team.splice(mikePos, 1, 'Carol', 'Bruce');
console.log(team);


let updatedTeam = team.concat('Bob');
console.log(updatedTeam);
console.log(team);


let teamCopy = team.slice();
console.log(teamCopy);


let newMembers = ['Tina', 'Dean'];
let fullTeam = team.concat(newMembers);
console.log(fullTeam);

let johnPositions = [];
team.forEach((name, i) => {
  if (name === 'John') johnPositions.push(i);
});
console.log(johnPositions);


let upperTeam = team.map(name => name.toUpperCase());
console.log(upperTeam);


team.sort();
console.log(team);

team.reverse();
console.log(team);


console.log(team.includes('John'));


console.log(team.every(name => name.length > 3));
