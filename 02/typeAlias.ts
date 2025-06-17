//type alias

type UserObjectType = {
  name: string;
  age: number;
  readonly id: string;
  hasWaterBottle?: boolean;
};

let o1 = {
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

export {};
