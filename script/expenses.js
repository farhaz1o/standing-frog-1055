// import {bottom} from "../components/bottom.js";
// document.getElementById("bottom").innerHTML = bottom();

document.getElementById("track").addEventListener("click", () => {
  document.getElementById("expensesForm").style.display = "block";
  document.querySelector("#trackExp>#team").style.display = "none";
  document.getElementById("teammates").style.display = "none";
});

document.getElementById("team").addEventListener("click", () => {
  document.getElementById("teammates").style.display = "block";
});

let cancel_btn = document.querySelector("#cancel_btn");
cancel_btn.onclick = () => {
  document.getElementById("expensesForm").style.display = "none";
  document.querySelector("#trackExp>#team").style.display = "block";
};

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

window.addEventListener("load", () => {
  if (expenses[0] == undefined) {
    document.querySelector("#addedExp").style.display = "none";
  } else {
    document.querySelector("#addedExp").style.display = "block";
    displayExpense(expenses);
  }
});

let saveExp_btn = document.querySelector("#saveExp_btn");
saveExp_btn.onclick = () => {
  document.querySelector("#addedExp").style.display = "block";
  let expense = {
    date: document.querySelector("#date").value,
    project: document.querySelector("#chooseProject").value,
    category: document.querySelector("#category").value,
    note: document.querySelector("#notes").value,
    amount: document.querySelector("#amount").value,
  };
  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  console.log(expenses);
  displayExpense(expenses);
};

let displayExpense = (data) => {
  console.log(data);
  let total = 0;
  let cont = document.getElementById("container");
  cont.innerHTML = null;
  data.forEach((ele, index) => {
    let box = document.createElement("div");
    box.setAttribute("id", "box");

    let date = document.createElement("div");
    date.innerText = ele.date;

    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    h4.innerText = ele.project;
    let p1 = document.createElement("p");
    p1.innerText = ele.category;
    let p2 = document.createElement("p");
    p2.innerText = ele.note;

    let exp = document.createElement("h4");
    exp.innerText = ` ${ele.amount}`;
    total = total + Number(ele.amount);

    let b1 = document.createElement("button");
    b1.innerText = "Edit";
    b1.onclick = () => {
      document.getElementById("expensesForm").style.display = "block";
    };
    let b2 = document.createElement("button");
    b2.innerText = "Delete";
    b2.onclick = () => {
      deleteExpense(index);
    };

    let hr = document.createElement("hr");

    div.append(h4, p1, p2);
    box.append(date, div, exp, b1, b2);
    cont.append(box, hr);
  });
  document.querySelector("#total").innerHTML = `Total: <b> $ ${total}</b>`;
};

let deleteExpense = (index) => {
  console.log(index)
  let expenses = JSON.parse(localStorage.getItem("expenses"));
  let data = expenses.splice(index,1);
  localStorage.setItem("expenses", JSON.stringify(data));
  // displayExpense(data);
  displayExpense(expenses)
};

// let teammates=JSON.parse(localStorage.getItem("harvestlogin"));

// let addTeammates=(data)=>{
//   console.log("data:",data)
//   let cont=document.getElementById("teammates");
//   cont.innerHTML=null;

//   let input=document.createElement("input");
//   input.type="text";
//   input.placeholder="Search...";

//   let div=document.createElement("div");

//   data.forEach((ele)=>{
//     let p=document.createElement("p");
//     p.innerText=ele;

//     div.append(p);
//     cont.append(input,div);
//   });
// };
// addTeammates(teammates.member)