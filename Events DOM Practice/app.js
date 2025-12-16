// 1. Click to Change Background
// When a button is clicked, change the background color of the entire page to a random
// color.

// btn.addEventListener("click" , function (){
//     body.style.backgroundColor = "black"    
//     body.style.color = "white"
// })

// 2. Toggle Light Mode / Dark Mode
// Add a button that toggles between light and dark themes using class changes.


// btn.addEventListener("click", function () {

//     const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

//     body.style.backgroundColor = randomColor;

//     body.style.color = "white";
//     console.log(randomColor);

// });
// const body =document.querySelector("body");
// const btn =document.querySelector("#btn");

// const body = document.querySelector("body");
// const btn = document.querySelector("#btn");
// btn.addEventListener("click" , function (){
//   const randomC = "#" + Math.floor(Math.random() * 16777215).toString(16)
//     const changecolor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//         body.style.backgroundColor = changecolor
//         body.style.color = randomC
//     console.log(randomC);
//  console.log(changecolor);


//   body.style.color = "white"
//   console.log(changecolor);



// })


// 3. Hide Element on Click
// When a specific element is clicked, hide it from view using style.display = 'none'.

// const body = document.querySelector("body");
// const btn = document.querySelector("#btn");
// const image = document.getElementById("img")
// btn.addEventListener("click" , function (){
//     image.style.display =  'none'
// })




// 1. Simple Counter
// Create a simple counter with "Increase", "Decrease", buttons that update
// a displayed number accordingly.
// const number = document.querySelector("#number")
// const plus = document.querySelector("#btn1")
// const minus = document.querySelector("#btn2")
// const reset = document.querySelector("#reset")

//  let num = 0;
//  plus.addEventListener("click" , function () {
//     num++;
//     number.textContent = num
//  })
//   minus.addEventListener("click" , function () {
//     num--;
//     number.textContent = num
//  })

//  reset.addEventListener("click" , function (){
//     number.textContent = '0'
//     num = 0
//  })


//  2. Toggle Light Mode / Dark Mode
// Add a button that toggles between light and dark themes using class changes.
// const body = document.querySelector("#body");
// const btn = document.querySelector("#btn");
// btn.addEventListener("click" , function (){
//     body.classList.toggle("dark-mode")
// })
// 3. Image Carousel
// const toggleBtn = document.getElementById("theme-toggle");

// toggleBtn.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
//   document.body.classList.toggle("light-mode");
//   document.body.style.backgroundColor = document.body.classList.contains("dark-mode") ? "#000000ff" : "#fff";
//   document.body.style.color = document.body.classList.contains("dark-mode") ? "#ffffff" : "#000000";
// });


// toggleBtn.addEventListener("click" , () => {
//   document.body.classList.toggle("dark-mode");
//   document.body.style.backgroundColor = "black"
// } )



// 5. Disable Button After Click 
// Create a button that disables itself after being clicked once.

// const btn = document.querySelector("#hide");
// btn.addEventListener("click" , () => {
//    btn.style.display = "none"
// })




// 6. Live Character Count 
// Display how many characters have been typed into a textarea in real time. 


// const inpot = document.getElementById("input");
// const paragraph = document.getElementById("paragraph");

// inpot.addEventListener("input", () => {
//   paragraph.textContent = inpot.value.length;
// });

// 7. Password Strength Checker 
// Show strength feedback ("Weak", "Strong") as the user types a password.

// const pwd = document.getElementById("password");
// const msg = document.getElementById("msg");

// pwd.addEventListener("keyup", function () {
//   const pass = pwd.value;

//   msg.className = "";
//   if (pass.length === 0) {
//     msg.textContent = "";
//   }
//   else if (pass.length < 4) {
//     msg.textContent = "Weak Password";
//     msg.classList.add("weak");
//   }
//   else if (pass.length >= 4 && pass.length < 8) {
//     msg.textContent = "Medium Password";
//     msg.classList.add("medium");
//   }
//   else {
//     msg.textContent = "Strong Password";
//     msg.classList.add("strong");
//   }
// });

// . Enter to Submit 
// When the user presses Enter inside an input field, submit the form (or show an alert). 

// const input = document.querySelector("#input");

// input.addEventListener("keyup", function(e){
//   if(e.key === "Enter"){
//     e.preventDefault();
//     alert("Submitted: " + input.value);
//   }
// });

// 9. Auto Uppercase Input 
// As the user types in a text field, convert the characters to uppercase live. 


// const input = document.querySelector("#input")

// input.addEventListener("input" , function (){
//    this.value = this.value.toUpperCase()
// })




// const form = document.getElementById("myForm");
// const input = document.getElementById("textInput");
// const error = document.getElementById("error");

// // Banned words list
// const bannedWords = ["spam", "test", "fake", "scam"];

// form.addEventListener("submit", function (e) {
//   const text = input.value.toLowerCase();

//   // Check for forbidden words
//   for (let word of bannedWords) {
//     if (text.includes(word)) {
//       e.preventDefault(); // Stop form submission
//       error.textContent = `Forbidden word found: "${word}"`;
//       return;
//     }
//   }

//   error.textContent = "";
//   alert("Form submitted successfully!");
// });




// 1. Dropdown Dynamic Update 
// When a country is selected in one dropdown, dynamically populate a second dropdown 
// with its cities. 

// const country = document.getElementById("country");
// const city = document.getElementById("city");

// country.addEventListener("change", function () {
//   const selected = country.value;

//   city.innerHTML = ""; // clear old cities

//   if (selected === "pakistan") {
//     city.innerHTML = `
//       <option value="">Select City</option>
//       <option>Karachi</option>
//       <option>Lahore</option>
//       <option>Islamabad</option>
//     `;
//   }

//   if (selected === "india") {
//     city.innerHTML = `
//       <option value="">Select City</option>
//       <option>Mumbai</option>
//       <option>Delhi</option>
//       <option>Bangalore</option>
//     `;
//   }
// });

// const country = document.getElementById("country");
// const city = document.getElementById("city");

// country.addEventListener("change" , () =>{
//   const selected = country.value;

//   if(selected === "pakistan"){
//     city.innerHTML = `
//     <option value=""> Select City </option>
//     <option>Quetta</option>
//     <option>Karachi</option>
//     <option>khuzdar</option>
//     `;
//   }

//   if(selected === "india"){
//     city.innerHTML = `
//     <option value=""> Select city </option>
//     <option>Mumbai</option>
//     <option>Delhi</option>
//     <option>Rajistan</option>`
//   }
// })


// const country = document.querySelector("#country");
// const city = document.querySelector("#city")

// country.addEventListener("change" , () =>{
//   const selected = country.value;
//    if(selected === "pakistan"){
//     city.innerHTML = `
//     <option value="">Select Country</option>
//     <option>Karachi</option> 
//     <option>Quetta</option> 
//     <option>Gawader</option> `
//     if(city === "Quetta"){
//       const area = document.createElement("select")
//       area.innerHTML = `
//       <option>Select Area</option>
//       <option>brewery</option>
//       <option>Jinnah Town</option>
//       <option>Fatima Jinnah</option>
//       `
//       document.body.appendChild(area)
//     }
//    }
// })

// const form = document.querySelector("#myForm");
// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const nameError = document.querySelector("#nameError");
// const emailError = document.querySelector("#emailError");
// const success = document.querySelector("#success");

// form.addEventListener("submit", function(e){
//     e.preventDefault();

//     let valid = true;

//     if(nameInput.value.trim() === ""){
//         nameError.textContent = "Name required";
//         valid = false;
//     } else {
//         nameError.textContent = "";
//     }

//     if(emailInput.value.indexOf("@") === -1){
//         emailError.textContent = "Enter valid email";
//         valid = false;
//     } else {
//         emailError.textContent = "";
//     }

//     if(valid){
//         success.textContent = "Form submitted successfully!";
//     } else {
//         success.textContent = "";
//     }
// });


// const colorpicker = document.querySelector("#colorPicker")
// const colorpicker2 = document.querySelector("#colorPicker2")
// const preview = document.querySelector("#preview")

// colorpicker.addEventListener("input" , function (){
//   preview.style.backgroundColor = colorpicker.value
//   document.body.style.color = colorpicker.value
// })
// colorpicker2.addEventListener("input" , function (){
//   document.body.style.backgroundColor = colorpicker2.value

// })




const thumb = document.querySelector("#thumb");
const bigImage = document.querySelector("#bigImage");

thumb.addEventListener("mouseover", function(){
    bigImage.src = thumb.src; 
    bigImage.style.display = "block";
});

thumb.addEventListener("mouseout", function(){
    bigImage.style.display = "none";
});
