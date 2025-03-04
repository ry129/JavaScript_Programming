const readline = require("readline-sync");

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
  return parseInt(num.toString().split("").reverse().join(""));
}

// Main function to check both conditions
function checkPrimeAndPalindrome(num) {
  if (!isPrime(num)) {
    console.log(`${num} is not a prime number.`);
    return;
  }

  let palindrome = getPalindrome(num);
  console.log(`${num} is prime. Its palindrome is ${palindrome}.`);

  if (isPrime(palindrome)) {
    console.log(`The palindrome ${palindrome} is also prime! ✅`);
  } else {
    console.log(`The palindrome ${palindrome} is NOT prime. ❌`);
  }
}

// Take input from user
const num = parseInt(readline.question("Enter a number:"), 10);
checkPrimeAndPalindrome(num);
