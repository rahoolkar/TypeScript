"use strict";
//type alias
Object.defineProperty(exports, "__esModule", { value: true });
var o1 = {
    name: "udayan",
    age: 78,
    id: "#1234",
};
function createUser(obj) {
    console.log(obj);
    return { status: 200, statusString: "successfully done task" };
}
var result = createUser(o1);
console.log(result);
