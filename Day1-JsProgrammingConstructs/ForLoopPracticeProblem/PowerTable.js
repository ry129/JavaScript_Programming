const prompt = require("prompt-sync")();

let n = prompt("enter a number : ");

if (isNaN(n) || n < 0) {
  console.log("Enter a Valid Number");
} else {
  console.log(`Powers of 2 up to 2^${n}:`);
  for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${2 ** i}`);
  }
}
