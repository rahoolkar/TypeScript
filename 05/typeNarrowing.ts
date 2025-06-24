function detectType(str: number | string | null): number | string {
  if (str) {
    if (typeof str === "number") {
      return str.toFixed(2);
    }
    return str.toUpperCase();
  } else {
    return "0";
  }
}

function handleObject(str: number[] | string[] | null): void {
  if (str) {
    if (typeof str === "object") {
      if (typeof str[0] === "number") {
        for (let i of str) {
          console.log(str[i] + 1);
        }
      } else if (typeof str[0] === "string") {
        for (let i of str) {
          console.log(str[i].toUpperCase());
        }
      }
    }
  }
}

console.log(handleObject([1, 2, 3, 4, 5]));
console.log(handleObject(["rahul", "udayan", "amrita", "utpal", "sapna"]));

export {};
