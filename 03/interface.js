//interface in ts are similar to type but we can define methods in inteface
var udayan = {
    id: "a123",
    name: "udayankar",
    age: 17,
    isLoggedIn: function () {
        return true;
    },
    eats: function (food) {
        return food;
    },
};
var res = udayan.eats("rajmachawal");
console.log(res);
