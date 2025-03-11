const decreasebtn = document.getElementById("b1");
const increasebtn = document.getElementById("b3");
const resetbtn = document.getElementById("b2");
const count = document.getElementById("count");
let c = 0;

increasebtn.onclick = function() {
    c++;
    count.textContent = c;
}
decreasebtn.onclick = function() {
    c--;
    count.textContent = c;
}
resetbtn.onclick = function() {
    c = 0;
    count.textContent = c;
}