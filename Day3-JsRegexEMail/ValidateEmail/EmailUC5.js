const emailRegex =
  /^abc([_\+\-.][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;

console.log(emailRegex.test("abc@bridgelabz.co"));
console.log(emailRegex.test("abc.xyz@bridgelabz.co.in"));
console.log(emailRegex.test("abc-xyz@bridgelabz.co.us"));
console.log(emailRegex.test("abc_xyz@bridgelabz.co.uk"));
console.log(emailRegex.test("abc+test@bridgelabz.co.au"));
console.log(emailRegex.test("abc-test@bridgelabz.co.jp"));
console.log(emailRegex.test("xyz@bridgelabz.co.in"));
console.log(emailRegex.test("abc#xyz@bridgelabz.co"));
console.log(emailRegex.test("abc.@bridgelabz.co"));
console.log(emailRegex.test("abc@bridgelabz.com"));
console.log(emailRegex.test("abc@bridgelabz.co.abc"));
console.log(emailRegex.test("abc@bridgelabzco.in"));
