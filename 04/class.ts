class User {
  name: string;
  age: number;
  city: string;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let rahulUser = new User("rahul", 23);
rahulUser.city = "rohtak";

console.log(rahulUser);

export {};