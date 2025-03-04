function findRepeatedDigits() {
  let repeatedNumbers = [];

  for (let i = 10; i < 100; i++) {
    let tens = Math.floor(i / 10); // Get the tens place digit
    let ones = i % 10; // Get the ones place digit

    if (tens === ones) {
      // Check if both digits are the same
      repeatedNumbers.push(i);
    }
  }

  return repeatedNumbers;
}

// Call the function and display output
let result = findRepeatedDigits();
console.log("Numbers with repeated digits:", result);
