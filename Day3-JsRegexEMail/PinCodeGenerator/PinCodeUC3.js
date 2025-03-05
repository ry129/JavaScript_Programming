const Regex = /[1-9][0-9]{5}$/;
let check = Regex.test("40088B");
let check2 = Regex.test("400088");
console.log(check);
console.log(check2);
