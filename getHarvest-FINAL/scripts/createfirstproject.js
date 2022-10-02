let harvestlogin = JSON.parse(localStorage.getItem("harvestlogin"));

let nexttowlcom = document.querySelector("#nexttowlcom");
nexttowlcom.addEventListener("click", () => {
  let details = {
    client: document.querySelector("#client").value,
    project: document.querySelector("#project").value,
    budget: document.querySelector("#budget").value,
    costs: document.querySelector("#costs").value,
  };

  if (harvestlogin.data === undefined) {
    harvestlogin.data = [];
    harvestlogin.data.push(details);
  } else {
    harvestlogin.data.push(details);
  }
  // harvestlogin.data = [];

  localStorage.setItem("harvestlogin", JSON.stringify(harvestlogin));

  window.location.href = "./laststep.html";
});