function myfun(){
    window.location.href = "clints.html"
}
let userdata = JSON.parse(localStorage.getItem("userdata"))
function appended(data){
    data.forEach(function(elem){
        let div = document.createElement("div")
        let btn = document.createElement("button")
        btn.textContent = "Edit"
        let btn1 = document.createElement("button")
        btn1.textContent = "+Add contact"
        btn1.setAttribute("class","btns")
        btn.setAttribute("class","btns")
        let name = document.createElement("h4")
        name.innerText = elem.name
        div.setAttribute("class","rose")
        div.append(btn,name,btn1)
        document.getElementById("mainContainer1").append(div)
        
    })
}
appended(userdata)