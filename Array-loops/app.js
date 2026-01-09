// const fruits = [
//   "Apple",
//   "Banana",
//   "Orange",
//   "Mango",
//   "Pineapple",
//   "Grapes",
//   "Strawberry",
//   "Watermelon",
//   "Papaya",
//   "Kiwi"
// ];

//                   ForEach

// const faro  = document.querySelector("#faro")
// fruits.forEach( (a , khas )=> {
// console.log(a , khas  )
// faro.innerHTML +=`<li> ${a} =! ${khas} </li>`
    
// })

// let allitems = fruits.forEach((items) => {
//     // console.log(items);
//     return items
// })
// console.log("heelo For each loop ===>", allitems);

//           MAP

// let newloop = fruits.map((items , index) => {
//     console.log(items , index);
    
//     return items +  " updated"
// })
// console.log(newloop , )

// let arrLoop = fruits.map((item , index) => {
//     console.log(item , index);
//     return item + " updated"
// })

// console.log(arrLoop);

//         FILTER 

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filteritems = numbers.filter(item => {
//     return item < 7 && item > 2 
// })
// console.log(filteritems);




// const total = numbers.reduce((acc , cval) => acc + cval ,0)
// console.log(total);

    

// chaining

// const chaining = numbers.map((item) => item + 10 )
// .filter((item) => item > 15)
// .map((item) => item - 10)
// .reduce((acc , cval) => acc + cval)
// console.log(chaining);

//         set timeout
// let timeout = setTimeout(() => {
//     console.log("one SEcond");
    
// } , 2000)


 //              Set interval

//  let num = 0 ;
//  let count = setInterval(() => {
//     num +=1
// console.log(num);
// faro.innerHTML += `ok ===>${num} `


// },1000);









//       PROMISES'

const newpromise = new Promise((resolve , reject) =>  {
  let pizzaIsReady = true
  if(pizzaIsReady){
    console.log("all ok");
  }else(console.log("we are sorry"))
})
    



const cHECKAGE = new Promise((resolve , reject) => {
  let age = 19;
  if(age <= 18){
    console.log("You cant wote");
  }else{console.log("Which Party Do you want to Vote.");
}
})
.then(resolve => {
  console.log("completed");
  
})
.catch((reject) => {
  console.error("We are busy :");
  
})