const n = parseInt(process.argv[2], 10);

if (isNaN(n)) {
  console.log("Please provide a valid number.");
} else if (n <= 1) {
  console.log(`${n} is not a prime number.`);
} else {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break; // No need to check further
    }
  }
  console.log(`${n} is ${isPrime ? "a prime" : "not a prime"} number.`);
}
