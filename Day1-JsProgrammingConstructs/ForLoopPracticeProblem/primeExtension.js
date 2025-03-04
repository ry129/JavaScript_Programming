const start = parseInt(process.argv[2], 10);
const end = parseInt(process.argv[3], 10);

if (isNaN(start) || isNaN(end) || start <= 0 || end <= 0 || start > end) {
  console.log("Provide a valid number");
} else {
  console.log(`Prime Numbers between ${start} and ${end} is : `);

  for (let num = start; num <= end; num++) {
    if (isPrime(num)) {
      console.log(num);
    }
  }
}
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
