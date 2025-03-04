function findTriplets(arr) {
  let found = false;
  let n = arr.length;

  console.log("Triplets that sum to zero:");

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          console.log(`[${arr[i]}, ${arr[j]}, ${arr[k]}]`);
          found = true;
        }
      }
    }
  }

  if (!found) {
    console.log("No triplet found.");
  }
}

// Example input array
let arr = [0, -1, 2, -3, 1, -2, 3];
findTriplets(arr);
