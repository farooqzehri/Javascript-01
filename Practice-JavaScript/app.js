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
const total = document.querySelector("#total")

let allexpense = []
let numbers = -1

function renderexpense(){
    cont.innerHTML = ''
    for(let i = 0 ; i < allexpense.length ; i++){
    cont.innerHTML += `<div id="card">
    <h1>Catogary: ${select.value}</h1>
    <h2>Expense: $${num.value}</h2>
    <h2>Discription: ${discr.value}</h2>
    <button onclick="editeExpense(${i})">Edit</button>
    <button onclick="deleteExpense(${i})">Delete</button>
    </div>
    `
}}
function addExpense(){
     
    const amount = num.value;
    const Catogary = select.value;
    const remarks = discr.value;
    const allobject = {
        amount,
        Catogary,
        remarks
        
    };
    if(numbers === -1){
    allexpense.push(allobject)
}else{
        allexpense[numbers] = allobject;
        numbers = -1;
    }
    renderexpense()
    allobject.value = ''
    calculateTotal()
}


function deleteExpense(index){
    allexpense.splice(index , 1)
        renderexpense()
}
function editeExpense(index){
    num.value = allexpense[index].amount
    select.value = allexpense[index].Catogary
    discr.value = allexpense[index].remarks
    numbers = index
    renderexpense()
}
function calculateTotal(){
    let num = 0 ;
    for(let i = 0 ; i < allexpense.length ; i++){
        num += Number(allexpense[i].amount)
        total.innerHTML = `Total is: $${num}`
    }
}