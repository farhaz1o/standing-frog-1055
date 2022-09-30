let t1 = 0;
let tic1 = document.querySelector("#tick1");
tic1.addEventListener("click", () => {
  if (t1 == 0) {
    tic1.style.backgroundColor = "#fca976";
    t1 = 1;
  } else {
    tic1.style.backgroundColor = "white";
    t1 = 0;
  }
});

let t2 = 0;
let tic2 = document.querySelector("#tick2");
tic2.addEventListener("click", () => {
  if (t2 == 0) {
    tic2.style.backgroundColor = "#fca976";
    t2 = 1;
  } else {
    tic2.style.backgroundColor = "white";
    t2 = 0;
  }
});

let t3 = 0;
let tic3 = document.querySelector("#tick3");
tic3.addEventListener("click", () => {
  if (t3 == 0) {
    tic3.style.backgroundColor = "#fca976";
    t3 = 1;
  } else {
    tic3.style.backgroundColor = "white";
    t3 = 0;
  }
});

let t4 = 0;
let tic4 = document.querySelector("#tick4");
tic4.addEventListener("click", () => {
  if (t4 == 0) {
    tic4.style.backgroundColor = "#fca976";
    t4 = 1;
  } else {
    tic4.style.backgroundColor = "white";
    t4 = 0;
  }
});

let specifyo = () => {
  return `<input type="email" class="emailin" id="email1" placeholder="Please Specify..."><br>`;
};

let t5 = 0;
let tic5 = document.querySelector("#tick5");
tic5.addEventListener("click", () => {
  if (t5 == 0) {
    tic5.style.backgroundColor = "#fca976";
    t5 = 1;
    document.querySelector("#other").innerHTML = specifyo();
  } else {
    tic5.style.backgroundColor = "white";
    t5 = 0;
    document.querySelector("#other").innerHTML = null;
  }
});

let nexttowlcom = document.querySelector("#nexttowlcom");
nexttowlcom.addEventListener("click", () => {
  window.location.href = "./fourwlcm.html";
});
