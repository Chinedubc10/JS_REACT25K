/* Task 1
Create a constructor function `User` that takes `username` and `email` as parameters.
It should create an object with these properties and a method `showInfo` that logs user details.
Instantiate a new user and call `showInfo()`.
*/

// Your code here
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  showInfo() {
    console.log(`${this.username}, ${this.email}`);
  }
}

const userOne = new User('Lea', 'email@gmail.com');
userOne.showInfo();


/* Task 2
Modify Task 1: Use an ES6 `class` instead of a constructor function to define `User`.
Add a method `changeEmail(newEmail)` that updates the user's email.
*/

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  updateEmail(newEmail) {
    this.email = newEmail;
  }
}

const user = new User('Maria', 'maria@gmail.com');
user.updateEmail('marry@gmail.com');
console.log(user);

// Your code here

/* Task 3
Create an object `theme` with properties `name` (light or dark) and `isActive`.
Add a button in HTML. When clicked, toggle the theme between light and dark, updating the `isActive` property.
*/

// Your code here
const theme = {
  name: 'dark',
  isActive: true,
  toggle() {
    this.name = this.name === 'light' ? 'dark' : 'light';
    this.isActive = !this.isActive;
    document.body.style.backgroundColor = this.name === 'dark' ? '#000' : '#fff';
  }
};

document.querySelector('#btn').addEventListener('click', () => {
  theme.toggle();
  console.log(theme);
});

/* Task 4
Create an object `counter` with a `value` property.
Add two buttons in HTML: one to increase `value`, another to decrease it.
Display `value` in an HTML element and update it dynamically when buttons are clicked.
*/

// Your code here

const counter = {
    value: 0
};

const buttonTwo = document.querySelector('#btnTwo');
const buttonThree = document.querySelector('#btnThree');
const valueDisplay = document.querySelector('#valueDisplay');

buttonTwo.addEventListener('click', function () {
    counter.value++;
    valueDisplay.textContent = counter.value;
    console.log(counter.value); 
});
buttonThree.addEventListener('click', function() {
    counter.value--;
    valueDisplay.textContent = counter.value;
    console.log(counter.value);
});

/* Task 5
Create an object `product` with `name`, `price`, and `quantity`.
Add an input field in HTML where the user can enter a quantity to purchase.
Update the `quantity` property and display the total price dynamically.
*/

// Your code here
const product = {
  name: "Dutch babies (It's a dish :) )",
  price: 10,
  quantity: 0
};

const input = document.querySelector('#input');
const output = document.querySelector('#liveOut');

input.addEventListener('input', e => {
  const qty = e.target.value;
  product.quantity = qty;
  output.textContent = qty * product.price;
  console.log(product.quantity);
});

/* Task 6
Define a `Task` constructor that takes `title`, `description`, and `completed`.
Add a button in HTML that, when clicked, adds a new `Task` object to a `tasks` array and displays it on the page.
*/

// Your code here

class Task {
  constructor(title, description, completed) {
    Object.assign(this, { title, description, completed });
  }
}

const tasks = [];

document.querySelector('#btnFour').addEventListener('click', () => {
  const newTask = new Task('English', 'Do your classes', true);
  tasks.push(newTask);
  console.log(tasks);
  document.querySelector('#txtOut').textContent = JSON.stringify(tasks, null, 1);
});

/* Task 7
Create an object `weatherApp` with a method `fetchWeather(city)`.
Use `fetch` to get weather data from an API and display it in an HTML element.
(API: OpenWeather or any free weather API)
*/

// Your code here

const weatherApp = {
  apiKey: '59957c3ac93508bc3ae610a4fee2df0f',

  fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`)
      .then(res => {
        if (!res.ok) throw new Error("City not found");
        return res.json();
      })
      .then(data => this.displayWeather(data))
      .catch(err => console.error("Error:", err));
  },

  displayWeather({ name, main, weather }) {
    const temp = main.temp;
    const desc = weather[0].description;
    document.getElementById('weather').textContent = `Weather in ${name}: ${temp}°C, ${desc}`;
  }
};

weatherApp.fetchWeather("London");

/* Task 8
Create a constructor function `Car` that takes `brand`, `model`, and `year`.
In the constructor, add a method `age()` that calculates the car’s age.
Instantiate a new `Car` and display its age on the webpage.
*/

// Your code here
window.onload = function() {
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.calculateAge = function() {
        const currentYear = new Date().getFullYear();
        return currentYear -this.year;
    }
};
const ageDisplay = document.getElementById('ageDisplay');
const carOne = new Car('Toyota', 'Camry', 2010);
ageDisplay.textContent = carOne.calculateAge();
};

/* Task 9
Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.
*/

// Your code here
const users = [
    {name: 'J.Anderson', score: 20},
    {name: 'K.Miller', score: 25},
    {name: 'M.Vilson', score: 30}
];
const userDisplay = document.querySelector('#userDisplay');
const buttonFive = document.querySelector('#btnFive');
const display = () => {
    userDisplay.textContent = '';
    users.forEach(user => {
        userDisplay.textContent += `${user.name}, with score: ${user.score}, `
    });
};
buttonFive.addEventListener('click', () => {
    users.sort((a, b) => b.score - a.score);
    display();
});
display();
/* Task 10
Create an object `shoppingList` with an array `items`.
Add an input field and button to allow users to add new items to `items` and display the updated list.
*/

// Your code here

const shoppingList = {
    items: []
};

const shoppingListInput = document.querySelector('#shoppingListInput');
const itemList = document.querySelector('#itemList');
const updateButton = document.querySelector('#updateList');

updateButton.addEventListener('click', () => {
    const listText = shoppingListInput.value.trim();
    if (listText) { 
        const list = document.createElement('li');
        list.textContent = listText;
        itemList.appendChild(list);  
        shoppingListInput.value = ''; 
        shoppingList.items.push(listText);
    }
});

/* Task 11
Create an array of `posts` where each post has `title`, `content`, and `likes`.
Add a "Like" button next to each post that increases the `likes` count and updates the display.
*/

// Your code here

const posts = [
  { title: 'Nature', content: 'Animals in Africa', likes: 0 },
  { title: 'Machinery', content: 'Heavy equipment', likes: 0 },
  { title: 'Space', content: 'Andromeda', likes: 0 }
];

const postList = document.getElementById('post-list');

posts.forEach(post => {
  const li = document.createElement('li');
  li.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.content}</p>
    <p class="likes">${post.likes}</p>
    <button>Like!</button>
  `;

  const likeBtn = li.querySelector('button');
  const likeDisplay = li.querySelector('.likes');

  likeBtn.addEventListener('click', () => {
    post.likes++;
    likeDisplay.textContent = post.likes;
  });

  postList.appendChild(li);
});

/* Task 12
Create a constructor function `Employee` with `name`, `position`, and `salary`.
Add a method `increaseSalary(percent)` that increases the salary by a given percentage.
Create an employee and increase their salary dynamically.
*/

// Your code here

function Employee(name, position, salary) {
  this.name = name;
  this.position = position;
  this.salary = salary;
  this.increaseSalary = function(percent) {
    this.salary += (this.salary * percent) / 100;
  };
}

const employee = new Employee('Arnold', 'manager', 1000);
employee.increaseSalary(10);
console.log(employee);

/* Task 13
Create an object `timer` with `seconds` and a method `start()` that counts seconds up.
Display the timer in an HTML element and update it every second.
*/

// Your code here
const timer = {
    seconds: 0,
    start() {
        setInterval(() => {
            this.seconds++;
            document.getElementById('timer').textContent = this.seconds;
        }, 1000);
    }
}
timer.start();

/* Task 14
Create a constructor function `Book` that takes `title`, `author`, and `pages`.
Create a simple book library that allows users to add books via an HTML form and displays them dynamically.
*/

// Your code here

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

const library = [];
const bookList = document.getElementById('book-list');
const addBtn = document.getElementById('add-book');
const [titleInput, authorInput, pagesInput] = [
  document.getElementById('book-title'),
  document.getElementById('book-author'),
  document.getElementById('book-pages')
];

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = pagesInput.value.trim();

  if (title && author && pages) {
    const book = new Book(title, author, pages);
    library.push(book);

    const li = document.createElement('li');
    li.textContent = `${title}, ${author}, ${pages}`;
    bookList.appendChild(li);

    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
  }
});

/* Task 15
Create an object `foxTracker` with a `foxes` array.
Add an input field and button that allows users to add new foxes (with name and location) to the array.
Display the list of foxes dynamically in an HTML element.
*/

// Your code here

const foxTracker = { foxes: [] };

const addFoxBtn = document.getElementById('add-fox');
const nameInput = document.getElementById('fox-name');
const locationInput = document.getElementById('fox-location');
const foxList = document.getElementById('fox-list');

addFoxBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const location = locationInput.value.trim();

  if (name && location) {
    foxTracker.foxes.push({ name, location });

    const listItem = document.createElement('li');
    listItem.textContent = `${name}, ${location}`;
    foxList.appendChild(listItem);
  }
});
