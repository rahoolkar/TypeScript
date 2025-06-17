//interface in ts are similar to type but we can define methods in inteface

interface User {
  readonly id: string;
  name: string;
  age: number;
  googleId?: number;
  isLoggedIn(): boolean;
  eats(foodname: string): string;
}

//adding 2 interfaces
interface User {
  gfgScore: number;
}

//inheritance using typescript
interface Bot extends User {
  botid: number;
}

const udayan: Bot = {
  botid: 289,
  id: "a123",
  name: "udayankar",
  age: 17,
  isLoggedIn: () => {
    return true;
  },
  eats: (food: string) => {
    return food;
  },
  gfgScore: 506,
};

let res = udayan.eats("rajmachawal");

console.log(res);

export {};
