var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
let count = 0;
document.getElementById("switch").addEventListener("change",function(){
  count++;
  changefun(count)
})
let vals;
function changefun(count){
    if(count%2==1){
        vals="$12"
      }else{
      vals="$10.80"
         
      }
      console.log(vals) 
document.getElementById("annual").innerHTML=vals
console.log("hello")
}