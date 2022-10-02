let data = [
    {
        client: "Suraj Gundle",
        name: "abcInfotech",
        budget: 500,
        spent: 300,
        progress: 80,
        remaining: 100,
        costs: 0.00,
    },
    {
        client: "Shubham Gundle",
        name: "abcInfotech",
        budget: 500,
        spent: 300,
        progress: 80,
        remaining: 100,
        costs: 0.00,
    },
    {
        client: "Prasad Gundle",
        name: "abcInfotech",
        budget: 500,
        spent: 300,
        progress: 80,
        remaining: 100,
        costs: 0.00,
    }
]

localStorage.setItem("proInfo", JSON.stringify(data))

let container=document.getElementById("body");
data.forEach((el)=>{
    console.log(el.client)
    // container.innerHTML=null;

    let tr=document.createElement("tr");
    tr.className="rowlist";

    let client_name = document.createElement("td")
    client_name.innerText =el.client;

    let nam = document.createElement("td")
    nam.innerText = el.name;

    let bud = document.createElement("td")
    bud.innerText =el.budget;
    let val2=+el.budget;
    
    let spen = document.createElement("td")
    let val=Math.floor(Math.random() * 11+2)
    spen.innerText = `$${val}`;

    let prog = document.createElement("td")
    let proggressVal=Math.floor(val/(val2)*100);    
    prog.innerText =`${proggressVal}%`;


    let remai = document.createElement("td")
    let val3=(100-proggressVal)
    val3=val3.toFixed(2)    
    remai.innerText =`${val3}%` ;

    let cost = document.createElement("td")
    // cost.innerText = el.costs;
    cost.innerText=`$${Math.floor(Math.random() * 100)}`;

    // let tr = document.createElement("tr")
    // tr.setAttribute("class", "tableRowList")
    tr.append(client_name, nam, bud, spen,prog,remai, cost)
    container.append(tr)
})

let lkl=()=>{
window.location.href="./createfirstproject.html"
}