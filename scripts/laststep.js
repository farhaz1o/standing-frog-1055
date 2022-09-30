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

document.querySelector("#nexttowlcom").addEventListener("click", () => {
  let harvestlogin = JSON.parse(localStorage.getItem("harvestlogin"));

  let harvestUser = JSON.parse(localStorage.getItem("harvestUser"));

  console.log(harvestlogin.email);
  console.log(harvestUser[0].email);
  let i = 0;
  while (i < harvestUser.length) {
    if (harvestUser[i].email == harvestlogin.email) {
      harvestUser.splice(i, 1);
      harvestUser.push(harvestlogin);
    }
    i++;
  }
  localStorage.setItem("harvestUser", JSON.stringify(harvestUser));
  window.location.href = "./time.html";
});
