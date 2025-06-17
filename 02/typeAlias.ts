//type alias

type UserObjectType = {
  name: string;
  age: number;
  readonly id: string;
  hasWaterBottle?: boolean;
};

let o1: UserObjectType = {
  name: "udayan",
  age: 78,
  id: "#1234",
};

function createUser(obj: UserObjectType): {
  status: number;
  statusString: string;
} {
  console.log(obj);
  return { status: 200, statusString: "successfully done task" };
}

let result: object = createUser(o1);

console.log(result);

//type with arrays
type ArraysType = string[];

const names: ArraysType = [];
names.push("udayan");
names.push("rahul");
names.push("utpal");
names.push("amrita");
names.push("sapna");

console.log(names);

export {};
