let array = Array.from(
  { length: 5 },
  () => Math.floor(Math.random() * 900) + 100
);

// Calculating the maximum element in 5 numbers
let max = 0;
for (let i = 0; i < 5; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

// Calculating the minimum element in 5 numbers
let min = Infinity;
for (let i = 0; i < 5; i++) {
  if (array[i] < min) {
    min = array[i];
  }
}

// Displaying the output
console.log("The maximum element in the 5 is: ", max);
console.log("The minimum element in the 5 is: ", min);
