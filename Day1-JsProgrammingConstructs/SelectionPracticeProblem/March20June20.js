// Read command line arguments
let month = parseInt(process.argv[2], 10);
let day = parseInt(process.argv[3], 10);

// Check if the date falls between March 20 and June 20
let isValid =
  (month === 3 && day >= 20) ||
  (month > 3 && month < 6) ||
  (month === 6 && day <= 20);

// Print the result
console.log(isValid);
