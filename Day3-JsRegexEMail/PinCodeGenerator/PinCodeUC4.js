const Regex = /^[1-9][0-9]{2}\s?[0-9]{3}$/;
let check = Regex.test("400 088");
let check2 = Regex.test("400088");
console.log(check);
console.log(check2);
