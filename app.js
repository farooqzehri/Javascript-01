// let userinfo = {
//     name : "farooq",
//     email : "farooqahmedbaloch55@gmail.com",
//     age : 22,
//     city : "quetta",
//     greetuser: function (){
//         return `hello, ${this.firstname} ${this.lastname}`;
        
//     }
// }
// delete userinfo.name;
// userinfo.firstname = "muhammad";
// userinfo.lastname = "farooq";
// delete userinfo.city;
// userinfo.address = "quetta, balochistan, pakistan";
// console.log(userinfo.greetuser());
// console.log(userinfo);

const text = document.querySelector("#text");
const email = document.querySelector("#email");
const age = document.querySelector("#age")
const city = document.querySelector("#city")

function submit(){
    const obj = {
        name : text.value,
        email: email.value,
        age: age.value,
        city: city.value,
    }
    console.log(obj);  
}

