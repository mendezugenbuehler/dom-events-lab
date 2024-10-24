/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

// first number
let inputNumber1 = ""; 
// second number 
let inputNumber2 = "";  
// operator
let currentOperator = ""; 
// result of the calculation 
let result = "";
// track if operator was clicked
let isOperatorClicked = false; 

/*------------------------ Cached Element References ------------------------*/

const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });

/*-------------------------------- Functions --------------------------------*/

function handleButtonClick(event) {
    const clickedButtonValue = event.target.innerText;
  
    // check for number  
    if (!isNaN(clickedButtonValue)) {
      handleNumberClick(clickedButtonValue);
    } 
   // check for operator
    else if (["+", "-", "*", "/"].includes(clickedButtonValue)) {
      handleOperatorClick(clickedButtonValue);
    } 
   // equals
    else if (clickedButtonValue === "=") {
      handleEqualsClick();
    } 
   // clear
    else if (clickedButtonValue === "C") {
      handleClearClick();
    }
  }
  
  function handleNumberClick(number) {
    if (isOperatorClicked) {
      inputNumber2 += number;
      display.innerText = inputNumber2; 
    } else {
      inputNumber1 += number;
      display.innerText = inputNumber1; 
    }
  }
  
  function handleOperatorClick(operator) {
    if (inputNumber1) {
      currentOperator = operator; 
      isOperatorClicked = true; 
    }
  }
  
  function handleEqualsClick() {
    if (inputNumber1 && inputNumber2 && currentOperator) {
      const num1 = parseFloat(inputNumber1);
      const num2 = parseFloat(inputNumber2);
  
      // calculate based on the operator selected
      switch (currentOperator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
      }
  
      // display and reset
      display.innerText = result;
      resetCalculator();
    }
  }
  
  // reset to 0
  function handleClearClick() {
    resetCalculator();
    display.innerText = "0";  
  }
  
  //reset altogether 
  function resetCalculator() {
    inputNumber1 = "";
    inputNumber2 = "";
    currentOperator = "";
    isOperatorClicked = false;
    result = "";
  }