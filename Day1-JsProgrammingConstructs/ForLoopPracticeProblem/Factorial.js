const num = parseInt(process.argv[2], 10);

if (isNaN(num) || num < 0) {
  console.log("Factorial is not defined for negative number");
} else {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  console.log(`The factorial of ${num} is ${fact}`);
}
