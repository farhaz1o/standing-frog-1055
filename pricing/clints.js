let dataarr = []
function saveit(){
let name=document.getElementById("name").value;
let address = document.getElementById("textarea").value;
let currency = document.getElementsByClassName("pds-input").value
let dataobj = {
    name,
    address,
}
dataarr.push(dataobj)
localStorage.setItem("userdata",JSON.stringify(dataarr))
}
