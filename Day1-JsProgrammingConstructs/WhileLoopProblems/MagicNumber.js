const readline = require("readline-sync"); // Import readline-sync for input

function findMagicNumber() {
  let low = 1,
    high = 100,
    mid;
  console.log("Think of a number between 1 and 100.");

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    let response;

    // Keep asking until the user provides a valid input
    while (true) {
      response = readline
        .question(
          `Is your number ${mid}?\nEnter 'l' if it's lower, 'h' if it's higher, or 'y' if correct: `
        )
        .toLowerCase();

      if (response === "l" || response === "h" || response === "y") break;
      console.log("Invalid input. Please enter 'l', 'h', or 'y'.");
    }

    if (response === "y") {
      console.log(`Your magic number is ${mid}! 🎉`);
      return;
    } else if (response === "l") {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
}

findMagicNumber();
