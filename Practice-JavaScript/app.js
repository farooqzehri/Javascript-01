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






















// //             EXPENSE TRACKER

// const num = document.querySelector("#input1");
// const select = document.querySelector("#select");
// const cont = document.querySelector("#container");
// const discr = document.querySelector("#input2");
// const total = document.querySelector("#total");

// let allexpense = [];
// let numbers = -1;

// // Render all expenses
// function renderexpense(){
//     cont.innerHTML = '';
//     for(let i = 0 ; i < allexpense.length ; i++){
//         cont.innerHTML += `<div id="card">
//             <h1>Category: ${allexpense[i].Catogary}</h1>
//             <h2>Expense: $${allexpense[i].amount}</h2>
//             <h2>Description: ${allexpense[i].remarks}</h2>
//             <h3>Date: ${allexpense[i].date}</h3>
//             <button onclick="editeExpense(${i})">Edit</button>
//             <button onclick="deleteExpense(${i})">Delete</button>
//         </div>`;
//     }
// }

// // Get current date in format: 21-Jan-2026
// function getFormattedDate() {
//     const date = new Date();
//     const day = date.getDate();
//     const year = date.getFullYear();

//     const months = [
//         "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//         "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
//     ];
//     const month = months[date.getMonth()];
//     return `${day}-${month}-${year}`;
// }

// // Add or update expense
// function addExpense(){
//     const amount = num.value;
//     const Catogary = select.value;
//     const remarks = discr.value;

//     if(!amount || Catogary === 'none' || !remarks){
//         alert("Please fill all fields!");
//         return;
//     }

//     const allobject = {
//         amount,
//         Catogary,
//         remarks,
//         date: getFormattedDate()
//     };

//     if(numbers === -1){
//         allexpense.push(allobject);
//     } else {
//         allexpense[numbers] = allobject;
//         numbers = -1;
//     }

//     // Clear inputs
//     num.value = '';
//     select.value = 'none';
//     discr.value = '';

//     renderexpense();
//     calculateTotal();
// }

// // Delete expense
// function deleteExpense(index){
//     allexpense.splice(index, 1);
//     renderexpense();
//     calculateTotal();
// }

// // Edit expense
// function editeExpense(index){
//     num.value = allexpense[index].amount;
//     select.value = allexpense[index].Catogary;
//     discr.value = allexpense[index].remarks;
//     numbers = index;
// }

// // Calculate total
// function calculateTotal(){
//     let nums = 0;
//     for(let i = 0; i < allexpense.length; i++){
//         nums += Number(allexpense[i].amount);
//     }
//     total.innerHTML = `Total is: $${nums}`;
// }

// const div = document.querySelector("#container")
// const userOrder = prompt("enter Your Ordr Please. (Menu: Biryani , Karahi , burger , Pizza , milakShack)").toLowerCase();

// const promise = new Promise((resolve, reject) => {
//     if(userOrder === "karahi" || userOrder === "biryani" || userOrder === "burger" || userOrder === "pizza" || userOrder === "milkshack"){
//         resolve()
//     }else(
//         reject()
//     )
    
// }).then(() => {
//      div.innerHTML = "ORder Is On The Way..."

//     // alert("Order is on the way...");
    
// }).catch(() =>{
//      div.innerHTML = " We Are Sory , this item is Not availble"
//     // alert("these are not availble");
    
// })

// const div = document.querySelector("#container")
// const customerOrder = prompt("Enter Your Order Please. (Availble: Hair Dresser, Nail Cliper, Navy Shirt, Blue Jeans)").toLowerCase();

// const promise = new Promise((resolve, reject) => {
//     if(customerOrder === "hair dresser" || customerOrder === "nail cliper" || customerOrder === "navy shirt" || customerOrder === "blue jeans"){
//         resolve()
//     }else(
//         reject()
//     )
// }).then( () => {
//     // alert("Completed... Your Order is on the way.")
//     div.innerHTML = "Completed... Your Order is on the way."


// }).catch(() => {
//     // alert("sorry These are not availble. X")
//     div.innerHTML = "sorry These are not availble. X"
// })












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




//                   NEW EXPENSE SYSTEM


  const totalEl   = document.getElementById('total');
  const amountEl  = document.getElementById('input1');
  const selectEl  = document.getElementById('select');
  const descEl    = document.getElementById('input2');
  const container = document.getElementById('container');
  const emptyEl   = document.getElementById('empty');
  const tableHead = document.getElementById('table-head');
  const listCount = document.getElementById('list-count');
  const ftrCount  = document.getElementById('ftr-count');
  const btnSubmit = document.getElementById('btn-submit');
  const btnLabel  = document.getElementById('btn-label');
  const btnCancel = document.getElementById('btn-cancel');
  const editBadge = document.getElementById('edit-badge');
  const overlay   = document.getElementById('overlay');
  const modalDesc = document.getElementById('modal-desc');

  let allExpense   = [];
  let editIndex    = -1;
  let deleteTarget = -1;

  document.getElementById('hdr-date').textContent = new Date().toLocaleDateString('en-US', {
    weekday:'long', year:'numeric', month:'long', day:'numeric'
  });

  function getFormattedDate() {
    return new Date().toLocaleDateString('en-US', {
      month:'short', day:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit'
    });
  }

  function esc(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function shake(el) {
    el.style.animation = 'none';
    void el.offsetHeight;
    el.style.animation = 'shake .4s ease';
    el.addEventListener('animationend', () => el.style.animation = '', { once:true });
  }

  function addExpense() {
    const amount   = parseFloat(amountEl.value);
    const category = selectEl.value;
    const remarks  = descEl.value.trim();

    if (!amount || amount <= 0 || category === 'none' || !remarks) { shake(btnSubmit); return; }

    const entry = { amount, category, remarks, date: getFormattedDate() };

    if (editIndex === -1) {
      allExpense.push(entry);
    } else {
      allExpense[editIndex] = { ...entry, date: allExpense[editIndex].date };
      editIndex = -1;
      setNormalMode();
    }

    clearFields();
    render();
  }

  function clearFields() {
    amountEl.value = '';
    selectEl.value = 'none';
    descEl.value   = '';
  }

  function startEdit(i) {
    const e = allExpense[i];
    amountEl.value = e.amount;
    selectEl.value = e.category;
    descEl.value   = e.remarks;
    editIndex = i;
    btnLabel.textContent = 'Save Changes';
    btnSubmit.classList.add('is-edit');
    btnCancel.classList.add('visible');
    editBadge.classList.add('visible');
    window.scrollTo({ top:0, behavior:'smooth' });
    setTimeout(() => amountEl.focus(), 300);
  }

  function cancelEdit() {
    editIndex = -1;
    clearFields();
    setNormalMode();
  }

  function setNormalMode() {
    btnLabel.textContent = 'Add Entry';
    btnSubmit.classList.remove('is-edit');
    btnCancel.classList.remove('visible');
    editBadge.classList.remove('visible');
  }

  function openDeleteModal(i) {
    deleteTarget = i;
    const e = allExpense[i];
    modalDesc.textContent = `Delete "${e.remarks}" — $${parseFloat(e.amount).toFixed(2)} (${e.category})? This cannot be undone.`;
    overlay.classList.add('open');
  }

  function closeModal() { overlay.classList.remove('open'); deleteTarget = -1; }

  function confirmDelete() {
    if (deleteTarget < 0) return;
    if (editIndex === deleteTarget) { editIndex = -1; setNormalMode(); clearFields(); }
    allExpense.splice(deleteTarget, 1);
    deleteTarget = -1;
    closeModal();
    render();
  }

  function handleOverlayClick(e) { if (e.target === overlay) closeModal(); }

  function render() {
    const n = allExpense.length;
    listCount.textContent   = n === 0 ? '0 entries' : `${n} entr${n === 1 ? 'y':'ies'}`;
    ftrCount.textContent    = `${n} Record${n !== 1 ? 's':''}`;
    emptyEl.style.display   = n ? 'none' : 'block';
    tableHead.style.display = n ? 'grid' : 'none';

    container.innerHTML = '';
    allExpense.forEach((e, i) => {
      const row = document.createElement('div');
      row.className = 'exp-row';
      row.style.animationDelay = `${i * 0.04}s`;
      row.innerHTML = `
        <div class="td"><span class="cat-pill cat-${esc(e.category)}">${esc(e.category)}</span></div>
        <div class="td exp-desc">
          <span class="desc-text">${esc(e.remarks)}</span>
          <span class="desc-date">${e.date}</span>
        </div>
        <div class="td exp-amount">$${parseFloat(e.amount).toFixed(2)}</div>
        <div class="td exp-actions">
          <button class="act-btn edit" title="Edit"   onclick="startEdit(${i})">✎</button>
          <button class="act-btn del"  title="Delete" onclick="openDeleteModal(${i})">✕</button>
        </div>
      `;
      container.appendChild(row);
    });

    calculateTotal();
  }

  function calculateTotal() {
    const sum = allExpense.reduce((s, e) => s + Number(e.amount), 0);
    totalEl.textContent = '$' + sum.toFixed(2);
    totalEl.classList.remove('pulse');
    void totalEl.offsetHeight;
    totalEl.classList.add('pulse');
  }

  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') addExpense();
    if (e.key === 'Escape') { closeModal(); cancelEdit(); }
  });

  render();
