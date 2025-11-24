// // 1. Print only the names of all students.

// const names = document.querySelector("#names")
// const students = [
// { name: "Aman", age: 20 },
// { name: "Sara", age: 22 },
// { name: "Ravi", age: 19 },
// { name: "Nisha", age: 21 },
// { name: "Kunal", age: 23 },
// { name: "Meera", age: 20 },
// { name: "Sahil", age: 18 },
// { name: "Tina", age: 22 },
// { name: "Arjun", age: 19 },
// { name: "Kavya", age: 21 }
// ];
// for (let i = 0 ; i < students.length; i++){
//     console.log(students[i].name);
//     names.innerHTML += `<li>${students[i].name}</li>`
// }     ///        ok




// 2. Calculate the total price of all products.
// const products = [
// { title: "Laptop", price: 45000 },
// { title: "Mouse", price: 800 },
// { title: "Keyboard", price: 1200 },
// { title: "Monitor", price: 9000 },
// { title: "USB Cable", price: 300 },
// { title: "Headphones", price: 1500 },
// { title: "Charger", price: 700 },
// { title: "Webcam", price: 2500 },
// { title: "Mic", price: 2800 },
// { title: "Speaker", price: 3200 }
// ];
// let total = 0;
// for (let i = 0 ; i < products.length ; i++){
//     total += products[i].price
// }
// console.log("the total code is: " + total); // working fine


// 3. Print names of employees whose salary is above
// 50,000.
// const employees = [
// { name: "John", salary: 55000 },
// { name: "Maya", salary: 48000 },
// { name: "Karan", salary: 65000 },
// { name: "Reena", salary: 70000 },
// { name: "Dev", salary: 52000 },
// { name: "Hina", salary: 45000 },
// { name: "Vishal", salary: 75000 },
// { name: "Rita", salary: 35000 },
// { name: "Amit", salary: 90000 },
// { name: "Sunil", salary: 60000 }
// ];

// for (let i = 0 ; i < employees.length; i++){
//     if (employees[i].salary >= 50000){
//         console.log(employees[i].salary);
        
        
//     }
// }////                  working fine

// 4. Count how many books belong to category "fiction".
// const books = [
// { title: "Book A", category: "fiction" },
// { title: "Book B", category: "science" },
// { title: "Book C", category: "fiction" },
// { title: "Book D", category: "history" },
// { title: "Book E", category: "fiction" },
// { title: "Book F", category: "math" },
// { title: "Book G", category: "fiction" },
// { title: "Book H", category: "science" },
// { title: "Book I", category: "fiction" },
// { title: "Book J", category: "novel" }
// ];


// for (let i = 0; i < books.length; i++){
//     if (books[i].category === "fiction"){
//         console.log(books[i]);
        
//     }
// } /// working clear


// 5. Create a new array of emails from users.
// const users = [
// { name: "Ali", email: "ali@gmail.com" },
// { name: "Rita", email: "rita@gmail.com" },
// { name: "Dev", email: "dev@yahoo.com" },
// { name: "Meera", email: "meera@gmail.com" },
// { name: "Raj", email: "raj@outlook.com" },

// { name: "Tina", email: "tina@gmail.com" },
// { name: "Karan", email: "karan@gmail.com" },
// { name: "Simran", email: "simran@yahoo.com" },
// { name: "Pooja", email: "pooja@gmail.com" },
// { name: "Vikas", email: "vikas@gmail.com" }
// ];
// let arr = [];
// for(let i = 0 ; i < users.length; i++){
//     arr.push(users[i].email)
//     console.log(users[i].email);
    
// }
// console.log(arr); // working fine


// 6. Find the order with the highest amount.

// const orders = [
//     { id: 1, amount: 1500 },
//     { id: 2, amount: 700 },
//     { id: 3, amount: 2300 },
//     { id: 4, amount: 5000 },
//     { id: 5, amount: 3400 },
//     { id: 6, amount: 280 },
//     { id: 7, amount: 1200 },
//     { id: 8, amount: 15000 },
//     { id: 9, amount: 2500 },
//     { id: 10, amount: 900 }
// ];
// let highamount = orders[0];
// for(let i = 0 ; i < orders.length; i++){
//     if(orders[i].amount > highamount.amount){
//  highamount = orders[i]
//     }
// }
// console.log(highamount);




// 7. Print car brands manufactured after 2015.
// const result = document.querySelector("#result")
// const cars = [
// { brand: "BMW", year: 2018 },
// { brand: "Toyota", year: 2012 },
// { brand: "Audi", year: 2020 },
// { brand: "Honda", year: 2016 },
// { brand: "Ford", year: 2014 },
// { brand: "Kia", year: 2019 },
// { brand: "Tesla", year: 2021 },
// { brand: "Hyundai", year: 2017 },
// { brand: "Jeep", year: 2013 },
// { brand: "Volvo", year: 2022 }
// ];

// for (let i = 0 ; i < cars.length; i++){
//     if(cars[i].year >= 2015){
//         console.log(cars[i].year);
//         result.innerHTML += `<li>${cars[i].brand} -- ${cars[i].year}</li>`
        
//     }
// }       working fine


// 8. Create a new array of movies with rating > 8.

// const movies = [
// { name: "Inception", rating: 9 },
// { name: "Hero", rating: 6 },
// { name: "Interstellar", rating: 8.5 },
// { name: "Dune", rating: 8.2 },
// { name: "Avatar", rating: 7 },
// { name: "Joker", rating: 8.4 },
// { name: "Gravity", rating: 7.8 },

// { name: "Tenet", rating: 7.5 },
// { name: "Soul", rating: 8.3 },
// { name: "Wall-E", rating: 8.4 }
// ];
// let array = [];
// for (let i = 0 ; i < movies.length ; i++){
//     if(movies[i].rating >= 8){
//         // console.log(movies[i].rating);
//     array.push(movies[i])
        
//     }

// }
// console.log(array);


// 9. Calculate the average score of players.

// const players = [
// { name: "Rohit", score: 50 },
// { name: "Virat", score: 80 },
// { name: "Dhoni", score: 70 },
// { name: "Hardik", score: 60 },
// { name: "Gill", score: 55 },
// { name: "Surya", score: 75 },
// { name: "Iyer", score: 65 },
// { name: "Pant", score: 58 },
// { name: "Rahul", score: 72 },
// { name: "Bumrah", score: 40 }
// ];
// let totalScore = 0;
// for(let i = 0 ; i < players.length; i++){
//     // console.log(players[i]);
//     totalScore += players[i].score
    
// }
// console.log("avarge score is ",totalScore / players.length); // the avarege score is 62.5



// 10. Count how many tasks are completed.
// const tasks = [

// { task: "Cleaning", completed: true },
// { task: "Shopping", completed: false },
// { task: "Coding", completed: true },
// { task: "Reading", completed: true },
// { task: "Gym", completed: false },
// { task: "Cooking", completed: true },
// { task: "Study", completed: false },
// { task: "Laundry", completed: true },
// { task: "Meditation", completed: false },
// { task: "Running", completed: true }
// ];
// let count = 0
// for(let i = 0 ; i < tasks.length ; i++){
//     if(tasks[i].completed === true){
//         count++;
//     }
// }
// console.log("the completed task=", count);

// 11. Print the population of the city with the smallest
// population.

// const cities = [
// { name: "Delhi", population: 19000000 },
// { name: "Pune", population: 3100000 },
// { name: "Jaipur", population: 4000000 },
// { name: "Indore", population: 2200000 },
// { name: "Nagpur", population: 2400000 },
// { name: "Surat", population: 6000000 },
// { name: "Kanpur", population: 3000000 },
// { name: "Lucknow", population: 3500000 },

// { name: "Patna", population: 2500000 },
// { name: "Bhopal", population: 2000000 }
// ];
// const result = document.querySelector("#head")
// let smallestPolpulation = cities[0].population;
// for(let i = 0 ; i < cities.length; i++){
// if(cities[i].population < smallestPolpulation){
//     smallestPolpulation = cities[i].population
// }
// }
// console.log(smallestPolpulation);
// result.innerHTML += smallestPolpulation 

// 12. Calculate the total inventory value (quantity × price).
// const items = [
// { item: "Pen", quantity: 20, price: 10 },
// { item: "Notebook", quantity: 5, price: 50 },
// { item: "Bag", quantity: 2, price: 300 },
// { item: "Bottle", quantity: 10, price: 40 },
// { item: "Pencil", quantity: 30, price: 5 },
// { item: "Marker", quantity: 15, price: 15 },
// { item: "Eraser", quantity: 25, price: 3 },
// { item: "Sharpener", quantity: 18, price: 6 },
// { item: "Calculator", quantity: 4, price: 200 },
// { item: "File", quantity: 12, price: 20 }
// ];
// let result = 0;
// for(let i = 0 ; i < items.length; i++){
//   let sum =   items[i].quantity * items[i].price
//             result += sum;
//     // console.log(sum);


    
// }
// console.log(result);   //   total is 3048  
//      working fine


// 13. Print students aged between 18 and 25.
// const studentsData = [
// { name: "Arun", age: 17 },
// { name: "Priya", age: 21 },
// { name: "Neha", age: 25 },
// { name: "Suresh", age: 19 },
// { name: "Tara", age: 23 },
// { name: "Kiran", age: 26 },
// { name: "Nitin", age: 22 },
// { name: "Monika", age: 24 },
// { name: "Vivek", age: 18 },
// { name: "Harsh", age: 27 }
// ];
// const studentslist = document.querySelector("#list")
// for(let i = 0 ; i < studentsData.length ; i++){
//     if(studentsData[i].age >= 18 && studentsData[i].age <= 25){
//         console.log(studentsData[i]);
//         studentslist.innerHTML += `<li>${studentsData[i].name +"---"+studentsData[i].age}</li>`
//     }
// }
//   working clear




// 14. Create a new array of only "credit" transactions.
// const transactions = [
// { type: "credit", amount: 2000 },
// { type: "debit", amount: 500 },
// { type: "credit", amount: 1500 },
// { type: "credit", amount: 4500 },
// { type: "debit", amount: 800 },
// { type: "credit", amount: 700 },
// { type: "credit", amount: 3200 },
// { type: "debit", amount: 400 },
// { type: "credit", amount: 2500 },
// { type: "debit", amount: 600 }
// ];
// let creditarray = [];
// for (let i = 0 ; i < transactions.length; i++ ){
//     if(transactions[i].type === "credit"){
//         // console.log(transactions[i]);
//         creditarray.push(transactions[i])
//     }

// }
// console.log(creditarray);


// 15. Find the course with the longest name.
// const courses = [
// { title: "Math" },
// { title: "Computer Science" },
// { title: "Web Development" },
// { title: "Electrical Engineering" },
// { title: "Data Structures" },
// { title: "Artificial Intelligence" },
// { title: "Machine Learning" },
// { title: "Cloud Computing" },
// { title: "Cyber Security" },
// { title: "Human Computer Interaction" }
// ];
// let bigesttitle = 0;
// let index = 0;
// for(let i = 0 ; i < courses.length; i++){
// // console.log(courses[i].title.length);
// if(bigesttitle < courses[i].title.length){
//     bigesttitle = courses[i].title.length
//     index = i
// }


// }
// // console.log(bigesttitle);
// console.log(courses[index])

