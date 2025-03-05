const emailRegex = /^abc@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;

console.log(emailRegex.test("abc@bridgelabz.co"));
console.log(emailRegex.test("abc@bridgelabz.co.in"));
console.log(emailRegex.test("abc@bridgelabz.co.us"));
console.log(emailRegex.test("xyz@bridgelabz.co.in"));
console.log(emailRegex.test("abcxyz@bridgelabz.co"));
console.log(emailRegex.test("abc@xyz.co.in"));
console.log(emailRegex.test("abc@bridgelabzcom"));
console.log(emailRegex.test("abc@bridgelabz.org"));
