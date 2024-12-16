let answer;
let numberOne;
let operator;
let numberTwo;
let input;
function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
function times(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return "LOL";
  } else {
    return a / b;
  }
}
function calculate(numberOne, operator, numberTwo) {
  if (operator === "+") {
    return plus(numberOne, numberTwo);
  } else if (operator === "-") {
    return minus(numberOne, numberTwo);
  } else if (operator === "*") {
    return times(numberOne, numberTwo);
  } else if (operator === "/") {
    return divide(numberOne, numberTwo);
  }
}

function buttonContent(cont) {
  if (display.textContent === "0") {
    display.textContent = cont;
  } else {
    display.textContent += cont;
  }
  input = display.textContent;
}
const display = document.querySelector("#results");
const numbers = document.querySelectorAll(".green");
numbers.forEach((number) =>
  number.addEventListener("click", () =>
    buttonContent(event.target.textContent)
  )
);
