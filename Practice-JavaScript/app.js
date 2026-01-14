const input = document.querySelector("#input");
const btn = document.querySelector("#btn")
const div = document.querySelector("#div")

let alltodo = []
function rendertodo(){
    div.innerHTML = "";
    for(let i = 0; i < alltodo.length; i++){
    div.innerHTML += `<h1>${alltodo[i]}</h1>
    <button onclick="edittodo(${i})">Edit</button>
    <button onclick="deletetodo(${i})">Delete</button>`
}}


function addtodo(){
    alltodo.push(input.value)
    rendertodo()
    input.value = ""
   
   
}
function deletetodo(index){
    alltodo.splice(index , 1)
    rendertodo()
}
function edittodo(index){
    let newvalue = prompt("Enter The New Value")
    alltodo[index] = newvalue
    rendertodo()
}