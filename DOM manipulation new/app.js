// by ID
const para = document.getElementById("head1")
let paraee = "FAROOQ"
para.innerHTML = "sangat"
console.log(`hello my name is ${paraee}`);



const newpara = document.createElement('h1')
newpara.textContent = "hello shaka"
document.body.appendChild(newpara)


const btn = document.querySelector(".btn")

btn.addEventListener('click' , () => {
    alert("Button Clicked")
    para.textContent = "you cliked the button"
    console.log("button cliked");
    
})

const btn2 = document.querySelector("#btn2")

btn2.addEventListener('click' , () => {
    const newhead = document.createElement('h1')
    newhead.textContent = "New Adding added"
    newhead.style.backgroundColor = "green"
    document.body.appendChild(newhead)
     newhead.style.color = 'yellow'
    newhead.style.background = 'teal'
    newhead.style.padding = '50px'
    newhead.style.borderRadius = '12px 25px 30px 0px'
})


function newfunction() {
    const newdiv = document.createElement('div')
    newdiv.textContent = ` HELLO MY NAME IS FAROOQ `
    document.body.appendChild(newdiv)
    newdiv.style.color = 'yellow'
    newdiv.style.background = 'teal'
    newdiv.style.padding = '50px'
    newdiv.style.borderRadius = '12px 25px 30px 0px'
       

}