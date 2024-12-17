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
    return plus(Number(numberOne), Number(numberTwo));
  } else if (operator === "-") {
    return minus(Number(numberOne), Number(numberTwo));
  } else if (operator === "*") {
    return times(Number(numberOne), Number(numberTwo));
  } else if (operator === "/") {
    return divide(Number(numberOne), Number(numberTwo));
  }
}

function buttonContent(cont) {
  if (numberOne === undefined) {
    if (display.textContent.length < 9) {
      if (display.textContent === "0") {
        display.textContent = cont;
      } else {
        display.textContent += cont;
      }
      input = display.textContent;
    } else {
      console.log("Sorry, no more numbers");
    }
  } else {
    if (input === 0) {
      display.textContent = cont;
      input = display.textContent;
    } else {
      display.textContent += cont;
      input = display.textContent;
    }
  }
}
const display = document.querySelector("#results");
const numbers = document.querySelectorAll(".green");
numbers.forEach((number) =>
  number.addEventListener("click", () =>
    buttonContent(event.target.textContent)
  )
);

const operators = document.querySelectorAll(".orange");
operators.forEach((compute) =>
  compute.addEventListener("click", () => {
    operator = event.target.textContent;
    numberOne = input;
    input = 0;
  })
);

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
  if (numberOne !== undefined) {
    numberTwo = input;
    display.textContent = calculate(numberOne, operator, numberTwo);
    numberOne = display.textContent;
    operator = undefined;
    numberTwo = undefined;
    input = numberOne;
  }
});
