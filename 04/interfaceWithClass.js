"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SmartPhone = /** @class */ (function () {
  function SmartPhone(c, call, texts) {
    this.camera = c;
    this.calling = call;
    this.texts = texts;
  }
  SmartPhone.prototype.playingGames = function () {
    return "pubg playing";
  };
  return SmartPhone;
})();

var samsung = new SmartPhone(3, true, "hello");

console.log(samsung.playingGames());
console.log(samsung.camera);
console.log(samsung.texts);
