function generateRandomNumbers(count, min, max) {
  let numbers = [];
  for (let i = 0; i < count; i++) {
    numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return numbers;
}

function findSecondLargestAndSmallestSorted(arr) {
  arr.sort((a, b) => a - b);
  console.log("Sorted Numbers:", arr);

  let secondMin = arr[1];
  let secondMax = arr[arr.length - 2];

  return { secondMax, secondMin };
}

const numbers = generateRandomNumbers(10, 100, 999);
console.log("Generated Numbers:", numbers);

const { secondMax, secondMin } = findSecondLargestAndSmallestSorted(numbers);

console.log(`Second Largest (Sorted): ${secondMax}`);
console.log(`Second Smallest (Sorted): ${secondMin}`);
