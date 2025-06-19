class User {
  public name: string;
  public age: number;
  public city: string;
  private password: string = "1234";
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  get UserPassword(): string {
    return this.password;
  }

  set UserPassword(password: string) {
    this.password = password;
  }
}

let rahulUser = new User("rahul", 23);
rahulUser.city = "rohtak";

let password = rahulUser.UserPassword; //getter

rahulUser.UserPassword = "abcd" //setter

console.log(rahulUser);
console.log(password);

export {};
