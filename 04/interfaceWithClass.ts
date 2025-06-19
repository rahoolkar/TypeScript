interface Mobile {
  camera: number;
  calling: boolean;
  texts: string;
}

interface Games {
  playingGames(): string;
}

class SmartPhone implements Mobile, Games {
  public camera: number;
  public calling: boolean;
  public texts: string;

  constructor(c: number, call: boolean, texts: string) {
    this.camera = c;
    this.calling = call;
    this.texts = texts;
  }

  playingGames(): string {
    return "pubg playing";
  }
}

let samsung = new SmartPhone(3, true, "hello");

console.log(samsung.playingGames());
console.log(samsung.camera);
console.log(samsung.texts);

export {};
