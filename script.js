const screen = document.getElementById('display-numbers');
const numbers = document.querySelectorAll('.number');
console.log(numbers);
numbers.forEach(function (event) {
  event.addEventListener("click", function (event) {
    screen.textContent = event.target.innerHTML;
  });
});

let operA = 0;
let operB = 0;
let operator = "";







function appendScreen(event) {
    screen.textContent = event.target.innerHTML;
}




add = (a, b) => a + b;
sub = (a, b) => a - b;
multi = (a, b) => a * b;
divide = (a, b) => a / b;

function operate(operA, operB, operator) {
  switch (operator) {
    case "+":
      return add(operA, operB);
    case "-":
      return sub(operA, operB);
    case "*":
      return multi(operA, operB);
    case "&#247":
      return divide(operA, operB);
  }
}
