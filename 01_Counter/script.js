const counterDisplay = document.getElementById("counter")
const increasebtn = document.getElementById("increase")
const decreasebtn = document.getElementById("decrease")
const resretbtn = document.getElementById("reset")
let counter = 0;

increasebtn.addEventListener('click', function(e){
  counter++;
  updateDisplay();
})
decreasebtn.addEventListener('click', function(e){
  counter--;
  updateDisplay();
})

resretbtn.addEventListener('click', function(e){
  counter = 0;
  updateDisplay();
})

function updateDisplay() {
  counterDisplay.textContent = counter;
}