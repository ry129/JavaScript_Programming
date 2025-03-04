function primeFactorization(N) {
  if (N <= 1) {
    console.log("Enter a number greater than 1.");
    return;
  }

  console.log(`Prime factors of ${N} are:`);

  // Step 1: Print the number of 2s that divide N
  while (N % 2 === 0) {
    console.log(2);
    N /= 2;
  }

  // Step 2: Check for odd factors from 3 to sqrt(N)
  for (let i = 3; i * i <= N; i += 2) {
    while (N % i === 0) {
      console.log(i);
      N /= i;
    }
  }

  // Step 3: If N is still greater than 1, then it's a prime factor
  if (N > 1) {
    console.log(N);
  }
}

// Example Usage
const num = parseInt(process.argv[2], 10);
primeFactorization(num);
