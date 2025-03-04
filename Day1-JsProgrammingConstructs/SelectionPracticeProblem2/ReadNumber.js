let number = parseInt(process.argv[2], 10);

if (number == 1) {
  console.log("Unity");
} else if (number == 10) {
  console.log("Ten");
} else if (number == 100) {
  console.log("Hundred");
} else if (number == 1000) {
  console.log("Thousand");
} else if (number == 100000) {
  console.log("Lakh");
} else if (number == 10000000) {
  console.log("Crore");
}
