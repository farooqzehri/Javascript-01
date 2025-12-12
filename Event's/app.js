// const img = document.querySelector("#img")
// const head = document.querySelector("h1")

// img.addEventListener("mouseout" , function (){
//     img.src = "./bulb-off.jpg"
//     head.innerHTML = "OFF"
// })

// img.addEventListener("mouseover" , function (){
//     img.src = "./bulb-on.avif"
//     head.innerHTML = "Onn"

// })


// const body = document.querySelector("#body")
// const btn = document.querySelector("#btn")
// btn.addEventListener("click" , function (){
//    body.style.backgroundColor = 'red'
// })

// const email = document.querySelector("#email");
// email.addEventListener("input" , function (){
//     console.log("input ");
    
// })
const email = document.querySelector("#email");
const password = document.querySelector("#password");



email.addEventListener("change" , function (){
    console.log("change ");     
})
password.addEventListener("change" , function (){
    console.log("change ");     
})
const btn = document.querySelector("#btn")  
btn.addEventListener("click" , function (e){
    e.preventDefault();
    console.log("clicked");
})



