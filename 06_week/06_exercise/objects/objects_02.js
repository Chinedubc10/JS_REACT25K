/* Task 1
Create an object `weather` that contains properties `temperature`, `humidity`, and `condition` (e.g., "Sunny", "Rainy").
Write a function that logs `"Take an umbrella!"` if it's rainy.
*/

// Your code here

const weather = {
  temperature: -31,
  humidity: 20,
  condition: 'Rainy'
};

function weatherCheck() {
  if (weather.condition === 'Rainy') {
    console.log("Take an umbrella!");
  }
}

weatherCheck();

/* Task 2
Define an object named `shoppingCart` that contains an array of items.
Each item has `name`, `price`, and `quantity`.
Write a function that calculates the total price of all items in the cart.
*/

// Your code here
const shoppingCart = [
  { name: 'Milk', price: 5, quantity: 1 },
  { name: 'Bear', price: 6, quantity: 2 },
  { name: 'Juice', price: 2, quantity: 3 }
];

const calculateTotal = () => {
  const total = shoppingCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  console.log(total);
};

calculateTotal();

/* Task 3
Create an array of objects named `restaurants`, each with properties `name`, `cuisineType`, and `rating`.
Write a function that returns only the restaurants with a rating of 4 or higher.
*/


// Your code here

const restaurants = [
  { name: 'BigSwenie', cuisineType: 'national', rating: 3 },
  { name: 'SmallTom', cuisineType: 'international', rating: 2 },
  { name: 'JoelsSwamp', cuisineType: 'interesting', rating: 9 }
];

const showTopRated = () => {
  const topNames = restaurants
    .filter(r => r.rating > 8)
    .map(r => r.name);
    
  console.log(topNames.join());
};

showTopRated();

/* Task 4
Define an object named `bankAccount` with properties `accountHolder`, `balance`, and `transactions` (an array of numbers).
Write a function that calculates the total balance after all transactions.
*/

// Your code here

const bankAccount = {
  accountHolder: 'J.Miller',
  balance: 15899,
  transactions: [355, 655, 799]
};

const updatedBalance = () => {
  const totalSpent = bankAccount.transactions.reduce((sum, amount) => sum + amount, 0);
  console.log(bankAccount.balance - totalSpent);
};

updatedBalance();

/* Task 5
Create an array `students` where each student has `name`, `scores` (array of numbers), and `averageScore` (initially null).
Write a function that calculates and updates each student's `averageScore`.
*/

// Your code here

const students = [
  { name: 'Lara', scores: [50, 60] },
  { name: 'Tina', scores: [55, 65] },
  { name: 'Jill', scores: [45, 75] }
];

function updateScores() {
  students.forEach(({ name, scores }) => {
    const average = scores.reduce((a, b) => a + b) / scores.length;
    console.log(`${name} - averageScore: ${average}`);
  });
}

updateScores();

/* Task 6
Define an array named `courses`, each containing `courseName`, `instructor`, and `studentsEnrolled`.
Write a function that logs the course name of any course with more than 30 students.
*/

// Your code here

const courses = [
  { courseName: 'Swenska', instructor: 'L.Raley', studentsEnrolled: 31 },
  { courseName: 'English', instructor: 'J.Martin', studentsEnrolled: 26 },
  { courseName: 'Suomi', instructor: 'K.Linder', studentsEnrolled: 32 },
];

const logCourse = () => {
  const names = courses
    .filter(course => course.studentsEnrolled > 30)
    .map(course => course.courseName);
    
  console.log(names.join());
};

logCourse();

/* Task 7
Create an object `pet` with properties `species`, `name`, and `isVaccinated`.
Write a function that returns `"Vaccination required"` if the pet is not vaccinated.
*/

// Your code here

const pets = [
  { species: 'Vulpes vulpes', name: 'Gloria', isVaccinated: true },
  { species: 'Felis catus', name: 'Sentinel', isVaccinated: true },
  { species: 'Canis lupus', name: 'Maestro', isVaccinated: false },
];

function checkVaccination() {
  const unvaccinated = pets.filter(pet => !pet.isVaccinated).map(pet => pet.name);
  if (unvaccinated.length) {
    console.log(`Attention, offender detected! ${unvaccinated.join(', ')} - Vaccination required!`);
  }
}

checkVaccination();

/* Task 8
Define an object named `city` with properties `name`, `population`, and `landmark`.
Write a function that logs `"This is a big city!"` if the population exceeds 1,000,000.
*/

// Your code here

const city = {
  name: 'New York',
  population: 8258000,
  landmark: 'The Empire State Building'
};

const checkCitySize = () => {
  if (city.population > 1000000) {
    console.log("This is a big city!");
  }
};

checkCitySize();

/* Task 9
Create an array `transactions`, where each transaction is an object with `type` ("credit" or "debit") and `amount`.
Write a function that calculates the total balance after processing all transactions.
*/

// Your code here

const transactions = [
  { type: 'credit', amount: 1000 },
  { type: 'debit', amount: 1000 },
  { type: 'debit', amount: 1000 },
];

function calculateBalance() {
  let balance = 0;
  for (const { type, amount } of transactions) {
    balance += type === 'credit' ? amount : -amount;
  }
  console.log(balance);
}

calculateBalance();

/* Task 10
Define an object named `foxPack` containing an array of fox objects.
Each fox has `name`, `age`, and `furColor`.
Write a function that filters out only the foxes that are younger than 2.
*/

// Your code here

const foxPack = [
  { name: 'Rudolf', age: 176, furColor: 'greyAlready' },
  { name: 'Cassiopeia', age: 1, furColor: 'redLikeSun' },
  { name: 'Princess Leia', age: 7, furColor: 'lightOrange' }
];

function findTheKid() {
  const baby = foxPack.find(fox => fox.age < 2);
  if (baby) {
    console.log(`Finally we have found you, our sweet ${baby.name}!`);
  }
}

findTheKid();

/* Task 11
Create an object `gameCharacter` with properties `name`, `level`, `health`, and `inventory` (an array).
Write a function that logs all items in the character’s inventory.
*/

// Your code here

const character = {
  name: 'Bulbasaur',
  level: 99,
  health: 100,
  inventory: ['Crystal Sword', 'First Aid kit', 'Molecular Uncoupler', 'One Orange']
};

function showInventory() {
  console.log(...character.inventory);
}

showInventory();

/* Task 12
Define an array named `employees`, where each employee has a `name`, `role`, and `workingHours`.
Write a function that finds and logs employees who work more than 40 hours.
*/

// Your code here

const employees = [
  { name: 'Freddy Krueger', role: 'Serial killer', workingHours: 35 },
  { name: 'Alien', role: 'Perfect killing machine', workingHours: 100000000 },
  { name: 'Pippi Långstrump', role: 'Fictional main character', workingHours: 0 }
];

const alertHardWorkers = () => {
  const names = employees.filter(e => e.workingHours > 40).map(e => e.name);
  console.log(`Aaaaaaa, ${names} is coming for us! GO! GO! GO!`);
};

alertHardWorkers();

/* Task 13
Create an array `musicAlbums` where each album has `title`, `artist`, and `releaseYear`.
Write a function that logs albums released after 2000.
*/

// Your code here

const musicAlbums = [
  { title: 'The Eminem Show', artist: 'Eminem', releaseYear: 2002 },
  { title: 'The Fox (What Does the Fox Say?)', artist: 'Ylvis', releaseYear: 2013 },
  { title: 'Sinatra at the Sands', artist: 'Frank Sinatra', releaseYear: 1966 },
];

function showAlbumsBefore2000() {
  const titles = musicAlbums
    .filter(album => album.releaseYear < 2000)
    .map(album => album.title);

  console.log(titles.join(', '));
}

showAlbumsBefore2000();

/* Task 14
Define an array named `cars`, each containing `brand`, `model`, and `horsepower`.
Write a function that finds and returns the car with the highest horsepower.
*/

// Your code here

const cars = [
  { brand: "The Flintstones' Flintmobile", model: 'Bum-bum, bang-bang', horsepower: 2000000000 },
  { brand: 'Batmobile', model: 'Gotham City Thunderstorm One', horsepower: 10000 },
  { brand: 'Lightning McQueen', model: 'Try to stop me, kiddo', horsepower: 15000 }
];

function findFastestCar() {
  const fastest = cars.reduce((a, b) => b.horsepower > a.horsepower ? b : a);
  console.log(fastest);
}

findFastestCar();

/* Task 15
Create an array of `airports`, where each airport has `name`, `country`, and `flightsPerDay`.
Write a function that finds the airport with the most daily flights.
*/

// Your code here

const airports = [
  { name: 'Heathrow Airport', country: 'UK', flightPerDay: 1000 },
  { name: 'JFK Airport', country: 'USA', flightPerDay: 4000 },
  { name: 'Frankfurt Airport', country: 'Germany', flightPerDay: 3000 }
];

function flightAmount() {
  const busiest = airports.reduce((a, b) => b.flightPerDay > a.flightPerDay ? b : a);
  console.log(busiest);
}

flightAmount();
