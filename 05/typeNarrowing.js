"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function detectType(str) {
    if (str) {
        if (typeof str === "number") {
            return str.toFixed(2);
        }
        return str.toUpperCase();
    }
    else {
        return "0";
    }
}
function handleObject(str) {
    if (str) {
        if (typeof str === "object") {
            if (typeof str[0] === "number") {
                for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
                    var i = str_1[_i];
                    console.log(str[i] + 1);
                }
            }
            else if (typeof str[0] === "string") {
                for (var _a = 0, str_2 = str; _a < str_2.length; _a++) {
                    var i = str_2[_a];
                    console.log(str[i].toUpperCase());
                }
            }
        }
    }
}
console.log(handleObject([1, 2, 3, 4, 5]));
console.log(handleObject(["rahul", "udayan", "amrita", "utpal", "sapna"]));
