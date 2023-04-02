// vars
const screen = document.getElementById('display-numbers');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.getElementById('=');
const AC = document.getElementById('AC');
const C = document.getElementById('C');
const decimal = document.getElementById('.')

let operA = null;
let operB = null;
let numChanger = false;
let calculation = false;
let operator = null;
screen.textContent = '0';

// button-events
numbers.forEach(function (event) {
    event.addEventListener("click", appendScreen);
});

operators.forEach(function (event) {
    event.addEventListener("click", () => {
        operator = event.innerHTML;
        operatorBGChanger(operator);
        numChanger = true;
        if (numChanger == true) makeCalc();
    });
});

equal.addEventListener("click", makeCalcEqual);
AC.addEventListener("click", resetAll);
C.addEventListener("click", resetOne);
decimal.addEventListener("click", addDecimal);

//functions

function appendScreen(event) {
    if (screen.textContent.length > 38 && numChanger == false) return;
    if (screen.textContent == '0') {
        screen.textContent = null;
    }
    if (calculation == true) {
        screen.textContent = null;
        calculation = false;
    }
    if (numChanger == false) {
        screen.textContent += event.target.innerHTML;
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
}
function makeCalc() {
    if (operB == null) return;
    clearScreen();
    screen.textContent = operate(operA, operB, operator);
    operA = Number(screen.textContent);
    operB = null;
}
function makeCalcEqual() {
    if (operB == null) return;
    clearScreen();
    screen.textContent = operate(operA, operB, operator);
    operA = Number(screen.textContent);
    operB = null;
    calculation = true;
    numChanger = false;
    for (let i = 0; i < 4; i++) {
        operators[i].classList.remove("bg1");
    }
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
function resetOne() {
    screen.textContent = screen.textContent.slice(0, -1);
    if (numChanger == false) operA = Number(screen.textContent);
    else operB = Number(screen.textContent);
    console.table(operA, operB);
}
function addDecimal() {
    if (screen.textContent.includes(".")) return;
    screen.append('.');
}
function operatorBGChanger(operator) {
    switch (operator) {
        case "+":
            for (let i = 0; i < 4; i++) {
                operators[i].classList.remove("bg1");
            }
            operators[3].classList.add("bg1");
            break;
        case "-":
            for (let i = 0; i < 4; i++) {
                operators[i].classList.remove("bg1");
            }
            operators[2].classList.add("bg1");
            break;
        case "*":
            for (let i = 0; i < 4; i++) {
                operators[i].classList.remove("bg1");
            }
            operators[1].classList.add("bg1");
            break;
        case "/":
            for (let i = 0; i < 4; i++) {
                operators[i].classList.remove("bg1");
            }
            operators[0].classList.add("bg1");
            break;
    }
}
function operate(operA, operB, operator) {
    switch (operator) {
        case "+":
            return Math.round(add(operA, operB) * 1000) / 1000;
        case "-":
            return Math.round(sub(operA, operB) * 1000) / 1000;
        case "*":
            return Math.round((multi(operA, operB)) * 1000) / 1000;
        case "/":
            return Math.round(divide(operA, operB) * 1000) / 1000;
    }
}
add = (a, b) => a + b;
sub = (a, b) => a - b;
multi = (a, b) => a * b;
divide = (a, b) => a / b;
