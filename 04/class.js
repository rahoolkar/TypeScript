"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var rahulUser = new User("rahul", 23);
rahulUser.city = "rohtak";
console.log(rahulUser);
