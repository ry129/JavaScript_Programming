function primeFactors(n) {
  let factors = [];

  // Step 1: Remove factors of 2
  while (n % 2 === 0) {
    factors.push(2);
    n = Math.floor(n / 2);
  }

  // Step 2: Check for odd factors from 3 to sqrt(n)
  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n = Math.floor(n / i);
    }
  }

  // Step 3: If n is still greater than 2, it's a prime number itself
  if (n > 2) {
    factors.push(n);
  }

  return factors;
}

// Take user input from command line
const n = parseInt(process.argv[2], 10);

if (isNaN(n) || n <= 1) {
  console.log("Please enter a valid integer greater than 1.");
} else {
  const factors = primeFactors(n);
  console.log(`Prime factors of ${n}: ${factors}`);
}
