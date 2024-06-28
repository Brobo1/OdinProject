const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
let num1;
let num2;
let operator;

const addNumbers = () => {
  // let numberPad = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "", "="];
  let numberPad = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "="];
  numberPad.forEach((number) => {
    let numBtn = document.createElement("button");
    numBtn.type = "button";
    numBtn.innerText = number;
    if (numBtn.innerText === "") {
      numBtn.disabled = true;
    }
    numBtn.className = "number";
    numbers.appendChild(numBtn);
  });
};

const addSymbols = () => {
  let symbolPad = ["/", "*", "-", "+"];
  symbolPad.forEach((symbol) => {
    let symBtn = document.createElement("button");
    symBtn.type = "button";
    symBtn.innerText = symbol;
    symBtn.className = "symbol";
    symbols.appendChild(symBtn);
  });
};

const createPad = () => {
  addNumbers();
  addSymbols();
};
createPad();

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, num1, num2) {
  add(num1, num2);
}
