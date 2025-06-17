"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//defining an objest
var user = {
    name: "rahulkar",
    age: 19,
};
function createUser(_a) {
    var string = _a.name, number = _a.age;
    return { name: "rahul", age: 67 };
}
var o = createUser(user);
console.log(o);
