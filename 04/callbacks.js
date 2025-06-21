"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculate(a, b, logic) {
  var res = logic(a, b);
  return res;
}
function sum(a, b) {
  return a + b;
}
console.log(calculate(3, 9, sum));
