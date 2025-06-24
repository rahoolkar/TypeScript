interface Details {
  name: string;
  gender: string;
}

const o1: Details = {
  name: "rahul",
  gender: "male",
};

function getGender(obj: Details): string {
  if ("gender" in obj) {
    return obj.gender;
  }
  return "non";
}

console.log(getGender(o1));

export {};
