let other = document.querySelector("#other");

let t1 = 0;
let tic1 = document.querySelector("#tick1");
tic1.addEventListener("click", () => {
  tic3.style.backgroundColor = "white";
  tic2.style.backgroundColor = "white";
  tic1.style.backgroundColor = "#fca976";
  other.innerHTML = null;
});

let t2 = 0;
let tic2 = document.querySelector("#tick2");
tic2.addEventListener("click", () => {
  tic3.style.backgroundColor = "white";
  tic2.style.backgroundColor = "#fca976";
  tic1.style.backgroundColor = "white";
  other.innerHTML = null;
});

let t3 = 0;
let tic3 = document.querySelector("#tick3");
tic3.addEventListener("click", () => {
  tic3.style.backgroundColor = "#fca976";
  tic2.style.backgroundColor = "white";
  tic1.style.backgroundColor = "white";
  other.innerHTML = specifyo();
});

let specifyo = () => {
  return `<input type="email" class="emailin" id="number" placeholder="Please Specify..."><br>`;
};

document.querySelector("#nexttowlcom").addEventListener("click", () => {
  window.location.href = "./createfirstproject.html";
});
