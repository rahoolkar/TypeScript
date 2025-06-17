//example-1
function add(num1: number, num2: number) {
  return num1 + num2;
}

let res: number = add(1, 3);
console.log(res);

//example-2
function addStrings(s1: string, s2: string): string {
  return (s1 + s2).toUpperCase();
}

let addedString = addStrings("rahul", "kar");
console.log(addedString);

//example-3
function printHello(): void {
  console.log("Hello, Namaste");
}

printHello();

export {};
