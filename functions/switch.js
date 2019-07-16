const { num1, num2, operator } = require("../calculator");
const add = require("./add");
const subtract = require("./subtract");
const multiply = require("./multiply");

var result;

switch (operator) {
  case "addition":
    result = add(num1, num2);
    break;

  case "subtraction":
    result = subtract(num1, num2);
    break;

  case "multiplication":
    result = multiply(num1, num2);
    break;

  case "division":
    result = divide(num1, num2);
    break;

  default:
    result = "Sorry, please enter a valid operator!";
}

module.exports = result;
