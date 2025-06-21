function add<Type>(a: Type, b: Type): Type {
  let res: Type = b;
  return res;
}

function takesObject<T>(ob: T): T {
  return ob;
}

type Car = {
  wheels: number;
  lights: number;
};

console.log(add<number>(2, 4));
console.log(takesObject<Car>({ wheels: 3, lights: 8 }));

//generics with arrow functions
const takeProductArrowFunction = <Type>(pdList: Array<Type>): Type => {
  return pdList[0];
};

console.log(takeProductArrowFunction<number>([1, 2, 4, 4]));

export {};
