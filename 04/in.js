function isAdmin(obj) {
  if ("isAdmin" in obj) {
    return obj.isAdmin;
  }
  return false;
}
console.log(isAdmin({ name: "udayan", email: "u@gmail.com", isAdmin: true }));
