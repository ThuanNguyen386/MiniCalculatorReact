import operate from "./operate";
import Big from "big.js";

Big.DP = 200;
function calculate(obj, btnName) {
  const isNumber = (btnName) => {
    return /[0-9]+/.test(btnName);
  };
  if (isNumber(btnName)) {
    if (obj.next === "0") {
      if (btnName === "0") {
        return { next: null };
      } else {
        return { next: btnName };
      }
    }
    if (obj.operator) {
      if (obj.next) {
        return { next: obj.next + btnName };
      }
      return { next: btnName };
    } else if (obj.next) {
      return { next: obj.next + btnName };
    }
    return { total: null, next: btnName };
  }
  switch (btnName) {
    case "<-":
      if (obj.next) return { next: obj.next.slice(0, -1) };
      return {};
    case "AC":
      return { ans: null, total: null, next: null, operator: null };
    case "%":
      if (obj.operator && obj.next) {
        let result = "";
        const calc = operate(obj.total, obj.next, obj.operator);
        if (obj.operator === "÷") {
          result = new Big(calc).mul(100).toString();
        } else {
          result = new Big(calc).div(100).toString();
        }
        return { total: result, next: null };
      }
      if (obj.next) {
        const result = new Big(obj.next).div(100).toString();
        return { next: result };
      }
      return {};
    case ".":
      if (obj.next) {
        if (obj.next.includes(".")) {
          return {};
        }
        return { next: obj.next + btnName };
      }
      return { next: "0." };

    case "=":
      if (obj.next && obj.operator) {
        const result = operate(obj.total, obj.next, obj.operator);
        return { ans: obj.next, total: result, next: null };
      } else if (obj.ans) {
        const result = operate(obj.total, obj.ans, obj.operator);
        return { ans: obj.ans, total: result };
      }
      return {};
    case "+/-":
      if (obj.next) {
        const negative = new Big(obj.next).mul(-1).toString();
        return { next: negative };
      }
      if (obj.total) {
        const negative = new Big(obj.total).mul(-1).toString();
        return { total: negative };
      }
      return {};
    case "+":
    case "-":
    case "x":
    case "÷":
      if (obj.total) {
        return {
          total: obj.total,
          next: null,
          operator: btnName,
        };
      }
      return {
        total: obj.next,
        next: null,
        operator: btnName,
      };
    default:
      return {};
  }
}

export default calculate;
