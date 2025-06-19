abstract class Car {
  public wheels: number;
  public seats: number;

  constructor(wheels, seats) {
    this.seats = seats;
    this.wheels = wheels;
  }

  drive(): string {
    return "car drives";
  }

  abstract gas(): string;
}

class Maruti extends Car {
  public isSafe: boolean;
  constructor(wheels: number, seats: number, isSafe: boolean) {
    super(wheels, seats);
    this.isSafe = isSafe;
  }

  gas() {
    return "petrol";
  }
}

let alto = new Maruti(4, 5, true);

console.log(alto.drive());
console.log(alto.wheels);
console.log(alto.seats);
console.log(alto.isSafe);
console.log(alto);

export {};
