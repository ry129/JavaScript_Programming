let a = parseInt(process.argv[2], 10);
let b = parseInt(process.argv[2], 10);
let c = parseInt(process.argv[2], 10);

// Calculations:
let calculation1 = a + b * c;
let calculation2 = (a % b) + c;
let calculation3 = c + a / b;
let calculation4 = a * b + c;

// Displaying the maximum and minimum
if (
  calculation1 > calculation2 &&
  calculation1 > calculation3 &&
  calculation1 > calculation4
) {
  console.log("Maximum : ", calculation1);
} else if (
  calculation2 > calculation1 &&
  calculation2 > calculation3 &&
  calculation2 > calculation4
) {
  console.log("Maximum : ", calculation2);
} else if (
  calculation3 > calculation1 &&
  calculation3 > calculation2 &&
  calculation3 > calculation4
) {
  console.log("Maximum : ", calculation3);
} else {
  console.log("Maximum : ", calculation4);
}

if (
  calculation1 < calculation2 &&
  calculation1 < calculation3 &&
  calculation1 < calculation4
) {
  console.log("Minimum : ", calculation1);
} else if (
  calculation2 < calculation1 &&
  calculation2 < calculation3 &&
  calculation2 < calculation4
) {
  console.log("Minimum : ", calculation2);
} else if (
  calculation3 < calculation1 &&
  calculation3 < calculation2 &&
  calculation3 < calculation4
) {
  console.log("Minimum : ", calculation3);
} else {
  console.log("Minimum : ", calculation4);
}
