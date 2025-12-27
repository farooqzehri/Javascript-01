const input = document.querySelector("#input");
const select = document.querySelector("#select");
const text = document.querySelector("#text");
const ul = document.querySelector("#ul");
const totalAmount = document.querySelector("#totalAmount");

let allExpense = [];
let editIndex = -1;

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


function renderItems() {
    ul.innerHTML = "";

    allExpense.forEach((expense, index) => {
        ul.innerHTML += `
        <li class="expense-item">
            <div class="left">
                <span class="category">${expense.category}</span>
                <span class="remark">${expense.remark}</span>
                <span class="date">${expense.date}</span>
            </div>
            <div class="right">
                <span class="amount">$${expense.amount}</span>
                <button class="edit" onclick="editItem(${index})">Edit</button>
                <button class="delete" onclick="deleteItem(${index})">Delete</button>
            </div>
        </li>
        `;
    });

    calculateTotal();
}


function additems() {
    const amount = input.value;
    const category = select.value;
    const remark = text.value;

    const expenseObj = {
        amount,
        category,
        remark,
        date: getFormattedDate()
    };

    if (editIndex === -1) {
        allExpense.push(expenseObj);
    } else {
        allExpense[editIndex] = expenseObj;
        editIndex = -1;
    }

    input.value = "";
    text.value = "";

    renderItems();
}


function deleteItem(index) {
    allExpense.splice(index, 1);
    renderItems();
}


function editItem(index) {
    const expense = allExpense[index];

    input.value = expense.amount;
    select.value = expense.category;
    text.value = expense.remark;

    editIndex = index;
}


function calculateTotal() {
    let total = 0;
    allExpense.forEach(exp => total += Number(exp.amount));
    totalAmount.innerHTML = `$${total}`;
}
