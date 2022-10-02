

let email = JSON.parse(localStorage.getItem("harvestlogin"));
let f_n = document.querySelector(".nav_ele4");
// f_n.style.marginLeft="700px"
f_n.textContent = email.firstname;
console.log(email.firstname);

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("harvestlogin");
  setTimeout(() => {
    window.location.href = "./index.html";
  }, 2000);
});

let timeleft;
let ab;

let data = JSON.parse(localStorage.getItem("harvestlogin"));
let a = document.getElementById("fom");
// a.innerHTML = "";
let added = () => {
  function aaa() {
    // a.style.visibility = "visible";
    a.style.display = "block";
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    div2.setAttribute("class", "cut");
    let h3 = document.createElement("h3");
    let h4 = document.createElement("h4");
    let form = document.createElement("form");
    let sel = document.createElement("select");
    let op6 = document.createElement("option");
    let op7 = document.createElement("option");
    let sel2 = document.createElement("select");
    let op1 = document.createElement("option");
    let op2 = document.createElement("option");
    let op3 = document.createElement("option");
    let op4 = document.createElement("option");
    let op5 = document.createElement("option");

    console.log(data.data);
    let harv = data.data;
    for (i in harv) {
      console.log(harv[i].project);
      document.querySelector(".hard").innerText = harv[i].project;
      document.querySelector(".small").innerText = harv[i].client;
      op7.innerText = harv[i].project;
    }

    let in1 = document.createElement("input");
    let in2 = document.createElement("input");
    in2.setAttribute("id", "polo");
    let remov = document.createElement("button");
    let rsub = document.createElement("button");

    h3.innerText = `New time entry for ${new Date().toDateString()}`;
    h4.innerText = "Project / Task";
    op6.innerText = "Example Project";

    op1.innerText = "Design";
    op2.innerText = "Marketing";
    op3.innerText = "Programming";
    op4.innerText = "Project Management";
    op5.innerText = "Non-Bussiness Development";
    in1.placeholder = "Notes(optional)";
    in2.placeholder = "0:00";
    rsub.innerText = "Submit";
    remov.innerText = "❌";
    rsub.style.padding = "10px 0px";
    rsub.onclick = () => {
      alert("done");
    };

    let sht = +in2.value;
    console.log(sht);
    localStorage.setItem("sec", JSON.stringify(sht));

    remov.onclick = () => {
      // a.style.visibility='hidden'
      a.style.display = "none";
    };

    localStorage.setItem("tasks", JSON.stringify(op7));

    div2.append(h3, remov);
    sel.append(op6, op7);
    sel2.append(op1, op2, op3, op4, op5);
    form.append(h4, sel, sel2, in1, in2, rsub);
    div.append(div2, form);
    a.append(div);
  }
  aaa();
};
let harv = data.data;
for (i in harv) {
  console.log(harv[i].project);
  document.querySelector(".hard").innerText = harv[i].project;
  document.querySelector(".small").innerText = harv[i].client;
}

// document.querySelector(".small").innerText=data.data.client
document.getElementById("sf").innerText = new Date().toDateString();
let t = JSON.parse(localStorage.getItem("tasks"));
console.log(t);

document.querySelector(".timerr").addEventListener("click", () => {
  let downloadTimer;

  let v = document.querySelector(".har");
  let yaar4 = document.querySelector(".timerr");
  let a = v.value;
  if (yaar4.innerText === "🕑 Start") {
    yaar4.innerText = "Reset";

    timeleft = 20;
    ab = 20;
    console.log(timeleft, ab);
    downloadTimer = setInterval(function () {
      if (timeleft <= 0) {
        clearInterval(downloadTimer);
      }
      v.innerText = `0:${ab - timeleft}`;
      timeleft -= 1;
    }, 1000);
  } else if (yaar4.innerText === "Reset") {
    clearInterval(downloadTimer);
    ab = 0;
    timeleft = 0;

    yaar4.innerText = "🕑 Start";
  }
});

function pl() {
  alert("You can't edit it ");
  //  aaa()
  a.style.display = "block";
  a.style.visibility = "visible";
}