"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    var res = b;
    return res;
}
function takesObject(ob) {
    return ob;
}
console.log(add(2, 4));
console.log(takesObject({ wheels: 3, lights: 8 }));
//generics with arrow functions
var takeProductArrowFunction = function (pdList) {
    return pdList[0];
};
console.log(takeProductArrowFunction([1, 2, 4, 4]));
