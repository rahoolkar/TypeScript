function calculate(a: number, b: number, logic: Function) {
  let res:number = logic(a, b);
  return res;
}

function sum(a: number, b: number) {
  return a + b;
}

calculate(3, 9, sum);

export {};
