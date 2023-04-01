const screen = document.getElementById("display-numbers");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.getElementById('=');
const AC = document.getElementById('AC');

let operA = null;
let operB = null;
let numChanger = false;
let operator = null;
screen.textContent = '0';

numbers.forEach(function (event) {
    event.addEventListener("click", appendScreen);
});
operators.forEach(function (event) {
    event.addEventListener("click", () => {
        numChanger = true;
        operator = event.innerHTML;
    });
});
equal.addEventListener("click", makeCalc);
AC.addEventListener("click", resetAll)

function appendScreen(event) {
    if (screen.textContent == '0') {
        screen.textContent = null;
    }
    if (numChanger == false) {
        screen.append(event.target.innerHTML);
        operA = Number(screen.textContent);
    } else {
        if (operB == null) {
            screen.textContent = null;
            screen.append(event.target.innerHTML);
            operB = Number(screen.textContent);
        } else {
            screen.append(event.target.innerHTML);
            operB = Number(screen.textContent);
        }
    }
    
    console.log(operA);
    console.log(operB);
    console.log(numChanger);
    console.log(operator);
}
function makeCalc() {
    if (operB == null) return;
    clearScreen();
    screen.textContent = (operate(operA, operB, operator));
    operA = Number(screen.textContent);
    operB = null;
}
function clearScreen() {
    screen.textContent = '0';
}
function resetAll() {
    clearScreen();
    operA = null;
    operB = null;
    numChanger = false;
    operator = null;
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
        case "/":
            return divide(operA, operB);
    }
}
