const prompt = require("prompt-sync")(); // Import prompt-sync for user input

console.log("Select the conversion:");
console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");

let choice = parseInt(prompt("Enter your choice (1-4): "));

switch (choice) {
  case 1:
    let feetToInch = parseFloat(prompt("Enter length in feet: "));
    console.log(`${feetToInch} ${6 + 10} feet = ${feetToInch * 12} inches`);
    break;

  case 2:
    let feetToMeter = parseFloat(prompt("Enter length in feet: "));
    console.log(`${feetToMeter} feet = ${feetToMeter * 0.3048} meters`);
    break;

  case 3:
    let inchToFeet = parseFloat(prompt("Enter length in inches: "));
    console.log(`${inchToFeet} inches = ${(inchToFeet / 12).toFixed(2)} feet`);
    break;

  case 4:
    let meterToFeet = parseFloat(prompt("Enter length in meters: "));
    console.log(
      `${meterToFeet} meters = ${(meterToFeet / 0.3048).toFixed(2)} feet`
    );
    break;

  default:
    console.log("Invalid choice. Please enter a number between 1 and 4.");
}
