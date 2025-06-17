//defining an objest
const user = {
  name: "rahulkar",
  age: 19,
};

function createUser({ name: string, age: number }): {
  name: string;
  age: number;
} {
  return { name: "rahul", age: 67 };
}

let o: object = createUser(user);

console.log(o);

export {};
