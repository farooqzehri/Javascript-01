// const input = document.querySelector("#input");
// const btn = document.querySelector("#btn")
// const div = document.querySelector("#div")

// let alltodo = []
// function rendertodo(){
//     div.innerHTML = "";
//     for(let i = 0; i < alltodo.length; i++){
//     div.innerHTML += `<h1>${alltodo[i]}</h1>
//     <button onclick="edittodo(${i})">Edit</button>
//     <button onclick="deletetodo(${i})">Delete</button>`
// }}


// function addtodo(){
//     alltodo.push(input.value)
//     rendertodo()
//     input.value = ""
   
   
// }
// function deletetodo(index){
//     alltodo.splice(index , 1)
//     rendertodo()
// }
// function edittodo(index){
//     let newvalue = prompt("Enter The New Value")
//     alltodo[index] = newvalue
//     rendertodo()
// }






















//             EXPENSE TRACKER

const num = document.querySelector("#input1");
const select = document.querySelector("#select")
const cont = document.querySelector("#container")
const discr = document.querySelector("#input2")

let allexpense = []

function renderexpense(){
    cont.innerHTML = ''
    for(let i = 0 ; i < allexpense.length ; i++){
    cont.innerHTML += `<li>
    <h1>Catogary: ${select.value}</h1>
    <h2>Expense: $${num.value}</h2>
    <h2>Discription: ${discr.value}</h2></li>
    `
}
}
function addExpense(){
    allexpense.push(num.value)
    renderexpense()
}
