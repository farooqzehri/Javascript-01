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
const select = document.querySelector("#select");
const cont = document.querySelector("#container");
const discr = document.querySelector("#input2");
const total = document.querySelector("#total");

let allexpense = [];
let numbers = -1;

// Render all expenses
function renderexpense(){
    cont.innerHTML = '';
    for(let i = 0 ; i < allexpense.length ; i++){
        cont.innerHTML += `<div id="card">
            <h1>Category: ${allexpense[i].Catogary}</h1>
            <h2>Expense: $${allexpense[i].amount}</h2>
            <h2>Description: ${allexpense[i].remarks}</h2>
            <h3>Date: ${allexpense[i].date}</h3>
            <button onclick="editeExpense(${i})">Edit</button>
            <button onclick="deleteExpense(${i})">Delete</button>
        </div>`;
    }
}

// Get current date in format: 21-Jan-2026
function getFormattedDate() {
    const date = new Date();
    const day = date.getDate();
    const year = date.getFullYear();

    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const month = months[date.getMonth()];
    return `${day}-${month}-${year}`;
}

// Add or update expense
function addExpense(){
    const amount = num.value;
    const Catogary = select.value;
    const remarks = discr.value;

    if(!amount || Catogary === 'none' || !remarks){
        alert("Please fill all fields!");
        return;
    }

    const allobject = {
        amount,
        Catogary,
        remarks,
        date: getFormattedDate()
    };

    if(numbers === -1){
        allexpense.push(allobject);
    } else {
        allexpense[numbers] = allobject;
        numbers = -1;
    }

    // Clear inputs
    num.value = '';
    select.value = 'none';
    discr.value = '';

    renderexpense();
    calculateTotal();
}

// Delete expense
function deleteExpense(index){
    allexpense.splice(index, 1);
    renderexpense();
    calculateTotal();
}

// Edit expense
function editeExpense(index){
    num.value = allexpense[index].amount;
    select.value = allexpense[index].Catogary;
    discr.value = allexpense[index].remarks;
    numbers = index;
}

// Calculate total
function calculateTotal(){
    let nums = 0;
    for(let i = 0; i < allexpense.length; i++){
        nums += Number(allexpense[i].amount);
    }
    total.innerHTML = `Total is: $${nums}`;
}
