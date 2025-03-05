const emailRegex =
  /^abc([_\+\-.][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;

console.log(emailRegex.test("abc@bridgelabz.co"));
console.log(emailRegex.test("abc.xyz@bridgelabz.co.in"));
console.log(emailRegex.test("abc-xyz@bridgelabz.co.us"));
console.log(emailRegex.test("abc_xyz@bridgelabz.co"));
console.log(emailRegex.test("abc+123@bridgelabz.co.in"));
console.log(emailRegex.test("xyz@bridgelabz.co.in"));
console.log(emailRegex.test("abc#xyz@bridgelabz.co"));
console.log(emailRegex.test("abc.@bridgelabz.co"));
console.log(emailRegex.test("abc_@bridgelabz.co"));
console.log(emailRegex.test("abc-@bridgelabz.co"));
