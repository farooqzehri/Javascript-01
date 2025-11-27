// 1. Print only the names of all students.

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
























































































// Chat gpt questions 




// 1. Sirf un employees ko print karo jin ki salary 50,000 se zyada ho.
// const result = document.querySelector("#result")
// const employees = [
//   { name: "Ali", salary: 40000 },
//   { name: "Ahmed", salary: 52000 },
//   { name: "Sara", salary: 75000 },
//   { name: "Uzair", salary: 30000 },
//   { name: "Rida", salary: 90000 }
// ];
// for(let i = 0 ; i < employees.length; i++){
//     if(employees[i].salary > 50000){
//         console.log(employees[i]);
        
//     }
// }




// 2. Ek array me numbers diye hain. Unka total sum print karo.
// const nums = [20, 50, 10, 40, 70];
// let sum = 0;
// for(let i = 0 ; i < nums.length; i++){
//     sum += nums[i]
   
    
// }
// console.log("total is " , sum);



// 1. Ek array diya hai. Us me se even numbers print karo.

// let numbers = [12, 5, 8, 21, 44, 9, 30];

// for(let i = 0 ; i < numbers.length ; i++){
//     if(numbers[i] %2 === 0){
//         console.log(numbers[i]);
        
//     }
// }  // working fine




// 3. Students ke marks diya hain. Jis student ke marks 80 se zyada hain unhe print karo.
// let students = [
//  {name: 'Ali', marks: 75},
//  {name: 'Sara', marks: 85},
//  {name: 'Umar', marks: 90},
//  {name: 'Tina', marks: 60}
// ]
// for(let i = 0 ; i < students.length ; i++){
//     if(students[i].marks >= 80){
//         console.log(students[i]);
        
//     }
// }   // working code



// let orders = [
//  {orderId: 1, status: "delivered"},
//  {orderId: 2, status: "pending"},
//  {orderId: 3, status: "delivered"} ,
//  {orderId: 4, status: "delivered"},
//  {orderId: 5, status: "pending"},
//  {orderId: 6, status: "delivered"} ,
//  {orderId: 7, status: "delivered"},
//  {orderId: 8, status: "pending"},
//  {orderId: 9, status: "delivered"} ,
//  {orderId: 10, status: "delivered"},
//  {orderId: 11, status: "pending"},
//  {orderId: 12, status: "delivered"},
// ]
// for(let i = 0 ; i < orders.length ; i++){
//     if(orders[i].status === "delivered"){
//         console.log(orders[i]);
        
//     }
// }

// let items = [
//  {item: 'Pen', price: 10, qty: 5},
//  {item: 'Book', price: 50, qty: 2}
// ]
// let result =0;
// for(let i = 0 ; i  < items.length ; i++ ){
//   let q =  items[i].price * items[i].qty
// //   let y = items[i].price + items[i].price
//        result += q
    
// }
//     console.log(result);  // result is 150



// Ek array me fruits hain. “Apple” kitni dafa aya hai count karo.

// let fruits = ["Apple", "Banana", "Apple", "Grapes", "Apple"]
// for(let i = 0 ; i < fruits.length ; i++){
//   let f=  fruits[i].replace("Apple" , "seb")
//     console.log(f);
    
// }                  samaj nai araaha


// let players=[
//  {name: "Rohit", score: 70},
//  {name: "Virat", score: 82},
//  {name: "Dhoni", score: 65}
// ]   
// let highestscorer = players[0]
// for(let i = 0 ; i < players.length ; i++){
//     if(players[i].score >= highestscorer.score){
//         // console.log(players[i]);
//         highestscorer =   players[i]
//     }
// }
// console.log(highestscorer);   highest scorer is virat kohli




// 8. Products me se un products ko naya array me store karo jinki price > 1000 hai.
//   let items = [
//    {name: 'Mouse', price: 500},
//  {name: 'Keyboard', price: 1500},
//  {name: 'Speaker', price: 800},
//  {name: 'Monitor', price: 12000}
// ]
// const highprice = []
// for(let i = 0 ; i < items.length ; i++){
//     if( items[i].price >= 1000){
//         console.log(items[i].price , items[i].name);
//         highprice.push(items[i].name,items[i].price)
        
        
//     }
// }
// console.log(highprice);


// 6. Employees ke salaries ka total calculate karo. 
//  let employes = [
//  {name: "A", salary: 30000},
//  {name: "B", salary: 35000},
//  {name: "C", salary: 25000}
// ]
// let result = 0;
// for(let i = 0 ; i < employes.length; i++ ){
//     let k =  result += employes[i].salary ; 
// }
// console.log(result);  // 90000


// 4. Temperature array me se maximum temperature find karo.

// let temperature = [32, 45, 29, 50, 41, 48]
// let  hightemprature = temperature[0];
// for(let i = 0 ; i < temperature.length ; i++){
//     if(temperature[i] > hightemprature){
//        hightemprature = temperature[i]}
     
// }

//      console.log(hightemprature);

//     find old people
// let people = [
//   { name: "Ali", age: 22 },
//   { name: "Sara", age: 19 },
//   { name: "Umar", age: 30 },
//   { name: "Tina", age: 25 },
//   { name: "Raza", age: 28 }
// ];
// let oldname = people[0];

// for(let i = 0 ; i < people.length ; i++){
//     if(
//         people[i].age > oldname.age
//     ){
//             oldname = people[i]
//     }
// }
// console.log(oldname);

    


// which student got high score
// let students = [
//   { name: "Farooq", marks: 75 },
//   { name: "Ali", marks: 92 },
//   { name: "Hira", marks: 88 },
//   { name: "Zain", marks: 60 },
//   { name: "Saad", marks: 95 }
// ];
// let scorer = students[0];
// for(let i = 0 ; i < students.length ; i++){
//     if(students[i].marks > scorer.marks){
//         scorer = students[i]
//     }
// }
// console.log(scorer);

// let products = [
//   { name: "Laptop", price: 90000 },
//   { name: "Mouse", price: 1500 },
//   { name: "Keyboard", price: 2500 },
//   { name: "Monitor", price: 22000 },
//   { name: "USB", price: 800 }
// ];

// let minimumprice = products[0];
// for(let i = 0 ; i < products.length ; i++){
//     if(products[i].price  < minimumprice.price){
//         minimumprice = products[i]
//     }
// }
// console.log(minimumprice);

// find highest grade student

// let students = [
//   { name: "Ali", grade: 88 },
//   { name: "Hina", grade: 92 },
//   { name: "Raza", grade: 75 },
//   { name: "Nimra", grade: 95 },
//   { name: "Sajid", grade: 89 }
// ];
// let topper = students[0];
// for(let i = 0 ; i < students.length ; i++){
//     if(students[i].grade > topper.grade){
//         topper = students[i]
//     }
// }
// console.log(topper);
 


// **Q: Employees ka array diya gaya hai. Sab se zyada salary wale employee ko print karo, lekin sirf un employees me se jo full-time hain.

// let employees = [
//   { name: "Ali", salary: 50000, fullTime: true },
//   { name: "Sara", salary: 60000, fullTime: false },
//   { name: "Umar", salary: 70000, fullTime: true },
//   { name: "Hina", salary: 55000, fullTime: true },
//   { name: "Zain", salary: 65000, fullTime: false }
// ];
// let topemploy = employees[0];
// for(let i = 0 ; i < employees.length ; i++){
//     if(employees[i].salary > topemploy.salary && employees[i].fullTime == true){
//         topemploy = employees[i]
//     }
// }
// console.log(topemploy);


// Yahan se code likho...








































 //      PRACTICE 



// const head = document.querySelector("#heading");
// head.innerHTML = "Hello JavaScript"



// const para = document.querySelector("#message");
// let age = 18;
// if(age >= 18){
//     para.innerHTML = "You are an adult"
// }else{
//     para.innerHTML = "You are a minor"
// }




// const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// for(let i = 0 ; i < fruits.length ; i++){
//     console.log(fruits[i]);
    
// }





// const students = [
//   { name: "Ali", marks: 75 },
//   { name: "Sara", marks: 85 },
//   { name: "Umar", marks: 90 }
// ];
// for(let i = 0 ; i < students.length ; i++){
//     console.log(`${students[i].name} -- ${students[i].marks}` );
    
// }


// const numbers = [10, 15, 20, 25, 30, 33];
// for(let i = 0 ; i < numbers.length ; i++ ){
//     if(numbers[i] % 2 !== 0 ){
//         console.log(numbers[i]);
        
//     }
// }






// const students = [
//   { name: "Ali", marks: 75 },
//   { name: "Sara", marks: 45 },
//   { name: "Umar", marks: 90 },
//   { name: "Hina", marks: 30 },
//   { name: "Raza", marks: 60 }
// ];

// for(let i = 0 ; i < students.length ; i++){
//     if(students[i].marks >= 50){
//         console.log(students[i].name, '--' , students[i].marks);
        
//     }
// }



// const students = [
//   { name: "Ali", marks: 75 },
//   { name: "Sara", marks: 45 },
//   { name: "Umar", marks: 90 },
//   { name: "Hina", marks: 30 },
//   { name: "Raza", marks: 60 }
// ];

// const list = document.querySelector("#passed-students");

// // Yahan se code likho
// for(let i = 0 ; i < students.length ; i++){
//     if(students[i].marks >= 50){
//         list.innerHTML += `<li>${students[i].name} -- ${students[i].marks}</li>`
//     }
// }


// const students = [
//   { name: "Ali", marks: 75 },
//   { name: "Sara", marks: 85 },
//   { name: "Umar", marks: 90 },
//   { name: "Hina", marks: 65 },
//   { name: "Raza", marks: 95 }
// ]
// let topper = students[0]
// for(let i = 0 ;  i < students.length ; i++){
//     if( students[i].marks > topper.marks){
//         topper = students[i]
//     }
// }
// console.log(topper);


// const employees = [
//   { name: "Ali", salary: 50000, fullTime: true },
//   { name: "Sara", salary: 60000, fullTime: false },
//   { name: "Umar", salary: 70000, fullTime: true },
//   { name: "Hina", salary: 55000, fullTime: true },
//   { name: "Zain", salary: 65000, fullTime: false }
// ];
// let bestEmploy = employees[0];
// for(let i = 0 ; i < employees.length ; i++){
//     if(employees[i].salary >= 60000 && employees[i].fullTime === true){
//         console.log(`${employees[i].name} -- ${employees[i].salary}`);
        

//     }
// }





// const employees = [
//   { name: "Ali", salary: 50000, fullTime: true },
//   { name: "Sara", salary: 60000, fullTime: false },
//   { name: "Umar", salary: 70000, fullTime: true },
//   { name: "Hina", salary: 55000, fullTime: true },
//   { name: "Zain", salary: 65000, fullTime: false }
// ];
// let total = 0
// for(let i = 0 ; i < employees.length ; i++){
//     if(employees[i].fullTime === true ){
//     let sum =    employees[i].salary 
//     total += sum
        
//     }
// }
// console.log(total);



// Q11: Show Full-Time Employees with Salary > 60000 in HTML List
// const employees = [
//   { name: "Ali", salary: 50000, fullTime: true },
//   { name: "Sara", salary: 60000, fullTime: false },
//   { name: "Umar", salary: 70000, fullTime: true },
//   { name: "Hina", salary: 55000, fullTime: true },
//   { name: "Zain", salary: 65000, fullTime: false }
// ];

// const list = document.querySelector("#employee-list");

// // Yahan se code likho
// for(let i = 0 ; i < employees.length ; i++){
//     if(employees[i].salary >= 60000 && employees[i].fullTime == true){
//         list.innerHTML += `<li>${employees[i].name} -- ${employees[i].salary}    `
//     }
//     console.log(employees[i]);
    
// }









// const employees = [
//   { name: "Ali", salary: 50000, fullTime: true },
//   { name: "Sara", salary: 60000, fullTime: false },
//   { name: "Umar", salary: 70000, fullTime: true },
//   { name: "Hina", salary: 55000, fullTime: true },
//   { name: "Zain", salary: 65000, fullTime: false }
// ];

// const topper = document.querySelector("#top-employee");
// let rich = employees[0]
// for(let i = 0 ; i < employees.length ; i++){
//     if(employees[i].fullTime == true && employees[i].salary > rich.salary){
//         // console.log(employees[i]);
//         rich = employees[i]
//         topper.innerHTML = `${employees[i].name} -- ${employees[i].salary}`
//     }
// }           //          fine



// const employees = [
//   { name: "Ali", salary: 50000, fullTime: true, yearsWorked: 3 },
//   { name: "Sara", salary: 60000, fullTime: false, yearsWorked: 5 },
//   { name: "Umar", salary: 70000, fullTime: true, yearsWorked: 6 },
//   { name: "Hina", salary: 55000, fullTime: true, yearsWorked: 2 },
//   { name: "Zain", salary: 65000, fullTime: false, yearsWorked: 4 }
// ];
// let bounus = null ;
// const list = document.querySelector("#bonus-list");
// for(let i = 0 ; i < employees.length ; i++){
//     if(employees[i].fullTime === true && employees[i].yearsWorked >= 5){
//         list.innerHTML += `<li>${employees[i].name} --- ${employees[i].salary}</li>`
        
//     }
// }
// for(let i = 0 ; i < employees.length ; i++ ){
//     if(employees[i].salary)
// }

// Task:
// 1. Sirf full-time employees consider karo
// 2. Jo employees 5 saal se zyada kaam kar rahe hain, unko bonus eligible consider karo
// 3. HTML me unka name + salary show karo as <li>




// const employees = [
//   { name: "Ali", salary: 50000, fullTime: true, yearsWorked: 3 },
//   { name: "Sara", salary: 60000, fullTime: false, yearsWorked: 5 },
//   { name: "Umar", salary: 70000, fullTime: true, yearsWorked: 6 },
//   { name: "Hina", salary: 55000, fullTime: true, yearsWorked: 7 },
//   { name: "Zain", salary: 65000, fullTime: false, yearsWorked: 4 }
// ];

// const topBonus = document.querySelector("#top-bonus");

// Task:
// 1. Sirf full-time employees consider karo
// 2. Sirf wo employees jinka yearsWorked >= 5 ho
// 3. Unme se highest salary wala employee find karo
// 4. HTML me show karo: "Top Bonus Employee: Name - Salary"
// let bounus = null
// for(let i = 0 ; i < employees.length ; i++){
//     if(employees[i].fullTime && employees[i].yearsWorked >= 5){
//          bounus = employees[i];
//          break
       
        
//     }
// }
// for(let i = 0 ; i < employees.length ; i++){
//     if(employees[i].fullTime && employees[i].salary > bounus.salary){
//         bounus = employees[i]
    

//     }
    
//         topBonus.innerHTML = `Top Bonus employ is: ${bounus.name} - ${bounus.salary} `

// }
    // console.log(bounus.salary);


//     const employees = [
//   { name: "Ali", salary: 50000, fullTime: true, yearsWorked: 3, department: "HR" },
//   { name: "Sara", salary: 60000, fullTime: false, yearsWorked: 5, department: "Finance" },
//   { name: "Umar", salary: 70000, fullTime: true, yearsWorked: 6, department: "HR" },
//   { name: "Hina", salary: 55000, fullTime: true, yearsWorked: 2, department: "IT" },
//   { name: "Zain", salary: 65000, fullTime: false, yearsWorked: 4, department: "Finance" },
//   { name: "Tina", salary: 80000, fullTime: true, yearsWorked: 7, department: "IT" }
// ];
// const para = document.querySelector("#best-it")

// let richemploy = null
// for(let i = 0 ; i < employees.length ; i++){
//     if(employees[i].fullTime && employees[i].yearsWorked >= 5 && employees[i].department == "IT"){
//         console.log(employees[i]);
//         if(richemploy === null){
//             richemploy = employees[i]
//         }else if (employees[i].salary > richemploy.salary){
//             richemploy = employees[i]
//         }

//     }
    
// }
// para.innerHTML = `Best IT Employee: ${richemploy.name} -- ${richemploy.salary}`