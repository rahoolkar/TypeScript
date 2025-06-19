"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, age) {
        this.password = "1234";
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(User.prototype, "UserPassword", {
        get: function () {
            return this.password;
        },
        set: function (password) {
            this.password = password;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var rahulUser = new User("rahul", 23);

rahulUser.city = "rohtak";

var password = rahulUser.UserPassword; //getter
rahulUser.UserPassword = "abcd"; //setter

console.log(rahulUser);
console.log(password);
