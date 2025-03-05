const Regex = /^[1-9][0-9]{5}/;
let check = Regex.test("A400088");
let check2 = Regex.test("400088");
console.log(check);
console.log(check2);
