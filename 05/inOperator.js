var o1 = {
    name: "rahul",
    gender: "male",
};
function getGender(obj) {
    if ("gender" in obj) {
        return obj.gender;
    }
    return "non";
}
console.log(getGender(o1));
