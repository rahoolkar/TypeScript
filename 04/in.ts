interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdmin(obj: User | Admin): boolean {
  if ("isAdmin" in obj) {
    return obj.isAdmin;
  }
  return false;
}

isAdmin({ name: "udayan", email: "u@gmail.com", isAdmin: true });

export {};
