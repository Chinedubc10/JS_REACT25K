/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`.
Add at least two book objects to this collection.
*/

// Your code here


const library = [
  { title: 'On the Origin of Species', author: 'Charles Darwin', yearPublished: '1859' },
  { title: 'The Great Gatsby', author: 'Scott Fitzgerald', yearPublished: '1925' },
  { title: 'The Catcher In The Rye', author: 'J.D. Salinger', yearPublished: '1951' }
];

library.push(
  { title: '1984', author: 'George Orwell', yearPublished: '1949' },
  { title: 'Lord of the Rings Trilogy', author: 'J.R.R. Tolkien', yearPublished: '1937-1949' }
);

console.log(library);

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/


// Your code here

console.log(library[0].title);

library[1].yearPublished = 2000;
console.log(library[1].yearPublished);

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here
const book = library[0];

book.genres = ['Horror', 'Mystery', 'Action & Adventure', 'Dystopian'];
book.isAvailable = true;

console.log(book);

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here
function Book(title, author, year, genres) {
  return { title, author, year, genres };
}

const bookSix = Book('Harry Potter Series', 'J.K. Rowling', '1997-2007', ['Fantasy', 'Mystery']);
library.push(bookSix);
console.log(library);

/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here
const createBook = (title, author, year, genres) => ({
  title,
  author,
  yearPublished: year,
  genres
});

const bookTest = createBook('Great Expectations', 'Charles Dickens', '1860-1861', ['Novel', 'Mystery']);
console.log(bookTest);

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

// Your code here
console.log(JSON.stringify(library)); 
console.log(JSON.parse(JSON.stringify(library)));

/* Task 7
Create an array named `students`, where each student has a `name`, `age`, and `grade`.
Log the name of any student who has a grade higher than 90.
*/

// Your code here

const students = [
  { name: 'studentOne', age: '17', grade: 92 },
  { name: 'studentTwo', age: '19', grade: 25 },
  { name: 'studentThree', age: '18', grade: 56 },
];

const gradeCheck = () => {
  students.forEach(({ name, grade }) => {
    if (grade > 90) console.log(name);
  });
};

gradeCheck();


/* Task 8
Define an object named `car` with properties for `brand`, `model`, `year`, and `isElectric`.
Use a function to check if the car is electric. If it is, log `"This car is eco-friendly!"`. Otherwise, log `"This car runs on fuel."`
*/

// Your code here

const car = {
  brand: 'BMW',
  model: 'i3',
  year: '2020',
  isElectric: true
};

function engineCheck(car) {
  console.log(car.isElectric ? 'This car is eco-friendly!' : 'This car runs on fuel.');
}

engineCheck(car);

/* Task 9
Create a `movies` array where each movie is an object with properties for `title`, `director`, and `rating`.
Write a loop that logs all movie titles with a rating higher than 8.
*/

// Your code here

const movies = [
  { title: 'Alien', director: 'Ridley Scott', rating: 8 },
  { title: 'Matrix', director: 'Wachowskis', rating: 7 },
  { title: 'The Shawshank Redemption', director: 'Frank Darabont', rating: 9 }
];

const checkRating = () => {
  movies.forEach(movie => {
    if (movie.rating > 8) {
      console.log(movie.title);
    }
  });
};

checkRating();

/* Task 10
Write a function `findOldestCar` that takes an array of car objects and returns the car with the earliest `year`.
*/

// Your code here

function findOldestCar() {
  const cars = [
    { brand: 'BMW', year: 1999 },
    { brand: 'Volkswagen', year: 2001 },
    { brand: 'Volvo', year: 2010 }
  ];

  const oldest = cars.reduce((a, b) => (a.year < b.year ? a : b));
  console.log(oldest.brand);
}

findOldestCar();

/* Task 11
Define a `userProfiles` array containing objects representing users.
Each user should have a `username`, `email`, and `isAdmin` property.
Write a function that filters and returns only the users who are administrators.
*/

// Your code here
const users = [
  { username: 'cat', email: 'cat@gmail.com', isAdmin: true },
  { username: 'dog', email: 'dog@gmail.com', isAdmin: false },
  { username: 'bird', email: 'bird@gmail.com', isAdmin: false }
];

function showAdmins() {
  const admins = users.filter(user => user.isAdmin).map(user => user.username);
  console.log(admins.join(','));
}

showAdmins();

/* Task 12
Define an array named `orders`, where each order contains `orderId`, `customerName`, `totalAmount`, and `status` (either "pending" or "completed").
Write a function that returns only the completed orders.
*/

// Your code here

const orders = [
  { orderId: 38, customerName: 'Tom', totalAmount: 1, status: 'pending' },
  { orderId: 39, customerName: 'Alice', totalAmount: 2, status: 'completed' },
  { orderId: 40, customerName: 'Lea', totalAmount: 1, status: 'completed' }
];

const orderCheck = () => {
  orders.forEach(({ orderId, status }) => {
    if (status === 'completed') console.log(orderId);
  });
};

orderCheck();

/* Task 13
Create an object named `smartphone` with properties for `brand`, `model`, `batteryLife`, and `is5GEnabled`.
Write a function that logs `"This phone supports 5G!"` if `is5GEnabled` is `true`, otherwise logs `"This phone does not support 5G."`
*/

// Your code here

const phone = {
  brand: 'Nokia',
  model: '1100',
  batteryLife: 'infinite',
  is5GEnabled: false
};

const check5G = phone => {
  console.log(
    phone.is5GEnabled ? 'This phone supports 5G!' : 'This phone does not support 5G.'
  );
};

check5G(phone);

/* Task 14
Define an object named `fox` with properties `name`, `age`, and `habitat`.
Write a function that logs `"This fox is young"` if its age is under 3, `"This fox is an adult"` if 3 or older.
*/

// Your code here

const fox = {
  name: 'Lilith',
  age: 5,
  habitat: 'forest'
};

function ageCheck() {
  const message = fox.age < 3 ? "This fox is young" : "This fox is an adult";
  console.log(message);
}

ageCheck();

/* Task 15
Define an array named `employees`, where each employee has `name`, `position`, and `salary`.
Write a function that calculates the total salary of all employees in the company.
*/

// Your code here


const emploees = [
    {
        name: 'Anna',
        position: 'manager',
        salary: 2000
    },
    {
        name: 'John',
        position: 'accountant',
        salary: 2200 
    },
    {
        name: 'Lisa',
        position: 'CEO',
        salary: 4000
    }
];

function salaryCheck () {
    let sum = 0;
   emploees.forEach(sal => {
    sum += sal.salary;
   })
    console.log(sum);
}
salaryCheck();