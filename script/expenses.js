// const { bodyParser } = require("json-server");

base_url="https://stark-crag-39186.herokuapp.com/expenses";
let Arr;
// console.log(obj)

let save=document.getElementById("s_expence").addEventListener("click",()=>{
    sdata(event);
});

let sdata=async(event)=>{
    event.preventDefault();
    let date =document.getElementById("Date").value;
let project=document.getElementById("project").value;
let category=document.getElementById("category").value; 
let note=document.getElementById("note").value;
let file=document.getElementById("file").value;
let checkbox=document.getElementById("term").value;
let amount=document.getElementById("tamount").value;

let obj={
    date,
    project,
    category,
    note,
    file,
    checkbox,
    amount,
};
Arr.push(obj);
console.log(obj)

let res=await fetch(`$base_url`,{
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
        "Content_type":"application/json",
    },
    
})
res=await res.json();

}