import Big from "big.js";

function operate(first, second, operator) {
  const firstNumber = new Big(first);
  const secondNumber = new Big(second);
  if (operator === "+") {
    return firstNumber.plus(secondNumber).toString();
  }
  if (operator === "-") {
    return firstNumber.minus(secondNumber).toString();
  }
  if (operator === "x") {
    return firstNumber.mul(secondNumber).toString();
  }
  if (operator === "÷") {
    if (secondNumber === "0") alert("Can't divide to 0");
    else return firstNumber.div(secondNumber).toString();
  }
  return {};
}

export default operate;
