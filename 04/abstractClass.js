var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var Car = /** @class */ (function () {
  function Car(wheels, seats) {
    this.seats = seats;
    this.wheels = wheels;
  }
  Car.prototype.drive = function () {
    return "car drives";
  };
  return Car;
})();
var Maruti = /** @class */ (function (_super) {
  __extends(Maruti, _super);
  function Maruti(wheels, seats, isSafe) {
    var _this = _super.call(this, wheels, seats) || this;
    _this.isSafe = isSafe;
    return _this;
  }
  Maruti.prototype.gas = function () {
    return "petrol";
  };
  return Maruti;
})(Car);
var alto = new Maruti(4, 5, true);
console.log(alto.drive());
console.log(alto.wheels);
console.log(alto.seats);
console.log(alto.isSafe);
console.log(alto.gas());
console.log(alto);
