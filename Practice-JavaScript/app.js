const input = document.querySelector("#input");
const btn = document.querySelector("#btn")
const div = document.querySelector("#div")

let alltodo = []
function rendertodo(){
    div.innerHTML = "";
    for(let i = 0; i < alltodo.length; i++){
    div.innerHTML += `<h1>${alltodo[i]}</h1>`
}}

function addtodo(){
    alltodo.push(input.value)
    rendertodo()
    input.value = ""
}